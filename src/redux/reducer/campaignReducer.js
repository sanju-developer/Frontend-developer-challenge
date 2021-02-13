import { actionConstants } from '../actionConstants/actionConstants'

const initialState = {
    isApiLoading: false,
    apiData: null,
    isApiFailed: false,
    apiError: null
}

const campaignReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case `CAMPAIGN_${actionConstants.API_LOADING}`:
            return {
                ...state,
                isApiLoading: true
            }
        case `CAMPAIGN_${actionConstants.API_DATA}`:
            return {
                ...state,
                isApiLoading: false,
                apiData: action.payload,
                isApiFailed: false,
                apiError: null
            }
        case `CAMPAIGN_${actionConstants.API_ERROR}`:
            return {
                ...state,
                isApiFailed: true,
                isApiLoading: false,
                apiError: action.payload
            }

        default:
            return { ...state }
    }
}

export default campaignReducer;