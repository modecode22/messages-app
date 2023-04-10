import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority"
import { ButtonHTMLAttributes } from "react";
import {AiOutlineLoading} from 'react-icons/ai'

const buttonVariants = cva(
  "flex justify-center items-center py-1 px-2 rounded-xl disabled:bg-slate-600/50 hover:brightness-95 active:brightness-105 duration-100 transition-all text-slate-50 shadow-sm disabled:brightness-90 select-none",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-gray-900 to-cyan-900/80 hover:to-cyan-900",
        primary:
          "bg-gradient-to-br from-teal-600 via-cyan-600 to-emerald-600/50 hover:to-cyan-600 ",
        red: "bg-red-600",
        green: "bg-green-600",
      },
      size: {
        default: "",
        small: "text-sm",
        large: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
        isLoading?: boolean;
    }

const Button = ({className ,children, variant , isLoading , size,...props }: ButtonProps) => {
  return( 
  <button className={cn(buttonVariants({variant, size , className}))} disabled={isLoading} {...props} >
    {isLoading? <AiOutlineLoading className="w-4 h-4 animate-spin " />:null}
  {children}
  </button>
  );
};

export default Button
