import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from '@material-ui/core'

import {
  makeStyles,
  useTheme,
} from '@material-ui/core/styles'

import classnames from 'classnames'

import React from 'react'

const useStyles = makeStyles((theme) => ({
  body: {
    width: '100vw',
    minHeight: '120vh',
    height: 800,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#128379 !important',
    backgroundPosition: 'center 30%',

    [theme.breakpoints.up('lg')]: {
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    },

    [theme.breakpoints.down('md')]: {
      height: 'initial',
    },
  },
  container: {
    height: '100%',
  },
  grid: {
    height: '100%',
  },
  img: {
    width: '100%',
    display: 'block',
  },
  title: {
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    color: '#000',
    textAlign: 'center',

    '& > *': {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
  mediumContent: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

export default ({
  title,
  description,
  isRight,
  background,
  ...props
}) => {
  const classes = useStyles()

  const theme = useTheme()

  const isBelowMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <div
      className={classes.body}
      style={{
        backgroundImage: isBelowMD ? 'none' : `url(${background})`,
      }}
    >
      <Grid
        container
        alignItems='center'
        className={classes.grid}
      >
        {
          isBelowMD && <Grid item xs={12}>
            <img className={classes.img} src={background} alt={title}/>
          </Grid>
        }
        <Grid item xs={12}>
          <Container
            maxWidth='lg'
            className={classes.container}
          >
            <Grid
              container
              alignItems='center'
              className={classes.grid}
              spacing={4}
            >
              { isBelowMD
                ? (
                  <Grid item xs={12}>
                    <div className={classes.mediumContent}>
                      <Typography variant='h2' className={classes.title}>
                        <strong>{ title }</strong>
                      </Typography>
                      <br/>
                      { description }
                    </div>
                  </Grid>
                ) : (
                  <>
                    <Grid item xs={6}>
                      {
                        !isRight && (
                          <Card className={classes.card}>
                            <CardContent>
                              <Typography variant='h3' className={classes.title}>
                                <strong>{ title }</strong>
                              </Typography>
                              <br/>
                              { description }
                            </CardContent>
                          </Card>
                        )
                      }
                    </Grid>
                    <Grid item xs={6}>
                      {
                        isRight && (
                          <Card className={classes.card}>
                            <CardContent>
                              <Typography variant='h3' className={classes.title}>
                                <strong>{ title }</strong>
                              </Typography>
                              <br/>
                              { description }
                            </CardContent>
                          </Card>
                        )
                      }
                    </Grid>
                  </>
                )
              }
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}
