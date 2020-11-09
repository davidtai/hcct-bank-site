import {
  Container,
  Fade,
  Grid,
  List,
  ListItem,
  Tab,
  Tabs,
  Typography,
  withStyles,
  makeStyles,
} from '@material-ui/core'

import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import FinancialProjections from './FinancialProjections'

import FadeSlide from './FadeSlide'
import StyledTab from './StyledTabs/StyledTab'
import StyledTabs from './StyledTabs/StyledTabs'

import CheckingImg from '../assets/checking.jpg'
import RetirementImg from '../assets/retirement.jpg'
import StudentImg from '../assets/student.jpg'
import MortgageImg from '../assets/mortgage.jpg'

const useStyles = makeStyles((theme) => ({
  uxSlider: {
    padding: theme.spacing(4, 0),
    minHeight: 600,

    '& .MuiTabs-flexContainer': {
      alignItems: 'flex-start',
    },
  },
  tabPanel: {
    padding: theme.spacing(4, 0)
  },
  bgImg: {
    width: '100%',
    height: 400,
    backgroundSize: 'cover',
    backgroundPosition: '0 25%',
  },
}))

const TabPanel = (props) => {
  const classes = useStyles()

  const { children, value, index, ...other } = props;

  return (
    // <Fade in={value === index} timeout={1000}>
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
    // </Fade>
  )
}

const UXSliders = ({...props}) => {
  const classes = useStyles()

  const [value, setValue] = useState(0)

  return (
    <div {...props}>
      <Container maxWidth='lg' className={classes.uxSlider}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={12}>
            <StyledTabs
              variant='fullWidth'
              value={value}
              onChange={(e, v) => setValue(v)}
              indicatorColor='primary'
              textColor='primary'
              centered
            >
              <StyledTab
                label={
                  <Typography variant='h6'>LDT Checking Account</Typography>
                }
              />
              <StyledTab
                label={
                  <Typography variant='h6'>LDT Retirement Account</Typography>
                }
              />
              <StyledTab
                label={
                  <Typography variant='h6'>LDT Student Loan Repayment Account</Typography>
                }
              />
              <StyledTab
                label={
                  <Typography variant='h6'>LDT Home Ownership & Mortgage Account</Typography>
                }
              />
            </StyledTabs>
            <TabPanel value={value} index={0}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <FadeSlide direction='right'>
                    <div className={classes.bgImg} style={{ backgroundImage: `url(${CheckingImg})` }} />
                    <List>
                      <ListItem>
                        <Typography variant='h6'>
                          Earn above-market interest on your checking or savings account
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          Exchange your Lincoln Dollars for US Dollars instantly in your online account
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          Lincoln Dollars can be spent freely in the same way and with the same purchasing power as US Dollars
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          Easy to establish and maintain
                        </Typography>
                      </ListItem>
                    </List>
                  </FadeSlide>
                </Grid>
                <Grid item xs={6}>
                  <FadeSlide direction='left'>
                    <FinancialProjections
                      title='Comparison of interest earned over time'
                      categories={[
                        'Year 1',
                        'Year 2',
                        'Year 3',
                        'Year 4',
                        'Year 5',
                        'Year 6',
                        'Year 7'
                      ]}
                      series={[{
                          name: 'Lincoln Ladder',
                          data: [4800, 9600, 14400, 17600, 20800, 22000, 23200],
                        }, {
                          name: 'Status Quo',
                          data: [1600, 3226, 4877, 6555, 8260, 9992, 11752],
                      }]}
                    />
                  </FadeSlide>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <FadeSlide direction='right'>
                    <div className={classes.bgImg} style={{ backgroundImage: `url(${RetirementImg})` }} />
                    <List>
                      <ListItem>
                        <Typography variant='h6'>
                          Benefit from your hard work and make your money work for you
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          No need to save, spend what you earn, we set up your account and grow it over time, risk-free
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          Assets are managed by the Lincoln Dollar Trust, letting you enjoy life without worrying about retirement
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          Easy to establish and maintain
                        </Typography>
                      </ListItem>
                    </List>
                  </FadeSlide>
                </Grid>
                <Grid item xs={6}>
                  <FadeSlide direction='left'>
                    <FinancialProjections
                      title='Earned savings'
                      xTitle='Years'
                      series={[{
                          name: 'Lincoln Dollar Retirement Account',
                          data: [[10, 193576], [20, 420452], [30, 686356], [35, 835999], [40, 998003], [43, 1101560]],
                        }, {
                          name: 'Status Quo',
                          data: [[10, 51812], [20, 153733], [30, 354228], [35, 518388], [40, 748632], [43, 929162]],
                      }]}
                    />
                  </FadeSlide>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <FadeSlide direction='right'>
                    <div className={classes.bgImg} style={{ backgroundImage: `url(${StudentImg})` }} />
                    <List>
                      <ListItem>
                        <Typography variant='h6'>
                          Exchange US Dollars for Lincoln Dollars to set up a student debt repayment schedule
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          Lincoln Dollar Trust will manage debt repayments on your behalf
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          No need to save to repay debt, interest earned on your Lincoln Dollars can repay part of or all of your loans
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          Easy to establish and maintain
                        </Typography>
                      </ListItem>
                    </List>
                  </FadeSlide>
                </Grid>
                <Grid item xs={6}>
                  <FadeSlide direction='left'>
                    <FinancialProjections
                      title='Earned savings'
                      xTitle='Years'
                      series={[{
                          name: 'Lincoln Dollar Student Loan Repayment Account',
                          data: [[10, 193576], [20, 420452], [30, 686356], [35, 835999], [40, 998003], [43, 1101560]],
                        }, {
                          name: 'Status Quo',
                          data: [[10, 51812], [20, 153733], [30, 354228], [35, 518388], [40, 748632], [43, 929162]],
                      }]}
                    />
                  </FadeSlide>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <FadeSlide direction='right'>
                    <div className={classes.bgImg} style={{ backgroundImage: `url(${MortgageImg})` }} />
                    <List>
                      <ListItem>
                        <Typography variant='h6'>
                          Exchanging earnings in US Dollars for Lincoln Dollars can allow you to afford a down payment on a house in as little as 1 year
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          Lincoln Dollars can move you closer to your dream house, allowing you to maximize your budget
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          Spend most of or all of what you earn. Interest on future earnings can be used to pay mortgage expenses and property taxes
                        </Typography>
                      </ListItem>
                      <ListItem>
                        <Typography variant='h6'>
                          Build wealth in your home without straining your current income
                        </Typography>
                      </ListItem>
                    </List>
                  </FadeSlide>
                </Grid>
                <Grid item xs={6}>
                  <FadeSlide direction='left'>
                    <FinancialProjections
                      title='Savings'
                      xTitle='Years'
                      series={[{
                          name: 'Lincoln Dollar Home Ownership Program',
                          data: [[10, 177587], [20, 714033], [30, 1784564], [35, 2461297], [40, 3890459], [43, 4854390]],
                        }, {
                          name: 'Status Quo',
                          data: [[10, 29062], [20, 129890], [30, 328235], [35, 453618], [40, 718409], [43, 897003]],
                      }]}
                    />
                  </FadeSlide>
                </Grid>
              </Grid>
            </TabPanel>
          </Grid>
          <Grid item xs={12} md={4}>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default UXSliders
