import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './menu';
import Box from './box';
import './select.less';

const {
  PropTypes
} = React;
export default class Select extends React.Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    chosen: PropTypes.any,
    options: PropTypes.array,
    tabIndex: PropTypes.number,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
    optionHeight: PropTypes.number
  };
  static defaultProps = {
    width: 240,
    height: 36,
    options: [],
    tabIndex: -1,
    disabled: false,
    placeholder: '',
    optionHeight: 30
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: null, // index of focused option
      showMenu: false // whether show option
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleChoose = this.handleChoose.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.focusOption = this.focusOption.bind(this);
    this.moveFocusedOption = this.moveFocusedOption.bind(this);
  }

  componentDidMount() {
    this.menuDOM = ReactDOM.findDOMNode(this.refs.menu);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  };

  handleChoose(e, index) {
    stopEvent(e);
    console.log('Click');
    this.props.onChange(index);
    this.setState({
      showMenu: false
    });
  };

  handleClear(e) {
    e.stopPropagation();
    this.setState({
      showMenu: false
    });
    this.props.onChange(null);
  };

  handleBlur() {
    this.setState({
      showMenu: false
    })
  };

  handleKeyDown(e) {
    switch (e.which) {
      case 8: // Delete
        this.handleClear(e);
        break;
      case 27: // Esc
        this.setState({
          showMenu: false
        });
        break;
      case 13: // Enter
      case 32: // Space
        if (this.state.showMenu && this.state.focused !== null) {
          this.handleChoose(this.state.focused);
        } else {
          this.toggleMenu();
        }
        break;
      case 38: // Up
        this.moveFocusedOption(-1);
        break;
      case 40: // Down
        this.moveFocusedOption(1);
        break;
      default:
        return;
    }
    e.preventDefault();
  };

  moveFocusedOption(move) {

    if (!this.state.showMenu) {
      this.setState({
        showMenu: true
      });
      return;
    }
    let focused = this.state.focused;
    let length = this.props.options.length;
    focused = focused === null ? 0 : (focused + move + length) % length;
    this.focusOption(focused);
  };

  focusOption(focused) {
    console.log('Enter');
    this.setState({
      focused
    });

    let length = this.props.options.length;
    if (length > 8) {
      let height = this.props.optionHeight;
      let current = this.menuDOM.scrollTop;
      let max = Math.min((length - 8) * height, focused * height);
      let min = Math.max(0, (focused - 7) * height);

      if (current > max) {
        this.menuDOM.scrollTop = max;
      } else if (current < min) {
        this.menuDOM.scrollTop = min;
      }
    }
  };

  render() {

    const props = this.props;
    const {
      showMenu,
      focused
    } = this.state;

    const style = {
      width: props.width,
      lineHeight: props.height - 2 + 'px'
    };

    return (
      <div style={style}
        className="select"
        tabIndex={props.tabIndex}
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
      >
          <Box {...props}
            showMenu={showMenu}
            onClick={this.toggleMenu}
            handleClear={this.handleClear}
          />
          <Menu {...props}
            ref="menu"
            focused={focused}
            showMenu={showMenu}
            focusOption={this.focusOption}
            handleChoose={this.handleChoose}
          />
      </div>
    )
  }
}

function stopEvent(evt) {
  var evt = evt || window.event;
  if (evt.stopPropagation) {
    evt.stopPropagation();
  } else {
    evt.cancelBubble = true;
  }
}