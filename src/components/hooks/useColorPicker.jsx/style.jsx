import styled from "styled-components";

export const PointColorBar = styled.div`
  width: 300px;
  height: 10px;
  background: ${props => props.$PointColor};
`;
