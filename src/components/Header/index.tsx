import { styled } from '@mui/material/styles';

type Props = {
  children: React.ReactNode;
};

const Header = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '16px',
})


const Layout = (props: Props) => {
  return (
    <Header>
      {props.children}
    </Header>
  );
};

export default Layout;
