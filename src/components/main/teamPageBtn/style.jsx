import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const TeamPageBtnWrapper = styled(Link)`
  width: 188px;
  display: flex;
  flex-direction: column;
`;

export const TeamPageBtnThumbnail = styled.div`
  height: 188px;
  background-color: ${props => props.theme.colors.gray0};
  margin-bottom: 0.625rem;
`;

export const TeamPageBtnInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TemaPageBtnTitle = styled.div`
  font-size: 1rem;
  margin-bottom: 5px;
`;
export const TeamPageBtnContent = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray2};
`;
