import { siteConfig } from "@/lib/site"

import { Container } from "./container"

export function Footer() {
  return (
    <footer className="border-t border-t-gray-200 bg-white">
      <Container className="py-5 md:flex md:items-center md:justify-between">
        <div>
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
        <div className="pt-1 text-center text-sm text-gray-500 md:pt-0">
          Created by <span className="font-semibold">Dylan Barduzzi</span>
        </div>
      </Container>
    </footer>
  )
}
