import {
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
  withStyles,
  makeStyles,
} from '@material-ui/core'

import ModalVideo from 'react-modal-video'
import { useState } from 'react'

import StyledTab from './StyledTabs/StyledTab'
import StyledTabs from './StyledTabs/StyledTabs'

const useStyles = makeStyles((theme) => ({
  uxSlider: {

  },
  tabPanel: {
    padding: theme.spacing(4, 0)
  },
}))

const TabPanel = (props) => {
  const classes = useStyles()

  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      className={classes.tabPanel}
      {...other}
    >
      {value === index && (
        <Typography>{children}</Typography>
      )}
    </div>
  );
}

const UXSliders = ({image, videoId, channel, autoplay, ...props}) => {
  const classes = useStyles()

  const [value, setValue] = useState(0)

  return (
    <div {...props}>
      <Container maxWidth='lg' className={classes.uxSlider}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <StyledTabs
              variant='fullWidth'
              value={value}
              onChange={(e, v) => setValue(v)}
              indicatorColor='primary'
              textColor='primary'
              centered
            >
              <StyledTab label='Item One' />
              <StyledTab label='Item Two' />
              <StyledTab label='Item Three' />
            </StyledTabs>
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
            Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Grid>
          <Grid item xs={12} md={5}>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default UXSliders
