import React from 'react';
import ReactDom from 'react-dom';
var req = require.context('./mapData/', false, /\.js$/);
req.keys().map((v, k) => {
    var url = './mapData' + v.slice(1);
    // console.log();
    require(`${url}`);
});
var echarts = require('echarts');
var geoData = [{
    name: "湖北",
    value: [{
        name: "武汉市",
        value: [114.298572, 30.584355]
    }, {
        name: "黄石市",
        value: [115.077048, 29.920074]
    }, {
        name: "十堰市",
        value: [110.787916, 32.646907]
    }, {
        name: "宜昌市",
        value: [111.290843, 30.702636]
    }, {
        name: "襄阳市",
        value: [112.144146, 32.042426]
    }, {
        name: "鄂州市",
        value: [114.890593, 30.396536]
    }, {
        name: "荆门市",
        value: [112.204251, 31.03542]
    }, {
        name: "孝感市",
        value: [113.926655, 30.926423]
    }, {
        name: "荆州市",
        value: [112.23813, 30.326857]
    }, {
        name: "黄冈市",
        value: [115.359365, 30.447711]
    }, {
        name: "咸宁市",
        value: [114.328963, 29.832798]
    }, {
        name: "随州市",
        value: [113.37377, 31.717497]
    }, {
        name: "恩施土家族苗族自治州",
        value: [109.48699, 30.283114]
    }, {
        name: "仙桃市",
        value: [113.453974, 30.264953]
    }, {
        name: "潜江市",
        value: [112.896866, 30.421215]
    }, {
        name: "天门市",
        value: [113.165862, 30.653061]
    }, {
        name: "神农架林区",
        value: [110.671525, 31.744449]
    }]
}, {
    name: "湖南",
    value: [{
        name: "长沙市",
        value: [112.982279, 28.19409]
    }, {
        name: "株洲市",
        value: [113.151737, 27.835806]
    }, {
        name: "湘潭市",
        value: [112.944052, 27.82973]
    }, {
        name: "衡阳市",
        value: [112.607693, 26.900358]
    }, {
        name: "邵阳市",
        value: [111.46923, 27.237842]
    }, {
        name: "岳阳市",
        value: [113.132855, 29.37029]
    }, {
        name: "常德市",
        value: [111.691347, 29.040225]
    }, {
        name: "张家界市",
        value: [110.479921, 29.127401]
    }, {
        name: "益阳市",
        value: [112.355042, 28.570066]
    }, {
        name: "郴州市",
        value: [113.032067, 25.793589]
    }, {
        name: "永州市",
        value: [111.608019, 26.434516]
    }, {
        name: "怀化市",
        value: [109.97824, 27.550082]
    }, {
        name: "娄底市",
        value: [112.008497, 27.728136]
    }, {
        name: "湘西土家族苗族自治州",
        value: [109.739735, 28.314296]
    }]
}]

var pros = [];
geoData.map((i, j) => {
        pros.push(i.name);
    })
    // console.log(pros);
var optionData = [];
geoData.map((i, j) => {
        optionData.push({
            name: i.name,
            value: randomData()
        });
    })
    // console.log(optionData);


var option = {
    title: {
        text: '中国地图',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    series: [{
        name: '人口数',
        type: 'map',
        map: 'china',
        roam: true,
        label: {
            normal: {
                show: true
            },
            emphasis: {
                show: true
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#0e83b8',
                borderColor: '#c3ffff',
            },
            emphasis: {
                areaColor: '#d94e5d'
            }
        },
        data: optionData
    }]

};



function randomData() {
    return Math.round(Math.random() * 1000);
}

export default class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pro: '',
            vi: false
        }
    }

    componentDidMount() {
        var myChart = echarts.init(ReactDom.findDOMNode(this.refs.main));
        // 指定图表的配置项和数据
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart.on('click', function(params) {
            console.log(params.name);
            if (params.name === '') {
                myChart.setOption(option);
            } else if (pros.indexOf(params.name) !== -1) {
                this.setState({
                    pro: params.name,
                    vi: true,
                });
                let option2Data = [];
                geoData.map((i, j) => {
                    if (i.name === params.name) {
                        // console.log(i.value);
                        for (var k = 0; k < i.value.length; k++) {
                            option2Data.push({
                                name: i.value[k].name,
                                value: i.value[k].value.concat(randomData())
                            });
                        }

                    }
                });
                // console.log(option2Data);
                var option2 = {
                    title: {
                        text: this.state.pro,
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    geo: {
                        show: true,
                        map: this.state.pro,
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#c3ffff',
                                    fontWeight: 500
                                }
                            },
                            emphasis: {
                                show: true,
                                color: '#fff'
                            }
                        },
                        roam: true,
                        silent: true,
                        itemStyle: {
                            normal: {
                                areaColor: '#0e83b8',
                                borderColor: '#c3ffff',
                            },
                            emphasis: {
                                areaColor: '#d94e5d'
                            }
                        }
                    },
                    series: [{
                        name: '人口数',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: 50,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                areaColor: '#0e83b8',
                                borderColor: '#c3ffff',
                            },
                            emphasis: {
                                areaColor: '#d94e5d'
                            }
                        },
                        data: option2Data
                    }]
                };
                myChart.setOption(option2);

            }
        }, this)

    }

    back() {

        this.setState({
            vi: false
        })
        echarts.getInstanceByDom(ReactDom.findDOMNode(this.refs.main))
            .setOption(option, {
                notMerge: true
            });
    }

    render() {

        return (
            <div> 
    <div ref='main' style={{width: '800px',height:'600px',border:'1px solid #000',margin:'0 auto',marginBottom:'10px'}}></div>
    <button style={{display:this.state.vi === true ? 'block':'none',margin:'0 auto'}} onClick={this.back.bind(this)}>返回</button>
    </div>
        )
    }
}