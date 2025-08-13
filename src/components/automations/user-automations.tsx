"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { getUserAutomation } from "@/actions/automations/get-user-automations"

export default function AutomationsList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey:['automations','user-automations'],
    queryFn:({pageParam}:{pageParam:string|null})=>getUserAutomation(pageParam),
    getNextPageParam:(lastPage)=>lastPage.nextCursor,
    initialPageParam:null
  })

  if (status === "pending") return <div>Loading...</div>
  if (status === "error") return <div>Error loading automations</div>

  const automations = data?.pages.flatMap((p) => p.automations) ?? []

  return (
    <div>
      {automations.map((a) => (
        <div key={a.id} className="border p-2 mb-2">
          <div>ID: {a.id}</div>
          <div>Created: {new Date(a.createdAt).toLocaleString()}</div>
        </div>
      ))}
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isFetchingNextPage ? "Loading more..." : "Load more"}
        </button>
      )}
    </div>
  )
}
