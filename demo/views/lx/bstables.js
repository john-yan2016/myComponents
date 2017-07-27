import React,{Component} from 'react';
import Progress from './progress/progress'

export default class BStables extends Component {
  constructor (props) {
    super (props) ;
    this.state = {
      percent1: 0,
      percent2: 0
    }

  }
  increase (per) {
    let percent = this.state[per] + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({[per]: percent });
  }
  decline (per) {
    let percent = this.state[per] - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({[per]: percent });
  }

  render() {

    const code1 = "<Progress />";
    const code2 = "<Progress type=line percent={10} />";
    const code3 = "<Progress type=circle percent={10} />";
    const code4 = "1.active <Progress type=line percent={20} status=active />2.exception 3.normal 4.success";
    const code5 = "<Progress type=line percent={this.state.percent} /><button onClick={this.decline.bind(this,'percent')}  >-</button><button onClick={this.increase.bind(this,'percent')} >+</button>";
    const code6 = "<Progress type=circle percent={this.state.percent} />";
    const code7 = "<Progress type=circle percent={80} width={200} strokeWidth={6} />"


    function getTrs (trs) {
			let returnTrs = [];
			trs.map(function (v, k) {
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
      <div className ='describe'>
        <h1>弹窗</h1>
        <section style={{marginBottom:10}}>
          <h3>1.基本用法</h3>
          <Progress />
          <code>{ code1 }</code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>2.模式1:直线 百分比10</h3>
          <Progress type="line" percent={10} />
          <code>{ code2 }</code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>2.模式2:圆 百分比10</h3>
          <Progress type="circle" percent={10} />
          <code>{ code3 }</code>
        </section>

        <section style={ {marginBottom:10} }>
          <h3>2.模式3:状态 百分比20</h3>
          <Progress type="line" percent={20} status="active" />
          <Progress type="line" percent={40} status="exception" />
          <Progress type="line" percent={60} status="normal" />
          <Progress type="line" percent={80} status="success" />
          <code>
            <p>{code4}</p>
            <p>状态和百分比到100成为success有冲突</p>
          </code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>2.模式4:直线动态演示 </h3>
          <Progress type="line" percent={this.state.percent1} />
          <button onClick={this.decline.bind(this,'percent1')} icon="minus" >-</button>
          <button onClick={this.increase.bind(this,'percent1')} icon="plus" >+</button>
          <code>
            {code5}
          </code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>2.模式5:圆形动态演示 </h3>
          <Progress type="circle" percent={this.state.percent2} />
          <button onClick={this.decline.bind(this,'percent2')} icon="minus" >-</button>
          <button onClick={this.increase.bind(this,'percent2')} icon="plus" >+</button>
          <code>
            {code6}
          </code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>2.模式5:圆形动态演示 </h3>
          <Progress type="circle" percent={80} width={200} strokeWidth={6} />
          <code>
            <p>{code7}</p>
            <p>width和strokeWidth同时设置会造成圆被切掉请注意</p>
          </code>
        </section>

        <section>
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
        </section>

      </div>
    )
  };
}

const trs1 = [
	['type', '类型，可选 line circle', 'string', 'line'],
	['percent', '百分比', 'number', '0'],
	['format',	'内容的模板函数',	'function(percent)'	,'percent => percent + %'],
  ['status',	'状态，可选：success exception active',	'string',	'无'],
  ['showInfo',	'是否显示进度数值',	'boolean'	,'true'],
  ['strokeWidth (type=line)',	'进度条线的宽度，单位 px'	,'number',	'10'],
  ['strokeWidth (type=circle)',	'圆形进度条线的宽度，单位是进度条画布宽度的百分比','number'	,'6'],
  ['width (type=circle)', '圆形进度条画布宽度，单位 px',	'number',	'132'],
];
