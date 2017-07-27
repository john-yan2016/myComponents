import React,{Component} from 'react';
import Slider from './slider/slider';

export default class Tables extends Component {

  constructor (props) {
    super(props);
  };

  render() {
    const code1 = " <Slider />";
    const code2 = "<Slider range />";
    const code3 = "<Slider range defaultValue={[20,50]}/> <Slider range defaultValue={20}/>";
    const code4 = "<Slider defaultValue={50}/>";
    const code5 = "<Slider min={5} max={10} defaultValue={7} />"
    const code6 = "<Slider disabled={true}/>";
    const code7 = "<Slider vertical/>";

    function getTrs(trs) {
			let returnTrs = [];
			trs.map (function(v, k) {
				returnTrs.push(<tr key={k}>
          {
           	v.map (function(sv, sk) {
           		return <td key={sk}>{sv}</td>
           	})
          }
				</tr>);
			});
			return returnTrs;
		}

    return (
      <div className ='describe'>
        <h1>滑块</h1>
        <section style={{marginBottom:10}}>
          <h3>1.基本用法</h3>
          <Slider />
          <code>{ code1 }</code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>1.两个滑块</h3>
          <Slider range defaultValue={20} />
          <code>{code2}</code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>2.两个滑块的初始值</h3>
          <Slider range defaultValue={[20,50]}/>
          <Slider range defaultValue={20} />
          <code>{code3}</code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>3.一个滑块的初始值</h3>
          <Slider defaultValue={50} />
          <code>{code4}</code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>4.滑块的最大值和最小值</h3>
          <Slider min={5} max={10} defaultValue={7} />
          <Slider range min={5} max={10} defaultValue={7} />
          <code>
            <p>{code5}</p>
            <p>！！defaultValue的值不能超过max的值</p>
          </code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>5.disabled</h3>
          <Slider disabled={true} defaultValue={25} />
          <code>{code6}</code>
        </section>

        <section style={{marginBottom:10}}>
          <h3>5.disabled</h3>
          <div style={{marginLeft:10,float:"left"}}>
            <Slider vertical defaultValue={25} />
          </div>
          <div style={{marginLeft:10,float:"left"}}>
            <Slider range vertical defaultValue={[10,75]} />
          </div>
          <div style={{marginLeft:10,float:"left"}}>
            <Slider range vertical defaultValue={25} />
          </div>
          <code>{code7}</code>
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

    );
  }
}

const trs1 = [

	['range', '双滑块模式', 'boolean', 'false'],
	['defaultValue', '设置初始取值。当 range 为 false 时，使用 number，否则用 [number, number]', 'number|number[]', '0 or [0, 0]'],
  ['min', '最小值', 'number', '0'],
  ['max', '最大值', 'number', '100'],
  ['vertical', '垂直方向', 'boolean', 'false'],
  ['disabled', '值为 true 时，滑块为禁用状态', 'boolean', 'false'],
];
