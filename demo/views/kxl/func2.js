import React, { Component } from 'react';
import Upload from './upload/index';
export default class Func2 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    onChange(files) {
        console.log("返回上传结果", files);
    }
    render() {
        const filter = {
            // type: '', //设置文件类型，简单过滤，当filter存在时此项目无效
            rFilter: /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i, //可自定义
            eInfo: { typeError: "文件格式必须为图片", sizeError: "图片大小不能超过2M" },
            maxSize: 2097152, //2M设置上传对象最大容量;
        };

        return (
            <div className="krow">
              <h1>upload使用示例</h1>
              <div className="kcol-6">
              <br/>
                <Upload
                  filter={filter}
                  onChange={this.onChange.bind(this)}
                  multiple
                  name="file1"
                  className="xxx">
                  <button>点击上传</button>
                </Upload>
                <br/>
                <Upload onChange={this.onChange.bind(this)}>
                  <div style={{padding:12,height:80,width:100,border:'1px solid #ddd'}}>
                     <i className="fa fa-plus"></i>点击上传
                  </div>
                </Upload>

                <div className="description">
                  <h3>示例说明</h3>
                  <section>
                    <code>
                    <pre>
                  {'         ...'}<br/>
                  {'      onChange(files) {'}<br/>
                  {'          console.log("返回上传结果", files);'}<br/>
                  {'      }'}<br/>
                  {'      render() {'}<br/>
                  {'         const filter = {'}<br/>
                  {'             rFilter: /^(image\/bmp|image\/gif|image\/jpeg|image\/png|image\/tiff)$/i, '}<br/>
                  {'             eInfo: { typeError: "文件格式必须为图片", sizeError: "图片大小不能超过2M" },'}<br/>
                  {'             maxSize: 2097152, //2M设置上传对象最大容量;'}<br/>
                  {'         };'}<br/>
                  {'   return <div>'}<br/>
                  {'            <Upload'}<br/>
                  {'              filter={filter}'}<br/>
                  {'              onChange={this.onChange.bind(this)}'}<br/>
                  {'              multiple'}<br/>
                  {'              name="file1"'}<br/>
                  {'              className="xxx">'}<br/>
                  {'              <button>点击上传</button>'}<br/>
                  {'            </Upload>'}<br/>
                  {'           </div>'}
                  </pre>
                    </code>
                  </section>
                </div>
              </div>
              <div className="kcol-6">
                <div className="description">
                <h3>参数配置说明</h3>
                    <section>
                      <dl>Upload组件参数如下：
                         <h4>必选参数</h4>
                         <dt>onChange 上传返回结果</dt>
                              <dd>类型：函数</dd>
                              <dd>默认返回参数为组件上传文件对象构成的数组</dd>
                          <h4>可选参数</h4>
                          <dt>filter对象-包含属性如下：</dt>
                            <dd>rFilter:正则表达式过滤文件类型</dd>
                            <dd>eInfo:添加错误提示信息</dd>
                            <dd>maxSize:设置上传文件大小</dd>
                          <dt>multiple 是否允许上传多个对象</dt>
                            <dd>默认为单个文件，拥有该属性时可允许用户按住ctrl件选择多个对象</dd>
                          <dt>className (可添加自定义样式名)</dt>
                          <dt>name上传文件参数名，默认值"file"</dt>
                      </dl>
                    </section>
                </div>
              </div>
          </div>
        )
    };
}
