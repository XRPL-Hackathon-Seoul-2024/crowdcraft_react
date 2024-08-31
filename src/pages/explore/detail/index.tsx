import { Layout } from "@/components/common/Layout/indext";
import styled from "styled-components";
import Sample from "@/resources/project/sample.png";
import Sample2 from "@/resources/project/sample2.png";
import IconRight from "@/resources/project/right.svg?react";
import IconHeart from "@/resources/project/heart.svg?react";
import IconLink from "@/resources/project/link.svg?react";
import { Card } from "@/components/common/Card";

export const PojectDetailPage = () => {
  return (
    <Layout>
      <Container>
        <div className="first">
          <img src={Sample} />
          <div className="c1">
            <div className="title">
              <div className="text">
                예술
                <IconRight />
                공예
              </div>

              <div className="icon">
                <IconHeart />
                <IconLink />
              </div>
            </div>

            <hr />

            <div className="t1">아름다운 파스텔 색감의 꽃병</div>

            <div className="t2">
              "아름다운 파스텔 색감의 꽃병"은 고급 도자기로 제작된, 은은한
              파스텔 톤이 돋보이는 꽃병입니다. 수작업으로 만들어진 이 꽃병은
              공간에 따뜻한 분위기를 더해줍니다.
            </div>

            <div className="note">
              <div className="n1 blue">달성금액</div>
              <div className="n2 blue">2,984,770원</div>
              <div className="label">26% 달성</div>
            </div>

            <div className="note">
              <div className="n1">목표금액</div>
              <div className="n2">13,680,320원</div>
            </div>

            <div className="note">
              <div className="n1">마감기한</div>
              <div className="n2">D - 3</div>
            </div>

            <hr />

            <button>후원하기</button>
          </div>
        </div>

        <h2 className="c2">리워드 선택</h2>
        <ul>
          <li>
            <div className="l1">5,000원</div>
            <div className="l2">디지털 월페이어</div>
            <ul>
              <li>파스텔 색감의 꽃병 이미지 제공</li>
            </ul>
          </li>

          <li>
            <div className="l1">5,000원</div>
            <div className="l2">디지털 월페이어</div>
            <ul>
              <li>파스텔 색감의 꽃병 이미지 제공</li>
              <li>파스텔 톤의 작은 꽃병 1개 (랜덤색상) 제공</li>
            </ul>
          </li>

          <li>
            <div className="l1">5,000원</div>
            <div className="l2">디지털 월페이어</div>
            <ul>
              <li>파스텔 색감의 꽃병 이미지 제공</li>
              <li>파스텔 톤의 작은 꽃병 1개 (랜덤색상) 제공</li>
            </ul>
          </li>
        </ul>

        <hr />

        <div className="tab">
          <div>
            <div className="select">상세정보</div>
          </div>
          <div>
            <div>문의처</div>
          </div>
          <div>
            <div>자주하는 질문</div>
          </div>
          <div>
            <div>댓글</div>
          </div>
        </div>

        <div className="img-list">
          <img src={Sample2} />

          <img src={Sample2} />

          <img src={Sample2} />
        </div>

        <h3 className="c3">비슷한 프로젝트 둘러보기</h3>

        <div className="card-list">
          {Array.from({ length: 3 }).map((v) => (
            <Card
              key={v}
              title="Culty의 새로운 밴드 프로젝트 - 3번째 정규앨범"
              volume={(3200650).toLocaleString()}
              percent={97}
              src={Sample2}
            />
          ))}
        </div>

        <div className="last">
          더보기
          <IconRight />
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 1260px;
  margin: 0 auto;
  margin-top: 30px;

  .first {
    display: flex;
    gap: 60px;

    .c1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 480px;
    }

    .title {
      display: flex;
      justify-content: space-between;

      .text {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      .icon {
        display: flex;
        gap: 12px;
      }
    }

    hr {
      background: #ccd6e1;
      margin: 14px 0 28px 0;
    }

    .t1 {
      margin-bottom: 12px;
      overflow: hidden;
      color: var(--Light-black, #414141);
      text-overflow: ellipsis;
      font-family: "Noto Sans KR";
      font-size: 22px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%; /* 26.4px */
      letter-spacing: -0.55px;
    }

    .t2 {
      margin-bottom: 28px;
      overflow: hidden;
      color: var(--Light-black, #414141);
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: "Noto Sans KR";
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 24px */
      letter-spacing: -0.4px;
    }

    .note {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;

      .n1 {
        color: var(--Primary-color, #58626c);
        font-family: "Noto Sans KR";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: 120%; /* 21.6px */
        letter-spacing: -0.45px;
      }

      .n2 {
        color: var(--Primary-color, #58626c);
        font-family: "Noto Sans KR";
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%; /* 31.2px */
        letter-spacing: -0.65px;
      }

      .label {
        color: var(--Primary-color, #007bff);
        font-family: "Noto Sans KR";
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 18px */
        letter-spacing: -0.375px;

        display: flex;
        padding: 3px 6px;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background: #e2eaf2;
      }

      .blue {
        color: var(--Primary-color, #007bff);
      }
    }

    button {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      height: 65px;
      padding: 10px 27px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      align-self: stretch;

      border-radius: 5px;
      background: var(--Primary-color, #007bff);

      border: none;

      color: #fff;
      text-align: center;
      font-family: "Noto Sans KR";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 28px */
    }
  }

  .c2 {
    margin-top: 60px;
    margin-bottom: 20px;
    overflow: hidden;
    color: var(--Light-black, #414141);
    text-overflow: ellipsis;
    font-family: "Noto Sans KR";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 28.8px */
    letter-spacing: -0.6px;
  }

  > ul {
    display: flex;
    gap: 20px;
    margin-bottom: 60px;

    > li {
      box-sizing: border-box;
      width: 360px;
      height: 240px;
      display: flex;
      padding: 30px 35px;
      flex-direction: column;
      gap: 10px;
      border-radius: 5px;
      border: 1px solid var(--Gray-200, #abbac9);

      .l1 {
        overflow: hidden;
        color: var(--Black, #222);
        text-overflow: ellipsis;
        font-family: "Noto Sans KR";
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 22.4px */
        letter-spacing: -0.4px;
      }

      .l2 {
        overflow: hidden;
        color: var(--Light-black, #414141);
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: "Noto Sans KR";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 22.4px */
        letter-spacing: -0.4px;
      }

      > ul {
        li {
          list-style-type: disc;
          margin-block-start: 10px;
          margin-inline-start: 20px;

          color: var(--Light-black, #414141);
          font-family: "Noto Sans KR";
          font-size: 15px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 22.5px */
          letter-spacing: -0.375px;
        }
      }
    }
  }

  hr {
    background: #ccd6e1;
    margin: 60px 0;
  }

  .tab {
    display: flex;
    justify-content: center;
    height: 48px;

    > div {
      width: 250px;
      padding: 17px 94px 0px 94px;

      > div {
        width: fit-content;
        padding-bottom: 16px;
        overflow: hidden;
        color: var(--Light-black, #414141);
        text-align: center;
        text-overflow: ellipsis;
        font-family: "Noto Sans KR";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 24px */
        letter-spacing: -0.5px;
        border-bottom: 1px solid #ccd6e1;
      }

      .select {
        border-bottom: 1px solid #007bff;
      }
    }
  }

  .img-list {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }

  .c3 {
    margin-top: 80px;
    margin-bottom: 20px;
    overflow: hidden;
    color: var(--Light-black, #414141);
    text-overflow: ellipsis;
    font-family: "Noto Sans KR";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 28.8px */
    letter-spacing: -0.6px;
  }

  .card-list {
    width: 1260px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* padding: 50px 0; */
    margin-bottom: 50px;
    gap: 20px;
  }

  .last {
    margin-bottom: 120px;
    display: flex;
    justify-content: center;
    gap: 2px;
    color: var(--Gray-500, #68747f);
    font-family: "Noto Sans KR";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 24px */
  }
`;
