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

import HeroImg from '../assets/hero.jpg'
import Hero2Img from '../assets/hero2.jpg'
import HeroBGImg from '../assets/hero-background.jpg'

const useStyles = makeStyles((theme) => ({
  hero: {
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#FFF',
  },
  heroBackground: {
    height: '100%',
    position: 'absolute',
    display: 'block',
    width: 'auto',
    left: '50%',
    transform: 'translate(-30%, 0%)',
    zIndex: 0,

    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  heroInfo: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3, 4),
    },
  },
  container: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  containerInner: {
    paddingTop: 120,
    paddingBottom: 120,
    position: 'relative',
    height: 600,
    minHeight: 600,

    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      paddingBottom: 40,
      height: 'initial',
    },
  },
  grid: {
    height: '100%',
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
  button: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    borderRadius: 0,
  },
  checkbox: {
    '& .MuiButtonBase-root': {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  h3: {
    marginTop: 40,
    lineHeight: 1.5,

    [theme.breakpoints.down('sm')]: {
      marginTop: 80,
    },
  },
  h6: {
    lineHeight: 3,
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
        <img src={HeroImg} className={classes.heroBackground}/>
        <div
          className={classes.containerInner}
        >
          <Grid
            container
            alignItems='center'
            className={classes.grid}
            spacing={isBelowSM ? 0 : 4}
          >
            <Grid item xs={12} md={6} className={classes.heroInfo}>
              <Typography variant='h3' className={classes.h3}>
                <strong>We the 99% can build wealth like the 1%.</strong>
              </Typography>
              <Typography variant='h6' className={classes.h6}>
                “The Societal Gamechanger.” - Willie Brown
              </Typography>
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
            <Grid item xs={12} md={2}>
            </Grid>
            <Grid item xs={12} md={4}>
              {
                isBelowSM && <img
                  src={Hero2Img}
                  className={classes.img}
                />
              }
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

                // false && <Card>
                //   <CardContent>
                //     <Grid
                //       container
                //       spacing={1}
                //       alignItems='center'
                //     >
                //       <Grid item xs={12}>
                //         <Typography variant='h5'>
                //           <strong>Welcome Back</strong>
                //         </Typography>
                //       </Grid>
                //       <Grid item xs={12}>
                //       </Grid>
                //       <Grid item xs={12}>
                //         <MUIText
                //           fullWidth
                //           size='small'
                //           label='Username'
                //           variant='outlined'
                //           value={src.username}
                //           setValue={setUsername}
                //           error={err.username}
                //         />
                //       </Grid>
                //       <Grid item xs={12}>
                //       </Grid>
                //       <Grid item xs={12}>
                //         <MUIText
                //           fullWidth
                //           size='small'
                //           label='Password'
                //           variant='outlined'
                //           type='password'
                //           value={src.password}
                //           setValue={setPassword}
                //           error={err.password}
                //         />
                //       </Grid>
                //       <Grid item xs={12}>
                //       </Grid>
                //       <Grid item xs={12} className={classes.checkbox}>
                //         <MUICheckbox
                //           label={<Typography variant='body2'>Remember Me</Typography>}
                //           value={src.remember}
                //           setValue={setRemember}
                //           error={err.remember}
                //         />
                //       </Grid>
                //       <Grid item xs={12}>
                //       </Grid>
                //       <Grid item xs={12}>
                //         <Button
                //           fullWidth
                //           size='small'
                //           color='primary'
                //           variant='contained'
                //         >
                //           <Typography>
                //             Sign In
                //           </Typography>
                //         </Button>
                //       </Grid>
                //       <Grid item xs={12}>
                //         <Link href='/'>
                //           <Typography variant='body2'>
                //             Forgot username/password?
                //           </Typography>
                //         </Link>
                //       </Grid>
                //       <Grid item xs={12}>
                //         <Link href='/'>
                //           <Typography variant='body2'>
                //             Not enrolled? Sign up now.
                //           </Typography>
                //         </Link>
                //       </Grid>
                //     </Grid>
                //   </CardContent>
                // </Card>

