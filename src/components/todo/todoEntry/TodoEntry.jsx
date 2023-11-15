import { s } from "./style.jsx";

function TodoEntry({ category, title, col }) {
  return (
    <s.TodoEntryWrapper $color={col}>
      <s.TodoChkBox />
      <s.TodoContentsWrapper>
        <s.TodoCategory>{category}</s.TodoCategory>
        <s.TodoTitle>{title}</s.TodoTitle>
      </s.TodoContentsWrapper>
    </s.TodoEntryWrapper>
  );
}

export default TodoEntry;
