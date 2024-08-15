import { TableHTMLAttributes } from 'react'

interface TableRootProps extends TableHTMLAttributes<HTMLTableElement> {}

export function TableRoot({ ...props }: TableRootProps) {
    return (
        <div className="flex-1 overflow-auto mt-8">
            <table
                className="w-full min-w-[600px] border-collapse"
                {...props}
            />
        </div>
    )
}
