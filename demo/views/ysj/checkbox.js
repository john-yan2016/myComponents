import React, {
  Component
} from 'react';
import Checkbox from './checkbox/checkbox.js';
import CheckboxGroup from './checkbox/checkboxGroup.js';

//checkbox组
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [{
  label: 'Apple',
  value: 'Apple'
}, {
  label: 'Pear',
  value: 'Pear'
}, {
  label: 'Orange',
  value: 'Orange'
}];
const optionsWithDisabled = [{
  label: 'Apple',
  value: 'Apple'
}, {
  label: 'Pear',
  value: 'Pear'
}, {
  label: 'Orange',
  value: 'Orange',
  disabled: true
}, ];
const defaultCheckedList = ['Orange'];

export default class Highcharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      disabled: false,
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
    }
  }
  onChange0(e) {
      console.log(`checked = ${e.target.checked}`);
    }
    //受控checkbox
  toggleChecked() {
    // console.log(this.state.checked)
    this.setState({
      checked: !this.state.checked
    })
  }
  toggleDisable() {
    this.setState({
      disabled: !this.state.disabled
    })
  }
  onChange1(e) {
      if (!this.state.disabled) {
        console.log(`checked = ${e.target.checked}`);
        this.setState({
          checked: !this.state.checked
        })
      }
    }
    //checkbox组
  onChange2(e, checkedList) {
      console.log(checkedList)
    }
    //全选
  onChange3(e, checkedList) {
    console.log(checkedList)
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }
  onCheckAllChange = (e) => {
    const checkAll = this.state.checkAll;
    // console.log(e.target.checked);
    this.setState({
      checkedList: !checkAll ? plainOptions : [],
      indeterminate: false,
      checkAll: !checkAll,
    });
  }
  render() {
    // console.log(this.state.checked)
    // console.log(this.state.checkedList)
    //受控checkbox
    const label = `${this.state.checked ? 'Checked' : 'Unchecked'}-${this.state.disabled ? 'Disabled' : 'Enabled'}`;

    return (
      <div>
      <h2>演示</h2>
      <br />
      <div style={{marginBottom:'20px'}}>
        <p style={{marginBottom:'10px'}}>简单的 checkbox</p>
         <Checkbox onChange={this.onChange0.bind(this)}>A</Checkbox>   
      </div>
            <div style={{marginBottom:'20px'}}>
            <p style={{marginBottom:'10px'}}>不可用checkbox</p>
            <Checkbox disabled={true}>A</Checkbox> 
            </div>
            <div style={{marginBottom:'20px'}}>
            <p style={{marginBottom:'10px'}}>受控checkbox</p>
            <Checkbox checked={this.state.checked}
            disabled={this.state.disabled} onChange={this.onChange1.bind(this)}>{label}</Checkbox>
            <p>
            <br />
            <button className="ant-btn ant-btn-primary ant-btn-sm" onClick={this.toggleChecked.bind(this)}> {!this.state.checked ? 'Check' : 'Uncheck'}</button>
            <button className="ant-btn ant-btn-primary ant-btn-sm" onClick={this.toggleDisable.bind(this)}>{!this.state.disabled ? 'Disable' : 'Enable'}</button>
            </p>
            </div>
            <div style={{marginBottom:'20px'}}>
            <p style={{marginBottom:'10px'}}>Checkbox 组</p>
            <CheckboxGroup options={plainOptions} defaultValue={['Apple']} onChange={this.onChange2.bind(this)}/>
            <br />
            <CheckboxGroup options={options} defaultValue={['Pear']} onChange={this.onChange2.bind(this)}/>
            <br />
            <CheckboxGroup options={optionsWithDisabled} defaultValue={['Apple']} onChange={this.onChange2.bind(this)}/>
            </div>
            <div style={{marginBottom:'20px'}}>
            <p style={{marginBottom:'10px'}}>全选</p>
            <Checkbox indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}>全选</Checkbox> 
            <br />
            <br />
            <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange3.bind(this)}/>
            </div>
            <br />
            <br />
            <div>
              <h2>配置说明</h2>
              <br />
              <p>1.简单的 checkbox</p>
              <br />
              <code >
                  <pre>
                    {"<Checkbox>A</Checkbox>"}
                  </pre>
              </code>
                    <br />
              <p>2.不可用checkbox，disabled属性等于true</p>
              <br />
              <code >
                  <pre>
                    {"<Checkbox disabled={true}>A</Checkbox>"}
                   </pre>
              </code>
              <br />
              <p>3.受控checkbox,加入checked，disabled属性和onChange函数</p>
              <br />
              <code >
                  <pre>
                    {"<Checkbox checked={this.state.checked} disabled={this.state.disabled} onChange={this.onChange.bind(this)}>{label}</Checkbox>"}
                  </pre>
              </code>
              <br />
              <p>具体代码结构如下：</p>
              <br />
              <code >
                  <pre>
                    {'toggleChecked() {'}<br/>
                    {'   this.setState({'}<br/>
                    {'   checked: !this.state.checked'}<br/>
                    {'   })'}<br/>
                    {'}'}<br/>
                    <br/>
                    {'toggleDisable() {'}<br/>
                    {'    this.setState({'}<br/>
                    {'    disabled: !this.state.disabled'}<br/>
                    {'  })'}<br/>
                    {'}'}<br/>
                    <br/>
                    {'onChange() {'}<br/>
                    {'  if (!this.state.disabled) {'}<br/>
                    {'    this.setState({'}<br/>
                    {'       checked: !this.state.checked'}<br/>
                    {'     })'}<br/>
                    {'  }'}<br/>
                    {'}'}
                  </pre>
              </code>
              <br />
              <p>点击联动的按钮代码如下：</p>
              <br />
              <code >
                  <pre>
                  {"<button onClick={this.toggleChecked.bind(this)}> {!this.state.checked ? 'Check' : 'Uncheck'}</button>"}
                  {"<button onClick={this.toggleDisable.bind(this)}>{!this.state.disabled ? 'Disable' : 'Enable'}</button>"}
                  </pre>
              </code>
              <br />
              <p>4. Checkbox 组,加入options和defaultValue属性，options定义了各个checkbox的标签和值,options里面加一个disabled: true属性可定义哪个不可选， defaultValue定义了哪些checkbox默认选中</p>
              <br />
              <code >
                  <pre>
                    {"<CheckboxGroup options={plainOptions} defaultValue={['Apple']} />"}
                    <br />
                    {"<CheckboxGroup options={options} defaultValue={['Pear']} />"}
                    <br />
                    {"<CheckboxGroup options={optionsWithDisabled} defaultValue={['Apple']} />"}
                  </pre>
              </code>
              <br />
              <p>5. 全选，设置 indeterminate 状态，只负责样式控制</p>
              <br />
              <code >
                  <pre>
                  <br />           
                  {"<Checkbox indeterminate={this.state.indeterminate} onChange={this.onCheckAllChange} checked={this.state.checkAll}>全选</Checkbox>"}
                  <br />
                  {"<CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange3.bind(this)}/>"}
                  </pre>
              </code>
              <br />
            </div>
          </div>

    )
  };
}