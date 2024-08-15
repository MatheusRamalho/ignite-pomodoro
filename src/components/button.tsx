import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
    slots: {
        base: 'cursor-pointer w-full border-none p-4 rounded-md font-bold text-gray-100 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70',
    },
    variants: {
        variant: {
            primary: {
                base: 'bg-green-500 hover:bg-green-700',
            },
            secondary: {
                base: 'bg-red-500 hover:bg-red-700',
            },
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

export interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof button> {}

export function Button({ children, variant, ...props }: ButtonProps) {
    const { base } = button({ variant })

    return (
        <button className={base()} {...props}>
            {children}
        </button>
    )
}
