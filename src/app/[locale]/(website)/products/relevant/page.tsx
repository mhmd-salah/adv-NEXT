import Link from "next/link";


export default function RelevantProductsPage() {
  return (
    <main className="grow bg-zinc-800 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Relevant</h1>

      <Link href='/products#section-1'>Products Section 1</Link>
    </main>
  )
}
