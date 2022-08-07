import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';

const CharacterThumbnailStyled = styled(Card)(({ theme }) => ({
  ...theme.transitions.easing,
  width: 270,
  cursor: 'pointer',
  boxShadow: theme.shadows[2],
  transition: theme.transitions.create(['transform', 'box-shadow'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    boxShadow: theme.shadows[20],
    transform: 'scale(1.05)',
  },
}));

export { CharacterThumbnailStyled };
