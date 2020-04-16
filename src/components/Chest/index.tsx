import './index.css';

import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

const Hero = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: TILE_SIZE * 2,
      left: TILE_SIZE,
      width: TILE_SIZE,
      height: 96,
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(./assets/CHEST.png)',
      backgroundPosition: `0px - ${TILE_SIZE}`,
      animation: 'chest-animation 1s steps(3) infinite'
    }}
    >

    </div>
  );
}

export default Hero;