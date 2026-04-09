
import { notFound } from 'next/navigation';

interface SubCategoryPageProps {
  params: Promise<{ id?: [string, string | undefined] }>;
}

export default async function SubCategoryPage({ params }: SubCategoryPageProps) {
  const paramsResult = await params;

  console.log('params: ', paramsResult);

  if (paramsResult.id && paramsResult.id.length > 2) return notFound()

  return (
    <main className="grow bg-zinc-800 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Sub Category Page {paramsResult.id}</h1>
    </main>
  )
}
