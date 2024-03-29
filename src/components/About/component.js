import profileImage from '../../assets/images/profile.jpg'
import resume from '../../assets/pdf/Josh Henry - Resume.pdf'
import { default as viewportHooks } from '../../hooks/useViewport'
import Body from '../Body'
import Button from '../Button'
import Fade from '../Fade'
import Header from '../Header'

import { LINKEDIN_URL } from './constants'
import desktopStyles from './styles'
import mobileStyles from './styles.mobile.js'

const About = () => {
  const { isMobile } = viewportHooks.useViewport()
  const styles = isMobile ? mobileStyles : desktopStyles

  return (
    <div className={'About'}>
      <Fade cascade>
        <Header>About Me</Header>

        <div style={styles.wrapper}>
          <div style={styles.about}>
            <img src={profileImage} style={styles.image} />

            <div>
              <div style={styles.paragraph}>
                <Body>
                  I'm a full-stack software engineer with an emphasis on mobile
                  and web technologies, currently residing in Seattle, WA.
                </Body>
              </div>

              <div style={styles.paragraph}>
                <Body>
                  I develop custom software products built to clients'
                  specifications. I've helped companies small and large realize
                  their visions by creating beautiful software experiences and
                  publishing them to the world.
                </Body>
              </div>

              <div style={styles.paragraph}>
                <Body>
                  I love finding new ways to leverage technology to meet the
                  world's needs. Delivering a clean, simple, and high-quality
                  experience to the end-user is my passion.
                </Body>
              </div>

              <div style={styles.paragraph}>
                <Body>
                  I am capable in all aspects of development, including
                  frontend, backend, and systems architecture. My current core
                  area of expertise is development of mobile apps, both natively
                  and with React Native.
                </Body>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.buttonsWrapper}>
          <div style={styles.buttons}>
            <Button onClick={() => window.open(resume, '_blank')}>
              Resume
            </Button>
            <Button onClick={() => window.open(LINKEDIN_URL, '_blank')}>
              LinkedIn
            </Button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default About
