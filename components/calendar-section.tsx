"use client"

import { useState } from "react"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "./language-provider"
import { CropInfo } from "./crop-info"

export function CalendarSection() {
  const { t } = useTranslation()
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedCrop, setSelectedCrop] = useState("maize")

  // Simulated crop data
  const crops = [
    { id: "maize", name: t("crops.maize") },
    { id: "cassava", name: t("crops.cassava") },
    { id: "beans", name: t("crops.beans") },
  ]

  // Custom calendar styling to show planting and harvesting periods
  const cropCalendarData = {
    maize: {
      planting: [new Date(2025, 3, 10), new Date(2025, 4, 15)], // April 10 - May 15
      harvesting: [new Date(2025, 7, 1), new Date(2025, 8, 10)], // August 1 - September 10
    },
    cassava: {
      planting: [new Date(2025, 2, 1), new Date(2025, 3, 30)], // March 1 - April 30
      harvesting: [new Date(2025, 10, 1), new Date(2025, 11, 31)], // November 1 - December 31
    },
    beans: {
      planting: [new Date(2025, 2, 15), new Date(2025, 3, 20)], // March 15 - April 20
      harvesting: [new Date(2025, 5, 10), new Date(2025, 6, 15)], // June 10 - July 15
    },
  }

  // Function to determine if a date is in a planting or harvesting period
  const getDateType = (date: Date) => {
    const cropData = cropCalendarData[selectedCrop as keyof typeof cropCalendarData]

    const isInRange = (date: Date, range: Date[]) => {
      const dateTime = date.getTime()
      return dateTime >= range[0].getTime() && dateTime <= range[1].getTime()
    }

    if (isInRange(date, cropData.planting)) return "planting"
    if (isInRange(date, cropData.harvesting)) return "harvesting"
    return null
  }

  // Custom day rendering for the calendar
  const dayClassName = (date: Date) => {
    const dateType = getDateType(date)
    if (dateType === "planting") return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
    if (dateType === "harvesting") return "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100"
    return ""
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{t("calendar.title")}</CardTitle>
        <Tabs defaultValue="maize" onValueChange={setSelectedCrop} className="mt-2">
          <TabsList className="grid grid-cols-3">
            {crops.map((crop) => (
              <TabsTrigger key={crop.id} value={crop.id}>
                {crop.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <CalendarComponent
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
              modifiers={{
                planting: (date) => getDateType(date) === "planting",
                harvesting: (date) => getDateType(date) === "harvesting",
              }}
              modifiersClassNames={{
                planting: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100",
                harvesting: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100",
              }}
            />
            <div className="flex gap-4 mt-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-sm">{t("calendar.planting")}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-amber-500"></div>
                <span className="text-sm">{t("calendar.harvesting")}</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <CropInfo cropId={selectedCrop} />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
