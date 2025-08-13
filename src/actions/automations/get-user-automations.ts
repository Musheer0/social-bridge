"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { BetterAuthError } from "better-auth"
import { headers } from "next/headers"

export const getUserAutomation = async (nextCursor?: string|null) => {
  const req = await auth.api.getSession({
    headers: await headers(),
  })
  if (!req?.user) throw new BetterAuthError("un authorized")
  const automations = await prisma.automation.findMany({
    where: {
      user_id: req.user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 11,
    skip: nextCursor ? 1 : 0,
    cursor: nextCursor
      ? {
          id: nextCursor,
        }
      : undefined,
  })
  const nextCursorId = automations.length > 10 ? automations[10].id : null
  return {
    automations,
    nextCursor: nextCursorId,
  }
}
