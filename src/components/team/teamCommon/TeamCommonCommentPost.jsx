import { s } from "./style.jsx";

function TeamCommonCommentPost() {
  return (
    <s.CommentPostDiv>
      <s.CommentInput type="text" required name="todo" />
      <s.CommentBtn>등록</s.CommentBtn>
    </s.CommentPostDiv>
  );
}

export default TeamCommonCommentPost;
