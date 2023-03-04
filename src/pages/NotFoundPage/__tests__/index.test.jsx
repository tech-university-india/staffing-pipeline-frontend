import { render, screen } from '@testing-library/react';
import React from 'react';
import NotFoundPage from '..';

describe('ErrorPage', () => {
  it('should show 404 Error Page not found text when the not found page is rendered', () => {
    render(<NotFoundPage />);
    expect(screen.getByText('404 Error. Page not found')).toBeTruthy();
  });
});
