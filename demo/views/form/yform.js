import React,{Component} from 'react';

import './form.less';

import drag from './drag.min';

export default class Yform extends Component {

	constructor(props){
    super(props);
    this.state=({
    	
    });
  };

  componentDidMount=()=>{
    drag.init();
  };
  componentWillUnmount=()=>{
    drag.distroy();
  };


  render() {

    return (
      <div>
      	<form className="y-form">
          <h2>表单测试页面--将左边list拖动到右边</h2>
          <div className="y-row">
            <div className="form-left">
              <ul className="draglist">
                <li>test1</li>
                <li>test2</li>
                <li>test3</li>
                <li>test4</li>
                <li>test5</li>
                <li>test6</li>
                <li>test7</li>
                <li>test8</li>
              </ul>
            </div>
            <div className="form-right">
              <div className="droplist">
                <span>条件1:</span>
                <div className="drop">
                  <span>111<i>x</i></span>
                  <span>222<i>x</i></span>
                </div>
              </div>
              <div className="droplist">
                <span>条件2:</span>
                <div className="drop">
                  
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  };
}
