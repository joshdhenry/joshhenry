import Body from '../Body'
import Fade from '../Fade'
import Header from '../Header'

const About = () => {
  return (
    <div className={'About'}>
      <Fade cascade>
        <Header>About Me</Header>
        <Body>
          I'm a full-stack software engineer with an emphasis on mobile and web
          technologies, currently residing in Seattle, WA.
        </Body>

        <Body>
          I develop custom software products built to clients' specifications.
          I've helped companies small and large realize their visions by
          creating beautiful software experiences and publishing them to the
          world.
        </Body>

        <Body>
          I am also president and developer of my own software company,
          <a
            href="http://www.bigsmashsoftware.com/"
            rel="noreferrer"
            target="_blank"
          >
            Big Smash, LLC
          </a>
          ,and have developed <a href="portfolio.html#apps">four iOS apps</a>,
          an
          <a href="spinwheelcontrol.html">iOS CocoaPod framework</a>, and
          <a href="portfolio.html#websites">several websites</a>.
        </Body>

        <Body>
          I love finding new ways to leverage technology to meet the world's
          needs. Delivering a clean, simple, and high-quality experience to the
          end-user is my passion.
        </Body>

        <Header>Resume</Header>
      </Fade>
    </div>
  )
}

export default About
