import { Card, CardContent,  CardHeader } from "@/components/ui/card"
import AutomationsList from "../automations/user-automations"
import AutomationHeader from "../automations/automations-header"


export function RecentAutomations() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <AutomationHeader/>
      </CardHeader>
      <CardContent>
       <AutomationsList/>
      </CardContent>
    </Card>
  )
}
