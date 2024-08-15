interface StatusProps {
    name: 'Em andamento' | 'Interrompido' | 'Concluído'
    // statusColor: keyof typeof STATUS_COLORS
}

export function Status({ name }: StatusProps) {
    return (
        <span
            className={`flex items-center gap-2 before:content-[''] before:size-2 before:rounded-full
                ${name === 'Concluído' && 'before:bg-green-500'}
                ${name === 'Interrompido' && 'before:bg-red-500'}
                ${name === 'Em andamento' && 'before:bg-yellow-500'}
            `}
        >
            {name}
        </span>
    )
}
