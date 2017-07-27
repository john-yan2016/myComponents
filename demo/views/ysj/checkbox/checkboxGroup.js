import React, {
	Component
} from 'react';
import Checkbox from './checkbox.js';

export default class CheckboxGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checkedList: this.props.defaultValue
		}
	}

	onChange(e, i) {
		const value = this.props.value;
		const options = this.props.options;
		let arr = [];
		if (value.indexOf(i) !== -1) {
			for (let j = 0; j < value.length; j++) {
				if (value[j] !== i) {
					arr.push(value[j])
				}
			}
		} else {
			arr = [...value, i];
		}
		// console.log(arr)
		let {
			onChange
		} = this.props
		onChange(e, arr);
	}

	onChange2(e, i) {
		const value = this.state.checkedList;
		const options = this.props.options;
		let arr = []
		if (i.label !== undefined) {
			if (value.indexOf(i.label) !== -1) {
				for (let j = 0; j < value.length; j++) {
					if (value[j] !== i.label) {
						arr.push(value[j])
					}
				}
			} else {
				arr = [...value, i.label];
			}
			this.setState({
				checkedList: arr
			})
		} else {
			if (value.indexOf(i) !== -1) {
				for (let j = 0; j < value.length; j++) {
					if (value[j] !== i) {
						arr.push(value[j])
					}
				}
			} else {
				arr = [...value, i];
			}
			this.setState({
				checkedList: arr
			})
		}
		let {
			onChange
		} = this.props
		onChange(e, arr);

	}

	render() {
		// console.log(this.props.value)
		if (this.props.value) {
			return (
				<div className='ant-checkbox-group'>
				{
			this.props.options.map((i, j) => (
				<Checkbox key={j} disabled={i.disabled?true:false} checked={(this.props.value).indexOf(i.label||i)!==-1} onChange={(e)=>{this.onChange(e,i)}}>{i.label?i.label:i}</Checkbox>
				)
			)

				}
     		</div>
			)
		} else if (this.props.defaultValue) {
			return (
				<div className='ant-checkbox-group'>
				{
			this.props.options.map((i, j) => (
				<Checkbox key={j} disabled={i.disabled?true:false} checked={this.state.checkedList.indexOf(i.label||i)!==-1} onChange={(e)=>{this.onChange2(e,i)}}>{i.label?i.label:i}</Checkbox>
				)
			)

				}
     		</div>
			)
		}


	};
}