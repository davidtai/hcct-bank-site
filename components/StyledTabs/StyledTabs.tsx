import {
  Tabs,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
}))

const StyledTabs = (props) => {
  const classes = useStyles()
  return (
    <Tabs {...props} classes={classes} TabIndicatorProps={{ children: <span /> }} />
  )
}

export default StyledTabs
