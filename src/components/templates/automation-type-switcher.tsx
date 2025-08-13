"use client"

import { useAutomationDraft } from "@/stores/use-automation-draft"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AutomationType } from "@prisma/client"
export function AutomationTypeSwitcher() {
  const { AutomationType, setAutomationType } = useAutomationDraft()

  // Example available types — you can pull from your backend / enums
  const types = ["DM", "COMMENT", ] as const

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
  

      {/* Dropdown to change it */}
      <Select
        value={AutomationType ?? ""}
        onValueChange={(val) => setAutomationType(val as AutomationType)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Automation Type" />
        </SelectTrigger>
        <SelectContent>
          {types.map((type) => (
            <SelectItem key={type} value={type}>
              Automation Type: {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
