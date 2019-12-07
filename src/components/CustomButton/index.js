import React from 'react';

import { Button } from './styles';

export default function CustomButton({fontColor, color, isRounded, href, target, text}) {
  // props: fontColor, color, isRounded, hasLink, text
  return (
    <Button href={href ? href : null} target={target ? target : null} fontColor={fontColor} color={color} isRounded={isRounded}>
      {text}
    </Button>
  );
}
