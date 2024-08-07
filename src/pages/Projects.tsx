import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./Projects.scss";
import "@splidejs/react-splide/css";

const Projects = () => {
  const images = [
    "https://picsum.photos/id/1/480",
    "https://picsum.photos/id/3/480",
    "https://picsum.photos/480",
  ];

  return (
    <div className="proj-container">
      <div className="proj-title"> Projects </div>
      <div className="proj-detail">
        <div className="proj-detail-container">
          <div className="proj-detail-title">YAMSpoon</div>
          <div className="proj-detail-content">
            <div className="proj-detail-img">
              <Splide
                options={{
                  rewind: true,
                  perPage: 1,
                }}
              >
                {images.map((image, index) => (
                  <SplideSlide key={index}>
                    <img src={image} alt={`Slide ${index}`} />
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="proj-detail-left">
              <div className="proj-detail-text">
                냉장고 속 재료들로 만들 수 있는 레시피를 제공하는 서비스
                <br />
                SW 8기 2차 웹개발 프로젝트
                <br />
                <br />
                [역할]
                <ul>
                  <li>프론트엔드 포지션</li>
                  <li>
                    메인 홈, 재료별 레시피, 나만의 냉장고 페이지 기능 및 스타일
                    구현
                  </li>
                  <li>페이지네이션 기능</li>
                </ul>
                <br />
                [경험]
                <ul>
                  <li>주제 선정 및 기획 (구현할 목록 정리)</li>
                  <li>Figma를 이용해 와이어 프레임 제작</li>
                  <li>
                    공통 컴포넌트 버튼, 페이지네이션 부분 스타일링 및 기능 구현
                  </li>
                  <li>아이콘들 svg 파일로 공통 컴포넌트화</li>
                  <li>React의 상태 관리 라이브러리들 사용</li>
                  <li>
                    재료 카테고리 바 컴포넌트화 후 다른 페이지에 각각 적용
                  </li>
                  <li>forwardRef와 props 전달을 이용해서 컴포넌트 간에 교류</li>
                  <li>axios 사용해서 API 콜을 깔끔하게 관리하는 방법을 학습</li>
                  <li>
                    Intersection Observer를 이용해서 홈페이지의 특정 지점에
                    도달했을 때 API 콜을 하게 구현 (로딩 시간 줄이기 위한 방법)
                  </li>
                  <li>Git의 원격 저장소를 통해 코드 관리 및 공동 개발</li>
                  <li>VM, PM2, Nginx를 이용해 서버 배포하는 법 학습</li>
                </ul>
              </div>
              <div className="proj-detail-skill">
                <ul>
                  <li>
                    <a
                      href="https://github.com/kimkoko/YAMSpoon"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="https://youtu.be/kjJhKjFSBJ0" target="_blank">
                      YouTube
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
