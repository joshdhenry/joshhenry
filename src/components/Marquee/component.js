import handshakeImage from '../../assets/images/handshake.jpg'

import styles from './styles.js'

const MarqueeComponent = () => {
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <img src={handshakeImage} style={styles.image} />
    </div>
  )
}

export default MarqueeComponent
