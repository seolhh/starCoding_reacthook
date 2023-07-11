import React, { useEffect } from "react";

const Timer = (props) => {
  useEffect(() => {
    // 1초에 한번씩(1000) 콘솔에 찍히도록 설정
    const timer = setInterval(() => {
      console.log("타이머 돌아가는중 ...");
    }, 1000);

    // 토글을 클릭했을 때 타이머를 멈추고 싶으면 정리하는 함수를 써줘야 함.
    return () => {
      clearInterval(timer);
      console.log("타이머가 종료되었습니다");
    };
  }, []);

  return (
    <div>
      <span>타이머를 시작합니다. 콘솔을 보세요 !</span>
    </div>
  );
};

export default Timer;
