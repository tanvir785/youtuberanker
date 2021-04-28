import React, {useState} from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Container} from 'semantic-ui-react';
import { selectYoutubeVideo } from '../../features/reducers/APIReducer';
import {  useSelector } from 'react-redux';

export default function HomePage () {

    const videoDetail = useSelector(selectYoutubeVideo);

        return (

            <Container>
                <div className = 'pageSearch'>
                    <SearchBar videoDetail = {videoDetail}></SearchBar>
                </div>

        </Container>
        )
}