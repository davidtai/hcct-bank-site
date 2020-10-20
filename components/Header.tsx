import {
  Button,
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

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100vw',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
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
      <Grid container alignItems='center'>
        <Grid item xs={3} md={4}>
          <Grid container spacing={2} alignItems='center' className={classes.links}>
            <Grid item>
              <IconButton onClick={openMenu} className={classes.burger}>
                <MenuIcon/>
              </IconButton>
            </Grid>
            { !isBelowSM
                && <Grid item xs>
                  <Link href='/signup'>
                    <Typography>
                      Open an account
                    </Typography>
                  </Link>
                </Grid>
            }
          </Grid>
        </Grid>
        <Grid item xs={6} md={4}>
          <Link href='/' className={classes.logoLink}>
            <Grid container spacing={2} alignItems='center' className={classes.links}>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Typography variant='h5'>
                  <strong>HCCT</strong>
                </Typography>
              </Grid>
              <Grid item>
                <img src={LogoImg} alt='Damon Motorcycles' className={classes.logo}/>
              </Grid>
              <Grid item xs>
              </Grid>
            </Grid>
          </Link>
        </Grid>
        { !isBelowSM
            && <Grid item xs={12} sm={4}>
              <Grid container spacing={2} alignItems='center' className={classes.links}>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Typography>
                    Contact us
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    Español
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
        }
      </Grid>
    </div>
  )
}

export default Header
