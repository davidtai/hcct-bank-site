import classnames from 'classnames'

import {
  Button,
  CssBaseline,
  Typography,
  NoSsr,
} from '@material-ui/core'

import { makeStyles, ThemeProvider } from '@material-ui/core/styles'

import App from 'next/app'
import Head from 'next/head'

import React, { useEffect, useState } from 'react'
import ReactGA from 'react-ga'

import CookieConsent /* , { Cookies } */ from 'react-cookie-consent'

import Header from '../components/Header'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

import {
  FB_ID,
  GA_ID,
} from '../src'

import theme from '../src/theme/app'

import {
  TITLE,
} from '../template.settings'

import '../styles/stripe-menu.scss'
import 'react-modal-video/scss/modal-video.scss'

const useStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    width: '100vw',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    overflow: 'hidden',

    '& > *:first-child': {
      flex: 1,
    },

    '& *': {
      outline: 0,
    },

    '& a': {
      cursor: 'pointer',
      textDecoration: 'none !important',
    },

    '& strong': {
      fontWeight: 600,
    },

    // '& > * > *': {
    //   zIndex: 1,
    // },

    '& button': {
      paddingTop: 12,
      paddingBottom: 12,
      lineHeight: 1.25,

      '& *': {
        lineHeight: 1.25,
      },
    },
  },
  header: {
    position: 'absolute',
    zIndex: 10000,
    top: 0,
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

    '& *': {
      outline: 0,
    },

    '& a': {
      cursor: 'pointer',
      textDecoration: 'none !important',
    },
  },
  showHeader: {
    backgroundColor: '#11225A',
  },
  hideHeader: {
    backgroundColor: 'rgba(0, 0, 0, .2)',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#11225A',
    },
  },
  menu: {
    '& *': {
      outline: 0,
    },

    '& a': {
      cursor: 'pointer',
    },

    '& .bm-cross-button': {
      display: 'none',
    },
  },
  consent: {
    '& .CookieConsent': {
      backgroundColor: '#0b3283 !important',
    },

    '& button': {
      marginRight: '100px !important',
      backgroundColor: '#32B6EA !important',
      color: '#FFF !important',
      fontWeight: 600,
      borderRadius: '100px !important',
    },
  },
  footer: {

  },
}))

const MyApp = ({ Component, pageProps }) => {
  const classes = useStyles()

  const [showHeader, setShowHeader] = useState(false)
  const [menu, setMenu] = useState(false)
  const [enable, setEnable] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('react-facebook-pixel')
        .then(module => module.default)
        .then(ReactPixel => {
          ReactPixel.init(FB_ID)
          ReactPixel.pageView()
        })

      ReactGA.initialize(GA_ID)
      ReactGA.pageview(window.location.pathname + window.location.search)
    }

    setTimeout(() => {
      setEnable(true)
    }, 500)
  }, [])

  console.log('header', showHeader)

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div className={classes.menu}>
          <Menu
            isOpen={menu}
            onOpenState={({ isOpen }) => {
              if (menu !== isOpen) {
                setMenu(isOpen)
              }
            }}
          />
        </div>
        <div id='body' style={{height: '100vh', overflow: 'scroll'}}>
          <NoSsr>
            <div className={classnames(classes.header, ((showHeader || menu) ? classes.showHeader : classes.hideHeader))}>
              <Header
                openMenu={() => setMenu(!menu)}
              />
            </div>
          </NoSsr>
          <div className={classes.body}>
            <Component
              {...pageProps}
              showMenu={() => {
                console.log('sh')
                if (enable) {
                  setShowHeader(true)
                }
              }}
              hideMenu={() => {
                console.log('hh')
                if (enable) {
                  setShowHeader(false)
                }
              }}
            />
          </div>
          <div className={classes.footer}>
            <Footer/>
          </div>
        </div>
        <div
          className={classes.consent}
        >
          <CookieConsent
            ButtonComponent={Button}
          >
            <Typography
              variant='body1'
            >
              This website uses cookies to enhance the user experience.
            </Typography>
          </CookieConsent>
        </div>
      </ThemeProvider>
    </>
  )
}


 // Only uncomment this method if you have blocking data requirements for
 // every single page in your application. This disables the ability to
 // perform automatic static optimization, causing every page in your app to
 // be server-side rendered.

 // MyApp.getInitialProps = async (appContext) => {
 //   // calls page's `getInitialProps` and fills `appProps.pageProps`
 //   const appProps = await App.getInitialProps(appContext);

 //   return { ...appProps }
 // }

export default MyApp
