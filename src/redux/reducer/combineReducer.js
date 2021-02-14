import { combineReducers } from 'redux';

import campaignReducer from './campaignReducer'
import langReducer from './lngReducer';

const rootReducer = combineReducers({
    campaigns: campaignReducer,
    lang: langReducer
});

export default rootReducer