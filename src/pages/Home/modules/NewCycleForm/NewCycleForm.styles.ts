import styled from 'styled-components'

export const FormContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;

    font-size: ${(props) => props.theme.font['text-lg']};
    font-weight: ${(props) => props.theme.font.bold};
    color: ${(props) => props.theme.color['gray-100']};

    fieldset {
        border: none;
    }
`

const BaseInput = styled.input`
    height: 2.5rem;
    padding: 0 0.5rem;
    border: 0;
    border-bottom: 0.125rem solid ${(props) => props.theme.color['gray-500']};
    background-color: transparent;

    font-weight: ${(props) => props.theme.font.bold};
    font-size: ${(props) => props.theme.font['text-lg']};
    color: ${(props) => props.theme.color['gray-100']};

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme.color['green-500']};
    }

    &::placeholder {
        color: ${(props) => props.theme.color['gray-500']};
    }
`

export const TaskInput = styled(BaseInput)`
    flex: 1;

    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const MinuteAmountInput = styled(BaseInput)`
    width: 4rem;
`
