import {combineReducers} from 'redux';
import testReducer from '../features/sandbox/testReducer';
import youtubevideo from '../features/reducers/APIReducer';

const rootReducer = combineReducers({
    test: testReducer,
    youtubeVideo: youtubevideo
})

export default rootReducer;