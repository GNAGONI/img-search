import { useState, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { imagesRequest } from './state/slice';
import { getHomeImages } from './state/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const images = useSelector(getHomeImages);

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
      <div className="col-12 d-flex justify-content-evenly flex-wrap">
        {images.map((image) => {
          return (
            <img
              key={image.id}
              className="col-3 img-fluid img-thumbnail"
              src={image.urls.small}
              alt="val.alt_description"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
