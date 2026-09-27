
interface EditProductPageProps {
  params: Promise<{ id: string }>;
  // searchParams: Promise<{ [key: string]: string | string[] | undefined }>
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function EditProductPage({ params, }: EditProductPageProps) {
  const paramsResult = await params;

  console.log('params: ', paramsResult);
  return (
    <main className="grow bg-zinc-800 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Edit Product page {paramsResult.id}</h1>
    </main>
  )
}
