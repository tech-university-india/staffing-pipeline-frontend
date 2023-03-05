import React from 'react';
import { render } from '@testing-library/react';
import InputComponent from '..';

describe('InputComponent', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
        <InputComponent placeholder="email" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
