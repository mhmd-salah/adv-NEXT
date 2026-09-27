
interface ProductPageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function ProductPage({ params, searchParams }: ProductPageProps) {
  const paramsResult = await params;
  const searchParamsResult = await searchParams;

  console.log('params: ', paramsResult);
  console.log('searchParams: ', searchParamsResult);

  return (
    <main className="grow bg-zinc-800 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Product ID page {paramsResult.id}</h1>
    </main>
  )
}
