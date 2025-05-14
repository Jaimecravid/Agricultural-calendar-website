"use client"

import { PestAlertSection } from "@/components/pest-alert-section"
import { RegionSelector } from "@/components/region-selector"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTranslation } from "@/components/language-provider"
import { Bug, Leaf, Search } from "lucide-react"

export default function PestsPage() {
  const { t } = useTranslation()

  return (
    <div className="container px-4 py-6 md:py-10 mx-auto">
      <h1 className="text-3xl font-bold mb-6">{t("pests.pageTitle")}</h1>

      <RegionSelector />

      <Tabs defaultValue="alerts" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="alerts" className="flex items-center gap-2">
            <Bug className="h-4 w-4" />
            <span>{t("pests.currentAlerts")}</span>
          </TabsTrigger>
          <TabsTrigger value="identification" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            <span>{t("pests.identification")}</span>
          </TabsTrigger>
          <TabsTrigger value="prevention" className="flex items-center gap-2">
            <Leaf className="h-4 w-4" />
            <span>{t("pests.prevention")}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="alerts" className="mt-6">
          <PestAlertSection />
        </TabsContent>

        <TabsContent value="identification" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("pests.identificationTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t("pests.identificationDescription")}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">{t("pests.commonSigns")}</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>{t("pests.sign1")}</li>
                    <li>{t("pests.sign2")}</li>
                    <li>{t("pests.sign3")}</li>
                    <li>{t("pests.sign4")}</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">{t("pests.reportInfestation")}</h3>
                  <p className="text-sm mb-2">{t("pests.reportDescription")}</p>
                  <div className="flex items-center gap-2">
                    <Bug className="h-5 w-5 text-destructive" />
                    <span className="font-medium">{t("pests.hotline")}: +244 923 456 789</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="prevention" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>{t("pests.preventionTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{t("pests.preventionDescription")}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">{t("pests.culturalPractices")}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>{t("pests.cultural1")}</li>
                    <li>{t("pests.cultural2")}</li>
                    <li>{t("pests.cultural3")}</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">{t("pests.biologicalControl")}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>{t("pests.biological1")}</li>
                    <li>{t("pests.biological2")}</li>
                    <li>{t("pests.biological3")}</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-2">{t("pests.naturalRemedies")}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>{t("pests.remedy1")}</li>
                    <li>{t("pests.remedy2")}</li>
                    <li>{t("pests.remedy3")}</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
