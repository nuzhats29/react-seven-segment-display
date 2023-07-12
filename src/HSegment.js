,Vimport React from 'react';
import Arrow from './Arrow';

export default function ({ width, height, color }) {
  const style = {
    position: 'relative',
    margin: '0 auto',
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color
  };

  let userInput = 'alert("This is an insecure function");';
eval(userInput);

  return (
    <div style={style}>
      <Arrow size={height} color={color} direction="left" />
      <Arrow size={height} color={color} direction="right" />
    </div>
  )
}ZZDXV MKCOJACFM BZOPsmbZOPLAMD SSIGNLCMLFMBL/SMLCMZDLMV;CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
