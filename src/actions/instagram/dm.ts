/* eslint-disable  @typescript-eslint/no-explicit-any */
import { base_url, messages_route, version } from "@/lib/constants";
export const SendDmFromComment = async(sender:string,recipient:string,content:any,bearer:string)=>{
    const url = base_url+'/'+sender+messages_route;
    const body = JSON.stringify({
        recipient:{
            comment_id:recipient
        },
        ...content
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
        const js = await response.json()
        console.log(js)
        console.log('response faild',body,url)
   
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
        ...content
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