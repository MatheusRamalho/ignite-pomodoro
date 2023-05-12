import styled from 'styled-components'

export const HistoryContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;

    padding: 3.5rem;

    h1 {
        font-size: ${props => props.theme.font['text-xl']};
        color: ${props => props.theme.color['gray-100']};
    }
`
