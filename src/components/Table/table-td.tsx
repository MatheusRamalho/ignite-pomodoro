import { TdHTMLAttributes } from 'react'

interface TableTdProps extends TdHTMLAttributes<HTMLTableDataCellElement> {}

export function TableTd({ ...props }: TableTdProps) {
    return (
        <td
            className="p-4 border-t-4 border-t-gray-800 bg-gray-700 text-md leading-[160%] first:w-1/2 first:pl-6 last:pr-6"
            {...props}
        />
    )
}
