import {
  Container,
  Grid,
  ThemeProvider,
  Typography,

  makeStyles,
} from '@material-ui/core'

import { useEffect, useState } from 'react'

import QuoteForm from '../components/QuoteForm'

import darkTheme from '../src/theme/dark'

import HeroBGImg from '../assets/bg1.jpg'

const useStyles = makeStyles((theme) => ({
  quote: {
    backgroundImage: `url(${HeroBGImg})`,
    backgroundPosition: '35% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',

    '& [aria-label="Select country"]': {
      display: 'none',
    },
  },
}))

const Quote = ({ showMenu }) => {
  const classes = useStyles()

  useEffect(() => {
    showMenu()
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.quote}>
        <Container maxWidth='sm'>
          <QuoteForm/>
        </Container>
      </div>
    </ThemeProvider>
  )
}

export default Quote
