import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2x ${props => props.theme.color["green-500"]};
    }

    body {
        background-color: ${props => props.theme.color["gray-900"]};
        color: ${props => props.theme.color["gray-300"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: ${props => props.theme.font.text};
        font-weight: ${props => props.theme.font.regular};
        font-size: ${props => props.theme.font["text-base"]};
    }
`
