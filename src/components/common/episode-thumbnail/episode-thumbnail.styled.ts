import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const EpisodeThumbnailStyled = styled(Paper)(({ theme }) => ({
  ...theme.transitions.easing,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  padding: theme.spacing(2),
  width: 280,
  maxWidth: 280,
  minHeight: 128,
  height: 'auto',
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

export { EpisodeThumbnailStyled };
