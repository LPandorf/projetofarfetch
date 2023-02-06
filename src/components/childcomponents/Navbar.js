import styled from "styled-components";
import Logo from "./grandchildcomponents/Logo";

export default function Navbar(){
    return(
        <Wrapper>
            <Side>
                <ion-icon name="menu-outline"></ion-icon>
                <ion-icon name="search-outline"></ion-icon>
            </Side>
            <Logo/>
            <Side>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="bag-outline"></ion-icon>
            </Side>
        </Wrapper>
    )
}

const Wrapper=styled.div`
    width: 91%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: white;
    padding-left: 20px;
    padding-right: 20px;
`;

const Side=styled.div`
    width: 50px;
    display: flex;
    justify-content: space-between;
    font-size: 22px;
`;