"use client"

import Link from "next/link"
import { useTranslation } from "./language-provider"

export function Footer() {
  const { t } = useTranslation()

  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center">
                <span className="text-white font-bold">AC</span>
              </div>
              <span className="font-bold text-lg">{t("site.name")}</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">{t("footer.description")}</p>
          </div>

          <div>
            <h3 className="font-medium mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/calendar" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("nav.calendar")}
                </Link>
              </li>
              <li>
                <Link href="/weather" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("nav.weather")}
                </Link>
              </li>
              <li>
                <Link href="/pests" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("nav.pests")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4">{t("footer.resources")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("footer.contact")}
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-sm text-muted-foreground hover:text-foreground">
                  {t("footer.help")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {t("site.name")}. {t("footer.rights")}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              {t("footer.privacy")}
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
