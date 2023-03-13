import React from 'react';
import Button from '..';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Button Component', () => {
  it('should render correctly', () => {
    const handleClick = jest.fn();
    const { asFragment } = render(<Button buttonText="search" handleClick={handleClick} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should call the handleClick functionality when clicked', () => {
    const handleClick = jest.fn();
    render(<Button buttonText="search" handleClick={handleClick} />);
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(handleClick).toBeCalled();
  });
});
