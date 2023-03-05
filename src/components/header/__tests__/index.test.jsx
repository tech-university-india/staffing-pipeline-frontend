import React from 'react';
import { render } from '@testing-library/react';
import Header from '..';

describe('Header', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Header {...{ hasNav: true }} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
