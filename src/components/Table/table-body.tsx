import { TableHTMLAttributes } from 'react'

interface TableBodyProps extends TableHTMLAttributes<HTMLTableSectionElement> {}

export const TableBody = ({ ...props }: TableBodyProps) => {
    return <tbody {...props} />
}
