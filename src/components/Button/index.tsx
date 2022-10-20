import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface Props {
  title: string;
  onClick?: () => void;
}

const CustomStyledButton = styled(Button)({
  width: '100px',
  height: '56px',
  marginLeft: '4px',
});

const CustomButton = (props: Props) => {
  return (
    <CustomStyledButton
      type="submit"
      variant="contained"
      color="primary"
      onClick={props.onClick}
    >
      <p>{props.title}</p>
    </CustomStyledButton>
  );
};

export default CustomButton;
