import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreaters from './store/actionCreate';
import {Link} from 'react-router-dom';
import {
    TobbarWrapper,
    TobbarBotton,
} from './style';

class Tobbar extends Component{
    
    render(){
       
        const {tab,clickChangeTab} = this.props;
        console.log(tab)
        return(
            <TobbarWrapper>
                 <Link className='link' to='/'>
                 <TobbarBotton onClick={()=>clickChangeTab(1)} className={tab===1?'clickIconfont ':''}>
                 <i className='iconfont'>&#xe677;</i>     
                    首页
                 </TobbarBotton>
                 </Link>
                 <Link className='link' to='/single'>
                 <TobbarBotton onClick={()=>clickChangeTab(2)} className={tab===2?'clickIconfont ':''}>
                 <i className='iconfont'>&#xe643;</i>     
                    抢单
                 </TobbarBotton>
                 </Link>
                 <Link  className='link' to='/order' >
                 <TobbarBotton onClick={()=>clickChangeTab(3)} className={tab===3?'clickIconfont ':''}>
                 <i className='iconfont'>&#xe61a;</i>     
                    订单
                 </TobbarBotton>
                 </Link>
                 <Link className='link' to='/mine'>
                 <TobbarBotton  onClick={()=>clickChangeTab(4)} className={tab===4?'clickIconfont ':''}>
                 <i className='iconfont'>&#xe639;</i>     
                    我的
                 </TobbarBotton>
                 </Link>
            </TobbarWrapper>
        )
    }
}

const mapState = (state)=>{
    return{
        tab:state.tobbar.get('tab')     
    }
}

const getState = (dispatch)=>{
    return{
        clickChangeTab(e){
            const action = actionCreaters.clickChangeTabCreate(e);
            dispatch(action);
        }
    }
}

export default connect(mapState,getState)(Tobbar);