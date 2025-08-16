import prisma from "@/lib/prisma";
import { redis } from "@/redis";

export const AutomationRateLimit = async (userId: string) => {
  const key = `automations:${userId}`;

  // get current count
  const count = await redis.get<number>(key);

  if (!count) {
    // first automation today → initialize counter and set TTL until midnight
    await redis.set(key, 1, { ex: secondsUntilMidnight() });
    return;
  }

  if (count >= 2) {
    // user already created 2 automations today → check plan
    const plan = await prisma.plan.findUnique({
      where: { userId },
      select: { role: true },
    });

    if (!plan) {
      // free user → limit reached
      throw new Error("Free users can only create 1 automation per day");
    }

    // optionally handle paid users with higher limits
    await redis.incr(key);
    return;
  }

  // increment for normal case
  await redis.incr(key);
};

// helper to calculate seconds until midnight
const secondsUntilMidnight = () => {
  const now = new Date();
  const midnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1
  );
  return Math.floor((midnight.getTime() - now.getTime()) / 1000);
};
