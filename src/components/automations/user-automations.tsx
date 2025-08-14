"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { getUserAutomation } from "@/actions/automations/get-user-automations"
import { AutomationCard } from "./automation-card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function AutomationsList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteQuery({
    queryKey: ["automations", "user-automations"],
    queryFn: ({ pageParam }: { pageParam: string | null }) => getUserAutomation(pageParam),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    initialPageParam: null,
    refetchOnWindowFocus: false,
  })

  if (status === "pending") {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    )
  }

  if (status === "error") {
    return (
      <div className="text-center py-12">
        <p className="text-destructive">Error loading automations</p>
      </div>
    )
  }

  const automations = data?.pages.flatMap((p) => p.automations) ?? []

  if (automations.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No automations found</p>
      </div>
    )
  }

  return (
    <div className="space-y-6 p-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {automations.map((automation, index) => (
          <AutomationCard key={automation.id} automation={automation} index={index + 1} />
        ))}
      </div>

      {hasNextPage && (
        <div className="flex justify-center pt-6">
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage} variant="outline" className="min-w-32">
            {isFetchingNextPage ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Loading...
              </>
            ) : (
              "Load more"
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
