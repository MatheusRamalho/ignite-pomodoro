import { Play } from 'phosphor-react'

import { Button } from '../../components/Button'
import { Countdown } from '../../components/Countdown'
import { FormTask } from '../../components/FormTask'

import { HomeContainer } from './Home.styles'

export const Home = () => {
    return (
        <HomeContainer>
            <form id="pomodoroStartForm">
                <FormTask />

                <Countdown />

                <Button
                    type="submit"
                    form="pomodoroStartForm"
                >
                    <Play size={24} />
                    Começar
                </Button>
            </form>
        </HomeContainer>
    )
}
