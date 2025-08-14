"use client"

import { Badge } from "@/components/ui/badge"
import { SparklesIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function InstagramReelsLoader() {
  return (
    <section className="w-full h-screen relative overflow-hidden bg-background">
      <div className="max-w-6xl flex-1 rounded-2xl bg-background mx-auto h-full">
        <div className="relative flex w-full flex-col h-full">
          {/* Header Badge */}
          <div className="absolute left-4 top-6 flex items-center gap-3 flex-wrap z-10">
            <Badge variant="outline" className="rounded-[14px] text-base animate-pulse">
              <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />
              <div className="w-20 h-4 bg-muted rounded ml-2 animate-pulse" />
            </Badge>
          </div>

          {/* Title Section */}
          <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
            <div className="flex gap-2">
              <div>
                <div className="space-y-3">
                  <div className="h-8 w-96 bg-muted rounded animate-pulse" />
                  <div className="h-8 w-80 bg-muted rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Loading Status */}
          <div className="text-center py-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.1s]" />
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0.2s]" />
            </div>
            <p className="text-muted-foreground text-sm">Fetching your Instagram posts...</p>
          </div>

          {/* Carousel Loading Skeleton */}
          <div className="flex-1 flex items-center justify-center px-4">
            <div className="flex gap-8 items-center justify-center w-full max-w-5xl">
              {/* Side Cards (Partially Visible) */}
              <div className="hidden md:block opacity-40 scale-75 transform -rotate-12">
                <PostCardSkeleton />
              </div>

              <div className="hidden sm:block opacity-60 scale-90 transform -rotate-6">
                <PostCardSkeleton />
              </div>

              {/* Center Card (Main Focus) */}
              <div className="scale-100 transform rotate-0 z-10">
                <PostCardSkeleton isCenter />
              </div>

              {/* Side Cards (Partially Visible) */}
              <div className="hidden sm:block opacity-60 scale-90 transform rotate-6">
                <PostCardSkeleton />
              </div>

              <div className="hidden md:block opacity-40 scale-75 transform rotate-12">
                <PostCardSkeleton />
              </div>
            </div>
          </div>

          {/* Loading Progress */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg rounded-t-2xl bg-card px-10 border shadow-2xl flex flex-col items-center justify-center py-5 z-50">
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Loading posts...</span>
                <span>Please wait</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                <div className="h-full bg-primary rounded-full animate-pulse w-3/5 transition-all duration-2000" />
              </div>
              <div className="w-full h-10 bg-muted rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PostCardSkeleton({ isCenter = false }: { isCenter?: boolean }) {
  return (
    <div
      className={cn(
        "relative rounded-3xl overflow-hidden bg-card border border-border shadow-lg",
        "w-72 h-96 md:w-80 md:h-[500px]",
        isCenter && "shadow-2xl border-2",
      )}
    >
      {/* Selection Button Skeleton */}
      <div className="absolute top-3 left-3 z-20">
        <div className="w-16 h-8 bg-muted rounded-full animate-pulse" />
      </div>

      {/* Latest Post Badge Skeleton */}
      {isCenter && (
        <div className="absolute top-3 right-3 z-20">
          <div className="w-20 h-6 bg-destructive/80 rounded-full animate-pulse" />
        </div>
      )}

      {/* Phone Mockup Container */}
      <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted animate-pulse relative">
        {/* Phone Screen Area */}
        <div className="absolute inset-4 bg-black/90 rounded-2xl overflow-hidden">
          {/* Status Bar */}
          <div className="flex justify-between items-center p-2 bg-black">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-white/60 rounded-full" />
              <div className="w-1 h-1 bg-white/60 rounded-full" />
              <div className="w-1 h-1 bg-white/60 rounded-full" />
            </div>
            <div className="w-8 h-3 bg-white/20 rounded animate-pulse" />
          </div>

          {/* Instagram Content Area */}
          <div className="flex-1 bg-gradient-to-b from-gray-900 to-black p-3 space-y-3">
            {/* Profile Section */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full animate-pulse" />
              <div className="w-16 h-3 bg-white/20 rounded animate-pulse" />
            </div>

            {/* Content Area */}
            <div className="flex-1 bg-white/10 rounded-lg animate-pulse relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-white/20 rounded animate-pulse" />
                <div className="w-6 h-6 bg-white/20 rounded animate-pulse" />
                <div className="w-6 h-6 bg-white/20 rounded animate-pulse" />
              </div>
              <div className="w-6 h-6 bg-white/20 rounded animate-pulse" />
            </div>

            {/* Caption Lines */}
            <div className="space-y-1">
              <div className="w-full h-2 bg-white/20 rounded animate-pulse" />
              <div className="w-3/4 h-2 bg-white/20 rounded animate-pulse" />
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="bg-black p-2 flex justify-center gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-6 h-6 bg-white/20 rounded animate-pulse" />
            ))}
          </div>
        </div>

        {/* Hover Caption Area */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl p-4">
          <div className="space-y-2 mt-auto">
            <div className="w-full h-2 bg-white/30 rounded animate-pulse" />
            <div className="w-4/5 h-2 bg-white/30 rounded animate-pulse" />
            <div className="w-3/5 h-2 bg-white/30 rounded animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
