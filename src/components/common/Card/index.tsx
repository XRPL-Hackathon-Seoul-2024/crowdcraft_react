import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CircleProgressBar } from "../Progress";

export const Card = ({ title, volume, percent, src, text }: any) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/project/${title}`)}>
      <img src={src} />

      {text && <div className="text">{text}</div>}

      {title && percent && (
        <div className="box">
          <div className="box-title">{title}</div>
          <CircleProgressBar percent={percent} /> {/* 예시: 75% */}
        </div>
      )}

      {volume && (
        <div className="box2">
          <div className="box2-label">현재 모금된 XRP</div>
          <div className="box2-value">{volume}</div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .text {
    overflow: hidden;
    color: var(--Light-black, #414141);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: "Noto Sans KR";
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 39.2px */
    letter-spacing: -0.42px;
  }

  .box {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;

    .box-title {
      flex: 1;
      overflow: hidden;
      color: var(--Light-black, #414141);
      text-overflow: ellipsis;
      font-family: "Noto Sans KR";
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 28px */
      letter-spacing: -0.3px;
    }

    .box-percent {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 58px;
      height: 58px;
      border: 3px solid #007bff;
      border-radius: 50%;

      color: var(--Primary-color, #007bff);
      text-align: center;
      font-family: "Noto Sans KR";
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 19.2px */
    }
  }

  .box2 {
    display: flex;
    align-items: end;
    gap: 8px;

    .box2-label {
      color: var(--Gray-500, #68747f);
      font-family: "Noto Sans KR";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%; /* 19.2px */
    }

    .box2-value {
      color: var(--Black, #222);
      font-family: "Noto Sans KR";
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 120%; /* 24px */
    }
  }
`;
