import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

type Props = {
  url: string;
  alt: string;
};

const Image = (props: Props) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="300"
        image={props.url}
        alt={props.alt}
      />
    </CardActionArea>
  </Card>
);

export default Image;
