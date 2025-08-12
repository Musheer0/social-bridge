"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme,theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild >
       <div className="flex items-center w-full gap-2">
      {theme==="light" ?  <Sun size={16} className=" scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />:           <Moon size={16} className=" scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />}
      <p className="group-data-[collapsible=icon]:hidden">{theme}</p>
       </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
