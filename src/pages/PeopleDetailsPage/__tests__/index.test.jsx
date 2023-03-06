import React from 'react';
import PeopleDetailsPage from '..';
import { waitFor, render } from '@testing-library/react';
import { GET_USER_DATA_BY_ID_URL } from '../../../constants/apiEndpoints';
import makeRequest from '../../../utils/makeRequest/';
import { useParams } from 'react-router-dom';
import { default as mockUserData } from '../../../mocks/PeopleDetailsPage';

jest.mock('../../../utils/makeRequest');

const mockNavigate = jest.fn();
const mockUseParams = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useParams: () => mockUseParams,
}));

describe('PeopleDetailsPage', () => {
  it('should call the makeRequest function when people details page is rendered', async () => {
    mockUseParams.mockReturnValue({ userId: mockUserData.userId });
    const { userId } = useParams();
    makeRequest.mockResolvedValue({});
    render(<PeopleDetailsPage />);
    await waitFor(() => expect(makeRequest).toBeCalledWith(GET_USER_DATA_BY_ID_URL(userId), {}, mockNavigate));
  });
});
