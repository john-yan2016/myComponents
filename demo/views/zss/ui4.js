import React, {
  Component
} from 'react';
import EchartsAuto from './echartsAuto';
import CommonItem from './echartsAuto/commonItem';

import './page.less';

export default class UI4 extends Component {

  render() {

    return (
      <div  className ='describe'>
        <h1>EchartsAuto</h1>

        <h2>功能:点击不同图形类型,产生不同配置项,能输入数据,能提前预览,能导出option,能批量导出option</h2>

        <section>
          <h3>1.基本用法</h3>
          <h3>cartesian2d  /  polar  /  geo三种坐标系</h3>
          <h3>单个图表生成</h3>
          <h3>同个坐标系的混合图表生成</h3>
       
       		<h3>散点图 折线图 柱状图 地图 饼图 雷达图 k线图 箱线图 热力图 关系图 矩形树图 平行坐标 桑基图 漏斗图 仪表盘 象形柱图 主题河流图</h3>

       		<h2>分组</h2>
       		<h2>cartesian2d : 散点图 折线图 柱状图</h2>
          
       		<h2>第零步:抽出共性</h2>
       		<h2>第一步:完成三个基本图的生成</h2>
       		<h2>第二步:吸取第一步的经验,加入其它同类型图标</h2>

          <code>
		        <p>{code1}</p>
					</code>

          <br/>
          <br/>
          <CommonItem/>
        </section>

      </div>
    )
  };
}


const trs1 = [
  ['type', '改变节点的形状', 'string', 'fa fa-circle-o'],

];


const code1 = "<Timeline>";