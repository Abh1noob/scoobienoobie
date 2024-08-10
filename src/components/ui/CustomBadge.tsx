import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const CustomBadgeVariants = cva(
  "inline-flex items-center font-normal rounded-full border px-2.5 py-0.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        pending:
          "border-transparent bg-[#FFF2E2] text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface CustomBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CustomBadgeVariants> {}

function CustomBadge({ className, variant, ...props }: CustomBadgeProps) {
  return (
    <div className={cn(CustomBadgeVariants({ variant }), className)} {...props} />
  );
}

export { CustomBadge, CustomBadgeVariants };
