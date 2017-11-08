import React, {
  Component,
} from 'react';
import './test4.less';  
import {Row,Col} from 'antd';

export default class Highcharts extends Component {
  constructor(props) {
    super(props);
    // this.state = {
      
    // };
  }

//1获取浏览器名称和版本
  getBrower = ()=>{
    var agent = navigator.userAgent.toLowerCase();
    var browser = { appname: 'unknown', version: 0 }
    if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(agent)) {
      browser.appname = RegExp.$1;
      browser.version = RegExp.$2;
    } else if (/version\D+(\d[\d.]*).*safari/.test(agent)) { // safari  
      browser.appname = 'safari';
      browser.version = RegExp.$2;
    }
    return browser;
    // console.log(browser);
  }
//2获取浏览器的操作系统平台
getPlatform = ()=>{
  var os = {
    platform: navigator.platform.toLowerCase()
  }
  return os;
  // console.log(os);
}
//3获取当前设备类型
getDevice = ()=>{
  var agent = navigator.userAgent.toLowerCase();
  var result = {
    device: function () {
      if (/windows/.test(agent)) {
        return 'windows pc';
      } else if (/linux/.test(agent)) {
        return 'linux pc';
      } else if (/Mac/.test(agent)) {
        return 'mac';
      } else if (/iPhone|iPod/.test(agent)) {
        return 'iphone';
      } else if (/iPad/.test(agent)) {
        return 'ipad';
      } else if (/Android/.test(agent)) {
        return 'android';
      } else {
        return 'other';
      }
    }()
  };
  return result;
  // console.log(result);
}
//4获取IP和城市
  //通过外部接口实现，引入在主页index.html中
    // console.log(returnCitySN);
    
//5获取用户访问时间，停留时间，访问路径等
  //写在最外面的组件base中

//页面显示json函数
syntaxHighlight = (json) => {
  if (typeof json != 'string') {
      json = JSON.stringify(json, undefined, 2);
  }
  json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
      var cls = 'number';
      if (/^"/.test(match)) {
          if (/:$/.test(match)) {
              cls = 'key';
          } else {
              cls = 'string';
          }
      } else if (/true|false/.test(match)) {
          cls = 'boolean';
      } else if (/null/.test(match)) {
          cls = 'null';
      }
      return '<span class="' + cls + '">' + match + '</span>';
  });
}
  componentDidMount() {

  }

           
  render() {
    const BrowerInf = this.getBrower();
    const PlatInf = this.getPlatform();
    const DevInf = this.getDevice();

    return (
<<<<<<< HEAD
      <div>
        {/* <iframe src="http://localhost:9200/#/" frameborder="0" width="100%" height="800" marginheight="0" marginwidth="0">
        </iframe> */}
      		</div>
=======
      <div className="test4">
          <p>浏览器名称和版本:</p>
          <div dangerouslySetInnerHTML={{__html: this.syntaxHighlight(BrowerInf)}} />

          <p>浏览器的操作系统平台: </p>
          <div dangerouslySetInnerHTML={{__html: this.syntaxHighlight(PlatInf)}} />

          <p>当前设备类型: </p>
           <div dangerouslySetInnerHTML={{__html: this.syntaxHighlight(DevInf)}} />  

          <p>当前IP及对应城市: </p>     
          <div dangerouslySetInnerHTML={{__html: this.syntaxHighlight(returnCitySN)}} />  
                 
          <p>当前访问路径记录: </p>
          <div dangerouslySetInnerHTML={{__html: this.syntaxHighlight(localStorage.urlTrack)}} />
          </div>
>>>>>>> fb1aa916d271e8f15d851e6733e8dd29e509dd49

    )
  };
}