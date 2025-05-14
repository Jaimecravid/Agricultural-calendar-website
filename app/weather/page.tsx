"use client"

import { WeatherSection } from "@/components/weather-section"
import { RegionSelector } from "@/components/region-selector"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/components/language-provider"
import { CloudRain, Droplets, Sun, Wind } from "lucide-react"

export default function WeatherPage() {
  const { t } = useTranslation()

  return (
    <div className="container px-4 py-6 md:py-10 mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t("weather.title")}</h1>

      <RegionSelector />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <WeatherSection />
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{t("weather.seasonalOutlook")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{t("weather.seasonalOutlookDescription")}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{t("weather.farmingImpact")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <CloudRain className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{t("weather.rainfall")}</h3>
                    <p className="text-sm text-muted-foreground">{t("weather.rainfallImpact")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Sun className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{t("weather.temperature")}</h3>
                    <p className="text-sm text-muted-foreground">{t("weather.temperatureImpact")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Wind className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{t("weather.wind")}</h3>
                    <p className="text-sm text-muted-foreground">{t("weather.windImpact")}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Droplets className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{t("weather.humidity")}</h3>
                    <p className="text-sm text-muted-foreground">{t("weather.humidityImpact")}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{t("weather.historicalData")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">{t("weather.historicalDescription")}</p>
          <div className="h-64 w-full bg-muted rounded-md flex items-center justify-center">
            <p className="text-muted-foreground">{t("weather.chartPlaceholder")}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
