"use client"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageSquare, Zap, Hash } from "lucide-react"
import { Automation } from "@prisma/client"
import AutomationAction from "./automation-action"



interface AutomationCardProps {
  automation: Automation
  index: number
}

export function AutomationCard({ automation, index }: AutomationCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    })
  }

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "message":
        return <MessageSquare className="h-3.5 w-3.5" />
      case "post":
        return <Hash className="h-3.5 w-3.5" />
      default:
        return <Zap className="h-3.5 w-3.5" />
    }
  }

  const getBorderGradient = (type: string) => {
    switch (type.toLowerCase()) {
      case "message":
        return "from-blue-500/40 via-blue-400/30 to-cyan-400/40"
      case "post":
        return "from-violet-500/40 via-purple-400/30 to-fuchsia-400/40"
      default:
        return "from-emerald-500/40 via-green-400/30 to-teal-400/40"
    }
  }

  const getNumberGradient = (type: string) => {
    switch (type.toLowerCase()) {
      case "message":
        return "from-blue-500 to-cyan-500"
      case "post":
        return "from-violet-500 to-fuchsia-500"
      default:
        return "from-emerald-500 to-teal-500"
    }
  }

  return (
    <div className={cn(
        "group cursor-pointer transition-all duration-700 ease-in-out relative",
        automation.disabled && 'opacity-50'
    )}>
      
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl bg-gradient-to-br p-px transition-all duration-500",
          "hover:shadow-lg hover:shadow-black/5",
          getBorderGradient(automation.type),
        )}
      >
        <div className="relative flex min-h-[280px] flex-col rounded-2xl bg-card p-6">
          <div className="mb-6 flex items-start justify-between">
            <span
              className={cn(
                "text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                getNumberGradient(automation.type),
              )}
            >
              {String(index).padStart(2, "0")}
            </span>
            <Badge variant="outline" className="border-border/50 bg-background/50 text-xs font-medium">
              {getTypeIcon(automation.type)}
              <span className="ml-1.5 capitalize">{automation.type}</span>
            </Badge>
          </div>

          <div className="flex-1 space-y-4">
            <div>
              <h3 className="truncate text-lg font-semibold text-foreground" title={automation.keyword}>
                {automation.keyword}
              </h3>
              <p className="text-sm text-muted-foreground/80 truncate" title={automation.template}>
                {automation.template}
              </p>
            </div>

            {automation.reply && (
              <div className="rounded-lg bg-muted/30 p-3">
                <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">{automation.reply}</p>
              </div>
            )}
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground/70">
              <Calendar className="h-3 w-3" />
              {formatDate(automation.createdAt.toLocaleString())}
            </div>
            <div className="text-xs text-muted-foreground/50 font-mono">
           <AutomationAction automation={automation}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
