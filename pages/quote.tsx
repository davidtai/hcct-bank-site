import {
  Container,
  Grid,
  Typography,

  makeStyles,
} from '@material-ui/core'

import { useEffect, useState } from 'react'

import QuoteForm from '../components/QuoteForm'

const useStyles = makeStyles((theme) => ({
  quote: {
    backgroundColor: '#0b3283',

    minHeight: '100vh',

    '& .MuiPhoneNumber-flagButton': {
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
    <div className={classes.quote}>
      <Container maxWidth='sm'>
        <QuoteForm/>
      </Container>
    </div>
  )
}

export default Quote
