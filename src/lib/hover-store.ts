import { create } from "zustand"

interface HoverState {
  hoveredKeyword: boolean
  hoveredButton: number
  hoveredText: boolean,
  hoverImg:boolean,
  setHoveredKeyword: (hovered: boolean) => void
  setHoveredButton: (index: number) => void
  setHoveredText: (hovered: boolean) => void,
  setHoveredImage:(hovered:boolean)=>void
}

export const useHoverStore = create<HoverState>((set) => ({
  hoveredKeyword: false,
  hoveredButton: -1,
  hoveredText: false,
  hoverImg:false,
  setHoveredKeyword: (hovered) => set({ hoveredKeyword: hovered }),
  setHoveredButton: (index) => set({ hoveredButton: index }),
  setHoveredText: (hovered) => set({ hoveredText: hovered }),
  setHoveredImage(hovered) {
    set({hoverImg:hovered})
  },
}))
