import { keyframes, css } from "styled-components";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const colors = {
  black: "#1E1E25",
  white: "#FFFFFF",
  gray0: "#F4F6FA",
  gray1: "#D6D6DD",
  gray2: "#9393A0",
  gray3: "#737381",
  gray4: "#585865",
  gray5: "#FF0000",
  important: "#FF0000",
  red :'#f0446e'
};

const memberColors={
  1: "#FF3333", // red
  2: "#FF8000",
  3: "#FFFF00",
  4: "#80FF00",
  5:"#00FFFF",
  6:"#0000FF",
  7:"#7F00FF",
  8:"#FF00FF",
  9:"#808080", 
  10:"#000000" // black
};

export const theme = {
  colors,
  memberColors
};
export default colors;
