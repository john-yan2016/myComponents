import React, { Component } from 'react';
import Dropdown, { Menuli } from './dropdown/index';

export default class Func3 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        //目前仅考虑两级，下拉菜单不适合层级过多
        const menulist = [{
            title: '菜单1',
            url: '##',
            submenu: [
                { title: '菜单11', url: '##' },
                { title: '菜单12', url: '##' },
                { title: '菜单13', url: '##' },
                { title: '菜单14', url: '##' }
            ]
        }, {
            title: '菜单2',
            url: '##',
            submenu: [
                { title: '菜单21', url: '##' }
            ]
        }, {
            title: '菜单3',
            url: '##',
        }];
        return (
            <div className="krow">
              <h1>Dropdown使用示例</h1>
              <div className="kcol-6">
              <br/>
                <div className="kcol-6">
                  <Dropdown triggerBar={<a>点击这里<i className="fa fa-angle-down"></i></a>}
                   trigger="click">
                    <Menuli menulist={menulist}/>
                  </Dropdown>
                </div>
                <div className="kcol-6">
                  <Dropdown triggerBar={<a>disabled示例<i className="fa fa-angle-down"></i></a>}
                   trigger="click" disabled>
                    <Menuli menulist={menulist}/>
                  </Dropdown>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="kcol-6">
                &nbsp;
                </div>
                <div className="kcol-6">
                  <Dropdown triggerBar={<button>鼠标滑过这里<i className="fa fa-angle-down"></i></button>}
                   trigger="hover"  >
                    <Menuli menulist={menulist}/>
                  </Dropdown>
                </div>

                <br/><br/>
                <div className="description">
                  <h3>示例说明</h3>
                  <section>
                    <code>
                    <pre>

                {'    const menulist = [{'}<br/>
                {'        title: "菜单1",'}<br/>
                {'        url: "",'}<br/>
                {'        submenu: ['}<br/>
                {'            { title: "单11", url: "##" },'}<br/>
                {'            { title: "菜单12", url: "##" },'}<br/>
                {'            { title: "菜单13", url: "##" },'}<br/>
                {'            { title: "菜单14", url: "##" }'}<br/>
                {'                 ]'}<br/>
                {'        }, {'}<br/>
                {'        title: "菜单2",'}<br/>
                {'        url: "",'}<br/>
                {'        submenu: ['}<br/>
                {'            { title: "菜单21", url: "##" }'}<br/>
                {'          ]'}<br/>
                {'        }, {'}<br/>
                {'        title: "菜单3",'}<br/>
                {'        url: "##",'}<br/>
                {'     }];'}<br/>

                {'render(){'}<br/>
                {'return '}<br/>
                {'  <div>'}<br/>
                {'  <Dropdown triggerBar={<a>点击这里<i className="fa fa-angle-down"></i></a>}'}<br/>
                {'   trigger="click">'}<br/>
                {'    <Menuli menulist={menulist}/>'}<br/>
                {'  </Dropdown>'}<br/>
                {'</div>'} 
                    </pre>
                    </code>
                                  <br/>
                    <code>
                      <pre>
                  {'  <Dropdown triggerBar={<button>鼠标滑过这里<i className="fa fa-angle-down"></i></button>}'}<br/>
                  {'   trigger="hover">'}<br/>
                  {'    <Menuli menulist={menulist}/>'}<br/>
                  {'  </Dropdown>'}<br/>
                      </pre>
                    </code>
                  </section>
                </div>
              </div>
              <div className="kcol-6">
                <div className="description">
                <h3>参数配置说明</h3>
                    <section>
                      <dl>Dropdown组件参数如下：
                        <h4>必选参数</h4>
                        <dt>triggerBar</dt>
                          <dd>定义菜单组触发标签：一个闭合完整的标签对象</dd>
                        <h4>可选参数</h4>
                        <dt>trigger 上传返回结果</dt>
                            <dd>类型：string</dd>
                            <dd>可选项为hover,click,默认值click</dd>
                        <dt>disabled (是否禁用)</dt>
                        <dd>类型：Boolean,默认为false</dd>

                      </dl>
                      <br/>
                      <dl>Menuli组件参数如下：
                        <h4>必选参数</h4>
                        <dt>menulist</dt>
                          <dd>类型：对象数组(参照左侧代码)</dd>
                          <dd>对象包含：title,url,submenu</dd>
                      </dl>
                    </section>
                    <p>
                       <b>此处Dropdown内部的内容可以使用Menuli组件生成，也可以是自定义的菜单列表。</b>
                    </p>
                </div>
              </div>
          </div>
        )
    };
}
