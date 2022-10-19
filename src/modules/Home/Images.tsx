import { useSelector } from 'react-redux';
import { getHomeImages } from './state/selectors';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from '../../components/Image';
import Pagination from './Pagination';

const ImagesWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '16px',
})

const Images = () => {
  const images = useSelector(getHomeImages);
  return (
    <ImagesWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {images.map((image) => (
            <Grid item xs="auto" sm="auto" md="auto" key={image.id}>
              <Image url={image?.urls?.small} alt={image?.alt_description} />
            </Grid>
          ))}
        </Grid>
      </Box>
      {images.length && <Pagination />}
    </ImagesWrapper>
  );
};

export default Images;