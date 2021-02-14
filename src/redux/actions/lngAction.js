import { actionConstants } from '../actionConstants/actionConstants'

export const LngAction = (value) => {
    return async dispatch => {
        dispatch({ type: `LANG_${actionConstants.API_DATA}`, payload: value })
    }
}