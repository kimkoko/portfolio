import React from "react";
import ExpContainer from "../components/ExpContainer";

import "./Exps.scss";

const Exps: React.FC = () => {
  return (
    <div className="exp-container">
      <div className="exp-title">Experiences</div>
      <div className="exp-detail">
        <ExpContainer
          title="엘리스 SW 엔지니어 트랙 8기"
          content={[
            "JavaScript 연산자와 기초 개념을 이용한 알고리즘 풀이",
            "JavaScript의 비동기 프로그래밍, Promise, async/await 학습",
            "Node.js, Express.js, MongoDB를 통한 백엔드 기초 및 서버 지식 학습",
            "React로 프로젝트(Butter&Better, YAMSpoon) 진행",
            "VM, Nginx, PM2로 프로젝트 배포",
            "Git을 통해 코드 관리 및 공동 개발하는 방법 학습",
          ]}
          skills={[
            "HTML",
            "CSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Git",
          ]}
        />

        <ExpContainer
          title="홍콩이공대 한인학생회 서기"
          content={[
            "한인학생회 멤버 관리",
            "매주 회의록 작성",
            "단체 이메일 전송",
            "한인회 이벤트 진행 및 기획",
          ]}
          skills={["팀워크", "꾸준함"]}
        />

        <ExpContainer
          title="글로벌리어 인턴"
          content={[
            "Mix panel  프로젝트 참여 (홈페이지 데이터 트래킹, 분석 후 리포트 작성)",
            "Adobe XD 이용해 데모 웹사이트 수정",
            "Wix 통해 홈페이지에 금액 계산해주는 페이지 디자인 및 코딩",
            "Canva 이용해서 자동화 이메일 템플릿 디자인 ",
          ]}
          skills={["Data Analysis", "Adobe XD", "Wix"]}
        />
      </div>
    </div>
  );
};

export default Exps;
