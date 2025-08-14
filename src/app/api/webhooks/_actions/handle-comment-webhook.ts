import { SendDmFromComment} from "@/actions/instagram/dm";
import prisma from "@/lib/prisma";
import { CommentWebhookEvents, MessageWebhookEvent } from "@/types/types";
[
  {
    value: {
      from: { id: '1112158507282086', username: 'man_01e' },
      media: { id: '18001252139401180', media_product_type: 'REELS' },
      id: '18075463858966802',
      text: 'Yes'
    },
    field: 'comments'
  }
]
export const HandleCommentWebhookEvent = async(dataarray:CommentWebhookEvents|null,id:string)=>{
    if(!dataarray) return ;
    const data = dataarray[0].value
    if(data.from.id===id) return;
    const keyword = data.text;
    const instagram = await prisma.instagram.findFirst({
        where:{
            ig_id:id
        }
    })
    if(!instagram) {
        console.log('un authorized')
        return
    }
    const automation = await prisma.automation.findFirst({
        where:{
           user_id:instagram.user_id,
            keyword,
            type:'POST',
            post_id:data.media.id,
            disabled:false
        }
    });
    if(!automation) return ;
    const response = await SendDmFromComment(instagram.ig_id,data.id,automation.message,instagram.access_token)
    if(!response.success){
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