
import React from 'react'
import RegisterForm from './_components/register-form'

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 font-(family-name:--font-geist-sans)">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.12),transparent)] pointer-events-none" />
      <div className="relative w-full max-w-[400px]">
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/90 shadow-2xl shadow-black/40 backdrop-blur-sm p-8">
          <RegisterForm />
        </div>
      </div>
    </main>
  )
}
