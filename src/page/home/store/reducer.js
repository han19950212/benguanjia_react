import { fromJS } from 'immutable';
import * as constant from './constant'
const defaultState = fromJS({
    data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: 176,
})

export default (state = defaultState,action)=>{
    return state;
}