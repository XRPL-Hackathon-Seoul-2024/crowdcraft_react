import { Card } from "@/components/common/Card";
import { Layout } from "@/components/common/Layout/indext";
import styled from "styled-components";
import Img from "@/resources/common/test.png";
import Sec from "@/resources/common/sec.png";
import Main from "@/resources/common/main.png";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Banner>
        <div>
          <div className="banner-box">
            <div className="title">
              Turn Your
              <br />
              Vision into Reality
            </div>
            <div className="desc">당신의 서비스를 만들어 보세요</div>
            <button className="btn" onClick={() => navigate("/explore")}>
              프로젝트 탐색하기
            </button>
          </div>

          <div>
            <img src={Main} />
          </div>
        </div>
      </Banner>

      <Container>
        <div className="content">
          <h2 className="title">인기 프로젝트</h2>

          <div className="card-list">
            <Card
              title="Culty의 새로운 밴드 프로젝트 - 3번째 정규앨범"
              volume={(3200650).toLocaleString()}
              percent={97}
              src={Img}
            />

            <Card
              title="Culty의 새로운 밴드 프로젝트 - 3번째 정규앨범"
              volume={(3200650).toLocaleString()}
              percent={97}
              src={Img}
            />

            <Card
              title="Culty의 새로운 밴드 프로젝트 - 3번째 정규앨범"
              volume={(3200650).toLocaleString()}
              percent={97}
              src={Img}
            />
          </div>
        </div>

        <div className="content">
          <h2 className="title" style={{ textAlign: "center" }}>
            추천 프로젝트
          </h2>

          <div className="card-list2">
            <Card text="Culty의 새로운 밴드 프로젝트" src={Img} />

            <Card text="Culty의 새로운 밴드 프로젝트" src={Img} />
          </div>
        </div>
      </Container>

      <Ad>
        <div className="box">
          <div className="tite">
            XRP를 통한 거래로 투자부터 자금 추적까지 안전하게!
          </div>
          <div className="label" onClick={() => navigate("/blockchain")}>
            알아보기
          </div>
        </div>

        <div>
          <img src={Sec} />
        </div>
      </Ad>

      <Container>
        <div className="content">
          <h2 className="title">신규 프로젝트</h2>

          <div className="card-list">
            <Card
              title="Culty의 새로운 밴드 프로젝트 - 3번째 정규앨범"
              volume={(3200650).toLocaleString()}
              percent={97}
              src={Img}
            />

            <Card
              title="Culty의 새로운 밴드 프로젝트 - 3번째 정규앨범"
              volume={(3200650).toLocaleString()}
              percent={97}
              src={Img}
            />

            <Card
              title="Culty의 새로운 밴드 프로젝트 - 3번째 정규앨범"
              volume={(3200650).toLocaleString()}
              percent={97}
              src={Img}
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="bottom">
          <div className="title">당신이 꿈꾸던 서비스를 현실로!</div>
          <div className="desc">
            당신의 아이디어를 현실로 만들기 위해서는 혼자가 아닌 함께 할 팀이
            필요합니다. CrowdCraft에서 제공하는 팀빌딩 기능을 통해 당신의 비전을
            공유할 수 있는 최고의 팀원을 찾으세요. 프로젝트의 성공을 이끌어갈
            전문가들을 모집하고, 함께 혁신을 만들어가는 과정을 즐기세요.
          </div>

          <button className="btn" onClick={() => navigate("/team")}>
            팀빌딩 하러가기
          </button>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 1260px;
  margin: 0 auto;

  .title {
    color: var(--Black, #222);
    font-family: "Noto Sans KR";
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 44.8px */
    letter-spacing: -0.8px;
    margin-bottom: 50px;
  }

  .content {
    margin-bottom: 100px;
  }

  .card-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
  }

  .card-list2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }

  .bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 160px;
    margin-bottom: 200px;

    .title {
      color: var(--Black, #222);
      text-align: center;
      font-family: "Noto Sans KR";
      font-size: 48px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%; /* 57.6px */
      margin-bottom: 40px;
    }

    .desc {
      color: var(--Light-black, #414141);
      text-align: center;
      font-family: "Noto Sans KR";
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 44.8px */
      margin-bottom: 60px;
    }

    .btn {
      width: 240px;
      display: flex;
      padding: 15px 30px 15px 29px;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      background: var(--Primary-color, #007bff);
      color: #fff;

      text-align: center;
      font-family: "Noto Sans KR";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 28px */
      border: none;
    }
  }
`;

const Banner = styled.div`
  background-color: #fefefe;
  margin-bottom: 60px;

  > div {
    width: 1260px;
    padding: 80px 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .banner-box {
    width: 600px;
  }

  img {
    width: 400px;
  }

  .title {
    color: var(--Black, #222);
    font-family: "Noto Sans KR";
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 67.2px */
    margin-bottom: 4px;
  }

  .desc {
    color: var(--Light-black, #414141);
    font-family: "Noto Sans KR";
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 36.4px */
    margin-bottom: 32px;
  }

  .btn {
    display: flex;
    padding: 15px 21px 15px 20px;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 15px;
    background: var(--Primary-color, #007bff);
    border: none;

    text-align: center;
    font-family: "Noto Sans KR";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
  }
`;

const Ad = styled.div`
  background-color: #f1faff;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1faff;
  padding: 60px 320px;
  gap: 26px;
  margin-bottom: 120px;

  .box {
    width: 480px;

    .tite {
      color: var(--Black, #222);
      font-family: "Noto Sans KR";
      font-size: 36px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 50.4px */
      margin-bottom: 20px;
    }

    .label {
      color: var(--Primary-color, #007bff);
      font-family: "Noto Sans KR";
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 28.8px */
    }
  }

  img {
    width: 344px;
    height: 344px;
  }
`;
