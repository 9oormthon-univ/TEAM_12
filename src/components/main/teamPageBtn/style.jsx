import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const TeamPageBtnWrapper = styled(Link)`
  width: 250px;
  display: flex;
  flex-direction: column;
`;

export const TeamPageBtnThumbnail = styled.div`
  height: 200px;
  background-color: ${props => props.theme.colors.gray0};
  margin-bottom: 5px;
`;

export const TeamPageBtnInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TemaPageBtnTitle = styled.div`
  font-size: 16px;
  margin-bottom: 5px;
`;
export const TeamPageBtnContent = styled.div`
  font-size: 10px;
  color: ${props => props.theme.colors.gray2};
`;
