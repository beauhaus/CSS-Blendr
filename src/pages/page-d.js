import React, { createContext, useState, useEffect } from 'react';
import styled from 'styled-components';
// import PicsTester from '../components/test/picstestbackup'
import useGalleryImages from '../components/hooks/use-gallery-images'


export const BlendrDataContext = createContext();
const PageDWrapper = styled.div`
box-shadow: inset 0 0 0 4px slategrey;
background: slategrey;
border: 2px solid red;
width: 100vw;
height: 200vh;
`

const PageD = () => {
  const nativeGalleryImages = useGalleryImages();
  const [combinedImageArray, setCombinedImageArray] = useState([])
  const [defaultImages, setDefaultImages] = useState([])
  useEffect(() => {
    setDefaultImages(nativeGalleryImages)
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <BlendrDataContext.Provider
      value={{
        defaultImages,
        combinedImageArray,
        setCombinedImageArray
      }}>
      <PageDWrapper className="page-d-wrapper">
        {/* <PicsTester /> */}
      </PageDWrapper>
    </BlendrDataContext.Provider>
  )
};

export default PageD;
