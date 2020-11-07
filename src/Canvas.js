import styled from 'styled-components/macro'
import React from 'react'
import emojiBody from './emoji-body.webp'

export default function Canvas({monster}) {
    const {size, numOfEyes, numOfLegs} = monster;
    const eyesArr = Array(numOfEyes).fill()
    const legsArr = Array(numOfLegs).fill()
    return (
        <CanvasStyled size={size} eyes={numOfEyes}>
            <div className="monster">
                <img src={emojiBody} alt=""/>
                <div className="eyes">
            { eyesArr.map((_, index) => <span key={index}>👁</span>) }
                </div>
                <div className="legs">
            { legsArr.map((_, index) => <span key={index}>🦵</span>) }
                </div>
            </div>
        </CanvasStyled>
    )
}

const CanvasStyled = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.monster {
margin-top: -20%;
text-align: center;
position: relative;

img {
    width: ${props => props.size * 50 + 10}px;
    height: ${props => props.size * 55 + 10}px;
    position: relative;
    z-index: 9;
}
div {
transform: scale(${props => props.size +1});
    display: inline-flex;
    position: absolute;
    left: 50%;
    font-size: ${props => props.size}rem;
}
.eyes {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    flex-wrap: wrap;
    width: 70%;
    z-index: 99;
    top: 12%;
    transform: translateX(-50%) ;
    span {
        height: ${props => props.size * 9}px;
    }
    span:first-child {
        width: ${props => props.eyes % 2 === 1 ? '100%' : 'auto'};  
    }
}

.legs {
        width: 80%;
        font-size: ${props => props.size * 2 }rem;
        z-index: 0;
        bottom: -25%;
        transform: translateX(-50%) ;
        display: flex;
        padding: 0  ${props => props.size * 5 }px;
        justify-content: space-around;
    span {
        display: flex;
        justify-content: center;
        width: ${props => props.size * 2}px;

    }
    span:nth-child(odd) {
        transform: rotateY(180deg)
    }
    span:last-child {
        transform: rotateY(0)
    }
}
}
`