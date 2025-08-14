"use server"

import { auth } from "@/auth"
import { base_url } from "@/lib/constants";
import prisma from "@/lib/prisma";
import { headers } from "next/headers"
type reel ={
     id: string,
      caption:string,
      media_url: string,
      media_type: string,
      thumbnail_url:string,
      permalink?:string
}
export const GetReels = async()=>{
    const session = await auth.api.getSession({
        headers:await headers()
    });
    if(!session) return [];
    const instagram = await prisma.instagram.findUnique({
        where:{user_id:session.user.id}
    });
    if(!instagram) return []
    const url = base_url+'/me/media?fields=id,caption,media_type,thumbnail_url,permalink&limit=5&access_token='+instagram.access_token;
    const req = await fetch(url)
    if(!req.ok) return []
    const response = await req.json();
    const data:reel[] = response?.data||[]
    console.log(data)
    return data
}