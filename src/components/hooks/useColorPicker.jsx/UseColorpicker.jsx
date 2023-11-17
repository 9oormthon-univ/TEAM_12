import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { themeColor } from "../../../context/colorState";

import html2canvas from "html2canvas";

import * as S from "./style";

function UseColorpicker() {
  const [pointColors, setPointColors] = useState("");

  var color_arr = [];
  var theme_colors = new Array(100);

  const canvasRef = useRef();
  const canvasRef2 = useRef();
  const themeRef = useRef();

  //이미지 파일 올리기
  const [imgFile, setImgFile] = useState("");
  //올린 이미지 파일 확인하기
  const imgRef = useRef();
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { willReadFrequently: true });
    getColor(canvas, context, imgFile);
  }, [imgFile]);

  const getPointColor = colors => {
    // console.log(colors);
    var picaker = {};
    var old_color = null; // 이전 색상(hex)
    colors.sort().forEach(function (colorhex, arrindx, arr) {
      // item == 현재 생상 값 (current color) (hex)
      if (old_color != colorhex) {
        // 새 색상 배열 추가
        picaker[colorhex] = 0;
        old_color = colorhex; // 이전(마지막) 색상 업데이트
      }

      return (picaker[colorhex] = (picaker[colorhex] || 0) + 1); // 색상 카운트
    });

    // 정렬(sort) : 색상 코드 반복 횟수
    colors = picaker;
    picaker = [];

    for (var color in colors) {
      picaker.push([color, colors[color]]); // [색상, 횟수]
    }

    // 상위 5개 추출
    picaker.sort(function (a, b) {
      return a[1] - b[1];
    });
    picaker.reverse();

    picaker = picaker.slice(0, 5); // 추출
    console.log(picaker);
    setPointColors(
      "linear-gradient(to right," +
        picaker[0][0] +
        "," +
        picaker[1][0] +
        "," +
        picaker[2][0] +
        "," +
        picaker[3][0] +
        "," +
        picaker[4][0] +
        ")"
    );
  };

  const getColor = (canvas, context, imgSrc) => {
    const image = new Image();
    image.src = imgSrc;

    var colors = []; // 색상 배열 (값-hex)
    var blocksize = 1; // 블록 사이즈 (px)

    var count = 0;
    var i = -4; // R,G,B,A (4)

    image.onload = function () {
      context.drawImage(image, 0, 0);
      var imgData = context.getImageData(0, 0, canvas.width, canvas.height);
      while ((i += blocksize * 4) < imgData.data.length) {
        ++count; // 카운트

        // getImageData().data 에서 해당 픽셀 RGBA 값 추출
        var v_rgba = [
          imgData.data[i],
          imgData.data[i + 1],
          imgData.data[i + 2]
        ];

        // Array.prototype.map : RGBA 값(0~255) -> HEX 값 변환
        var v_hex = v_rgba.map(function (color_val) {
          var _hex = color_val.toString(16);
          return _hex.length == 1 ? "0" + _hex : _hex;
        });

        v_hex = "#" + v_hex.join(""); // Array -> String 합치기
        colors.push(v_hex); // 색상 배열 추가
      }
      getPointColor(colors);
      return colors;
    };
  };
  //색상 추출하기...
  const handelClick = () => {
    let colorlist = [];

    const can = canvasRef2.current;
    const context = can.getContext("2d", { willReadFrequently: true });

    html2canvas(themeRef.current).then(canvas => {
      try {
        context.drawImage(canvas, 0, 0);

        for (var i = 0; i < 100; i++) {
          var imgData = context.getImageData(i * 3, 10, 1, 1);
          // console.log(imgData);

          var v_rgba = [imgData.data[0], imgData.data[1], imgData.data[2]];
          var v_hex = v_rgba.map(function (color_val) {
            var _hex = color_val.toString(16);
            return _hex.length == 1 ? "0" + _hex : _hex;
          });
          v_hex = "#" + v_hex.join(""); // Array -> String 합치기
          colorlist.push(v_hex); // 색상 배열 추가
        }
      } finally {
        // console.log("컬러리스트", colorlist);
        setColorInfo(colorlist);
      }
    });
  };

  const [colorInfo, setColorInfo] = useRecoilState(themeColor);

  return (
    <>
      <S.PointColorBar ref={themeRef} $PointColor={pointColors} />

      <input
        type="file"
        accept="image/*"
        id="profileImg"
        onChange={saveImgFile}
        ref={imgRef}
      />
      <div onClick={handelClick}>색상바꾸기</div>
      <img
        style={{ width: "300px" }}
        src={imgFile ? imgFile : ``}
        alt="프로필 이미지"
      />

      <canvas
        style={{
          position: "fixed",
          bottom: "-1000px"
        }}
        ref={canvasRef}
      />
      <canvas
        style={{
          position: "fixed",
          bottom: "-1000px"
        }}
        ref={canvasRef2}
      />
    </>
  );
}

export default UseColorpicker;
