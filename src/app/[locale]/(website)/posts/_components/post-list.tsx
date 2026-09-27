
import PostItem from './post-item';
import { getPosts } from '@/lib/api/post/post.api';

export default async function PostList() {
  // 'use cache';
  const postsPayload = await getPosts();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {postsPayload.posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  )
}
