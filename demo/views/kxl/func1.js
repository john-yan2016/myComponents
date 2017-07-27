import React, { Component } from 'react';
import Tabs, { Tab } from './tabs/index';
import './fun.css';
export default class Func1 extends Component {
    render() {

        return (
            <div className="krow">
            <h1>标签页使用示例</h1>
              <div className="kcol-8">
                <h3>Demo1</h3>
                <hr/>
                  <Tabs type="card" activekey="1">
                    <Tab label="tab1cvxdf" key="1" >
                        我是第11帧
                        <div>XXXX</div>
                        <a>链接</a>
                    </Tab>
                    <Tab label="tab2d" key="2">
                        我是第22帧
                    </Tab>
                    <Tab label={<span><i className="fa fa-search"></i>搜索</span>} key="3">
                    xxxx333
                    </Tab>
                  </Tabs>
                <h3>Demo2</h3>
                <hr/>
                  <Tabs type="line" activekey="3">
                      <Tab label="tab1" key="1">
                          我是第111帧
                          <div>XXXX</div>
                          <a>链接</a>
                      </Tab>
                      <Tab label="tab2" key="2" disabled={true}>
                          我是第22帧
                      </Tab>
                      <Tab label={<span><i className="fa fa-search"></i>搜索</span>} key="3">
                          xx33xx
                      </Tab>
                      <Tab label="tab2" key="4" >
                          我是第44帧
                      </Tab>
                  </Tabs>
                <div className="description">
                    <h3>示例说明</h3>
                    <section>
                    代码：
                        <code >
                         <pre>
                          {'<Tabs type="card" activekey="1">'}<br/>
                          {'  <Tab label="tab1" key="1" >'}<br/>
                          {'    我是第一帧'}<br/>
                          {'    <div>XXXX</div>'}<br/>
                          {'      <a>链接</a>'}<br/>
                          {'  </Tab>'}<br/>
                          {'  <Tab label="tab2" key="2">'}<br/>
                          {'    我是第二帧'}<br/>
                          {'  </Tab>'}<br/>
                          {'  <Tab label={<span><i className="fa fa-search"></i>搜索</span>} key="3">'}<br/>
                          {'    xxxx'}<br/>
                          { ' </Tab>'}<br/>
                          {'</Tabs>'}
                         </pre>
                        </code>
                    </section>
                </div>
              </div>
              <div className="kcol-8">
                <div className="description">
                    <h3>参数配置说明</h3>
                    <section>
                      <dl>Tabs组件参数如下：
                        <dt>type（控制标签页基本样式）</dt>
                          <dd>line:（默认类型）基本线条性</dd>
                          <dd>card:卡片型</dd>
                        <dt>activekey (当前默认显示标签页)</dt>
                          <dd>对应Tabs内部key值:（默认类型）基本线条性</dd>
                        <dt>className (可添加自定义样式名)</dt>

                      </dl>
                      <dl>Tab Tabs内部构成，参数如下：
                        <dt>label（标签标题）</dt>
                          <dd>可以是文字也可以是闭合的标签对象</dd>
                        <dt>key (key值唯一)</dt>
                          <dd>key值唯一，与activekey相对应</dd>
                        <dt>disabled (确定标签是否可操作)</dt>
                          <dd>true,false   默认为false</dd>
                      </dl>
                    </section>
                    <section>
                        <code >
                         <pre>
                          {'<Tabs type="card" activekey="1">'}<br/>
                          {'  <Tab label="tab1" key="1" disabled={true}>'}<br/>
                          {'   标签页内容  '}<br/>
                          {'  </Tab>  '}<br/>
                          {'    ....  '}<br/>
                          {'</Tabs>'}
                         </pre>
                        </code>
                    </section>
                </div>
              </div>

            </div>
        )
    };
}
