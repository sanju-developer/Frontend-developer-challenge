import { actionConstants } from '../actionConstants/actionConstants'
import { getCampaignsDataService } from '../../services/campaignService'

export const CampaignAction = () => {
    return async dispatch => {
        dispatch({ type: `CAMPAIGN_${actionConstants.API_LOADING}` })
        const response = await getCampaignsDataService()
        try {
            dispatch({ type: `CAMPAIGN_${actionConstants.API_DATA}`, payload: response })
        } catch (response) {
            dispatch({ type: `CAMPAIGN_${actionConstants.API_ERROR}`, payload: 'something went wrong' })
        }
    }
}