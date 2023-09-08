import { ButtonContainer } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
    return (
        <ButtonContainer variant={variant} {...props}>
            {children}
        </ButtonContainer>
    )
}
