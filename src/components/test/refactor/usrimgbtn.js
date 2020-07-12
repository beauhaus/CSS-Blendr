import React, {useContext} from 'react'
import styled from 'styled-components'
import ImgUploadIcon from './icon-components/imguploadicon'
import { AppContext } from '../../../pages/page-b'

const StyledFileInputBtn = styled.button`
    height: 100%;
    width: 100%;
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


    /* TODO: ternary below will (eventually) switchout button icons */
    return (
        <StyledFileInputBtn className="select-img-btn" type="button" onClick={usrImgMode ? () => fileInput.current.click(): usrImgBtnClickHandler}>
            <ImgUploadIcon toggle={usrImgMode} />
        </StyledFileInputBtn>
    )
}

export default FileInputBtn;