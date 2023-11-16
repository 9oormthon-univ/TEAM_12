import TeamCommonCheckField from "../../components/team/teamCommon/TeamCommonCheckField";
import TeamCommonCommentPost from "../../components/team/teamCommon/TeamCommonCommentPost.jsx";
import TodoComment from "../../components/todo/todoComment/TodoComment";
import { s } from "./styles";
import { Form } from "react-router-dom";

function TodoPage() {
  const t = {
    goalId: 1,
    goalContent: "백엔드 개발",
    todoId: 3,
    todoContent: "개발 시작11",
    todoManagerMemberId: 1,
    todoManagerNickName: "하나",
    isComplete: false,
    todoEndDate: "2023-11-15",
    commentList: [
      {
        id: 1,
        createdTime: "2023-11-15T21:31:30.298951",
        content: "0 todo를 완성하는데 어려움이 있네요요",
        commentMemberId: 1,
        emojiCount: 1,
        feelingCheckMemberId: [2]
      },
      {
        id: 2,
        createdTime: "2023-11-15T21:41:30.298951",
        content:
          "캘린더를 구현하기 어려웠는데, 리엑트에서 제공하는 라이브러리를 사용하니 손 쉽게 해결 할 수 있었던 문제였습니다.",
        commentMemberId: 2,
        emojiCount: 1,
        feelingCheckMemberId: []
      },
      {
        id: 3,
        createdTime: "2023-11-15T21:51:30.298951",
        content:
          "추가적으로 리펙토링을 한다면 캘린더 라이브러리를 직접 만들어보고자합니다.",
        commentMemberId: 3,
        emojiCount: 1,
        feelingCheckMemberId: [2]
      },
      {
        id: 4,
        createdTime: "2023-11-15T21:51:30.298951",
        content: ".",
        commentMemberId: 3,
        emojiCount: 1,
        feelingCheckMemberId: [2]
      }
    ]
  };

  const endDateMaker = date => {
    const arr = date.split("-");
    return `${arr[0]}년 ${arr[1]}월 ${arr[2]}일`;
  };

  return (
    <Form method="post">
      <s.Content>
        <s.Header>
          <TeamCommonCheckField text={"Todo를 달성해보아요"} />
          {endDateMaker(t.todoEndDate)}
        </s.Header>
        <s.Title>{t.todoContent}</s.Title>
        <s.CommentListDiv>
          <s.CommentListWrapper>
            {t.commentList.map(e => (
              <TodoComment key={e.id} content={e} />
            ))}
          </s.CommentListWrapper>
        </s.CommentListDiv>
        <TeamCommonCommentPost />
      </s.Content>
    </Form>
  );
}

export default TodoPage;
