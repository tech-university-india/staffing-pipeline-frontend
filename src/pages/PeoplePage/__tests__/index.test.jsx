import { render } from '@testing-library/react';
import * as React from 'react';
import PeoplePage from '..';

jest.mock('react-router-dom');
describe('PeoplePage', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<PeoplePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
