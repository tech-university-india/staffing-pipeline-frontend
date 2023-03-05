import React from 'react';
import EngagementDetailsPage from '..';
import { waitFor, render } from '@testing-library/react';
import { GET_ENGAGEMENT_DATA_BY_ID_URL } from '../../../constants/apiEndpoints';
import makeRequest from '../../../utils/makeRequest/';
import { useParams } from 'react-router-dom';
import { default as mockEngagementData } from '../../../mocks/EngagementDetailsPage';

jest.mock('../../../utils/makeRequest');

const mockNavigate = jest.fn();
const mockUseParams = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
  useParams: () => mockUseParams,
}));

describe('EngagementDetailsPage', () => {
  it('should call the makeRequest function when engagement details page is rendered', async () => {
    mockUseParams.mockReturnValue({ projectId: mockEngagementData.engagementId });
    const { projectId } = useParams();
    makeRequest.mockResolvedValue({});
    render(<EngagementDetailsPage />);
    await waitFor(() => expect(makeRequest).toBeCalledWith(GET_ENGAGEMENT_DATA_BY_ID_URL(projectId), {}, mockNavigate));
  });
});
