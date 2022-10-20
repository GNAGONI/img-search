import * as React from 'react';
import { useSelector } from 'react-redux';
import { styled } from '@mui/material/styles';
import { getHomeImagesPage, getHomeImagesTotalPages } from './state/selectors';
import { changeImagePage } from './state/slice';
import CustomPagination from '../../components/Pagination';
import useAppDispatch from '../../hooks/useAppDispatch';

const PaginationWrapper = styled('div')({
  padding: '16px',
});

const Pagination = () => {
  const dispatch = useAppDispatch();
  const page = useSelector(getHomeImagesPage);
  const totalPages = useSelector(getHomeImagesTotalPages);
  const handlePaginationChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(changeImagePage({ page: value }));
  };

  return (
    <PaginationWrapper>
      <CustomPagination
        totalPages={totalPages}
        page={page}
        onChange={handlePaginationChange}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
