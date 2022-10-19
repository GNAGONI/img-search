import { Typography } from '@mui/material';
import Wrapper from '../../components/Wrapper';

const Error = () => {
  return (
    <Wrapper orientation="column">
      <Typography variant="h1">
        404
      </Typography>
      <Typography variant="h6">
        The page you’re looking for doesn’t exist.
      </Typography>
    </Wrapper>
  );
};

export default Error;