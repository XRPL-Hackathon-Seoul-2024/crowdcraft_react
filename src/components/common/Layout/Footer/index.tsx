import styled from "styled-components";

import IconFacebook from "@/resources/common/facebook.svg?react";
import IconX from "@/resources/common/x.svg?react";
import IconNaver from "@/resources/common/naver.svg?react";
import IconInstagram from "@/resources/common/instagram.svg?react";

export const Footer = () => {
  return (
    <Container>
      <div className="left">
        <ul className="term-list">
          <li className="term">서비스 이용약관</li>
          <li className="term">개인정보 보호정책</li>
          <li className="term">자주하는 질문</li>
          <li className="term">고객지원</li>
        </ul>

        <div className="copyright">© 2024 CrowdCraft. 모든 권리 보유</div>
      </div>

      <ul className="icon-list">
        <li className="icon">
          <IconFacebook />
        </li>
        <li className="icon">
          <IconX />
        </li>
        <li className="icon">
          <IconNaver />
        </li>
        <li className="icon">
          <IconInstagram />
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  height: 96px;
  padding: 92px 280px;
  background: #2c3e50;

  .left {
    display: flex;
    flex-direction: column;
    gap: 48px;

    .term-list {
      display: flex;
      gap: 48px;

      .term {
        color: #fff;
        font-size: 16px;
        font-weight: 500;
      }
    }

    .copyright {
      color: #abbac9;
      font-size: 16px;
      font-weight: 500;
    }
  }

  .icon-list {
    display: flex;
    gap: 12px;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 36px;
      border-radius: 100px;
      background: #7c8792;
    }
  }
`;
