import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
  page: number;
  totalPages: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void
};

const CustomPagination = (props: Props) => (
  <Stack spacing={2}>
    <Pagination
      count={props.totalPages}
      color="primary"
      page={props.page}
      onChange={props.onChange}
    />
  </Stack>
);


export default CustomPagination;
