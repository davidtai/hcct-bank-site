import React, { Component } from 'react'
import Navbar from './Navbar'
import NavbarItem from './Navbar/NavbarItem'
import { Flipper } from 'react-flip-toolkit'
import DropdownContainer from './DropdownContainer'
import SolutionsDropdown from './DropdownContents/SolutionsDropdown'
import CompanyDropdown from './DropdownContents/CompanyDropdown'
import LearningDropdown from './DropdownContents/LearningDropdown'
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: rgb(17, 34, 90);

  a {
    color: var(--green);
  }

  a:hover {
    color: var(--dark-green);
  }

  p {
    font-weight: 400;
    padding-left: 0;
    padding-right: 0;
  }
`
const navbarConfig = [
  { title: 'Our Solutions', dropdown: SolutionsDropdown },
  { title: 'Business Community', dropdown: CompanyDropdown },
  { title: 'Learning Center', dropdown: LearningDropdown }
]

export default class AnimatedNavbar extends Component {
  state = {
    activeIndices: []
  }

  resetDropdownState = i => {
    this.setState({
      activeIndices: typeof i === 'number' ? [i] : [],
      animatingOut: false
    })
    delete this.animatingOutTimeout
  }

  onMouseEnter = i => {
    if (this.animatingOutTimeout) {
      clearTimeout(this.animatingOutTimeout)
      this.resetDropdownState(i)
      return
    }
    if (this.state.activeIndices[this.state.activeIndices.length - 1] === i)
      return

    this.setState(prevState => ({
      activeIndices: prevState.activeIndices.concat(i),
      animatingOut: false
    }))
  }

  onMouseLeave = () => {
    this.setState({
      animatingOut: true
    })
    this.animatingOutTimeout = setTimeout(
      this.resetDropdownState,
      this.props.duration
    )
  }

  render() {
    const { duration } = this.props
    let CurrentDropdown
    let PrevDropdown
    let direction

    const currentIndex = this.state.activeIndices[
      this.state.activeIndices.length - 1
    ]
    const prevIndex =
      this.state.activeIndices.length > 1 &&
      this.state.activeIndices[this.state.activeIndices.length - 2]

    if (typeof currentIndex === 'number')
      CurrentDropdown = navbarConfig[currentIndex].dropdown
    if (typeof prevIndex === 'number') {
      PrevDropdown = navbarConfig[prevIndex].dropdown
      direction = currentIndex > prevIndex ? 'right' : 'left'
    }

    return (
      <AppContainer className='animated-nav-bar'>
        <Flipper
          flipKey={currentIndex}
          spring={duration === 300 ? 'noWobble' : { stiffness: 10, damping: 10 }}
        >
          <Navbar onMouseLeave={this.onMouseLeave}>
            {navbarConfig.map((n, index) => {
              return (
                <NavbarItem
                  key={n.title}
                  title={n.title}
                  index={index}
                  onMouseEnter={this.onMouseEnter}
                >
                  {currentIndex === index && (
                    <DropdownContainer
                      direction={direction}
                      animatingOut={this.state.animatingOut}
                      duration={duration}
                    >
                      <CurrentDropdown />
                      {PrevDropdown && <PrevDropdown />}
                    </DropdownContainer>
                  )}
                </NavbarItem>
              )
            })}
            <NavbarItem
              key={'faq'}
              title={'FAQ'}
              onMouseEnter={this.onMouseLeave}
            />
            <NavbarItem
              key={'open-account'}
              title={'Open Account'}
              onMouseEnter={this.onMouseLeave}
            />
          </Navbar>
        </Flipper>
      </AppContainer>
    )
  }
}
