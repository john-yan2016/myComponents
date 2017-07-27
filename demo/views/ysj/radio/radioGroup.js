import React, {
	Component
} from 'react';
import Radio from './radio.js';
import RadioButton from './radioButton.js';

export default class RadioGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			flag: 0
		}
	}

	onChange(e, id) {
		this.setState({
			flag: id
		})
		let {
			onChange
		} = this.props;
		onChange(e, id);
	}

	render() {

		let arr = [];
		for (let i = 0; i < this.props.option; i++) {
			arr.push(i)
		}
		// console.log(arr);
		return (
			<div className='ant-radio-group'>
			{
				arr.map((i,j)=>(this.props.option2 === 'btn'?<RadioButton id={j} key={j} onChange={this.onChange.bind(this)} checked={this.state.flag===j} disabled={this.props.option3!==undefined && this.props.option3.indexOf(j)!==-1}>{this.props.children.split(',')[j]}</RadioButton>:<Radio id={j} key={j} onChange={this.onChange.bind(this)} checked={this.state.flag===j} style={this.props.style2}>{this.props.children.split(',')[j]}</Radio>))
			}
     		</div>
		)
	};
}