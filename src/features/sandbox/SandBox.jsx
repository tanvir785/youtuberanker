
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Header, Grid, Container, Button } from 'semantic-ui-react';
import BlockHeader from '../../components/BlockHeader/BlockHeader';
import { CallApi } from '../actions/callAPI';
import { increment,decrement } from './testReducer';

export default function SandBox() {
    const dispatch = useDispatch();
    const d = useSelector(state => state.data);
    return(
        <Container>
            <Grid>
                <div className ='pageHeader'>
                    <BlockHeader></BlockHeader>
                </div>
                <h3>The data is: {d}</h3>
                <Button onClick={ () => dispatch(increment(20))} content ='Increment' color='green'></Button>
                <Button onClick={ () => dispatch(decrement(10))} content ='Decrement' color ='red'></Button>
                <Button onClick={ () => dispatch(CallApi('test'))} content ='Fetch Data' color='green'></Button>
            </Grid>
        </Container>
    )

}

