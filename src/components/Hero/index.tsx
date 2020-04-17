import './index.css';

import useEventListener from '@use-it/event-listener';
import React, { useState } from 'react';

import { TILE_SIZE } from '../../settings/constants';

interface IObjectLiteral {
  [key: string]: any;
}

const Hero: React.FC = () => {
  const [heroPositionX, setHeroPositionX] = useState(8);
  const [heroPositionY, setHeroPositionY] = useState(3);

  const [headDirection, setHeadDirection] = useState<'right' | 'left'>('right');

  useEventListener('keydown', (event: any) => {
    const keyEvents: IObjectLiteral = {
      'ArrowUp': () => setHeroPositionY(heroPositionY + 1),
      'ArrowDown': () => setHeroPositionY(heroPositionY - 1),
      'ArrowLeft': () => {
        setHeadDirection('left');
        setHeroPositionX(heroPositionX - 1);
      },
      'ArrowRight': () => {
        setHeadDirection('right');
        setHeroPositionX(heroPositionX + 1);
      },
    }
    if (keyEvents[event.key])
      keyEvents[event.key]();
  });

  return (
    <div style={{
      position: 'absolute',
      left: TILE_SIZE * heroPositionX,
      bottom: TILE_SIZE * heroPositionY,
      width: TILE_SIZE,
      height: 96,
      backgroundRepeat: 'no-repeat',
      backgroundImage: 'url(./assets/hero.png)',
      backgroundPosition: `0px - ${TILE_SIZE}`,
      animation: 'hero-animation 1s steps(4) infinite',
      transform: `scaleX(${headDirection === 'right' ? 1 : -1})`
    }}>
    </div>
  );
}

export default Hero;