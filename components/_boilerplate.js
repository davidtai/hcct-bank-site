import {
  Grid,
  Typography,
} from '@material-ui/core'

import {
  makeStyles,
} from '@material-ui/core/styles'

import classnames from 'classnames'

import React from 'react'

const useStyles = makeStyles((theme) => ({
  stats: {
    paddingTop: '10vh',
    paddingBottom: '10vh',
  },
}))

export default ({ className, ...props }) => {
  const classes = useStyles()

  return (
    <Grid container className={classnames(className, classes.stats)} {...props}>
      <Grid item xs>
        <Typography variant='h2' color='textPrimary'>
          New Section
        </Typography>
      </Grid>
    </Grid>
  )
}
