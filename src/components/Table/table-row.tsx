import { TableHTMLAttributes } from 'react'

interface TableRowProps extends TableHTMLAttributes<HTMLTableRowElement> {}

export function TableRow({ ...props }: TableRowProps) {
    return <tr className="hover:bg-gray-800/50" {...props} />
}
