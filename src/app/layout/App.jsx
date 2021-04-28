import './App.css';
import React from 'react';
import { Container} from 'semantic-ui-react';
import BlockHeader from '../../components/BlockHeader/BlockHeader';
import { Route } from 'react-router';
import homePage from '../../features/home/homePage';
import VideoRank from '../../features/videoRank/VideoRank';
import MostCommented from '../../features/commented/mostCommented';
import MostRated from '../../features/rated/mostRated';

import MenuBar from '../../components/MenuBar/MenuBar';
export default function App() {

  return (
    
    <Container>
      <div className ='mainPage'>
        <div className ='pageHeader'>
        <BlockHeader></BlockHeader>
        </div>
        
        <div className = 'pageMenu'>
          <MenuBar></MenuBar>
      </div>
        <Route exact path = '/' component={homePage}></Route>
        <Route exact path = '/youtuberank' component={VideoRank}></Route>
        <Route exact path = '/commented' component={MostCommented}></Route>
        <Route exact path = '/rated' component={MostRated}></Route>
      </div>
    </Container>
  );
}

