import Link from "next/link";
import HoveredLink from "./new/_components/hovered-link";

interface ProductsLayoutProps {
  children: React.ReactNode;
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
  return <>


    <p className="text-lg text-yellow-500 font-semibold text-center p-6">Products Layout</p>

    {children}

    <nav className="flex gap-4 justify-center">
      <HoveredLink href="/products">Products</HoveredLink>
      <HoveredLink href="/products/new">New</HoveredLink>
      <HoveredLink href="/products/relevant">Relevant</HoveredLink>
    </nav>
  </>
}