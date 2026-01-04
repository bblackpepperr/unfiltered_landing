"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TicketButtonProps {
  size?: "default" | "lg"
  variant?: "default" | "outline"
  className?: string
}

export function TicketButton({ size = "default", variant = "default", className }: TicketButtonProps) {
  return (
    <Button
      variant={variant}
      disabled
      className={cn(
        "group font-bold uppercase tracking-[0.15em] transition-all duration-300 cursor-not-allowed",
        size === "lg" && "text-lg px-10 py-7",
        variant === "default" && "bg-[#FF6B35] text-white opacity-90 shadow-lg shadow-[#FF6B35]/25",
        variant === "outline" && "border-2 border-[#FF6B35] text-[#FF6B35] opacity-90",
        className,
      )}
    >
      Coming Soon
    </Button>
  )
}
