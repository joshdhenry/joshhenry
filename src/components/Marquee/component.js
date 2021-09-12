import handshakeImage from '../../assets/images/handshake.jpg'

import styles from './styles.js'

const MarqueeComponent = () => {
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <div style={{ height: '100%', width: '100%' }}>
        <img src={handshakeImage} style={styles.image} />
      </div>
    </div>
  )
}

export default MarqueeComponent
