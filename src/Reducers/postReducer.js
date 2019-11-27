import {FETCH_POSTS,NEW_POSTS} from '../actions/types';


const initState ={
    items:[],
    item:{}
}

export default function(state=initState,action)

{
    switch(action.type)
    {
        default: return state;
    }

}