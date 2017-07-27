import React,{Component} from 'react';

import CheckBox from './checkbox';
import CheckboxGroup from './checkbox/checkboxgroup';

const plainOptions = ['1', '2', '3','4'];
const defaultCheckedList = ['2', '3'];

export default class Plugin5 extends Component {
  constructor(props) {
    super(props);
    this.state={
      checkedList: defaultCheckedList,
    indeterminate: true,
    checkAll: false,
    }
  }
  onChange = (checkedList,i) => {
    console.log(checkedList);
    this.setState({
      checkedList,
      indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
      checkAll: checkedList.length === plainOptions.length,
    });
  }
  onCheckAllChange = (e) => {
    const checkAll =this.state.checkAll;
    console.log(e.target.checked);
    this.setState({
      checkedList: !checkAll ? plainOptions : [],
      indeterminate: false,
      checkAll: !checkAll,
    });
  }
  render() {
    return (
      <div>
        <div style={{ borderBottom: '1px solid #E9E9E9' }}>
          <CheckBox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}
          >
            Check all
          </CheckBox>
        </div>
        <br />
        <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
      </div>
    )
  };
}
