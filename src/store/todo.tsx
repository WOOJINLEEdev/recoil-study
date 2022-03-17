import { atom, selector, selectorFamily } from "recoil";
import { TodoItemTypes } from "types/todo";

export const todoListState = atom<TodoItemTypes[]>({
  key: "todo/todoListState",
  default: [],
});

export const todoListInitState = atom<TodoItemTypes[]>({
  key: "todo/todoListInitState",
  default: [],
});

export const filteredTodoListState = selector({
  key: "todo/filteredTodoListState",
  get: ({ get }) => {
    const first = get(todoListFirstFilterState);
    const second = get(todoListSecondFilterState);
    const params = [];

    for (const [key, value] of Object.entries(first)) {
      params.push(`${key}=${value}`);
    }

    for (const [key, value] of Object.entries(second)) {
      params.push(`${key}=${value}`);
    }

    return params.join("&");
  },
});

export const todoListFirstFilterState = atom({
  key: "todo/todoListFirstFilterState",
  default: {},
});

export const todoListSecondFilterState = atom({
  key: "todo/todoListSecondFilterState",
  default: {},
});

export const secondFilterSelector = selector({
  key: "todo/secondFilterSelector",
  get: ({ get }) => {
    const todoList = get(todoListInitState);

    const userId = todoList?.map((item: TodoItemTypes) => {
      return item.userId;
    });
    const userIdArray = Array.from(new Set(userId));

    return userIdArray;
  },
});
