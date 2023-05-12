import styled from 'styled-components'

export const CountdownContainer = styled.div`
    font-family: ${props => props.theme.font.title};
    font-weight: ${props => props.theme.font.bold};
    font-size: ${props => props.theme.font["text-xxl"]};
    line-height: ${props => props.theme.font.lh};
    color: ${props => props.theme.color['gray-100']};

    display: flex;
    gap: 1rem;

    span {
        padding: 2rem 1rem;
        border-radius: ${props => props.theme.rounded.lg};
        background-color: ${props => props.theme.color['gray-700']};
    }
`

export const CountdownSeparator = styled.div`
    width: 4rem;
    overflow: hidden;
    padding: 2rem 0;

    color: ${props => props.theme.color['green-500']};
    
    display: flex;
    justify-content: center;
`
