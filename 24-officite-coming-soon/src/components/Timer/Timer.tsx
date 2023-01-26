import { FC, useEffect, useState } from "react";
import { getRemainingTimerUntilMsTimestamps } from "./util";
import Wrapper from "./Timer.styled";

export interface ITimeLeft {
  seconds: string;
  minutes: string;
  hours: string;
  days: string;
}

interface IProps {
  countdownTimerstampMs: number;
  theme: "dark" | "light";
}

const defaultTime: ITimeLeft = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

const Timer: FC<IProps> = ({ countdownTimerstampMs, theme }) => {
  const [remainingTime, setRemainingTime] = useState<ITimeLeft>(defaultTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimerstampMs);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [countdownTimerstampMs]);

  const updateRemainingTime = (countdown: number) => {
    setRemainingTime(getRemainingTimerUntilMsTimestamps(countdown));
  };

  const { seconds, minutes, hours, days } = remainingTime;

  return (
    <Wrapper className={theme}>
      <div className="timer__title">
        <h2 className={`all-caps-text text-white`}>
          coming <span className="text-primary fs-800">5 nov 2023</span>{" "}
        </h2>
      </div>
      <div className="timer">
        <div className="time__card text-white">
          <span className="fs-900 fw-b">{days}</span>
          <span className="fs-600 text-dark-2 fw-b">days</span>
        </div>
        <div className="time__card text-white">
          <span className="fs-900 fw-b">{hours}</span>
          <span className="fs-600 text-dark-2 fw-b">hours</span>
        </div>
        <div className="time__card text-white">
          <span className="fs-900 fw-b">{minutes}</span>
          <span className="fs-600 text-dark-2 fw-b">minutes</span>
        </div>
        <div className="time__card text-white ">
          <span className="fs-900 fw-b">{seconds}</span>
          <span className="fs-600 text-dark-2 fw-b">seconds</span>
        </div>
      </div>
    </Wrapper>
  );
};

export default Timer;
