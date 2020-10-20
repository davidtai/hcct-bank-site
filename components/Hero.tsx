import {
  MUIText,
  MUICheckbox,
} from '@hanzo/react'

import {
  isRequired,
  isPassword,
} from '@hanzo/middleware'

import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,

  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'

import classnames from 'classnames'

import React from 'react'

import useMidstream from '../src/hooks'

import HeroImg from '../assets/hero-card.png'
import HeroBGImg from '../assets/hero-background.jpg'

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundColor: '#0846a8',
    width: '100vw',
    minHeight: 600,
    position: 'relative',
    overflow: 'hidden',
    backgroundImage: `url(${HeroBGImg})`,
    backgroundPosition: '35% 50%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  grid: {
    height: '100%',
  },
  titleCard: {
    maxWidth: '100%',
    display: 'block',
    marginTop: theme.spacing(2),
  },
  container: {
    height: '100%',
    paddingTop: 80,
    paddingBottom: 130,

    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      paddingBottom: 40,
    },
  },
  mobileImg: {
    width: '100vw',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      marginLeft: theme.spacing(-3),
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(-2),
    },
  },
  img: {
    maxWidth: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logo: {
    width: 150,
    maxWidth: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  whiteButton: {
    color: '#FFF',
    borderColor: '#FFF',

    [theme.breakpoints.down('md')]: {
      color: '#000',
      borderColor: '#000',
    },
  },
  outlinedButton: {
    borderWidth: 2,
  },
  leftGrid: {
    // paddingTop: '64px !important',
  },
  topGap: {
    // marginTop: theme.spacing(8),
  },
  checkbox: {
    '& .MuiButtonBase-root': {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  cardInfo: {
    textAlign: 'center',
    color: '#FFF',

    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(8, 0),
    },
  },
  cardImg: {
    width: '70%',
    display: 'block',
    padding: theme.spacing(4, 0, 2),
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export default ({...props }) => {
  const classes = useStyles()

  const theme = useTheme()

  const isBelowSM = useMediaQuery(theme.breakpoints.down('sm'))
  const isBelowMD = useMediaQuery(theme.breakpoints.down('md'))

  const {
    setUsername,
    setPassword,
    setRemember,

    src,
    err,
    run,
  } = useMidstream({
    username: [isRequired],
    password: [isRequired, isPassword],
    remember: [],
  }, {
    dst: (k, v) => {},
  })

  return (
    <div className={classes.hero}>
      <Container
        maxWidth='lg'
        className={classes.container}
      >
        <Grid
          container
          alignItems='center'
          className={classes.grid}
        >
          {
            isBelowMD
              && <Grid item xs={12}>
              </Grid>
          }
          <Grid item xs={12} md={8} className={classes.cardInfo} spacing={4}>
            <img src={HeroImg} className={classes.cardImg}/>
            <Typography variant='h3' align='center'>
              <strong>Start earning 3% today.</strong>
            </Typography>
            <br/>
            <Link href='/signup'>
              <Button
                className={classes.button}
                size='small'
                color='primary'
                variant='contained'
              >
                <Typography>
                  Open an account
                </Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} lg={4} className={classes.leftGrid}>
            <Card className={classes.topGap}>
              <CardContent>
                <Grid
                  container
                  spacing={1}
                  alignItems='center'
                >
                  <Grid item xs={12}>
                    <Typography variant='h5'>
                      <strong>Welcome Back</strong>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                  </Grid>
                  <Grid item xs={12}>
                    <MUIText
                      fullWidth
                      size='small'
                      label='Username'
                      variant='outlined'
                      value={src.username}
                      setValue={setUsername}
                      error={err.username}
                    />
                  </Grid>
                  <Grid item xs={12}>
                  </Grid>
                  <Grid item xs={12}>
                    <MUIText
                      fullWidth
                      size='small'
                      label='Password'
                      variant='outlined'
                      type='password'
                      value={src.password}
                      setValue={setPassword}
                      error={err.password}
                    />
                  </Grid>
                  <Grid item xs={12}>
                  </Grid>
                  <Grid item xs={12} className={classes.checkbox}>
                    <MUICheckbox
                      label={<Typography variant='body2'>Remember Me</Typography>}
                      value={src.remember}
                      setValue={setRemember}
                      error={err.remember}
                    />
                  </Grid>
                  <Grid item xs={12}>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      size='small'
                      color='primary'
                      variant='contained'
                    >
                      <Typography>
                        Sign In
                      </Typography>
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Link href='/'>
                      <Typography variant='body2'>
                        Forgot username/password?
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Link href='/'>
                      <Typography variant='body2'>
                        Not enrolled? Sign up now.
                      </Typography>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
