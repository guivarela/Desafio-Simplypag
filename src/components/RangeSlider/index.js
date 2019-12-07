import React, {useState} from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import { Container } from './styles';

export default function RangeSlider({qtd, setQtd}) {
  const [isMoving, setIsMoving] = useState(false);

  return (
    <Container>
      <Slider
        className={isMoving ? 'active' : ''}
        onChangeStart={() => setIsMoving(true)}
        onChangeComplete={() => setIsMoving(false)}
        value={qtd}
        max={7000}
        step={100}
        tooltip={false}
        onChange={(v) => setQtd(v)}
      />
    </Container>
  );
}
