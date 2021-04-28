
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