import React, {useContext} from 'react'
import styled from 'styled-components'
import ImgUploadIcon from './icon-components/imguploadicon'
import { AppContext } from '../../../pages/page-b'
import UsrImgGridIcon from './icon-components/usrimggridicon'

const StyledFileInputBtn = styled.button`
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 3;
`

const FileInputBtn = ({fileInput}) => {
    const {
        setPaintMode,
        setUsrImgMode,
        setGridMode,
        usrImgMode
    } = useContext(AppContext);

    const usrImgBtnClickHandler = () => {
            setPaintMode(false)
            setUsrImgMode(true)
            setGridMode(false)
    }


    // <StyledFileInputBtn  type="button" onClick={usrImgMode ? () => fileInput.current.click(): usrImgBtnClickHandler}>
    /* TODO: ternary below will (eventually) switchout button icons */
    return (
        <StyledFileInputBtn className="user-image-grid-btn" type="button" onClick={usrImgBtnClickHandler}>
            <UsrImgGridIcon/>
        </StyledFileInputBtn>
    )
}

export default FileInputBtn;