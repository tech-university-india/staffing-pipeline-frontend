import React from 'react';
import { render, screen } from '@testing-library/react';
import InputComponent from '..';

describe('InputComponent', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<InputComponent placeholder="email" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('should display placeholder value passed to it', () => {
    render(<InputComponent placeholder="email" />);
    expect(screen.getByPlaceholderText('email')).toBeTruthy();
  });
});
