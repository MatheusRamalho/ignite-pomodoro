import styled from 'styled-components'

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3.5rem;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const FormContainer = styled.form`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    font-size: ${props => props.theme.font['text-lg']};
    font-weight: ${props => props.theme.font.bold};
    color: ${props => props.theme.color['gray-100']};

    fieldset {
        border: none;
    }
`
