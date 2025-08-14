"use client"

import { useState, useEffect } from "react"
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
import { TemplateTypeSwitcher } from "./template-type-switcher"
import PublishAutomation from "../shared/publish-automation"
import { templateType } from "@prisma/client"

interface TextTemplateProps {
  templateType: templateType
}

const TextTemplate = ({ templateType }: TextTemplateProps) => {
  const {
    Text,
    Buttons,
    addButton,
    deleteButton,
    modifyButton,
    Keyword,
    setKeyword,
    AutomationType,
    Title,
    setTitle,
    ProductImage,
    setProductImage
  } = useAutomationDraft()

  const [activeButton, setActiveButton] = useState(-1)
  const [isPreviewMode, setIsPreviewMode] = useState(false)
  const { setHoveredKeyword, setHoveredText, setHoveredButton, setHoveredImage } = useHoverStore()
  const [previewType, setPreviewType] = useState<"message" | "comment">("message")

  useEffect(() => {
    if (AutomationType === "DM") setPreviewType("message")
  }, [AutomationType])

  const AddButton = () => {
    addButton({ title: "<BUTTON_NAME>", type: "web_url", url: "google.com" })
    setActiveButton(Buttons.length) // safe now because Buttons comes from store
  }

  const DeleteButton = (i: number) => {
    setActiveButton(-1)
    deleteButton(i)
  }

  const updateButtonTitle = (index: number, title: string) => {
    modifyButton(index, { ...Buttons[index], title })
  }

  const updateButtonUrl = (index: number, url: string) => {
    modifyButton(index, { ...Buttons[index], url })
  }

  return (
    <div className="w-full gap-3 flex-1 flex flex-col h-screen bg-gradient-to-br from-background to-muted/30">
      {/* HEADER */}
      <div className="header flex flex-wrap items-center justify-between w-full py-4 px-6 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="w-2 h-8 bg-primary rounded-full"></div>
          <p className="font-semibold text-lg text-foreground">
            {templateType === "generic" ? "Product Template" : "Text Template"}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant={isPreviewMode ? "default" : "outline"}
            size="sm"
            onClick={() => setIsPreviewMode(!isPreviewMode)}
            className="flex items-center gap-2"
          >
            {isPreviewMode ? <EditIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
            {isPreviewMode ? "Edit Mode" : "Preview Mode"}
          </Button>
          <TemplateTypeSwitcher />
          <AutomationTypeSwitcher />
          <PublishAutomation />
        </div>
      </div>

      {/* BODY */}
      <div className="body sm:flex-row sm:gap-6 gap-10 flex-col flex w-full justify-between px-6 py-4">
        {!isPreviewMode && (
          <div className="editor flex-1 flex flex-col gap-4">
             {/* Buttons */}
            <div className="flex items-center justify-between">
              <h3 className="font-medium text-muted-foreground">Editor</h3>
              <Button variant="outline" size="sm" onClick={AddButton}>
                <PlusIcon className="w-4 h-4 mr-2" /> Add Button
              </Button>
            </div>
            {/* Keyword */}
            <div
              className="bg-card rounded-xl border p-4"
              onMouseEnter={() => setHoveredKeyword(true)}
              onMouseLeave={() => setHoveredKeyword(false)}
            >
              <label className="block text-sm font-medium mb-2">Trigger Keyword</label>
              <Input
                value={Keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Enter trigger keyword"
              />
            </div>

            {/* Product-specific fields */}
            {templateType === "generic" && (
              <>
                <div
                  className="bg-card rounded-xl border p-4"
                  onMouseEnter={() => setHoveredImage(true)}
                  onMouseLeave={() => setHoveredImage(false)}
                >
                  <label className="block text-sm font-medium mb-2">Product Image</label>
                  <Input
                    value={ProductImage}
                    onChange={(e) => setProductImage(e.target.value)}
                    placeholder="Enter product image URL"
                  />
                </div>
                <div
                  className="bg-card rounded-xl border p-4"
                  onMouseEnter={() => setHoveredText(true)}
                  onMouseLeave={() => setHoveredText(false)}
                >
                  <label className="block text-sm font-medium mb-2">Product Title</label>
                  <Input
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter product title"
                  />
                </div>
              </>
            )}

            {/* Description */}
            <div
              className="bg-card rounded-xl border p-4"
              onMouseEnter={() => setHoveredText(true)}
              onMouseLeave={() => setHoveredText(false)}
            >
              <label className="block text-sm font-medium mb-2">
                {templateType === "generic" ? "Product Description" : "Message Text"}
              </label>
              <TextareaAutosize
                value={Text}
                onChange={(e) => useAutomationDraft.setState({ Text: e.currentTarget.value })}
                className="w-full border p-3 rounded-lg resize-none"
                minRows={3}
                maxRows={6}
                placeholder="Enter your message"
              />
            </div>

           
            {activeButton >= 0 && Buttons[activeButton] && (
              <div
                onMouseEnter={() => setHoveredButton(activeButton)}
                onMouseLeave={() => setHoveredButton(-1)}
                className="p-4 border rounded-xl"
              >
                <label className="block mb-1">Button Title</label>
                <Input
                  value={Buttons[activeButton].title}
                  onChange={(e) => updateButtonTitle(activeButton, e.target.value)}
                />
                <label className="block mt-2 mb-1">Button URL</label>
                <Input
                  value={Buttons[activeButton].url}
                  onChange={(e) => updateButtonUrl(activeButton, e.target.value)}
                />
                <Button
                  onClick={() => DeleteButton(activeButton)}
                  size="sm"
                  variant="ghost"
                  className="text-destructive"
                >
                  Delete <Trash2Icon className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        )}

        {/* PREVIEW */}
        <div
          className={cn(
            "preview mx-auto p-6 border rounded-2xl bg-card",
            isPreviewMode ? "w-full max-w-2xl" : "sm:w-96 w-full"
          )}
        >
          <div className="flex items-center justify-between mb-4">
            <p className="font-medium">Preview</p>
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <Button
                disabled={AutomationType === "DM"}
                variant={previewType === "message" ? "default" : "ghost"}
                size="sm"
                onClick={() => setPreviewType("message")}
              >
                Message
              </Button>
              <Button
                disabled={AutomationType === "DM"}
                variant={previewType === "comment" ? "default" : "ghost"}
                size="sm"
                onClick={() => setPreviewType("comment")}
              >
                Comment
              </Button>
            </div>
          </div>
          {previewType === "message" ? (
            <MessagePreview
              keyword={Keyword}
              text={Text}
              buttons={Buttons}
              activeButton={activeButton}
              isPreviewMode={isPreviewMode}
              onDeleteButton={DeleteButton}
              onSetActiveButton={setActiveButton}
              isGenericTemplate={templateType === "generic"}
              title={Title}
              img={ProductImage}
            />
          ) : (
            <CommentPreview text={Keyword} />
          )}
        </div>
      </div>
    </div>
  )
}

export default TextTemplate
