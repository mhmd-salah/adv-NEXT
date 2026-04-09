import ErrorBoundary from "@/components/shared/error-boundary";
import { Suspense } from "react";
import PostListSkeleton from "./_components/post-list-skeleton";
import PostList from "./_components/post-list";

// const preload = (id: string) => {
//   // void evaluates the given expression and returns undefined
//   // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
//   void getPost(id)
// }

// export const dynamic = 'force-dynamic'


export default async function PostsPage() {
  // const searchParamsResult = await props.searchParams;
  // const page = searchParamsResult['page'] || '1'
  // const commentsPromise = getComments();
  // const postsPayload = await getPosts(page);

  // const crimePost = postsPayload.posts.find(post => post.tags.includes('crime'));
  // const crimePostComments = crimePost ? await getCommentsOnPost(crimePost?.id) : [];

  // console.log(crimePostComments);

  // const [postsPayload, commentsPayload] = await Promise.all([getPosts(), getComments()])

  // console.log(postsPayload);
  // console.log(commentsPayload);

  // preload('1')

  console.log('Posts page rendered');

  return (
    <main className="grow bg-linear-to-b from-zinc-800 to-zinc-900">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Posts
          </h1>
          <p className="mt-3 text-lg text-zinc-400">
            Browse articles and updates from the community.
          </p>
        </header>
        {/* <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<CommentListSkeleton />}>
            <CommentList commentsPromise={commentsPromise} />
          </Suspense>
        </ErrorBoundary> */}

        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <Suspense fallback={<PostListSkeleton />}>
            <PostList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  )
}
