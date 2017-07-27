import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class HaddleLine extends Component {
  constructor (props) {
    super(props);

    this.state = {
      moveOk: false,
      downOk: false,
      left: 0,
      top: 0,
      text: this.props.defaultValue || this.props.min
    }

  }
  static defaultProps = {
    defaultValue: 0,
    min: 0
  }

  componentWillReceiveProps (props) {
    if (props.vertical) {
      if (props.rHeight != this.props.rHeight) {
        this.setState({
          top: props.defaultValue - props.min < 0 ? 0 : (props.defaultValue - props.min) * parseFloat(props.rHeight) / (props.max - props.min)
        })
        this.props.changeTheight(props.defaultValue - props.min < 0 ? 0 : (props.defaultValue-props.min) * parseFloat(props.rHeight) / (props.max - props.min));
      }

      if (props.tT != this.props.tT) {
        this.setState({
          top: props.tT,
          text: props.max == 1 ? parseFloat(props.tT / parseFloat(this.props.rHeight)).toFixed(2) : parseInt(props.tT / parseFloat(this.props.rHeight) * (props.max - props.min) + props.min)
        });
      }
    }else{
      if(props.rWidth != this.props.rWidth){
        this.setState({
          left: props.defaultValue-props.min < 0 ? 0: (props.defaultValue - props.min) * parseFloat(props.rWidth) / (props.max - props.min)
        })
        this.props.changeTwidth(props.defaultValue - props.min < 0 ? 0: (props.defaultValue - props.min) * parseFloat(props.rWidth) / (props.max - props.min));
      }

      if(props.tL != this.props.tL){
        this.setState({
          left: props.tL,
          text: props.max == 1 ? parseFloat(props.tL / parseFloat(this.props.rWidth)).toFixed(2) : parseInt(props.tL / parseFloat(this.props.rWidth) * (props.max - props.min) + props.min)
        });
      }
    }
  }

  onMouseDown = (e) => {
    if(this.props.vertical){
      let y = parseFloat(e.pageY) - this.props.rTop - 45;
      let n = this.props.max == 1 ? parseFloat((y) / parseFloat(this.props.rHeight)) <= 0 ? 0 : parseFloat((y) / parseFloat(this.props.rHeight)).toFixed(2) : parseInt((y) / parseFloat(this.props.rHeight) * (this.props.max - this.props.min) + this.props.min);
      this.setState({top: y,text: n});

      this.props.changeTheight(y);
    }else {
      let x = parseFloat(e.pageX) - this.props.rLeft;
      let n = this.props.max == 1 ? parseFloat( (x) / parseFloat(this.props.rWidth) ) <= 0? 0: parseFloat( (x) / parseFloat(this.props.rWidth) ).toFixed(2): parseInt((x) / parseFloat(this.props.rWidth) * (this.props.max - this.props.min) + this.props.min);
      this.setState({left: x,text: n});
      this.props.changeTwidth(x);
    }

    window.document.addEventListener('mousemove',this.onMouseMove,false);
    window.document.addEventListener('mouseup',this.onMouseUp,false);
    this.setState({downOk: true});
    e.preventDefault();
    return false;
  }

  onMouseMove = (e) => {
    if(this.props.vertical) {
      let y = parseFloat(e.pageY) - this.props.rTop - 45;

      if (y >= parseFloat(this.props.rHeight)) {
        y = parseFloat(this.props.rHeight);
      }else if (y<=0) {
        y = 0;
      }
      let n = this.props.max == 1 ? parseFloat((y) / parseFloat(this.props.rHeight)) <=0 ? 0 : parseFloat((y) / parseFloat(this.props.rHeight)).toFixed(2) : parseInt((y) / parseFloat(this.props.rHeight) * (this.props.max-this.props.min) + this.props.min);
      this.setState({top: y,text: n});

      this.props.changeTheight(y);
    }else{
      let x = parseFloat(e.pageX) - this.props.rLeft;

      if(x >= parseFloat(this.props.rWidth)){
        x = parseFloat(this.props.rWidth);
      }else if(x <= 0) {
        x = 0;
      }
      let n = this.props.max == 1? parseFloat((x) / parseFloat(this.props.rWidth)) <= 0 ? 0 : parseFloat((x) / parseFloat(this.props.rWidth)).toFixed(2) : parseInt((x) / parseFloat(this.props.rWidth) * (this.props.max-this.props.min) + this.props.min);
      this.setState({left: x,text: n});

      this.props.changeTwidth(x);
    }


  }

  onMouseUp = (e)=> {
    window.document.removeEventListener('mousemove', this.onMouseMove, false);
    window.document.removeEventListener('mouseup', this.onMouseUp, false);
    this.setState({downOk: false});
  }

  onMouseEnter = (e) => {
    this.setState({moveOk: true});
  }

  onMouseLeave= (e) =>{
    this.setState({moveOk: false});
  }

  render(){
    let {
      prefixClsr,
      rLeft,
      rWidth,
      disabled,
      rTop,
      rHeight,
      vertical
    } = this.props;

    let {
      moveOk,
      downOk,
      left,
      text,
      top
    } = this.state;

    let classStr;
    if (moveOk || downOk) {
      classStr = "tooltip  tooltip-placement-top tooltip-zoom-enter";
    }else if (moveOk == false && downOk == false) {
      classStr = "tooltip  tooltip-placement-top tooltip-hidden tooltip-zoom-leave";
    }

    return (
      <div onMouseDown={disabled ? null : this.onMouseDown.bind(this)}>
        <div className={prefixClsr + "-handle " + prefixClsr + "-handle-2 " + prefixClsr + "-handle-upper"} style={vertical ? {top: top} : {left: left}} onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}></div>

        <div className={classStr} ref="tooltip" style={vertical ? {top: top - 55} : {left: left, top: -55} }>
          <div className="tooltip-content">
            <div className="tooltip-arrow"></div>
            <div className="tooltip-inner">
              <span>{text}</span>
            </div>
          </div>
          </div>
        </div>
    );
  }
}
