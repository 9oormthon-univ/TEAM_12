import React, { useState } from "react";
import * as S from "./style";

import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../../context/authState";

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const [loginData, setLoginData] = useState({
    id: "",
    pw: ""
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
    const { id, pw } = loginData;

    if (id === "" || pw === "") {
      alert("아이디와 비밀번호를 입력해주세요!");
      return;
    }

    // try {
    //   const response = await axios.post("auth/login", {
    //     id: id,
    //     pw: pw
    //   });

    //   const accessToken = response.data.token.access;
    //   const refreshToken = response.data.token.refresh;
    //   const name = response.data.user.nickname;

    //   setUserInfo({
    //     id: id,
    //     name: name,
    //     accessToken: accessToken,
    //     refreshToken: refreshToken
    //   });

    //   localStorage.setItem(
    //     "userInfo",
    //     JSON.stringify({
    //       id: id,
    //       name: name,
    //       accessToken: accessToken,
    //       refreshToken: refreshToken
    //     })
    //   );

    //   navigate("/");
    // } catch (error) {
    //   console.error("Login failed:", error.message);
    //   alert("비밀번호를 다시 입력해주세요!");
    // }

    setUserInfo({
      id: id,
      name: "서현"
      //   accessToken: accessToken,
      //   refreshToken: refreshToken
    });

    localStorage.setItem(
      "userInfo",
      JSON.stringify({
        id: id,
        name: "서현"
        // accessToken: accessToken,
        // refreshToken: refreshToken
      })
    );

    navigate("/");
  };
  return (
    <S.LoginWrapper>
      <S.Logincontent onSubmit={handleSubmit}>
        <S.LoginInputWrapper>
          <S.LoginInput
            required
            name="id"
            placeholder="아이디를 입력해주세요."
            value={loginData.id}
            onChange={handleInputChange}
          />
        </S.LoginInputWrapper>

        <S.LoginInputWrapper>
          <S.LoginInput
            required
            name="pw"
            placeholder="비밀번호를 입력해주세요."
            value={loginData.pw}
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
