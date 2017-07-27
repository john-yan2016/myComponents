import React, {
	Component
} from 'react';
import Timeline, {
	Item
} from './Timeline';
import './page.less';
/*

从功能上：时间轴:垂直
	layout:居右分布 (和左右分布)


扩展：是否显示更多或者自定义末尾节点。
待定:水平？？感觉没有必要，不方便！

*/

export default class UI3 extends Component {

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
		const dotstyle = {
			width: '30px',
			padding: '0 20px',
			left: '-30px',
			top: '-10px',
			fontSize: '30px',
			color: 'lightgreen'
		};
		return (
			<div  className ='describe'>
        <h1>Timeline</h1>

        <h2>使用</h2>

        <section>
          <h3>1.基本用法</h3>
          <h3></h3>
          <Timeline>
          	<Item>Create a services site 2015-09-01</Item>
				    <Item>Solve initial network problems 2015-09-01</Item>
				    <Item>Technical testing 2015-09-01</Item>
				    <Item>Network problems being solved 2015-09-01</Item>
          </Timeline>         
          <code>
		        <p>{code1}</p>
		        <pre>{code2}</pre>
		        <pre>{code3}</pre>
		        <pre>{code4}</pre>
		        <pre>{code5}</pre>
		        <p>{code6}</p>
					</code>
        </section>

				<section>
          <h3>2.自定义时间节点的 样式/颜色/样式</h3>
          <h3></h3>
          <Timeline>
          	<Item>Create a services site 2015-09-01</Item>
				    <Item type='fa fa-user' style={{fontSize:'16px'}} color='red'>Solve initial network problems 2015-09-01</Item>
				    <Item>Technical testing 2015-09-01</Item>
				    <Item>Network problems being solved 2015-09-01</Item>
          </Timeline>         
          <code>
		        <p>{code1}</p>
		        <pre>{code2}</pre>
		        <pre>{code32}</pre>
		        <pre>{code4}</pre>
		        <pre>{code5}</pre>
		        <p>{code6}</p>
					</code>
        </section>


        <section>
          <h3>3.自定义节点元素</h3>
      
          <Timeline>
          	<Item dot={ <span className="fa fa-user" style={dotstyle}/> }>Create a services site 2015-09-01</Item>
				    <Item>Solve initial network problems 2015-09-01</Item>
				    <Item>Technical testing 2015-09-01</Item>
				    <Item>Network problems being solved 2015-09-01</Item>
          </Timeline>         
          <code>
		        <p>{code1}</p>
		        <pre>{code22}</pre>
		        <pre>{code3}</pre>
		        <pre>{code4}</pre>
		        <pre>{code5}</pre>
		        <p>{code6}</p>
					</code>
        </section>

				<section>
          <h3>4.尾部增加幽灵节点</h3>
      
          <Timeline showNum={2}>
          	<Item>Create a services site 2015-09-01</Item>
				    <Item>Solve initial network problems 2015-09-01</Item>
				    <Item>Technical testing 2015-09-01</Item>
				    <Item>Network problems being solved 2015-09-01</Item>
          </Timeline>         
          <code>
		        <p>{code12}</p>
		        <pre>{code2}</pre>
		        <pre>{code3}</pre>
		        <pre>{code4}</pre>
		        <pre>{code5}</pre>
		        <p>{code6}</p>
					</code>
        </section>

				<section>
          <h3>5.尾部自定义幽灵节点</h3>
      
          <Timeline pending={<a href="#">my node</a>}  showNum={3}>
          	<Item>Create a services site 2015-09-01</Item>
				    <Item>Solve initial network problems 2015-09-01</Item>
				    <Item>Technical testing 2015-09-01</Item>
				    <Item>Network problems being solved 2015-09-01</Item>
          </Timeline>         
          <code>
		        <p>{code13}</p>
		        <pre>{code2}</pre>
		        <pre>{code3}</pre>
		        <pre>{code4}</pre>
		        <pre>{code5}</pre>
		        <p>{code6}</p>
					</code>
        </section>

				<section>
          <h3>6.时间轴左右布局</h3>
      
          <Timeline evenCols={true} evenColsStart='left' showNum={2}>
          	<Item>Create a services site 2015-09-01</Item>
				    <Item>Solve initial network problems 2015-09-01</Item>
				    <Item>Technical testing 2015-09-01</Item>
				    <Item>Network problems being solved 2015-09-01</Item>
          </Timeline>         
          <code>
		        <p>{code14}</p>
		        <pre>{code2}</pre>
		        <pre>{code3}</pre>
		        <pre>{code4}</pre>
		        <pre>{code5}</pre>
		        <p>{code6}</p>
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


const trs1 = [
	['type', '改变节点的形状', 'string', 'fa fa-circle-o'],
	['style', '改变节点的样式', 'string', '--'],
	['color', '改变节点的颜色', 'string', '#108ee9'],
	['dot', '自定义的节点元素', 'object', '--'],
	['showNum', '末尾添加幽灵节点时,默认显示的节点个数', 'number', '3'],
	['pending', '自定义末尾添加的幽灵节点', 'object', '<a onClick={this.seemore}>See more</a>'],
	['evenCols', '是否需要左右布局', 'bool', 'false'],
	['evenColsStart', 'evenCols为true时,左右布局开始的位置', 'string', 'right("left可填")'],

];


const code1 = "<Timeline>";
const code2 = "<Item >Create a services site 2015-09-01</Item>";
const code3 = "<Item>Solve initial network problems 2015-09-01</Item>";
const code4 = "<Item>Technical testing 2015-09-01</Item>";
const code5 = "<Item>Network problems being solved 2015-09-01</Item>";
const code6 = "</Timeline>";
const code32 = "<Item type='fa fa-user' style={{fontSize:'16px'}} color='red'>Solve initial network problems 2015-09-01</Item>";
const code22 = '<Item dot={<span className="fa fa-user" style={dotstyle} />}>Create a services site 2015-09-01</Item>';
const code12 = "<Timeline showNum={2}>";
const code13 = '<Timeline pending={<a href="#">my node</a>}>';
const code14 = "<Timeline evenCols={true} evenColsStart='left' showNum={2}>";