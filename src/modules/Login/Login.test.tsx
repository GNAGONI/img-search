import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './index';

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => jest.fn),
}));

describe('Login', () => {
  const navigate = jest.fn();
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;
  const useNavigateMock = useNavigate;
  const mockStore = {
    user: {
      isAuthenticated: true
    },
    home: {
      images: []
    }
  };

  beforeEach(() => {
    (useDispatchMock as jest.Mock).mockImplementation(() => () => { }); // eslint-disable-line
    (useSelectorMock as jest.Mock).mockImplementation(selector => selector(mockStore));
    (useNavigateMock as jest.Mock).mockImplementation(() => navigate);
  });
  afterEach(() => {
    (useDispatchMock as jest.Mock).mockClear();
    (useSelectorMock as jest.Mock).mockClear();
    (useNavigateMock as jest.Mock).mockClear();
  });

  it('should have snapshot', () => {
    const tree = renderer
      .create(<Login />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    render(<Login />);

    const textbox = screen.getByRole('textbox', { name: 'Username' }) as HTMLInputElement;
    expect(textbox).toBeInTheDocument();
    expect(textbox).toBeVisible();
    expect(textbox.value).toBe("");
    fireEvent.change(textbox, { target: { value: 'Test Name' } });
    expect(textbox.value).toBe("Test Name");

    const button = screen.getByRole('button', { name: 'Log in' });
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();

    fireEvent.click(button);
    expect(navigate).toHaveBeenLastCalledWith('/home');
  });
});




