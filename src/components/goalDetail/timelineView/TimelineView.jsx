import { s } from "./style.jsx";

function TimelineView({ timelineData, goalName }) {
  // todo마다 isComplete 속성 필요

  const ColorList = [null, "green", "blue"];

  const processGoalComment = timelineData.goalCommentList.map(comment => (
    <s.GoalComment $color={ColorList[comment.commentMemberId]}>
      {console.log(comment)}
      <s.GoalCommentDate>{comment.createdTime}</s.GoalCommentDate>
      <s.GoalCommentContent>{comment.content}</s.GoalCommentContent>
      <s.GoalCommentFeelingWrapper>"EMPTY"</s.GoalCommentFeelingWrapper>
    </s.GoalComment>
  ));

  const processTodo = timelineData.todoCommentList.map(todo => (
    <s.TodoWrapper key={todo.todoId}>
      <s.TodoBox>
        {/** 체크박스 */}
        <s.TodoBoxContentWrapper>
          <s.TodoTitle>{goalName}</s.TodoTitle>
          <s.TodoContent>{todo.todoContent}</s.TodoContent>
        </s.TodoBoxContentWrapper>
      </s.TodoBox>
      <s.TodoCommentsWrapper>
        {todo.commentList.map(comment => {
          return (
            <s.TodoComment>
              <s.TodoCommentContent>{comment.content}</s.TodoCommentContent>
              <s.TodoCommentFeelingWrapper>"EMPTY"</s.TodoCommentFeelingWrapper>
            </s.TodoComment>
          );
        })}
      </s.TodoCommentsWrapper>
    </s.TodoWrapper>
  ));

  return (
    <s.TimelineWrapper>
      <s.GoalCommentsWrapper>
        {timelineData.goalCommentList.map(comment => (
          <s.GoalComment $color={ColorList[comment.commentMemberId]}>
            {console.log(comment)}
            <s.GoalCommentDate>{comment.createdTime}</s.GoalCommentDate>
            <s.GoalCommentContent>{comment.content}</s.GoalCommentContent>
            <s.GoalCommentFeelingWrapper>"EMPTY"</s.GoalCommentFeelingWrapper>
          </s.GoalComment>
        ))}
      </s.GoalCommentsWrapper>
      {processTodo}
    </s.TimelineWrapper>
  );
}

export default TimelineView;
