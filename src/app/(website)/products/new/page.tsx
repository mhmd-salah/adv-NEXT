import { getServerSession } from "next-auth";
import NewProducts from "./_components/new-products";
import { authOptions } from "@/auth";
import { hasPermission } from "@/lib/util/abac.util";
import { forbidden } from "next/navigation";


export default async function NewProductsPage() {
  // console.log('New Products Page Rendered');
  const session = await getServerSession(authOptions);

  if (!hasPermission(session?.user, 'products', 'create')) forbidden()

  return (
    <main className="grow bg-zinc-800 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">New</h1>

      <NewProducts />
    </main>
  )
}
