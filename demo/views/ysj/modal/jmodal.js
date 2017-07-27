import React, {Component} from 'react';
import {Row,Col} from 'yrui';
import {Modal,Form,Input,Select,Checkbox,Button} from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

const CollectionCreateForm = Form.create()(
  (props) => {
    const {form} = props;
    const {getFieldDecorator} = form;
    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 14},
      },
    };
    const formTailLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14,offset: 6},
    };
    const children = [];
    for (let i = 10; i < 36; i++) {
      children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    function handleSelectChange(value) {
      console.log(value);
      this.props.form.setFieldsValue({
        note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
      });
    }
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    return (
        <Form layout="vertical">
          <FormItem
          {...formItemLayout}
            label="拥有者">
            {getFieldDecorator('user', {
              rules: [{ required: true, message: 'Please select user!' }]
            })(
              <Select onChange={handleSelectChange}>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
          {...formItemLayout}
          label="仓库名称">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input the title of collection!' }],
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
          {...formItemLayout}
          label="可见性">
          {getFieldDecorator('isvisiable', {
            valuePropName: 'checked',
            initialValue: false,
          })(
            <Checkbox>该仓库为私有的</Checkbox>
          )}
        </FormItem>
          <FormItem
          {...formItemLayout}
          label="仓库描述">
            {getFieldDecorator('description')(<Input type="textarea" />)}
          </FormItem>
          <FormItem
          {...formItemLayout}
          label=".gitignore">
            {getFieldDecorator('gitignore')(
              <Select placeholder="请选择ignore模板"
                mode="tags"
                onChange={handleChange}
              >
                {children}
              </Select>
            )}
          </FormItem>
          <FormItem
          {...formItemLayout}
          label="授权许可">
            {getFieldDecorator('access')(
              <Select placeholder="请选择授权许可文件"
                mode="tags"
                onChange={handleChange}
              >
                {children}
              </Select>
            )}
          </FormItem>
          <FormItem
          {...formItemLayout}
          label="自述文档">
            {getFieldDecorator('doc')(
              <Select placeholder="Default"
                mode="tags"
                onChange={handleChange}
              >
                {children}
              </Select>
            )}
          </FormItem>
          <FormItem
          {...formTailLayout}>
          {getFieldDecorator('isvisiable', {
            valuePropName: 'checked',
            initialValue: false,
          })(
            <Checkbox>使用选定的文件和模板初始化</Checkbox>
          )}
        </FormItem>
        </Form>
    );
  }
);

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
  }
  handleCancel = () => {
    this.setState({visible: false});
  }
  handleCreate = () => {
    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({visible: false});
    });
  }
  saveFormRef = (form) => {
    this.form = form;
  }
  handleClick = ()=>{
  this.setState({visible:!this.state.visible})
 }
  render() {

    return (
      <div>
       <Modal
        visible={this.state.visible}
        title="创建新的仓库"
        okText="创建仓库"
        onCancel={this.handleCancel}
        onOk={this.handleCreate}
      >
        <CollectionCreateForm
          ref={this.saveFormRef}
        />
        </Modal>
        <Button onClick={this.handleClick}>
          点击打开模态框
        </Button>
      </div>
    );
  }
}