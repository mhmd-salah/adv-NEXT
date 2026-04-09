'use client';

import { signOut, useSession } from 'next-auth/react';
import React from 'react'

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="flex items-center justify-between p-4">
      <p className="bg-zinc-900 text-white p-4 text-center">Header</p>

      <p>Hello, <span>{session?.user.firstName}</span> <button onClick={() => signOut({
        callbackUrl: '/login',
      })}
        className="bg-zinc-900 text-white p-2 rounded-md hover:bg-zinc-800"
      >Logout</button></p>

      {/* {session?.user.profilePhoto && <img src={session?.user.profilePhoto} alt="Profile" className="w-10 h-10 rounded-full" />} */}
    </header>
  )
}
