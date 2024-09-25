import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grid flex-1">{children}</main>
      <Footer />
    </div>
  )
}
