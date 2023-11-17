import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { themeColor } from "../../../context/colorState";

function UseColorpicker({ num = 1 }) {
  var color_arr = new Array(100);
  const canvasRef = useRef();

  const handelClick = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d", { willReadFrequently: true });

    const image = new Image();
    image.src = "/theme/theme" + num + ".png";

    image.onload = () => {
      context?.drawImage(image, 0, 0, 300, 10);

      try {
        for (var i = 0; i < 100; i++) {
          var id = context?.getImageData(i * 3, 1, 1, 1);
          color_arr[i] = [id.data[0], id.data[1], id.data[2], id.data[3]];
        }
      } finally {
        setColorInfo(color_arr);
      }
    };
  };

  const [colorInfo, setColorInfo] = useRecoilState(themeColor);

  return (
    <>
      <canvas
        style={{ position: "fixed", bottom: "-1000px" }}
        ref={canvasRef}
      />
      <div onClick={handelClick}>색상바꾸기</div>
    </>
  );
}

export default UseColorpicker;
