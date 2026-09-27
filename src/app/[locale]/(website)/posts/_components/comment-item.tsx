import { IComment } from "@/lib/types/comment";

export default function CommentItem({ comment }: { comment: IComment }) {
  const { user, body, likes } = comment;

  return (
    <article className="rounded-xl border border-zinc-600/50 bg-zinc-800/80 p-4 shadow-lg">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-white">
          {user.fullName || user.username}
        </p>
        <span className="flex items-center gap-1 text-xs text-zinc-500">
          <span className="text-amber-400">{likes}</span>
          <span>likes</span>
        </span>
      </div>
      {user.username && user.username !== user.fullName && (
        <p className="mt-0.5 text-xs text-zinc-500">@{user.username}</p>
      )}
      <p className="mt-2 text-sm text-zinc-400">{body}</p>
    </article>
  );
}
