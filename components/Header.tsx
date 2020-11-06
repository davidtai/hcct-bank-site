import {
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Typography,

  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'

import classnames from 'classnames'

import React from 'react'

import MenuIcon from '@material-ui/icons/Menu'

import LogoImg from '../assets/logo-white.png'
import AnimatedNavbar from '../components/StripeMenu/AnimatedNavbar'

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100vw',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    position: 'relative',
    zIndex: 1000,

    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',

    [theme.breakpoints.up('lg')]: {
      paddingLeft: 80,
      paddingRight: 80,
    },

    [theme.breakpoints.down('sm')]: {
      paddingTop: 20,
    },

    '& a': {
      color: '#FFF',
    },

    '& button': {
    },
  },
  logo: {
    maxHeight: 40,
    display: 'inline-block',
  },
  logoText: {
    fontFamily: 'Crimson Text, serif',
    lineHeight: 1,
    marginTop: -6,
  },
  logoLink: {
    display: 'block',
    // marginLeft: 'auto',
    // marginRight: 'auto',
    textAlign: 'center',
    color: '#FFF',

    '& h5': {
      display: 'inline-block',
    },
  },
  button: {
    borderRadius: 64,
  },
  whiteButton: {
    color: '#000',
    borderColor: '#000',
  },
  outlinedButton: {
    borderWidth: 2,
  },
  burger: {
    float: 'right',
    color: '#FFF',
  },
  links: {
    color: '#FFF',
    '& p': {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      fontWeight: 600,
    },
  },
}))

const Header = ({openMenu}) => {
  const classes = useStyles()
  const theme = useTheme()

  const isBelowSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <div className={classes.header}>
      <Container maxWidth='lg'>
        <Grid container alignItems='center'>
          <Grid item xs={4}>
            <Link href='/' className={classes.logoLink}>
              <Grid container spacing={1} alignItems='center' className={classes.links}>
                <Grid item>
                  <img src={LogoImg} alt='HCCT Bank' className={classes.logo}/>
                </Grid>
                <Grid item>
                  <Typography variant='h4' className={classes.logoText}>
                    <strong>HCCT</strong>
                  </Typography>
                </Grid>
                <Grid item xs>
                </Grid>
              </Grid>
            </Link>
          </Grid>
          { !isBelowSM
              && <Grid item xs={8}>
                <Grid container spacing={2} alignItems='center' className={classes.links}>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                    {
                      // <Typography>
                      //   Contact us
                      // </Typography>
                    // </Grid>
                    // <Grid item>
                      // <Typography>
                      //   Español
                      // </Typography>
                    // </Grid>
                    // <Grid item>
                      // <Link href='/signup'>
                      //   <Typography>
                      //     Open an account
                      //   </Typography>
                      // </Link>
                    }
                    <AnimatedNavbar duration={300}/>
                  </Grid>
                </Grid>
              </Grid>
          }
          { !!isBelowSM
              && <Grid item xs={8}>
                <IconButton onClick={openMenu} className={classes.burger}>
                  <MenuIcon/>
                </IconButton>
              </Grid>
          }
        </Grid>
      </Container>
    </div>
  )
}

export default Header
