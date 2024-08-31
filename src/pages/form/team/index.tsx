import { Layout } from "@/components/common/Layout/indext";
import styled from "styled-components";

export const TeamFormPage = () => {
  return (
    <Layout>
      <Container>
        <h1>팀원 모집</h1>

        <div className="button-wrapper">
          <button>등록하기</button>
        </div>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  width: 600px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 100px;

  h1 {
    color: var(--Black, #222);
    font-family: "Noto Sans KR";
    font-size: 42px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%; /* 50.4px */
    letter-spacing: -1.05px;
    margin-bottom: 20px;
  }

  .button-wrapper {
    display: flex;
    justify-content: end;

    button {
      box-sizing: content-box;
      display: flex;
      justify-content: center;
      align-items: center;

      height: 22px;
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
`;
