"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { BetterAuthError } from "better-auth"
import { headers } from "next/headers"

export const ToggleAutomation = async (automationId: string, disabled: boolean) => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session?.user) throw new BetterAuthError("un authorized");

  const automation = await prisma.automation.findUnique({
    where: { id: automationId },
    select: { id: true, user_id: true }
  });

  if (!automation || automation.user_id !== session.user.id) {
    throw new BetterAuthError("not found or unauthorized");
  }

  const updated = await prisma.automation.update({
    where: { id: automationId },
    data: { disabled }
  });

  return updated;
};
