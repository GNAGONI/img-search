import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import { render, screen } from '@testing-library/react';
import Images from './index';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Images', () => {
  const useSelectorMock = reactRedux.useSelector;
  const mockStore = {
    home: {
      images: [
        { id: 1, url: 'www.1.com', alt: "alt img1" },
        { id: 2, url: 'www.2.com', alt: "alt img2" },
        { id: 3, url: 'www.2.com', alt: "alt img3" }
      ]
    }
  };
  beforeEach(() => {
    (useSelectorMock as jest.Mock).mockImplementation(selector => selector(mockStore));
  });
  afterEach(() => {
    (useSelectorMock as jest.Mock).mockClear();
  });

  it('should have a valid snapshot', () => {
    const tree = renderer
      .create(
        <Images />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    render(
      <Images />
    );

    const image1 = screen.getByAltText('alt img1',);
    expect(image1).toBeInTheDocument();
    expect(image1).toBeVisible();

    const image2 = screen.getByAltText('alt img2',);
    expect(image2).toBeInTheDocument();
    expect(image2).toBeVisible();

    const image3 = screen.getByAltText('alt img3',);
    expect(image3).toBeInTheDocument();
    expect(image3).toBeVisible();
  });
});

