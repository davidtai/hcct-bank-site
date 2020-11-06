import {
  Tab,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))

const StyledTabs = (props) => {
  const classes = useStyles()
  return (
    <Tab {...props} classes={classes} disableRipple {...props} />
  )
}

export default StyledTabs
