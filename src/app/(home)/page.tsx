'use client'

import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { CyclesContext } from '@/contexts/cyclesContext'
import { Button } from '@/components/button'
import { Countdown } from './modules/countdown'
import { NewCycleForm } from './modules/new-cycle-form'
import { Hand, PlayIcon } from 'lucide-react'

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number()
        .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
        .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

// Sempre que quiser referenciar uma variavel javascript no javascript, precisa usar o typeof
type NewCycleFormDataProps = zod.infer<typeof newCycleFormValidationSchema>

export default function Home() {
    const { activeCycle, createNewCycle, interruptCurrentCycle } =
        useContext(CyclesContext)

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

    function handleCreateNewCycle(data: NewCycleFormDataProps) {
        createNewCycle(data)
        reset()
    }

    return (
        <main className="flex-1 flex flex-col items-center justify-center gap-14">
            <form
                className="flex flex-col items-center gap-14"
                id="pomodoroStartForm"
                onSubmit={handleSubmit(handleCreateNewCycle)}
            >
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>

                <Countdown />

                {activeCycle ? (
                    <Button
                        type="button"
                        variant="secondary"
                        onClick={interruptCurrentCycle}
                    >
                        <Hand size={24} />
                        Interromper
                    </Button>
                ) : (
                    <Button
                        type="submit"
                        form="pomodoroStartForm"
                        disabled={isSubmitDisabled}
                    >
                        <PlayIcon size={24} />
                        Começar
                    </Button>
                )}
            </form>
        </main>
    )
}
