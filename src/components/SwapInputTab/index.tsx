import styled from "styled-components"

const SwapInputTab = ({ input }: SwapInputType) => {
    return (
        <Container>
            <ul>
                <li>Swap</li>
                <li>Buy</li>
            </ul>
            <ul>
                <li>Setting</li>
            </ul>
            <div className="input-wrap">
                <input type="text" />
                <input type="text" />
            </div>
            <button>Swap / Connect Wallet</button>
        </Container>
    )
}

export default SwapInputTab

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 450px;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
            list-style-type: none;
        }
    }

    .input-wrap {
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
    }

    button {
        
    }

`
