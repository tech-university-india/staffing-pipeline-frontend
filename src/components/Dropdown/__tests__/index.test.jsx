import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from '..';

describe('Dropdown', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Dropdown dropdownName="technology" dropdownData={['react', 'nodejs', 'express']} selectOption={jest.fn()} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
