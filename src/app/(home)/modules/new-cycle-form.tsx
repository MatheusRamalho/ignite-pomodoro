import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '@/contexts/CyclesContext'

export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (
        <div className="w-full flex items-center justify-center gap-2 flex-wrap text-lg font-bold text-gray-100">
            <label htmlFor="task"> Vou trabalhar em </label>

            <input
                className="flex-1 h-10 px-2 border-b-2 border-b-gray-500 bg-transparent font-bold text-lg text-gray-100 focus:shadow-none focus:border-green-500 placeholder:text-gray-500"
                id="task"
                type="text"
                list="task-suggestions"
                placeholder="Dê um nome para o seu projeto"
                required
                autoFocus
                disabled={!!activeCycle}
                {...register('task')}
            />

            <datalist id="task-suggestions">
                <option value="Projeto 01" />
                <option value="Projeto 02" />
                <option value="Projeto 03" />
            </datalist>

            <label htmlFor="minutesAmount"> durante </label>

            <input
                className="w-16 h-10 px-2 border-b-2 border-b-gray-500 bg-transparent font-bold text-lg text-gray-100 focus:shadow-none focus:border-green-500 placeholder:text-gray-500"
                id="minutesAmount"
                type="number"
                placeholder="00"
                required
                step={5}
                min={5}
                max={60}
                disabled={!!activeCycle}
                {...register('minutesAmount', { valueAsNumber: true })}
            />

            <span> minutos. </span>
        </div>
    )
}
