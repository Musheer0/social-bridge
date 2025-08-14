import { SendDmFromMessage } from "@/actions/instagram/dm";
import prisma from "@/lib/prisma";
import { MessageWebhookEvent } from "@/types/types";

export const HandleDmWebhookEvent = async(dataarray:MessageWebhookEvent[]|null,id:string)=>{
    if(!dataarray) return ;
    const data = dataarray[0]
    if(data.sender?.id===id) return;
    const keyword = data.message.text;
    const instagram = await prisma.instagram.findFirst({
        where:{
            ig_id:data.recipient.id
        }
    })
    if(!instagram) {
        console.log('un authorized')
        return
    }
    const automation = await prisma.automation.findFirst({
        where:{
           user_id:instagram.user_id,
            keyword:{
                equals:keyword,
                mode:'insensitive'
            },
            type:'DM',
            disabled:false
        }
    });
    if(!automation) return ;
    const response = await SendDmFromMessage(data.recipient.id,data.sender.id,automation.message,instagram.access_token)
    if(!response.success) {
           await prisma.automation.update({
        where:{
            id:automation.id
        },
        data:{
            no_of_failed_times: {increment:1}
        }
    });
        return
    }
    await prisma.automation.update({
        where:{
            id:automation.id
        },
        data:{
            no_of_times_used: {increment:1}
        }
    });
    return ;
}