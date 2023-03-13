import React from 'react';
import { render } from '@testing-library/react';
import CaseStudyCard from '..';

const mockedLink = jest.fn();
jest.mock('react-router-dom', () => ({
  Link: () => mockedLink,
}));

describe('CaseStudyCard', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<CaseStudyCard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
