import { useState, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { imagesRequest } from './state/slice';

const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(imagesRequest({ search }))
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search || ''}
          onChange={(e: SyntheticEvent) => setSearch((e.target as HTMLTextAreaElement).value)}
        />
        <button type="submit" color="primary">
          Search
        </button>
      </form>
    </div>
  );
};

export default Home;
