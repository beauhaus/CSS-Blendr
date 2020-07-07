import React, { useContext } from 'react';
import styled from 'styled-components';
import {AppContext} from '../../../pages/page-b'
import UsrImgThumb from './usrimagethumb'

const StyledUsrThumbnailCard = styled.div`
position: relative;
border: 1px solid orange;
`

const UsrThumbnailCard = ({imgObj}) => {
    const {
        addBtnHandler,
    } = useContext(AppContext);

    return (
        <StyledUsrThumbnailCard className="usr-thumbnail-card">
            <UsrImgThumb imgObj={imgObj} />
        </StyledUsrThumbnailCard>
    )
};

export default UsrThumbnailCard; 




