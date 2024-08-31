import styled from "styled-components";

export const CircleProgressBar = ({ percent }: any) => {
  const radius = 27;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <CircleProgressWrapper>
      <ProgressRing>
        <CircleBackground cx="30" cy="30" r={radius} />
        <CircleProgress
          cx="30"
          cy="30"
          r={radius}
          circumference={circumference}
          offset={offset}
        />
      </ProgressRing>
      <PercentageText>{percent}%</PercentageText>
    </CircleProgressWrapper>
  );
};

const CircleProgressWrapper = styled.div`
  display: block;
  position: relative;
  width: 60px;
  height: 60px;
`;

const ProgressRing = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

const CircleBackground = styled.circle`
  fill: transparent;
  stroke: rgb(230, 230, 230);
  stroke-width: 3;
`;

const CircleProgress = styled.circle<any>`
  fill: transparent;
  stroke: #007bff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: ${(props) => props.circumference};
  stroke-dashoffset: ${(props) => props.offset};
  transition: stroke-dashoffset 0.5s ease;
`;

const PercentageText = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;

  color: var(--Primary-color, #007bff);
  text-align: center;
  font-family: "Noto Sans KR";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 19.2px */
`;
