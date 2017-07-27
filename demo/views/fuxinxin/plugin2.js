import React,{Component} from 'react';

import Carousel from './carousel';

export default class Plugin2 extends Component {

  render() {
    function getTrs(trs) {
      let returnTrs = [];
      trs.map(function(v, k) {
        returnTrs.push(<tr key={k}>
           {
            v.map(function(sv, sk) {
              return <td key={sk}>{sv}</td>
            })
           }
        </tr>);
      });
      return returnTrs;
    }
    return (
      <div className="describe">
        <h2>使用</h2>
        <section>
          <h3>1.基本用法</h3>
          <Carousel>
            <div style={{background:'#eee',fontSize:150,textAlign:'center'}}>1</div>
            <div style={{background:'#ccc',fontSize:150,textAlign:'center'}}>2</div>
            <div style={{background:'#dd0',fontSize:150,textAlign:'center'}}>3</div>
            <div style={{background:'#e0e',fontSize:150,textAlign:'center'}}>4</div>
            <div style={{background:'#0ee',fontSize:150,textAlign:'center'}}>5</div>
          </Carousel>
          <code>
            <code>{'<Carousel>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#eee\'}}>1</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#ccc\'}}>2</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#dd0\'}}>3</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#e0e\'}}>4</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#0ee\'}}>5</div>'}</code>
            <code>{'</Carousel>'}</code>
          </code>
        </section>
        <section>
          <h3>2.切换效果,更改effect属性可以更改切换效果,可选"scroll","flip",IE下flip有问题</h3>
          <Carousel effect='flip'>
            <div style={{background:'#eee',fontSize:150,textAlign:'center'}}>1</div>
            <div style={{background:'#ccc',fontSize:150,textAlign:'center'}}>2</div>
            <div style={{background:'#dd0',fontSize:150,textAlign:'center'}}>3</div>
            <div style={{background:'#e0e',fontSize:150,textAlign:'center'}}>4</div>
            <div style={{background:'#0ee',fontSize:150,textAlign:'center'}}>5</div>
          </Carousel>
          <code>
            <code>{'<Carousel effect=\'flip\'>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#eee\'}}>1</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#ccc\'}}>2</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#dd0\'}}>3</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#e0e\'}}>4</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#0ee\'}}>5</div>'}</code>
            <code>{'</Carousel>'}</code>
          </code>
        </section>
        <section>
          <h3>3.自动播放,添加autoplay可以变成自动播放模式,自动模式时添加hoverstop为false时可以设置为鼠标移上去不停止切换</h3>
          <h3>更改loop为false时可以设置播放到最后一页时停止</h3>
          <Carousel autoplay={2000} hoverstop={false} loop={false}>
            <div style={{background:'#eee',fontSize:150,textAlign:'center'}}>1</div>
            <div style={{background:'#ccc',fontSize:150,textAlign:'center'}}>2</div>
            <div style={{background:'#dd0',fontSize:150,textAlign:'center'}}>3</div>
            <div style={{background:'#e0e',fontSize:150,textAlign:'center'}}>4</div>
            <div style={{background:'#0ee',fontSize:150,textAlign:'center'}}>5</div>
          </Carousel>
          <code>
            <code>{'<Carousel autoplay={2000} hoverstop={false}> loop={false}>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#eee\'}}>1</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#ccc\'}}>2</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#dd0\'}}>3</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#e0e\'}}>4</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#0ee\'}}>5</div>'}</code>
            <code>{'</Carousel>'}</code>
          </code>
        </section>
        <section>
          <h3>4.修改切换动画所需要的时间</h3>
          <Carousel duration={1000}>
            <div style={{background:'#eee',fontSize:150,textAlign:'center'}}>1</div>
            <div style={{background:'#ccc',fontSize:150,textAlign:'center'}}>2</div>
            <div style={{background:'#dd0',fontSize:150,textAlign:'center'}}>3</div>
            <div style={{background:'#e0e',fontSize:150,textAlign:'center'}}>4</div>
            <div style={{background:'#0ee',fontSize:150,textAlign:'center'}}>5</div>
          </Carousel>
          <code>
            <code>{'<Carousel duration={1000}>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#eee\'}}>1</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#ccc\'}}>2</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#dd0\'}}>3</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#e0e\'}}>4</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#0ee\'}}>5</div>'}</code>
            <code>{'</Carousel>'}</code>
          </code>
        </section>
        <section>
          <h3>5.修改切换按钮内的文字,此参数是一个函数,第一个参数是按钮序号,请注意样式,防止超出</h3>
          <Carousel controllerText={i=>(i+1)}>
            <div style={{background:'#eee',fontSize:150,textAlign:'center'}}>1</div>
            <div style={{background:'#ccc',fontSize:150,textAlign:'center'}}>2</div>
            <div style={{background:'#dd0',fontSize:150,textAlign:'center'}}>3</div>
            <div style={{background:'#e0e',fontSize:150,textAlign:'center'}}>4</div>
            <div style={{background:'#0ee',fontSize:150,textAlign:'center'}}>5</div>
          </Carousel>
          <code>
            <code>{'<Carousel controllerText={i=>(i+1)}>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#eee\'}}>1</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#ccc\'}}>2</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#dd0\'}}>3</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#e0e\'}}>4</div>'}</code>
              <code style={{textIndent:20}}>{' <div style={{background:\'#0ee\'}}>5</div>'}</code>
            <code>{'</Carousel>'}</code>
          </code>
        </section>
        <h2>API</h2>
        <table>
          <thead>
            <tr>
              <th>属性</th>
              <th>说明</th>
              <th>类型</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            {getTrs(trs1)}
          </tbody>
        </table>
      </div>
    )
  };
}
const trs1 =[
      ['className','class名','string','无'],
      ['style','css样式','object','无'],
      ['autoplay','自动切换时间间隔,0表示不自动切换,单位毫秒','number',0],
      ['loop','循环完毕是否重头开始继续','bool','true'],
      ['hoverstop','鼠标移上是否停止自动播放','bool','true'],
      ['effect','切换效果,可选["scroll","flip"]','string','scroll'],
      ['duration','切换动画持续时间,单位毫秒,必须大于零','number',300],
      ['controllerText','按钮内的文字,接收序号作为参数','function','无']
]