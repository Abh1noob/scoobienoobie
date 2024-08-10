import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonStyles = cva(
  "inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded transition-colors focus:outline-none",
  {
    variants: {
      variant: {
        filled: "bg-black text-white hover:bg-black-600 hover:brightness-90",
        outlined: "border border-black text-black hover:opacity-90",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  },
);

interface CustomButtonProps {
  href?: string;
  variant?: "filled" | "outlined";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "filled",
  children,
  onClick,
  className,
}) => {
  return (
    <button
      className={cn(buttonStyles({ variant }), className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
