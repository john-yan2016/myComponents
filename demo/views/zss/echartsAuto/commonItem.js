import React, {
	Component
} from 'react';
import {
	PropTypes
} from 'react';
import './echartsauto.less';


export default class CommonItem extends Component {
	static propTypes = {


	};
	static defaultProps = {

	}

	constructor(props) {
		super(props);
		this.state = ({
			title: '',
			legend: '',
			tooltip: '',
			toolbox: '',
		});
	}

	render() {
		const {
			title,
			legend,
			tooltip,
			toolbox,
		} = this.state;
		const {

		} = this.props;
		let that = this;

		return (
			<div className ='common-item'> 
				<h2>一 . 公共项目</h2>
				<div className ='title'>1 . title：</div>
				<div className ='operate'>
					<span>是否显示</span>
					<select></select>
				</div>

		</div>
		)
	}
}