import React from 'react';
import styled from 'styled-components'
import CustomPanelBG from '../util-icons/custompanelbg'
import ImageAddIcon from '../util-icons/imageaddicon'
import PaintIcon from '../util-icons/painticon'

const CustomImagePanelWrap = styled.section`
        width: 100%;
        height: 12vh;
        position: absolute;
        top: 0;
        left: 0;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        .cust-img-container-ctr {
          grid-column: 2;
          width: 100%;
          height: 100%;
          button {
            border-radius: 12px;
            border: 1px solid #beecff;
            position: relative;
            box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.5);
            width: 10vh;
            height: 10vh;
            margin: 1vh auto;
            overflow: hidden;
          }
        }
        .cust-img-container-rt {
          grid-column: 3;
          width: 100%;
          height: 100%;
          button {
            border-radius: 12px;
            border: 1px solid #beecff;
            position: relative;
            box-shadow: 1px 1px 2px 0px rgba(0,0,0,0.5);
            width: 10vh;
            height: 10vh;
            margin: 1vh auto;
            overflow: hidden;
          }
        }
`;
const CustomImagePanel = () => {
  return (
    <CustomImagePanelWrap className="custom-img-panel">
        <CustomPanelBG/>
        <div className="cust-img-container-ctr">
        <button ><ImageAddIcon/></button>
        </div>
        <div className="cust-img-container-rt">
        <button ><PaintIcon/></button>
        </div>
    </CustomImagePanelWrap>
  )
}

export default CustomImagePanel;