import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Button } from '../../components/Button'
import { Countdown } from '../../components/Countdown'

import { HomeContainer, FormContainer, MinuteAmountInput, TaskInput } from './Home.styles'

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
})

// Sempre que quiser referenciar uma variavel javascript no javascript, precisa usar o typeof
type NewCycleFormDataProps = zod.infer<typeof newCycleFormValidationSchema>

export const Home = () => {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormDataProps>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    });

    const handleCreateNewCycle = (data: NewCycleFormDataProps) => {
        console.log(data)
        reset()
    }

    const task = watch('task')
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form id="pomodoroStartForm" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task"> Vou trabalhar em </label>
                    <TaskInput
                        id="task"
                        type="text"
                        list="task-suggestions"
                        placeholder="Dê um nome para o seu projeto"
                        required
                        autoFocus
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
                        {...register('minutesAmount', { valueAsNumber: true })}
                    />

                    <span> minutos. </span>
                </FormContainer>

                <Countdown />

                <Button
                    type="submit"
                    form="pomodoroStartForm"
                    disabled={isSubmitDisabled}
                >
                    <Play size={24} />
                    Começar
                </Button>
            </form>
        </HomeContainer>
    )
}
