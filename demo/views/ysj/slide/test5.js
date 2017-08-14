import React, {
  Component,
} from 'react';
import {Icon} from 'antd';
import './test5.less';  

export default class Highcharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: ['Jleft','Jcenter','Jright'],
    };
  }
    //左右滑动函数
    slideLeft = () => {
      let {index} = this.state;
      let array = index;
      let end = array.pop();
      array.unshift(end);
      // console.log(array);
      this.setState({
        index: array,
      });
      document.getElementsByClassName('Jleft')[0].style.zIndex='1';
      document.getElementsByClassName('Jcenter')[0].style.zIndex='2';
      document.getElementsByClassName('Jright')[0].style.zIndex='3';
  }
    slideRight = () => {
      let {index} = this.state;
      let array = index;
      let start = array.shift();
      array.push(start);
      // console.log(array);
      this.setState({
        index: array,
      });
      document.getElementsByClassName('Jleft')[0].style.zIndex='3';
      document.getElementsByClassName('Jcenter')[0].style.zIndex='2';
      document.getElementsByClassName('Jright')[0].style.zIndex='1';
  }

           
  render() {
    let that = this;
    let { index } = that.state;
    return (
      <div className="test5">
        <div className="social-share" data-wechat-qrcode-title="请打开微信扫一扫" 
        data-weibo-title="分享到微博" data-qq-title="分享到QQ"
        data-sites="qq, weibo,wechat">
        </div>
        <div className="card1">
        <div className={'contentBody '+index[0]}>
          <h1 className="title"><Icon type="left" onClick={that.slideLeft} />热门数据
          <Icon type="right" onClick={that.slideRight} /></h1>
          <div className="body">
              {hotData.map((m, n) => <p key={n}><span className="dot" /><span className="news"><a href="#">{m.c}</a></span><span className="label">{m.l}</span></p>)}
              <div className="more"><a href="#">MORE</a></div>
          </div>
        </div>
          <div className={'contentBody '+index[1]}>
            <h1 className="title"><Icon type="left" onClick={that.slideLeft} />最新数据
            <Icon type="right" onClick={that.slideRight} /></h1>
            <div className="body">
                {newData.map((m, n) => <p key={n}><span className="dot" /><span className="news"><a href="#">{m.c}</a></span><span className="label">{m.l}</span></p>)}
                <div className="more"><a href="#">MORE</a></div>
            </div>
        </div>
          <div className={'contentBody '+index[2]}>
            <h1 className="title"><Icon type="left" onClick={that.slideLeft} />推荐数据
            <Icon type="right" onClick={that.slideRight} /></h1>
            <div className="body">
                {recData.map((m, n) => <p key={n}><span className="dot" /><span className="news"><a href="#">{m.c}</a></span><span className="label">{m.l}</span></p>)}
                <div className="more"><a href="#">MORE</a></div>
            </div>
        </div>
        </div>
     </div>

    )
  };
}

const hotData = [{ c: '财政局各部门和相关单位信息', l: '200' }, { c: '咪表停车相关信息', l: '200' },
  { c: '交通运输相关政策', l: '200' }, { c: '市二级医院相关信息', l: '200' }, { c: '机动车监测', l: '200' }, { c: '1', l: '200' }];


const newData = [{ c: '财政局各部门和相关单位信息', l: '200' }, { c: '咪表停车相关信息', l: '200' },
  { c: '交通运输相关政策', l: '200' }, { c: '市二级医院相关信息', l: '200' }, { c: '机动车监测', l: '200' }, { c: '2', l: '200' }];

const recData = [{ c: '财政局各部门和相关单位信息', l: '200' }, { c: '咪表停车相关信息', l: '200' },
  { c: '交通运输相关政策', l: '200' }, { c: '市二级医院相关信息', l: '200' }, { c: '机动车监测', l: '200' }, { c: '3', l: '200' }];

