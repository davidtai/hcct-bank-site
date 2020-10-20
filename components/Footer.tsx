import {
  Container,
  Grid,
  Link,
  Typography,

  makeStyles,
} from '@material-ui/core'

import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import PinterestIcon from '@material-ui/icons/Pinterest'

import LogoImg from '../assets/logo.png'
import LogoTextImg from '../assets/logo-text.png'

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#3E5AC5',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),

    color: '#fff',

    '& a': {
      color: '#fff',
    },
  },
  logo: {
    maxHeight: 20,
    display: 'inline-block',
  },
  logoText: {
    maxHeight: 16,
    display: 'inline-block',
  },
  centered: {
    textAlign: 'center',
  },
}))

const Footer = () => {
  const classes = useStyles()

  return (
    <div className={classes.footer}>
      <Container maxWidth='lg'>
        <Grid container spacing={4} alignItems='flex-start'>
          <Grid item xs={6} md={3}>
            <Typography variant='h6'>
              <strong>PRODUCTS</strong>
            </Typography>
            <br/>
            <Link href='/'>
              <Typography>
                Mone2Go
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                GetBanked
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Enterprized
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Features
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant='h6'>
              <strong>INFO</strong>
            </Typography>
            <br/>
            <Link href='/'>
              <Typography>
                Support
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Developers
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Service
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Get Started
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant='h6'>
              <strong>COMPANY</strong>
            </Typography>
            <br/>
            <Link href='/'>
              <Typography>
                Press Releases
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Mission
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Strategy
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Works
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant='h6'>
              <strong>CONTACT</strong>
            </Typography>
            <br/>
            <Link href='/'>
              <Typography>
                Popular
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Trending
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Catalog
              </Typography>
            </Link>
            <br/>
            <Link href='/'>
              <Typography>
                Features
              </Typography>
            </Link>
          </Grid>
          {
            // <Grid item xs={6} md={3}>
            //   <Grid container>
            //     <Grid item xs={12}>
            //       <Grid container spacing={2} alignItems='center'>
            //         <Grid item>
            //           <Link href='/'>
            //             <img src={LogoImg} alt='Damon Motorcycles' className={classes.logo}/>
            //           </Link>
            //         </Grid>
            //         <Grid item xs>
            //           <Link href='/'>
            //             <img src={LogoTextImg} alt='Damon Motorcycles' className={classes.logoText}/>
            //           </Link>
            //         </Grid>
            //       </Grid>
            //       <br/>
            //     </Grid>
            //     <Grid item xs={3}>
            //       <FacebookIcon/>
            //     </Grid>
            //     <Grid item xs={3}>
            //       <TwitterIcon/>
            //     </Grid>
            //     <Grid item xs={3}>
            //       <LinkedInIcon/>
            //     </Grid>
            //     <Grid item xs={3}>
            //       <PinterestIcon/>
            //     </Grid>
            //   </Grid>
            // </Grid>
          }
          <Grid item xs={12} className={classes.centered}>
            <br/>
            <br/>
            <Typography variant='caption' align='center'>
              Investment products and services are offered through Forstmann & Co, a registered broker-dealer and investment advisor, member of <Link href='/'>FINRA(Opens Overlay)</Link> and <Link href='/'>SIPC(Opens Overlay)</Link>. Annuities are made available through Forstmann & Co, a licensed insurance agency, doing business as Forstmann & Co Services, Inc. in California.  Forstmann & Co and Forstmann & Co Services are affiliated companies under the common control of Forstmann & Co. Products not available in all states.
            </Typography>
            <br/>
            <br/>
            <Typography variant='caption' align='center'>
            "HCCT" is the brand name for a banking and investment product and service offering.
            </Typography>
            <br/>
            <br/>
            <Typography variant='caption' align='center'>
              © {(new Date()).getFullYear()} HCCT All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Footer
