"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[7409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={title:"Vite",description:"A guide for installing Chakra UI with vitejs projects",tags:["vite"],author:"estheragbaje",category:"frameworks",sidebar_position:70},i=void 0,l={unversionedId:"frameworks/vite-guide",id:"frameworks/vite-guide",title:"Vite",description:"A guide for installing Chakra UI with vitejs projects",source:"@site/content/home/frameworks/vite-guide.mdx",sourceDirName:"frameworks",slug:"/frameworks/vite-guide",permalink:"/frameworks/vite-guide",draft:!1,tags:[{label:"vite",permalink:"/tags/vite"}],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",sidebarPosition:70,frontMatter:{title:"Vite",description:"A guide for installing Chakra UI with vitejs projects",tags:["vite"],author:"estheragbaje",category:"frameworks",sidebar_position:70},sidebar:"defaultSidebar",previous:{title:"Remix",permalink:"/frameworks/remix-guide"},next:{title:"Meteor",permalink:"/frameworks/meteor-guide"}},p={},d=[{value:"1. Installation",id:"1-installation",level:2},{value:"2. Provider Setup",id:"2-provider-setup",level:2},{value:"3. Customizing theme (Optional)",id:"3-customizing-theme-optional",level:2},{value:"Notes on TypeScript \ud83d\udea8",id:"notes-on-typescript-",level:3},{value:"ChakraProvider Props",id:"chakraprovider-props",level:2}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-installation"},"1. Installation"),(0,a.kt)("p",null,"In your Vite React project, install Chakra UI by running either of the\nfollowing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6\n")),(0,a.kt)("h2",{id:"2-provider-setup"},"2. Provider Setup"),(0,a.kt)("p",null,"After installing Chakra UI, you need to set up the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," at the root\nof your application."),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory and inside ",(0,a.kt)("inlineCode",{parentName:"p"},"main.jsx")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"main.tsx"),", wrap\n",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," around ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { ChakraProvider } from '@chakra-ui/react';\nimport * as ReactDOM from 'react-dom/client';\n\nconst rootElement = document.getElementById('root');\nReactDOM.createRoot(rootElement).render(\n  <React.StrictMode>\n    <ChakraProvider>\n      <App />\n    </ChakraProvider>\n  </React.StrictMode>\n);\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You're good to go with steps 1 and 2. However, if you'd love to\ntake it a step further, check out step 3.")),(0,a.kt)("h2",{id:"3-customizing-theme-optional"},"3. Customizing theme (Optional)"),(0,a.kt)("p",null,"If you intend to customise the default theme object to match your design\nrequirements, you need to extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme"),"."),(0,a.kt)("p",null,"Chakra UI provides an ",(0,a.kt)("inlineCode",{parentName:"p"},"extendTheme")," function that deep merges the default theme\nwith your customizations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// 1. Import the extendTheme function\nimport { extendTheme } from '@chakra-ui/react';\nimport * as ReactDOM from 'react-dom/client';\n\n// 2. Extend the theme to include custom colors, fonts, etc\nconst colors = {\n  brand: {\n    900: '#1a365d',\n    800: '#153e75',\n    700: '#2a69ac',\n  },\n};\n\nconst theme = extendTheme({ colors });\n\n// 3. Pass the `theme` prop to the `ChakraProvider`\n\nconst rootElement = document.getElementById('root');\nReactDOM.createRoot(rootElement).render(\n  <React.StrictMode>\n    <ChakraProvider theme={theme}>\n      <App />\n    </ChakraProvider>\n  </React.StrictMode>\n);\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In cases where hot reload doesn't work, first check to make\nsure you're using the latest version of Vite. If hot reload issue persists,\nuse this workaround in your ",(0,a.kt)("inlineCode",{parentName:"p"},"vite.config.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"vite.config.ts")," file:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"server: {\n  watch: {\n    usePolling: true,\n  },\n},\n")),(0,a.kt)("p",null,"Now, your ",(0,a.kt)("inlineCode",{parentName:"p"},"vite.config.js")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"vite.config.ts")," should now look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { defineConfig } from 'vite';\nimport react from '@vitejs/plugin-react';\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    watch: {\n      usePolling: true,\n    },\n  },\n});\n")),(0,a.kt)("h3",{id:"notes-on-typescript-"},"Notes on TypeScript \ud83d\udea8"),(0,a.kt)("p",null,"Please note that when adding Chakra UI to a TypeScript project, a minimum\nTypeScript version of ",(0,a.kt)("inlineCode",{parentName:"p"},"4.1.0")," is required."),(0,a.kt)("h2",{id:"chakraprovider-props"},"ChakraProvider Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resetCSS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},"automatically includes ",(0,a.kt)("inlineCode",{parentName:"td"},"<CSSReset />"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"theme"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Theme")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@chakra-ui/theme")),(0,a.kt)("td",{parentName:"tr",align:null},"optional custom theme")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"colorModeManager"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"StorageManager")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"localStorageManager")),(0,a.kt)("td",{parentName:"tr",align:null},"manager to persist a users color mode preference in")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"portalZIndex"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},"common z-index to use for ",(0,a.kt)("inlineCode",{parentName:"td"},"Portal"))))))}m.isMDXComponent=!0}}]);