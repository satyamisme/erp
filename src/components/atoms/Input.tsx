import * as React from "react"
import { cn } from "../../lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="relative group">
        {icon && (
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors text-xl">
                {icon}
            </span>
        )}
        <input
          type={type}
          className={cn(
            "flex w-full rounded-lg bg-surface-container-low hover:bg-surface-container-high focus:bg-surface-container-lowest border-none ring-1 ring-outline-variant/20 focus:ring-2 focus:ring-primary/40 text-sm text-on-surface transition-all outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-outline/50 disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "py-3 pl-11 pr-4" : "py-3 px-4",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }