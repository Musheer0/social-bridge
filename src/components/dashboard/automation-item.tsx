import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, Clock } from "lucide-react"

interface AutomationItemProps {
  automation: {
    id: number
    name: string
    status: string
    triggeredAt: string
    platform: string
  }
}

export function AutomationItem({ automation }: AutomationItemProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle className="h-4 w-4 text-emerald-500" />
      case "failed":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-amber-500" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "success":
        return (
          <Badge
            variant="secondary"
            className="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-300 dark:border-emerald-800"
          >
            Success
          </Badge>
        )
      case "failed":
        return (
          <Badge
            variant="secondary"
            className="bg-red-50 text-red-700 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800"
          >
            Failed
          </Badge>
        )
      default:
        return (
          <Badge
            variant="secondary"
            className="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800"
          >
            Pending
          </Badge>
        )
    }
  }

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg hover:bg-muted/30 transition-all duration-200 hover:shadow-sm">
      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
        {getStatusIcon(automation.status)}
        <div>
          <h3 className="font-medium text-foreground">{automation.name}</h3>
          <p className="text-sm text-muted-foreground">{automation.platform}</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <span className="text-sm text-muted-foreground">{automation.triggeredAt}</span>
        {getStatusBadge(automation.status)}
      </div>
    </div>
  )
}
