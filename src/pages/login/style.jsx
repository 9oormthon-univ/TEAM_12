import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logincontent = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled.input`
  width: 20rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.gray0};
  margin-bottom: 1px;
`;

export const LoginButton = styled.button`
  width: 20rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.gray3};
  color: white;
`;
