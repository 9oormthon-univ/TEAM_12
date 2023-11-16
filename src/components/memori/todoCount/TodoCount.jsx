import React from "react";
import * as S from "./style";
function TodoCount() {
  const data = {
    progressList: [
      { name: "이종범", doTodo: 30, manageTodo: 24 },
      { name: "강민주", doTodo: 26, manageTodo: 22 },
      { name: "심서현", doTodo: 24, manageTodo: 20 },
      { name: "박철민", doTodo: 18, manageTodo: 20 },
      { name: "신유수", doTodo: 12, manageTodo: 18 },
      { name: "강희진", doTodo: 10, manageTodo: 16 }
    ]
  };
  return (
    <S.TodoCountWrapper>
      {data.progressList.map((member, index) => (
        <S.TodoCountContent key={index}>
          <S.TodoCountContentMember>{member.name}</S.TodoCountContentMember>
          <S.TodoCountContentLines>
            {/* ---- 완료한 Todo ---- */}
            <S.TodoCountContentLineWrapper>
              <S.TodoCountContentLine>
                <S.TodoCountContentLineProgress
                  $progress={
                    (member.doTodo / data.progressList[0].doTodo) * 100 + "%"
                  }
                  $type={"doTodo"}
                />
              </S.TodoCountContentLine>
              <S.TodoCountContentNum $type={"doTodo"}>
                {member.doTodo}
              </S.TodoCountContentNum>
            </S.TodoCountContentLineWrapper>

            {/* ---- 담당한 Todo ---- */}
            <S.TodoCountContentLineWrapper>
              <S.TodoCountContentLine>
                <S.TodoCountContentLineProgress
                  $progress={
                    (member.manageTodo / data.progressList[0].doTodo) * 100 +
                    "%"
                  }
                  $type={""}
                />
              </S.TodoCountContentLine>
              <S.TodoCountContentNum $type={""}>
                {member.manageTodo}
              </S.TodoCountContentNum>
            </S.TodoCountContentLineWrapper>
          </S.TodoCountContentLines>
        </S.TodoCountContent>
      ))}

      <S.GuideList>
        <S.GuideContent>
          <S.GuideColor $type={"doTodo"} />
          완료한 Todo
        </S.GuideContent>

        <S.GuideContent>
          <S.GuideColor $type={""} />
          담당한 Todo
        </S.GuideContent>
      </S.GuideList>
    </S.TodoCountWrapper>
  );
}

export default TodoCount;
