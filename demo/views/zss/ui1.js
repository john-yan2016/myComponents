import React, {
	Component
} from 'react';
import Rate from './rate';

import './page.less';
/*
	自定义三个模式
	mode1: 无分值界限
		选中与被选中的两种状态的colors[2],iconClasses[2]
	mode2: 有分值界限
		colors[4],iconClasses[4],lowThreshold,highThreshold
		此种情况,有iconClasses.length=4,则只提供颜色改变,未提供icon改变
		被选中的icon的样子和颜色 由 value和key决定
 */
export default class UI1 extends Component {

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
			<div  className ='describe'>
        <h1>Rate评分</h1>

        <h2>数据准备</h2>
        <code>
	        <p>{tcolors2}</p>
	        <p>{tcolors4}</p>
	        <p>{ticonClasses2}</p>
	        <p>{ticonClasses4}</p>
				</code>

        <h2>使用</h2>
        <section>
	        <h3>1.基本用法</h3>
	        <Rate/>
	        <code>{code1}</code>
        </section>

        <section>
	        <h3>2.模式1:自定义选中与被选中的颜色及评分最大值</h3>
					<Rate max={7} value={7} mode='mode1' colors={colors2} iconClasses={iconClasses2}/>
	        <code>{code2}</code>
        </section>
        
        <section>
	        <h3>3.模式2:有分值界限:用不同颜色区分评分层级</h3>
					<Rate max={7} value={3} mode='mode2' lowThreshold={3} highThreshold={6} colors={colors4} iconClasses={iconClasses2}/>
	        <code>{code3}</code>
        </section>
        
        <section>      
	        <h3>4.模式2:有分值界限:用不同类型的icon和颜色区分评分层级</h3>			
					<Rate max={7} value={2} mode='mode2' lowThreshold={3} highThreshold={6} colors={colors4} iconClasses={iconClasses4}/>
	        <code>{code4}</code>
        </section>
        
        <section>
					<h3>5.只读</h3>
	        <Rate disabled={true}/>
	        <code>{code6}</code>
        </section>

        <section>
					<h3>?测试</h3>		
	        <p>notice:参数数量要达到要求,比如颜色个数,不达要求时,剩余颜色默认为黑色</p>
					<Rate max={7} value={2} mode='mode2' lowThreshold={3} highThreshold={6} colors={colors2} iconClasses={iconClasses2}/>
	        <code>{code5}</code>
        </section>

				<section>
	        <h3>6.半选</h3>
	        <Rate  value={2.5} allowHalf={true}/>
	        <code>{code7}</code>
        </section>

        <section>
	        <h3>7.辅助文字</h3>
	        <Rate  value={2} showText={true} textColor='red' texts={['及格','良好','优秀']}/>
	        <code>{code8}</code>
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
	['max', '总分', 'number', 5],
	['value', '评分', 'number', 5],
	['mode', '展现模式', 'string', 'mode1'],
	['lowThreshold', "mode='mode2'时,低分和中等分数的界限值，值本身被划分在低分中", 'number', 2],
	['highThreshold', "mode='mode2'时,高分和中等分数的界限值，值本身被划分在高分中", 'number', 4],
	['colors', "icon的颜色数组，mode='mode1'时,共有2个元素;mode='mode2'时,共有4个元素,为 3个分段及未选择时所对应的颜色", 'array', "['fa fa-star','fa fa-star-o']"],
	['iconClasses', 'icon的类名数组，同上', 'array', "['#f7ba2a','lightgray']"],
	['disabled', '禁止操作，只读状态', 'bool', "false"],
	['allowHalf', '是否允许半选', 'bool', "false"],
	['halfClass', '半选状态的icon类名', 'string', "'fa fa-star-half-o'"],
	['showText', '是否显示辅助文字', 'bool', "false"],
	['textColor', '辅助文字的颜色', 'string', "#f7ba2a"],
	['texts', '辅助文字数组', '元素个数为3的array', "--"],
];
const colors2 = ['#99A9BF', '#F7BA2A'];
const colors4 = ['#99A9BF', '#F7BA2A', '#FF9900', 'lightgray'];
const iconClasses2 = ['fa fa-battery-full', 'fa fa-battery-empty'];
const iconClasses4 = ['fa fa-battery-full', 'fa fa-battery-empty', 'fa fa-star', 'fa fa-star-o'];

const code1 = "<Rate/>";
const code2 = "<Rate max={7} value={7} mode='mode1' colors={colors2} iconClasses={iconClasses2}/>";
const code3 = "<Rate max={7} value={3} mode='mode2' lowThreshold={3} highThreshold={6} colors={colors4} iconClasses={iconClasses2}/>";
const code4 = "<Rate max={7} value={2} mode='mode2' lowThreshold={3} highThreshold={6} colors={colors4} iconClasses={iconClasses4}/>";
const code5 = "<Rate max={7} value={2} mode='mode2' lowThreshold={3} highThreshold={6} colors={colors3} iconClasses={iconClasses3}/>";
const code6 = "<Rate disabled={true}/>";
const code7 = '<Rate  value={2.5} allowHalf={true}/>';
const code8 = " <Rate  value={2} showText={true} textColor='red' texts={['及格','良好','优秀']}/>";
const tcolors2 = "const colors2 = ['#99A9BF', '#F7BA2A'];"
const tcolors4 = "const colors4 = ['#99A9BF', '#F7BA2A', '#FF9900', 'lightgray'];"
const ticonClasses2 = "const iconClasses2 = ['fa fa-battery-full', 'fa fa-battery-empty'];"
const ticonClasses4 = "iconClasses4 = ['fa fa-battery-full', 'fa fa-battery-empty', 'fa fa-star', 'fa fa-star-o'];"