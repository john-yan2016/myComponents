import React, {
	Component
} from 'react';
import './radio.less';

export default class RadioButton extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wrappper_classname: 'ant-radio-button-wrapper',
			className: 'ant-radio-button'
		}
	}

	handleClick(e) {
		let {
			id,
			onChange
		} = this.props;

		if (this.props.onChange == undefined) {
			this.setState({
				wrappper_classname: 'ant-radio-button-wrapper-checked',
				className: 'ant-radio-button ant-radio-button-checked'
			})
		} else {
			onChange(e, id);
		}
	}


	render() {
		// console.log(this.props)
		if (this.props.disabled) {
			var wrapper_className = 'ant-radio-button-wrapper ant-radio-button-wrapper-disabled';
			var className = 'ant-radio-wrapper ant-radio-wrapper-disabled';
		} else {
			// console.log(this.state.className);
			if (this.state.className === 'ant-radio-button ant-radio-button-checked') {
				var wrapper_className = this.state.wrapper_className;
				var className = this.state.className;
			} else {
				var wrapper_className = this.props.checked ? 'ant-radio-button-wrapper ant-radio-button-wrapper-checked' : 'ant-radio-button-wrapper';
				var className = this.props.checked ? 'ant-radio-button ant-radio-button-checked' : 'ant-radio-button';
			}
		}
		return (
			<label className={wrapper_className}>
				<span className={className} >
				<span className='ant-radio-button-inner'></span>
        		<input className='ant-radio-button-input' type='radio' disabled={this.props.disabled} onClick={this.handleClick.bind(this)}/>
        		</span>
        		<span>{this.props.children}</span>
        	</label>
		)
	};
}