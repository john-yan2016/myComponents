import * as React from 'react';
import Yecharts from "./yEcharts";
export default class EchartOption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: {
                xAxis: {
                    type: 'category',
                    splitLine: {
                        show: false
                    },
                    data: ['总费用', '房租', '水电费', '交通费', '伙食费', '日用品数']
                },
    yAxis: {
        type : 'value'
    },
                series: [{
                    name: '辅助',
                    type: 'bar',
                    stack: '总量',
                    data: [0, 1700, 1400, 1200, 300, 0]
                }, {
                    name: '生活费',
                    type: 'bar',
                    stack: '总量',
                    data: [2900, 1200, 300, 200, 900, 300]
                }]

            }
        }
    }
    componentDidMount() {

    }
    handlerSubmit(e) {
        e.preventDefault();
        for(let i in e){
            console.log(i,e[i]);
        }
    }
    render() {
        const state = this.state;
        return (
            <div>
            <div className="select">
            选择区域:
            <form onSubmit={this.handlerSubmit} >
                标题:<input  name='a2' type="text"/>
                <input name='a1' type="text"/>
                <input type="submit"value='提交'/>
            </form>
            </div>
            <Yecharts option={state.option}/>
        </div>
        )
    };
}