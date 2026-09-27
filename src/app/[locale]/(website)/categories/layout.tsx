
import React from 'react'
import CategoryHeader from './[...id]/_components/header'
import { Suspense } from 'react';

interface CategoriesLayoutProps {
  children: React.ReactNode;
}

export default function CategoriesLayout({ children }: CategoriesLayoutProps) {
  return (
    <div>
      <Suspense>
        <CategoryHeader />
      </Suspense>

      {children}
    </div>
  )
}
