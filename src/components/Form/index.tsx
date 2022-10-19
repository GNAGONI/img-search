import { SyntheticEvent } from 'react';
import { styled } from '@mui/material/styles';

type Props = {
  onSubmit: (e: SyntheticEvent) => void;
  children: React.ReactNode;
};

const CustomStyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px',
})


const Form = (props: Props) => {
  return (
    <CustomStyledForm onSubmit={props.onSubmit}>
      {props.children}
    </CustomStyledForm>
  );
};

export default Form;
