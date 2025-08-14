"use server";

import { RefreshLongInstagramToken } from "@/app/api/auth/callback/_actions/token-actions";
import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export const GetUserInstagram = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  if (!session) {
    return null;
  }

  const instagram = await prisma.instagram.findUnique({
    where: { user_id: session.user.id },
    select: {
      id: true,
      ig_id: true,
      createdAt: true,
      expiresAt: true,
      access_token: true
    }
  });

  if (!instagram) return {
        id: null,
        ig_id: null,
        createdAt: null,
        expiresAt: null,
        user: session.user
      
  }
      

  const now = new Date();
  const twentyDaysFromNow = new Date(now.getTime() + 20 * 24 * 60 * 60 * 1000);

  if (instagram.expiresAt && instagram.expiresAt <= twentyDaysFromNow) {
    console.log("Refreshing Instagram token…");
    const refreshed = await RefreshLongInstagramToken(instagram.access_token);
    if (refreshed) {
      await prisma.instagram.update({
        where: { id: instagram.id },
        data: {
          access_token: refreshed.token,
          expiresAt: refreshed.exp
        }
      });

      return {
        id: instagram.id,
        ig_id: instagram.ig_id,
        createdAt: instagram.createdAt,
        expiresAt: refreshed.exp,
        user: session.user
      };
    }
  }

  return {
    id: instagram.id,
    ig_id: instagram.ig_id,
    createdAt: instagram.createdAt,
    expiresAt: instagram.expiresAt,
    user: session.user
  };
};
