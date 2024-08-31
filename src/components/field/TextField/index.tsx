import styled from "styled-components";

const TextField = ({
  label,
  value,
  onChange,
  useTextarea,
  usenumber = false,
}: any) => {
  return (
    <Container>
      <label>{label}</label>

      {useTextarea ? (
        <textarea value={value} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={usenumber ? "number" : "text"}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  label {
    color: var(--Black, #222);
    font-family: "Noto Sans KR";
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 28px */
    letter-spacing: -0.5px;
    margin-bottom: 12px;
  }

  input {
    box-sizing: border-box;
    height: 60px;
    border-radius: 5px;
    border: 1px solid var(--Gray-200, #abbac9);

    /* color: var(--Gray-200, #abbac9); */
    font-family: "Noto Sans KR";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 25.2px */
    padding: 20px 15px;
  }

  textarea {
    box-sizing: border-box;
    min-height: 60px;
    border-radius: 5px;
    border: 1px solid var(--Gray-200, #abbac9);

    /* color: var(--Gray-200, #abbac9); */
    font-family: "Noto Sans KR";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; /* 25.2px */
    padding: 20px 15px;
  }
`;

export default TextField;
