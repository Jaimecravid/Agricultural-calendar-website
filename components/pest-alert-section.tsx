"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTranslation } from "./language-provider"
import { AlertTriangle, Bug, ChevronRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function PestAlertSection() {
  const { t } = useTranslation()

  // Simulated pest alerts data
  const pestAlerts = [
    {
      id: "fall-armyworm",
      name: t("pests.fallArmyworm.name"),
      severity: "high",
      regions: ["Huambo", "Bié", "Huíla"],
      crops: ["maize", "sorghum"],
      description: t("pests.fallArmyworm.description"),
      treatment: t("pests.fallArmyworm.treatment"),
    },
    {
      id: "cassava-mealybug",
      name: t("pests.cassavaMealybug.name"),
      severity: "medium",
      regions: ["Uíge", "Malanje"],
      crops: ["cassava"],
      description: t("pests.cassavaMealybug.description"),
      treatment: t("pests.cassavaMealybug.treatment"),
    },
    {
      id: "bean-aphid",
      name: t("pests.beanAphid.name"),
      severity: "low",
      regions: ["Benguela", "Cuanza Sul"],
      crops: ["beans", "cowpea"],
      description: t("pests.beanAphid.description"),
      treatment: t("pests.beanAphid.treatment"),
    },
  ]

  // Severity badge color mapping
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive"
      case "medium":
        return "warning"
      case "low":
        return "secondary"
      default:
        return "secondary"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bug className="h-5 w-5" />
          {t("pests.title")}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="mb-6 border-red-200 bg-red-100 dark:border-red-800 dark:bg-red-900/30">
          <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-400" />
          <AlertTitle className="text-red-800 dark:text-red-300">{t("pests.alert.title")}</AlertTitle>
          <AlertDescription className="text-red-700 dark:text-red-400">{t("pests.alert.description")}</AlertDescription>
        </Alert>

        <Accordion type="single" collapsible className="w-full">
          {pestAlerts.map((alert) => (
            <AccordionItem key={alert.id} value={alert.id}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-2 text-left">
                  <span>{alert.name}</span>
                  <Badge variant={getSeverityColor(alert.severity) as any}>
                    {t(`pests.severity.${alert.severity}`)}
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {alert.regions.map((region) => (
                      <Badge key={region} variant="outline">
                        {region}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{t("pests.affectedCrops")}</p>
                    <div className="flex gap-2">
                      {alert.crops.map((crop) => (
                        <Badge key={crop} variant="secondary">
                          {t(`crops.${crop}`)}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-1">{t("pests.description")}</p>
                    <p className="text-sm">{alert.description}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-1">{t("pests.treatment")}</p>
                    <p className="text-sm">{alert.treatment}</p>
                  </div>

                  <Button variant="outline" size="sm" className="w-full">
                    {t("pests.learnMore")}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
