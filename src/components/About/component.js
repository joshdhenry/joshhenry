import profileImage from '../../assets/images/profile.jpg'
import Body from '../Body'
import Fade from '../Fade'
import Header from '../Header'

import styles from './styles'

const About = () => {
  return (
    <div className={'About'}>
      <Fade cascade>
        <Header>About Me</Header>

        <div style={styles.wrapper}>
          <img src={profileImage} style={{ width: '15rem' }} />

          <div>
            <Body>
              I'm a full-stack software engineer with an emphasis on mobile and
              web technologies, currently residing in Seattle, WA.
            </Body>

            <Body>
              I develop custom software products built to clients'
              specifications. I've helped companies small and large realize
              their visions by creating beautiful software experiences and
              publishing them to the world.
            </Body>

            <Body>
              I love finding new ways to leverage technology to meet the world's
              needs. Delivering a clean, simple, and high-quality experience to
              the end-user is my passion.
            </Body>

            <Body>
              I am capable in all aspects of development, including backend
              management,
            </Body>
          </div>
        </div>

        <Header>Resume</Header>
        <Header>LinkedIn</Header>
      </Fade>
    </div>
  )
}

export default About
