import { useTranslations } from 'next-intl';

export default function UserDashboard() {
  // Translations
  const t = useTranslations();

  return (
    <div className="flex items-center justify-center text-green-500">
      {t("title")}
    </div>
  );
}
  