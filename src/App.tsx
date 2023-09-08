import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

import { Router } from './routers/Router'

import { CyclesContextProvider } from './contexts/CyclesContext'

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />

            <BrowserRouter>
                <CyclesContextProvider>
                    <Router />
                </CyclesContextProvider>
            </BrowserRouter>
        </ThemeProvider>
    )
}
