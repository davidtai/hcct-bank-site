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

import FadeSlide from './FadeSlide'
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
            <FadeSlide direction='up'>
              <Typography variant='h3' color='textPrimary' align='center'>
                Relevant Problem Statement and Supporting Data Chart
              </Typography>
            </FadeSlide>
          </Grid>
          <Grid item xs={12} md={6}>
            <EmbeddedVideo autoplay image={RetirementImg} videoId='tiO4pVGj7ag' channel='youtube'/>
            <FadeSlide direction='right'>
              <Typography color='textPrimary' variant='h6'>
                Solution/Product Description & Scenario Calculator
              </Typography>
              <Typography color='textPrimary'>
                Closing CTA
              </Typography>
            </FadeSlide>
          </Grid>
          <Grid item xs={12} md={6}>
            <NoSsr>
              <FadeSlide direction='left'>
                <SavingsChart/>
              </FadeSlide>
            </NoSsr>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default LackOfSavings
