import React from 'react'
import styled from 'styled-components'
// import ImgUploadIcon from './'

const StyledFileInputBtn = styled.button`
            ${'' /* border: 1px solid fuchsia; */}
            height: 100%;
            svg {
                width: 7vh;
                height: 7vh;
            }
        
`

const FileInputBtn = ({ fileInput }) => {
    return (
        <StyledFileInputBtn className="select-img-btn" type="button" onClick={() => fileInput.current.click()}>
        </StyledFileInputBtn>
    )
}

export default FileInputBtn;
            // <svg xmlns="http://www.w3.org/2000/svg" overflow="visible" viewBox="0 0 300 300">
            //     <filter id="plus-shad">
            //         <feGaussianBlur stdDeviation="4"></feGaussianBlur>
            //     </filter>
            //     <path fill="#828282" d="M229.48 302.5H28.68C12.84 302.5 0 289.66 0 273.82V73.02c0-15.84 12.84-28.68 28.68-28.68h200.79c15.84 0 28.68 12.84 28.68 28.68v200.79c.01 15.85-12.83 28.69-28.67 28.69z" />
            //     <path filter="url(#plus-shad)" stroke="#000" strokeWidth="5" d="M295.81 91H236V31.19c0-7.56-6.13-13.69-13.69-13.69H179.7c-7.56 0-13.69 6.13-13.69 13.69V91H106.2c-7.56 0-13.69 6.13-13.69 13.69v42.61c0 7.56 6.13 13.69 13.69 13.69H166v59.81c0 7.56 6.13 13.69 13.69 13.69h42.61c7.56 0 13.69-6.13 13.69-13.69V161h59.81c7.56 0 13.69-6.13 13.69-13.69V104.7c.01-7.57-6.12-13.7-13.68-13.7z" />
            //     <path fill="#fff" stroke="#4d4d4d" strokeWidth="5" d="M285.81 76H226V16.19c0-7.56-6.13-13.69-13.69-13.69H169.7c-7.57 0-13.7 6.13-13.7 13.69V76H96.19c-7.56 0-13.69 6.13-13.69 13.69v42.61c0 7.56 6.13 13.69 13.69 13.69H156v59.81c0 7.56 6.13 13.69 13.69 13.69h42.61c7.56 0 13.69-6.13 13.69-13.69V146h59.81c7.56 0 13.69-6.13 13.69-13.69V89.69c.01-7.56-6.12-13.69-13.68-13.69z" />
            // </svg>