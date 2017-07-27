      import React, {
        Component
      } from 'react';

      import {
        Row,
        Col,
        Icon
      } from 'antd';
      import './searchdemo.css';

      function unidimensionalArray(arr) {　　
        return [].concat.apply([], arr);
      }

      export default class Test extends Component {
        // static contextTypes = {
        //  router: React.PropTypes.object
        // };
        constructor(props) {
          super(props);
          this.state = {
            mode: 'card-mode',
            selectlist: [
              [],
              [],
              []
            ],
            selected: ['全部分类', '全部企业类型', '全国'],

            multiple: false,
            expand: false,
          }
        }
        componentWillMount() {

        }
        componentDidMount() {

        }
        handleClick = (index, select) => {
          // console.log(index)
          let selectlist = this.state.selectlist;
          if (this.state.multiple && index == 2) {
            selectlist.map((i, j) => {
              if (j == index && i.indexOf(select) == -1) {
                selectlist[j].push(select)
              }
            })
          } else {
            selectlist.map((i, j) => {
              if (j == index && i.indexOf(select) == -1) {
                if (selectlist[j].length == 0) {
                  selectlist[j].push(select)
                }
              }
            })
          }

          this.setState({
              selected: unidimensionalArray(selectlist),
            })
            // console.log(this.state.selected)
        }
        closetag = (select) => {
          let selectlist = this.state.selectlist;
          // console.log(selectlist)
          selectlist.map((i, j) => {
            if (selectlist[j].indexOf(select) != -1) {
              selectlist[j].pop(select)
            }
          })
          this.setState({
            selected: unidimensionalArray(selectlist),
          })

        }
        multiple = () => {
          this.setState({
            multiple: !this.state.multiple
          })
        }
        more = () => {
          console.log(12123)
          const {
            expand
          } = this.state;
          this.setState({
            expand: !expand
          });
        }
        changeMode = (mode) => {
          this.setState({
            mode,
          });
        }
        onChange = () => {}
        render() {
          console.log(this.state.selected)
          let that = this;
          const {
            mode
          } = this.state;
          const {} = this.props;

          const expand = this.state.expand;
          const shownCount = expand ? selectdata[2].data.length : 6;
          return (

            <div>
      <div className='head'>
      <span>所有分类<Icon type="right" /></span>
      {this.state.selected.map((i,j)=>{
      return <span key={j} className='closetag'>{i}<a onClick={this.closetag.bind(this,i)}><Icon type="close" /></a></span>
      })}
      </div>
            <div className='searchform'>
      <div className='content'>
        {selectdata.map((i,j)=>{
          return <Row key={j}>
        <Col span={2}><span className='title'>{i.name}</span></Col>
          {j!=2?
            <Col span={18}>
          <ul className="clearfix">
          {i.data.map((m,n)=>{
            return <li key={n} onClick={this.handleClick.bind(this,j,m)}><a className={this.state.selected.indexOf(m)==-1?'':'selectedli'}>{m}</a></li>
          })}
          </ul>
          </Col>
          :
          <Col span={18}>
          <ul className="clearfix">
          {i.data.slice(0, shownCount).map((m,n)=>{
            return <li key={n} onClick={this.handleClick.bind(this,j,m)}><a className={this.state.selected.indexOf(m)==-1?'':'selectedli'}>{m}</a></li>
          })}
          </ul>
          </Col>
          }
          </Row>
        })}
        <div className='operation'>
        <span>
          <a onClick={this.more.bind(this)}>{expand ?'收起':'更多'}<Icon  type={expand ? 'up' : 'down'} /></a>
          </span>
          <span >
          <a className={this.state.multiple?'selected':''} onClick={this.multiple.bind(this)}><Icon type="plus" />多选</a>
          </span>
        </div>
        </div>
      </div>
        </div>
          )
        }
      }
      const selectdata = [{
        name: '分类：',
        data: ['全部分类', '研发设计', '生产制造', '精准营销', '服务']
      }, {
        name: '企业类型：',
        data: ['全部企业类型', '国有企业', '民营企业', '合资企业', '外资企业', '其他']
      }, {
        name: '地区：',
        data: ['全国', '湖北', '湖南', '广东', '广西', '云南', '贵州', '四川', '甘肃', '陕西', '山西', '山东', '海南', '安徽', '上海市', '福建', '江西', '河南', '内蒙古', '新疆', '西藏', '河北', '辽宁', '吉林', '黑龙江', '青海', '江苏', '台湾']
      }]