import React, {
  Component
} from 'react';
import Switch from './switch/switch.js';

export default class Highcharts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    }

  }
  handleClick = () => {
    this.setState({
      disabled: !this.state.disabled
    })
  }
  onChange = (c) => {
    if (!this.state.disabled) {
      this.setState({
        disabled: !this.state.disabled
      })
    }
    console.log(`switch to ${!c ? '开' : '关'}`)
  }
  render() {
    // console.log(this.state.disabled)
    return (
      <div>
      <h2>演示</h2>
      <br />
      <div style={{marginBottom:'20px'}}>
        <p style={{marginBottom:'10px'}}>简单的 Switch</p>
         <Switch onChange={this.onChange}></Switch>   
      </div>
            <div style={{marginBottom:'20px'}}>
            <p style={{marginBottom:'10px'}}>不可用Switch</p>
            <Switch disabled={this.state.disabled}></Switch>
            <br />
            <button className="ant-btn ant-btn-primary ant-btn-sm" type="button" style={{marginTop:'10px'}} onClick={this.handleClick}><span>Toggle disabled</span></button>
            </div>
        <div style={{marginBottom:'20px'}}>
            <p style={{marginBottom:'10px'}}>文字和图标</p>
            <Switch onChange={this.onChange}>开,关</Switch>
            <br />
            <br />
            <Switch onChange={this.onChange}>1,0</Switch>
            <br />
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
                    {"<Switch></Switch>"}
                  </pre>
              </code>
              <br />
              <p>2.不可用Switch，disabled属性等于true</p>
              <br />
              <code >
                  <pre>
                    {"<Switch disabled={true}>A</Switch>"}
                   </pre>
              </code>
              <br />
              <br />
              <p>3.文字和图标,标签里面写开启和关闭两种状态对应的文字</p>
              <br />
              <code >
                  <pre>
                    {"<Switch>开,关</Switch>"}
                   </pre>
              </code>
              <br />
            </div>
          </div>

    )
  };
}