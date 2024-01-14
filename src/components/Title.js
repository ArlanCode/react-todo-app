import styled from "styled-components";

export const Title = styled.h1`
    font-weight: 800;
    text-align: center;
    font-size: 38px;
    line-height: ${(props) => props.lineHeight || '40px'};
    color: white;
`;