import { NavLink } from 'react-router-dom'
import { Scroll, Timer } from 'phosphor-react'

import { HeaderContainer } from './Header.styles'

import logoIgnite from '../../assets/ignite-logo.svg'

export const Header = () => {
    return (
        <HeaderContainer>
            <img
                src={logoIgnite}
                alt=""
            />

            <nav>
                <ul>
                    <li>
                        <NavLink to="/" title="Timer">
                            <Timer size={28} />
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/history" title="Histórico">
                            <Scroll size={28} />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}
