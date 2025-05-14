"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarSection } from "@/components/calendar-section"
import { RegionSelector } from "@/components/region-selector"
import { useTranslation } from "@/components/language-provider"

export default function CalendarPage() {
  const { t } = useTranslation()

  return (
    <div className="container px-4 py-6 md:py-10 mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t("calendar.title")}</h1>

      <RegionSelector />

      <div className="grid grid-cols-1 gap-6">
        <CalendarSection />

        <Card>
          <CardHeader>
            <CardTitle>{t("calendar.seasonalTips")}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">{t("calendar.currentSeason")}</h3>
                <p>{t("calendar.seasonalAdvice")}</p>
              </div>

              <div>
                <h3 className="font-medium mb-2">{t("calendar.upcomingActivities")}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t("calendar.activity1")}</li>
                  <li>{t("calendar.activity2")}</li>
                  <li>{t("calendar.activity3")}</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
