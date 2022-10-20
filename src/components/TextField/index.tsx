import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { SyntheticEvent } from 'react';

interface Props {
  label: string;
  value: string;
  onChange: (e: SyntheticEvent) => void
}

const CustomStyledTextField = styled(TextField)({
  width: '300px',
  margin: '4px',
});


const CustomTextField = (props: Props) => {
  return (
    <CustomStyledTextField
      label={props.label}
      variant="outlined"
      type="text"
      required
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default CustomTextField;
