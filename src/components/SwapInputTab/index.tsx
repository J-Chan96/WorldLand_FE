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
                <div className="input-hold"><input type="text" placeholder="0" /></div>
                <div className="input-hold"><input type="text" placeholder="0" /></div>
                <Button>Select a token</Button>
            </div>
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
    max-width: 440px;
    border: 1px solid #2e374f;
    border-radius: 10px;
    padding: 10px;
    gap: 10px;
    background-color: #0E111C;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 10px;
        margin: 5px 20px;
        li {
            list-style-type: none;
            color: #53596E;
            font-weight: 600;
            cursor: pointer;
        }
        li:hover {
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
        .input-hold {
            width: 100%;
            background-color: #131A2A;
            border-radius: 10px;
            padding: 20px;
            height: 90px;
             
            input {
                font-size: 34px;
                border: none;
                outline: none;
                background: transparent;
                width: 70%;
                color: #53596E;
              }
        }
        .input-hold:hover {
                border: 1px solid #2e374f;
            }
    }
`
const Button = styled.button`
    width: 100%;
    color: #53596E;
    background-color: #1C2232;
    padding: 15px;
    font-size: 20px;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer;
`;
