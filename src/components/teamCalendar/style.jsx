import styled from "styled-components";

export const GuideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
  padding-top: 20px;
`;

export const GuideContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${props => props.theme.colors.gray4};
  margin-bottom: 5px;
`;

export const GuideColor = styled.div`
  width: 14px;
  height: 14px;
  margin-right: 7px;

  border-radius: 50%;
  border: 1px solid;
`;
