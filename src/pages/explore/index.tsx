import { Card } from "@/components/common/Card";
import { Layout } from "@/components/common/Layout/indext";
import { useState } from "react";
import styled from "styled-components";
import Img from "@/resources/common/test.png";
import Gift from "@/resources/common/gift.png";
import { useNavigate } from "react-router-dom";

const tabs = [
  "예술",
  "음악",
  "영화",
  "사진",
  "소셜",
  "디자인",
  "건축",
  "게임",
  "댄스",
  "요리",
  "뷰티",
  "패션",
];

const sorts = [
  "인기순",
  "최신순",
  "마감순",
  "달성순",
  "금액순",
  "평점순",
  "참여자순",
];

export const ExplorePage = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(tabs[0]);
  return (
    <Layout>
      <Container>
        <div className="banner">
          <div>
            <div className="title">초기 사용자 특별 보상 혜택!</div>
            <div className="desc">알아보기</div>
          </div>

          <img src={Gift} />
        </div>

        <div className="header">
          <button onClick={() => navigate("/form/project")}>
            프로젝트 등록
          </button>
        </div>

        <div className="search-bar">
          <input />
        </div>
        <ul className="tab-list">
          {tabs.map((tab, idx: number) => (
            <li
              key={idx}
              className={selected === tab ? "selected" : ""}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <ul className="sort-list ">
          {sorts.map((tab, idx: number) => (
            <li
              key={idx}
              className={selected === tab ? "selected" : ""}
              onClick={() => setSelected(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
        <div className="card-list">
          {Array.from({ length: 16 }).map((v) => (
            <Card
              key={v}
              title="Culty의 새로운 밴드 프로젝트 - 3번째 정규앨범"
              volume={(3200650).toLocaleString()}
              percent={97}
              src={Img}
            />
          ))}
        </div>
        <div className="pagination">페이지네이션</div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  .header {
    width: 1260px;
    display: flex;
    justify-content: end;

    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: -40px;

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

  .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    height: 160px;
    background: #def7ff;

    .title {
      margin-bottom: 16px;
      color: var(--Black, #222);
      text-align: center;
      font-family: "Noto Sans KR";
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.6px;
    }

    .desc {
      color: var(--Black, #222);
      font-family: "Noto Sans KR";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 21.6px */
    }
  }

  .search-bar {
    margin-top: 70px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      box-sizing: border-box;
      width: 540px;
      height: 54px;
      padding: 0;
      border-radius: 100px;
      border: 2px solid var(--Primary-color, #007bff);

      &:focus {
        outline: none;
      }
    }
  }

  .tab-list {
    width: 1260px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 30px;

    li {
      color: var(--Light-black, #414141);
      text-align: center;
      font-family: "Noto Sans KR";
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 200%; /* 36px */
      cursor: pointer;
    }

    .selected {
      color: #007bff;
      border-bottom: 3px solid #007bff;
    }
  }

  .sort-list {
    width: 1260px;
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 0 auto;
    gap: 24px;

    li {
      color: var(--Gray-400, #7c8792);
      font-family: "Noto Sans KR";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 100%; /* 16px */
      cursor: pointer;
    }

    .selected {
      color: #007bff;
      border-bottom: 3px solid #007bff;
    }
  }

  .card-list {
    width: 1260px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 50px 0;
    gap: 20px;
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;
  }
`;
