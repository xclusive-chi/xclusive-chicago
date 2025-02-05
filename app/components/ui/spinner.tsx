import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

export function Spinner({ className, size = 24, ...props }: SpinnerProps) {
  return (
    <div className={cn("animate-spin", className)} {...props}>
      <Loader2 size={size} />
    </div>
  )
} 