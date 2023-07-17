import { cva, cx, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentProps, type ForwardedRef } from "react";

const buttonVariant = cva("", {
  variants: {
    variant: {
      filled: ["bg-india-green", "hover:bg-opacity-90"],
      outline: [
        "border-2",
        "border-white",
        "hover:bg-white",
        "hover:text-india-green",
      ],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    radius: {
      xs: "rounded-sm",
      sm: "rounded",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-2xl", "py-4", "px-8"],
    },
    width: {
      min: "w-min",
      max: "w-max",
      full: "w-full",
    },
  },
  compoundVariants: [
    {
      variant: "filled",
      size: "medium",
    },
  ],
  defaultVariants: {
    radius: "sm",
    variant: "filled",
    size: "medium",
    width: "max",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariant> {}

function button(
  { className, variant, size, width, radius, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={cx(buttonVariant({ variant, size, width, radius, className }))}
      {...props}
    />
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(button);
Button.displayName = "Button";
