"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[9052],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(t),h=a,u=f["".concat(l,".").concat(h)]||f[h]||d[h]||r;return t?o.createElement(u,i(i({ref:n},c),{},{components:t})):o.createElement(u,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},55771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={title:"Using Fonts",description:"A guide for adding fonts to your Chakra project",author:"DecliningLotus"},i=void 0,s={unversionedId:"recipes/using-fonts",id:"recipes/using-fonts",title:"Using Fonts",description:"A guide for adding fonts to your Chakra project",source:"@site/content/community/recipes/using-fonts.mdx",sourceDirName:"recipes",slug:"/recipes/using-fonts",permalink:"/community/recipes/using-fonts",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"Using Fonts",description:"A guide for adding fonts to your Chakra project",author:"DecliningLotus"},sidebar:"defaultSidebar",previous:{title:"Chakra UI Prose",permalink:"/community/recipes/prose"},next:{title:"Portals and z-index",permalink:"/community/recipes/z-index"}},l={},p=[{value:"Option 1: Install with NPM",id:"option-1-install-with-npm",level:2},{value:"Option 2: Using <code>@font-face</code>",id:"option-2-using-font-face",level:2}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Fonts can be loaded into your project either by using NPM or by using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Global")," component from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@emotion/react")," package."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please do not forget to add font-family fallbacks like e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"sans-serif"),"\non both options.")),(0,a.kt)("h2",{id:"option-1-install-with-npm"},"Option 1: Install with NPM"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/fontsource/fontsource"},"Fontsource")," is an updating monorepo\nfull of self-hostable fonts bundled into individual NPM packages. It currently\nsupports all Google Fonts and a small subset of other custom Open Source fonts\nthat have been manually added."),(0,a.kt)("p",null,"Hosting your own fonts locally within a project can lead to large performance\ngains as they won't experience extra (render blocking) network requests, as well\nas streamlining developer experiences."),(0,a.kt)("p",null,"For the purposes of this guide, we'll use\n",(0,a.kt)("a",{parentName:"p",href:"https://fonts.google.com/specimen/Open+Sans"},"Open Sans")," for the heading font\nand ",(0,a.kt)("a",{parentName:"p",href:"https://fonts.google.com/specimen/Raleway"},"Raleway")," for the body font. If\nyou have a different font you want to use, you can find the corresponding\npackage on ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/search?q=fontsource"},"NPM")," or their\n",(0,a.kt)("a",{parentName:"p",href:"https://fontsource.org/"},"website"),"."),(0,a.kt)("p",null,"Install the relevant fonts you wish to install using your package manager of\nchoice:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @fontsource/open-sans @fontsource/raleway\n")),(0,a.kt)("p",null,"Assign these fonts to ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.fonts")," to use them with Chakra. More details on\ntheming ",(0,a.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/customize-theme"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { extendTheme } from '@chakra-ui/react';\n\nconst theme = extendTheme({\n  fonts: {\n    heading: `'Open Sans', sans-serif`,\n    body: `'Raleway', sans-serif`,\n  },\n});\n\nexport default theme;\n")),(0,a.kt)("p",null,"Then import the relevant font weights and styles into the same root file you\nimport ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," into."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@fontsource/raleway/400.css';\nimport '@fontsource/open-sans/700.css';\n\nimport {\n  ChakraProvider,\n  Container,\n  Stack,\n  Heading,\n  Text,\n} from '@chakra-ui/react';\nimport theme from './theme';\n\nconst App = () => (\n  <ChakraProvider theme={theme}>\n    <Container>\n      <Stack>\n        <Heading>The spectacle before us was indeed sublime.</Heading>\n        <Text>\n          Apparently we had reached a great height in the atmosphere, for the\n          sky was a dead black, and the stars had ceased to twinkle. By the same\n          illusion which lifts the horizon of the sea to the level of the\n          spectator on a hillside, the sable cloud beneath was dished out, and\n          the car seemed to float in the middle of an immense dark sphere, whose\n          upper half was strewn with silver. Looking down into the dark gulf\n          below, I could see a ruddy light streaming through a rift in the\n          clouds.\n        </Text>\n      </Stack>\n    </Container>\n  </ChakraProvider>\n);\n")),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},"For Create React App, you need to set this up in ",(0,a.kt)("inlineCode",{parentName:"li"},"index.js")),(0,a.kt)("li",{parentName:"ul"},"In Next.js, this can be found in ",(0,a.kt)("inlineCode",{parentName:"li"},"_app.js")),(0,a.kt)("li",{parentName:"ul"},"In Gatsby, usually ",(0,a.kt)("inlineCode",{parentName:"li"},"ChakraProvider")," is set up in ",(0,a.kt)("inlineCode",{parentName:"li"},"gatsby-browser.js")," using\n",(0,a.kt)("inlineCode",{parentName:"li"},"wrapRootElement")))),(0,a.kt)("h2",{id:"option-2-using-font-face"},"Option 2: Using ",(0,a.kt)("inlineCode",{parentName:"h2"},"@font-face")),(0,a.kt)("p",null,"Alternatively, custom fonts can be loaded in your Chakra project using the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Global")," component from the ",(0,a.kt)("inlineCode",{parentName:"p"},"@emotion/react")," package and ",(0,a.kt)("inlineCode",{parentName:"p"},"@font-face")," css rules.\nYou can then add these fonts to ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.fonts")," to make use of them throughout the\nChakra system."),(0,a.kt)("p",null,"First, we'll import all our relevant font files into the ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"static"),"\ndirectory of your project, where the files will persist in location. Please note\nthat these persisting folders can vary per bundler or framework and should be\ndouble-checked. This can later be used for the ",(0,a.kt)("inlineCode",{parentName:"p"},"url")," selector for the\n",(0,a.kt)("inlineCode",{parentName:"p"},"@font-face")," CSS rules."),(0,a.kt)("p",null,"Next, we'll define a ",(0,a.kt)("inlineCode",{parentName:"p"},"Fonts")," component that sets up the ",(0,a.kt)("inlineCode",{parentName:"p"},"@font-face")," rules in\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"styles")," prop of ",(0,a.kt)("inlineCode",{parentName:"p"},"Global"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Global } from '@emotion/react';\n\nconst Fonts = () => (\n  <Global\n    styles={`\n      /* latin */\n      @font-face {\n        font-family: 'Heading Font Name';\n        font-style: normal;\n        font-weight: 700;\n        font-display: swap;\n        src: url('./fonts/headingfont.woff2') format('woff2'), url('./fonts/headingfont.woff') format('woff');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      /* latin */\n      @font-face {\n        font-family: 'Body Font Name';\n        font-style: normal;\n        font-weight: 400;\n        font-display: swap;\n        src: url('./fonts/bodyfont.woff2') format('woff2'), url('./fonts/bodyfont.woff') format('woff');\n        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n      }\n      `}\n  />\n);\n\nexport default Fonts;\n")),(0,a.kt)("p",null,"Assign these fonts to ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.fonts")," to use them with Chakra. More details on\ntheming ",(0,a.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/customize-theme"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { extendTheme } from '@chakra-ui/react';\n\nconst theme = extendTheme({\n  fonts: {\n    heading: `'Heading Font Name', sans-serif`,\n    body: `'Body Font Name', sans-serif`,\n  },\n});\n\nexport default theme;\n")),(0,a.kt)("p",null,"Then compose the rest of the project together by importing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fonts")," component\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import {\n  ChakraProvider,\n  Container,\n  Stack,\n  Heading,\n  Text,\n} from '@chakra-ui/react';\nimport Fonts from './fonts';\nimport theme from './theme';\n\nconst App = () => (\n  <ChakraProvider theme={theme}>\n    <Fonts />\n    <Container>\n      <Stack>\n        <Heading>The spectacle before us was indeed sublime.</Heading>\n        <Text>\n          Apparently we had reached a great height in the atmosphere, for the\n          sky was a dead black, and the stars had ceased to twinkle. By the same\n          illusion which lifts the horizon of the sea to the level of the\n          spectator on a hillside, the sable cloud beneath was dished out, and\n          the car seemed to float in the middle of an immense dark sphere, whose\n          upper half was strewn with silver. Looking down into the dark gulf\n          below, I could see a ruddy light streaming through a rift in the\n          clouds.\n        </Text>\n      </Stack>\n    </Container>\n  </ChakraProvider>\n);\n")))}d.isMDXComponent=!0}}]);