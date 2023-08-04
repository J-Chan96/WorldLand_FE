import { styled } from "styled-components";
import { CgClose } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { crypto_list } from "data";

const TokenModal = () => {
    return (
        <Container>
            <section className="first-block">
                <p>Select a token</p>
                <CgClose color="#ffffff" size={20} />
            </section>
            <div className="input-hold">
                <AiOutlineSearch color="#ffffff" size={25} />
                <input type="text" placeholder="Search name or paste address" />
            </div>
            <ul className="often-selected-crypto">
                {crypto_list.map((el, i) => (
                    <li key={i}>
                        <img src={el.icon} alt={el.title} />
                        {el.symbol}
                    </li>
                ))}
            </ul>
        </Container>
    )
}

export default TokenModal

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 15px;
    border: 1px solid #2e374f;
    border-radius: 15px;
    background-color: #0E111C;
    position: absolute;
    z-index: 999;
    width: 100%;
    max-width: 400px;
    gap: 10px;
    font-family: 'Nunito Sans', sans-serif;

    .first-block {
        display: inherit;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        p {
            font-weight: 600;
            font-size: 18px;
            color: #ffffff;
        }
    }
    .input-hold {
        display: inherit;
        align-items: center;
        justify-content: center;
        gap: 8px;
        width: 100%;
        padding: 10px;
        background-color: #0E111C;
        border-radius: 10px;
        border: 1px solid #2e374f;
        input {
            background: transparent;
            border: none;
            outline: none;
            width: 100%;
            color: #2e374f;
            font-size: 18px;
            
        }
        input::placeholder {
            color: #2e374f;            
        }
    }

    .often-selected-crypto {
        display: inherit;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 10px;

        li {
            display: inherit;
            align-items: center;
            justify-content: center;
            list-style-type: none;
            border: 1px solid #2e374f;
            border-radius: 16px;
            color: #ffffff;
            font-size: 14px;
            padding: 8px 7px;
            gap: 5px;
            cursor: pointer;

            img {
                width: 25px;
                height: 25px;
            }
        }
        li:hover {
            background-color: #212839;
            border: 1px solid #3d65be;
        }
    }
    
`;

