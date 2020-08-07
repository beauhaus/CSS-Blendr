import React from "react";
import styled from "styled-components";

import UsrImgThumb from "./usrimagethumb";

const StyledUsrThumbnailCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const UsrThumbnailCard = ({ imgObj }) => {
  return (
    <StyledUsrThumbnailCard className="usr-thumbnail-card">
      <UsrImgThumb imgObj={imgObj} />
    </StyledUsrThumbnailCard>
  );
};

export default UsrThumbnailCard;
