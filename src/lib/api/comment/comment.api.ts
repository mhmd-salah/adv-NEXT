import { ICommentResponse } from "@/lib/types/comment";

export async function getComments() {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch('https://dummyjson.com/comments');

  const payload: ICommentResponse = await response.json();

  return payload
}

export async function getCommentsOnPost(postId: number | string) {
  await new Promise(resolve => setTimeout(resolve, 2000));

  const response = await fetch(`https://dummyjson.com/comments/post/${postId}`);

  const payload: ICommentResponse = await response.json();

  return payload
}