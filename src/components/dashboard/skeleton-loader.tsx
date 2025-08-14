import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function StatsCardSkeleton() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="h-4 w-24 bg-muted animate-pulse rounded" />
        <div className="h-5 w-5 bg-muted animate-pulse rounded" />
      </CardHeader>
      <CardContent>
        <div className="h-8 w-16 bg-muted animate-pulse rounded mb-1" />
        <div className="h-3 w-20 bg-muted animate-pulse rounded" />
      </CardContent>
    </Card>
  )
}

export function AutomationItemSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center space-x-3 mb-2 sm:mb-0">
        <div className="h-4 w-4 bg-muted animate-pulse rounded-full" />
        <div>
          <div className="h-4 w-32 bg-muted animate-pulse rounded mb-1" />
          <div className="h-3 w-24 bg-muted animate-pulse rounded" />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-2">
        <div className="h-3 w-16 bg-muted animate-pulse rounded" />
        <div className="h-5 w-16 bg-muted animate-pulse rounded" />
      </div>
    </div>
  )
}

export function UpgradeBannerSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-muted animate-pulse rounded-full" />
            <div>
              <div className="h-5 w-32 bg-muted animate-pulse rounded mb-2" />
              <div className="h-4 w-48 bg-muted animate-pulse rounded" />
            </div>
          </div>
          <div className="h-9 w-24 bg-muted animate-pulse rounded" />
        </div>
      </CardContent>
    </Card>
  )
}
