import {
  isEmail,
  isRequired,
  isPassword,
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
  Fade,
  Typography,
  NoSsr,

  makeStyles,
} from '@material-ui/core'

import { red } from '@material-ui/core/colors'

import classnames from 'classnames'

import { observer } from 'mobx-react-lite'
import { useState } from 'react'

import PasswordStrengthBar from 'react-password-strength-bar'

import { Element, animateScroll } from 'react-scroll'

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
  ancillaryForm: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 0,
    padding: 16,
  },
  hiddenForm: {
    pointerEvents: 'none',
  },
  hasPasswordBar: {
    '& p': {
      color: '#fff !important',
    },
  },
}))

const QuoteForm = () => {
  const classes = useStyles()

  const { contactStore } = getStores()

  const disabled = contactStore.isLoading

  const [completed, setCompleted] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(0)

  const {
    setFirstName,
    setMiddleName,
    setLastName,

    setLine1,
    setLine2,
    setCity,
    setState,
    setCountry,
    setPostalCode,

    setEmail,
    setEmailConfirm,
    setPhone,
    setUsername,
    setPassword,
    setPasswordConfirm,
    setPIN,
    setPINConfirm,
    setSecurityQ,
    setSecurityA,

    setMobileWallet,
    setDisplayCurrency,

    src,
    err,
    run,
  } = useMidstream({
    firstName: [isRequired, (v) => {
      return v
    }],
    middleName: [isRequired, (v) => {
      return v
    }],
    lastName: [isRequired, (v) => {
      return v
    }],
    line1: [isRequired],
    line2: [],
    city: [isRequired],
    country: ['US', isRequired],
    state: [
      isStateRequiredForCountry(
        () => contactStore.stateOptions,
        () => contactStore.country ?? undefined,
      ),
    ],
    postalCode: [isRequired],

    email: [isRequired, isEmail],
    emailConfirm: [isRequired, isEmail],
    phone: [isRequired],
    username: [isRequired],
    password: [isRequired, isPassword],
    passwordConfirm: [isRequired, isPassword],
    PIN: [isRequired],
    PINConfirm: [isRequired],
    securityQ: [isRequired],
    securityA: [isRequired],

    mobileWallet: [isRequired],
    displayCurrency: [isRequired],
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
              <Element name='top'>
                <div className={classes.header}>
                  <Typography color='textPrimary' variant='h2'>
                    <strong>HCCT & VISA Debit Card Enrollment</strong>
                  </Typography>
                </div>
              </Element>
            </Grid>
            <Grid item xs={12} style={{position: 'relative'}}>
              <div className={classnames(classes.ancillaryForm, {[classes.hiddenForm] : step != 0})}>
                <Fade in={ step === 0 }>
                  <Grid container spacing={4} alignItems='flex-start'>
                    <Grid item xs={12}>
                      <Typography color='textPrimary' variant='h5'>
                        <strong>Personal Information</strong>
                      </Typography>
                      <Typography color='textPrimary' variant='body2'>
                        We're required by law to ask your name, address, and other information to help us identify you.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <MUIText
                        fullWidth
                        label='First Name'
                        disabled={disabled}
                        value={src.firstName}
                        setValue={setFirstName}
                        error={err.firstName}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MUIText
                        fullWidth
                        label='Middle Name'
                        disabled={disabled}
                        value={src.middleName}
                        setValue={setMiddleName}
                        error={err.middleName}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MUIText
                        fullWidth
                        label='Last Name'
                        disabled={disabled}
                        value={src.lastName}
                        setValue={setLastName}
                        error={err.lastName}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} md={7}>
                      <MUIText
                        fullWidth
                        label='Address Line 1'
                        disabled={disabled}
                        value={src.line1}
                        setValue={setLine1}
                        error={err.line1}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <MUIText
                        fullWidth
                        label='Address Line 2'
                        disabled={disabled}
                        value={src.line2}
                        setValue={setLine2}
                        error={err.line2}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <MUIText
                        fullWidth
                        label='Country'
                        select
                        SelectProps={{
                          native: true
                        }}
                        options={contactStore.countryOptions}
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
                        SelectProps={{
                          native: true
                        }}
                        options={contactStore.stateOptions[src.country]}
                        disabled={disabled}
                        value={src.state}
                        setValue={setState}
                        error={err.state}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MUIText
                        fullWidth
                        label='Postal Code'
                        disabled={disabled}
                        value={src.postalCode}
                        setValue={setPostalCode}
                        error={err.postalCode}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    {
                      !!error
                        && <Grid item xs={12}>
                          <Typography color='textPrimary' variant='caption'>
                            { error }
                          </Typography>
                        </Grid>
                    }
                    <Grid item xs={12}>
                      <Button
                        color='primary'
                        variant='contained'
                        disabled={disabled}
                        onClick={() => {
                          setStep(1)
                          animateScroll.scrollTo('top', {
                            duration: 1500,
                            delay: 100,
                            smooth: true,
                            containerId: 'body',
                          })
                        }}
                      >
                        <Typography color='textPrimary'>
                          <strong>CONTINUE &gt;</strong>
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Fade>
              </div>
              <div className={classnames(classes.ancillaryForm, {[classes.hiddenForm] : step != 1})}>
                <Fade in={ step === 1 }>
                  <Grid container spacing={4} alignItems='flex-start'>
                    <Grid item xs={12}>
                      <Typography color='textPrimary' variant='h5'>
                        <strong>Contact Information</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MUIText
                        fullWidth
                        label='Email'
                        disabled={disabled}
                        value={src.email}
                        setValue={setEmail}
                        error={err.email}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MUIText
                        fullWidth
                        label='Confirm Email Again'
                        disabled={disabled}
                        value={src.emailConfirm}
                        setValue={setEmailConfirm}
                        error={err.emailConfirm}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MUIPhone
                        fullWidth
                        label='Phone'
                        disabled={disabled}
                        value={src.phone}
                        setValue={setPhone}
                        error={err.phone}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    {
                      !!error
                        && <Grid item xs={12}>
                          <Typography color='textPrimary' variant='caption'>
                            { error }
                          </Typography>
                        </Grid>
                    }
                    <Grid item xs={12}>
                      <Button
                        color='primary'
                        variant='contained'
                        disabled={disabled}
                        onClick={() => {
                          setStep(2)
                          animateScroll.scrollTo('top', {
                            duration: 1500,
                            delay: 100,
                            smooth: true,
                            containerId: 'body',
                          })
                        }}
                      >
                        <Typography color='textPrimary'>
                          <strong>CONTINUE &gt;</strong>
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Fade>
              </div>
              <div className={classnames({[classes.hiddenForm] : step != 2})}>
                <Fade in={ step === 2 }>
                  <Grid container spacing={4} alignItems='flex-start'>
                    <Grid item xs={12}>
                      <Typography color='textPrimary' variant='h5'>
                        <strong>Security Information</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <MUIText
                        fullWidth
                        label='Username'
                        disabled={disabled}
                        value={src.username}
                        setValue={setUsername}
                        error={err.username}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography color='textPrimary' variant='body2'>
                        <strong>Hint for a secure username</strong>
                      </Typography>
                      <Typography color='textPrimary' variant='body2'>
                        Use 6 to 60 characters. You may use letters, numbers, and special characters. Email addresses are allowed.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.hasPasswordBar}>
                      <MUIText
                        fullWidth
                        label='Password'
                        disabled={disabled}
                        value={src.password}
                        setValue={setPassword}
                        error={err.password}
                        variant='outlined'
                        type='password'
                        size='small'
                      />
                      <PasswordStrengthBar password={src.password} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MUIText
                        fullWidth
                        label='Password Again'
                        disabled={disabled}
                        value={src.passwordConfirm}
                        setValue={setPasswordConfirm}
                        error={err.passwordConfirm}
                        variant='outlined'
                        type='password'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MUIText
                        fullWidth
                        label='PIN'
                        disabled={disabled}
                        value={src.PIN}
                        setValue={setPIN}
                        error={err.PIN}
                        variant='outlined'
                        type='password'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MUIText
                        fullWidth
                        label='PIN Again'
                        disabled={disabled}
                        value={src.PINConfirm}
                        setValue={setPINConfirm}
                        error={err.PINConfirm}
                        variant='outlined'
                        type='password'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography color='textPrimary' variant='body2'>
                        Create your own security question and answer. This is a very secure method for us to verify who you are during a customer service call.
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <MUIText
                        fullWidth
                        label='Security Question'
                        disabled={disabled}
                        value={src.securityQ}
                        setValue={setSecurityQ}
                        error={err.setSecurityQ}
                        variant='outlined'
                        type='password'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <MUIText
                        fullWidth
                        label='Security Question Answer'
                        disabled={disabled}
                        value={src.securityA}
                        setValue={setSecurityA}
                        error={err.securityA}
                        variant='outlined'
                        type='password'
                        size='small'
                      />
                    </Grid>
                    {
                      !!error
                        && <Grid item xs={12}>
                          <Typography color='textPrimary' variant='caption'>
                            { error }
                          </Typography>
                        </Grid>
                    }
                    <Grid item xs={12}>
                      <Button
                        color='primary'
                        variant='contained'
                        disabled={disabled}
                        onClick={() => {
                          setStep(3)
                          animateScroll.scrollTo('top', {
                            duration: 1500,
                            delay: 100,
                            smooth: true,
                            containerId: 'body',
                          })
                        }}
                      >
                        <Typography color='textPrimary'>
                          <strong>CONTINUE &gt;</strong>
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Fade>
              </div>
              <div className={classnames(classes.ancillaryForm, {[classes.hiddenForm] : step != 3})}>
                <Fade in={ step === 3 }>
                  <Grid container spacing={4} alignItems='flex-start'>
                    <Grid item xs={12}>
                      <Typography color='textPrimary' variant='h5'>
                        <strong>Mobile Wallet Number</strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <MUIPhone
                        fullWidth
                        label='Mobile Wallet Number'
                        disabled={disabled}
                        value={src.mobileWallet}
                        setValue={setMobileWallet}
                        error={err.mobileWallet}
                        variant='outlined'
                        size='small'
                      />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.hasPasswordBar}>
                      <MUIText
                        fullWidth
                        label='Display Currency'
                        select
                        SelectProps={{
                          native: true
                        }}
                        options={{ usd: 'USD' }}
                        disabled={disabled}
                        value={src.displayCurrency}
                        setValue={setDisplayCurrency}
                        error={err.displayCurrency}
                        variant='outlined'
                        type='password'
                        size='small'
                      />
                    </Grid>
                    {
                      !!error
                        && <Grid item xs={12}>
                          <Typography color='textPrimary' variant='caption'>
                            { error }
                          </Typography>
                        </Grid>
                    }
                    <Grid item xs={12}>
                      <Button
                        color='primary'
                        variant='contained'
                        disabled={disabled}
                        onClick={() => {
                          setStep(4)
                          animateScroll.scrollTo('top', {
                            duration: 1500,
                            delay: 100,
                            smooth: true,
                            containerId: 'body',
                          })
                        }}
                      >
                        <Typography color='textPrimary'>
                          <strong>COMPLETE</strong>
                        </Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Fade>
              </div>
              <div className={classnames(classes.ancillaryForm, {[classes.hiddenForm] : step != 4})}>
                <Fade in={ step === 4 }>
                  <Grid container spacing={4} alignItems='flex-start'>
                    <Grid item xs={12}>
                      <br/>
                      <br/>
                      <Typography color='textPrimary' variant='h5' align='center'>
                        <strong>Application Completed</strong>
                      </Typography>
                      <Typography color='textPrimary' align='center'>
                        Your application will be process shortly.
                      </Typography>
                    </Grid>
                  </Grid>
                </Fade>
              </div>
            </Grid>
          </Grid>
      }
      { !!completed
          && <Grid container spacing={4} alignItems='flex-start'>
            <Grid item xs={12}>
              <div className={classes.header}>
                <Typography color='textPrimary' variant='h2'>
                  <strong>Your request has been submitted</strong>
                </Typography>
                <br/>
                <Typography color='textPrimary'>
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
