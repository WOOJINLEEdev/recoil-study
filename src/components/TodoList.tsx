import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import axios from "axios";
import styled from "styled-components";
import TodoItem from "components/TodoItem";
import { TodoItemTypes } from "types/todo";
import {
  todoListState,
  filteredTodoListState,
  todoListInitState,
} from "store/todo";

const TodoList = () => {
  const [loading, setLoading] = useState(false);
  const [init, setInit] = useState(true);

  const [list, setList] = useRecoilState<TodoItemTypes[]>(todoListState);
  const [initList, setInitList] = useRecoilState(todoListInitState);
  const queryString = useRecoilValue(filteredTodoListState);

  useEffect(() => {
    async function getFilteredTodoList(params: string) {
      try {
        setLoading(true);
        let url = `https://jsonplaceholder.typicode.com/todos`;
        if (params) {
          url = `${url}?${params}`;
        }
        const res = await axios.get(url);
        console.log("get", res.data);
        setList(res.data);
        if (init) {
          setInit(false);
          setInitList(res.data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    getFilteredTodoList(queryString);
  }, [queryString]);

  if (loading) return <div>로딩중...</div>;

  return (
    <TodoListContainer>
      {list?.map((item: TodoItemTypes) => {
        return <TodoItem key={String(item.id)} {...item} />;
      })}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 980px;
  margin: 0 auto;
`;
