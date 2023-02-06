import styled from "styled-components";
import Navbar from "./childcomponents/Navbar";

export default function Home(){
    return (
        <Wrapper>
            <Navbar/>
            <Margem/>
        </Wrapper>
    );
}

const Wrapper=styled.div`
    background-color: crimson;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Margem=styled.div`
    height: 70px;
`;