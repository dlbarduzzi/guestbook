import { Suspense } from "react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Loading } from "@/components/loading"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grid flex-1">
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
      <Footer />
    </div>
  )
}
