import { FormContainer, MinuteAmountInput, TaskInput } from "./FormTask.styles"

export const FormTask = () => {
    return (
        <FormContainer>
            <label htmlFor="task"> Vou trabalhar em </label>
            <TaskInput
                id="task"
                type="text"
                list="task-suggestions"
                placeholder="Dê um nome para o seu projeto"
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
                step={5}
                min={5}
                max={60}
            />

            <span> minutos. </span>
        </FormContainer>
    )
}
