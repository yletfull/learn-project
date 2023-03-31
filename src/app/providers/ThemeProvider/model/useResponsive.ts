import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Breakpoint } from '@mui/material';
import { Query } from 'shared/types/theme';

export default function useResponsive(query: Query, start?: Breakpoint, end?: Breakpoint) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start));

  const mediaDown = useMediaQuery(theme.breakpoints.down(start));

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start));

  if (query === Query.Up) {
    return mediaUp;
  }

  if (query === Query.Down) {
    return mediaDown;
  }

  if (query === Query.Between) {
    return mediaBetween;
  }

  return mediaOnly;
}
