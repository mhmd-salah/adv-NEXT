import { authOptions } from "@/auth";
import { hasPermission } from "@/lib/utils/abac.util";
import { getServerSession } from "next-auth";
import { forbidden } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!hasPermission(session?.user, 'reviews', 'create')) forbidden();

  return (
    <main className="grow bg-zinc-800 flex items-center justify-center">
      <h1 className="text-white text-4xl font-bold">Add Review page</h1>
    </main>
  )
}
