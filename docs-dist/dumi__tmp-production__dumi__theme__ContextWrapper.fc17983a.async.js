"use strict";(self.webpackChunkreact_cached_router=self.webpackChunkreact_cached_router||[]).push([[923],{46405:function(O,a,e){e.r(a),e.d(a,{default:function(){return b}});var f=e(48305),v=e.n(f),C=e(26068),N=e.n(C),n=e(75271),r=e(32119),P=e(86253),T=e(56193),o={CachedRouter:{type:"COMPONENT",id:"CachedRouter",title:"CachedRouter",propsConfig:{type:"object",required:["router"],className:"CachedRouterProps",properties:{router:{type:"array",className:"Array<RouteItem>",items:{type:"object",required:["name","path","component"],className:"RouteItem",properties:{name:{type:"string"},path:{type:"string"},component:{oneOf:[{type:"object",properties:{propTypes:{type:"object",required:[],className:"WeakValidationMap<P>",description:`Used to declare the types of the props accepted by the
component. These types will be checked during rendering
and in development only.

We recommend using TypeScript instead of checking prop
types at runtime.`,tags:{see:"{@link https://react.dev/reference/react/Component#static-proptypes React Docs}"}},contextType:{type:"object",required:["Provider","Consumer"],className:"Context",properties:{Provider:{type:"function",signature:{isAsync:!1,returnType:{oneOf:[{const:null},{type:"element",className:"ReactElement"}]},arguments:[{key:"props",type:"P",isRequired:!0}]},description:"An {@link ExoticComponent} with a `propTypes` property applied to it.",tags:{template:"P The props the component accepts."},className:"Provider<ProviderProps<T>>"},Consumer:{type:"function",signature:{isAsync:!1,returnType:{oneOf:[{const:null},{type:"element",className:"ReactElement"}]},arguments:[{key:"props",type:"P",isRequired:!0}]},description:`An object masquerading as a component. These are created by functions
like {@link forwardRef}, {@link memo}, and {@link createContext}.

In order to make TypeScript work, we pretend that they are normal
components.

But they are, in fact, not callable - instead, they are objects which
are treated specially by the renderer.`,tags:{template:"P The props the component accepts."},className:"Consumer<ConsumerProps<T>>"},displayName:{type:"string",description:`Used in debugging messages. You might want to set it
explicitly if you want to display a different name for
debugging purposes.`,tags:{see:"{@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}"}}}},contextTypes:{type:"any",deprecated:!0,tags:{deprecated:`use {@link ComponentClass.contextType} instead

Lets you specify which legacy context is consumed by
this component.`,see:"{@link https://legacy.reactjs.org/docs/legacy-context.html Legacy React Docs}"}},childContextTypes:{type:"any",deprecated:!0,tags:{deprecated:"",see:"{@link https://legacy.reactjs.org/docs/legacy-context.html#how-to-use-context Legacy React Docs}"}},defaultProps:{type:"object",required:[],className:"Partial_P",description:`Used to define default values for the props accepted by
the component.`,tags:{see:"{@link https://react.dev/reference/react/Component#static-defaultprops React Docs}"}},displayName:{type:"string",description:`Used in debugging messages. You might want to set it
explicitly if you want to display a different name for
debugging purposes.`,tags:{see:"{@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}"}},getDerivedStateFromProps:{type:"function",signature:{isAsync:!1,returnType:{oneOf:[{const:null},{type:"object",properties:{},required:[],className:"Partial_S"}]},arguments:[{key:"nextProps",type:"Readonly<P>",isRequired:!0},{key:"prevState",type:"S",isRequired:!0}]},className:"GetDerivedStateFromProps<P_S>"},getDerivedStateFromError:{type:"function",signature:{isAsync:!1,returnType:{oneOf:[{const:null},{type:"object",properties:{},required:[],className:"Partial_S"}]},arguments:[{key:"error",type:"any",isRequired:!0}]},className:"GetDerivedStateFromError<P_S>"}},required:[],className:"ComponentClass<__type>"},{type:"function",signature:{isAsync:!1,returnType:{oneOf:[{const:null},{type:"element",className:"ReactElement"}]},arguments:[{key:"props",type:"P",isRequired:!0},{key:"deprecatedLegacyContext",type:"any",hasQuestionToken:!0}]},description:`Represents the type of a function component. Can optionally
receive a type argument that represents the props the component
accepts.`,tags:{template:"P The props the component accepts.",see:"{@link https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components React TypeScript Cheatsheet}",example:"```tsx\n// Without props:\nconst MyComponentWithoutProps: FunctionComponent = () => {\nreturn <div>MyComponentWithoutProps</div>\n}\n```"},className:"FunctionComponent<__type>"}],className:"ComponentType<__type>"},ignoreCache:{type:"boolean"}}}},children:{type:"reactNode",className:"ReactNode"},defaultPath:{type:"string"},LazyFallback:{$ref:"#/definition/ComponentType<__type>"}}}},Link:{type:"COMPONENT",id:"Link",title:"Link",propsConfig:{type:"object",required:["to"],className:"__type",properties:{to:{type:"string"},children:{type:"reactNode",className:"ReactNode"}}}},Outlet:{type:"COMPONENT",id:"Outlet",title:"Outlet",propsConfig:{type:"object",required:[],className:"__type"}}},s=e(10286),R=e(12032),k=e(52676),p=N()({},R),c={name:"react-cached-router",description:"A React Router with caching feature",version:"0.0.1",license:"MIT",authors:["D&R <jdz321@163.com>"]},i="browser",l=void 0,d={footer:'Copyright \xA9 2025 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,name:"react-cached-router"},u=!0;function b(){var x=(0,r.pC)(),j=(0,n.useState)(!1),y=v()(j,2),m=y[0],h=y[1],g=(0,n.useRef)(r.m8.location.pathname);(0,n.useEffect)(function(){return r.m8.listen(function(t){t.location.pathname!==g.current&&(g.current=t.location.pathname,document.documentElement.scrollTo(0,0))})},[]);var S=n.useMemo(function(){var t={pkg:c,historyType:i,entryExports:p,demos:null,components:o,locales:s.k,loading:m,setLoading:h,hostname:l,themeConfig:d,_2_level_nav_available:u};return Object.defineProperty(t,"demos",{get:function(){return(0,P.Kp)(!1,"`demos` return empty in latest version, please use `useDemo` instead."),{}}}),t},[c,i,p,o,s.k,m,h,l,d,u]);return(0,k.jsx)(T.D.Provider,{value:S,children:x})}}}]);
