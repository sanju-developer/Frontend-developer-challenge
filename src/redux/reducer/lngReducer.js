import { actionConstants } from '../actionConstants/actionConstants'

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
const language =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    navigator.userLanguage

// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0]

const initialState = {
    language: languageWithoutRegionCode ?? 'en'
}

const langReducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case `LANG_${actionConstants.API_DATA}`:
            return {
                ...state,
                data: action.payload
            }

        default:
            return { ...state }
    }
}

export default langReducer;