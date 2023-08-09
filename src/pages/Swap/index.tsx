import SwapInputTab from "components/SwapInputTab"
import { styled } from "styled-components"

const Swap = () => {
    return (
        <Container>
            <SwapInputTab input="1.0" />
        </Container>
    )
}

export default Swap

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background:linear-gradient(to bottom, #1c233e, #06080c);
    height: 100vh;
`;