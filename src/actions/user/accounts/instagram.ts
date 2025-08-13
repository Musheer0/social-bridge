"use server"

import { auth } from "@/auth"
import prisma from "@/lib/prisma";
import { headers } from "next/headers"

export const GetUserInstagram = async()=>{
    const session = await auth.api.getSession({
        headers:await headers()
    });
    if(!session) return null;
    const instagram = await prisma.instagram.findUnique({
        where:{
            user_id:session.user.id
        },
        select:{
            id:true,
            ig_id:true,
            createdAt:true
        }
    });
    return instagram
}