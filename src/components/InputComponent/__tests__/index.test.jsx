import React from 'react';

import { render, screen } from '@testing-library/react';

import InputComponent from '..';

describe('InputComponent', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<InputComponent placeholder="email" className="login-input" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should display placeholder value passed to it', () => {
    render(<InputComponent placeholder="email" className="login-input" />);
    expect(screen.getByPlaceholderText('email')).toBeTruthy();
  });
});
