"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma";
import { headers } from "next/headers"

export const getDashboard = async()=>{
    const session = await auth.api.getSession({
        headers:await headers()
    });
    if(!session)return  null;
    const startOfWeek = new Date();
startOfWeek.setHours(0, 0, 0, 0);
startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1);

const automations = await prisma.automation.findMany({
  where: {
    user_id: session.user.id,
    createdAt: {
      gte: startOfWeek
    }
  },
  select: {
    no_of_failed_times: true,
    no_of_times_used: true
  }
});
    let success = 0;
    let failure = 0
    automations.map((a)=>{success+=a.no_of_times_used})
    automations.map((a)=>{failure+=a.no_of_failed_times})
    return {
        automations :automations.length,
        success,
        failure
    }
}