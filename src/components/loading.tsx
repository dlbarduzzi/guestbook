import { Spinner } from "@/components/ui/spinner"

export function Loading() {
  return (
    <div className="flex justify-center px-4 py-16 sm:py-24">
      <Spinner size="lg" />
    </div>
  )
}
