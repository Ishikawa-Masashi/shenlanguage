"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(i,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={title:"useToken",package:"@chakra-ui/system",description:"Hook to resolve design tokens from the theme"},s=void 0,l={unversionedId:"hooks/use-token",id:"hooks/use-token",title:"useToken",description:"Hook to resolve design tokens from the theme",source:"@site/content/docs/hooks/use-token.mdx",sourceDirName:"hooks",slug:"/hooks/use-token",permalink:"/shenlanguage/docs/hooks/use-token",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"useToken",package:"@chakra-ui/system",description:"Hook to resolve design tokens from the theme"},sidebar:"defaultSidebar",previous:{title:"useTheme",permalink:"/shenlanguage/docs/hooks/use-theme"},next:{title:"Chakra Factory",permalink:"/shenlanguage/docs/styled-system/chakra-factory"}},i={},u=[{value:"Import",id:"import",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage",id:"usage",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useToken")," is a custom hook used to resolve design tokens from the theme."),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { useToken } from '@chakra-ui/react'\n")),(0,o.kt)("h2",{id:"return-value"},"Return value"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useToken")," hook retrieves whatever is in the theme at the given path(s)."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const [red100, blue200] = useToken(\n    // the key within the theme, in this case `theme.colors`\n    'colors',\n    // the subkey(s), resolving to `theme.colors.red.100`\n    ['red.100', 'blue.200'],\n    // a single fallback or fallback array matching the length of the previous arg\n  )\n\n  return (\n    <Box p={4} boxShadow={`inset 0 4px 0 ${red100}, 0 0 8px ${blue200}`}>\n      You can utilize <Code>useToken</Code> to create a <Code>boxShadow</Code>{' '}\n      with colors from your theme.\n    </Box>\n  )\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that you can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"sx")," prop to write styles freely using themes\ntokens.")))}p.isMDXComponent=!0}}]);