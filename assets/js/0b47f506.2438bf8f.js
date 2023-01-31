"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[8949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,k=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7724:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"useOutsideClick",package:"@chakra-ui/hooks",description:"React hook to detect clicks outside of a specified element."},i=void 0,s={unversionedId:"hooks/use-outside-click",id:"hooks/use-outside-click",title:"useOutsideClick",description:"React hook to detect clicks outside of a specified element.",source:"@site/content/docs/hooks/use-outside-click.mdx",sourceDirName:"hooks",slug:"/hooks/use-outside-click",permalink:"/docs/hooks/use-outside-click",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"useOutsideClick",package:"@chakra-ui/hooks",description:"React hook to detect clicks outside of a specified element."},sidebar:"defaultSidebar",previous:{title:"useMergeRefs",permalink:"/docs/hooks/use-merge-refs"},next:{title:"usePrefersReducedMotion",permalink:"/docs/hooks/use-prefers-reduced-motion"}},c={},l=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],u=(p="PropsTable",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const d={toc:l};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useOutsideClick")," is a custom hook that handles click events outside a specific\nDOM element, like a ",(0,o.kt)("inlineCode",{parentName:"p"},"div"),". A handler is invoked when a click or touch event\nhappens outside the referenced element."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This hook is compatible with mouse and touch events.")),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useOutsideClick } from '@chakra-ui/react'\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const ref = React.useRef()\n  const [isModalOpen, setIsModalOpen] = React.useState(false)\n  useOutsideClick({\n    ref: ref,\n    handler: () => setIsModalOpen(false),\n  })\n\n  return (\n    <>\n      {isModalOpen ? (\n        <div ref={ref}>\n          \ud83d\udc4b Hey, I'm a modal. Click anywhere outside of me to close.\n        </div>\n      ) : (\n        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>\n      )}\n    </>\n  )\n}\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useOutsideClick")," hook accepts an object with the following properties:"),(0,o.kt)(u,{of:"useOutsideClick",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);