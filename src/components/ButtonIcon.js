import styled from "styled-components";

export const ButtonIcon = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${(props) => props.color || "gray"};
    
    &:hover {
      opacity: 0.9;
      color: ${(props) => props.colorHover || "black"};
    }
`;