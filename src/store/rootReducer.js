import {combineReducers} from 'redux';
import testReducer from '../features/sandbox/testReducer';
import youtubevideo from '../features/reducers/APIReducer';
import RedirectReducer from '../features/reducers/RedirectReducer';

const rootReducer = combineReducers({
    test: testReducer,
    youtubeVideo: youtubevideo
})

export default rootReducer;