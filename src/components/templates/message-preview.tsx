"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { PenIcon, Trash2Icon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useHoverStore } from "@/lib/hover-store"
import { IGDmButton } from "@/types/ig-msg-templates"
import { useAutomationDraft } from "@/stores/use-automation-draft"



interface MessagePreviewProps {
  keyword: string
  text?: string
  buttons?: IGDmButton[]
  activeButton?: number
  isPreviewMode?: boolean
  onDeleteButton?: (index: number) => void
  onSetActiveButton?: (index: number) => void,
  isGenericTemplate?:boolean,
  title?:string,
  img?:string,
  isKeywordPreviw?:boolean
}

export const MessagePreview = ({
  keyword,
  text,
  buttons=[],
  activeButton,
  isPreviewMode,
  onDeleteButton,
  onSetActiveButton,
  title,
  img,
  isKeywordPreviw
}: MessagePreviewProps) => {
  const { hoveredKeyword, hoveredButton, hoveredText, setHoveredButton,hoverImg } = useHoverStore()
  const {AutomationType,TemplateType} = useAutomationDraft()
  const isGenericTemplate = TemplateType==='generic'
  return (
    <div className={cn(
      "chat-container bg-muted/50 rounded-xl p-4 ",
      !isKeywordPreviw ? 'min-h-[300px]':'border'
    )}>
     {AutomationType==='DM' &&  <div
        className={cn(
          "keyword text-sm bg-sky-600 text-zinc-50 w-fit ml-auto px-4 py-2 rounded-2xl rounded-br-none mb-4 shadow-sm transition-all duration-200",
          hoveredKeyword && "border-4 border-red-500 scale-105",
        )}
      >
        {keyword || "Enter keyword..."}
      </div>}

      {!isKeywordPreviw &&
      <div
        className={cn(
          "message max-w-[280px] text-sm bg-background text-foreground w-fit mr-auto rounded-2xl  shadow-sm border transition-all duration-200",
          hoveredText && "border-4 border-red-500",
          !isGenericTemplate ? 'rounded-bl-none ':'w-[280px] '
        )}
      >
       {isGenericTemplate &&  <img src={img } className={cn(
        "w-full bg-red-500 max-h-[300px] object-cover rounded-t-2xl",
        hoverImg && 'border-2 border-red-600'
       )} alt="product image" />}
       <div className="info px-4 py-3 ">
        {isGenericTemplate && <p className="break-words text-[15px] font-bold leading-relaxed">{title || "Enter your message..."}</p>}
         <p className={cn("break-words leading-relaxed", isGenericTemplate && 'text-xs text-muted-foreground')}>{text || "Enter your message..."}</p>
        <div className={cn("buttons flex flex-col w-full gap-2", buttons.length && "pt-3 mt-3 border-t border-border")}>
          {buttons.map((e, i) => (
            <React.Fragment key={i}>
              <div
                className={cn(
                  "relative group transition-all duration-200",
                  activeButton === i && "ring-2 ring-primary rounded-lg shadow-md",
                  !isPreviewMode && "hover:ring-2 hover:ring-muted-foreground/30 rounded-lg",
                  hoveredButton === i && "border-4 border-red-500",
                )}
                onMouseEnter={() => setHoveredButton(i)}
                onMouseLeave={() => setHoveredButton(-1)}
              >
                {!isPreviewMode && (
                  <div className="actions absolute p-1 top-1/2 -translate-y-1/2 translate-x-full right-2 bg-destructive/10 border border-destructive/20 group-hover:flex hidden rounded-lg shadow-sm z-10">
                    <Button
                      onClick={() => onDeleteButton && onDeleteButton(i)}
                      size={"icon"}
                      variant={"ghost"}
                      className="w-8 h-8 text-destructive hover:bg-destructive/10"
                    >
                      <Trash2Icon className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => onSetActiveButton && onSetActiveButton(i)}
                      size={"icon"}
                      variant={"ghost"}
                      className="w-8 h-8 text-primary hover:bg-primary/10"
                    >
                      <PenIcon className="w-4 h-4" />
                    </Button>
                  </div>
                )}

                <Button
                  onClick={() => !isPreviewMode && onSetActiveButton && onSetActiveButton(i)}
                  variant={"secondary"}
                  className={cn(
                    "flex  w-full text-left justify-center items-center hover:bg-muted transition-all duration-200",
                    activeButton === i && "bg-primary/10 border-primary/20 text-primary font-medium",
                    hoveredButton === i && "bg-primary/10 scale-105",
                  )}
                  disabled={isPreviewMode}
                >
                  {e.title}
                </Button>
              </div>
            </React.Fragment>
          ))}
        </div>
       </div>
      </div>
      }
    </div>
  )
}
