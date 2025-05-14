"use client"

import { useState } from "react"
import { Check, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useTranslation } from "./language-provider"

export function RegionSelector() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState("huambo")

  const regions = [
    { value: "huambo", label: "Huambo" },
    { value: "luanda", label: "Luanda" },
    { value: "benguela", label: "Benguela" },
    { value: "huila", label: "Huíla" },
    { value: "bie", label: "Bié" },
    { value: "malanje", label: "Malanje" },
    { value: "uige", label: "Uíge" },
    { value: "cuanza-sul", label: "Cuanza Sul" },
    { value: "cuanza-norte", label: "Cuanza Norte" },
    { value: "lunda-norte", label: "Lunda Norte" },
  ]

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{t("region.title")}</h2>
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <p className="text-muted-foreground">{t("region.selectPrompt")}</p>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" role="combobox" aria-expanded={open} className="justify-between min-w-[200px]">
              {selectedRegion ? regions.find((region) => region.value === selectedRegion)?.label : t("region.select")}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder={t("region.search")} />
              <CommandList>
                <CommandEmpty>{t("region.noResults")}</CommandEmpty>
                <CommandGroup>
                  {regions.map((region) => (
                    <CommandItem
                      key={region.value}
                      value={region.value}
                      onSelect={(currentValue) => {
                        setSelectedRegion(currentValue)
                        setOpen(false)
                      }}
                    >
                      <Check
                        className={`mr-2 h-4 w-4 ${selectedRegion === region.value ? "opacity-100" : "opacity-0"}`}
                      />
                      {region.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
