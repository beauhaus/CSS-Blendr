import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../pages/page-b";
import UsrThumbnailCard from "./usrthumbnailcard";
import FileInputBtnContainer from "./fileinputbtncontainer";

const StyledUsrThumbnailsGrid = styled.div`
  background: #5d5f62;
  grid-row: 2/4;
  grid-column: 1/-1;
  position: relative;
  padding: 1vh 4vw;
  display: grid;
  grid-template-columns: repeat(3, 25vw);
  grid-template-rows: repeat(20, 25vw);
  grid-gap: 1rem;
  justify-content: space-around;
  overflow: scroll;
  position: relative;
`;

const UsrThumbnailsGrid = (props) => {
  const { usrImgMode, usrImgArray } = useContext(AppContext);
  return (
    <>
      {usrImgMode && (
        <StyledUsrThumbnailsGrid className="usr-thumbnails-grid">
          <FileInputBtnContainer />
          {usrImgArray.map((imgObj) => (
            <UsrThumbnailCard key={imgObj.id} imgObj={imgObj} />
          ))}
        </StyledUsrThumbnailsGrid>
      )}
    </>
  );
};

export default UsrThumbnailsGrid;
