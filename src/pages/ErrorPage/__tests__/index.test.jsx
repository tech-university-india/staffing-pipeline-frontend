import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorPage from '..';

jest.mock('react-router-dom', () => ({
  useParams: () => ({
    errorCode: 500,
  }),
}));

describe('ErrorPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should show something went wrong text when the error page is rendered and there is no error code', () => {
    jest.mock('react-router-dom', () => ({
      useParams: () => ({}),
    }));
    render(<ErrorPage />);
    expect(screen.getByText('Something went wrong!')).toBeTruthy();
  });
  it('should show something went wrong text with error code when the error page is rendered and there is an error code passed in params', () => {
    render(<ErrorPage />);
    expect(screen.getByText('Something went wrong!')).toBeTruthy();
    expect(screen.getByText('Error code: 500')).toBeTruthy();
  });
});
