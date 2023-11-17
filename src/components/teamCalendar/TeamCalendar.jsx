import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css"; // css import
import moment from "moment";

import { API } from "../../api/axios";

import * as S from "./style";

function TeamCalendar({ $getSelectedDate }) {
  const weekdaysFormat_w = ["S", "M", "T", "W", "T", "F", "S"];
  const [value, onChange] = useState(new Date());

  const [data, setData] = useState({
    allCompleteDateList: [],
    inCompleteDateList: []
  });

  const fetchLanternsData = async () => {
    try {
      const response = await API.get(
        `/api/todos/monthly?yearMonth=${moment(value).format("YYYY-MM")}`
      );
      setData(response.data);
    } catch (error) {
      console.log("에러~", error);
      //api없을 경우 임시로 넣어두는 데이터, 추후 삭제 예정
      setData({
        allCompleteDateList: ["2023-11-1", "2023-11-30"],
        inCompleteDateList: ["2023-11-14", "2023-11-29"]
      });
    }
  };

  useEffect(() => {
    $getSelectedDate(value);
    fetchLanternsData();
  }, [value]);

  return (
    <div>
      <Calendar
        locale="kor"
        showNeighboringMonth={false}
        onChange={onChange}
        value={value}
        formatShortWeekday={(locale, date) =>
          weekdaysFormat_w[moment(date).day()]
        }
        formatDay={(locale, date) => moment(date).format("D")} // 날'일' 제외하고 숫자만 보이도록 설정
        tileContent={({ date, view }) => {
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = [];
          // 현재 날짜가 allCompleteDateList 완료 데이터 리스트에 있다면
          if (
            data.allCompleteDateList.find(
              x => x === moment(date).format("YYYY-MM-DD")
            )
          ) {
            html.push(<div key={date} className="calendar-isComplete" />);
          }
          // 현재 날짜가inCompleteDateList 미완료 데이터 리스트에 있다면
          else if (
            data.inCompleteDateList.find(
              x => x === moment(date).format("YYYY-MM-DD")
            )
          ) {
            html.push(<div key={date} className="calendar-isNotComplete" />);
          }

          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return html;
        }}
      />

      <S.GuideWrapper>
        <S.GuideContent>
          <S.GuideColor
            style={{ backgroundColor: "#9393A0", borderColor: "#9393A0" }}
          />
          오늘
        </S.GuideContent>

        <S.GuideContent>
          <S.GuideColor
            style={{ backgroundColor: "#D6D6DD", borderColor: "#D6D6DD" }}
          />
          완료하지 않은 Todo가 있어요.
        </S.GuideContent>

        <S.GuideContent>
          <S.GuideColor style={{ borderColor: "#D6D6DD" }} />
          모든 Todo를 완료했어요!
        </S.GuideContent>
      </S.GuideWrapper>
      {/* <div className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div> */}
    </div>
  );
}
export default TeamCalendar;
