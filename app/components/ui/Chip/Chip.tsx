import React from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: "default" | "green" | "blue";
  className?: string;
}

const variantStyles = {
  default: "border-border bg-muted text-foreground",
  green:
    "border-green-200 bg-green-50 text-green-700 dark:border-green-900 dark:bg-green-950 dark:text-green-300",
  blue: "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-300",
};

const Chip = ({ icon, children, variant = "default" }: ChipProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 pl-1 px-3 py-1 text-sm rounded-full border",
        variantStyles[variant]
      )}
    >
      {icon && <span className="w-fit h-fit">{icon}</span>}
      {children}
    </div>
  );
};

export default Chip;
