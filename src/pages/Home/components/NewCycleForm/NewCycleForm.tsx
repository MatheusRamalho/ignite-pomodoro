import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CyclesContext } from '../../../../contexts/CyclesContext'
import { FormContainer, MinuteAmountInput, TaskInput } from './NewCycleForm.styles'

export const NewCycleForm = () => {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (
        <FormContainer>
            <label htmlFor="task"> Vou trabalhar em </label>

            <TaskInput
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

            <MinuteAmountInput
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
        </FormContainer>
    )
}
