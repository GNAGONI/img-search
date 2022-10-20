import { Typography } from '@mui/material';
import Wrapper from '../../components/Wrapper';
import { Text } from '../../constants';

const Error = () => {
  return (
    <Wrapper orientation="column">
      <Typography variant="h1">
        {Text.NOT_FOUND_ERROR_CODE}
      </Typography>
      <Typography variant="h6">
        {Text.NOT_FOUND_ERROR_MESSAGE}
      </Typography>
    </Wrapper>
  );
};

export default Error;