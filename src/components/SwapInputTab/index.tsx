import styled from "styled-components"

const SwapInputTab = ({ input }: SwapInputType) => {
    return (
        <Container>
            <ul>
                <li>Swap</li>
                <li>Buy</li>
                <li className="last-index">Setting</li>
            </ul>

            <div className="input-wrap">
                <input type="text" placeholder="0.0" />
                <input type="text" placeholder="0.0" />
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
    width: 100%;
    max-width: 350px;
    border: 1px solid #999999;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10px;
        margin: 0 20px;
        li {
            list-style-type: none;
            color: #ffffff;
        }
        .last-index {
            text-align: right;
            width: 100%;
        }
    }

    .input-wrap {
        display:flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100%;
        gap: 5px;
        input {
            width: 100%;
            background-color: #263354;
            border: none;
            outline: none;
            border-radius: 10px;
            padding: 20px;
            font-size: 24px;
        }
    }

    button {
        color: #ffffff;
    }

`
