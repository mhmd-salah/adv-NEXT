import { IPost } from "@/lib/types/post";
import HoveredLink from "../../products/new/_components/hovered-link";

export default function PostItem({ post }: { post: IPost }) {
  const excerpt = post.body.length > 120 ? `${post.body.slice(0, 120).trim()}…` : post.body;
  const tags = post.tags ?? [];
  const likes = post.reactions?.likes ?? 0;
  const dislikes = post.reactions?.dislikes ?? 0;
  const views = post.views ?? 0;

  return (
    <HoveredLink
      href={`/posts/${post.id}`}
      className="group block rounded-xl border border-zinc-600/50 bg-zinc-800/80 p-5 shadow-lg transition-all duration-200 hover:border-amber-500/40 hover:bg-zinc-700/90 hover:shadow-amber-500/5 hover:shadow-xl"
    >
      <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-amber-200">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm text-zinc-400">
        {excerpt}
      </p>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-600/60 px-2.5 py-0.5 text-xs font-medium text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 flex items-center gap-4 border-t border-zinc-600/50 pt-3 text-xs text-zinc-500">
        <span className="flex items-center gap-1">
          <span className="text-amber-400">{likes}</span>
          <span>likes</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-red-400/80">{dislikes}</span>
          <span>dislikes</span>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-sky-400/90">{views}</span>
          <span>views</span>
        </span>
      </div>
    </HoveredLink>
  );
}