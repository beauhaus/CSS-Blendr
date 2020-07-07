import React,{useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from '../../../pages/page-b'
import ImgMenuNavBG from './icon-components/customnavbg'

import FileInputBtnContainer from './fileinputbtncontainer'
import PaintBtn from './paintbtn'
import DefaultGridBtn from './defaultgridbtn'

const StyledImageMenuNav = styled.nav`
    grid-row: 1;
    grid-column: 1/-1;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 5px 5px -5px #000;
    &>button {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            width: 7vh;
            height: 7vh;
            border-radius: 7px;
            border: .5px solid #beecff;

        }
    }
    &>form {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
            width: 7vh;
            height: 7vh;
            border: .5px solid #beecff;
            border-radius: 7px;
        }
    }

    .img-file-form {
        position: relative;
        z-index: 3;
        border-radius: 4px;
        height: 100%;
        background: transparent;
        border-radius: 8px;
        input {
            display: none;
        }
    }
`
const ImageMenuNav = () => {
    const {
        addImageMode
    } = useContext(AppContext);
    return (
        <StyledImageMenuNav className="img-menu-panel">
                <ImgMenuNavBG/>
                <DefaultGridBtn/>
                <FileInputBtnContainer/>
                <PaintBtn/>
        </StyledImageMenuNav>
    )
}

export default ImageMenuNav;
