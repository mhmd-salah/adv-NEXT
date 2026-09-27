'use client';
import { Button } from '@base-ui/react';
import { useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/navigation';
import { startTransition, useEffect, useState } from 'react';

const Header = () => {
  // Navigation
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  // State
  const [searchParams, setSearchParams] = useState('');

  // Variables
  const language = locale === 'ar' ? 'English' : 'العربيه';

  // Effect
  useEffect(() => {
    startTransition(() => setSearchParams(location.search));
  }, [searchParams]);

  return (
    <header className="flex items-center justify-between text-sm  p-2 fixed top-0 right-0 z-50 bg-blue-600 text-white">
      {/* <Button
        onClick={() =>
          router.replace(pathname, { locale: locale === 'ar' ? 'en' : 'ar' })
        }
      >
        {language}
      </Button> */}

      <Link
        href={pathname + searchParams}
        locale={locale === 'ar' ? 'en' : 'ar'}
      >
        {language}
      </Link>
    </header>
  );
};

export default Header;
