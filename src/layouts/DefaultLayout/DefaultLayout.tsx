import { Outlet } from 'react-router-dom'

import { Header } from '../../components/Header'

import { DefaultLayoutContainer } from './DefaultLayout.styles'

export const DefaultLayout = () => {
    return (
        <DefaultLayoutContainer>
            <Header />
            <Outlet />
        </DefaultLayoutContainer>
    )
}
