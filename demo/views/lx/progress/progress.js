import React,{Component,PropTypes} from 'react';
import './progress.less';

const statusColorMap = {
  normal: '#108ee9',
  exception: '#ff5500',
  success: '#87d068',
}

class Circle extends Component{
  constructor(props){
    super(props);
  }

  static defaultProps = {
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
  };

  render(){
    let {
      percent,
      strokeWidth,
      trailWidth,
      strokeColor,
      trailColor
    } = this.props;

    return (
      <div>
        <svg  viewBox="0 0 100 100">
          <path  d="M 50,50 m 0,-47
            a 47,47 0 1 1 0,94
            a 47,47 0 1 1 0,-94"
            stroke={trailColor}
            strokeWidth={strokeWidth}
            fillOpacity="0"
          ></path>
          <path  d="M 50,50 m 0,-47
            a 47,47 0 1 1 0,94
            a 47,47 0 1 1 0,-94"
            strokeLinecap="round"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fillOpacity="0"
            style={{
              strokeDasharray: "295.31px, 295.31px",
              strokeDashoffset: 295.31 - percent / 10 * (29.531) + "px",
              transition: "stroke-dashoffset 0.3s ease 0s, stroke 0.3s ease"
            }}></path>
        </svg>
      </div>
    )
  }
}


export default class Progress extends Component{

  constructor (props) {
    super (props) ;
  }

  static propTypes = {
    status: PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    type: PropTypes.oneOf(['line', 'circle']),
    showInfo: PropTypes.bool,
    percent: PropTypes.number,
    width: PropTypes.number,
    strokeWidth: PropTypes.number,
    format: PropTypes.func,
  };

  static defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'progress',
  };

  render() {
    let {
      prefixCls,
      className,
      percent = 0,
      status,
      format,
      type,
      strokeWidth,
      width,
      showInfo,
      trailColor
    } = this.props;

    let progressStatus = parseInt(percent.toString()) >= 100 && !('status' in this.props) ?
      'success': (status || 'normal');

    let progressInfo;
    let progress;

    const textFormatter = format || (percentNumber => percentNumber + "%");

    if (showInfo) {
      let text;
      // const iconType = type === 'circle' ? '' : '-circle';
      if (progressStatus === 'exception') {
        text = format ? textFormatter(percent) : '×';
      } else if (progressStatus === 'success') {
        text = format ? textFormatter(percent) : '√';
      } else {
        text = textFormatter(percent);
      }
      progressInfo = <span className={prefixCls+"-text"}>{text}</span>;
    }

    if (type === 'line') {
      let percentStyle = {
        width: percent+"%",
        height: strokeWidth || 10,
      };

      progress = (
        <div>
          <div className={prefixCls + "-outer"}>
            <div className={prefixCls + "-inner"}>
              <div className={prefixCls + "-bg"} style={percentStyle} />
            </div>
          </div>
          {progressInfo}
        </div>
      );
    } else if (type === 'circle') {
      const circleSize = width || 132;
      const circleStyle = {
        width: circleSize,
        height: circleSize,
        fontSize: circleSize * 0.16 + 6,
      };
      const circleWidth = strokeWidth || 6;
      progress = (
        <div className={prefixCls + "-inner"} style={ circleStyle }>
          <Circle
            percent={percent}
            strokeWidth={circleWidth}
            trailWidth={circleWidth}
            strokeColor={statusColorMap[progressStatus]}
            trailColor={trailColor}
          />
          {progressInfo}
        </div>
      );
    }


    return (
      <div className={prefixCls + " " + prefixCls + "-" + type + " " + prefixCls + "-status-" + progressStatus + " " + prefixCls + "-show-info"}>
        {progress}
      </div>
    )
  };
}
