import React         from 'react'
import styled        from '@emotion/styled'
import { keyframes } from '@emotion/core'

const bulge = keyframes`
50% {
    transform: scale(1.05);
  }
`

const blink = keyframes`
50% {
    opacity: 1;
  }
`

const BubblingStyled = styled.div`
  background-color: #e6e7ed;
  will-change: transform;
  width: auto;
  border-radius: 50px;
  padding: 9px;
  display: table;
  margin: 0 auto;
  position: relative;
  animation: 2s ${bulge} infinite ease-out;
`
const BubblingItems = styled.span`
  height: 10px;
  width: 10px;
  float: left;
  margin: 0 1px;
  background-color: #9e9ea1;
  display: block;
  border-radius: 50%;
  opacity: 0.4;
  :nth-of-type(1) {
    animation: 1s ${blink} infinite 0.3333s;
  }
  :nth-of-type(2) {
    animation: 1s ${blink} infinite 0.6666s;
  }
  :nth-of-type(3) {
    animation: 1s ${blink} infinite 0.9999s;
  }
`

export const Bubbling = () => (
  <BubblingStyled>
    <BubblingItems />
    <BubblingItems />
    <BubblingItems />
  </BubblingStyled>
)
