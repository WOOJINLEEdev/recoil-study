import styled from "styled-components";

import TodoFilter from "components/TodoFilter";
import TodoList from "components/TodoList";
import GlobalStyle from "styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <h1>To Do List</h1>
        <TodoFilter />
        <TodoList />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  text-align: center;

  & h1 {
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0;
  }
`;
