import React, {
  Component,
} from 'react';
import {Form,Input, Button} from 'antd';
const FormItem = Form.Item;

class JForm extends React.Component {
  func1 = (str)=> {
    return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());  
    // console.log(str);  
  } 
  handleSubmit = (e) => {
    e.preventDefault();
    let res = this.func1(this.props.form.getFieldValue('userName'));
    this.props.form.setFieldsValue({userName:res});
  }
  render() {
    const { getFieldDecorator} = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator('userName')(
            <Input placeholder="输入字符串" />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            转换
          </Button>
        </FormItem>
      </Form>
    );
  }
}
const WrappedForm = Form.create()(JForm);

export default class Highcharts extends Component {
  constructor(props) {
    super(props);
  }     
  render() {
    return (
      <div className="test6">
        <h3>跳转到详情页分享</h3>
        <a href="#/ysj/tool6/detail" target="_blank">点击</a> 
        <br />
        <br />
        <h3>转换为首字母大写</h3>
        <WrappedForm />
     </div>

    )
  };
}
