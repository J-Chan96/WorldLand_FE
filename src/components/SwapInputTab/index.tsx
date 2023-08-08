import styled from "styled-components"
import { IoMdSettings } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import { crypto_list } from "data";

const SwapInputTab = ({ input }: SwapInputType) => {
    return (
        <Container>
            <ul>
                <li>Swap</li>
                <li>Buy</li>
                <li className="last-index">
                    <IoMdSettings color="#53596E" size={25} />
                </li>
            </ul>

            <div className="input-wrap">
                <div className="input-hold">
                    <div className="input-and-label">
                        <label htmlFor="pay">You pay</label>
                        <input id="pay" type="text" placeholder="0" />
                    </div>
                    <div className="selected-coin">
                        <img src={crypto_list[0]["icon"]} alt={crypto_list[0]["title"]} />
                        <p>{crypto_list[0]["symbol"]}</p>
                        <BiChevronDown color="#ffffff" size={25} />
                    </div>
                </div>
                <div className="input-hold">
                    <div className="input-and-label">
                        <label htmlFor="receive">You receive</label>
                        <input id="receive" type="text" placeholder="0" />
                    </div>
                    <div className="selected-coin-2nd blue-bgd">
                        {/* <img src={crypto_list[2]["icon"]} alt={crypto_list[2]["title"]} /> */}
                        {/* <p>{crypto_list[2]["symbol"]}</p> */}
                        <p>Select token</p>
                        <BiChevronDown color="#ffffff" size={25} />
                    </div>
                </div>
                <Button>Connect Wallet</Button>
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
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    

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
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            background-color: #131A2A;
            border-radius: 10px;
            padding: 20px;
            height: 120px;

            .input-and-label {
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                flex-direction: column;
                label {
                    color: #53596E;
                }
                input {
                font-size: 34px;
                border: none;
                outline: none;
                background: transparent;
                width: 70%;
                color: #ffffff;
                font-weight: 600;
              }
            }
             
             
              .selected-coin {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                padding: 0 5px;
                background-color: #293249;
                border-radius: 50px;
                height: 30px;
                cursor: pointer;
                p {
                    color: #ffffff;
                    font-size: 20px;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
                img {
                    width: 25px;
                    height: 25px;
                }
              }
              .selected-coin-2nd {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                padding: 0 5px;
                background-color: #293249;
                border-radius: 50px;
                height: 30px;
                cursor: pointer;
                /* width: 100%; */
                max-width: 170px;
                p {
                    color: #ffffff;
                    font-size: 20px;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    white-space: nowrap;
                    word-break: normal;
                }
                img {
                    width: 25px;
                    height: 25px;
                }
              }
              .blue-bgd {
                padding: 0 10px;
                background-color: #4c82fb;
              }
              

        }
            .input-hold:hover {
                border: 1px solid #2e374f;
            }
    }
`
const Button = styled.button`
    width: 100%;
    color: #4e7be2;
    background-color: #1e3062;
    padding: 15px;
    font-size: 20px;
    border-radius: 15px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
        background-color: #1C2232;
    }
`;
