import React, {
  Component
} from 'react';
import Radio from './radio/radio.js';
import RadioGroup from './radio/radioGroup.js';

export default class Highcharts extends Component {

  onChange(e, id) {
    console.log('radio checked', '第',
      id + 1, '个');
  }
  render() {
    return (
      <div>
			<h2>演示</h2>
			<br />
			<div style={{marginBottom:'20px'}}>
				<p style={{marginBottom:'10px'}}>普通单选框</p>
        		<Radio>A</Radio>
        		</div>
        		<div style={{marginBottom:'20px'}}>
        		<p style={{marginBottom:'10px'}}>不可用单选框</p>
        		<Radio option='disabled'>A</Radio>
        		</div>
        		<div style={{marginBottom:'20px'}}>
        		<p style={{marginBottom:'10px'}}>互斥的单选框组</p>
        		<RadioGroup option='3' onChange={this.onChange.bind(this)}>A,B,C</RadioGroup>
        		</div>
        		<div style={{marginBottom:'20px'}}>
        		<p style={{marginBottom:'10px'}}>垂直的 RadioGroup单选框组</p>
        		<RadioGroup option='3' style2 onChange={this.onChange.bind(this)}>A,B,C</RadioGroup>
        		</div>
        		<div style={{marginBottom:'20px'}}>
        		<p style={{marginBottom:'10px'}}>按钮单选框组</p>
        		<RadioGroup option='3' option2='btn' onChange={this.onChange.bind(this)}>A,B,C</RadioGroup>
        		<br />
        		<br />
        		<RadioGroup option='4' option2='btn' option3='1,2' onChange={this.onChange.bind(this)}>A,B,C,D</RadioGroup>
        		</div>
        		<br />
        		<br />
        		<div>
        			<h2>配置说明</h2>
        			<br />
        			<p>1.普通单选框，无属性配置,单选框文字说明内容填在组件中间</p>
        			<br />
        			<code >
                         <pre>
                          {"<Radio>A</Radio>"}
                         </pre>
                    </code>
                    <br />
        			<p>2.不可用单选框，加属性option='disabled'</p>
        			<br />
        			<code >
                         <pre>
                          {"<Radio option='disabled'>A</Radio>"}
                         </pre>
                    </code>
                    <br />
        			<p>3.互斥的单选框组，加属性option='3'，数字自定义；单选框组文字说明内容填在组件中间，各个单选框说明文字间以逗号隔开</p>
        			<br />
        			<code >
                         <pre>
                          {"<RadioGroup option='3'>A,B,C</RadioGroup>"}
                         </pre>
                    </code>
                    <br />
                    <p>4.垂直的 RadioGroup单选框组，加属性style2</p>
        			<br />
        			<code >
                         <pre>
                          {"<RadioGroup option='3' style2>A,B,C</RadioGroup>"}
                         </pre>
                    </code>
                    <br />
                    <p>5.按钮样式单选框组,加属性option2='btn'</p>
        			<br />
        			<code >
                         <pre>
                          {"<RadioGroup option='3' option2='btn'>A,B,C</RadioGroup>"}
                         </pre>
                    </code>
                    <br />
                    <p>6.按钮样式单选框组某一项不可用,加属性option3='1,2'，数字自定义</p>
                    <br />
        			<code >
                         <pre>
                          {"<RadioGroup option='4' option2='btn' option3='1,2'>A,B,C,D</RadioGroup>"}
                         </pre>
                    </code>
        		</div>
      		</div>

    )
  };
}