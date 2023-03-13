import Notification from '..';
import { render, screen, fireEvent } from '@testing-library/react';
describe('Notification', () => {
  it('Notification snapshot', () => {
    const { asFragment } = render(<Notification message="test" />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('renders notification', () => {
    render(<Notification message="test" />);
    expect(screen.getByText('test')).toBeTruthy();
  });
  it("should close when 'X' is clicked", () => {
    render(<Notification message="test" />);
    fireEvent.click(screen.getByTestId('X'));
    expect(screen.queryByText('test')).not.toBeTruthy();
  });
});
