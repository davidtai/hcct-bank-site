import {
  makeStyles,
} from '@material-ui/core'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

import ModalVideo from 'react-modal-video'
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    display: 'block',
    cursor: 'pointer',
  },
  embeddedVideo: {
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#FFF',
    fontSize: '5rem',
    pointerEvents: 'none',
  },
}))

const EmbeddedVideo = ({image, videoId, channel, autoplay}) => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)

  return (
    <div className={classes.embeddedVideo}>
      <PlayCircleOutlineIcon className={classes.icon}/>
      <img src={image} className={classes.img} onClick={() => setOpen(true)}/>
      <ModalVideo channel={channel} autoplay={autoplay} isOpen={open} videoId={videoId} onClose={() => setOpen(false)} />
    </div>
  )
}

export default EmbeddedVideo
