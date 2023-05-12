import { ButtonContainer } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = ({ children, variant = 'primary' }: ButtonProps) => {
    return (
        <ButtonContainer variant={variant}>
            {children}
        </ButtonContainer>
    );
}
