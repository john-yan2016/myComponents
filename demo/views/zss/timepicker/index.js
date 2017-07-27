import React, {
	Component
} from 'react';
import {
	PropTypes
} from 'react';
import './timepicker.less';
import {
	formatNum
} from '../commonFunc';

/*
	timepicker
	input没有得到焦点 且combobox没有事件（移动或点击）时，combbox不显示；否则combobox显示

	icon（fa fa-remove）提供清除时间功能

	input输入框输入值 反映到 state中  
	notice:区分输入框输入结果与ul li点击结果
 */
/*
	根据输入确定ul>li的值
	满足8位数的时候检验
	检验规则:分隔21212,类型和数值大小是否满足要求
	满足要求就重置time,然后重置h/m/s
 */
/*
	开始进行面板的显示与消失控制
 */
/*
	不要input/ul单独事件和确定按钮 只要大div事件
	大div有操作()
 */
/*
	bug记录:
		现象:清除之后必须时分秒都选择才会出现时间
		原因:清除时将state都置零了
		解决:将显示置空即可
 */
export default class Timepicker extends Component {
	static propTypes = {
		disabled: PropTypes.bool,
		width: PropTypes.number || PropTypes.string,
		height: PropTypes.number || PropTypes.string,
		format: PropTypes.string,
		disabledHours: PropTypes.bool,
		disabledMinutes: PropTypes.bool,
		disabledSeconds: PropTypes.bool,

	};
	static defaultProps = {
		disabled: false,
		width: 200,
		height: 25,
		format: 'HH:mm:ss',
		disabledHours: false,
		disabledMinutes: false,
		disabledSeconds: false,
	}

	constructor(props) {
		super(props);
		let now = new Date();
		this.state = ({
			hour: now.getHours(),
			minute: now.getMinutes(),
			second: now.getSeconds(),
			time: getTime(now.getHours(), now.getMinutes(), now.getSeconds(), this.props.format),
			divfocus: false,
		});
		var that = this;
		window.addEventListener('click', function() {
			// console.log('listener');
			that.setState({
				divfocus: false,
			});
		}, false);
	}

	onChange(type, num) { //num:被比较的数值,type:被比较的类型(时分秒)

		// console.log('onchange blur');
		//如果传进来的是H/M/S,就重置time
		if (type == 'hour' || type == 'minute' || type == 'second') {
			const {
				hour,
				minute,
				second
			} = this.state;
			let theNewTime;
			switch (type) {
				case 'hour':
					theNewTime = getTime(num, minute, second, this.props.format);
					break;
				case 'minute':
					theNewTime = getTime(hour, num, second, this.props.format);
					break;
				case 'second':
					theNewTime = getTime(hour, minute, num, this.props.format);
					break;
				default:
					break;
			}

			this.setState({
				time: theNewTime,
				[type]: num

			});
		} else {
			this.setState({
				[type]: num
			});
		}
	}

	onInputChange = (e) => {
		const value = e.target.value;
		let hour, minute, second = this.state;
		console.log(hour, minute, second);
		switch (this.props.format.toLowerCase()) {
			case 'hh:mm':
				if (value.length == 5) {
					let arr = [value.slice(0, 2), value.slice(2, 3), value.slice(3, 5)];
					let t0 = Number(arr[0]);
					let t2 = Number(arr[2]);
					let t1 = arr[1];
					if (t0 >= 0 && t0 <= 23 && t2 >= 0 && t2 <= 59 && t1 == ':') { //检验通过
						hour = t0;
						minute = t2;
					}
				}
				break;
			case 'mm:ss':

				if (value.length == 5) {
					let arr = [value.slice(0, 2), value.slice(2, 3), value.slice(3, 5)];
					let t0 = Number(arr[0]);
					let t2 = Number(arr[2]);
					let t1 = arr[1];
					if (t0 >= 0 && t0 <= 23 && t2 >= 0 && t2 <= 59 && t1 == ':') { //检验通过
						minute = t0;
						second = t2;
					}
				}
				break;
			default:
				if (value.length == 8) {
					let arr = [value.slice(0, 2), value.slice(2, 3), value.slice(3, 5), value.slice(5, 6), value.slice(6, 8)];
					let t0 = Number(arr[0]);
					let t2 = Number(arr[2]);
					let t4 = Number(arr[4]);
					let t1 = arr[1];
					let t3 = arr[3];
					if (t0 >= 0 && t0 <= 23 && t2 >= 0 && t2 <= 59 && t4 >= 0 && t4 <= 59 && t1 == ':' && t3 == ':') { //检验通过
						hour = t0;
						minute = t2;
						second = t4;
					}
				}
				break;
		}
		this.setState({
			time: value,
			hour: hour,
			minute: minute,
			second: second,
		});
	}

	onClickLi(type, k, e) {
		e.stopPropagation();
		this.onChange(type, k);
	}
	onDivFocus(e) {
		if (!this.props.disabled)
			this.onChange('divfocus', true);
		// console.log('div focus');
	}
	oninputfocus = (e) => {
		// console.log(e);
		e.stopPropagation();
		this.setState({
			divfocus: true,
		});
	}
	clear = (blur) => {
		if (!blur)
			this.setState({
				time: '',
			});
	}
	test = (e) => {
		// console.log(e);
		e.stopPropagation();
	}
	componentDidMount() {

	}
	render() {
		const {
			hour,
			minute,
			second,
			time,
			showBoard,
			divfocus
		} = this.state;
		const {
			disabled,
			width,
			height,
			format,
			disabledHours,
			disabledMinutes,
			disabledSeconds
		} = this.props;
		console.log('render time : ',
			time);
		let that = this;
		const canConfim = (hour != undefined && minute != undefined && second != undefined);
		let showtimes = times,
			showformat;
		showformat = format.toLowerCase();
		switch (showformat) {
			case 'hh:mm':
				showtimes = times.slice(0, 2);
				break;
			case 'mm:ss':
				showtimes = times.slice(1, 3);
				break;
			default:
				break;
		}

		function getSelects() {
			let selects = [];
			showtimes.map(function(v, k) {
				let item = [];
				for (let i = (v.value)[0]; i < (v.value)[1]; i++) {
					let isSelected, listyle = {};
					switch (v.key) {
						case 'hour':
							isSelected = hour == i;
							if (disabledHours)
								listyle = {
									cursor: 'not-Allowed',
									pointerEvents: 'none',
									color: 'rgba(0, 0, 0, 0.25)'
								};
							break;
						case 'minute':
							isSelected = minute == i;
							if (disabledMinutes)
								listyle = {
									cursor: 'not-Allowed',
									pointerEvents: 'none',
									color: 'rgba(0, 0, 0, 0.25)'
								};
							break;
						case 'second':
							isSelected = second == i;
							if (disabledSeconds)
								listyle = {
									cursor: 'not-Allowed',
									pointerEvents: 'none',
									color: 'rgba(0, 0, 0, 0.25)'
								};
							break;
						default:
							break;
					}
					item.push(<li key={i} className={isSelected?'selected':''} style={listyle} onClick={that.onClickLi.bind(that,v.key,i)}>{formatNum(i)}</li>);
				}
				selects.push(
					<div className ='select-wrap' key={v.key}>
						<ul  ref={`timepickerul${v.key}`}>
       				{item}
						</ul>
      		</div>);
			})
			return selects;
		}
		const style = {
			width: width,
			outline: 'none'
		};
		const inputtstyle = {
			height: height,
			pointerEvents: disabled ? 'none' : 'auto',
			color: disabled ? '#989898' : '',

		}
		const istyle = {
			cursor: !divfocus ? 'default' : 'pointer',
			color: disabled ? '#989898' : '',
			lineHeight: typeof(height) == 'string' ? '' : height + 'px'
		}
		return (
			<div className ='timepicker' style={style} tabIndex='100' onClick={this.test}>
       	<div className ='input-wrap'>

		<input type="text" placeholder="select time" value={time} style={inputtstyle} onChange={this.onInputChange}  onFocus={this.oninputfocus}/>

       		<i className ={!divfocus?'fa fa-clock-o':'fa fa-remove'} style={istyle}  onClick={this.clear.bind(this,!divfocus)} ></i>
      	</div>
      	{
      	!divfocus?'':
      		<div className ='combobox'>
	      	{
	      		getSelects()
	      	}
	       	{/*<button onClick={this.confirm} className={canConfim?'btn primary-btn':'btn disabled-btn'}>确定</button>*/}
	      	</div>
		}

		</div>
		)
	}
}

function getTime(hour, minute, second, format) {
	switch (format.toLowerCase()) {
		case 'hh:mm':
			if (hour != undefined && minute != undefined)
				return formatNum(hour) + ':' + formatNum(minute);
			else
				return '';
			break;
		case 'mm:ss':
			if (minute != undefined && second != undefined)
				return formatNum(minute) + ':' + formatNum(second);
			else
				return '';
			break;
		default:
			if (hour != undefined && minute != undefined && second != undefined)
				return formatNum(hour) + ':' + formatNum(minute) + ':' + formatNum(second);
			else
				return '';
			break;
	}
}
const times = [{
	key: 'hour',
	value: [0, 24]
}, {
	key: 'minute',
	value: [0, 60]
}, {
	key: 'second',
	value: [0, 60]
}];