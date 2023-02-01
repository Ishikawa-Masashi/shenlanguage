"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[8399],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),k=r,m=d["".concat(l,".").concat(k)]||d[k]||u[k]||a;return o?n.createElement(m,i(i({ref:t},c),{},{components:o})):n.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},8158:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={title:"Chakra UI + Storybook",description:"Render your Chakra UI Components in Storybook",tags:["storybook","documentation","testing'"],author:"TimKolberger",category:"integrations"},i=void 0,s={unversionedId:"integrations/with-storybook",id:"integrations/with-storybook",title:"Chakra UI + Storybook",description:"Render your Chakra UI Components in Storybook",source:"@site/content/getting-started/integrations/with-storybook.mdx",sourceDirName:"integrations",slug:"/integrations/with-storybook",permalink:"/getting-started/integrations/with-storybook",draft:!1,tags:[{label:"storybook",permalink:"/getting-started/tags/storybook"},{label:"documentation",permalink:"/getting-started/tags/documentation"},{label:"testing'",permalink:"/getting-started/tags/testing"}],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"Chakra UI + Storybook",description:"Render your Chakra UI Components in Storybook",tags:["storybook","documentation","testing'"],author:"TimKolberger",category:"integrations"},sidebar:"defaultSidebar",previous:{title:"Chakra UI + React Table",permalink:"/getting-started/integrations/with-react-table"},next:{title:"Comparison",permalink:"/getting-started/comparison"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Troubleshooting Storybook",id:"troubleshooting-storybook",level:2}],c=(d="PropsTable",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var d;const u={toc:p};function k(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use the official Storybook Addon for Chakra UI to configure Storybook to\nautomatically wrap your stories with the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ChakraProvider />")," and add a color\nmode toggle."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D @chakra-ui/storybook-addon\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -D @chakra-ui/storybook-addon\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"@chakra-ui/storybook-addon@>2.0.0 is compatible with storybook >6.4")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Add the addon to your configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},".storybook/main.js"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  addons: ["@chakra-ui/storybook-addon"],\n  features: {\n    emotionAlias: false,\n  },\n};\n')),(0,r.kt)("p",null,"You can specify global parameters for the addon in ",(0,r.kt)("inlineCode",{parentName:"p"},".storybook/preview.js"),".\nThese options are the same as the props to ",(0,r.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," (without\n",(0,r.kt)("inlineCode",{parentName:"p"},"children"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// .storybook/preview.js\n\nconst theme = require("../path/to/your/theme");\n\nexport const parameters = {\n  chakra: {\n    theme,\n  },\n};\n')),(0,r.kt)(c,{of:"ChakraProvider",omit:["children"],mdxType:"PropsTable"}),(0,r.kt)("h2",{id:"troubleshooting-storybook"},"Troubleshooting Storybook"),(0,r.kt)("p",null,"If you're facing an issue where Storybook isn't working with Chakra UI, here's a\nwork around \ud83d\udc47"),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},".storybook/main.js")," file, you'll need to config the ",(0,r.kt)("inlineCode",{parentName:"p"},"features")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"webpackFinal")," properties like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'module.exports = {\n  stories: ["../**/*.stories.mdx", "../**/*.stories.@(js|jsx|ts|tsx)"],\n  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],\n  framework: "@storybook/react",\n  features: { emotionAlias: false },\n  webpackFinal: async (config) => {\n    config.module.rules.push({\n      test: /\\.mjs$/,\n      include: /node_modules/,\n      type: "javascript/auto",\n    });\n\n    return config;\n  },\n};\n')))}k.isMDXComponent=!0}}]);