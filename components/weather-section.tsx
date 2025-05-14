"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { useTranslation } from "./language-provider"
import { Cloud, CloudRain, Sun, Thermometer, Wind, Droplets } from "lucide-react"

export function WeatherSection() {
  const { t } = useTranslation()
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState<any>(null)

  // Simulated weather data fetch
  useEffect(() => {
    // In a real app, this would be an API call to a weather service
    const fetchWeather = async () => {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock weather data
      const mockWeather = {
        current: {
          temp: 24,
          humidity: 65,
          wind_speed: 12,
          weather: [{ main: "Clouds", description: "scattered clouds" }],
        },
        daily: [
          {
            dt: Date.now() / 1000,
            temp: { min: 18, max: 26 },
            weather: [{ main: "Clouds" }],
            pop: 0.2, // Probability of precipitation
          },
          {
            dt: Date.now() / 1000 + 86400,
            temp: { min: 17, max: 25 },
            weather: [{ main: "Rain" }],
            pop: 0.7,
          },
          {
            dt: Date.now() / 1000 + 86400 * 2,
            temp: { min: 16, max: 23 },
            weather: [{ main: "Rain" }],
            pop: 0.8,
          },
          {
            dt: Date.now() / 1000 + 86400 * 3,
            temp: { min: 18, max: 24 },
            weather: [{ main: "Clear" }],
            pop: 0.1,
          },
        ],
        alerts: [
          {
            event: "Heavy Rain",
            description: "Heavy rainfall expected in Huambo region on Wednesday",
          },
        ],
      }

      setWeather(mockWeather)
      setLoading(false)
    }

    fetchWeather()
  }, [])

  // Weather icon mapping
  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "Clear":
        return <Sun className="h-8 w-8 text-yellow-500" />
      case "Clouds":
        return <Cloud className="h-8 w-8 text-gray-500" />
      case "Rain":
        return <CloudRain className="h-8 w-8 text-blue-500" />
      default:
        return <Cloud className="h-8 w-8 text-gray-500" />
    }
  }

  // Format date
  const formatDay = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString(undefined, { weekday: "short" })
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{t("weather.title")}</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-24 w-full" />
            <div className="grid grid-cols-4 gap-2">
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
              <Skeleton className="h-20 w-full" />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Current weather */}
            <div className="flex items-center justify-between p-4 rounded-lg bg-muted">
              <div>
                <p className="text-sm text-muted-foreground">{t("weather.now")}</p>
                <div className="text-3xl font-bold">{weather.current.temp}°C</div>
                <p className="text-sm capitalize">{weather.current.weather[0].description}</p>
              </div>
              {getWeatherIcon(weather.current.weather[0].main)}
            </div>

            {/* Weather details */}
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                <Droplets className="h-4 w-4 text-blue-500" />
                <div className="text-sm">
                  <p className="text-muted-foreground">{t("weather.humidity")}</p>
                  <p className="font-medium">{weather.current.humidity}%</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-md bg-muted/50">
                <Wind className="h-4 w-4 text-blue-500" />
                <div className="text-sm">
                  <p className="text-muted-foreground">{t("weather.wind")}</p>
                  <p className="font-medium">{weather.current.wind_speed} km/h</p>
                </div>
              </div>
            </div>

            {/* Forecast */}
            <div>
              <h3 className="text-sm font-medium mb-2">{t("weather.forecast")}</h3>
              <div className="grid grid-cols-4 gap-2">
                {weather.daily.map((day: any, index: number) => (
                  <div key={index} className="flex flex-col items-center p-2 rounded-md bg-muted/50">
                    <span className="text-xs">{formatDay(day.dt)}</span>
                    {getWeatherIcon(day.weather[0].main)}
                    <div className="flex gap-1 text-xs mt-1">
                      <span className="font-medium">{Math.round(day.temp.max)}°</span>
                      <span className="text-muted-foreground">{Math.round(day.temp.min)}°</span>
                    </div>
                    {day.pop > 0.3 && (
                      <div className="flex items-center gap-1 mt-1">
                        <Droplets className="h-3 w-3 text-blue-500" />
                        <span className="text-xs">{Math.round(day.pop * 100)}%</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Weather alerts */}
            {weather.alerts && weather.alerts.length > 0 && (
              <div className="p-3 rounded-md bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-red-500 p-1">
                    <Thermometer className="h-4 w-4 text-white" />
                  </div>
                  <p className="font-medium text-red-800 dark:text-red-200">{weather.alerts[0].event}</p>
                </div>
                <p className="text-xs text-red-700 dark:text-red-300 mt-1">{weather.alerts[0].description}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
