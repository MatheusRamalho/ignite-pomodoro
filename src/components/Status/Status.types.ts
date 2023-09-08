export const STATUS_COLORS = {
    yellow: 'yellow-500',
    red: 'red-500',
    green: 'green-500',
} as const // AS CONST - DEFINE QUE SEMPRE VAI SER ESSAS STRINGS...

export interface StatusContainerProps {
    statusColor: keyof typeof STATUS_COLORS
}

export interface StatusProps {
    name: 'Em andamento' | 'Interrompido' | 'Concluído'
    statusColor: keyof typeof STATUS_COLORS
}
