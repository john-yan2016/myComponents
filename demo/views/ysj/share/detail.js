import React, {
  Component,
} from 'react';
import 'social-share.js/dist/css/share.min.css';
import 'social-share.js/dist/js/social-share.min.js';
import './test6.less';

export default class Highcharts extends Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <div className="test6">
        <div>1313123132</div>
        <div>1313123132</div>
        <div>1313123132</div>
        <div>1313123132</div>
        <div>1313123132</div>
        <div>1313123132</div>
        <div>1313123132</div>
        <div>1313123132</div>
        <div>1313123132</div>
        <div>1313123132</div>
        <div className="social-share" data-initialized="true" data-wechat-qrcode-title="请打开微信扫一扫" 
        data-weibo-title="分享到微博" data-qq-title="分享到QQ">
          <span>分享到：</span>
          <a href="#" className="social-share-icon icon-wechat"></a>
          <a href="#" className="social-share-icon icon-weibo"></a>
          <a href="#" className="social-share-icon icon-qq"></a>
        </div>
        {/* <div className="bdsharebuttonbox"><a href="#" className="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
        <a href="#" className="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
        <a href="#" className="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a></div> */}
     </div>

    )
  };
}
