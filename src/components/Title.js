import styled from "styled-components";

export const Title = styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    text-align: center;
    font-size: 38px;
    line-height: ${(props) => props.lineHeight || '40px'};
    color: white;
`;