import React from 'react';
import { render } from '@testing-library/react';
import CaseStudyCard from '..';

describe('CaseStudyCard', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CaseStudyCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
