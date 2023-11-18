import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useParams } from "react-router-dom";
import { API } from "../../../api/axios";
function TodoCount() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [dataCount, setDataCount] = useState(0);

  const Dummy_data = {
    todoCount: 3,
    reportTodoList: [
      {
        memberId: 1,
        memberNickName: "하나",
        completeCount: 2,
        managedCount: 3
      },
      {
        memberId: 2,
        memberNickName: "둘",
        completeCount: 1,
        managedCount: 0
      }
    ]
  };

  const fetchData = async () => {
    try {
      const response = await API.get(`/api/projects/${params.teamId}`);
      setData(response.data.reportTodoList);
      setDataCount(response.data.todoCount);
    } catch (error) {
      console.log("에러~", error);
      //api없을 경우 임시로 넣어두는 데이터, 추후 삭제 예정
      // ----팀페이지
      setData(Dummy_data.reportTodoList);
      setDataCount(Dummy_data.todoCount);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <S.MemoriPageHeaderWrapper>
        <S.MemoriPageHeaderTitle>
          총 <span>{dataCount}건</span>의 Todo가 있었어요.
        </S.MemoriPageHeaderTitle>
        <S.MemoriPageHeaderSubtitle>
          Todo 참여율을 확인해보세요!
        </S.MemoriPageHeaderSubtitle>
      </S.MemoriPageHeaderWrapper>

      <S.TodoCountWrapper>
        {data.map((member, index) => (
          <S.TodoCountContent key={index}>
            <S.TodoCountContentMember>
              {member.memberNickName}
            </S.TodoCountContentMember>
            <S.TodoCountContentLines>
              {/* ---- 완료한 Todo ---- */}
              <S.TodoCountContentLineWrapper>
                <S.TodoCountContentLine>
                  <S.TodoCountContentLineProgress
                    $progress={
                      (member.completeCount / data[0].completeCount) * 100 + "%"
                    }
                    $type={"doTodo"}
                  />
                </S.TodoCountContentLine>
                <S.TodoCountContentNum $type={"doTodo"}>
                  {member.completeCount}
                </S.TodoCountContentNum>
              </S.TodoCountContentLineWrapper>

              {/* ---- 담당한 Todo ---- */}
              <S.TodoCountContentLineWrapper>
                <S.TodoCountContentLine>
                  <S.TodoCountContentLineProgress
                    $progress={
                      (member.managedCount / data[0].completeCount) * 100 + "%"
                    }
                    $type={""}
                  />
                </S.TodoCountContentLine>
                <S.TodoCountContentNum $type={""}>
                  {member.managedCount}
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
    </>
  );
}

export default TodoCount;
