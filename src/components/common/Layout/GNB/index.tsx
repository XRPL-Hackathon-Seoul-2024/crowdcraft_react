import styled from "styled-components";
import { Link } from "react-router-dom";

import IconLogo from "@/resources/common/logo.svg?react";
import WalletConnect from "../../WalletConnect";

export const GNB = () => {
  return (
    <Container>
      <Link to="/">
        <IconLogo />
      </Link>

      <ul>
        <li>
          <Link to="/explore">프로젝트 탐색</Link>
        </li>
        <li>
          <Link to="/team">팀 빌딩</Link>
        </li>
        <li>
          <Link to="/blockchain">서비스 소개</Link>
        </li>
        {/* <li>
          <Link to="/form/team">temp 팀원모집</Link>
        </li>
        <li>
          <Link to="/form/project">temp 프로젝트모집</Link>
        </li>
        <li>
          <Link to="/project/1"> 프로젝트상세(update)</Link>
        </li> */}
      </ul>

      <div>
        <WalletConnect onConnectionChange={() => {}} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 90px;
  height: 100px;

  ul {
    display: flex;
    gap: 46px;

    a {
      color: #4d4d4d;
      text-align: center;
      font-family: "Noto Sans KR";
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      text-decoration: none;
    }
  }
`;
