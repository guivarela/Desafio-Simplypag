import React, {useState} from 'react';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

import { Container } from './styles';

export default function RangeSlider({valor, setValor}) {
  const [isMoving, setIsMoving] = useState(false);

  return (
    <Container>
      <Slider
        className={isMoving ? 'active' : ''}
        onChangeStart={() => setIsMoving(true)}
        onChangeComplete={() => setIsMoving(false)}
        value={valor}
        max={7000}
        step={100}
        tooltip={false}
        onChange={(v) => setValor(v)}
      />
    </Container>
  );
}
