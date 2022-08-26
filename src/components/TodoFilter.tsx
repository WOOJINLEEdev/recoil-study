import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";

import {
  todoListFirstFilterState,
  todoListSecondFilterState,
  secondFilterSelector,
} from "state/todo";

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

  const handleFirstSelectChange = ({
    target,
  }: ChangeEvent<HTMLSelectElement>) => {
    setFirstFilter({ completed: `${target.value}` });
    setFirstSelected(target.value);
    target.value === "" && setFirstFilter({});
  };

  const handleSecondSelectChange = ({
    target,
  }: ChangeEvent<HTMLSelectElement>) => {
    setSecondFilter({ userId: `${target.value}` });
    setSecondSelected(target.value);
    target.value === "" && setSecondFilter({});
  };

  const handleResetBtnClick = () => {
    setFirstSelected("");
    setSecondSelected("");

    setFirstFilter({});
    setSecondFilter({});
  };

  return (
    <>
      <Select
        name="completion_check"
        value={firstSelected}
        onChange={handleFirstSelectChange}
      >
        <option value=""> - Option - </option>
        {val.map((item, index) => {
          return (
            <option key={`first_option_${index}`} value={item.value}>
              {item.title}
            </option>
          );
        })}
      </Select>

      <Select
        name="user_ids"
        onChange={handleSecondSelectChange}
        value={secondSelected}
      >
        <option value=""> - userId - </option>
        {userIds?.map((item) => {
          return (
            <option key={`second_option_${item}`} value={item}>
              {item}
            </option>
          );
        })}
      </Select>

      <Button type="button" onClick={handleResetBtnClick}>
        Reset
      </Button>
    </>
  );
};

export default TodoFilter;

const Select = styled.select`
  padding: 10px;
  margin: 20px 10px 50px 0;
  border: 2px solid #efefef;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  color: #fff;
  background-color: #333;
  border: 2px solid #efefef;
  border-radius: 5px;
`;
