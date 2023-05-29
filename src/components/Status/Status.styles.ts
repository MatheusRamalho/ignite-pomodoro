import styled from 'styled-components'

import { STATUS_COLORS, StatusContainerProps } from './Status.types'

export const StatusContainer = styled.span<StatusContainerProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before {
        content: '';

        width: 0.5rem;
        height: 0.5rem;
        border-radius: ${props => props.theme.rounded.full};
        background-color: ${props => props.theme.color[STATUS_COLORS[props.statusColor]]};
    }
`
