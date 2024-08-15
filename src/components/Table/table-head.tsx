import { TableHTMLAttributes } from 'react'

interface TableHeadProps extends TableHTMLAttributes<HTMLTableSectionElement> {}

export function TableHead({ ...props }: TableHeadProps) {
    return <thead {...props} />
}
