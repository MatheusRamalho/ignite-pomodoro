import styled, { css } from 'styled-components'

import { ButtonContainerProps } from './Button.types'

const buttonVariants = {
    primary: 'blue',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 5rem;
    height: 3rem;
    border: 0;
    border-radius: 0.8rem;

    color: ${props => props.theme.color.white};
    background-color: ${props => props.theme.color['green-500']};
    /* ${props => { return css`background-color: ${buttonVariants[props.variant]}` }} */
`;
