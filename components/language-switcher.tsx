"use client"

import { useState } from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTranslation } from "./language-provider"

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation()
  const [open, setOpen] = useState(false)

  const languages = [
    { code: "en", name: "English" },
    { code: "pt", name: "Português" },
    { code: "um", name: "Umbundu" },
    { code: "km", name: "Kimbundu" },
  ]

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Select language">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={language === lang.code ? "bg-muted" : ""}
            onClick={() => {
              setLanguage(lang.code as any)
              setOpen(false)
            }}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
