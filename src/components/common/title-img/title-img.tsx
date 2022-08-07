import React from 'react';
import { Box } from '@mui/material';
import Image from 'mui-image';

interface ITitleImg {
  imgSrc: string,
  width: number,
  height: number,
}

function TitleImg({ imgSrc, width, height }: ITitleImg) {
  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', m: 10,
    }}
    >
      <Image src={imgSrc} width={width} height={height} />
    </Box>
  );
}

export default TitleImg;
