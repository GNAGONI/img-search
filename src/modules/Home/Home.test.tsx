import renderer from 'react-test-renderer';
import { render, screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux';
import Home from './index';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Home', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
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
    (useDispatchMock as jest.Mock).mockImplementation(() => () => { }); // eslint-disable-line
    (useSelectorMock as jest.Mock).mockImplementation(selector => selector(mockStore));
  });
  afterEach(() => {
    (useDispatchMock as jest.Mock).mockClear();
    (useSelectorMock as jest.Mock).mockClear();
  });

  it('should have snapshot', () => {
    const tree = renderer
      .create(
        <Home />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    render(
      <Home />
    );

    const textbox = screen.getByRole('textbox', { name: 'Search' }) as HTMLInputElement;
    expect(textbox).toBeInTheDocument();
    expect(textbox).toBeVisible();
    expect(textbox.value).toBe("");
    fireEvent.change(textbox, { target: { value: 'Cat' } });
    expect(textbox.value).toBe("Cat");

    const button = screen.getByRole('button', { name: 'Search' });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
  });
});



