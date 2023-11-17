import styled from "styled-components";

export const TodoCountWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 3.75rem;
`;

// todo 달성률 한 라인. 구분기준 : 맴버
export const TodoCountContent = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;

// todo 달성률 맴버
export const TodoCountContentMember = styled.div`
  width: 2.625rem;
  font-size: 1rem;
  margin-right: 0.625rem;
  flex-shrink: 0;
  height: 1.2rem;
  display: flex;
  align-items: center;
`;

// todo 달성률 완료한 투두, 담당한 투두 라인 행 정렬
export const TodoCountContentLines = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

// todo 달성률 투두프로그래스 바 한 라인 열 정렬
export const TodoCountContentLineWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// todo 달성률 투두프로그래스 바
export const TodoCountContentLine = styled.div`
  flex-grow: 1;
  height: 0.625rem;
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const TodoCountContentLineProgress = styled.div`
  width: ${props => props.$progress};

  height: 0.625rem;
  border-radius: 0.625rem;
  background-color: ${props =>
    props.$type == "doTodo"
      ? props.theme.colors.gray2
      : props.theme.colors.gray1};
`;

// todo 달성률 숫자
export const TodoCountContentNum = styled.div`
  width: 4rem;
  display: flex;
  justify-content: right;
  flex-shrink: 0;

  height: 1.2rem;
  align-items: center;

  color: ${props =>
    props.$type == "doTodo"
      ? props.theme.colors.gray2
      : props.theme.colors.gray1};
`;

// ---- 가이드 ----
export const GuideList = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 1.25rem;

  color: ${props => props.theme.colors.gray4};
`;

export const GuideContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray4};

  margin-left: 1.25rem;
`;

export const GuideColor = styled.div`
  width: 0.875rem;
  height: 0.875rem;
  border-radius: 50%;
  margin-right: 0.4375rem;

  background-color: ${props =>
    props.$type == "doTodo"
      ? props.theme.colors.gray2
      : props.theme.colors.gray1};
`;
