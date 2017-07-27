import * as React from 'react';
import './checkbox.less';

export default class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked,
      disabled: this.props.disabled
    }
  }
  static defaultProps = {
    indeterminate:false
  }
  handleClick(e) {
    this.setState({
      checked: !this.state.checked
    })

    let {
      onChange
    } = this.props;
    if (onChange !== undefined) {
      onChange(e);
    }
  }

  render() {
    let {
      onChange,indeterminate
    } = this.props;
    // console.log(this.props.checked)
    //console.log(this.props.disabled)
    if(indeterminate){
      var className = 'ant-checkbox-indeterminate ant-checkbox';
    }else{
      if (this.props.disabled) {
        var className = this.state.checked ? 'ant-checkbox ant-checkbox-checked ant-checkbox-disabled' : 'ant-checkbox ant-checkbox-disabled';
      } else {
        if (onChange !== undefined) {
          var className = this.props.checked ? 'ant-checkbox ant-checkbox-checked' : 'ant-checkbox';
        } else {
          var className = this.state.checked ? 'ant-checkbox ant-checkbox-checked' : 'ant-checkbox';
        }
      }
    }

    return (
      <label className='ant-checkbox-wrapper'>
        <span className={className} onChange={this.handleClick.bind(this)}>
        <span className='ant-checkbox-inner'></span>
            <input className='ant-checkbox-input' type='checkbox' disabled={this.props.disabled} />
            </span>
            <span>{this.props.children}</span>
          </label>
    )
  };
}