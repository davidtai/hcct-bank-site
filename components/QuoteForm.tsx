import {
  isEmail,
  isRequired,
  isStateRequiredForCountry,
} from '@hanzo/middleware'

import {
  MUIText,
  MUIPhone,
  CreateNumberFormat,
} from '@hanzo/react'

import {
  Button,
  Container,
  Grid,
  Typography,
  NoSsr,

  makeStyles,
} from '@material-ui/core'

import { red } from '@material-ui/core/colors'

import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import getStores from '../stores'
import useMidstream from '../src/hooks'

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(16, 2, 0),
    textAlign: 'center',
  },
  form: {
    paddingBottom: theme.spacing(8),
  },
  error: {
    color: red[500],
  },
}))

const QuoteForm = () => {
  const classes = useStyles()

  const { contactStore } = getStores()

  const disabled = contactStore.isLoading

  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState('')

  const {
    setName,
    setEmail,
    setCompany,
    setCity,
    setState,
    setCountry,
    setPhone,
    setWebsite,
    setExpectedVolume,
    setCommentsAndQuestions,

    src,
    err,
    run,
  } = useMidstream({
    name: [isRequired, (v) => {
      return v
    }],
    email: [isRequired, isEmail],
    company: [isRequired],
    country: ['US', isRequired],
    state: [
      isStateRequiredForCountry(
        () => contactStore.stateOptions,
        () => contactStore.country ?? undefined,
      ),
    ],
    phone: [],
    website: [],
    expectedVolume: [0, isRequired],
    commentsAndQuestions: [],
  }, {
    dst: (k, v) => contactStore.setValue(k, v),
  })

  const submit = async () => {
    try {
      setError('')

      const err = await run()

      if (err instanceof Error) {
        throw err
      }

      console.log('wut', contactStore)

      const ret = await contactStore.submit()

      if (ret.id) {
        setCompleted(true)
      }
    } catch (e) {
      setError(e.message ? e.message : e)
      console.log('submit failed', e)
    }
  }

  return (
    <div className={classes.form}>
      { !completed
          && <Grid container spacing={4} alignItems='flex-start'>
            <Grid item xs={12}>
              <div className={classes.header}>
                <Typography variant='h2'>
                  <strong>Request a quote</strong>
                </Typography>
                <br/>
                <Typography>
                  We need some basic information to get started and one of our represetatives will contact you soon.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5'>
                <strong>Contact Information</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <MUIText
                fullWidth
                label='Name'
                placeholder='Your name'
                disabled={disabled}
                value={src.name}
                setValue={setName}
                error={err.name}
                variant='outlined'
                size='small'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MUIText
                fullWidth
                label='Email'
                placeholder='yourname@yourcompany.com'
                disabled={disabled}
                value={src.email}
                setValue={setEmail}
                error={err.email}
                variant='outlined'
                size='small'
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <MUIPhone
                fullWidth
                label='Phone Number'
                defaultCountry='us'
                placeholder='1 (234)-567-8910'
                disabled={disabled}
                value={src.phone}
                setValue={setPhone}
                error={err.phone}
                variant='outlined'
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <MUIText
                fullWidth
                label='Company'
                placeholder='Your company'
                disabled={disabled}
                value={src.company}
                setValue={setCompany}
                error={err.company}
                variant='outlined'
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <MUIText
                fullWidth
                label='City'
                placeholder='City'
                disabled={disabled}
                value={src.city}
                setValue={setCity}
                error={err.city}
                variant='outlined'
                size='small'
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <MUIText
                fullWidth
                label='Country'
                select
                options={contactStore.countryOptions}
                placeholder='Country'
                disabled={disabled}
                value={src.country}
                setValue={setCountry}
                error={err.country}
                variant='outlined'
                size='small'
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <MUIText
                fullWidth
                label='State'
                select
                options={contactStore.stateOptions[src.country]}
                placeholder='State'
                disabled={disabled}
                value={src.state}
                setValue={setState}
                error={err.state}
                variant='outlined'
                size='small'
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant='h5'>
                <strong>Quote Information</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <MUIText
                label='Expected Volume per Month'
                fullWidth
                size='small'
                variant='outlined'
                placeholder={10000}
                disabled={disabled}
                InputProps={{
                  inputComponent: CreateNumberFormat(),
                }}
                value={src.expectedVolume}
                setValue={setExpectedVolume}
                error={err.expectedVolume}
              />
            </Grid>
            <Grid item xs={12}>
              <MUIText
                label='Comments or Questions'
                fullWidth
                size='small'
                variant='outlined'
                placeholder='...'
                disabled={disabled}
                multiline
                rows={6}
                value={src.commentsAndQuestions}
                setValue={setCommentsAndQuestions}
                error={err.commentsAndQuestions}
              />
            </Grid>
            {
              !!error
                && <Grid item xs={12}>
                  <Typography variant='caption'>
                    { error }
                  </Typography>
                </Grid>
            }
            <Grid item xs={12}>
              <Button
                color='primary'
                variant='contained'
                disabled={disabled}
                onClick={submit}
              >
                <Typography>
                  <strong>SUBMIT</strong>
                </Typography>
              </Button>
            </Grid>
          </Grid>
      }
      { !!completed
          && <Grid container spacing={4} alignItems='flex-start'>
            <Grid item xs={12}>
              <div className={classes.header}>
                <Typography variant='h2'>
                  <strong>Your request has been submitted</strong>
                </Typography>
                <br/>
                <Typography>
                  One of our represetatives will contact you soon.
                </Typography>
              </div>
            </Grid>
          </Grid>
      }
    </div>
  )
}

export default observer(QuoteForm)
