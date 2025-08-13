import { sendDm } from "@/actions/instagram/dm";
import { entries } from "@/types/ig-webhook-response";
import { NextRequest, NextResponse } from "next/server"

export const GET =(req:NextRequest)=>{
    const search_params = req.nextUrl.searchParams;
    return new NextResponse(search_params.get('hub.challenge'))
}
export const POST = async(req:NextRequest)=>{
    const body = await req.json();
    console.dir(body,{depth:null})
    const entries:entries|null = body?.entry 
    if(!entries) return NextResponse.json({success:false, message:'entry not found'},{status:400});
    const entry = entries[0]
    //if keyword triggered from comment 
    if(entry?.changes){
        //comment data
        const change = entry.changes[0]
        //comment
        const value = change.value
        //commented user
        const sender = value.id
        //creator id 
        const user_id = entries[0].id
        const response = await sendDm(change.field,sender,user_id,'eewfwefw',change.value.text)
        return NextResponse.json(response,{status:response?.success? 200:400})
    }
    // if keyword triggered from dm
    else if(entry?.messaging) {
        //msg data
        const msg = entry.messaging[0];
        //if it was triggered by owner itself
        const isReply = entry.id===msg.sender.id;
        console.log(isReply)
        if(isReply){
            return NextResponse.json({success:true});}
        const sender = msg.sender.id;
        const recipient = msg.recipient.id;
        const keyword = msg.message.text;
         const response = await sendDm("messages",sender,recipient,'',keyword)
        return NextResponse.json(response)
    }
    return NextResponse.json({success:true})
}