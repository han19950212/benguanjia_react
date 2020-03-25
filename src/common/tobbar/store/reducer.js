import {fromJS} from 'immutable';
const defaultState = fromJS({
    tab:1,
    tabList:[
        {
            title:'首页',
            ico:'&#xe677;'
        },
        {
            title:'抢单',
            ico:'&#xe643;'
        },
        {
            title:'订单',
            ico:'&#xe61a;'
        },
        {
            title:'我的',
            ico:'&#xe639;'
        },
    ]
});

export default (state= defaultState,action)=>{
    return state;
}