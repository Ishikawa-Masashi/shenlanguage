"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[3155],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(k,i(i({ref:t},s),{},{components:a})):n.createElement(k,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},16177:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"RedwoodJS",description:"A guide for installing Chakra UI with redwoodjs projects",tags:["redwoodjs"],author:"estheragbaje, philzen",category:"frameworks",sidebar_position:50},i=void 0,l={unversionedId:"frameworks/redwoodjs-guide",id:"frameworks/redwoodjs-guide",title:"RedwoodJS",description:"A guide for installing Chakra UI with redwoodjs projects",source:"@site/content/getting-started/frameworks/redwoodjs-guide.mdx",sourceDirName:"frameworks",slug:"/frameworks/redwoodjs-guide",permalink:"/frameworks/redwoodjs-guide",draft:!1,tags:[{label:"redwoodjs",permalink:"/tags/redwoodjs"}],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:50,frontMatter:{title:"RedwoodJS",description:"A guide for installing Chakra UI with redwoodjs projects",tags:["redwoodjs"],author:"estheragbaje, philzen",category:"frameworks",sidebar_position:50},sidebar:"defaultSidebar",previous:{title:"Blitz.js",permalink:"/frameworks/blitzjs-guide"},next:{title:"Remix",permalink:"/frameworks/remix-guide"}},d={},p=[{value:"Installation",id:"installation",level:2},{value:"Automatic",id:"automatic",level:3},{value:"Manual",id:"manual",level:3},{value:"Notes on TypeScript \ud83d\udea8",id:"notes-on-typescript-",level:3},{value:"Additional setup",id:"additional-setup",level:2},{value:"Customize Theme",id:"customize-theme",level:3},{value:"Storybook Integration",id:"storybook-integration",level:3},{value:"ChakraProvider Props",id:"chakraprovider-props",level:2}],s={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"automatic"},"Automatic"),(0,r.kt)("p",null,"RedwoodJS provides a convenient setup script via its\n",(0,r.kt)("a",{parentName:"p",href:"https://redwoodjs.com/docs/cli-commands#setup-ui"},"CLI tool")," to enable Chakra UI\nin your project with a single command. In your project folder, simply enter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn redwood setup ui chakra-ui\n")),(0,r.kt)("p",null,"This will make the necessary modifications to your ",(0,r.kt)("inlineCode",{parentName:"p"},"App.tsx")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js"),",\nrespectively) which are basically the same as outlined in manual installation\nsteps below."),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"#additional-setup"},"additional setup")," (such as including theme\ncustomizations and Storybook integration) below."),(0,r.kt)("h3",{id:"manual"},"Manual"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside your ",(0,r.kt)("inlineCode",{parentName:"p"},"Redwoodjs")," project , cd into ",(0,r.kt)("inlineCode",{parentName:"p"},"web"),", then, install Chakra UI by\nrunning either of the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After installing Chakra UI, you need to set up the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," at the\nroot of your application. Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"App.js")," and add the ",(0,r.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," like\nthis:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.js"',title:'"App.js"'},'import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";\n\nconst App = () => (\n  <FatalErrorBoundary page={FatalErrorPage}>\n    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">\n      <ColorModeScript />\n      <ChakraProvider>\n        <RedwoodApolloProvider>\n          <Routes />\n        </RedwoodApolloProvider>\n      </ChakraProvider>\n    </RedwoodProvider>\n  </FatalErrorBoundary>\n);\n\nexport default App;\n')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You're good to go with steps 1 and 2. However, if you'd love to\ntake it a step further, check out step 3.")),(0,r.kt)("h3",{id:"notes-on-typescript-"},"Notes on TypeScript \ud83d\udea8"),(0,r.kt)("p",null,"Please note that when adding Chakra UI to a TypeScript project, a minimum\nTypeScript version of ",(0,r.kt)("inlineCode",{parentName:"p"},"4.1.0")," is required."),(0,r.kt)("h2",{id:"additional-setup"},"Additional setup"),(0,r.kt)("h3",{id:"customize-theme"},"Customize Theme"),(0,r.kt)("p",null,"If you intend to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/customize-theme"},"customize the default theme"),", you\nwill need to pass your extended theme object as a prop to ",(0,r.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," as\nfollows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'// 1. Import the extendTheme function\nimport { extendTheme } from "@chakra-ui/react";\n\n// 2. Extend the theme to include custom colors, fonts, etc\nconst colors = {\n  brand: {\n    900: "#1a365d",\n    800: "#153e75",\n    700: "#2a69ac",\n  },\n};\n\nconst theme = extendTheme({ colors });\n\n// 3. Pass the `theme` prop to the `ChakraProvider`\nconst App = () => (\n  <FatalErrorBoundary page={FatalErrorPage}>\n    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">\n      <ColorModeScript />\n      <ChakraProvider theme={theme}>\n        <RedwoodApolloProvider>\n          <Routes />\n        </RedwoodApolloProvider>\n      </ChakraProvider>\n    </RedwoodProvider>\n  </FatalErrorBoundary>\n);\n')),(0,r.kt)("h3",{id:"storybook-integration"},"Storybook Integration"),(0,r.kt)("p",null,"RedwoodJS ships with Storybook included. To automatically wrap your your stories\nwith the ",(0,r.kt)("inlineCode",{parentName:"p"},"<ChakraProvider />")," and add a color mode toggle, follow the steps\nbelow."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The steps outlined here are semantically identical to our\n",(0,r.kt)("a",{parentName:"p",href:"/integrations/with-storybook"},"Storybook integration Guide"),", only the\ninstall commands and file locations differ.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the official Storybook Addon for Chakra UI:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn workspace web add -D @chakra-ui/storybook-addon\nyarn workspace web add @chakra-ui/icons\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the addon to your configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"web/config/storybook.config.js"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="web/config/storybook.config.js"',title:'"web/config/storybook.config.js"'},'module.exports = {\n  addons: [\n    // ...\n    "@chakra-ui/storybook-addon",\n  ],\n};\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Additional configuration:\nIn case you are using any ",(0,r.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/customize-theme"},"Theme customizations"),",\nyou will want to see them applied in Storybook as well. Enable them in ",(0,r.kt)("inlineCode",{parentName:"p"},"web/config/storybook.preview.js"),"\nlike this:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="web/config/storybook.preview.js"',title:'"web/config/storybook.preview.js"'},'const theme = require("../path/to/your/theme");\n\nexport const parameters = {\n  // ...\n  chakra: {\n    theme,\n  },\n};\n')),(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"chakra")," object accepts the same ",(0,r.kt)("a",{parentName:"p",href:"#chakraprovider-props"},"props")," as\n",(0,r.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," (without ",(0,r.kt)("inlineCode",{parentName:"p"},"children"),")."))),(0,r.kt)("h2",{id:"chakraprovider-props"},"ChakraProvider Props"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorModeManager"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"StorageManager")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"localStorageManager")),(0,r.kt)("td",{parentName:"tr",align:null},"Manager to persist a user's color mode preference in")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cssVarsRoot"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},":root")),(0,r.kt)("td",{parentName:"tr",align:null},"The root element that Chakra attaches the CSS variables to")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"environment"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Environment")),(0,r.kt)("td",{parentName:"tr",align:null},"Depends on context"),(0,r.kt)("td",{parentName:"tr",align:null},"The environment (",(0,r.kt)("inlineCode",{parentName:"td"},"window")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"document"),") to be used by all components and hooks. By default, we smartly determine the ownerDocument and defaultView based on where ",(0,r.kt)("inlineCode",{parentName:"td"},"ChakraProvider")," is rendered.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"portalZIndex"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:null},"Common z-index to use for ",(0,r.kt)("inlineCode",{parentName:"td"},"Portal"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resetCSS"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically includes ",(0,r.kt)("inlineCode",{parentName:"td"},"<CSSReset />"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"theme"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Theme")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"@chakra-ui/theme")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional custom theme")))))}m.isMDXComponent=!0}}]);