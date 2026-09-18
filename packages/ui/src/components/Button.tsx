import * as React from "react";
import { cn } from "../lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({
  className,
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
        variant === "default" &&
          "bg-black text-white hover:bg-black/80",
        variant === "outline" &&
          "border border-gray-300 bg-white text-black hover:bg-gray-100",
        className
      )}
      {...props}
    />
  );
}