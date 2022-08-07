import React from 'react';
import { Box } from '@mui/material';
import Image from 'mui-image';

interface ITitleImg {
  imgSrc: string,
  width: number,
  height: number,
  // eslint-disable-next-line react/require-default-props
  isImgRounded?: boolean,
}

function TitleImg({
  imgSrc, width, height, isImgRounded = false,
}: ITitleImg) {
  const borderRadius = isImgRounded ? '50%' : 'none';
  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', m: 10,
    }}
    >
      <Image style={{ borderRadius }} src={imgSrc} width={width} height={height} />
    </Box>
  );
}

export default TitleImg;
