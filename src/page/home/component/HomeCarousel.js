import React,{Component}from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd-mobile';
import * as createAction from '../store/createAction'
import {
  CarouselBox,
} from '../style'
class HomeCarousel extends Component {
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    createAction.getSwiper();
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
  render() {
   const {data}= this.props;
    return (
      <CarouselBox size="sm">
        <Carousel
          autoplay={true}
          infinite
        
        >
          {data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {

                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </CarouselBox>
    );
  }
}
const mapState = (state) =>{
  return{
    data:state.home.get('data'),
  }
}

const setAction = (dispatch)=>{
  return{
      
  }
}
export default connect(mapState,setAction)(HomeCarousel);