import { CountdownContainer, CountdownSeparator } from "./Countdown.styles"
import { CountdownProps } from "./Countdown.types"

export const Countdown = ({ minutes, seconds }: CountdownProps) => {
    return (
        <CountdownContainer>
            <span> {minutes[0]} </span>
            <span> {minutes[1]} </span>
            <CountdownSeparator> : </CountdownSeparator>
            <span> {seconds[0]} </span>
            <span> {seconds[1]} </span>
        </CountdownContainer>
    )
}
