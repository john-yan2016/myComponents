import React, {
  Component
} from 'react';
import Checkbox from './index';

export default class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
  }
  onChange(e,j){
    let arr=[];
    const value = this.props.value;
    const options = this.props.options;
    const _value = options[j]['label']||options[j];
    if(value.includes(_value)){
      for(let i = 0 ;i<value.length ;i++){
        value[i] !== _value ? arr.push(value[i]) : null;
      }
    }else{
      arr = [...value,_value];
    }
    let {
      onChange
    } = this.props;
    if (onChange !== undefined) {
      onChange(arr,j);
    }
  }
  render() {
    return (
      <div className='ant-checkbox-group'>
        {
              this.props.options.map((i, j) => (
                <Checkbox key={j}
                  disabled={this.props.options[j].disabled?true:false}
                  checked={(this.props.value).includes(this.props.options[j].label?
                    this.props.options[j].label:
                    this.props.options[j])}
                  onChange={(e)=>this.onChange(e,j)}
                >
                  {this.props.options[j].value?this.props.options[j].value:this.props.options[j]}
                </Checkbox>))
        }
      </div>
    )
  }
}
Array.prototype.removeByValue = function(val) {
  for(var i=0; i<this.length; i++) {
    if(this[i] == val) {
      this.splice(i, 1);
      break;
    }
  }
}