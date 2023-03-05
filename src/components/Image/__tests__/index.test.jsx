import React from 'react';
import { render } from '@testing-library/react';
import Image from '..';

describe('Image Component', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<Image imageUrl={'http://surl.li/ffpzg'} altText="Google.com" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
