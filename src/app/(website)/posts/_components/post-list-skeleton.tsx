export default function PostListSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border border-zinc-600/50 bg-zinc-800/80 p-5 shadow-lg"
        >
          {/* Title */}
          <div className="h-6 w-3/4 rounded bg-zinc-600/60 animate-pulse" />
          {/* Excerpt lines */}
          <div className="mt-3 space-y-2">
            <div className="h-4 w-full rounded bg-zinc-600/50 animate-pulse" />
            <div className="h-4 w-full rounded bg-zinc-600/50 animate-pulse" />
            <div className="h-4 w-2/3 rounded bg-zinc-600/50 animate-pulse" />
          </div>
          {/* Tags */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <div className="h-5 w-14 rounded-full bg-zinc-600/50 animate-pulse" />
            <div className="h-5 w-20 rounded-full bg-zinc-600/50 animate-pulse" />
            <div className="h-5 w-16 rounded-full bg-zinc-600/50 animate-pulse" />
          </div>
          {/* Footer stats */}
          <div className="mt-4 flex items-center gap-4 border-t border-zinc-600/50 pt-3">
            <div className="h-3 w-12 rounded bg-zinc-600/50 animate-pulse" />
            <div className="h-3 w-14 rounded bg-zinc-600/50 animate-pulse" />
            <div className="h-3 w-10 rounded bg-zinc-600/50 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}
