import { useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { imagesRequest } from './state/slice';
import Images from './Images';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import Form from '../../components/Form';

const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(imagesRequest({ search }))
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <TextField
          label="Query"
          value={search || ''}
          onChange={(e: SyntheticEvent) => setSearch((e.target as HTMLTextAreaElement).value)}
        />
        <Button title="Search" />
      </Form>
      <Images />
    </div>
  );
};

export default Home;
