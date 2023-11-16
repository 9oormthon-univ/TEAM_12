import React, { useEffect, useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    name: "",
    id: "",
    pw: "",
    pwCheck: ""
  });

  const [isPwCheck, setIsPwCheck] = useState(true);

  useEffect(() => {
    if (loginData.pw != loginData.pwCheck) {
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
    const { name, id, pw, pwCheck } = loginData;

    if (id === "" || pw === "" || name === "" || pwCheck === "") {
      alert("모든 정보를 입력해주세요!");
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

    alert("회원가입에 성공하셨습니다!");
    navigate("/login");
  };

  return (
    <S.LoginWrapper>
      <S.Logincontent onSubmit={handleSubmit}>
        <S.LoginInputWrapper>
          <S.LoginLabel>회원명</S.LoginLabel>
          <S.LoginInput
            required
            name={"name"}
            placeholder="회원명을 입력해주세요."
            value={loginData.name}
            onChange={handleInputChange}
          />
        </S.LoginInputWrapper>

        <S.LoginInputWrapper>
          <S.LoginLabel>아이디</S.LoginLabel>
          <S.LoginInput
            required
            name={"id"}
            placeholder="아이디를 입력해주세요."
            value={loginData.id}
            onChange={handleInputChange}
          />
        </S.LoginInputWrapper>

        <S.LoginInputWrapper>
          <S.LoginLabel>비밀번호</S.LoginLabel>
          <S.LoginInput
            required
            type="password"
            name={"pw"}
            placeholder="비밀번호를 입력해주세요"
            value={loginData.pw}
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
