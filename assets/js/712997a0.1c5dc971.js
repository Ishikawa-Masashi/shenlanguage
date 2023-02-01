"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[8302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"useConst",package:"@chakra-ui/hooks",description:"React hook to initialize and return a constant value"},i=void 0,s={unversionedId:"hooks/use-const",id:"hooks/use-const",title:"useConst",description:"React hook to initialize and return a constant value",source:"@site/content/docs/hooks/use-const.mdx",sourceDirName:"hooks",slug:"/hooks/use-const",permalink:"/docs/hooks/use-const",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"useConst",package:"@chakra-ui/hooks",description:"React hook to initialize and return a constant value"},sidebar:"defaultSidebar",previous:{title:"useClipboard",permalink:"/docs/hooks/use-clipboard"},next:{title:"useControllableState",permalink:"/docs/hooks/use-controllable"}},u={},l=[{value:"Import",id:"import",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Usage",id:"usage",level:2},{value:"Why not use <code>useMemo</code>?",id:"why-not-use-usememo",level:2},{value:"Why not use <code>useState</code>?",id:"why-not-use-usestate",level:2}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useConst")," is a custom hook used to initialize and return a constant value.\nUnlike ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo"),", this will always return the same value, and if the\ninitializer is a function, only call it once."),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { useConst } from '@chakra-ui/react'\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"The hook ",(0,a.kt)("inlineCode",{parentName:"p"},"useConst")," accepts the initial value, or a function to get the initial value."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const mountTime = useConst(() => new Date().toTimeString())\n  const obj = useConst({ a: Math.random() })\n  return (\n    <>\n      <p>Mount time: {mountTime}</p>\n      <p>Value from constant object: {obj.a}</p>\n    </>\n  )\n}\n")),(0,a.kt)("h2",{id:"why-not-use-usememo"},"Why not use ",(0,a.kt)("inlineCode",{parentName:"h2"},"useMemo"),"?"),(0,a.kt)("p",null,"The React documentation says that the engine may choose to \u201cforget\u201d some\npreviously memoized values and recalculate them on next render, and you should\nwrite your code so that it still works without ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," and then add it to\noptimize performance."),(0,a.kt)("p",null,"You should use ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo")," only when you need to recalculate the value based on\ndependencies."),(0,a.kt)("h2",{id:"why-not-use-usestate"},"Why not use ",(0,a.kt)("inlineCode",{parentName:"h2"},"useState"),"?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [value] = useState(new Date().toTimeString())\n  return (\n    <p>Mount time: {value}</p>\n  )\n}\n\n")),(0,a.kt)("p",null,"This will work as a constant, but this is semantically wrong and it's expensive\ndue to reducer handling which we don't need."))}p.isMDXComponent=!0}}]);