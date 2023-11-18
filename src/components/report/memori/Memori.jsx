import React, { memo, useEffect, useState } from "react";
import * as S from "./style";
import { API } from "../../../api/axios";
import { useParams } from "react-router-dom";
import TeamCommonAlert from "../../team/teamCommon/TeamCommonAlert";

function Memori() {
  const params = useParams();
  const [data, setData] = useState([]);

  const Dummy_data = [
    {
      id: 1,
      member: "이종범",
      content:
        "캘린더를 구현하기 어려웠는데, 리엑트에서 제공하는 라이브러리를 사용하니 손 쉽게 해결 할 수 있었던 문제였습니다.캘린더를 구현하기 어려웠는데, 리엑트에서 제공하는 라이브러리를 사용하니 손 쉽게 해결 할 수 있었던 문제였습니다.캘린더를 구현하기 어려웠는데, 리엑트에서 제공하는 라이브러리를 사용하니 손 쉽게 해결 할 수 있었던 문제였습니다.캘린더를 구현하기 어려웠는데, 리엑트에서 제공하는 라이브러리를 사용하니 손 쉽게 해결 할 수 있었던 문제였습니다.",
      updatedAt: "2023-11-15T18:24:51"
    },
    {
      id: 3,
      member: "심서현",
      content:
        "캘린더를 구현하기 어려웠는데, 리엑트에서 제공하는 라이브러리를 사용하니 손 쉽게 해결 할 수 있었던 문제였습니다.캘린더를 구현하기 어려웠는데, 리엑트에서 제공하는 라이브러리를 사용하니 손 쉽게 해결 할 수 있었던 문제였습니다.",
      updatedAt: "2023-11-15T18:24:51"
    }
  ];

  const fetchData = async () => {
    try {
      const response = await API.get(`/api/memoirs/${params.teamId}`);
      setData(response.data);
    } catch (error) {
      console.log("---- Memori 에러~", error);
      //api없을 경우 임시로 넣어두는 데이터, 추후 삭제 예정
      // ----팀페이지
      setData(Dummy_data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [value, setValue] = useState("");
  const onChangeHandle = e => {
    setValue(e.target.value);
  };
  const handleSubmit = async event => {
    event.preventDefault();

    if (value === "") {
      alert("회고록을 입력해주세요!");
      return;
    }

    try {
      const response = await API.post(
        `/api/projects/${params.teamId}/memoirs`,
        {
          memberId: 2,
          content: value
        }
      );
      if (response.statusCode == 200) {
        alert("회고록이 작성되었습니다!");
      } else if (response.statusCode == 400) {
        alert("회고록을 이미 작성하셨습니다!");
      }
    } catch (error) {
      console.error("회고록 작성 실패 에러", error);
      alert("회고록 작성에 실패했습니다.");
    }
  };

  return (
    <>
      <S.MemoriPageHeaderWrapper>
        <S.MemoriPageHeaderTitle>회고록</S.MemoriPageHeaderTitle>
        <S.MemoriPageHeaderSubtitle style={{ marginBottom: "2rem" }}>
          프로젝트의 회고록을 남겨주세요
        </S.MemoriPageHeaderSubtitle>

        <S.MemoriForm onSubmit={handleSubmit}>
          <S.MemoriInput
            onChange={onChangeHandle}
            value={value}
            placeholder="프로젝트의 최종 회고록을 아직 작성하지 않으셨어요!"
          />
          <S.MemoriSubmit>등록</S.MemoriSubmit>
        </S.MemoriForm>

        {/*---- 회고록모음 ---*/}
        <S.MemoriList>
          {data.map((memori, index) => (
            <S.MemoriWrapper key={index}>
              <S.MemoriSideLine $sidelinecolor="black" />
              <S.MemoriContentWrapper>
                <S.MemoriContentName>{memori.member}</S.MemoriContentName>
                <S.MemoriContentTime>{memori.updatedAt}</S.MemoriContentTime>
                <S.MemoriContentContent>
                  {memori.content}
                </S.MemoriContentContent>
              </S.MemoriContentWrapper>
            </S.MemoriWrapper>
          ))}
        </S.MemoriList>
        {/*---- 회고록모음 ---*/}
      </S.MemoriPageHeaderWrapper>
    </>
  );
}

export default Memori;
