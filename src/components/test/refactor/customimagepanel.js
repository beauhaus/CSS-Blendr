import React,{useContext} from 'react'
import styled from 'styled-components'
import { AppContext } from '../../../pages/page-b'
// import UploadBtn from './uploadbtn'
import FileInputBtnContainer from './fileinputbtncontainer'
import PaintBtn from './paintbtn'
import GridBtn from './gridbtn'

const StyledCustomImagePanel = styled.div`
    grid-row: 1;
    grid-column: 1/-1;
    background: linear-gradient( 45deg, lightgrey 0%, whitesmoke 33%, #444 66%, #000 100%);
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    box-shadow: 0 5px 5px -5px #000;
`
const CustomImagePanel = () => {
    const {
        addImageMode
    } = useContext(AppContext);
    return (
        <>
            {addImageMode && <StyledCustomImagePanel className="cust-img-panel">
                <GridBtn/>
                {/* <UploadBtn/> */}
                <FileInputBtnContainer/>
                <PaintBtn/>
            </StyledCustomImagePanel>}
        </>
    )
}

export default CustomImagePanel;
