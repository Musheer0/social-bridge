"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import TextareaAutosize from "react-textarea-autosize"
import { PlusIcon, EyeIcon, EditIcon, Trash2Icon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { MessagePreview } from "./message-preview"
import { CommentPreview } from "./comment-preview"
import { useHoverStore } from "@/lib/hover-store"
import { useAutomationDraft } from "@/stores/use-automation-draft"
import { AutomationTypeSwitcher } from "./automation-type-switcher"


const TextTemplate = () => {
  const {Text,Buttons,addButton,deleteButton,modifyButton,Keyword,AutomationType} = useAutomationDraft()
  const [text, setText] = useState(Text)
  const [keyword, setKeyword] = useState(Keyword)
  const [buttons, setButtons] = useState(Buttons)
  const [activeButton, setActiveButton] = useState(-1)
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const { setHoveredKeyword, setHoveredText ,setHoveredButton} = useHoverStore()
  const [previewType, setPreviewType] = useState<"message" | "comment">("message")
  useEffect(()=>{
    if(AutomationType==='DM'){
      setPreviewType('message')
    }
  },[AutomationType])
  const AddButton = () => {
    setButtons((prev) => [...prev, { title: "<BUTTON_NAME>", type: "web_url", url: "google.com" }])
    setActiveButton(buttons.length);
    addButton({ title: "<BUTTON_NAME>", type: "web_url", url: "google.com" })
  }

  const DeleteButton = (i: number) => {
    setActiveButton(-1)
    setButtons((prev) => [...prev.filter((_, f) => f !== i)])
    deleteButton(i)
  }

  const updateButtonTitle = (index: number, title: string) => {
    setButtons((prev) =>
      prev.map((b, g) => {
        if (g === index) {
          modifyButton(g,{ ...b, title })
          return { ...b, title }
        }
        return b
      }),
    )
  }

  const updateButtonUrl = (index: number, url: string) => {
    setButtons((prev) =>
      prev.map((b, g) => {
        if (g === index) {
          modifyButton(g,{ ...b, url })
          return { ...b, url }
        }
        return b
      }),
    )
  }

  return (
    <div className="w-full gap-3 flex-1 flex flex-col h-screen bg-gradient-to-br from-background to-muted/30">
      <div className="header flex items-center justify-between w-full py-4 px-6 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          <p className="font-semibold text-lg text-foreground">Text template</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={isPreviewMode ? "default" : "outline"}
            size={"sm"}
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="flex items-center gap-2"
          >
            {isPreviewMode ? <EditIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
            {isPreviewMode ? "Edit Mode" : "Preview Mode"}
          </Button>
                   <AutomationTypeSwitcher/>
          
        </div>
      </div>

      <div className="body sm:flex-row sm:gap-6 gap-10 flex-col flex w-full justify-between px-6 py-4">
        {!isPreviewMode && (
          <div className="editor flex-1 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-muted-foreground">Message Editor</h3>
              <Button className="shadow-sm hover:shadow-md px-3 transition-shadow" variant={"outline"} onClick={AddButton}>
                <PlusIcon className="w-4 h-4 mr-2" /> Add Button
              </Button>
            </div>

            <div
              className="bg-card rounded-xl border border-border shadow-sm p-4 transition-all duration-200 hover:shadow-md"
              onMouseEnter={() => setHoveredKeyword(true)}
              onMouseLeave={() => setHoveredKeyword(false)}
            >
              <label className="block text-sm font-medium text-foreground mb-2">Trigger Keyword</label>
              <Input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="focus:ring-2 focus:ring-ring focus:border-transparent"
                placeholder="Enter trigger keyword"
              />
              <p className="text-xs text-muted-foreground mt-1">
                This keyword appears as the user message that triggers your response
              </p>
            </div>

            <div
              className="bg-card rounded-xl border border-border shadow-sm p-4 transition-all duration-200 hover:shadow-md"
              onMouseEnter={() => setHoveredText(true)}
              onMouseLeave={() => setHoveredText(false)}
            >
              <label className="block text-sm font-medium text-foreground mb-2">Message Text</label>
              <TextareaAutosize
                value={text}
                
                onChange={(e) => setText(e.currentTarget.value)}
                className="w-full border border-border bg-background text-foreground p-3 rounded-lg resize-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                minRows={3}
                maxRows={6}
                placeholder="Enter your message"
              />
            </div>

            {activeButton >= 0 && activeButton <= buttons.length - 1 && (
              <div
              onMouseEnter={() => setHoveredButton(activeButton)}
              onMouseLeave={() => setHoveredButton(-1)}
              className="button_editor flex flex-col gap-4 p-4 rounded-xl border border-border bg-card shadow-sm relative">
                <div className="absolute -top-3 left-4  px-2">
                
                  <p className="text-sm font-medium text-muted-foreground bg-background">Edit Button</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Button Title</label>
                  <Input
                    value={buttons[activeButton].title}
                    onChange={(e) => updateButtonTitle(activeButton, e.target.value)}
                    placeholder="Button title"
                    className="focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Button URL</label>
                  <Input
                    onChange={(e) => updateButtonUrl(activeButton, e.target.value)}
                    value={buttons[activeButton].url}
                    placeholder="Button url"
                    className="focus:ring-2 focus:ring-ring focus:border-transparent"
                  />
                </div>
                 <Button
                      onClick={() => DeleteButton(activeButton)}
                      size={"sm"}
                      variant={"ghost"}
                      className="w-fit text-destructive hover:bg-destructive/10"
                    >
                        Delete Button
                      <Trash2Icon className="w-4 h-4" />
                    </Button>
              </div>
            )}
          </div>
        )}

        <div
          className={cn(
            "preview mx-auto p-6 border border-border rounded-2xl flex flex-col gap-4 bg-card shadow-lg",
            isPreviewMode ? "w-full max-w-2xl" : "sm:w-96 w-full",
          )}
        >
          <div className="flex items-center justify-between">
            <p className="font-medium text-muted-foreground">Preview</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
                <Button
                disabled={AutomationType==='DM'}
                  variant={previewType === "message" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setPreviewType("message")}
                  className="text-xs h-7"
                >
                  Message
                </Button>
                <Button
                disabled={AutomationType==='DM'}
                  variant={previewType === "comment" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setPreviewType("comment")}
                  className="text-xs h-7"
                >
                  Comment
                </Button>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Live Preview
              </div>
            </div>
          </div>

          {AutomationType && AutomationType==='DM'? (
            <MessagePreview
              keyword={keyword}
              text={text}
              buttons={buttons}
              activeButton={activeButton}
              isPreviewMode={isPreviewMode}
              onDeleteButton={DeleteButton}
              onSetActiveButton={setActiveButton}
            />
          ) : (
            <CommentPreview text={keyword} />
          )}
        </div>
      </div>
    </div>
  )
}

export default TextTemplate
