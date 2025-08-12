/* eslint-disable  @typescript-eslint/no-explicit-any */
import { base_url, messages_route, version } from "@/lib/constants";
import { field_type } from "@/types/ig-webhook-response";

export const sendDm = async(type:field_type,target_id:string,owner_id:string,reel_id:string,keyword:string)=>{
   const getPost = ()=>{};
   const reply = 'Test successfull'
   //TODO CONSUME CREDITS
   if(type==='comments'){
        const response = await SendDmFromComment(owner_id,target_id,reply,process.env.TOKEN!)
        return response
   }
   if(type==='messages'){
        const response = await SendDmFromMessage(owner_id,target_id,reply,process.env.TOKEN!)
        return response
   }
}

export const SendDmFromComment = async(sender:string,recipient:string,content:any,bearer:string)=>{
    const url = base_url+'/'+sender+messages_route;
    const body = JSON.stringify({
        recipient:{
            comment_id:recipient
        },
        message:{
            text:content
        }
    })
    const headers = {
                  Authorization: `Bearer ${bearer}`,
            'Content-Type': 'application/json',
            }
    try {
        const response = await fetch(url,{
            method:'POST',
            headers,
            body
        })
        if(response.ok){
        return {success:true}
        }
        console.log('response faild')
   
        return {success:false}

    } catch (error) {
        console.error(error)
        return {success:false}
    }
}
export const SendDmFromMessage = async(sender:string,recipient:string,content:any,bearer:string)=>{
    const url = base_url+version+sender+messages_route;
    const body = JSON.stringify({
        recipient:{
            id:recipient
        },
        message:{
            text:content
        }
    })
    const headers = {
                  Authorization: `Bearer ${bearer}`,
            'Content-Type': 'application/json',
            }
    try {
        const response = await fetch(url,{
            method:'POST',
            headers,
            body
        })
        if(response.ok){
        return {success:true}
        }
                return {success:false}

    } catch (error) {
        console.error(error)
        return {success:false}
    }
}