import { CALL_YOUTUBE_API, UPDATE_URL,API_KEY, REDIRECT } from "./eventConstants";
import axios from 'axios';
import { useSelector} from 'react-redux';
import { fetchData, updateRedirect } from "../reducers/APIReducer";
import { useHistory } from "react-router";

export function CallApi (url) {
    return dispatch => {
        console.log('action' + url)
        const api_URL = 'https://www.googleapis.com/youtube/v3/videos?id='+url+'&key='+API_KEY+'&part=statistics,snippet';
        console.log("full url"+ api_URL);
        axios.get(api_URL)
        .then((response) => {
            //console.log("got response:"+  JSON.stringify(response.data));
            dispatch(fetchData(response.data))
        
            dispatch(updateRedirect(url))
            //history.push('/youtuberank')    
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export function updateURL (url) {
    console.log('action',url)
    return {
        type: UPDATE_URL,
        payload: url
    }
}

