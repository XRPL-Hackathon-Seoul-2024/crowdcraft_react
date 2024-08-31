import styled from "styled-components";
import IconF from "@/resources/common/favorite.svg?react";
import IconC from "@/resources/common/comment.svg?react";

export const TeamCard = ({
  date,
  title,
  tags,
  favoriteCnt,
  commnetCnt,
}: any) => {
  return (
    <Container>
      <div className="c-date">{date}</div>

      <div className="c-title">{title}</div>

      <ul className="c-tag-list">
        {tags.map((tag: any, idx: number) => (
          <li className="c-tag" key={idx}>
            {tag}
          </li>
        ))}
      </ul>

      <div className="c-footer">
        <div>
          <IconF />
          {favoriteCnt}
        </div>
        <div>
          <IconC />
          {commnetCnt}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
  background: #fff;
  padding: 20px;

  box-shadow: 1px 3px 10px 0px rgba(0, 0, 0, 0.1);

  .c-date {
    color: var(--Gray-400, #7c8792);
    font-family: "Noto Sans KR";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .c-title {
    overflow: hidden;
    color: #4d4d4d;

    font-family: "Noto Sans KR";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .c-tag-list {
    display: flex;
    gap: 6px;

    li {
      display: flex;
      padding: 2px 10px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 100px;
      background: #e0efff;
      color: var(--Primary-color, #007bff);
      text-align: center;
      font-family: "Noto Sans KR";
      font-size: 13px;
      font-style: normal;
      font-weight: 600;
      line-height: 140%; /* 18.2px */
    }
  }

  .c-footer {
    display: flex;
    justify-content: end;
    color: #939393;
    gap: 18px;

    > div {
      display: flex;
      align-items: center;
      gap: 8px;

      font-family: "Noto Sans KR";
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;
