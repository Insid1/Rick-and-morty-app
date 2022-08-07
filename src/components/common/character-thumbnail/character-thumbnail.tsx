import {
  CardMedia, CardContent, Typography, Grid,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AppRoutes from '../../../router/app-routes';
import * as S from './character-thumbnail.styled';
import { ICharacter } from '../../../types/data-types/data-types';

function CharacterThumbnail({
  id, name, species, image,
}: ICharacter) {
  return (
    <Grid component="li" justifySelf="center" item>
      <Link to={`${AppRoutes.Character}${id}`}>
        <S.CharacterThumbnailStyled>
          <CardMedia
            component="img"
            height="170"
            image={image}
            alt="character avatar"
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {species}
            </Typography>
          </CardContent>
        </S.CharacterThumbnailStyled>
      </Link>
    </Grid>

  );
}

export default CharacterThumbnail;
