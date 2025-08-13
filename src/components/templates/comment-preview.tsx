"use client"
import { Heart } from "lucide-react"
import { cn } from "@/lib/utils"
import { useHoverStore } from "@/lib/hover-store"

interface CommentPreviewProps {
  text: string
  username?: string
  timestamp?: string
}

export const CommentPreview = ({ text, username = "man_01e", timestamp = "2s" }: CommentPreviewProps) => {
  const { hoveredKeyword } = useHoverStore()

  return (
    <div className="bg-secondary/80 dark:bg-secondary/40 rounded-2xl p-4 text-secondary-foreground min-h-[300px]">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <div className="w-8 h-0.5 bg-muted-foreground/30 rounded-full"></div>
      </div>

      <h3 className="text-center text-lg font-medium mb-6 text-foreground">Comments</h3>

      {/* Comment */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-medium text-white">👤</span>
        </div>

        {/* Comment Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium text-sm text-foreground">{username}</span>
            <span className="text-muted-foreground text-xs">{timestamp}</span>
          </div>

          <div
            className={cn("transition-all duration-200", hoveredKeyword && " border-4 border-red-500 rounded px-2 py-1 -mx-2 -my-1")}
          >
            <p className="text-sm leading-relaxed mb-2 text-foreground">{text || "Enter your message..."}</p>
          </div>

          <button className="text-muted-foreground text-xs hover:text-foreground transition-colors">Reply</button>
        </div>

        {/* Heart Icon */}
        <button className="text-muted-foreground hover:text-destructive transition-colors p-1">
          <Heart className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
