import React, {
  Component
} from 'react';
import Timepicker from './timepicker';
import './page.less';


export default class UI2 extends Component {
  callbackparent(param) {
    console.log(param);
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
      <div  className ='describe'>
        <h1>Timepicker</h1>

        <h2>使用</h2>

        <section>
          <h3>1.基本用法</h3>
          <h3>提供时分秒的基本使用,可手动输入时间,快速删除时间</h3>
          <Timepicker/>
          <code>{code1}</code>
        </section>

        <section>
          <h3>2.自定义高度与宽度</h3>
          <Timepicker  height={30} width={400}/>
          <code>{code2}</code>
        </section>

        <section>
          <h3>3.禁用</h3>
          <Timepicker disabled={true}/>
          <code>{code3}</code>
        </section>

        <section>
          <h3>4.自定义展示的时间格式</h3>
          <Timepicker format='HH:mm'/>
          <code>{code4}</code>
        </section>

        <section>
          <h3>5.不允许某一列被选择</h3>
       
          <Timepicker disabledHours={true} disabledMinutes={true} disabledSeconds={true}/>
          <code>{code5}</code>
        </section>

        <br/>
        <br/>

        <h3>问题：scroll时间固定</h3>
        <br/>
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
  ['height', 'input的高度', 'number||string', '25px'],
  ['width', 'input的宽度', 'number||string', '200px'],
  ['disabled', '禁止操作，只读状态', 'bool', "false"],
  ['format', '展示的时间格式', 'string', '"HH:mm:ss"（可选项："HH:mm"、"mm:ss"，不区分大小写）'],
  ['disabledHours', '不允许小时被操作', 'bool', "false"],
  ['disabledMinutes', '不允许分钟被操作', 'bool', "false"],
  ['disabledSeconds', '不允许秒数被操作', 'bool', "false"],

];
const code1 = "<Timepicker/>";
const code2 = "<Timepicker  height={30} width={400}/";
const code3 = "<Timepicker disabled={true}/>";
const code4 = "<Timepicker format='HH:mm'/>";
const code5 = '<Timepicker disabledHours={true} disabledMinutes={true} disabledSeconds={true}/>';