import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Wrapper from './index';

describe('Wrapper', () => {
  it('should have snapshot', () => {
    const tree = renderer
      .create(
        <Wrapper orientation='row'>
          <></>
        </Wrapper>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should behave correctly', () => {
    const { container } = render(
      <Wrapper orientation='row'>
        <></>
      </Wrapper>
    );

    const wrapper = container.querySelector('div');
    expect(wrapper).toHaveStyle({
      display: 'flex',
      'flex-direction': 'row',
      'justify-content': 'center',
      'align-items': 'center',
      height: '100%',
    });
  });
});
