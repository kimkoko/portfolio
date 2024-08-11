import React from "react";
import ProjContainer from "../components/ProjContainer";

import "./Projects.scss";

const Projects: React.FC = () => {
  return (
    <div className="proj-container">
      <div className="proj-title"> Projects </div>
      <div className="proj-detail">
        <ProjContainer
          title="레시피 소개 웹사이트 (YAMSpoon)"
          images={[
            "images/yam_intro.png",
            "images/yam_main.png",
            "images/yam_reci.png",
            "images/yam_ref.png",
          ]}
          content={
            <>
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
                <li>재료 카테고리 바 컴포넌트화 후 다른 페이지에 각각 적용</li>
                <li>forwardRef와 props 전달을 이용해서 컴포넌트 간에 교류</li>
                <li>axios 사용해서 API 콜을 깔끔하게 관리하는 방법을 학습</li>
                <li>
                  Intersection Observer를 이용해서 홈페이지의 특정 지점에
                  도달했을 때 API 콜을 하게 구현 (로딩 시간 줄이기 위한 방법)
                </li>
                <li>Git의 원격 저장소를 통해 코드 관리 및 공동 개발</li>
                <li>VM, PM2, Nginx를 이용해 서버 배포하는 법 학습</li>
              </ul>
            </>
          }
          links={[
            ["https://github.com/kimkoko/YAMSpoon", "Github"],
            ["https://youtu.be/kjJhKjFSBJ0", "YouTube"],
          ]}
        />

        <ProjContainer
          title="요리 서적 쇼핑몰 웹사이트 (Butter & Better)"
          images={[
            "/images/bb_intro.png",
            "/images/bb_home.png",
            "/images/bb_user.png",
            "/images/bb_cert.png",
          ]}
          content={
            <>
              요리 서적 전문 쇼핑몰 웹사이트
              <br />
              엘리스 SW 8기 1차 프로젝트 대상
              <br />
              <br />
              [역할]
              <ul>
                <li>백엔드 포지션</li>
                <li>Producst schema, model</li>
                <li>
                  Users api (로그인/로그아웃, 회원가입, 사용자 정보 수정/조회,
                  탈퇴, 관리자)
                </li>
              </ul>
              <br />
              [경험]
              <ul>
                <li>
                  엘리스 측에서 미리 정해준 구현 목록을 보며 API 목록 정리
                </li>
                <li>
                  메인이 될 서적 데이터의 스키마와 모델을 작성하고 API 담당
                  팀원과 함께 API 오류 해결 및 Postman을 이용해 API 콜 작동 확인
                </li>
                <li>
                  Users API
                  <br />
                  i. 회원가입 시 입력 폼 조건 확인
                  <br />
                  ii. 회원 정보 DB 저장
                  <br />
                  iii. 비밀번호 해쉬화
                  <br />
                  iv. 로그인 시 JWT 토큰 발행후 쿠키에 저장
                  <br />
                  v. 로그아웃 및 탈퇴 시 토큰 삭제
                  <br />
                  vi. 사용자 정보 조회, 수정, 삭제(탈퇴)
                  <br />
                  vii. 관리자 계정만 접속 가능한 페이지를 위해 어드민 온리
                  미들웨어 구현
                  <br />
                  viii. 로그인한 사용자만 접속 가능한 페이지를 위해
                  loginRequired 미들웨어 구현
                </li>
                <li>
                  라우터와 서비스를 따로 작성하여 코드를 깔끔하고 재사용성 높게
                  관리
                </li>
                <li>팀원들과의 꾸준한 소통과 Git을 사용한 공동 개발</li>
              </ul>
            </>
          }
          links={[
            ["https://github.com/kimkoko/Butter-Better", "Github"],
            ["https://youtu.be/I_ipzA-A8JM", "YouTube"],
          ]}
        />

        <ProjContainer
          title="Knowledge Graph Based Question Answering Leaderboard"
          images={[
            "images/kgqa_intro.png",
            "images/kgqa_result.png",
            "images/kgqa_web.png",
          ]}
          content={
            <>
              홍콩이공대 개인 캡스톤 프로젝트
              <br />
              <br />
              [경험]
              <ul>
                <li>
                  현존하는 KGQA 모델들 중 simple question을 기반으로 한 모델들을
                  선정한 후 선택된 KGQA 데이터셋에서의 성능결과들을 기반으로
                  전체 랭킹을 매기는 개인 캡스톤 프로젝트
                </li>
                <li>KGQA 모델들의 분석, 성능 결과 분석</li>
                <li>Google Colab에서 python 파일들로 진행</li>
              </ul>
            </>
          }
          links={[
            ["https://github.com/kimkoko/leaderboard", "Github"],
            ["https://kimkoko.github.io/leaderboard/", "Link"],
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
