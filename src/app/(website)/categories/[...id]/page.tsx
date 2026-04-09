import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: Promise<{ id: [string, string | undefined] }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const paramsResult = await params;

  console.log('params: ', paramsResult);

  if (paramsResult.id.length > 2) return notFound()

  return (
    <main className="grow bg-zinc-800 flex items-center justify-center">

      <h1 className="text-white text-4xl font-bold">Category Page {paramsResult.id}</h1>
    </main>
  )
}
