import styled from 'styled-components'

export const DefaultLayoutContainer = styled.div`
    max-width: 74rem; //1084px
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;

    border-radius: ${(props) => props.theme.rounded.lg};
    background-color: ${(props) => props.theme.color['gray-800']};

    display: flex;
    flex-direction: column;
`
