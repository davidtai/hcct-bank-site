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
    backgroundColor: '#11225A',
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
              HCCT also offers an HCCT Spend deposit account. HCCT Spend accounts are FDIC insured up to $250,000. HCCT debit cards are issued by Lincoln Savings Bank, member FDIC for HCCT Spend account holders.  "Save and Invest" claim refers to a client's ability to utilize the HCCT Spend Instant Round-up feature to set aside small amounts of money from purchases made using an HCCT Spend account, and seamlessly investing those small amounts using an HCCT Investment account.  Requires both an active HCCT Spend account and an HCCT Investment account in good standing.  Instant Round-ups are accrued instantly for investment during the next trading window.
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
