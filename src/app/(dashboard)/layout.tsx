
import { USER_ROLES } from '@/lib/constants/api.constant';
import { TRole } from '@/lib/types/user';
// import { cookies } from 'next/headers';
// import { forbidden, unauthorized } from 'next/navigation';
import React from 'react'

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: DashboardLayoutProps) {
  // const cookiesStore = await cookies();
  // const token = cookiesStore.get('token')?.value;
  // const role = cookiesStore.get('role')?.value as TRole | undefined;

  // if (!true) {
  //   unauthorized();
  // }

  // if (USER_ROLES.ADMIN) forbidden();

  return (
    <>
      <div className="grid grid-cols-[20rem_1fr] min-h-screen">
        {/* Sidebar */}
        <aside className="bg-zinc-900 text-red-500 flex items-center justify-center">Dashboard Sidebar</aside>

        {children}
      </div>

    </>
  )
}
