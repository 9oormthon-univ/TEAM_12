import React, { useState } from "react";
import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useRecoilState } from "recoil";
import { userState } from "../../context/authState";
import { API } from "../../api/axios";

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [loginData, setLoginData] = useState({
    userName: "",
    password: ""
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { userName, password } = loginData;

    if (userName === "" || password === "") {
      alert("아이디와 비밀번호를 입력해주세요!");
      return;
    }

    try {
      const response = await API.post("/api/users/login", {
        userName: userName,
        password: password
      });

      // const accessToken = response.data.token.access;
      // const refreshToken = response.data.token.refresh;
      const fullName = response.data.fullName;

      setUserInfo({
        userName: userName,
        fullName: fullName
        // accessToken: accessToken,
        // refreshToken: refreshToken
      });

      localStorage.setItem(
        "userInfo",
        JSON.stringify({
          userName: userName,
          fullName: fullName
          // accessToken: accessToken,
          // refreshToken: refreshToken
        })
      );

      navigate("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("비밀번호를 다시 입력해주세요!");
    }
  };
  return (
    <S.LoginWrapper>
      <S.Logincontent onSubmit={handleSubmit}>
        <S.LoginInputWrapper>
          <S.LoginInput
            required
            name="userName"
            placeholder="아이디를 입력해주세요."
            value={loginData.userName}
            onChange={handleInputChange}
          />
        </S.LoginInputWrapper>

        <S.LoginInputWrapper>
          <S.LoginInput
            required
            name="password"
            placeholder="비밀번호를 입력해주세요."
            value={loginData.password}
            type="password"
            onChange={handleInputChange}
          />
        </S.LoginInputWrapper>

        <S.LoginButton>로그인</S.LoginButton>
      </S.Logincontent>
      <S.SignUpButton to="/signup">회원가입</S.SignUpButton>
    </S.LoginWrapper>
  );
}

export default Login;
