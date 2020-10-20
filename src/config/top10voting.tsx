import {
  Typography,
} from '@material-ui/core'


import JRice42 from '../../assets/finalists/jackrice.jpg'
import Mungowona from '../../assets/finalists/mungowona.jpg'
import TLyon from '../../assets/finalists/t-lyon.jpg'
import Sanni from '../../assets/finalists/Sanni.jpg'
import DaneAmar from '../../assets/finalists/daneamar.jpg'
import Iris from '../../assets/finalists/IrisOfficial.jpg'
import Lee from '../../assets/finalists/lee.jpg'
import DevonArnold from '../../assets/finalists/devonarnold.jpg'
import SongBirdy from '../../assets/finalists/song_birdy.jpg'
import Karolin from '../../assets/finalists/mskarolin.jpg'

const choices = [
  {
    Name: 'Jack Rice',
    Location: 'Chicago, IL',
    handle: 'jrice42',
    youtube: 'BR4m_IkNOIE',
    img: JRice42,
    bio: (
      <>
        <Typography variant='body1' color='textPrimary'>
          Who and what is your biggest inspiration in music?
        </Typography>
        <Typography variant='body2'>
          Kanye West. Besides the fact that he grew up near me, his music has always resonated with me more than any other artist. The diversity of his discography is something I try to do with my music, looking for unique sounds and samples.
        </Typography>
      </>
    ),
  },
  {
    Name: 'Mungo Ligoya',
    Location: 'Caldwell, ID',
    handle: 'mungowona',
    youtube: 'vG2PfxnsMoY',
    img: Mungowona,
    bio: (
      <>
        <Typography variant='body1' color='textPrimary'>
          What are some of your other passions?
        </Typography>
        <Typography variant='body2' color='textPrimary'>
          I have a lot of things I'm passionate about! One of them is youth empowerment on different levels + human rights and the way that they are not being met in many places.
        </Typography>
      </>
    ),
  },
  {
    Name: 'Tyon Davis',
    Location: 'Fort Pierce, FL',
    handle: 't-lyon',
    youtube: 'DAx0zOH53wU',
    img: TLyon,
    bio: (
      <>
        <Typography variant='body1' color='textPrimary'>
          What is most important to you?
        </Typography>
        <Typography variant='body2' color='textPrimary'>
          ●	The most important thing to me is the everlasting impact that we as humans can have on each other. Being that music is such a pivotal part of our existence and culture, my goal is to spread positive energy and encouragement through lyricism.
        </Typography>
      </>
    ),
  },
  {
    Name: 'Sanni Mogusu Mmairura',
    Location: 'Los Angeles, CA',
    handle: 'sanni',
    youtube: 'giLXn12HhaE',
    img: Sanni,
    bio: (
      <>
        <Typography variant='body1' color='textPrimary'>
          What is most important to you?
        </Typography>
        <Typography variant='body2' color='textPrimary'>
          Making honest music that listeners can connect to and bringing smiles to faces is my biggest passion. Everything music and the people I keep close are what matters to me the most.
        </Typography>
      </>
    ),
  },
  {
    Name: 'Shoubunhdith Alvin Phiavongsa',
    Location: 'San Diego, CA',
    handle: 'daneamar',
    youtube: '8Qsh8JzfOhc',
    img: DaneAmar,
    bio: (
      <>
        <Typography variant='body1' color='textPrimary'>
          What is your proudest music moment so far?
        </Typography>
        <Typography variant='body2' color='textPrimary'>
          As of 2020, I would say the biggest most exciting moment of my music career actually happened just recently! I hit 100K monthly listeners on Spotify, my single “Green Tea & Honey” is #1 on the Thailand Top 50 Viral charts & just hit 1 million streams on Spotify alone. This is the first time I’ve ever hit numbers like this and I’m super proud of it.
        </Typography>
      </>
    ),
  },
  {
    Name: 'Iris Gabriella Grace Dunn',
    Location: 'Los Angeles, CA',
    handle: 'irisofficial',
    youtube: 'nZKzSkhtwNQ',
    img: Iris,
    bio: (
      <>
        <Typography variant='body1' color='textPrimary'>
          Who is your favorite artist?
        </Typography>
        <Typography variant='body2' color='textPrimary'>
          I'm inspired by Ed Sheeran, Taylor Swift and Sia since they write their own music and you can feel their deep emotions in their lyrics.
        </Typography>
      </>
    ),
  },
  {
    Name: 'Leandrea Carroll',
    Location: 'Wilmington, NC',
    handle: 'issthakidd.leee',
    youtube: '0CwHkWU49r4',
    img: Lee,
    bio: (
      <>
        <Typography variant='body1' color='textPrimary'>
          Why is music or rap so special to you?
        </Typography>
        <Typography variant='body2' color='textPrimary'>
          It is my way to express deep emotions that I could never express by just talking. It is special to me because I find that it’s a good way to help others who might be feeling the same way. Music can change moods and can be a part of your world, that’s the effect I want on people.
        </Typography>
      </>
    ),
  },
  {
    Name: 'Devon Jr. Arnold',
    Location: 'New York, NY',
    handle: 'devon7arnold',
    youtube: 'RfbxGq6VHBA',
    img: DevonArnold,
    bio: (
      <>
        <Typography variant='body1' color='textPrimary'>
          What has been the proudest moment so far in your music career and why?
        </Typography>
        <Typography variant='body2' color='textPrimary'>
          Proudest moment in my music career is honestly building the courage and confidence to enter the SUTTM and making Top 30! Being that I was always scared of showing the world my musical talents, this was the first ever freestyle I had ever put into the world and for it to go as far as this, couldn’t be more proud.
        </Typography>
      </>
    ),
  },
  {
    Name: 'Kenyatta Loftin',
    Location: 'Kinston, NC',
    handle: 'song_birdy',
    youtube: 'yXaQ0F4TNMA',
    img: SongBirdy,
    bio: (
      <>
        <Typography variant='body1' color='textPrimary'>
          What matters to you the most?
        </Typography>
        <Typography variant='body2' color='textPrimary'>
          Being a great mother.
        </Typography>
      </>
    ),
  },
  {
    Name: 'Ana Karolina Campos Garcia',
    Location: 'Miami, FL',
    handle: 'ms.karoline',
    youtube: 'ue9tKQAVd6g',
    img: Karolin,
    bio: (
      <>
        <Typography variant='body1' color='textPrimary'>
          Why music?
        </Typography>
        <Typography variant='body2' color='textPrimary'>
          Music is loyal to you. It can be your psychologist, your spiritual guru, it's not always perfect, but at the end of the day, it's the most beautiful relationship you can have with yourself.
        </Typography>
      </>
    ),
  },
]

export default choices
