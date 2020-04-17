import './index.css';

import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

const MiniDemon: React.FC = () => {
  return (
    <div style={{
      position: 'absolute',
      bottom: TILE_SIZE * 5,
      left: TILE_SIZE * 4,
      width: TILE_SIZE,
      height: 96,
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(./assets/MINI-DEMON.png)',
      animation: 'mini-demon-animation 1s steps(4) infinite'
    }}
    >

    </div>
  );
}

export default MiniDemon;