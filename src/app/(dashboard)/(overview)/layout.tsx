
// import { cookies } from 'next/headers'
import { authOptions } from '@/auth'
import { getServerSession } from 'next-auth'
import React from 'react'

interface OverviewLayoutProps {
  admin: React.ReactNode
  user: React.ReactNode
  children: React.ReactNode
}

export default async function OverviewLayout({ admin, user, children }: OverviewLayoutProps) {
  // const roleCookie = await cookies();
  // const role = roleCookie.get('role')?.value;
  const session = await getServerSession(authOptions);
  const role = session?.user.role;

  return (
    <div>
      <h1>OverviewLayout</h1>

      <main className="bg-zinc-800 flex items-center justify-center">
        {role === 'ADMIN' ? admin : user}
      </main>

      {children}
    </div>
  )
}
