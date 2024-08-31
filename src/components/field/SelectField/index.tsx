import Select from "react-select";
import styled from "styled-components";

const SelectField = ({ label, value, onChange, options }: any) => {
  return (
    <Container>
      <label>{label}</label>

      <Select
        value={value}
        options={options}
        onChange={onChange}
        styles={customStyles}
        placeholder=""
      />
    </Container>
  );
};

export default SelectField;

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
`;

const customStyles = {
  control: (provided: any) => ({
    ...provided,
    boxSizing: "border-box",
    height: "60px",
    borderRadius: "5px",
    border: "1px solid var(--Gray-200, #abbac9)",
    fontFamily: '"Noto Sans KR"',
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "140%",
    padding: "0 8px",
  }),
  input: (provided: any) => ({
    ...provided,
    padding: "0", // input 내부 padding을 제거하여 control의 padding과 일치시킵니다.
    margin: "0", // input의 기본 margin을 제거하여 control의 높이와 일치시킵니다.
  }),
  placeholder: (provided: any) => ({
    ...provided,
    fontFamily: '"Noto Sans KR"',
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "140%",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    fontFamily: '"Noto Sans KR"',
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "140%",
  }),
};
