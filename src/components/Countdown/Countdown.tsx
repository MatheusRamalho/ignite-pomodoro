import { CountdownContainer, CountdownSeparator } from "./Countdown.styles"

export const Countdown = () => {
    return (
        <CountdownContainer>
            <span> 0 </span>
            <span> 0 </span>
            
            <CountdownSeparator> : </CountdownSeparator>

            <span> 0 </span>
            <span> 0 </span>
        </CountdownContainer>
    )
}
