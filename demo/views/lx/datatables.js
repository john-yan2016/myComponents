import React,{Component} from 'react';
import Dialog from './modal/dialog';

export default class Datatables extends Component {

  constructor (props) {
    super (props) ;
    this.state = {
      visible: false,
    }
  }

  handleClick = (e) => {
    this.setState({
      visible: true,
    });

  }

  handleOk = () => {
    this.setState({
      visible: false
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  }


  render() {

    const code1 = " <Dialog title={'新建标题'} onOk = {this.handleOk} onCancel = {this.handleCancel} visible ={this.state.visible} footer = {[<button key={}></button>,]}><div>内容1</div><div>内容2</div><div>内容3</div></Dialog>";

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
        <section>
          <h3>用法</h3>

          <button onClick={this.handleClick}>弹窗</button>
          <Dialog title={"新建标题"} onOk={this.handleOk} onCancel={this.handleCancel} visible={this.state.visible} >
            <div>内容1</div>
            <div>内容2</div>
            <div>内容3</div>
          </Dialog>
          <code>
            <p>1.{code1}</p>
            <p>2.footer是一个arr,里面放button标签一定要加key属性</p>
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
	['title', '标题', 'string|ReactNode', '无'],
	['visible', '对话框是否可见', 'boolean', '无'],
	['closable',	'是否显示右上角的关闭按钮',	'boolean'	,'true'],
  ['onOk',	'点击确定回调',	'function',	'无'],
  ['onCancel',	'点击右上角叉或取消按钮的回调',	'function(e)'	,'无'],
  ['width',	'宽度'	,'string|number',	'520'],
  ['footer',	'底部内容','string|ReactNode'	,'确定取消按钮'],
  ['okText'	,'确认按钮文字',	'string',	'确定'],
  ['cancelText'	,'取消按钮文字',	'string',	'取消'],

];
