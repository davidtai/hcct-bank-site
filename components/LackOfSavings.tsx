import {
  Container,
  Grid,
  NoSsr,
  Typography,

  makeStyles,
} from '@material-ui/core'

import dynamic from 'next/dynamic'
import ModalVideo from 'react-modal-video'
import RetirementImg from '../assets/retirement1.jpg'

import EmbeddedVideo from './EmbeddedVideo'
const SavingsChart = dynamic(() => import('./SavingsChart'))


const useStyles = makeStyles((theme) => ({
  los: {
  },
  title: {
    paddingBottom: `${theme.spacing(4)}px !important`,
  },
}))

const LackOfSavings = ({...props}) => {
  const classes = useStyles()

  return (
    <div {...props}>
      <Container maxWidth='lg' className={classes.los}>
        <Grid container spacing={8} alignItems='center'>
          <Grid item xs={12} className={classes.title}>
            <Typography variant='h3' color='textPrimary' align='center'>
              <strong>Video & Relevant Problem Statement and Supporting Data Chart</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <EmbeddedVideo autoplay image={RetirementImg} videoId='tiO4pVGj7ag' channel='youtube'/>
            <Typography color='textPrimary' variant='h6'>
              Solution/Product Description & Scenario Calculator
            </Typography>
            <Typography color='textPrimary'>
              Closing CTA
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <NoSsr>
              <SavingsChart/>
            </NoSsr>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default LackOfSavings
