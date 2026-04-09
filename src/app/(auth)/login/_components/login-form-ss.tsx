import { IApiResponse } from "@/lib/types/api";
import { ILoginResponse } from "@/lib/types/auth";
import { cookies } from "next/headers";
import LoginButton from "./login-button";

async function login(formData: FormData) {
  'use server';

  const username = formData.get('username') as string;
  const password = formData.get('password') as string;


  const response = await fetch('https://exam-app.elevate-bootcamp.cloud/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const payload: IApiResponse<ILoginResponse> = await response.json();

  if (payload.status !== true) {
    console.error(payload.message);
    return;
  }

  if (payload.payload?.token) {
    // localStorage.setItem('token', data.payload.token);
    const cookiesStore = await cookies();
    cookiesStore.set('token', payload.payload.token, {
      httpOnly: true, // XSS Protection
      sameSite: 'lax', // CSRF Protection (CSRF Token preferably)
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // 7 days
      secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
    })
  }
}

export default function LoginFormSSR() {


  return (
    <>
      <form
        // action={action} 
        className="space-y-5">
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
            placeholder="yourusername"
            required
            autoComplete="username"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-amber-500/70 focus:ring-2 focus:ring-amber-500/20"
          />
        </div>

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
            placeholder="••••••••"
            required
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

        <LoginButton />
      </form>
    </>
  )
}
