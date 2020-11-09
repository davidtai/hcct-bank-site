import {
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'

import React, { useEffect, useState } from 'react'

import handleViewport from 'react-in-viewport'

import { Transition } from 'react-transition-group';

const DEFAULT_DURATION = 800;

const defaultStyle = (duration: number) => {
  return {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration*1.5}ms ease-in-out`,
    opacity: 0,
  }
}

const transitionStyles = (direction: string) =>{
  let x = 0
  let y = 0
  switch (direction) {
    case 'up':
      y = 10
      break;
    case 'down':
      y = -10
      break;
    case 'left':
      x = 10
      break;
    case 'right':
      x = -10
      break;
  }

  return {
    entering: {
      opacity: 1,
      transform: `translate(0, 0)`,
    },
    entered:  {
      opacity: 1,
      transform: `translate(0, 0)`,
    },
    exiting:  {
      opacity: 0,
      transform: `translate(${x}px, ${y}px)`,
    },
    exited:  {
      opacity: 0,
      transform: `translate(${x}px, ${y}px)`,
    },
  }
}

const InViewport = handleViewport(({
  inViewport,
  forwardedRef,
  onEnter,
  // onExit,
  children,
  ...props
}) => {

  useEffect(() => {
    if (inViewport) {
      onEnter()
    } else {
      // onExit()
    }
  })

  return (
    <div ref={forwardedRef}>
      {children}
    </div>
  )
})

const FadeSlide = ({ children, ...props }) => {
  const {
    direction,
    duration,
  } = props

  const [isIn, setIsIn] = useState(props.in)

  let overWritten = props.in

  if (overWritten !== true && overWritten !== false) {
    overWritten = isIn
  }

  return (
    <div {...props}>
      <InViewport onEnter={() => {
        setIsIn(true)
      }}>
        <Transition in={overWritten} timeout={duration ?? DEFAULT_DURATION}>
          {state => (
            <div style={{
              ...defaultStyle(duration ?? DEFAULT_DURATION),
              ...transitionStyles(direction)[state]
            }}>
              { children }
            </div>
          )}
        </Transition>
      </InViewport>
    </div>
  )
}

export default FadeSlide
