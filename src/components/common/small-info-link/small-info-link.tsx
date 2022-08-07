import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SmallInfo, { ISmallInfo } from '../UI/small-info/small-info';
import * as S from './small-info-link.styled';

interface ISmallInfoLink extends ISmallInfo {
  to: string
}

function SmallInfoLink({ to, ...rest }: ISmallInfoLink) {
  return (
    <S.SmallInfoLinkStyled to={to}>
      <SmallInfo {...rest} />
      <ArrowForwardIosIcon sx={{
        position: 'absolute',
        top: '50%',
        left: '100%',
        transform: 'translateY(-50%)',
      }}
      />
    </S.SmallInfoLinkStyled>
  );
}

export default SmallInfoLink;
