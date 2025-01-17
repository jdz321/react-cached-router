"use strict";(self.webpackChunkreact_cached_router=self.webpackChunkreact_cached_router||[]).push([[904],{34255:function(m,t,e){e.r(t),e.d(t,{demos:function(){return O}});var d=e(90228),r=e.n(d),s=e(87999),p=e.n(s),n=e(75271),g=e(59015),f=e(12032),O={"docs-guide-demo-0":{component:n.memo(n.lazy(p()(r()().mark(function h(){var u,l,_,c,i,a,P,v;return r()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.resolve().then(e.bind(e,12032));case 2:return u=o.sent,l=u.CachedRouter,_=u.Outlet,c=u.Link,i=function(){return n.createElement("div",null,"page A ",n.createElement("input",null))},a=function(){return n.createElement("div",null,"page B ",n.createElement("input",null))},P=function(){return n.createElement("div",null,n.createElement("h2",null,"demo"),n.createElement("nav",null,n.createElement(c,{to:"/a"},n.createElement("button",null,"Page A")),n.createElement(c,{to:"/b"},n.createElement("button",null,"Page B"))),n.createElement(_,null))},v=[{path:"/a",name:"a",component:i},{path:"/b",name:"b",component:a}],o.abrupt("return",{default:function(){return n.createElement(l,{router:v,defaultPath:"/a"},n.createElement(P,null))}});case 11:case"end":return o.stop()}},h)})))),asset:{type:"BLOCK",id:"docs-guide-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`import { CachedRouter, Outlet, Link, type RouteItem } from 'react-cached-router';

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
};`},"react-cached-router":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{"react-cached-router":f},renderOpts:{compile:function(){var h=p()(r()().mark(function l(){var _,c=arguments;return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(997).then(e.bind(e,1997));case 2:return a.abrupt("return",(_=a.sent).default.apply(_,c));case 3:case"end":return a.stop()}},l)}));function u(){return h.apply(this,arguments)}return u}()}}}},81238:function(m,t,e){e.r(t),e.d(t,{demos:function(){return s}});var d=e(75271),r=e(38337),s={}},26604:function(m,t,e){e.r(t),e.d(t,{texts:function(){return r}});var d=e(59015);const r=[]},56582:function(m,t,e){e.r(t),e.d(t,{texts:function(){return r}});var d=e(38337);const r=[{value:"react-cached-router",paraId:0}]}}]);
