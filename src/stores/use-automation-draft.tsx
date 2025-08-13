// store/useProductTemplate.ts
import { IGDmButton } from '@/types/ig-msg-templates'
import { AutomationType } from '@prisma/client'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type TemplateType = 'generic' | 'button'

type State = {
  Title?: string
  Text?: string
  ProductImage?: string
  Buttons: IGDmButton[]
  TemplateType: TemplateType
  Keyword: string
  AutomationType: AutomationType | null
  PostId: string | null
}

type Actions = {
  setTitle: (title?: string) => void
  setText: (text?: string) => void
  setProductImage: (url?: string) => void
  setButtons: (buttons: IGDmButton[]) => void
  addButton: (button: IGDmButton) => void
  deleteButton: (index: number) => void
  modifyButton: (index: number, newButton: IGDmButton) => void
  setTemplateType: (type: TemplateType) => void
  setKeyword: (keyword: string) => void
  setAutomationType: (type: AutomationType) => void
  setPostId: (postId: string | null) => void
}

export const useAutomationDraft = create<State & Actions>()(
  persist(
    (set) => ({
      Title: 'Product Title',
      Text: 'Hi from social bridge',
      ProductImage:'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      Buttons: [],
      TemplateType: 'generic',
      Keyword: '',
      AutomationType: null,
      PostId: null,
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
    }),
    {
      name: 'product-template-store', // localStorage key
    }
  )
)
