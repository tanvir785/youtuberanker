/*import { useReducer } from 'react';
import sampleData from '../../app/api/sampleData';
import { CALL_YOUTUBE_API, UPDATE_URL } from '../actions/eventConstants';

const initialState = {
    youtubeVideo: {}
}


export default function APIReducer(state = initialState,  action ) {

    console.log("reducer "+JSON.stringify(action.payload)+" state: "+JSON.stringify(state)+ "action type "+action.type)
    switch(action.type) {
        case CALL_YOUTUBE_API: 
            return {
                ...state,
                youtubeVideo: action.payload
            }
        case UPDATE_URL: 
            return {
                ...state,
                URL: action.payload
            }
        default: return state;
    }

}
*/

import { createSlice } from '@reduxjs/toolkit'

export const APISlice = createSlice({    
    name: "youtubevideo",
    initialState: {
        youtubeVideo: null,
        redirectTo: null,
    },
    reducers: {
        fetchData: (state, action) => {
            state.youtubeVideo =  action.payload;
        },
        updateURL: (state, action) => {
            state.URL= action.payload;
        },
        updateRedirect: (state, action) => {
            console.log("updating action" + action.payload)
            state.redirectTo = action.payload;
        }
    }
})

export const { fetchData, upateURL, updateRedirect}=  APISlice.actions;

export const selectYoutubeVideo = (state) => state.youtubeVideo;

export const selectRedirect = (state) => state.redirectTo;

export default APISlice.reducer;