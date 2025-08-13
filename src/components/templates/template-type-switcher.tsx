// "use client"

// import { useAutomationDraft } from "@/stores/use-automation-draft"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// export function TemplateTypeSwitcher() {
//   const { TemplateType, setTemplateType } = useAutomationDraft()

//   // Example available types — you can pull from your backend / enums
//   const types = ['generic' , 'button'] as const

//   return (
//     <div className="flex flex-col gap-4 w-full max-w-sm">
  

//       {/* Dropdown to change it */}
//       <Select
//         value={TemplateType ?? ""}
//         onValueChange={(val) => setTemplateType(val as any)}
//       >
//         <SelectTrigger className="w-full">
//           <SelectValue placeholder="Select Automation Type" />
//         </SelectTrigger>
//         <SelectContent>
//           {types.map((type) => (
//             <SelectItem key={type} value={type}>
//               Template Type: {type}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   )
// }
