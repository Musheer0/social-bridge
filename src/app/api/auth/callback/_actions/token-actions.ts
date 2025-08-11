"use server"

import { access_token } from "@/lib/constants";

export const GetShortAccessToken = async(code:string)=>{
    const form = new FormData();
    form.append('code',code);
     form.append('client_id', process.env.IG_CLIENT_ID!);
    form.append('client_secret', process.env.IG_CLIENT_SECRET!);
    form.append('grant_type', 'authorization_code');
    form.append('redirect_uri',`${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/callback/instagram`);
     const response = await fetch(access_token, {
        method: 'POST',
        body: form
    });
    return await response.json();
}
export const GetLongInstagramToken = async (shortToken: string) => {
    console.log('llooooong')
  const response = await fetch(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=${process.env.IG_CLIENT_SECRET!}&access_token=${shortToken}`);
    const data = await response.json();
    console.log(data)
  if(data.access_token){
    const date = new Date(data.expires_in * 1000);
    return {
        token:data.access_token,
        exp:date
    }
  }
}
export const RefreshLongInstagramToken = async (longToken: string) => {
  const response = await fetch( `${process.env.IG_BASE}/refresh_access_token?grant_type=ig_refresh_token&access_token=${longToken}`);
  const data = await response.json();
  if(data.access_token){
    const date = new Date(data.expires_in * 1000);
    return {
        token:data.access_token,
        exp:date
    }
  }
}
export const GetUserInfo = async(token:string)=>{
  if(!token){
    throw new Error('token is required')
  }
  const response = await fetch(`https://graph.instagram.com/me?fields=id,username,account_type,profile_picture_url&access_token=${token}`);
  return await response.json();
}