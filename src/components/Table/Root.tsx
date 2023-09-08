import { TableContainer } from './Table.styles'
import { TableRootProps } from './Table.types'

export const TableRoot = ({ children }: TableRootProps) => {
    return (
        <TableContainer>
            <table>{children}</table>
        </TableContainer>
    )
}
