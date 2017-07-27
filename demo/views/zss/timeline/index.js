import React, {
	Component
} from 'react';
import {
	PropTypes
} from 'react';
import './timeline.less';

/*
	传入Timelie的pending和showNum决定是否有幽灵节点
	传入Item的参数决定节点样式和内容
 */
export default class Timeline extends Component {
	static propTypes = {
		showNum: PropTypes.number,
		pending: PropTypes.object,
		evenCols: PropTypes.bool,
		evenColsStart: PropTypes.string,
	};
	static defaultProps = {
		evenCols: false,
		evenColsStart: 'right'
	}

	constructor(props) {
		super(props);
		this.state = ({
			more: false
		});
	}
	seemore = () => {
		this.setState({
			more: !this.state.more,
		})
	}
	render() {
		const {
			more
		} = this.state;
		const {
			children,
			pending,
			showNum,
			evenCols,
			evenColsStart
		} = this.props;
		let that = this;
		let startPosi = '';

		if (evenCols) {
			if (evenColsStart == 'left')
				startPosi = ' timeline-start-left';
			else
				startPosi = ' timeline-start-right';
		} else {}

		return (
			<div className ={`timeline${!!pending?' pending':''}${evenCols?' evenCols':''}${startPosi}`}>
       	{
       		!!children?children.map(function(v, k) {
       			if( !more && !!showNum || !!pending){
       				if(k+1<= (!!showNum?showNum:3) )//默认显示数量为3
       					return v;
       			}else{
       				return v;
       			}
       		}):''
       
       	}
       	{
       	(!!showNum || !!pending) ?
       	<div className ='timeline-item item'>
					<div className ={`icon fa fa-circle-o`} style={{width:'12px',left:'-5px',color:'#108ee9'}}>		
		      </div>
		      <div className ='text'>
		      {
		      	!!pending?
		      	pending
		      	:
		      	(more?<a onClick={this.seemore}>i want to fold</a>
		      	:<a onClick={this.seemore}>See more</a>)
		      }
	      	</div>

	      </div>
       	:''
       	}

      </div>
		)
	}
}


export class Item extends Component {
	static propTypes = {
		type: PropTypes.string,
		style: PropTypes.object,
		color: PropTypes.string,
		dot: PropTypes.object,

	};
	static defaultProps = {
		type: 'fa fa-circle-o',
		style: {},
		color: '#108ee9',
	}

	constructor(props) {
		super(props);
		this.state = ({

		});
	}
	componentDidMount() {

	}
	render() {
		const {

		} = this.state;
		const {
			text,
			type,
			style,
			color,
			dot,
		} = this.props;
		let that = this;

		//确定宽度位置颜色
		let istyle = style;
		const width = (istyle.width != undefined) ? istyle.width : '12px';
		istyle['width'] = width;
		let left = /px$/.test(width) ? Number(width.slice(0, width.length - 2)) / 2 : width / 2;
		//减去线宽的一半
		left -= 1;
		left = '-' + left + 'px';
		istyle['color'] = color;
		istyle['left'] = left;


		return (
			<div className ='timeline-item item'>
				{!!dot?
				<div className ={`dot`}>		
					{dot}
	      </div>
					:
				<div className ={`icon ${type}`} style={istyle}>		
	      </div>
	      }
	      <div className ='text'>
       		{this.props.children} 
	      </div>

      </div>
		)
	}

}