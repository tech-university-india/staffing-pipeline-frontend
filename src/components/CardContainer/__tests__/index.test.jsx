import { render } from '@testing-library/react';
import * as React from 'react';
import CardContainer from '..';

describe('CardContainer', () => {
  it('should render without crashing', () => {
    const { asFragment } = render(
      <CardContainer>
        <div>Test</div>
      </CardContainer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  it('Should contain a div with text "card-container"', () => {
    const { getByText } = render(
      <CardContainer>
        <div>card-container</div>
      </CardContainer>
    );
    expect(getByText('card-container')).toBeTruthy();
  });
});
