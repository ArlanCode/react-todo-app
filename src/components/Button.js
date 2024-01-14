import styled from "styled-components";

export const Button = styled.button`
    background: #363b65;
   
    height: 60px;
    cursor: pointer;
    padding: 10px 25px;
    border:none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    font-weight: 500;
    font-size:16px;
    color:white;

    &:hover{
        opacity: 0.7;
    }
`;