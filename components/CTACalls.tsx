import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Container,
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

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import HouseIcon from '@material-ui/icons/House'

import { useEffect, useState } from 'react'

import FadeSlide from './FadeSlide'

const useStyles = makeStyles((theme) => ({
  ctaCards: {
    position: 'relative',
    marginTop: -120,
    paddingBottom: 60,
  },
  ctaCard: {
    borderTop: '4px solid #11225a',
    borderRadius: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  icon: {
    fontSize: 100,
  },
  button: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    borderRadius: 0,
  },
  h6: {
    minHeight: 120,
    paddingTop: theme.spacing(2),
  },
}))

const CTACalls = ({...props}) => {
  const classes = useStyles()

  const [initialFade, setInitialFade] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInitialFade(true)
    }, 800)
  }, [])

  return (
    <div {...props}>
      <Container className={classes.ctaCards} maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FadeSlide in={initialFade} direction='up'>
              <Card className={classes.ctaCard}>
                <CardContent>
                  <MonetizationOnIcon className={classes.icon}/>
                  <br/>
                  <br/>
                  <Typography color='textPrimary' variant='h3'>
                    Earn
                  </Typography>
                  <br/>
                  <Typography color='textPrimary' variant='body1' className={classes.h6}>
                    Earn compounding interest on your average checking balance via a world-class banking solution backed by AAA credit from the US.
                  </Typography>
                  <br/>
                  <Button
                    className={classes.button}
                    size='small'
                    color='primary'
                    variant='contained'
                  >
                    <Typography>
                      START EARNING
                    </Typography>
                  </Button>
                  <br/>
                  <br/>
                  <Link href='/'>
                    Learn More &gt;&gt;&gt;
                  </Link>
                </CardContent>
              </Card>
            </FadeSlide>
          </Grid>
          <Grid item xs={12} md={4}>
            <FadeSlide in={initialFade} direction='up'>
              <Card className={classes.ctaCard}>
                <CardContent>
                  <CreditCardIcon className={classes.icon}/>
                  <br/>
                  <br/>
                  <Typography color='textPrimary' variant='h3'>
                    Spend
                  </Typography>
                  <br/>
                  <Typography color='textPrimary' variant='body1' className={classes.h6}>
                    Spend your Lincoln Dollars as you would spend USD. It works that same exact way - with no LD fees to spend your money.
                  </Typography>
                  <br/>
                  <Button
                    className={classes.button}
                    size='small'
                    color='primary'
                    variant='contained'
                  >
                    <Typography>
                      START SPENDING
                    </Typography>
                  </Button>
                  <br/>
                  <br/>
                  <Link href='/'>
                    Learn More &gt;&gt;&gt;
                  </Link>
                </CardContent>
              </Card>
            </FadeSlide>
          </Grid>
          <Grid item xs={12} md={4}>
            <FadeSlide in={initialFade} direction='up'>
              <Card className={classes.ctaCard}>
                <CardContent>
                  <HouseIcon className={classes.icon}/>
                  <br/>
                  <br/>
                  <Typography color='textPrimary' variant='h3'>
                    Save
                  </Typography>
                  <br/>
                  <Typography color='textPrimary' variant='body1' className={classes.h6}>
                    Retire at 65 or earlier and enjoy the benefits of 3% terminal annual rate of return compounded proceeds on your money.
                  </Typography>
                  <br/>
                  <Button
                    className={classes.button}
                    size='small'
                    color='primary'
                    variant='contained'
                  >
                    <Typography>
                      START SAVING
                    </Typography>
                  </Button>
                  <br/>
                  <br/>
                  <Link href='/'>
                    Learn More &gt;&gt;&gt;
                  </Link>
                </CardContent>
              </Card>
            </FadeSlide>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default CTACalls
