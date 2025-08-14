// store/useProductTemplate.ts
import { IGDmButton } from '@/types/ig-msg-templates'
import { AutomationType, templateType } from '@prisma/client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


type State = {
  Title?: string
  Text?: string
  ProductImage?: string
  Buttons: IGDmButton[]
  TemplateType:templateType|null
  Keyword: string
  AutomationType: AutomationType | null
  PostId: string | null,
    post_url?:string,

}

type Actions = {
  setTitle: (title?: string) => void
  setText: (text?: string) => void
  setProductImage: (url?: string) => void
  setButtons: (buttons: IGDmButton[]) => void
  addButton: (button: IGDmButton) => void
  deleteButton: (index: number) => void
  modifyButton: (index: number, newButton: IGDmButton) => void
  setTemplateType: (type: templateType) => void
  setKeyword: (keyword: string) => void
  setAutomationType: (type: AutomationType) => void
  setPostId: (postId: string | null) => void,
  setPoster:(poster:string)=>void
    resetAll: () => void

}
const defaultState: State = {
  Title: 'Product Title',
  Text: 'Hi from social bridge',
  ProductImage:
    'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  Buttons: [],
  TemplateType: 'button',
  Keyword: '',
  AutomationType: null,
  PostId: null,
  post_url:undefined
}

export const useAutomationDraft = create<State & Actions>()(
  persist(
    (set) => ({
      Title: 'Product Title',
      Text: 'Hi from social bridge',
      ProductImage:'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Buttons: [],
      TemplateType: 'button',
      Keyword: '',
      AutomationType: null,
      PostId: null,
      post_url:undefined,
      setTitle: (Title) => set({ Title }),
      setText: (Text) => set({ Text }),
      setProductImage: (ProductImage) => set({ ProductImage }),
      setButtons: (Buttons) => set({ Buttons }),
      addButton: (button) =>
        set((state) => ({ Buttons: [...state.Buttons, button] })),
      deleteButton: (index) =>
        set((state) => ({
          Buttons: state.Buttons.filter((_, i) => i !== index),
        })),
      modifyButton: (index, newButton) =>
        set((state) => ({
          Buttons: state.Buttons.map((btn, i) =>
            i === index ? newButton : btn
          ),
        })),
      setTemplateType: (TemplateType) => set({ TemplateType }),
      setKeyword: (Keyword) => set({ Keyword }),
      setAutomationType: (AutomationType) => set({ AutomationType }),
      setPostId: (PostId) => set({ PostId }),
       resetAll: () => set(defaultState),
       setPoster(poster) {
         set({post_url:poster})
       },
    }),
    {
      name: 'product-template-store', // localStorage key
    }
  )
)
