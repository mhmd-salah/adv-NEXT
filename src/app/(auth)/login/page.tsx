import { Suspense } from 'react';
import LoginForm from './_components/login-form';
import LoginFormSSR from './_components/login-form-ss'

export default function LoginPage() {
  console.log('login page DATABASE PASSWORD', process.env.DATABASE_PASSWORD);
  console.log('login page API URL', process.env.NEXT_PUBLIC_API_URL);

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 font-(family-name:--font-geist-sans)">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.12),transparent)] pointer-events-none" />
      <div className="relative w-full max-w-[400px]">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/90 shadow-2xl shadow-black/40 backdrop-blur-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
              Welcome back
            </h1>
            <p className="mt-2 text-sm text-zinc-500">
              Sign in to your account to continue
            </p>
          </div>

          {/* <Suspense> */}
          <LoginForm />
          {/* </Suspense> */}
          {/* <LoginFormSSR /> */}
          {/* <LoginForm>
            <LoginFormSSR />
          </LoginForm> */}

          <p className="mt-6 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{' '}
            <a
              href="#"
              className="font-medium text-amber-400/90 hover:text-amber-400 transition"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
