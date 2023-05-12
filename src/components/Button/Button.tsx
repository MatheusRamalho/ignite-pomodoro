import { ButtonContainer } from './Button.styles'
import { ButtonProps } from './Button.types'

export const Button = ({ variant = 'primary' }: ButtonProps) => {
    return (
        <ButtonContainer variant={variant}>
            Enviar
        </ButtonContainer>
    );
}
