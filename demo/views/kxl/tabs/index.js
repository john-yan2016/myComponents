import React, { Component } from 'react';
import './index.less';
/*

tabs可控参数：
type:line,card;//控制表现形式和样式
activekey//默认显示叶签
================
标签tab可控参数：
key:标识唯一内容;
title:标签标题;
disabled:true/false;

*/

export default class Tabs extends Component {

    constructor(props) {
        super(props);
        let classname = this.props.className || ''; //自定义样式名
        this.state = {
            activekey: !!this.props.activekey ? this.props.activekey : 1,
            cname: 'ktabs ' + ((!!this.props.type) ? this.props.type : 'line') + ' ' + classname,
        };
    }
    handleChange(index) {
        this.setState({
            activekey: index,
        });
        setTimeout(() => {
            let ob = this.refs.active;
            if (this.state.cname.indexOf('line') > 0) {
                ob.style.transition = 0.25 + 's';
                ob.style.transform = 'translateX(-100%)';
            }
        }, 1);
    }
    componentDidMount() {
        this.sameWidth();
        let ob = this.refs.active;
        if (this.state.cname.indexOf('line') > 0) {
            ob.style.transition = 0.25 + 's';
            ob.style.transform = 'translateX(-100%)';
        }

    }

    componentWillReceiveProps(nextProps) {
        //设置标题标签等宽
        this.sameWidth();

    }
    sameWidth() {
        let ul = this.refs.tabUl;
        let lis = this.refs.tabUl.children || [];
        let max = 0;
        // console.log(lis instanceof Array);
        let liarr = Array.prototype.slice.call(lis, 0);
        (liarr.length > 0) && liarr.map((s, j) => {
            max = s.offsetWidth > max ? s.offsetWidth : max;
        }); //获取最大宽度
        (liarr.length > 0) && liarr.map(function(s, j) {
            s.style.minWidth = max + 'px';
        });
    }
    render() {
        let that = this;
        const { activekey, cname } = this.state;
        let children = this.props.children;

        const tabcontent = [];
        children.map(function(s) {
            let item = s.props;
            tabcontent[s.key] = {
                key: s.key,
                disabled: item.disabled ? item.disabled : false,
                label: item.label,
                content: item.children,
            };
        });

        let content = tabcontent[activekey];

        return (
            <div className={this.state.cname}>
       <ul className="tab-title" ref="tabUl">
          {
            Object.keys(tabcontent).map(function(s, j) {
              let item=tabcontent[s];
              let cn = "";
              if (item.disabled) {
                  cn = "disabled";
              }
              if ((!item.disabled) && that.state.activekey === item.key) {
                  cn = "active";
              }
              let label=item.label;
              return <li key={item.key} className={cn} 
                        onClick={(!item.disabled)&&that.handleChange.bind(that,item.key)}>
                       <span>{(!!label.props)?label.props.children:label}</span>
              </li>;
          })

        }

            </ul>
            <div className="tab-content">
             <div ref="active" key={content.key} className="active">{content.content}
             </div>
            </div>
      </div>
        )
    };
}
export class Tab extends Component {
    renefaultder() {
        <div className="tab-content">
    </div>
    }
}
