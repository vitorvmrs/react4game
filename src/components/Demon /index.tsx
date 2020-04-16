import './index.css';

import React from 'react';

import { DEMON_TILE_SIZE, TILE_SIZE } from '../../settings/constants';

const Hero = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: TILE_SIZE * 7,
      left: TILE_SIZE * 4,
      width: DEMON_TILE_SIZE,
      height: DEMON_TILE_SIZE,
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(./assets/DEMON.png)',
      animation: 'demon-animation 1s steps(4) infinite'
    }}
    >

    </div>
  );
}

export default Hero;