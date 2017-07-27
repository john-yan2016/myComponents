import React,{Component} from 'react';
import Calendar from './calendar';

export default class Plugin3 extends Component {

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
            <Calendar
            defaultValue='1990-05'
             eventData={[
              { date:'2017-02-15',type: 'warning', title: 'This is warning event.' },
              { date:'2017-02-16',type: 'normal', title: 'This is warning event.' },
              { date:'2017-02-17',type: 'error', title: 'This is warning event.' },
              { date:'2017-02-19',type: 'warning', title: 'This is warning event.' },
              { date:'2017-02-19',type: 'warning', title: '2222222222222222222' }
            ]}
            />
            <code>
              {"<Calendar />"}
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
      ['defaultValue' ,'默认显示的月份,格式为"YYYY-MM",例如"2017-02"', 'string', '当前月份' ],
      ['width' ,'calendar宽度', 'string / number', '100%' ],
      ['weekText' ,'星期文字,长度只可以是7', 'array', '["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]' ],
      ['dayClick' ,'日期面板的点击事件,参数为react事件,当前日期', 'func', '无' ],
      ['eventClick' ,'事件列表点击事件,参数为react事件,当前事件信息', 'func', '无' ],
      ['eventData' ,'事件数据,形式为[{date:"2017-02-17",type:"error",title:""},{}],type可选normal/warning/error', 'array', '无' ],
]