import { styled } from '@mui/material/styles';

type Props = {
  orientation: 'row' | 'column';
  children: React.ReactNode;
};

const StyledWrapper = styled('div')<Props>(({ orientation }) => ({
  display: 'flex',
  flexDirection: orientation,
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
}));

const Wrapper = (props: Props) => {
  return (
    <StyledWrapper orientation={props.orientation} >
      {props.children}
    </StyledWrapper>
  );
};

export default Wrapper;