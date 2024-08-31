import { Layout } from "@/components/common/Layout/indext";
import styled from "styled-components";
import IconCheck from "@/resources/common/check.svg?react";
import IconCheckFill from "@/resources/common/check-fill.svg?react";
import { useState } from "react";
import { TeamCard } from "@/components/common/TeamCard";
import { useNavigate } from "react-router-dom";

const tabs = [
  "기획자",
  "디자이너",
  "개발자",
  "마케터",
  "인플루언서",
  "크리에이터",
  "매니저",
  "작가",
  "감독",
  "사진사",
  "교육자",
  "기타",
];

export const TeamPage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <Layout>
      <Container>
        <h1>인기 공고문</h1>

        <div className="header">
          <TeamCard
            date={"20일 남음"}
            title={"창의적인 프로젝트를 이끌 기획자를 찾습니다!"}
            tags={["기획자", "마케터", "크리에이터"]}
            favoriteCnt={885}
            commnetCnt={58}
          />

          <TeamCard
            date={"12일 남음"}
            title={"시각적 혁신을 이끌 수 있는 3D 디자이너를 모집합니다."}
            tags={["디자이너"]}
            favoriteCnt={885}
            commnetCnt={58}
          />

          <TeamCard
            date={"3일 남음"}
            title={
              "자연을 주제로 한 영상 프로젝트를 제작할 멤버를 구하고 있어요"
            }
            tags={["작가", "감독", "사진사"]}
            favoriteCnt={885}
            commnetCnt={58}
          />
        </div>

        <hr />

        <div className="header2">
          <button onClick={() => navigate("/form/team")}>팀 등록</button>
        </div>

        <div className="content">
          <ul className="tab-list">
            {tabs.map((tab, idx: number) => (
              <li
                key={idx}
                className={tab === selected ? "selected" : ""}
                onClick={() => setSelected(tab)}
              >
                {tab === selected ? <IconCheckFill /> : <IconCheck />}

                {tab}
              </li>
            ))}
          </ul>

          <div className="team-list">
            {Array.from({ length: 10 }).map((v) => (
              <TeamCard
                key={v}
                date={"20일 남음"}
                title={"창의적인 프로젝트를 이끌 기획자를 찾습니다!"}
                tags={["기획자", "마케터", "크리에이터"]}
                favoriteCnt={885}
                commnetCnt={58}
              />
            ))}
          </div>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 1260px;
  margin: 0 auto;

  .header2 {
    width: 1260px;
    display: flex;
    flex-direction: row;
    justify-content: end;

    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: -20px;

    button {
      height: 40px;
      padding: 10px 27px;
      border-radius: 5px;
      background: var(--Primary-color, #007bff);
      border: none;

      color: #fff;
      text-align: center;
      font-family: "Noto Sans KR";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 22.4px */
    }
  }

  hr {
    border: 1px solid #abbac9;
    border-width: 1px 0px 0px 0px;
    height: 1px;
  }

  h1 {
    color: var(--Black, #222);
    font-family: "Noto Sans KR";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 38.4px */
    letter-spacing: -0.8px;

    margin-top: 60px;
    margin-bottom: 20px;
  }

  .header {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 50px 0;
    gap: 20px;
  }

  .content {
    padding: 40px 0;
    display: flex;
  }

  .tab-list {
    width: 260px;
    display: flex;
    flex-direction: column;
    gap: 24px;

    li {
      height: 32px;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }

    .selected {
      color: #007bff;
    }
  }

  .team-list {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;
