"use client"

import type React from "react"
import { Zap, AlertTriangle, CheckCircle, Calendar } from "lucide-react"
import { StatsCard } from "@/components/dashboard/stats-card"
import { UpgradeBanner } from "@/components/dashboard/upgrade-banner"
import { ComingSoonCard } from "@/components/dashboard/commin-soon-card"
import { StatsCardSkeleton } from "@/components/dashboard/skeleton-loader"

interface DashboardStats {
  automations: number
  success: number
  failure: number
}

interface DashboardLayoutProps {
  stats: DashboardStats | null|undefined
  loading?: boolean
  children?: React.ReactNode
}

export function DashboardLayout({ stats, loading = false, children }: DashboardLayoutProps) {
  const currentDate = new Date()
  const sevenDaysAgo = new Date(currentDate.getTime() - 7 * 24 * 60 * 60 * 1000)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  return (
    <div className="min-h-screen p-4 bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <UpgradeBanner />
        </div>

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-5 w-5 text-muted-foreground" />
            <h1 className="text-2xl font-bold tracking-tight">Dashboard Overview</h1>
          </div>
          <p className="text-muted-foreground">
            Last 7 days report • {formatDate(sevenDaysAgo)} - {formatDate(currentDate)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {loading ? (
            <>
              <StatsCardSkeleton />
              <StatsCardSkeleton />
              <StatsCardSkeleton />
              <StatsCardSkeleton />
            </>
          ) : (
            <>
              <StatsCard
                title="Total Automations"
                value={stats?.automations ?? 0}
                description="Active workflows"
                icon={Zap}
                iconColor="text-blue-500"
              />
              <StatsCard
                title="Successful Runs"
                value={stats?.success ?? 0}
                description="Completed executions"
                icon={CheckCircle}
                iconColor="text-emerald-500"
              />
              <StatsCard
                title="Failed Runs"
                value={stats?.failure ?? 0}
                description="Failed executions"
                icon={AlertTriangle}
                iconColor="text-red-500"
              />
              <ComingSoonCard />
            </>
          )}
        </div>

        {children}
      </main>
    </div>
  )
}
