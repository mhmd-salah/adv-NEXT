
import { getPost } from '@/lib/api/post/post.api';
import { notFound } from 'next/navigation';

// export const dynamicParams = false;

export function generateStaticParams() {
  return [
    { id: '1' },
    { id: '2' },
    { id: '3' },
  ]
}

export default async function PostPage({ params }: PageProps<'/posts/[id]'>) {
  const paramsResult = await params;
  const postPayload = await getPost(paramsResult.id);

  console.log(params);

  if (!postPayload || 'message' in postPayload) return notFound();

  return (
    <main className="grow bg-zinc-800 flex flex-col gap-4 items-center justify-center">
      <h1 className="text-white text-4xl font-bold">{postPayload?.title}</h1>

      <div className="flex flex-col gap-4 max-w-2xl">
        <p className="text-white text-xl font-bold">{postPayload.body}</p>
      </div>

    </main>
  )
}
