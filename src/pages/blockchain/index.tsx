import { Layout } from "@/components/common/Layout/indext";
import styled from "styled-components";

import Block from "@/resources/common/block.png";
import Illust1 from "@/resources/common/illust1.png";
import Illust2 from "@/resources/common/illust2.png";

export const BlockChainPage = () => {
  return (
    <Layout>
      <Container>
        <div className="content1">
          <div>
            <h1>
              안전하고 투명한
              <br />
              데이터관리의 혁명
            </h1>

            <img src={Block} />
          </div>
        </div>

        <div className="content2">
          <div>
            <h2 className="title">블록체인이란?</h2>

            <img src={Illust1} />

            <div className="desc">
              블록체인은 데이터를 <b>안전하게 저장</b>하고 <b>연결</b>하는 분산
              원장 기술입니다. <b>거래 기록</b>은 블록에 저장되고, 이 블록들은
              <b>체인</b>으로 연결되어 <b>변경이 불가능</b>합니다. 덕분에
              투자자들은 <b>투명하고 안전한 환경</b>에서 안심하고 투자를 진행할
              수 있습니다
            </div>
          </div>

          <div>
            <h2 className="title">스마트계약이란?</h2>

            <img src={Illust2} />

            <div className="desc">
              스마트 계약(Smart Contract)은 <b>블록체인 기반</b>으로
              <b>자동 실행되는 계약</b>입니다. <b>중개인 없이</b> 조건이
              충족되면 바로 실행되며, <b>모든 조건과 내역</b>이 투명하게
              기록됩니다.
            </div>
          </div>
        </div>

        <div className="content3">
          <div>
            <h3>스마트 계약의 장점</h3>

            <div className="box">
              <div className="box-num">1</div>
              <div className="box-content">
                <div className="title">보안성</div>
                <div className="desc">
                  블록체인의 암호화 기술을 이용하여 스마트 계약의 내용과 거래
                  내역이 안전하게 보호됩니다. 해킹이나 위조의 위험이 매우
                  낮습니다
                </div>
              </div>
            </div>

            <div className="box">
              <div className="box-num">2</div>
              <div className="box-content">
                <div className="title">비용절감</div>
                <div className="desc">
                  중개인이나 법적 절차에 의한 비용이 줄어듭니다. 계약의 자동
                  실행으로 인한 효율성 향상도 비용 절감에 기여합니다
                </div>
              </div>
            </div>

            <div className="box">
              <div className="box-num">3</div>
              <div className="box-content">
                <div className="title">투명성</div>
                <div className="desc">
                  스마트 계약의 조건과 실행 과정이 블록체인에 기록되어 누구나
                  확인할 수 있습니다. 이를 통해 당사자 간의 신뢰를 높일 수
                  있습니다
                </div>
              </div>
            </div>

            <div className="box">
              <div className="box-num">4</div>
              <div className="box-content">
                <div className="title">신속성</div>
                <div className="desc">
                  계약 조건이 충족되면 즉시 자동으로 실행되기 때문에, 계약 이행
                  과정이 빠르고 지연이 발생하지 않습니다
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  .content1 {
    background: #0a1424;

    > div {
      padding-top: 120px;
      padding-bottom: 80px;
      margin: 0 auto;
      width: 1100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 60px;

      h1 {
        color: #fff;

        font-family: "Noto Sans KR";
        font-size: 56px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 78.4px */
      }

      img {
        width: 600px;
      }
    }
  }

  .content2 {
    display: flex;
    flex-direction: column;
    gap: 120px;
    padding: 120px 0;

    width: 900px;
    margin: 0 auto;

    .title {
      margin-bottom: 20px;
      color: var(--Black, #222);
      font-family: "Noto Sans KR";
      font-size: 40px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%; /* 48px */
      letter-spacing: -1px;
    }

    .desc {
      margin-top: 10px;
      color: var(--Gray-600, #58626c);
      font-family: "Noto Sans KR";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 28px */
      letter-spacing: 0.6px;

      b {
        color: var(--Black, #222);
        font-weight: 700;
      }
    }
  }

  .content3 {
    background: #f4f9fe;

    > div {
      width: 900px;
      padding: 120px 0;
      margin: 0 auto;

      h3 {
        margin-bottom: 60px;
        color: var(--Black, #222);
        font-family: "Noto Sans KR";
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: 120%; /* 48px */
        letter-spacing: -1px;
      }

      .box {
        display: flex;
        gap: 12px;
        margin-bottom: 40px;

        .box-num {
          box-sizing: border-box;
          width: 36px;
          height: 30px;
          display: flex;
          padding: 5px 10px 7px 9px;
          justify-content: center;
          align-items: center;
          border-radius: 5px;
          background: var(--Primary-color, #007bff);
          color: #f2f8ff;

          text-align: center;
          font-family: "Noto Sans KR";
          font-size: 18px;
          font-style: normal;
          font-weight: 600;
          line-height: 100%; /* 18px */
        }
      }

      .box-content {
        display: flex;
        flex-direction: column;
        gap: 12px;

        .title {
          color: var(--Black, #222);
          font-family: "Noto Sans KR";
          font-size: 26px;
          font-style: normal;
          font-weight: 500;
          line-height: 120%; /* 31.2px */
        }

        .desc {
          color: var(--Gray-500, #68747f);
          font-family: "Noto Sans KR";
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%; /* 28px */
        }
      }
    }
  }
`;
