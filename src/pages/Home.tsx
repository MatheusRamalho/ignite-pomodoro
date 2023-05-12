import { Play } from 'phosphor-react'

import { Button } from '../components/Button'
import { Countdown } from '../components/Countdown'

import { FormContainer, HomeContainer } from './styles'

export const Home = () => {
    return (
        <HomeContainer>
            <FormContainer action="" id="pomodoroStartForm">
                <fieldset>
                    <legend hidden> Informações da task </legend>

                    <label htmlFor="task"> Vou trabalhar em </label>
                    <input id="task" />

                    <label htmlFor="minutesAmount"> Durante </label>
                    <input id="minutesAmount" />
                    <span> minutos. </span>
                </fieldset>
            </FormContainer>

            <Countdown />

            <Button
                type="submit"
                form="pomodoroStartForm"
            >
                <Play size={24} />
                Começar
            </Button>
        </HomeContainer>
    )
}
