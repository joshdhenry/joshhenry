import Body from '../Body'
import Fade from '../Fade'
import Header from '../Header'

const Tools = () => {
  return (
    <div className={'About'}>
      <Fade cascade>
        <Header>Tools I use</Header>
        <Body>Webstorm, photoshop, bash, npm, node, javascript</Body>
      </Fade>
    </div>
  )
}

export default Tools
