import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  todoListFirstFilterState,
  todoListSecondFilterState,
  secondFilterSelector,
} from "store/todo";
import { useState } from "react";

const TodoFilter = () => {
  const [val, setVal] = useState([
    { value: "true", title: "Completed" },
    { value: "false", title: "Not Completed" },
  ]);
  const [firstSelected, setFirstSelected] = useState("");
  const [secondSelected, setSecondSelected] = useState("");
  const [firstFilter, setFirstFilter] = useRecoilState(
    todoListFirstFilterState
  );
  const [secondFilter, setSecondFilter] = useRecoilState(
    todoListSecondFilterState
  );
  const userIds = useRecoilValue(secondFilterSelector);

  const handleFirstSelect = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setFirstFilter({ completed: `${target.value}` });
    setFirstSelected(target.value);
    target.value === "" && setFirstFilter({});
  };

  const handleSecondSelect = ({
    target,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSecondFilter({ userId: `${target.value}` });
    setSecondSelected(target.value);
    target.value === "" && setSecondFilter({});
  };

  const handleResetBtn = () => {
    setFirstSelected("");
    setSecondSelected("");

    setFirstFilter({});
    setSecondFilter({});
  };

  return (
    <>
      <Select
        name="completion_check"
        onChange={handleFirstSelect}
        value={firstSelected}
      >
        <option value=""> - Option - </option>
        {val.map((item, index) => {
          return (
            <option key={String(index)} value={item.value}>
              {item.title}
            </option>
          );
        })}
      </Select>

      <Select
        name="user_ids"
        onChange={handleSecondSelect}
        value={secondSelected}
      >
        <option value=""> - userId - </option>
        {userIds?.map((item: number) => {
          return (
            <option key={String(item)} value={item}>
              {item}
            </option>
          );
        })}
      </Select>

      <Button type="button" onClick={handleResetBtn}>
        Reset
      </Button>
    </>
  );
};

export default TodoFilter;

const Select = styled.select`
  border: 2px solid #efefef;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 10px 50px 0;
`;

const Button = styled.button`
  border: 2px solid #efefef;
  border-radius: 5px;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;
