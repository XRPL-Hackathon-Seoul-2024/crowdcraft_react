import ImageUploading from "react-images-uploading";
import styled from "styled-components";

const ImageField = ({ label, value, onChange }: any) => {
  const handleChange = (imageList: any) => {
    onChange(imageList[0]);
  };

  return (
    <Container>
      <ImageUploading
        value={value ? value[0] : null}
        onChange={handleChange}
        maxNumber={1}
        dataURLKey="data_url"
        acceptType={["jpg"]}
      >
        {({ onImageUpload, dragProps }) => (
          <Field>
            <div className="label">
              <label>{label}</label>
              <button onClick={onImageUpload} {...dragProps}>
                이미지 업로드
              </button>
            </div>

            <div className="image-list">
              {value && (
                <div className="image-item">
                  <img src={value.data_url} alt="" width="100" />
                </div>
              )}
            </div>
          </Field>
        )}
      </ImageUploading>
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
`;

const Field = styled.div`
  .label {
    display: flex;
    justify-content: space-between;
    overflow: auto;

    button {
      height: 40px;
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

  .image-list {
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }
`;

export default ImageField;
