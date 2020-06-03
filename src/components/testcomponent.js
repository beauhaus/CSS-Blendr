import React, { useContext } from 'react';
import styled from 'styled-components'
import { ModeContext } from '../pages/page-a'
import Rose from '../../images/gallery-images/rose.jpg'

const TestComponentWrapper = styled.div`
   width: 80%;
   height: 80%;
    ${'' /* #BG {
        fill: #ddc4a5;
    } */}
    svg {
        text {
            font-size:3rem;
        }

    }
`
// http://localhost:8000/images/gallery-images/rose.jpg

const TestComponent = () => {
    const { selTop } = useContext(ModeContext);

    return (
        <TestComponentWrapper>
            
                <svg className="bot-img" x="0" y="0" viewBox="0 0 700 500" >
                    <image
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        xlinkHref={selTop.url}
                    />
                    <text x="150" y="150" fill="red">{selTop.name}</text>
                </svg>)


        </TestComponentWrapper>)
}

export default TestComponent;
