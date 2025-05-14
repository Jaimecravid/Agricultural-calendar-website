"use client"

import { useTranslation } from "./language-provider"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface CropInfoProps {
  cropId: string
}

export function CropInfo({ cropId }: CropInfoProps) {
  const { t } = useTranslation()

  // Simulated crop data
  const cropData = {
    maize: {
      name: t("crops.maize"),
      plantingPeriod: t("cropInfo.maize.plantingPeriod"),
      harvestingPeriod: t("cropInfo.maize.harvestingPeriod"),
      waterNeeds: "medium",
      soilType: t("cropInfo.maize.soilType"),
      tips: t("cropInfo.maize.tips"),
    },
    cassava: {
      name: t("crops.cassava"),
      plantingPeriod: t("cropInfo.cassava.plantingPeriod"),
      harvestingPeriod: t("cropInfo.cassava.harvestingPeriod"),
      waterNeeds: "low",
      soilType: t("cropInfo.cassava.soilType"),
      tips: t("cropInfo.cassava.tips"),
    },
    beans: {
      name: t("crops.beans"),
      plantingPeriod: t("cropInfo.beans.plantingPeriod"),
      harvestingPeriod: t("cropInfo.beans.harvestingPeriod"),
      waterNeeds: "medium",
      soilType: t("cropInfo.beans.soilType"),
      tips: t("cropInfo.beans.tips"),
    },
  }

  const crop = cropData[cropId as keyof typeof cropData]

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">
        {crop.name} {t("cropInfo.info")}
      </h3>

      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{t("cropInfo.planting")}</p>
          <p className="font-medium">{crop.plantingPeriod}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">{t("cropInfo.harvesting")}</p>
          <p className="font-medium">{crop.harvestingPeriod}</p>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{t("cropInfo.waterNeeds")}</p>
        <div>
          <Badge
            variant={crop.waterNeeds === "low" ? "outline" : crop.waterNeeds === "medium" ? "secondary" : "default"}
          >
            {t(`cropInfo.waterLevel.${crop.waterNeeds}`)}
          </Badge>
        </div>
      </div>

      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{t("cropInfo.soilType")}</p>
        <p>{crop.soilType}</p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="tips">
          <AccordionTrigger>{t("cropInfo.growingTips")}</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm">{crop.tips}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
