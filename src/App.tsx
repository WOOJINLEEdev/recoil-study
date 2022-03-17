import "./App.css";
import GlobalStyle from "styles/globalStyle";
import TodoFilter from "components/TodoFilter";
import styled from "styled-components";
import TodoList from "components/TodoList";

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
    padding: 10px 0;
  }
`;
