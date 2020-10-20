import {
  Grid,
  Link,
  NoSsr,
  useMediaQuery,
} from '@material-ui/core'

import {
  ThemeProvider,
  makeStyles,
  useTheme,
} from '@material-ui/core/styles'

import { useRouter } from 'next/router'

import React, { useMemo } from 'react'

import { push as Menu } from 'react-burger-menu'
import { useSwipeable } from 'react-swipeable'

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: 'none !important',
    color: '#000',
  },
}))

const menuStyles = {
  bmBurgerButton: {
    width: '36px',
    height: '30px',
    right: '40px',
    top: '40px',
    position: 'fixed',
    display: 'none',
  },
  bmBurgerBars: {
    background: 'transparent',
  },
  bmBurgerBarsHover: {
    background: '#FFF',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#fff',
    display: 'none',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100vw',
    top: 0,
  },
  bmMenu: {
    background: '#FFF',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
    height: '100vh',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#FFF',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
    top: 0,
    height: '100vh',
    width: '100vw',
  },
}


export default ({ isOpen, onOpenState, ...props }) => {
  const classes = useStyles()

  const handlers = useSwipeable({
    onSwipedLeft: () => onOpenState({
      isOpen: false,
    }),
  })

  const router = useRouter()
  let pathname = '/'

  if (router) {
    pathname = router.pathname
  }

  const theme = useTheme()
  const isBelowSM = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Menu
      left
      disableAutoFocus
      isOpen={isOpen}
      styles={menuStyles}
      pageWrapId='body'
      outerContainerId='main'
      onStateChange={ onOpenState }
      width={220}
      {...props}
    >
      <Grid container spacing={2} {...handlers}>
        <Grid item xs={12}>
          <Link
            variant='body1'
            className={classes.link}
            onClick={() => {
              onOpenState({ isOpen: false })
            }}
          >
            Request a Quote
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link
            variant='body1'
            className={classes.link}
            onClick={() => {
              onOpenState({ isOpen: false })
            }}
          >
            Details
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link
            variant='body1'
            className={classes.link}
            onClick={() => {
              onOpenState({ isOpen: false })
            }}
          >
            Privacy Policy
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link
            variant='body1'
            className={classes.link}
            onClick={() => {
              onOpenState({ isOpen: false })
            }}
          >
            Terms of Service
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link
            variant='body1'
            className={classes.link}
            onClick={() => {
              onOpenState({ isOpen: false })
            }}
          >
            Accessibility
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Link
            variant='body1'
            className={classes.link}
            onClick={() => {
              onOpenState({ isOpen: false })
            }}
          >
            DMCA
          </Link>
        </Grid>
      </Grid>
    </Menu>
  )
}

