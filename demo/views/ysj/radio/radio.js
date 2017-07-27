import React, {
	Component
} from 'react';
import './radio.less';

export default class Radio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			wrapper_className: 'ant-radio-wrapper',
			className: 'ant-radio'
		}
	}

	handleClick(e) {
		let {
			id,
			onChange
		} = this.props;

		if (this.props.onChange == undefined) {
			this.setState({
				wrapper_className: 'ant-radio-wrapper ant-radio-wrapper-checked',
				className: 'ant-radio ant-radio-checked'
			})
		} else {
			onChange(e, id);
		}
	}


	render() {
		if (this.props.option === 'disabled') {
			var className = 'ant-radio ant-radio-disabled';
		} else {
			// console.log(this.state.className);
			if (this.state.className === 'ant-radio ant-radio-checked') {
				var wrapper_className = this.state.wrapper_className;
				var className = this.state.className;
			} else {
				var wrapper_className = this.props.checked ? 'ant-radio-wrapper ant-radio-wrapper-checked' : 'ant-radio-wrapper';
				var className = this.props.checked ? 'ant-radio ant-radio-checked' : 'ant-radio';
			}
		}
		if (this.props.style) {
			var style2 = {
				display: 'block',
				height: '30px',
				lineHeight: '30px',
			};
		} else {
			var style2 = {}
		}
		// console.log(this.props)
		return (
			<label className={wrapper_className} style={style2}>
				<span className={className}>
				<span className='ant-radio-inner'></span>
        		<input className='ant-radio-input' type='radio' disabled={this.props.option} onClick={this.handleClick.bind(this)}/>
        		</span>
        		<span>{this.props.children}</span>
        	</label>
		)
	};
}