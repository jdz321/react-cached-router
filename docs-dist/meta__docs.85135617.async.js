"use strict";(self.webpackChunkreact_cached_router=self.webpackChunkreact_cached_router||[]).push([[904],{34255:function(l,n,e){e.r(n),e.d(n,{demos:function(){return O}});var s=e(90228),r=e.n(s),m=e(87999),p=e.n(m),t=e(75271),g=e(59015),f=e(12032),O={"docs-guide-demo-0":{component:t.memo(t.lazy(p()(r()().mark(function i(){var u,c,_,d,E,a,P,v;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,12032));case 2:return u=o.sent,c=u.CachedRouter,_=u.Outlet,d=u.Link,E=function(){return t.createElement("div",null,"page A ",t.createElement("input",null))},a=function(){return t.createElement("div",null,"page B ",t.createElement("input",null))},P=function(){return t.createElement("div",null,t.createElement("h2",null,"demo"),t.createElement("nav",null,t.createElement(d,{to:"/a"},t.createElement("button",null,"Page A")),t.createElement(d,{to:"/b"},t.createElement("button",null,"Page B"))),t.createElement(_,null))},v=[{path:"/a",name:"a",component:E},{path:"/b",name:"b",component:a}],o.abrupt("return",{default:function(){return t.createElement(c,{router:v,defaultPath:"/a"},t.createElement(P,null))}});case 11:case"end":return o.stop()}},i)})))),asset:{type:"BLOCK",id:"docs-guide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { CachedRouter, Outlet, Link, type RouteItem } from 'react-cached-router';

const PageA = () => (
  <div>
    page A <input />
  </div>
);

const PageB = () => (
  <div>
    page B <input />
  </div>
);

const Layout = () => (
  <div>
    <h2>demo</h2>
    <nav>
      <Link to="/a"><button>Page A</button></Link>
      <Link to="/b"><button>Page B</button></Link>
    </nav>
    <Outlet />
  </div>
);

const router: RouteItem[] = [
  {
    path: '/a',
    name: 'a',
    component: PageA,
  },
  {
    path: '/b',
    name: 'b',
    component: PageB,
  },
];

export default () => {
  return (
    <CachedRouter router={router} defaultPath="/a">
      <Layout />
    </CachedRouter>
  );
};`},"react-cached-router":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"react-cached-router":f},renderOpts:{compile:function(){var i=p()(r()().mark(function c(){var _,d=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(997).then(e.bind(e,1997));case 2:return a.abrupt("return",(_=a.sent).default.apply(_,d));case 3:case"end":return a.stop()}},c)}));function u(){return i.apply(this,arguments)}return u}()}}}},81238:function(l,n,e){e.r(n),e.d(n,{demos:function(){return m}});var s=e(75271),r=e(38337),m={}},26604:function(l,n,e){e.r(n),e.d(n,{texts:function(){return r}});var s=e(59015);const r=[]},56582:function(l,n,e){e.r(n),e.d(n,{texts:function(){return r}});var s=e(38337);const r=[{value:"react-cached-router",paraId:0}]}}]);
