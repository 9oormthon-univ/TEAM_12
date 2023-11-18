import TeamCommonCheckField from "../../team/teamCommon/TeamCommonCheckField.jsx";
import { s } from "./style.jsx";
import { theme } from "../../../style/theme.js";

function TimelineView({ timelineData, goalName }) {
  const processGoalComment =
    timelineData.goalCommentList &&
    timelineData.goalCommentList.map(comment => (
      <s.GoalComment $color={theme.memberColors[comment.commentMemberId%10+1]}>
        <s.GoalCommentDate>{comment.createdTime}</s.GoalCommentDate>
        <s.GoalCommentContent>{comment.content}</s.GoalCommentContent>
        <s.GoalCommentFeelingWrapper>"EMPTY"</s.GoalCommentFeelingWrapper>
      </s.GoalComment>
    ));

  const processTodo =
    timelineData.todoCommentList &&
    timelineData.todoCommentList.map(todo => (
      <s.TodoWrapper key={todo.todoId}>
        <s.TodoBox $color={theme.memberColors[todo.todoManagerMemberId%10+1]}>
          <TeamCommonCheckField
            isChecked={true}
            text=""
            color={theme.memberColors[todo.todoManagerMemberId%10+1]}
          />
          <s.TodoBoxContentWrapper>
            <s.TodoTitle>{goalName}</s.TodoTitle>
            <s.TodoContent>{todo.todoContent}</s.TodoContent>
          </s.TodoBoxContentWrapper>
        </s.TodoBox>
        <s.TodoCommentsWrapper>
          {todo.commentList.map(comment => {
            return (
              <s.TodoComment
                $color={theme.memberColors[comment.commentMemberId%10+1]}
              >
                <s.TodoCommentContent>{comment.content}</s.TodoCommentContent>
                <s.TodoCommentFeelingWrapper>
                  "EMPTY"
                </s.TodoCommentFeelingWrapper>
              </s.TodoComment>
            );
          })}
        </s.TodoCommentsWrapper>
      </s.TodoWrapper>
    ));

  return (
    <s.TimelineWrapper>
      <s.GoalCommentsWrapper>{processGoalComment}</s.GoalCommentsWrapper>
      {processTodo}
    </s.TimelineWrapper>
  );
}

export default TimelineView;
