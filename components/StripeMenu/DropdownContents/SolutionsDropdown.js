import React from 'react'
import styled from 'styled-components'
import { Icon, DropdownSection, Heading } from './Components'

const ProductsDropdownEl = styled.div`
  width: 32rem;
`

const Logo = styled.div`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  border-radius: 100%;
  opacity: 0.6;
  background-color: ${({ color }) => `var(--${color})`};
`

const SubProductsList = styled.ul`
  li {
    display: flex;
    margin-bottom: 1rem;
  }
  h3 {
    margin-right: 1rem;
    width: 8rem;
    display: block;
  }
  a {
    color: var(--dark-grey);
  }
`

const ProductsSection = styled.ul`
  li {
    display: flex;
  }
`

const WorksWithStripe = styled.div`
 border-top: 2px solid #fff;
  display:flex;
  justify-content: center;
  align-items: center;
  margin-top: var(--spacer);
  padding-top: var(--spacer);
}
h3 {
  margin-bottom: 0;
}
`
const ProductsDropdown = () => {
  return (
    <ProductsDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ProductsSection>
          <li>
            <div>
              <Logo color='green' />
            </div>
            <div>
              <Heading color='green'>LDT Checking</Heading>
              <p>Earn above-market interest on your checking or savings account</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color='green' />
            </div>
            <div>
              <Heading color='green'>LDT Student Loan</Heading>
              <p>
                Interest earned can repay part of or all of your loans
              </p>
            </div>
          </li>
          <li>
            <div>
              <Logo color='green' />
            </div>
            <div>
              <Heading color='green'>LDT Home Ownership & Mortgage</Heading>
              <p>
                Build wealth in your home without straining your current income
              </p>
            </div>
          </li>
          <li>
            <div>
              <Logo color='green' />
            </div>
            <div>
              <Heading color='green'>LDT Retirement</Heading>
              <p style={{ marginBottom: 0 }}>
                Benefit from your hard work and make your money work for you
              </p>
            </div>
          </li>
        </ProductsSection>
      </DropdownSection>
      <DropdownSection>
        <SubProductsList>
          <li>
            <Heading noMarginBottom>Personal</Heading>
            <div>Your business data at your fingertips.</div>
          </li>
          <li>
            <Heading noMarginBottom>Business</Heading>
            <div>The best way to start an internet business.</div>
          </li>
          <li>
            <Heading noMarginBottom>Institution</Heading>
            <div>Fight fraud with machine learning.</div>
          </li>
          <li>
            <Heading noMarginBottom>Governments</Heading>
            <div>Fight fraud with machine learning.</div>
          </li>
          <li>
            <Heading noMarginBottom>ESG Impact</Heading>
            <div>Fight fraud with machine learning.</div>
          </li>
        </SubProductsList>
        <WorksWithStripe>
          <Heading noMarginBottom>
            <a href='/'>
              <Icon />OPEN AN ACCOUNT
            </a>
          </Heading>
        </WorksWithStripe>
      </DropdownSection>
    </ProductsDropdownEl>
  )
}

export default ProductsDropdown
