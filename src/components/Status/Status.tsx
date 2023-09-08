import { StatusContainer } from './Status.styles'
import { StatusProps } from './Status.types'

export const Status = ({ name, statusColor }: StatusProps) => {
    return <StatusContainer statusColor={statusColor}>{name}</StatusContainer>
}
