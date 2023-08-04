import { styled } from "styled-components";

const Backdrop = () => {
    return (
        <Container />
    )
}

export default Backdrop

const Container = styled.div`
position: absolute;
z-index: 990;
background: rgb(0, 0, 0, 0.4);
width: 100%;
height: 100vh;
`;