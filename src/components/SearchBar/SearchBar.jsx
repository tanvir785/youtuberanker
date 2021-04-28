import React , {useState} from 'react';
import { useDispatch} from 'react-redux';
import { Form,Button, Input } from 'semantic-ui-react';
import { CallApi} from '../../features/actions/callAPI';
import '../SearchBar/SearchBar.scss';
import { useHistory, Redirect } from 'react-router';

const initialState = {
    URL: '',
    youtubeVideo : {}
}


export default function SearchBar({videoDetail}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [URL, setURL] = useState('')

    if (videoDetail.redirectTo) {

        history.push("/youtuberank")
    }
    const updateValue = (e) => {
        setURL (e.target.value)
    }
    const handleSubmit = () =>{
        const id = URL.substring(URL.indexOf("=")+1);
        dispatch(CallApi(id))      
    }

    return (
        <>
            <Form className ='searchMenu'>
                <Input value = {URL} type='text' placeholder='Search...' action>
                    <input name='searchfield' onChange={updateValue} value = {URL}/>
                    <Button onClick={handleSubmit} > Search</Button>
                </Input>
            </Form>
        </>
    )
}
