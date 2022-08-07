import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const SmallInfoLinkStyled = styled(Link)(({ theme }) => ({
  ...theme.transitions.easing,
  position: 'relative',
  cursor: 'pointer',
  transition: theme.transitions.create(['transform', 'box-shadow'], {
    duration: theme.transitions.duration.standard,
  }),
  '&:hover': {
    boxShadow: theme.shadows[20],
    transform: 'scale(1.05)',
  },
  // '&:after': {
  //   content: '"DeleteIcon"',
  //   'font-family': 'Material Icons',
  // },

}));

export { SmallInfoLinkStyled };
