import React from "react";
import styled from "styled-components";
import UploadIcon from "./icon-components/imguploadicon";

const StyledFileInputBtn = styled.button`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const FileInputBtn = ({ fileInput }) => {
  return (
    <StyledFileInputBtn
      className="user-image-upload-btn"
      type="button"
      onClick={() => fileInput.current.click()}
    >
      <UploadIcon />
    </StyledFileInputBtn>
  );
};

export default FileInputBtn;
