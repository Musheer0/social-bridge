"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { BetterAuthError } from "better-auth"
import { headers } from "next/headers"

export const DeleteAutomation = async (automationId: string) => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session?.user) throw new BetterAuthError("un authorized");

  const automation = await prisma.automation.findUnique({
    where: { id: automationId,user_id:session.user.id }
  });

  if (!automation || automation.user_id !== session.user.id) {
    throw new BetterAuthError("not found or unauthorized");
  }

  await prisma.automation.delete({
    where: { id: automationId,user_id:session.user.id }
  });

  return { success: true };
};
