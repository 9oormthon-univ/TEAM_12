import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { API } from "../../api/axios";

function SignUp() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    fullName: "",
    userName: "",
    password: "",
    pwCheck: ""
  });

  const [isPwCheck, setIsPwCheck] = useState(true);

  useEffect(() => {
    if (loginData.password != loginData.pwCheck) {
      setIsPwCheck(false);
    } else {
      setIsPwCheck(true);
    }
  }, [loginData]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { fullName, userName, password, pwCheck } = loginData;

    if (
      userName === "" ||
      password === "" ||
      fullName === "" ||
      pwCheck === ""
    ) {
      alert("모든 정보를 입력해주세요!");
      return;
    }

    try {
      const response = await API.post("/api/users/signup", {
        userName: userName,
        password: password,
        fullName: fullName
      });

      // const accessToken = response.data.token.access;
      // const refreshToken = response.data.token.refresh;
      // const fullName = response.data.fullName;

      // setUserInfo({
      //   userName: userName,
      //   fullName: fullName
      //   // accessToken: accessToken,
      //   // refreshToken: refreshToken
      // });

      // localStorage.setItem(
      //   "userInfo",
      //   JSON.stringify({
      //     userName: userName,
      //     fullName: fullName
      //     // accessToken: accessToken,
      //     // refreshToken: refreshToken
      //   })
      // );
      alert("회원가입이 완료 되었습니다!");
      navigate("/login");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("비밀번호를 다시 입력해주세요!");
    }
  };

  return (
    <S.LoginWrapper>
      <S.Logincontent onSubmit={handleSubmit}>
        <S.LoginInputWrapper>
          <S.LoginLabel>회원명</S.LoginLabel>
          <S.LoginInput
            required
            name={"fullName"}
            placeholder="회원명을 입력해주세요."
            value={loginData.fullName}
            onChange={handleInputChange}
          />
        </S.LoginInputWrapper>

        <S.LoginInputWrapper>
          <S.LoginLabel>아이디</S.LoginLabel>
          <S.LoginInput
            required
            name={"userName"}
            placeholder="아이디를 입력해주세요."
            value={loginData.userName}
            onChange={handleInputChange}
          />
        </S.LoginInputWrapper>

        <S.LoginInputWrapper>
          <S.LoginLabel>비밀번호</S.LoginLabel>
          <S.LoginInput
            required
            type="password"
            name={"password"}
            placeholder="비밀번호를 입력해주세요"
            value={loginData.password}
            onChange={handleInputChange}
          />
          <S.LoginInput
            required
            type="password"
            name={"pwCheck"}
            placeholder="비밀번호를 확인해주세요."
            value={loginData.pwCheck}
            onChange={handleInputChange}
          />
          {isPwCheck ? (
            <></>
          ) : (
            <S.LoginError>비밀번호를 정확하게 입력해주세요.</S.LoginError>
          )}
        </S.LoginInputWrapper>

        <S.LoginButton>회원가입</S.LoginButton>
      </S.Logincontent>
    </S.LoginWrapper>
  );
}

export default SignUp;
