import "../styles/allwebsites.css";

import subImage from "../assets/sub.jpg";
import univIcon from "../assets/univ.png";
import potalIcon from "../assets/potal.png";
import campusIcon from "../assets/campus.png";
import bookIcon from "../assets/book.png";
import dodreIcon from "../assets/dodre.png";
import udreIcon from "../assets/udre.png";
import humaIcon from "../assets/huma.png";
import pleaIcon from "../assets/plea.png";

export default function AllWebsites() {
  const goPage = (link) => {
    window.open(`${link}`, "_black");
  };

  return (
    <div className="allwebsites">
      <img className="allwebsites__img" src={subImage} alt="" />

      <div className="allwebsites__feature">
        <button className="allwebsites__feature__button" onClick={() => goPage("http://www.sejong.ac.kr/")}>
          <img src={univIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">세종대학교 홈페이지</h4>
          <p className="allwebsites__feature__info">
            학교 소개, 입학 정보, 학과 및 연구소 안내 등 전반적인 정보를 제공하는 공식 웹사이트
          </p>
        </button>
        <button className="allwebsites__feature__button" onClick={() => goPage("https://ecampus.sejong.ac.kr/")}>
          <img src={campusIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">세종대학교 집현캠퍼스</h4>
          <p className="allwebsites__feature__info">온라인 강의 수강, 강의 자료 다운로드 및 과제 제출 e-러닝 플랫폼</p>
        </button>
        <button className="allwebsites__feature__button" onClick={() => goPage("https://do.sejong.ac.kr/")}>
          <img src={dodreIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">세종대학교 두드림</h4>
          <p className="allwebsites__feature__info">
            비교과 프로그램 신청, 진로 및 취업 지원, 멘토링 프로그램 등 학생 지원 서비스
          </p>
        </button>
        <button className="allwebsites__feature__button" onClick={() => goPage("http://classic.sejong.ac.kr/")}>
          <img src={humaIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">세종대학교 대양휴머니티칼리지</h4>
          <p className="allwebsites__feature__info">교양 과목 정보 제공, 고전독서 인증 시험, 창의학기제 안내 플랫폼</p>
        </button>
        <button
          className="allwebsites__feature__button"
          onClick={() => goPage("https://portal.sejong.ac.kr/jsp/login/loginSSL.jsp")}
        >
          <img src={potalIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">세종대학교 포털</h4>
          <p className="allwebsites__feature__info">학사정보, 수강신청, 성적조회, 수강철회 등 종합 정보 시스템</p>
        </button>
        <button
          className="allwebsites__feature__button"
          onClick={() => goPage("https://library.sejong.ac.kr/index.ax")}
        >
          <img src={bookIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">세종대학교 학술정보원</h4>
          <p className="allwebsites__feature__info">
            도서 검색, 전자 자료 열람, 학술 논문 검색, 스터디룸 예약 등 도서관 관련 서비스
          </p>
        </button>
        <button
          className="allwebsites__feature__button"
          onClick={() => goPage("https://udream.sejong.ac.kr/main/Login.aspx")}
        >
          <img src={udreIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">세종대학교 유드림</h4>
          <p className="allwebsites__feature__info">
            비교과 프로그램 신청, 진로 및 취업 지원, 봉사활동 및 경력 개발 프로그램 참여 플랫폼
          </p>
        </button>
        <button className="allwebsites__feature__button" onClick={() => goPage("https://please-graduate.com/")}>
          <img src={pleaIcon} alt="" className="allwebsites__feature__icon" />
          <h4 className="allwebsites__feature__title">Please Graduate</h4>
          <p className="allwebsites__feature__info">
            다양한 졸업요건(학점, 영어, 고전독서)과 관련된 검사가 가능한 플랫폼
          </p>
        </button>
      </div>
    </div>
  );
}
