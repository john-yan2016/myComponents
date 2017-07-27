import React,{Component} from 'react';
import Select from './select';

export default class Plugin1 extends Component {
    constructor(props) {
        super(props);
        this.state = { chosen : 0,chosen1:0 }
    }

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
          <Select options={["第一项","第二项","第三项"]}
                  chosen={this.state.chosen}
                  onChange={i=>{this.setState({ chosen : i })}}
            />
          <code>
            <pre>{'<Select options={["第一项","第二项","第三项"]}'}</pre>
            <pre>{'    chosen={this.state.chosen}'}</pre>
            <pre>{'    onChange={i=>{this.setState({ chosen : i })}}'}</pre>
            <pre>{'>'}</pre>
          </code>
        </section>
        <section>
          <h3>{'2.禁用,单项禁用写在Option里,如:{text:"第二项",disabled:true}'}</h3>
          <Select options={["第一项",{text:"第二项",disabled:true},"第三项"]}
                  chosen={this.state.chosen1}
                  disabled
            />
          <code>
            <pre>{'<Select options={["第一项",{text:"第二项",disabled:true},"第三项"]}'}</pre>
            <pre>{'    disabled'}</pre>
            <pre>{'    chosen={this.state.chosen}'}</pre>
            <pre>{'    onChange={i=>{this.setState({ chosen : i })}}'}</pre>
            <pre>{'>'}</pre>
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
      ['width' ,'选择器的宽度', 'number' , 240 ],
      ['height' ,'选择器的高度', 'number' , 36  ],
      ['options' ,'下拉框内容' ,'array' ,'无'],
      ['chosen', '当前值序号(必填)' ,'number' , '无'],
      ['onChange', '改变事件函数(必填)' ,'func' , '无'],
      ['tabIndex', 'tabIndex', 'number' , -1 ],
      ['disabled', '是否可用' ,'bool' , 'false' ],
      ['placeholder', '没有内容时的文字' ,'string' , '无'],
      ['optionHeight' ,'选项每一行高度' , 'number' , 30  ],
]