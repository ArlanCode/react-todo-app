import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction || "column"};
    margin: auto;
    max-width: 500px;
    height: 100%;    
`;