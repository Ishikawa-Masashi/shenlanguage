"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[9900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,h=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2172:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"CLI",package:"@chakra-ui/cli",description:"Using the CLI command to generate theme typings",category:"features"},s=void 0,l={unversionedId:"styled-system/cli",id:"styled-system/cli",title:"CLI",description:"Using the CLI command to generate theme typings",source:"@site/content/docs/styled-system/cli.mdx",sourceDirName:"styled-system",slug:"/styled-system/cli",permalink:"/shenlanguage/docs/styled-system/cli",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"CLI",package:"@chakra-ui/cli",description:"Using the CLI command to generate theme typings",category:"features"},sidebar:"defaultSidebar",previous:{title:"Chakra Factory",permalink:"/shenlanguage/docs/styled-system/chakra-factory"},next:{title:"Color Mode",permalink:"/shenlanguage/docs/styled-system/color-mode"}},i={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Chakra UI CLI can be used to generate typings for your custom theme tokens,\nlike colors, semantic tokens, component variants, etc."),(0,r.kt)("p",null,"The CLI scans your theme configuration and generates typings for your custom\ntokens in the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/@chakra-ui/styled-system/dist/theming.types.d.ts"),"\nfile."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Troubleshoot:")," If the theme typings don't show up immediately, try\nrestarting your TypeScript server\n(",(0,r.kt)("inlineCode",{parentName:"p"},'Cmd + Shift + P > "TypeScript: Restart TS server"')," if you're using VSCode).")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"In order to use the CLI, you need to install it as a dev dependency in your\nproject:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @chakra-ui/cli\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev @chakra-ui/cli\n")),(0,r.kt)("p",null,"To make it more convenient, it's also a good idea to create an npm script that\ntriggers it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n  ...\n  "scripts": {\n    ...\n    "theme": "chakra-cli tokens path/to/theme.ts",\n    "theme:watch": "chakra-cli tokens path/to/theme.ts --watch",\n  },\n  ...\n}\n')),(0,r.kt)("p",null,"Don't forget to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/theme.ts")," with your theme file location."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To generate typings for your theme, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"theme")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run theme\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn theme\n")),(0,r.kt)("p",null,"If you'd like to continuously generate theme typings as you're editing your\ntheme, run the ",(0,r.kt)("inlineCode",{parentName:"p"},"theme:watch")," script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run theme:watch\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn theme:watch\n")),(0,r.kt)("p",null,"A successful execution should output something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ chakra-cli tokens src/theme/index.ts\n\nChakra UI CLI v2.1.8 by Chakra UI\nGenerate theme typings for autocomplete\n\n\n\u2139 Generating chakra theme typings\n\u2714 Done\n\u2728  Done in 0.83s.\n")))}u.isMDXComponent=!0}}]);