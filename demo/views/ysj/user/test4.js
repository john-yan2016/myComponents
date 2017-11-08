import React, {
  Component
} from 'react';

export default class Highcharts extends Component {
  constructor(props) {
    super(props);
  }
  
   func1() {

            // // 如果浏览器原生支持该事件,则退出  
            // if ("onhashchange" in window.document.body) {
            //     return;
            // }

            var location = window.location,
                oldURL = location.href,
                oldHash = location.hash;
              // console.log(123);
            // 每隔100ms检测一下location.hash是否发生变化
            setInterval(function() {
                var newURL = location.href,
                    newHash = location.hash;

                // 如果hash发生了变化,且绑定了处理函数...
                if (newHash != oldHash ) {
                    // execute the handler
                    window.addEventListener('popstate', function(event) {
                        oldURL= oldURL,
                        newURL = newURL
});
                    // onhashchange({
                    //     type: "hashchange",
                    //     oldURL: oldURL,
                    //     newURL: newURL
                    // });

                    oldURL = newURL;
                    oldHash = newHash;
                    // console.log(oldURL);
                }
            }, 100);

        };

  componentDidMount() {
    var agent = navigator.userAgent.toLowerCase();

    //获取浏览器名称和版本
    var browser = { appname: 'unknown', version: 0 }
    if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(agent)) {
      browser.appname = RegExp.$1;
      browser.version = RegExp.$2;
    } else if (/version\D+(\d[\d.]*).*safari/.test(agent)) { // safari  
      browser.appname = 'safari';
      browser.version = RegExp.$2;
    }
    console.log(browser);

    //获取浏览器的操作系统平台
    var os = {
      platform: navigator.platform.toLowerCase()
    }
    console.log(os);

    var result = {
      //获取当前设备类型
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
    console.log(result);

    //获取IP和城市
    //通过外部接口实现，引入在主页index.html中

    // var URL = 'http://pv.sohu.com/cityjson';
    // fetch(URL)
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(e => {
    //     console.log("Oops, error", e)
    //   })
    console.log(returnCitySN);

    
    //获取用户访问时间，停留时间，访问路径等
    //写在最外面的组件base中
  }

           
  render() {
    return (
      <div>
        {/* <iframe src="http://localhost:9200/#/" frameborder="0" width="100%" height="800" marginheight="0" marginwidth="0">
        </iframe> */}
      		</div>

    )
  };
}
