"use server"

import { GetLongInstagramToken, GetShortAccessToken, GetUserInfo } from "@/app/api/auth/callback/_actions/token-actions";
import { auth } from "@/auth";
import { IGUser } from "@/types/ig-webhook-response";
import { headers } from "next/headers";
import prisma from "./prisma";

export const ConnectInstagram = async(code:string)=>{
    console.log(code)
    const session = await auth.api.getSession({
        headers:await headers()
    });
    if(!session) return {error:'un-authorized session',status:401}
    const short_code = await GetShortAccessToken(code);
    const access_token = await GetLongInstagramToken(short_code?.access_token);
    if(!access_token) return {error:'un-authorized',status:401}
    const user:IGUser = await GetUserInfo(access_token.token)
    const instagram = await prisma.instagram.upsert({
        where:{
            user_id: session.user.id
        },
        update:{},
        create: {
            user_id:session.user.id,
            ig_id:user.user_id,
            access_token:access_token.token,
            expiresAt:access_token?.exp,
        }
    });
    if(instagram) return {success:true,id:instagram.id}
    return {error:'error conecting to instagram',status:401}
}