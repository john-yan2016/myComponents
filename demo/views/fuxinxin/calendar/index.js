import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import './calendar.less';

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    let show = moment(moment(this.props.defaultValue).format('YYYY-MM'));
    this.state = {
      now: moment(),
      show,
    }
  };
  static defaultProps = {
    defaultValue: moment().format('YYYY-MM'),
    width: '100%',
    weekText: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayClick: (e, i) => {},
    eventData: [],
    eventClick: (e, item) => {}
  };
  static propTypes = {
    defaultValue: PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    weekText: PropTypes.array,
    dayClick: PropTypes.func,
    eventClick: PropTypes.func,
    eventData: PropTypes.array
  };
  changeMonth(action, e) {
    var show;
    switch (action) {
      case 'today':
        show = moment(moment().format('YYYY-MM'));
        break;
      case 'prev':
        show = moment(this.state.show.clone().add(-1, 'days').format('YYYY-MM'));
        break;
      case 'next':
        show = moment(this.state.show.clone().add(35, 'days').format('YYYY-MM'));
        break;
      default:
        show = moment(moment().format('YYYY-MM'));
        break;
    }
    this.setState({ show });
  };
  eventClick(e, item) {
    e.stopPropagation();
    this.props.eventClick(e, item);
  }
  getEvent(d, e) {
    let listData = [];
    for (let i in e) {
      if (e[i].date == d) listData.push(e[i]);
    }
    return <ul className="events">
      {
        listData.map((item,k )=>
          <li key={k} title={item.title} onClick={e=>this.eventClick(e,item)}>
            <span className={`event-${item.type}`}>●</span>
            {item.title}
          </li>
        )
      }
    </ul>;
  }
  render() {
    const {
      now,
      show
    } = this.state;
    const props = this.props;
    const year = Number(show.format('YYYY'));
    const monthNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) monthNum[1] = 29;

    let showDay = Number(show.format('d'));

    let showMonth = Number(show.format('M'));
    let showYear = Number(show.format('YYYY'));
    let showDate = Number(show.format('D'));
    let list = [];
    let prevMonthNum = showMonth > 1 ? monthNum[showMonth - 2] : 31;
    let thisMonthNum = monthNum[showMonth - 1];

    for (let i = 0; i < 42; i++) {
      var fulldate, className;
      if (i < showDay) {
        fulldate = show.clone().add(-1, 'days').format('YYYY-MM-') +
          (prevMonthNum - showDay + i + 1);
        className = 'fullcalendar-cell fullcalendar-prev-month';
      } else if (i < thisMonthNum + showDay) {
        fulldate = show.format('YYYY-MM-') + 
          (i - showDay + 1 < 10 ? '0' : '') + (i - showDay + 1);
        className = fulldate === now.format('YYYY-MM-DD') ? 
        'fullcalendar-cell fullcalendar-today' : 'fullcalendar-cell';
      } else {
        fulldate = show.clone().add(35, 'days').format('YYYY-MM-') + 
          (i - thisMonthNum - showDay + 1 < 10 ? '0' : '') + 
          (i - thisMonthNum - showDay + 1);
        className = 'fullcalendar-cell fullcalendar-next-month';
      }
      list.push({
        fulldate,
        className
      });
    }
    return (
      <div className='calendar' style={{width:props.width}}>
        <div className='calendar-head'>
          <div className="calendar-head-left">
            <div className="calendar-button-group">
              <a className='prev' href="javascript:;" onClick={e=>this.changeMonth('prev',e)}>{'<'}</a>
              <a className='next' href="javascript:;" onClick={e=>this.changeMonth('next',e)}>{'>'}</a>
              <a className='today' href="javascript:;" onClick={e=>this.changeMonth('today',e)}>{'返回今天'}</a>
            </div>
          </div>
          <div className="calendar-center">{this.state.show.format('YYYY年MM月')}</div>
          <div className="calendar-right"></div>
        </div>
        <table className="fullcalendar-table" cellSpacing="0">
          <thead>
            <tr>
              {
                [0,1,2,3,4,5,6].map((v,i)=><th key={i} title={props.weekText[i]} className="fullcalendar-header"><span>{props.weekText[i]}</span></th>)
              }
            </tr>
          </thead>
          <tbody className="fullcalendar-tbody">

            {
              [1,2,3,4,5,6].map((v,i)=><tr key={i}>
                {
                  [i*7,i*7+1,i*7+2,i*7+3,i*7+4,i*7+5,i*7+6].map((sv,si)=><td title={list[sv].fulldate} key = {si} className={list[sv].className} >
                    <div className="fullcalendar-date" onClick={e=>{props.dayClick(e,list[sv].fulldate)}}>
                      <div className="fullcalendar-value">{list[sv].fulldate.split('-')[2]}</div>
                      <div className="fullcalendar-content">
                        {this.getEvent(list[sv].fulldate,props.eventData)}
                      </div>
                    </div>
                  </td>)
                }
              </tr>)
            }
          </tbody>
        </table>
      </div>
    )
  };
}