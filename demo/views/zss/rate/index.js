import React, {
	Component
} from 'react';
import {
	PropTypes
} from 'react';
import './rate.less';
/*
	根据评分最大值max和给定值value决定icon的状态
	icon num            : max个
	selected icon num   : value个,当key<=value时为selected
	unselected icon num : max-value个,与前一次条件相反
 */
/*
	点击icon得到icon的key值,即value值,再次重新渲染
 */
/*
	自定义三个模式
	mode1: 无分值界限
		选中与被选中的两种状态的colors[2],iconClasses[2]
	mode2: 有分值界限
		colors[4],iconClasses[4],lowThreshold,highThreshold
		此种情况,有iconClasses.length=4,则只提供颜色改变,未提供icon改变
		被选中的icon的样子和颜色 由 value和key决定
 */
/*
	控制icon的颜色
		没有区间,给一个颜色colors为string
		有区间,给三个颜色colors为array,此外,必须给定低与高的分界点
 */

function getPoint(obj) { //获取某元素以浏览器左上角为原点的坐标  
	var t = obj.offsetTop; //获取该元素对应父容器的上边距  
	var l = obj.offsetLeft; //对应父容器的上边距  
	//判断是否有父容器，如果存在则累加其边距  
	while (obj = obj.offsetParent) { //等效 obj = obj.offsetParent;while (obj != undefined)  
		t += obj.offsetTop; //叠加父容器的上边距  
		l += obj.offsetLeft; //叠加父容器的左边距  
	}
	return {
		left: l,
		top: t
	};
}
let overNum = 0;
export default class Rate extends Component {
	static propTypes = {
		max: PropTypes.number,
		value: PropTypes.number,
		mode: PropTypes.string,
		lowThreshold: PropTypes.number,
		highThreshold: PropTypes.number,
		iconClasses: PropTypes.array,
		colors: PropTypes.array,
		disabled: PropTypes.bool,
		allowHalf: PropTypes.bool,
		halfClass: PropTypes.string,
		showText: PropTypes.bool,
		textColor: PropTypes.string,
	};
	static defaultProps = {
		max: 5,
		value: 4,
		mode: 'mode1',
		lowThreshold: 2,
		highThreshold: 4,
		iconClasses: ['fa fa-star', 'fa fa-star-o'],
		colors: ['#f7ba2a', 'lightgray'],
		disabled: false,
		allowHalf: false,
		halfClass: 'fa fa-star-half-o',
		showText: false,
		textColor: '#f7ba2a',
	}

	constructor(props) {
		super(props);
		this.state = ({
			value: this.props.value,
			_value: undefined, //滑过icon时临时存储
			percent: undefined,
		});
		const {
			disabled,
		} = this.props;
	};
	onClick = (k) => {
		if (k == 'disabled')
			return;

		this.setState({
			value: this.state.percent > 0.5 ? k : k - 0.5,
			_value: this.state.percent > 0.5 ? k : k - 0.5
		});
	}
	onMouseMove = (e, k) => {
		if (k == 'disabled')
			return;

		const percent = (e.clientX - getPoint(e.currentTarget).left) / (e.currentTarget.offsetWidth); //鼠标在元素内的X坐标 除以 元素的宽度
		//判断第一次进入元素内部
		overNum++;
		if (overNum == 1) {
			this.setState({
				_value: this.state.value,
				value: percent > 0.5 ? k : k - 0.5,
				percent
			});
		} else {
			this.setState({
				value: percent > 0.5 ? k : k - 0.5,
				percent
			});
		}

	}
	onMouseOut = (k) => {
		if (k == 'disabled')
			return;
		overNum = 0;
		this.setState({
			value: this.state._value
		});
	}
	render() {
		const {
			value
		} = this.state;
		const {
			max,
			mode,
			lowThreshold,
			highThreshold,
			colors,
			iconClasses,
			disabled,
			allowHalf,
			halfClass,
			showText,
			textColor,
			texts
		} = this.props;
		let that = this;

		function getLis(max, value) {
			let lis = [];
			for (let k = 1; k <= max; k++) {
				let isSelected = (allowHalf ? (k <= value + 0.5) : k <= value);
				let className, style;
				//模式判断
				switch (mode) {
					case 'mode1':
						className = isSelected ? iconClasses[0] : iconClasses[1];
						style = {
							color: isSelected ? colors[0] : colors[1]
						};
						break;
					case 'mode2':
						let temp;
						if (isSelected) {
							//被选中,就计算key属于低中高哪个区间给颜色
							if (value <= lowThreshold)
								temp = 0;
							else if (value >= highThreshold)
								temp = 2;
							else
								temp = 1;
						} else {
							temp = 3;
						}
						style = {
							color: colors[temp]
						};
						iconClasses.length < 4 ?
							className = isSelected ? iconClasses[0] : iconClasses[1] :
							className = iconClasses[temp];
						break;
					default:
						break;
				}
				//当支持选择半星时
				if (allowHalf && k == value + 0.5) {
					className = halfClass;
				}
				lis.push(<li key={k} onClick={that.onClick.bind(that,disabled ? 'disabled' : k)} onMouseMove={e=>that.onMouseMove(e,disabled ? 'disabled' : k)} onMouseOut={that.onMouseOut.bind(that,disabled ? 'disabled' : k)} style={{cursor:disabled?'default':''}}><i className ={className} style={style}> </i></li>);
			}
			return lis;
		}

		function getText(value) {
			let text;
			if (value <= lowThreshold)
				text = texts[0];
			else if (value >= highThreshold)
				text = texts[2];
			else
				text = texts[1];
			return text;
		}
		return (
			<div className ='rate'>
       <ul>
       	{getLis(max,value)}
       	{
				showText?
       		<li style={{color:textColor,lineHeight:'28px'}}>{getText(value)}</li>

				:''
			}
       </ul>
      </div>
		)
	};
}