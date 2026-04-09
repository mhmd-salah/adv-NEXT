import { IApiResponse } from "@/lib/types/api";
import { IPost } from "@/lib/types/post";
import { cacheLife, cacheTag, revalidateTag } from "next/cache";

interface IPostResponse {
  posts: Array<IPost>;
  total: number;
  skip: number;
  limit: number;
}

export async function getPosts() {
  'use cache';

  cacheTag('posts')
  cacheLife('half-day')
  // revalidateTag('posts', 'seconds')
  await new Promise(resolve => setTimeout(resolve, 2000));

  // const controller = new AbortController();

  const response = await fetch('https://dummyjson.com/posts', {
    // cache: 'no-store'
    // next: { revalidate: 20, tags: ['posts'] },
    // signal: controller.signal,
  });

  const payload: IPostResponse = await response.json();

  return payload
}

export async function getPost(id: string) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch(`https://dummyjson.com/posts/${id}`);

  const data: IApiResponse<IPost> = await response.json();


  if (data.status === true) {
    return data.payload
  }

  return data
}