import { s } from "./style.jsx";

function GoalInfo() {
  const title = `FE 1차 개발 마감`;
  const description = `라우터 설정, UIUX 그리기, API 연결하기`;
  const periodStart = `2023년 10월 27일`;
  const periodEnd = `2023년 11월 16일`;
  const period = `${periodStart} ~ ${periodEnd}`;

  return (
    <s.GoalInfo>
      <s.GoalTitleAndDescription>
        <s.Title>{title}</s.Title>
        <s.Description>{description}</s.Description>
      </s.GoalTitleAndDescription>
      <s.GoalPeriod>
        <s.Period>{period}</s.Period>
      </s.GoalPeriod>
    </s.GoalInfo>
  );
}

export default GoalInfo;
