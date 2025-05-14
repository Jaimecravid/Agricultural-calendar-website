import { CalendarSection } from "@/components/calendar-section"
import { WeatherSection } from "@/components/weather-section"
import { PestAlertSection } from "@/components/pest-alert-section"
import { RegionSelector } from "@/components/region-selector"
import { useTranslation } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container px-4 py-6 md:py-10 mx-auto">
      <HomePageContent />
    </div>
  )
}

// Client component for interactive elements
function HomePageContent() {
  const { t } = useTranslation()

  return (
    <>
      <section className="mb-8">
        <div className="rounded-lg bg-gradient-to-r from-green-800 to-green-600 p-6 md:p-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{t("home.title")}</h1>
          <p className="text-lg mb-6">{t("home.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-green-800 hover:bg-gray-100">
              {t("home.viewCalendar")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20">
              {t("home.learnMore")}
            </Button>
          </div>
        </div>
      </section>

      <RegionSelector />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <CalendarSection />
        </div>
        <div>
          <WeatherSection />
        </div>
      </div>

      <PestAlertSection />
    </>
  )
}
