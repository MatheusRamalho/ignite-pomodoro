import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children?: ReactNode;
}

export interface ButtonContainerProps {
    variant: ButtonVariant;
}
