import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Sparkles } from "lucide-react"

export function UpgradeBanner() {
  return (
    <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-primary/20 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
      <CardContent className="p-6 relative">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-primary/10">
              <Crown className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                Upgrade to Premium
                <Sparkles className="h-4 w-4 text-primary" />
              </h3>
              <p className="text-sm text-muted-foreground">
                Unlock unlimited automations, image uploads, and priority support
              </p>
            </div>
          </div>
          <Button className="w-full px-4 sm:w-auto bg-primary hover:bg-primary/90">Upgrade Now</Button>
        </div>
      </CardContent>
    </Card>
  )
}
