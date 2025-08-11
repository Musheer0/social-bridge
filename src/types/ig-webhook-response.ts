
export type Commentchange = {
field: 'comments',
          value: {
            from: { id: string, username: string },
            media: { id: string, media_product_type: string },
            id: string,
            text: string
          }
}
export type field_type = 'comments'|'messages'
export type Msgchange = 
        {
            sender: { id: string },
            recipient: { id: string },
            timestamp: string,
            message: { mid: string, text: string }
          }[]
        
export type changes = Commentchange[]
export type entry = {
    id:string,
    time:number,
    changes?:changes,
    messaging?:Msgchange
}
export type entries = entry[]

export type IGUser = {
  id:string,
  username:string,
  account_type:string,
  profile_picture_url:string
}