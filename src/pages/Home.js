import { useState, useEffect } from "react";
import "../styles/home.css";

import mainImage from "../assets/main.jpg";
import univIcon from "../assets/univ.png";
import potalIcon from "../assets/potal.png";
import campusIcon from "../assets/campus.png";
import bookIcon from "../assets/book.png";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      let currentTime = new Date();
      currentTime.setSeconds(currentTime.getSeconds() + 1.1);

      const hours = String(currentTime.getHours()).padStart(2, "0");
      const minutes = String(currentTime.getMinutes()).padStart(2, "0");
      const seconds = String(currentTime.getSeconds()).padStart(2, "0");

      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const intervalId = setInterval(updateClock, 10);

    return () => clearInterval(intervalId);
  }, []);

  const goPage = (link) => {
    window.open(`${link}`, "_black");
  };

  return (
    <div className="home">
      <img className="home__img" src={mainImage} alt="" />

      <div className="clock__section">
        <div className="clock__text">학교 서버시간</div>
        <h2 className="clock">{time}</h2>
      </div>

      <div className="home__feature">
        <button className="home__feature__button" onClick={() => goPage("http://www.sejong.ac.kr/")}>
          <img src={univIcon} alt="" className="home__feature__icon" />
          <p className="home__feature__text">세종대 홈페이지</p>
        </button>
        <button
          className="home__feature__button"
          onClick={() => goPage("https://portal.sejong.ac.kr/jsp/login/loginSSL.jsp")}
        >
          <img src={potalIcon} alt="" className="home__feature__icon" />
          <p className="home__feature__text">세종대 포털</p>
        </button>
        <button className="home__feature__button" onClick={() => goPage("https://ecampus.sejong.ac.kr/")}>
          <img src={campusIcon} alt="" className="home__feature__icon" />
          <p className="home__feature__text">집현캠퍼스</p>
        </button>
        <button className="home__feature__button" onClick={() => goPage("https://library.sejong.ac.kr/index.ax")}>
          <img src={bookIcon} alt="" className="home__feature__icon" />
          <p className="home__feature__text">학술정보원</p>
        </button>
      </div>
    </div>
  );
}
