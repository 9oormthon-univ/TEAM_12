import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css"; // css import
import moment from "moment";

function TeamCalendar() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar
        locale="en"
        onChange={onChange}
        value={value}
        formatDay={(locale, date) => moment(date).format("D")}
      />
      {/* <div className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div> */}
    </div>
  );
}
export default TeamCalendar;
