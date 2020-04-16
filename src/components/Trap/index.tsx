import './index.css';

import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

const Hero = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: TILE_SIZE * 2,
      left: TILE_SIZE * 7,
      width: TILE_SIZE,
      height: 96,
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(./assets/TRAP.png)',
      backgroundPosition: `0px - ${TILE_SIZE}`,
      animation: 'trap-animation 1s steps(8) infinite'
    }}
    >

    </div>
  );
}

export default Hero;