import React from "react";
import * as S from "./style";

function Login() {
  return (
    <S.LoginWrapper>
      <S.Logincontent>
        <S.LoginInput />
        <S.LoginInput />
        <S.LoginButton>로그인</S.LoginButton>
      </S.Logincontent>
    </S.LoginWrapper>
  );
}

export default Login;
