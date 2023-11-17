import TodoEntry from "../../todo/todoEntry/TodoEntry.jsx";
import { s } from "./style.jsx";

function TodoView({ todoList }) {
  const processData = todoList.map(todo => (
    <TodoEntry todoInfo={todo} key={todo.todoId}/>
  ));

  return <s.todoListWrapper>{processData}</s.todoListWrapper>;
}

export default TodoView;
