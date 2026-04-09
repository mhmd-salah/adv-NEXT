import Header from "./_components/header";

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

export default async function WebsiteLayout({ children }: WebsiteLayoutProps) {
  // useSession => Client Components
  // getServerSession => Server Side (Inside React)
  // getSession => Client Side (Outside React)
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {children}

      {/* Footer */}
      <p className="bg-zinc-900 text-white p-4 text-center">Footer</p>
    </div>
  )
}
