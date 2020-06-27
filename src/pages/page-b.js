import React, { useState } from 'react';
import styled from 'styled-components';
import DecorFrame from '../components/test/refactor/decorframe'
import PanelBG from '../components/content/panelbg'
const PageBWrapper = styled.div`
  background: slategrey;
  border: 2px solid red;
  width: 100vw;
  height: 100vh;
  background: linear-gradient( 35deg, whitesmoke 0%, darkgrey 70%);
  display: grid;
  .add-btn,
  .alpha-btn {
    ${'' /* background: rgba(120, 71, 121, .5); */}
    border-radius: 4px;
    ${'' /* border: 1px solid #fff; */}
    ${'' /* position: relative; */}
    width: 100%;
    height: 100%;
    ${'' /* z-index: 5; */}
  }
  .add-btn {
    grid-column: 1;
    grid-row: 1;
    position: relative;
    z-index: 3;
  }
  .alpha-btn {
    grid-column: 3;
    grid-row: 1;
    position: relative;
    z-index: 3;
  }
  .frame-container {
    width: 90vw;
    height: 50vh;
    margin: 20vh auto;
    border-radius: 10px;
    position: relative;
  }

  .viewer-grid {
    background: pink;
    border-radius: 10px;

    overflow: hidden;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 8vh 42vh;

  }
  .img-pairs {
    position: absolute;
    ${'' /* display: none; */}
    border-radius: 11px;
    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: linear-gradient(135deg, steelblue 0%, PeachPuff 25%, PeachPuff 50%, LightSalmon 75%, steelblue 100%);
    ${'' /* display: none; */}
  }
  .tap-mode-btn {
    grid-row:1/-1;
    grid-column: 1/-1;
    background: transparent;
    position: relative;
    z-index: 2;
  }
  .alphaVal-display {
    width: 60%;
    height: 60%;
    ${'' /* margin: 10%; */}
    display: grid;
    position: absolute;
    z-index: 4;
    top: 20%;
    left: 20%;
    border: 1px dashed navy;
    p {
      border: 1px dashed yellow;
      margin: auto;
      text-align: center;
      color: #fff;
      width: 100%;
      font-weight: 100;
      height: auto;
      font-size: 12rem;
    }
  }
  .mode-name-display {
    position: absolute;
    bottom: 2vh;
    width: 50%;
    left: 25%;
    border: 1px solid #444;
    background: #222;
    color: #fff;
    font-weight: 100;
  }
  .cust-img-panel {
    grid-row: 1;
    grid-column: 1/-1;
    background: linear-gradient( 45deg, lightgrey 0%, whitesmoke 33%, #444 66%, #000 100%);
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    .upload-img-btn {
      grid-column: 2;

      background: brown;
      border-radius: 8px;
    }
    .paint-img-btn {
      grid-column: 3;
      background: peru;
      border-radius: 8px;
    }
  }
  .thumbnails-grid {
    grid-row: 2;
    grid-column: 1/-1;
    background: transparent;
    padding: 1vh 4vw;
    display: grid;
    ${'' /* display: none; */}
    grid-template-columns: repeat(3, 25vw);
    grid-template-rows: repeat(20, 25vw);
    grid-gap: 1rem;
    border: 1px solid #fff;
    ${'' /* grid-gap: 4px; */}
    justify-content: space-around;
    overflow: scroll;
    position: relative;
    ${'' /* z-index: 2; */}

    button.img-btn {
      background: coral;
      width: 100%;
      height: 100%;
      span{
        width: 100%;
        height: 100%;
      }
    }
  }
  .paint-widget {
    background: brown;
    grid-row: 2;
    grid-column: 1/-1;
    position: relative;
  }
`

const PageB = (props) => {
  const [tapMode, setTapMode] = useState(false)
  const [alphaModifyMode, setAlphaModifyMode] = useState(false)
  const [imageAddMode, setImageAddMode] = useState(false)
  const [paintMode, setPaintMode] = useState(false)
  const [uploadMode, setUploadMode] = useState(false)

  console.clear();
  const addBtnHandler = () => {
    console.log("addBtnHandler clicked!")
    setImageAddMode(!imageAddMode)
  }
 
  const alphaBtnHandler = () => {
    setAlphaModifyMode(!alphaModifyMode)
  }
  const bigBtnHandler = () => {
    setTapMode(!tapMode)
  }
  const imgClickHandler = (payload) => {
    console.log(payload)
  }
  const uploadImgBtnHandler = () => {
    setUploadMode(!uploadMode)
    setPaintMode(false)
  }
  const paintImgBtnHandler = () => {
    setPaintMode(!paintMode)
    setUploadMode(false);
  }
  return (
    <PageBWrapper className="page-b-wrapper">
            <PanelBG />

      <div className="frame-container">
        <DecorFrame />
        <div className="viewer-grid">
          {!imageAddMode && <div className="img-pairs"></div>}
          {tapMode && <button onClick={addBtnHandler} className="add-btn">add</button>}
          {(tapMode && !imageAddMode) && <button onClick={alphaBtnHandler} className="alpha-btn">alpha</button>}
          {imageAddMode && <div className="cust-img-panel">
            <button className="upload-img-btn" onClick={uploadImgBtnHandler}>upload</button>
            <button className="paint-img-btn" onClick={paintImgBtnHandler}>paint</button>
          </div>}
          {!imageAddMode && <button onClick={bigBtnHandler} className="tap-mode-btn">TAPMODE {tapMode ? "true" : "false"}</button>}
          {(alphaModifyMode && !imageAddMode) && <div className="alphaVal-display"><p>89%</p></div>}
          {(tapMode && !imageAddMode) && <h2 className="mode-name-display">Soft-light</h2>}
          {imageAddMode &&
            <section className="thumbnails-grid">
              {imageArray.map(item => <button className="img-btn" key={item.id} name={item.name} onClick={() => imgClickHandler(item.name)}><span>{item.name}</span></button>)}
            </section>
          }
          {uploadMode? console.log("upload true"): console.log("up false")}
          {(paintMode && !uploadMode) && <div className="paint-widget">PAINTING WIDGET</div>}
        </div>
      </div>
    </PageBWrapper>
  )
};


const imageArray = [
  { id: 101, name: "testImg1" },
  { id: 102, name: "testImg2" },
  { id: 103, name: "testImg3" },
  { id: 104, name: "testImg4" },
  { id: 105, name: "testImg5" },
  { id: 106, name: "testImg6" },
  { id: 107, name: "testImg7" },
  { id: 108, name: "testImg8" },
  { id: 109, name: "testImg9" },
  { id: 1010, name: "testImg10" },
  { id: 1011, name: "testImg11" },
  { id: 1012, name: "testImg12" },
  { id: 1013, name: "testImg13" },
  { id: 1014, name: "testImg14" }

]

export default PageB;
