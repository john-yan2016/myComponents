import * as React from 'react';

import './carousel.less';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    let {
      effect,
      autoplay
    } = this.props;
    switch (effect) {
      case 'scroll':
        break;
      case 'flip':
        break;
      default:
        effect = 'scroll';
        break;
    }
    let autoplayover = autoplay == 0 ? true : false;
    this.state = {
      state: 0,
      nextState: null,
      effect,
      autoplayover
    }
  };
  static defaultProps = {
    className: '',
    style: {},
    autoplay: 0,
    loop: true,
    hoverstop: true,
    effect: 'scroll',
    duration: 300,
    controllerText: () => {}
  };
  static propTypes = {
    className: React.PropTypes.string.isRequired,
    autoplay: React.PropTypes.number.isRequired,
    style: React.PropTypes.object.isRequired,
    loop: React.PropTypes.bool.isRequired,
    hoverstop: React.PropTypes.bool.isRequired,
    effect: React.PropTypes.string.isRequired,
    duration: React.PropTypes.number.isRequired,
    controllerText: React.PropTypes.func.isRequired
  };
  handleClick(e, i) {
    const {
      duration
    } = this.props;
    if (i === this.state.state || this.timer01) {
      return;
    };
    this.setState({
      nextState: i
    });
    if (this.state.effect == 'scroll') {
      this.refs.carousel_slide.style.transition = 'left ' + duration / 1000 + 's';
      this.refs.carousel_slide.style.left = '-100%';
      this.timer01 = setTimeout(() => {
        this.setState({
          state: i,
          nextState: null
        });
        this.refs.carousel_slide.style.transition = '';
        this.refs.carousel_slide.style.left = '';
        this.timer01 = null;
      }, duration)
    } else if (this.state.effect == 'flip') {
      this.refs.carousel_slide.style.transition = duration / 1000 + 's';
      this.refs.carousel_slide.style.transform = 'rotateY(180deg)';
      this.timer01 = setTimeout(() => {
        this.setState({
          state: i,
          nextState: null
        });
        this.refs.carousel_slide.style.transition = '';
        this.refs.carousel_slide.style.transform = '';
        this.timer01 = null;
      }, duration)
    }
  };
  getButton(l, controllerText) {
    let arr = [];
    for (let i = 0; i < l; i++) {
      arr.push(
        <li key={i} 
          className={this.state.nextState==i||this.state.nextState==null&&i==this.state.state ? 'active' : ''} 
          onClick={e=>this.handleClick(e,i)}
        >
          <span>{controllerText(i)}</span>
        </li>
      )
    }
    return arr;
  };
  componentDidMount() {
    if (this.props.autoplay !== 0) {
      this.autoplay();
    }
  };
  componentWillUnmount() {
    this.timer02 && clearInterval(this.timer02);
    this.timer01 && clearTimeout(this.timer01);
  }
  autoplay() {
    var autoplay = this.props.autoplay;
    if (autoplay === 0 || this.timer02) return;
    this.timer02 = setInterval(() => {
      let {
        state
      } = this.state;
      let {
        loop,
        children
      } = this.props;
      if (loop && state == (children.length - 1)) {
        state = -1;
      } else if (!loop && state == (children.length - 1)) {
        clearInterval(this.timer02);
        this.timer02 = null;
        this.setState({
          autoplayover: true
        })
        return;
      }
      this.handleClick(null, state + 1);
    }, autoplay);
  };
  stopplay() {
    var {
      autoplay,
      hoverstop
    } = this.props;
    if (autoplay === 0 || !hoverstop) return;
    if (this.timer02) {
      clearInterval(this.timer02);
      this.timer02 = null;
    }
  }
  continueplay() {
    if (!this.props.hoverstop || this.state.autoplayover) return;
    this.autoplay();
  }
  render() {
    const l = this.props.children.length;
    const {
      state,
      nextState,
      effect
    } = this.state;
    return (
      <div className={'y-carousel'+ ' '+ this.props.className}
          style={this.props.style}
          onMouseEnter={e=>this.stopplay(e)}
          onMouseLeave={e=>this.continueplay()}
        >
          <div className={ "carousel-slide " + effect}
            ref='carousel_slide'
          >
          { this.props.children[state] }
          { nextState !== null ? this.props.children[nextState] : null }
          </div>
          <ul className='carousel-controller'>
            {this.getButton(l,this.props.controllerText)}
          </ul>
        </div>
    )
  };
}