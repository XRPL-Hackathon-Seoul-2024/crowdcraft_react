import SelectField from "@/components/field/SelectField";
import TextField from "@/components/field//TextField";
import { Layout } from "@/components/common/Layout/indext";
import styled from "styled-components";
import { useController, useForm } from "react-hook-form";
import ImageField from "@/components/field/ImageField";

const options = [
  { value: "art", label: "예술" },
  { value: "music", label: "음악" },
  { value: "movie", label: "영화" },
  { value: "picture", label: "사진" },
  { value: "social", label: "소셜" },
  { value: "design", label: "디자인" },
  { value: "building", label: "건축" },
  { value: "game", label: "게임" },
  { value: "dance", label: "댄스" },
  { value: "cook", label: "요리" },
  { value: "beauty", label: "뷰티" },
  { value: "fashion", label: "패션" },
];

export const ProjectFormPage = () => {
  const { control } = useForm({
    defaultValues: {
      name: "",
      desc: "",
      type: "",
      amount: "",
      image: null,
    },
  });

  const { field: nameF } = useController({
    name: "name",
    control,
  });

  const { field: descF } = useController({
    name: "desc",
    control,
  });

  const { field: typeF } = useController({
    name: "type",
    control,
  });

  const { field: amountF } = useController({
    name: "amount",
    control,
  });

  const { field: imageF } = useController({
    name: "image",
    control,
  });

  return (
    <Layout>
      <Container>
        <h1>프로젝트 등록</h1>
        <div className="desc">
          아래의 양식을 작성하여 프로젝트를 등록해주세요
        </div>

        <div className="button-wrapper">
          <button>등록하기</button>
        </div>

        <TextField
          label={"프로젝트 이름"}
          value={nameF.value}
          onChange={(v: any) => {
            nameF.onChange(v);
          }}
        />

        <TextField
          label={"프로젝트 상세설명"}
          value={descF.value}
          onChange={(v: any) => {
            descF.onChange(v);
          }}
          useTextarea
        />

        <SelectField
          label={"프로젝트 카테고리"}
          value={typeF.value}
          onChange={(v: any) => {
            typeF.onChange(v);
          }}
          options={options}
        />

        <ImageField
          label={"이미지"}
          value={imageF.value}
          onChange={(v: any) => {
            imageF.onChange(v);
          }}
        />

        <TextField
          label={"목표금액"}
          value={amountF.value}
          onChange={(v: any) => {
            amountF.onChange(v);
          }}
          usenumber
        />

        {/* 마감일 */}
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

  .desc {
    color: var(--Primary-color, #007bff);
    font-family: "Noto Sans KR";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 24px */
    letter-spacing: -0.5px;
    margin-bottom: 60px;
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
