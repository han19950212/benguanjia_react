import {combineReducers} from 'redux';
import Tobbar from '../common/tobbar/store/reducer';
import Home from '../page/home/store/reducer'
export default combineReducers({
    tobbar:Tobbar,
    home:Home,
})