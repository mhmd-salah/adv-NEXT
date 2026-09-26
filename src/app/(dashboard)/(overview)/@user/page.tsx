"use client"
import { useTranslations } from "use-intl"


export default function UserDashboard() {
  const t = useTranslations("HomePage")
  return (
    <div className="flex items-center justify-center text-green-500">{t('title')}</div>
  )
}
