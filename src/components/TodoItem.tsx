import styled from "styled-components";
import { TodoItemTypes, ItemProps } from "types/todo";

const TodoItem = (item: TodoItemTypes) => {
  return (
    <Item completed={item.completed}>
      <span
        className={
          item.completed === true ? "item completed" : "item notCompleted"
        }
      >
        {item.completed === true ? "Completed" : "Not Completed"}
      </span>

      <span> {item.userId}</span>
      <span> Id: {item.id}</span>
      <p>{item.title}</p>
    </Item>
  );
};

export default TodoItem;

const Item = styled.li<ItemProps>`
  width: 180px;
  padding: 20px 10px;
  margin-right: 60px;
  margin-bottom: 15px;
  border-radius: 10px;
  text-align: left;
  background-color: ${(props) =>
    props.completed === true ? "green" : "yellow"};

  &:nth-child(4n) {
    margin-right: 0;
  }

  & span,
  p {
    display: block;
    padding: 10px;
    font-weight: bold;
  }

  & .completed {
    margin-top: 10px;
    color: #fff;
  }

  & .notCompleted {
    margin-top: 10px;
    color: #333;
  }
`;
