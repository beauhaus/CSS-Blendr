import React from "react";
import styled from "styled-components";

const PageAWrapper = styled.div`
  /* TODO: this image doesn't 'contain' the panel */
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const PageA = (props) => {
  return (
    <PageAWrapper className="page-a-page-wrapper">
      <h1>PageA</h1>
    </PageAWrapper>
  );
};

export default PageA;
