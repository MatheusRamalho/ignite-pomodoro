import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CyclesContext } from '../../contexts/CyclesContext'

import { Button } from '../../components/Button'
import { StopCountdownButton } from '../../components/Button/Button.styles'
import { NewCycleForm } from './components/NewCycleForm'
import { Countdown } from './components/Countdown'

import { HomeContainer } from './styles'

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos')
})

// Sempre que quiser referenciar uma variavel javascript no javascript, precisa usar o typeof
type NewCycleFormDataProps = zod.infer<typeof newCycleFormValidationSchema>

export const Home = () => {
    const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)

    const newCycleForm = useForm<NewCycleFormDataProps>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })

    const { handleSubmit, watch, reset } = newCycleForm

    const task = watch('task')
    const isSubmitDisabled = !task

    const handleCreateNewCycle = (data: NewCycleFormDataProps) => {
        createNewCycle(data)
        reset()
    }

    return (
        <HomeContainer>
            <form
                id="pomodoroStartForm"
                onSubmit={handleSubmit(handleCreateNewCycle)}
            >
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>

                <Countdown />

                {activeCycle ? (
                    <StopCountdownButton
                        type="button"
                        variant="secondary"
                        onClick={interruptCurrentCycle}
                    >
                        <HandPalm size={24} />
                        Interromper
                    </StopCountdownButton>
                ) : (
                    <Button
                        type="submit"
                        form="pomodoroStartForm"
                        disabled={isSubmitDisabled}
                    >
                        <Play size={24} />
                        Começar
                    </Button>
                )}
            </form>
        </HomeContainer>
    )
}
