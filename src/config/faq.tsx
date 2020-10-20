import {
  Link,
} from '@material-ui/core'

import AppStore from '../../assets/appstore.png'
import PlayStore from '../../assets/playstore.png'

export default {
  faqs: [
    {
      question: 'How do I make a Triller profile?',
      answer: (
        <ol>
          <li>
            Download Triller
            <br/>
            <Link href='https://itunes.apple.com/us/app/triller-social-video-platform/id994905763' rel='nofollow' target='_blank'>
              <img style={{ width: 100, paddingRight: 8 }} src={AppStore} alt='Download on the AppStore'/>
            </Link>
            <Link href='https://play.google.com/store/apps/details?id=co.triller.droid&hl=en_US' rel='nofollow' target='_blank'>
              <img style={{ width: 100 }} src={PlayStore} alt='Get It On Google Play'/>
            </Link>
          </li>
          <li>Select the pink “Sign up / log in” button</li>
          <li>Select “email address”</li>
          <li>Enter your email address, desired username and set your password</li>
          <li>Hit “Create an account”</li>
          <li>Verify your email address when prompted</li>
          <li>Connect your Instagram username to your Triller profile</li>
          <li>Upload a profile picture</li>
          <li>Fill out your profile bio</li>
          <li>You’re ready to start making Triller videos!</li>
        </ol>
      ),
    },
    {
      question: 'Where do I find “Social video” on Triller?',
      answer: (
        <ol>
          <li>Press the pink + button on Triller</li>
          <li>Select “Social”</li>
          <li>Record or upload 1 audition take</li>
        </ol>
      ),
    },
    {
      question: 'If I have questions where can I go?',
      answer: 'Email creators@triller.co for any questions regarding Step Up To The Mic and/or your Triller account.',
    },
    {
      question: 'How is a Triller “Social” video different from a Music video on Triller?',
      answer: '“Social” videos on Triller allow you to record a single video take without any music in the background. You can also import an existing video if you have recorded your audition using your phone, or professional camera.'
    },
  ],
}
