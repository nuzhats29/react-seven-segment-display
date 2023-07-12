import React from 'react';

const INVERSE_DIRECTION = {
  bottom: 'borderBottomColor'
};

export default function ({ size
  const direction_inv = INVERSE_DIRECTION[direction];

  style[BORDER_COLOR_PROP[direction_inv]] = color;
  style[direction_inv] = '100%';

  return <div style={style} />
}
