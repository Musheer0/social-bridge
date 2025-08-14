"use client"

import { Automation } from "@prisma/client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreHorizontal, TrashIcon, EyeIcon } from "lucide-react"
import React from "react"
import { InfiniteData, useMutation, useQueryClient } from "@tanstack/react-query"
import { DeleteAutomation } from "@/actions/automations/delete-automation"
import { ToggleAutomation } from "@/actions/automations/toggle-automation-visibility"
import { AutomationsPage } from "@/types/types"
import { toast } from "sonner"

const AutomationAction = ({ automation }: { automation: Automation }) => {
  const queryClient = useQueryClient()

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: (id: string) => DeleteAutomation(id),
    onSuccess: (_, id) => {
        toast.success('deleted mutation')
      queryClient.setQueryData<InfiniteData<AutomationsPage>>(
        ["automations", "user-automations"],
        (oldData) => {
          if (!oldData) return oldData

          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              automations: page.automations.filter(
                (a: Automation) => a.id !== id
              )
            }))
          }
        }
      )
    }
  })

  // Toggle mutation
  const toggleMutation = useMutation({
    mutationFn: ({ id, disabled }: { id: string; disabled: boolean }) =>
      ToggleAutomation(id, disabled),
    onSuccess: (updated) => {
      queryClient.setQueryData<InfiniteData<AutomationsPage>>(
        ["automations", "user-automations"],
       (oldData) => {
    if (!oldData) return oldData

    return {
      ...oldData,
      pages: oldData.pages.map((page) => ({
        ...page,
        automations: page.automations.map((a) =>
          a.id === updated.id ? { ...a, disabled: updated.disabled } : a
        )
      }))
    }
  }
      )
    }
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="hover:bg-muted-foreground/5 p-2 cursor-pointer rounded-lg">
        <MoreHorizontal size={14} className="text-muted-foreground" />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right">
        <DropdownMenuGroup>
          <DropdownMenuItem
          disabled={deleteMutation.isPending}
            className="text-red-500"
            onClick={() => deleteMutation.mutate(automation.id)}
          >
            <TrashIcon className="text-red-500" /> Delete
          </DropdownMenuItem>
          <DropdownMenuItem
          disabled={toggleMutation.isPending}
            onClick={() =>
              toggleMutation.mutate({
                id: automation.id,
                disabled: !automation.disabled
              })
            }
          >
            <EyeIcon /> {automation.disabled ? "Enable" : "Disable"}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AutomationAction
