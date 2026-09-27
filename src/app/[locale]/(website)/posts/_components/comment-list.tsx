'use client';

import { getComments } from "@/lib/api/comment/comment.api";
import CommentItem from "./comment-item";
import { useSuspenseQuery } from "@tanstack/react-query";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function CommentList() {
  // const commentsPayload = use(commentsPromise);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();


  function navigate() {
    const newSearchParams = new URLSearchParams(searchParams)

    newSearchParams.set('page', '2')

    router.push(`${pathname}?${newSearchParams.toString()}`)
  }


  // const [comments, setComments] = useState<IComment[]>([]);

  // useEffect(() => {
  //   async function fetchComments() {
  //     const commentsPayload = await getComments();

  //     setComments(commentsPayload.comments);
  //   }

  //   fetchComments();
  // }, []);

  // const { data } = useQuery({
  //   queryKey: ['comments'],
  //   queryFn: async () => {
  //     const response = await fetch('/api/posts');

  //     const payload: ICommentResponse = await response.json();

  //     return payload
  //   },
  // })

  // const { posts, comments, isLoading } = useQueries({
  //   queries: [
  //     {
  //       queryKey: ['posts'],
  //       queryFn: getPosts,
  //     },
  //     {
  //       queryKey: ['comments'],
  //       queryFn: getComments,
  //     }
  //   ],
  //   combine: (results) => {
  //     const [postsQuery, commentsQuery] = results;

  //     return {
  //       posts: postsQuery.data,
  //       comments: commentsQuery.data,
  //       isLoading: postsQuery.isLoading || commentsQuery.isLoading,
  //     }
  //   }
  // })

  const { data: commentsPayload } = useSuspenseQuery({
    queryKey: ['comments'],
    queryFn: getComments,
  })

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white">Comments</h2>
      <ul className="flex flex-col gap-4">
        {commentsPayload.comments.map((comment) => (
          <li key={comment.id}>
            <CommentItem comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}
