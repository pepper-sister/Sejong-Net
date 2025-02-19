import React from 'react';
import '../styles/allwebsites.css';
import subImage from '../assets/sub.jpg';
import univIcon from '../assets/univ.png';
import potalIcon from '../assets/potal.png';
import campusIcon from '../assets/campus.png';
import bookIcon from '../assets/book.png';
import dodreIcon from '../assets/dodre.png';
import udreIcon from '../assets/udre.png';
import humaIcon from '../assets/huma.png';
import pleaIcon from '../assets/plea.png';

function All_websites() {
  const goToSejongHomepage = () => {
    window.open('http://www.sejong.ac.kr/', '_blank');
  };

  const goToSejongPortal = () => {
    window.open('https://portal.sejong.ac.kr/jsp/login/loginSSL.jsp', '_blank');
  };

  const goToJiphyunCampus = () => {
    window.open('https://ecampus.sejong.ac.kr/', '_blank');
  };

  const goToLibrary = () => {
    window.open('https://library.sejong.ac.kr/index.ax', '_blank');
  };

  const goToDodream = () => {
    window.open('https://do.sejong.ac.kr/', '_blank');
  };

  const goToClassic = () => {
    window.open('http://classic.sejong.ac.kr/', '_blank');
  };

  const goToUdream = () => {
    window.open('https://udream.sejong.ac.kr/main/Login.aspx', '_blank');
  };

  const goToGraduate = () => {
    window.open('https://please-graduate.com/', '_blank');
  };

  return (
    <div>
      <main>
        <div class="sub-section">
          <div class="subimg-section">
            <img src={subImage} alt="" />
          </div>

          <div class="sidebar-section">
            <div class="side-bar1">
              <button class="sidebar1-button" onClick={goToSejongHomepage}>
                <img src={univIcon} alt="" class="icon2" />
                세종대학교 홈페이지
                <p>
                  학교 소개, 입학 정보, 학과 및 연구소 안내 등
                  <br />
                  전반적인 정보를 제공하는 공식 웹사이트
                </p>
              </button>
              <button class="sidebar1-button" onClick={goToJiphyunCampus}>
                <img src={campusIcon} alt="" class="icon2" />
                세종대학교 집현캠퍼스
                <p>
                  온라인 강의 수강, 강의 자료 다운로드 및
                  <br />
                  과제 제출 e-러닝 플랫폼
                </p>
              </button>
              <button class="sidebar1-button" onClick={goToDodream}>
                <img src={dodreIcon} alt="" class="icon2" />
                세종대학교 두드림
                <p>
                  비교과 프로그램 신청, 진로 및 취업 지원,
                  <br />
                  멘토링 프로그램 등 학생 지원 서비스
                </p>
              </button>
              <button class="sidebar1-button" onClick={goToClassic}>
                <img src={humaIcon} alt="" class="icon2" />
                세종대학교 대양휴머니티칼리지
                <p>
                  교양 과목 정보 제공, 고전독서 인증 시험,
                  <br />
                  창의학기제 안내 플랫폼
                </p>
              </button>
            </div>

            <div class="side-bar2">
              <button class="sidebar2-button" onClick={goToSejongPortal}>
                <img src={potalIcon} alt="" class="icon2" />
                세종대학교 포털
                <p>
                  학사정보, 수강신청, 성적조회, 수강철회 등
                  <br />
                  종합 정보 시스템
                </p>
              </button>
              <button class="sidebar2-button" onClick={goToLibrary}>
                <img src={bookIcon} alt="" class="icon2" />
                세종대학교 학술정보원
                <p>
                  도서 검색, 전자 자료 열람, 학술 논문 검색,
                  <br />
                  스터디룸 예약 등 도서관 관련 서비스
                </p>
              </button>
              <button class="sidebar2-button" onClick={goToUdream}>
                <img src={udreIcon} alt="" class="icon2" />
                세종대학교 유드림
                <p>
                  비교과 프로그램 신청, 진로 및 취업 지원,
                  <br />
                  봉사활동 및 경력 개발 프로그램 참여 플랫폼
                </p>
              </button>
              <button class="sidebar2-button" onClick={goToGraduate}>
                <img src={pleaIcon} alt="" class="icon2" />
                Please Graduate
                <p>
                  다양한 졸업요건(학점, 영어, 고전독서)과
                  <br />
                  관련된 검사가 가능한 플랫폼
                </p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default All_websites;