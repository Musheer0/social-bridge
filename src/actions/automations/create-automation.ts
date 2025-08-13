"use client"

import { auth } from "@/auth"
import prisma from "@/lib/prisma"
import { IGDmButton } from "@/types/ig-msg-templates"
import { AutomationType, templateType } from "@prisma/client"
import { BetterAuthError } from "better-auth"
import { headers } from "next/headers"

export type createAutomationProps = { 
  template:templateType,
  automation:AutomationType,
  text?:string,
  description?:string,
  buttons:IGDmButton[],
  img?:string,
  keyword:string,
  reply?:string,
  postId?:string
}

const getTemplate = (props:createAutomationProps)=>{
 const isPlainTxt = props.template==='button' && props.buttons.length==0;
    const template_elements = props.template==='generic' ? {
        elements : [
            {
                title:props.text,
                  image_url: props.img,
                subtitle: props.description,
                buttons: props.buttons
            }
        ]
    }:{
        text:props.text,
        buttons:props.buttons
    }
    const template = isPlainTxt ? {
        message:{
            text:props.text
        }
    }:{
        message:{
            attachment:{
                type: "template",
                payload:{
                    template_type:props.template,
                     ...template_elements
                }
            }
        }
    }
    return template
}
export const CreateAutomation = async(props:createAutomationProps)=>{
    const req = await auth.api.getSession({
        headers:await headers()
    });
      if (!req?.user) throw new BetterAuthError("un authorized")

   const template = getTemplate(props);
   const automation = await prisma.automation.create({
    data:{
        user_id:req.user.id,
        template:props.template,
        type:props.automation,
        keyword:props.keyword,
        post_id:props.postId,
        reply:props.reply,
        message:template
    }
   });
   return automation
}