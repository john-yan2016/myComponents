import React,{Component,PropTypes} from 'react';
import './datatable.less';

export default class Dialog extends Component {
  constructor (props) {
    super (props) ;
  }

  static defaultProps = {
    closable: false,
    cancelText: "取消",
    okText: "确定",
    width: "520px",
    visible: false,
    maskClosable: true
  }

  static propTypes = {
    onOk: PropTypes.func,
    onCancel: PropTypes.func,
    okText: PropTypes.node,
    cancelText: PropTypes.node,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    visible: PropTypes.bool,
    footer: PropTypes.node,
    title: PropTypes.node,
    closable: PropTypes.bool,
    maskClosable: PropTypes.bool
  };

  getPos = (e) => {
    let Mx = e.pageX;
    let My = e.pageY;
  }

  handleOk = () => {
    const onOk = this.props.onOk;
    if (onOk) {
      onOk();
    }
  }

  handleCancel = () =>{
    const onCancel = this.props.onCancel;
    if (onCancel) {
      onCancel();
    }
  }

  handleKey = (e) => {
    e.keyCode == 27 ? this.handleCancel() : '';
  }

  componentDidMount(){
    let dialogBox = this.refs.dialogBox;
    dialogBox.style.marginLeft = - parseFloat(dialogBox.style.width) / 2 + 'px';
  }

  componentWillReceiveProps (props) {
    let _this = this;
    if(props.visible == this.props.visible) return;
    if(props.visible){
      window.document.body.style.overflow = "hidden";
      setTimeout( () => {
        this.refs.dialogBox.style.transform = "scale(1,1)"
      },150);
      window.addEventListener('keydown', _this.handleKey, false);
      this.refs.mask.style.visibility = "visible";
      this.refs.dialog.style.visibility = "visible";
    }else{
      window.document.body.style.overflow = "auto";
      this.refs.dialogBox.style.transform = "scale(0,0)";
      window.removeEventListener('keydown', _this.handleKey, false);
      setTimeout(()=>{
        this.refs.mask.style.visibility = "hidden";
        this.refs.dialog.style.visibility = "hidden";
      },250);
    }
  }



  render() {
    let {
      okText,
      cancelText,
      footer,
      visible,
      width,
      title,
      closable,
      maskClosable
    } = this.props;

    const defaultFooter = [
      <button
        key="cancel"
        onClick={this.handleCancel}
      >
        {cancelText}
      </button>,
      <button
        key="confirm"
        // loading={confirmLoading}
        onClick={this.handleOk}
        className="btn-primary"
      >
        {okText}
      </button>,
    ];

    const defaultCancel = [
      <button
        key="cancelButton"
        className="dialog-modal-close"
        onClick = {this.handleCancel}
      >
        <span className="dialog-modal-close-x">X</span>
      </button>
    ];

    return (
      <div className="dialog-root" ref="dialog">
        <div className="dialog-modal-mask" ref="mask"></div>
        <div className="dialog-modal" ref="dialogBox" style={{width:width}}>
          <div className="dialog-modal-content">
            {closable ? '' : defaultCancel}
            <div className="dialog-modal-header">
              <div className="dialog-modal-title">{title}</div>
            </div>
            <div className="dialog-modal-body">
              {this.props.children}
            </div>
            <div className="dialog-modal-footer">
              {footer ? footer : defaultFooter}
              {/* <button onClick = {this.handleCancel}>
                <span>{this.props.cancelText}</span>
                </button>
                <button className="btn-primary" onClick = {this.handleOk}>
                <span>{this.props.okText}</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    )
  };
}
