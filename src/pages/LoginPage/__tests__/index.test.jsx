import LoginPage from '..';
import { Fragment } from 'react';
import { render, screen } from '@testing-library/react';

describe('LoginPage Snapshot', () => {
  it('should render', () => {
    const { asFragment } = render(<LoginPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});
