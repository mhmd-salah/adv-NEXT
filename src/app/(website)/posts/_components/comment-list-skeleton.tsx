export default function CommentListSkeleton() {
  return (
    <div className="space-y-4">
      {/* Section heading */}
      <div className="h-7 w-28 rounded bg-zinc-600/60 animate-pulse" />
      <ul className="flex flex-col gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <li key={i}>
            <article className="rounded-xl border border-zinc-600/50 bg-zinc-800/80 p-4 shadow-lg">
              <div className="flex items-center justify-between gap-2">
                <div className="h-4 w-32 rounded bg-zinc-600/50 animate-pulse" />
                <div className="h-3 w-14 rounded bg-zinc-600/50 animate-pulse" />
              </div>
              <div className="mt-2 h-3 w-20 rounded bg-zinc-600/40 animate-pulse" />
              <div className="mt-3 space-y-2">
                <div className="h-4 w-full rounded bg-zinc-600/50 animate-pulse" />
                <div className="h-4 w-4/5 rounded bg-zinc-600/50 animate-pulse" />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
