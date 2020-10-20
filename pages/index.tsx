import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Container,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Fade,
  Grid,
  Grow,
  IconButton,
  InputAdornment,
  Link,
  NoSsr,
  TextField,
  Typography,

  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import AssignmentIcon from '@material-ui/icons/Assignment'
import CheckIcon from '@material-ui/icons/Check'

import Head from 'next/head'

import React, { useEffect, useState } from 'react'
import ModalVideo from 'react-modal-video'
import handleViewport from 'react-in-viewport'

import classnames from 'classnames'

import Hero from '../components/Hero'
import Vignette from '../components/Vignette'

import EarnImg from '../assets/earn.jpg'
import SimpleImg from '../assets/simple.jpg'
import SecureImg from '../assets/secure.png'
import PlatformsBGImg from '../assets/platforms-background.jpg'

import Mone2GoLogo from '../assets/logo-mone2go.png'
import GetBankedLogo from '../assets/logo-getbanked.png'
import EnterprizedLogo from '../assets/logo-enterprized.png'

let id: string
let picked: string
let sharedHandle: string

const useStyles = makeStyles((theme) => ({
  body: {
    minHeight: '100vh',

    '& h6': {
      fontWeight: 300,
    },
  },
  earn: {
    backgroundColor: '#FFF',
    padding: theme.spacing(12, 0),
  },
  earnGrid: {
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column-reverse',
    },
  },
  simple: {
    padding: theme.spacing(12, 0),
  },
  secure: {
    backgroundColor: '#FFF',
    padding: theme.spacing(8, 0),
  },
  fullHeight: {
    height: '100%',
  },
  img: {
    maxWidth: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  round: {
    [theme.breakpoints.up('lg')]: {
      borderRadius: '100vw',
    },
  },
  img1: {
    [theme.breakpoints.up('lg')]: {
      marginBottom: '-22%',
    },
  },
  img2: {
    [theme.breakpoints.up('lg')]: {
      marginTop: '-22%',
    },
  },
  img3: {
    [theme.breakpoints.up('lg')]: {
      marginTop: '-15%',
    },
  },
  platforms: {
    backgroundImage: `url(${PlatformsBGImg})`,
    backgroundSize: 'cover',
    backgroundPosition: '50% 0%',
    padding: theme.spacing(16, 0),
    color: '#FFF',
  },
  button: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

const InViewport = handleViewport(({
  inViewport,
  forwardedRef,
  onEnter,
  onExit,
  children,
  ...props
}) => {

  useEffect(() => {
    if (inViewport) {
      onEnter()
    } else {
      onExit()
    }
  })

  return (
    <div ref={forwardedRef}>
      {children}
    </div>
  )
})

export default ({showMenu, hideMenu}) => {
  // if (typeof window !== 'undefined') {
  //   let t = localstory(window.localStorage ?? window.sessionStorage, 'triller')

  //   if (!id) {
  //     id = t.get('id')

  //     if (!id) {
  //       id = nanoid()
  //       t.set('id', id, { ttl: '24h' })
  //     }
  //   }

  //   picked = t.get('voted')
  //   v = !!picked
  // }

  const [isOpen, setIsOpen] = useState(false)

  const classes = useStyles()

  const theme = useTheme()
  const isBelowSM = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    // if (typeof window !== 'undefined' && !sharedHandle) {
    //   const urlParams = new URLSearchParams(window.location.search);
    //   sharedHandle = urlParams.get('vote') ?? ''
    //   if(sharedHandle) {
    //     setTimeout(() => {
    //       Scroll.scroller.scrollTo(sharedHandle, {
    //         duration: 1000,
    //         delay: 100,
    //         smooth: true,
    //         offset: -100, // Scrolls to element + 50 pixels down the page
    //       })
    //     }, 200)
    //   }
    // }
  }, [])

  return (
    <div className={classes.body}>
      <InViewport onEnter={hideMenu} onExit={showMenu}>
        <Hero/>
      </InViewport>
      <div className={classes.earn}>
        <Container maxWidth='lg' className={classes.fullHeight}>
          <Grid container alignItems='center' className={classnames(classes.fullHeight, classes.earnGrid)} spacing={8}>
            <Grid item xs={12} md={6} className={classnames('test')}>
              <Typography color='textPrimary' variant='h1'>
                <strong>EARN 3%.</strong>
              </Typography>
              <br/>
              <Typography color='textPrimary' variant='h6'>
                HCCT provides the first in class platform that allows your customers to earn interest on their balance.  We provide a banking replacement solution so users instantly get activated & earning while using the mose secure mobile money platform.
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
            <Grid item xs={12} md={6} className={classnames('test')}>
              <img src={EarnImg} className={classnames(classes.img, classes.round, classes.img1)}/>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.simple}>
        <Container maxWidth='lg' className={classes.fullHeight}>
          <Grid container alignItems='center' className={classes.fullHeight} spacing={8}>
            <Grid item xs={12} md={6} className={classnames('test')}>
              <img src={SimpleImg} className={classnames(classes.img, classes.round, classes.img2)}/>
            </Grid>
            <Grid item xs={12} md={6} className={classnames('test')}>
              <Typography color='textPrimary' variant='h1'>
                <strong>SIMPLE.</strong>
              </Typography>
              <br/>
              <Typography color='textPrimary' variant='h6'>
                Banks have ridiculous hidden fees. Banks have forgotten that customers need easy access to their money and tools to budget and plan for anything life throws at you. We have made the most customer friendly banking system anyone can use.
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
          </Grid>
        </Container>
      </div>
      <div className={classes.secure}>
        <Container maxWidth='lg' className={classes.fullHeight}>
          <Grid container alignItems='center' className={classes.fullHeight} spacing={4}>
            <Grid item xs={12} md={5} className={classnames('test')}>
              <Typography color='textPrimary' variant='h1'>
                <strong>SECURE.</strong>
              </Typography>
              <br/>
              <Typography color='textPrimary' variant='h6'>
                Built upon military grade security infrastructure and protocols, we have the most secure system to protect your hard earned money. Have a look at our robust infrastructure and instant customer service.
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
            <Grid item xs={12} md={7} className={classnames('test')}>
              <img src={SecureImg} className={classnames(classes.img, classes.img3)}/>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.platforms}>
        <Container maxWidth='lg' className={classes.fullHeight}>
          <Grid container alignItems='flex-start' className={classes.fullHeight} spacing={8}>
            <Grid item xs={12} className={classnames('test')}>
              <Typography variant='h2' align='center'>
                <strong>A PLATFORM FOR EVERY NEED.</strong>
              </Typography>
              <br/>
              <br/>
            </Grid>
            <Grid item xs={12} md={4} className={classnames('test')}>
              <img src={Mone2GoLogo} className={classes.img}/>
              <br/>
              <Typography variant='h6'>
                Serving the unbanked across 3 continents, Mone2Go lets users carry a <strong>balance up to $500 USD instantly</strong> with the most basic and open KYC system ever created. Replace Western Union and MoneyGram for <strong>transfering money internationally with 0 fees</strong>.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classnames('test')}>
              <img src={GetBankedLogo} className={classes.img}/>
              <br/>
              <Typography variant='h6'>
                GetBanked is a new platform designed for small to medium sized business and the self employed. Create invoices, P.O.s, PnL statements, run projections, get an instant snapshot of your clients, and jumpstart your tax preparation.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} className={classnames('test')}>
              <img src={EnterprizedLogo} className={classes.img}/>
              <br/>
              <Typography variant='h6'>
                Designed as the perfect flex account system for managing employees&apos; spending, Enterpized lets you load documents and track spending with SMS alerts.  A secure dashboard comptrolling portal lets usrs manage everything in realtime.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  )
}
