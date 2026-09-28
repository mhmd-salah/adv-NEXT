import { useTranslations } from 'next-intl';
import Link from 'next/link';

const categories = [
  {
    id: 500,
    slug: 'kids-shoes',
    name: 'Kids shoes',
  },
  {
    id: 501,
    slug: 'kids-clothes',
    name: 'Kids clothes',
  },
];

// export const dynamic = 'force-dynamic';
// export const revalidate = 20;

export default function HomePage() {
  const username = 'ahmed';
  const t = useTranslations();
  console.log('homepage rendered');
  /**
   * Params
   * SearchParams
   * Cookies
   * Headers
   * connection()
   * export const dynamic = 'force-dynamic'
   * export const revalidate = 0
   */

  // fetch('/products', { cache: 'force-cache', next: { tags: ['products', 'new'] } })
  // fetch('/products/1', { cache: 'force-cache', next: { tags: ['products', '1'] } })
  // fetch('/posts', { cache: 'force-cache', next: { tags: ['posts'] } })
  return (
    <main className="grow bg-zinc-800 flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl font-bold">{t('title')}</h1>
      <p>{t('nice-to-have-your-hear-name', { name: username })} </p>
      <p>{t('you-have-count-new-notification', { count: 1 })}</p>
      <p>{t('competation-rank', { rank: 4 })}</p>
      {/* Selecting enum-based values*/}
      <p>
        {t('logged-in-message', { user: "esraa", gender: 'female', days: 10 })}
      </p>
      
      <div className="flex flex-col">
        {categories.map((link) => (
          <Link key={link.id} href={`/categories/${link.slug}/${link.id}`}>
            {link.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
