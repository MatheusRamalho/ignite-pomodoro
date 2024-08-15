import { TableHTMLAttributes } from 'react'

interface TableThProps extends TableHTMLAttributes<HTMLTableCellElement> {}

export function TableTh({ ...props }: TableThProps) {
    return (
        <th
            className="p-4 bg-gray-600 text-left text-md text-gray-100 first:pl-6 first:rounded-tl-lg last:pr-6 last:rounded-tr-lg"
            {...props}
        />
    )
}
