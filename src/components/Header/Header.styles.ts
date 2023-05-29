import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 2.75rem;
    }

    nav {
        ul {
            list-style: none;

            display: flex;
            gap: 0.5rem;

            li {
                width: 3rem;
                height: 3rem;

                a {
                    width: 100%;
                    height: 100%;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    color: ${props => props.theme.color["gray-100"]};

                    border-top: 3px solid transparent;
                    border-bottom: 3px solid transparent;

                    &:hover {
                        border-bottom-color: ${props => props.theme.color["green-500"]};
                    }

                    &.active {
                        color: ${props => props.theme.color["green-500"]};
                    }
                }
            }
        }
    }
`
