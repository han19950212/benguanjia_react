import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    TobbarWrapper,
    TobbarBotton,
} from './style'

class Tobbar extends Component{
    
    render(){
        return(
            <TobbarWrapper>
                <TobbarBotton>
                    <i className='iconfont'>&#xe677;</i>
                    首页
                    
                </TobbarBotton>
                <TobbarBotton>
                    <i className='iconfont'>&#xe643;</i>
                    抢单
                 </TobbarBotton>
                <TobbarBotton>
                    <i className='iconfont'>&#xe61a;</i>    
                    订单
                </TobbarBotton>
                <TobbarBotton>
                    <i className='iconfont'>&#xe639;</i>    
                    我的
                </TobbarBotton>
            </TobbarWrapper>
        )
    }
}

const mapState = (state)=>{
    return{
        
    }
}

const getState = (state)=>{
    return{

    }
}

export default connect(mapState,getState)(Tobbar);