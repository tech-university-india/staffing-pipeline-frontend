import React from 'react';
import { render, screen } from '@testing-library/react';

import Search from '..';

describe('Search', () => {
  it('renders search', () => {
    render(<Search />);
    expect(screen.getByPlaceholderText('Search for Studies, tech stack, etc')).toBeTruthy();
  });
});
