import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Zap, AlertTriangle, Calendar } from "lucide-react"
import { StatsCardSkeleton } from "./skeleton-loader"
import { UpgradeBanner } from "./upgrade-banner"
import { ComingSoonCard } from "./commin-soon-card"

interface DashboardProps {
  data: {
    automations: number
    success: number
    failure: number
  } | null|undefined
  loading?: boolean
}

export function Dashboard({ data, loading = false }: DashboardProps) {
  const getDateRange = () => {
    const endDate = new Date()
    const startDate = new Date()
    startDate.setDate(startDate.getDate() - 6)

    return `${startDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })} - ${endDate.toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
  }

  return (
    <div className="space-y-6 p-5">
      {/* Header */}
      {/* Upgrade Banner */}
      <UpgradeBanner />
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Last 7 days report • {getDateRange()}</p>
          </div>
        </div>
 
      </div>


      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {loading ? (
          <>
            <StatsCardSkeleton />
            <StatsCardSkeleton />
            <StatsCardSkeleton />
            <StatsCardSkeleton />
          </>
        ) : (
          <>
            <Card className="shadow-sm border-l-4 border-l-blue-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Automations</CardTitle>
                <TrendingUp className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.automations ?? 0}</div>
                <p className="text-xs text-muted-foreground">Active automations</p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-l-4 border-l-green-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Successful Triggers</CardTitle>
                <Zap className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.success ?? 0}</div>
                <p className="text-xs text-muted-foreground">Past 7 days</p>
              </CardContent>
            </Card>

            <Card className="shadow-sm border-l-4 border-l-red-500">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Failed Triggers</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{data?.failure ?? 0}</div>
                <p className="text-xs text-muted-foreground">Past 7 days</p>
              </CardContent>
            </Card>
            <ComingSoonCard />
          </>
        )}
      </div>
    </div>
  )
}
