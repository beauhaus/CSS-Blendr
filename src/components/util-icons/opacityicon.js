import React from 'react'
import styled from 'styled-components'

const StyledOpacityIcon = styled.svg`
    opacity: 1;
`

const OpacityIcon = () => (
    <StyledOpacityIcon className="img-viewer-icon" viewBox="0 0 300 300" width="100%" height="100%">
                <path fill="#828282" d="M200 225H25c-13.81 0-25-11.19-25-25V25C0 11.19 11.19 0 25 0h175c13.81 0 25 11.19 25 25v175c0 13.81-11.19 25-25 25z" />
                <path d="M275 300H100c-13.81 0-25-11.19-25-25V100c0-13.81 11.19-25 25-25h175c13.81 0 25 11.19 25 25v175c0 13.81-11.19 25-25 25z" fill="#fff" />
                <path d="M75 100h150V75H100c-13.81 0-25 11.19-25 25z" fill="#fff" />
                <path d="M75 100h150v25H75z" fill="4f4f4f" />
                <path d="M75 125h150v25H75z" fill="#fff" />
                <path d="M75 150h150v25H75z" fill="4f4f4f" />
                <path d="M75 175h150v25H75z" fill="#fff" />
                <path d="M75 225h125c13.81 0 25-11.19 25-25H75v25z" fill="4f4f4f" />
    </StyledOpacityIcon>
)

export default OpacityIcon;