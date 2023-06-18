import { cva, cx, type VariantProps } from "class-variance-authority";
import { forwardRef, type ComponentProps, type ForwardedRef } from "react";

const buttonVariant = cva(["font-semibold", "rounded"], {
  variants: {
    variant: {
      primary: ["bg-india-green", "text-white", "hover:bg-opacity-90"],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-2xl", "py-3", "px-11"],
    },
    width: {
      min: "w-min",
      max: "w-max",
      full: "w-full",
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      size: "medium",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "medium",
    width: "max",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariant> {}

function button(
  { className, variant, size, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button
      ref={ref}
      className={cx(buttonVariant({ variant, size, className }))}
      {...props}
    />
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(button);
Button.displayName = "Button";
