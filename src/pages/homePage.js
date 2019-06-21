import React,{Component,Fragment} from 'react';
import { Carousel} from 'antd-mobile';
import {getGoods} from '../api/index'
class homePage extends Component{
    state = {
        data: [],
        imgHeight: 176,
      }
      componentDidMount() {
    getGoods().then(res=>{
        console.log(res)
        if(res.status===0){
            this.setState({
                data:res.message.sliderlist
            })
        }
    })
      }
    render(){
      return (
        <Fragment>
        <Carousel
          autoplay
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
                123
              <img
                src={`${val.img_url}`}
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
        </Fragment>
      )
    }
  }
  export default homePage;