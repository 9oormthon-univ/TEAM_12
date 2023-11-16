import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  display: flex;
  flex-direction: column;
`;
export const Logincontent = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const LoginInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  :nth-child(3) {
    margin-top: 0.625rem;
  }
  margin-bottom: 1.25rem;
`;
export const LoginLabel = styled.div`
  margin-bottom: 0.625rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.gray4};
`;
export const LoginInput = styled.input`
  width: 20rem;
  padding: 1rem 1.25rem;
  border-radius: 0.625rem;
  font-size: 0.75rem;
  background-color: ${props => props.theme.colors.gray0};

  &:placeholder {
    color: ${props => props.theme.colors.gray2};
  }
`;

export const LoginError = styled.div`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray1};
  padding: 0.3125rem;
`;

export const LoginButton = styled.button`
  font-size: 1rem;

  width: 20rem;
  padding: 1rem;
  background-color: ${props => props.theme.colors.gray2};
  color: white;
  border-radius: 0.625rem;
  margin-top: 0.625rem;
`;

export const SignUpButton = styled(Link)`
  font-size: 0.75rem;
  color: ${props => props.theme.colors.gray2};
`;
