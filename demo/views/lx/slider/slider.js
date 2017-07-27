import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import HaddleLine from './haddle';
import './slider.less';

function getPoint(obj) { //获取某元素以浏览器左上角为原点的坐标
    var t = obj.offsetTop; //获取该元素对应父容器的上边距
    var l = obj.offsetLeft; //对应父容器的上边距
    //判断是否有父容器，如果存在则累加其边距
    while (obj = obj.offsetParent) {//等效 obj = obj.offsetParent;while (obj != undefined)
        t += obj.offsetTop; //叠加父容器的上边距
        l += obj.offsetLeft; //叠加父容器的左边距
    }
    return {left:l,top:t};
}

const hasClass = (target,cname) => {
  return target.className.match(new RegExp('(\\s|^)'+cname+'(\\s|$)'));
};

const addClass = (target,cname) => {
  var nameArr = cname.split(' ');
  nameArr.map( (v,k) => {
    if(!!v&&!hasClass(target,v)){
      target.className+=' '+v;
    }
  });
};

const removeClass = (target,cname) => {
  var nameArr = cname.split(' ');
  nameArr.map((v,k)=>{
    if(!!v&&hasClass(target,v)){
      // var reg=new RegExp('(\\s|^)'+v+'(\\s|$)');
      var reg=new RegExp('(\\s|^)'+v);
      target.className=target.className.replace(reg, '');
    }
  });
};

export default class Slider extends Component {

  static defaultProps = {
    prefixClsr: 'slider',
    tooltipPrefixCls: 'tooltip',
    vertical:false,
    rang:false,
  };

  static propTypes = {
    prefixClsr: PropTypes.string,
    tipTransitionName: PropTypes.string,
    range: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    marks: PropTypes.number,
    dots: PropTypes.bool,
    value: PropTypes.number,
    // defaultValue: PropTypes.array||PropTypes.number,
    included: PropTypes.bool,
    disabled: PropTypes.bool,
    vertical: PropTypes.bool,
    tipFormatter: ((value: number) => React.ReactNode),
  };



  constructor(props){
    super(props);
    this.state = {
      rLeft:0,
      rWidth:0,
      tWidth1:0,
      tWidth2:0,
      tL1:0,
      tL2:0,
      rTop:0,
      rHeight:0,
      tHeight1:0,
      tHeight2:0,
      tT1:0,
      tT2:0,
      hT:0,
    }
    this.changeTwidth = this.changeTwidth.bind(this);
    this.changeTwidth2 = this.changeTwidth2.bind(this);
    this.changeTheight = this.changeTheight.bind(this);
    this.changeTheight2 = this.changeTheight2.bind(this);

  };

  changeTwidth = (x) =>{
    this.setState({
      tWidth1: x,
    });
  }

  changeTwidth2 = (x) =>{
    this.setState({
      tWidth2: x,
    });
  }

  changeTheight = (y) =>{
    this.setState({
      tHeight1: y,
    });
  }

  changeTheight2 = (y) =>{
    this.setState({
      tHeight2: y,
    });
  }

  componentDidMount(){
    if(this.props.vertical){
      this.setState({
        rTop: getPoint(this.refs["rail"]).top,
        rHeight: this.refs["rail"].offsetHeight
      });
    }else{
      this.setState({
        rLeft: getPoint(this.refs["rail"]).left,
        rWidth: this.refs["rail"].offsetWidth
      });
    }
  }

  Click= (e) =>{
    if(this.props.vertical){
      let oT = parseFloat(e.pageY) - this.state.rTop - 45
      if(this.props.range){
        if(Math.abs(oT - this.state.tHeight1) < Math.abs(oT - this.state.tHeight2)){
          this.setState({tHeight1: oT,tT1: oT});

        }else{
          this.setState({tHeight2: oT,tT2: oT});
        }
      }else{
          this.setState({tHeight1: oT,tT1: oT});
      }
    }else{
      let oL = parseFloat(e.pageX) - this.state.rLeft;
      if(this.props.range){
        if(Math.abs(oL - this.state.tWidth1) < Math.abs(oL - this.state.tWidth2)){
          this.setState({tWidth1: oL,tL1: oL});

        }else{
          this.setState({tWidth2: oL,tL2: oL});
        }
      }else{
          this.setState({tWidth1: oL,tL1: oL});
      }
    }
  }

  render() {
    let {
      tL1,
      tL2,
      tT1,
      tT2,
      rTop,
      rLeft,
      rWidth,
      tWidth,
      tWidth1,
      tWidth2,
      rHeight,
      tHeight,
      tHeight1,
      tHeight2,
		} = this.state;

    let {
			range,
      min,
      max,
      step,
      marks,
      dots,
      value,
      defaultValue,
      disabled,
      vertical,
      prefixClsr
		} = this.props;

		let that = this;
    let tW;
    let tL;
    let tH;
    let tT;
    let slider;

    if(tWidth1-tWidth2 < 0){
       tW = tWidth2 - tWidth1;
       tL = tWidth1;
    }else{
       tW = tWidth1-tWidth2;
       tL = tWidth2;
    }

    if(tHeight1-tHeight2 < 0){
       tH = tHeight2 - tHeight1;
       tT = tHeight1;
    }else{
       tH = tHeight1 - tHeight2;
       tT = tHeight2;
    }


    min = min?min:0;
    max = max?max:100;

    if(range){
        slider = [
          <HaddleLine
            key={1}
            tL={tL1}
            tT={tT1}
            min={min}
            max={max}
            rTop={rTop}
            rLeft={rLeft}
            rWidth={rWidth}
            rHeight={rHeight}
            disabled={disabled}
            vertical={vertical}
            prefixClsr={prefixClsr}
            changeTwidth={this.changeTwidth}
            changeTheight={this.changeTheight}
            defaultValue={defaultValue && (defaultValue[0] || defaultValue)}
          />,
          <HaddleLine
            key={2}
            tL={tL2}
            tT={tT2}
            min={min}
            max={max}
            rTop={rTop}
            rLeft={rLeft}
            rWidth={rWidth}
            rHeight={rHeight}
            vertical={vertical}
            disabled={disabled}
            prefixClsr={prefixClsr}
            changeTwidth={this.changeTwidth2}
            changeTheight={this.changeTheight2}
            defaultValue={defaultValue && (defaultValue[1])}
          />
        ];
    }else{
      slider =
        <HaddleLine
          tL={tL1}
          tT={tT1}
          min={min}
          max={max}
          rTop={rTop}
          rLeft={rLeft}
          rWidth={rWidth}
          rHeight={rHeight}
          disabled={disabled}
          vertical={vertical}
          prefixClsr={prefixClsr}
          changeTwidth={this.changeTwidth}
          changeTheight = {this.changeTheight}
          defaultValue={defaultValue && (defaultValue[0] || defaultValue)}
        />
    }

    let classStr2;
    if (vertical) {
      classStr2 = prefixClsr + "-vertical " + prefixClsr;
    }else if (disabled) {
      classStr2 = prefixClsr + "-disabled " + prefixClsr;
    }else{
      classStr2 = prefixClsr;
    }



    return (
      <div style={{height: vertical?300:''}} >
        <div className= {classStr2} onClick={disabled?null: this.Click.bind(this)} >
          <div className={prefixClsr + "-rail"} ref="rail"></div>
          <div className={prefixClsr + "-track " + prefixClsr + "-track-1"} style={vertical ? {height: tH, top: tT} : {width: tW,left: tL}} ></div>
          {/* <div className={prefixClsr+"-step"}></div> */}

          {slider}

          {/* <div className={prefixClsr+"-mark"}>
            <span className={prefixClsr+"-mark-text "+prefixClsr+"-mark-text-active"} >0°C</span>
            <span className={prefixClsr+"-mark-text "+prefixClsr+"-mark-text-active"} >26°C</span>
            <span className={prefixClsr+"-mark-text "+prefixClsr+"-mark-text-active"} >37°C</span>
            <span className={prefixClsr+"-mark-text "+prefixClsr+"-mark-text-active"} >
            <strong>100°C</strong>
            </span>
          </div> */}

        </div>

      </div>
    );
  }
}
