import React,{Component} from 'react';
import {connect} from 'react-redux';
import {
    TobbarWrapper,
    TobbarBotton,
} from './style'

class Tobbar extends Component{
    
    render(){
        console.log(this.props.tab)
        const {tab} = this.props;
        return(
            <TobbarWrapper>
                {
                    
                    tab.map((item,index)=>{
                        return <TobbarBotton key={index} >{item.ico}</TobbarBotton>
                     })
                }
      
               
            </TobbarWrapper>
        )
    }
}

const mapState = (state)=>{
    return{
        tab:state.tobbar.get('tab')     
    }
}

const getState = (state)=>{
    return{

    }
}

export default connect(mapState,getState)(Tobbar);