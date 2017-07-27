import React, { Component } from 'react';
import './index.css';

import {
    getDayList,
    getResult,
    initSelected
} from './functions';



export default class EventTable extends Component {
    constructor(props) {
        super(props);
        const rangeDate = this.props.rangeDate || ["2015-09-01", "2015-09-15"];
        const dayList = getDayList(rangeDate[0], rangeDate[1]);
        const eventList = this.props.events || [];
        this.state = {
            selected: initSelected(eventList, dayList),
            mousedown: false,
            reselected: getResult(initSelected(eventList, dayList), eventList, dayList),
            dayList: dayList,
            eventList: eventList,
        };
    }
    init() {
        const rangeDate = this.props.rangeDate || ["2015-09-01", "2015-09-15"];
        const dayList = getDayList(rangeDate[0], rangeDate[1]);
        const eventList = this.props.events || [];
        this.setState({
            selected: initSelected(eventList, dayList),
            mousedown: false,
            reselected: getResult(initSelected(eventList, dayList), eventList, dayList),
            dayList: dayList,
            eventList: eventList,
        })
    }
    MouseDown(j, k) { //j表示天行数，k表示列数
        this.tdClick(j, k);
        this.setState({
            mousedown: true,
        })
    }
    MouseUp(j, k) { //j表示天行数，k表示列数
        this.setState({
                mousedown: false,
            })
            //选中单元格
    }
    MouseOver(j, k) { //j表示天行数，k表示列数
        if (this.state.mousedown) {
            this.tdClick(j, k);
        }
        //选中单元格
    }
    colClick(k) {
        let curSelected = this.state.selected;

        function allDay(num) {
            let flag = true;
            curSelected.map(function(s, j) {
                if (!curSelected[j][k]) {
                    flag = false;
                };
            })
            return flag;
        }
        if (!allDay(k)) {
            curSelected.map(function(s, j) {
                curSelected[j][k] = true;
            })
        } else {
            curSelected.map(function(s, j) {
                curSelected[j][k] = false;
            })
        }
        this.setState({
                selected: curSelected,
                reselected: getResult(curSelected, this.state.eventList, this.state.dayList),
            })
            //选中一整列
    }
    tdClick(j, k) { //j表示天行数，k表示列数

        let curSelected = this.state.selected;
        curSelected[j][k] = curSelected[j][k] ? false : true;
        this.setState({
            selected: curSelected,
            reselected: getResult(curSelected, this.state.eventList, this.state.dayList),
        })

        //选中单元格
    }
    rowClick(j) {
        let curSelected = this.state.selected;

        function allHour(num) {
            let flag = true;
            curSelected[0].map(function(v, k) {
                if (!curSelected[j][k]) {
                    flag = false;
                };
            })
            return flag;
        }
        if (!allHour(j)) {
            curSelected[0].map(function(v, k) {
                curSelected[j][k] = true;
            })
        } else {
            curSelected[0].map(function(v, k) {
                curSelected[j][k] = false;
            })
        }
        this.setState({
            selected: curSelected,
            reselected: getResult(curSelected, this.state.eventList, this.state.dayList),
        })
    }
    eventClick(id) {
        this.props.eventClick(id);
        //跳转到详细事件
    }
    componentDidMount() {
        let ob = this.refs["time-table"];
        if (ob.all) {
            ob.onselectstart = function() {
                return false;
            }; //for ie
        } else {
            ob.onmousedown = function() {
                return false;
            };
            ob.onmouseup = function() {
                return true;
            };
        }
        ob.onselectstart = new Function('event.returnValue=false;');
    }
    render() {
        const { selected, reselected, dayList, eventList } = this.state;
        var that = this;
        this.props.handleChange(this.state.reselected);
        return (
            <div className="time-table">
            <button className="init" onClick={that.init.bind(that)}>重置</button>
            <table id="time-table" ref="time-table"  className="envent-table">
                <thead>
                    <tr>
                        <th>日期/时间</th>
                        {
                            dayList.map(function(s, k) {
                                return <th key={s.name}  onClick={that.colClick.bind(that,k)}>{s.name}</th>;
                            })
                        }
                        <th>已选时间</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            eventList.map(function(s,j) {
                                let key=s.name;
                              return <tr key={s.name}>
                                      <th key={s.name} onClick={that.eventClick.bind(that,s.id)}>{s.name}</th>
                                      { dayList.map(function(v, k) {
                                        let str=s.name+","+v.name;
                                        let curSelected=selected[j][k];
                                        let cn="";
                                        if(curSelected){
                                            cn="slt";
                                        }
                                        return <td key={str} className={cn} onMouseDown={that.MouseDown.bind(that,j,k)} 
                                        onMouseOver={that.MouseOver.bind(that,j,k)}
                                        onMouseUp={that.MouseUp.bind(that,j,k)}
                                         ></td>
                                      })
                                     }

                                     {/*<td>{reselected[s.id]}</td>*/}
                              </tr> ;
                        })}
                </tbody>
            </table>
      </div>
        )
    };
}
