import styled, { css } from 'styled-components'

import { ButtonContainerProps } from './Button.types'

const buttonVariants = {
    primary: 'blue',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    /* ${props => { return css`background-color: ${buttonVariants[props.variant]}` }} */
    cursor: pointer;

    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: ${props => props.theme.rounded.md};
    background-color: ${props => props.theme.color['green-500']};

    font-weight: ${props => props.theme.font.bold};
    color: ${props => props.theme.color['gray-100']};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }

    &:not(:disabled):hover {
        background-color: ${props => props.theme.color['green-700']};
    }
`;
