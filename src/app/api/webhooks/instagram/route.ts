import { NextRequest, NextResponse } from "next/server"
import { HandleDmWebhookEvent } from "../_actions/handle-dm-webhook";
import { HandleCommentWebhookEvent } from "../_actions/handle-comment-webhook";

export const GET =(req:NextRequest)=>{
    const search_params = req.nextUrl.searchParams;
    return new NextResponse(search_params.get('hub.challenge'))
}
export const POST = async(req:NextRequest)=>{
    const body = await req.json();
    // console.dir(body,{depth:null})
    const entries = body?.entry 
    if(!entries) return NextResponse.json({success:false, message:'entry not found'},{status:400});
    const entry = entries[0]
    const isMessage =entry?.messaging
    const isChanges = entry?.changes
   await HandleCommentWebhookEvent(isChanges,entry.id)
    await HandleDmWebhookEvent(isMessage,entry.id)
    return NextResponse.json({success:true})
}