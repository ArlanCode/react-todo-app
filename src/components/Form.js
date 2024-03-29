import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: ${(props) => props.direction || "row"};
    width: 95%;
    margin-bottom: ${(props) => props.marginBottom};
`;