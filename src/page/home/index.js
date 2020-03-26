import React,{Component} from 'react';

import HomeCarousel from './component/HomeCarousel'
import { Button} from 'antd-mobile'

class Home extends Component{
    render(){
        return(
            <div>
                <HomeCarousel></HomeCarousel>
                <Button>首页</Button>
            </div>
        )
    }

    
}
export default Home;