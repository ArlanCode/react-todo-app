import styled from "styled-components";

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 13px 10px 13px 24px;
  width: 500px;
  min-height: 50px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  list-style: none;
  

  p {
    width: 85%;
    text-decoration-line: ${(props) => (props.color ? "line-through" : "")};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    overflow-wrap: break-word;
  }

  button {
    background: transparent;
    border: none;
    color: gray;
    cursor: pointer;
    

    &:hover {
      opacity: 0.8;
      color: black;
      
    }
    &:active {
      opacity: 0.8;
    }
  }

  i {
    font-size: 25px;
  }`;