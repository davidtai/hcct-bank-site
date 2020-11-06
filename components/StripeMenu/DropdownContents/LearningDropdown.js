import React from "react"
import styled from "styled-components"
import {
  Icon,
  DropdownSection,
  Heading,
  HeadingLink,
  LinkList
} from "./Components"

const DevelopersDropdownEl = styled.div`
  width: 25rem;
`

const Flex = styled.div`
  display: flex;
  > div:first-of-type {
    margin-right: 24px;
  }
`

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Heading>Teach Yourself</Heading>
          <p>Learn how LDT works for you</p>
          <Flex>
            <div>
              <h4>Get Started</h4>
              <LinkList>
                <li>
                  <a href="/">Company Leadership</a>
                </li>
                <li>
                  <a href="/">Planning For Retirement</a>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Popular Topics</h4>
              <LinkList>
                <li>
                  <a href="/">Security & Technology</a>
                </li>
                <li>
                  <a href="/">Earn Without Saving</a>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <HeadingLink>
            <a href="/">
              <Icon /> Video Gallery
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> Newsroom
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> FAQ
            </a>
          </HeadingLink>
          <HeadingLink>
            <a href="/">
              <Icon /> Careers
            </a>
          </HeadingLink>
        </ul>
      </DropdownSection>
    </DevelopersDropdownEl>
  )
}

export default DevelopersDropdown
