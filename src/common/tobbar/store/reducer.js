import {fromJS} from 'immutable';
import * as constant from './constant';
const defaultState = fromJS({
    tab:1,
});

export default (state= defaultState,action)=>{
    if(action.type ===constant.CLICKTABCHANGE){
        console.log(action.value)
       return state.set('tab',action.value)
    }
    return state;
}