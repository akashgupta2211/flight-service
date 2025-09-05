import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-16  w-full rounded-md border border-blue-400 bg-transparent px-3 py-1 text-base shadow-sm transition-all duration-200",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-blue-600",
        "placeholder:text-blue-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus:border-blue-500",
        "hover:border-blue-500",
        "disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
