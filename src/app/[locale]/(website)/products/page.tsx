import { authOptions } from "@/auth";
import { hasPermission } from "@/lib/utils/abac.util";
import { getServerSession } from "next-auth";
import { forbidden } from "next/navigation";

export default async function ProductsPage() {
  const session = await getServerSession(authOptions);

  // if (!hasPermission('view:products', session?.user.role)) forbidden();
  if (!hasPermission(session?.user, 'products', 'view')) forbidden();

  return (
    <main className="grow bg-zinc-800 flex items-center justify-between h-[500rem] flex-col">
      <h1 className="text-white text-4xl font-bold">Products page</h1>

      <section id="section-1" className="bg-zinc-900 p-4 h-[40rem] w-full">
        Section
      </section>

      <p>Scroll to section 1</p>
    </main>
  );
}