import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css"; // css import
import moment from "moment";

import * as S from "./style";

function TeamCalendar({ $getSelectedDate }) {
  const dayList = ["2023-11-16", "2023-11-17"];

  const weekdaysFormat_w = ["S", "M", "T", "W", "T", "F", "S"];
  const [value, onChange] = useState(new Date());

  useEffect(() => {
    $getSelectedDate(value);
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
          // 현재 날짜가 post 작성한 날짜 배열에 있다면, 배경추가
          if (dayList.find(x => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<div key={date} className="calendar-isComplete"></div>);
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
