import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, TrendingUp } from "lucide-react"

export function ComingSoonCard() {
  return (
    <Card className="hover:shadow-md transition-shadow duration-200 border-dashed border-2">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Analytics</CardTitle>
        <BarChart3 className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center py-4">
          <div className="text-center">
            <TrendingUp className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
            <div className="text-lg font-semibold text-muted-foreground">Coming Soon</div>
            <p className="text-xs text-muted-foreground mt-1">Advanced analytics dashboard</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
