import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Separator } from "@/components/ui/separator"

import { cn } from "@/lib/utils"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grid flex-1">
        <div className="bg-white">
          <Container className="py-8">
            <div
              className={cn(
                "flex items-center justify-center gap-x-4 pt-10 text-sm",
                "text-gray-900"
              )}
            >
              <p className="flex items-center">404</p>
              <Separator orientation="vertical" className="h-6 bg-gray-300" />
              <p className="uppercase tracking-wide">Page not found</p>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  )
}
