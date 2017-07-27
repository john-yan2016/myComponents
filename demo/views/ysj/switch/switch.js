import React, {
	Component
} from 'react';
import './switch.less';

export default class Radio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: false
		}
	}

	handleClick(e) {
		if (!this.props.disabled) {
			this.setState({
				checked: !this.state.checked
			})
		}
		let {
			onChange
		} = this.props;
		if (onChange !== undefined) {
			onChange(this.state.checked);
		}
	}

	render() {
		// console.log(this.props.disabled)
		if (this.props.disabled) {
			var className = this.state.checked ? 'ant-switch ant-switch-checked ant-switch-disabled' : 'ant-switch ant-switch-disabled';
		} else {
			var className = this.state.checked ? 'ant-switch ant-switch-checked' : 'ant-switch';
			if (this.props.children !== undefined) {
				var text = this.state.checked ? this.props.children.split(',')[0] : this.props.children.split(',')[1];
			}
		}
		// console.log(this.state.disabled)
		return (
			<label>
				<span className={className} onClick={this.handleClick.bind(this)}>
				<span className='ant-switch-inner'>{text}</span>
        		</span>
        	</label>
		)
	};
}