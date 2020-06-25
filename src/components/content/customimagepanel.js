import React from 'react';
import styled from 'styled-components'
import CustomPanelBG from '../util-icons/custompanelbg'
import ImageAddIcon from '../util-icons/imageaddicon'

const CustomImagePanelWrap = styled.section`
        width: 100%;
        height: 12vh;
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        .add-img-btn {
          grid-column: 2;
          width: 10vh;
          height: 10vh;
          border-radius: 12px;
          border: 1px solid #beecff;
          position: relative;
          padding: 0;
          overflow: hidden;
          box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.5);
          margin: auto;
          .test-icon {
            grid-column: 3;
            border: 1px solid coral;
            position: relative;
          }
        }
`;
const CustomImagePanel = () => {
  return (
    <CustomImagePanelWrap className="custom-img-panel">
        <CustomPanelBG/>
        <button className="add-img-btn"><ImageAddIcon/></button>
        <div className="test-icon">ICON2</div>
    </CustomImagePanelWrap>
  )
}

export default CustomImagePanel;