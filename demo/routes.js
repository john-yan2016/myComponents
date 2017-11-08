import * as React from 'react';
import {
  Route,
  IndexRoute,
  Redirect,
  IndexRedirect
} from 'react-router';
const Base = require('./base').default;

import {
  Home,
  Func1,
  Func2,
  Func3,
  Func4,
  UI1,
  UI2,
  UI3,
  UI4,
  Plugin1,
  Plugin2,
  Plugin3,
  Plugin4,
  Plugin5,
  Tables,
  Datatables,
  BStables,
  Radio,
  Checkbox,
  Switch,
  SearchDemo,
  JModal,
  Maptest,
  Yform,
  Log,
  ErrorPage
} from './views';
import Test4 from './views/ysj/user/test4';
import Slidetest from './views/ysj/slide/test5';
import Sharetest from './views/ysj/share/test6';
import Detail from './views/ysj/share/detail';

export default (
  <Route path="/" component={Base}>

    <IndexRoute component={Home} />

    <Route path="kxl/tabs" component={Func1} />
    <Route path="kxl/upload" component={Func2} />
    <Route path="kxl/dropdown" component={Func3} />
    <Route path="kxl/others" component={Func4} />

    <Route path="zss/ui1" component={UI1} />
    <Route path="zss/ui2" component={UI2} />
    <Route path="zss/ui3" component={UI3} />
    <Route path="zss/ui4" component={UI4} />

    <Route path="fuxinxin/select" component={Plugin1} />
    <Route path="fuxinxin/carousel" component={Plugin2} />
    <Route path="fuxinxin/calendar" component={Plugin3} />
    <Route path="fuxinxin/echarts" component={Plugin4} />
    <Route path="fuxinxin/checkbox" component={Plugin5} />

    <Route path="lx/yTables" component={Tables} />
    <Route path="lx/datatables" component={Datatables} />
    <Route path="lx/bstables" component={BStables} />

    <Route path="ysj/radio" component={Radio} />
    <Route path="ysj/checkbox" component={Checkbox} />
    <Route path="ysj/switch" component={Switch} />
    <Route path="ysj/tool1" component={SearchDemo} />
    <Route path="ysj/tool2" component={JModal} />
    <Route path="ysj/tool3" component={Maptest} />
    <Route path="ysj/tool4" component={Test4} />
    <Route path="ysj/tool5" component={Slidetest} />
    <Route path="ysj/tool6" component={Sharetest} />
    <Route path="ysj/tool6/detail" component={Detail} />

    <Route path="form/yform" component={Yform} />

    <Route path="/log" component={Log} />

    <Route path="/404" component={ErrorPage} />

    <Route path="*" onEnter={(params,replace)=>replace('/404')} />

  </Route>
);
