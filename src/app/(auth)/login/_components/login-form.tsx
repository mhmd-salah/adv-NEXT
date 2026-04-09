
'use client';

import React, { useId, useState } from 'react';
import useLogin from '../_hooks/use-login';
import { signIn } from 'next-auth/react';

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState('abdulrahman38');
  const [password, setPassword] = useState('Abdulrahman@123');
  const { isPending, login } = useLogin();
  const id = useId();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // login({ username, password });
    const res = await signIn('credentials', {
      username,
      password,
      redirect: false,
    })

    if (!res?.ok) {
      setError(res?.error || 'An error occurred');
      return;
    }

    const callbackUrl = new URLSearchParams(location.search).get('callbackUrl') || 'dashboard';

    location.href = callbackUrl;
  }

  // console.log('login form DATABASE PASSWORD', process.env.DATABASE_PASSWORD);
  // console.log('login form API URL', process.env.NEXT_PUBLIC_API_URL);


  // useEffect(() => {
  //   startTransition(() => {
  //     setError(null);
  //   });
  // }, []);

  // if (show) {
  //   return <div>
  //     <p>Login Form</p>
  //   </div>
  // }



  return (
    <>
      {/* <UpdateProfile /> */}
      <form onSubmit={handleSubmit} className="space-y-5" id={id}>
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-zinc-400 mb-1.5"
          >
            Username
          </label>
          <input
            id="username"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="yourusername"
            autoComplete="username"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-amber-500/70 focus:ring-2 focus:ring-amber-500/20"
          />
        </div>

        {/* <LoginFormSSR /> */}
        {/* {children} */}

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-zinc-400"
            >
              Password
            </label>
            <a
              href="#"
              className="text-xs text-amber-400/90 hover:text-amber-400 transition"
            >
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-amber-500/70 focus:ring-2 focus:ring-amber-500/20"
          />
        </div>

        <label className="flex items-center gap-2.5 cursor-pointer group">
          <input
            type="checkbox"
            className="rounded border-zinc-600 bg-zinc-800 text-amber-500 focus:ring-amber-500/30 focus:ring-offset-0 focus:ring-2"
          />
          <span className="text-sm text-zinc-500 group-hover:text-zinc-400 transition">
            Remember me
          </span>
        </label>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded-lg bg-amber-500 py-3 px-4 font-medium text-zinc-900 shadow-lg shadow-amber-500/25 transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isPending ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="animate-spin h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Signing in…
            </span>
          ) : (
            'Sign in'
          )}
        </button>
      </form>

      <hr className="my-4" />

      <div className='p-6 flex items-center justify-center'>
        <button onClick={() => signIn('google')} className='w-full rounded-lg bg-zinc-100 py-3 px-4 font-medium text-zinc-900 shadow-lg cursor-pointer shadow-amber-500/25 transition hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-zinc-900 disabled:opacity-60 disabled:cursor-not-allowed'>Sign in with Google</button>
      </div>
    </>
  )
}
