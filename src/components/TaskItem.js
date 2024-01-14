import styled from "styled-components";

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 13px 10px 13px 24px;
  width: 95%;
  min-height: 50px;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  list-style: none;
  opacity: ${(props) => (props.checked ? 0.5 : 1)};
  

  p {
    width: 80%;
    text-decoration-line: ${(props) => (props.checked ? "line-through" : "")};
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    overflow-wrap: break-word;
  }

  i {
    font-size: 25px;
  }`;