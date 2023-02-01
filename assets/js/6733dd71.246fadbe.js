"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[4204],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},30138:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Meteor",description:"A guide for installing Chakra UI with meteor projects",tags:["meteor"],author:"grubba27",category:"frameworks",sidebar_position:80},i=void 0,l={unversionedId:"frameworks/meteor-guide",id:"frameworks/meteor-guide",title:"Meteor",description:"A guide for installing Chakra UI with meteor projects",source:"@site/content/getting-started/frameworks/meteor-guide.mdx",sourceDirName:"frameworks",slug:"/frameworks/meteor-guide",permalink:"/getting-started/frameworks/meteor-guide",draft:!1,tags:[{label:"meteor",permalink:"/getting-started/tags/meteor"}],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",sidebarPosition:80,frontMatter:{title:"Meteor",description:"A guide for installing Chakra UI with meteor projects",tags:["meteor"],author:"grubba27",category:"frameworks",sidebar_position:80},sidebar:"defaultSidebar",previous:{title:"Vite",permalink:"/getting-started/frameworks/vite-guide"},next:{title:"Chakra UI + Capsize",permalink:"/getting-started/integrations/with-capsize"}},p={},s=[{value:"1. Installation",id:"1-installation",level:2},{value:"ChakraProvider Props",id:"chakraprovider-props",level:3},{value:"2. Optional Setup",id:"2-optional-setup",level:2},{value:"Customizing Theme",id:"customizing-theme",level:3},{value:"Using Chakra Icons",id:"using-chakra-icons",level:3},{value:"Notes on TypeScript \ud83d\udea8",id:"notes-on-typescript-",level:3}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-installation"},"1. Installation"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To get started with Meteor and Chakra UI, you must have the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.meteor.com/developers/install"},"Meteor CLI")," installed.")),(0,a.kt)("p",null,"To create a Chakra UI with ",(0,a.kt)("inlineCode",{parentName:"p"},"meteor")," project, simply run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"meteor create project-name --chakra-ui\n")),(0,a.kt)("p",null,"This creates a project with Chakra UI and sets up the ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraProvider"),"."),(0,a.kt)("h3",{id:"chakraprovider-props"},"ChakraProvider Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resetCSS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},"automatically includes ",(0,a.kt)("inlineCode",{parentName:"td"},"<CSSReset />"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"theme"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Theme")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@chakra-ui/theme")),(0,a.kt)("td",{parentName:"tr",align:null},"optional custom theme")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"colorModeManager"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"StorageManager")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"localStorageManager")),(0,a.kt)("td",{parentName:"tr",align:null},"manager to persist a users color mode preference in")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"portalZIndex"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},"common z-index to use for ",(0,a.kt)("inlineCode",{parentName:"td"},"Portal"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You're good to go with steps 1 and 2. However, if you'd love to\ntake it a step further, check out step 3.")),(0,a.kt)("h2",{id:"2-optional-setup"},"2. Optional Setup"),(0,a.kt)("h3",{id:"customizing-theme"},"Customizing Theme"),(0,a.kt)("p",null,"If you intend to customise the default theme object to match your design\nrequirements, you can extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"@chakra-ui/react"),"."),(0,a.kt)("p",null,"Chakra UI provides an ",(0,a.kt)("inlineCode",{parentName:"p"},"extendTheme")," function that deep merges the default theme\nwith your customizations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// 1. Import the extendTheme function\nimport { extendTheme } from '@chakra-ui/react';\n\n// 2. Extend the theme to include custom colors, fonts, etc\nconst colors = {\n  brand: {\n    900: '#1a365d',\n    800: '#153e75',\n    700: '#2a69ac',\n  },\n};\n\nconst theme = extendTheme({ colors });\n\n// 3. Pass the `theme` prop to the `ChakraProvider`\nfunction App() {\n  return (\n    <ChakraProvider theme={theme}>\n      <ErrorBoundary\n        FallbackComponent={RootErrorFallback}\n        resetKeys={[router.asPath]}\n        onReset={() => {\n          // This ensures the Blitz useQuery hooks will automatically refetch\n          // data any time you reset the error boundary\n          queryCache.resetErrorBoundaries();\n        }}\n      >\n        {getLayout(<Component {...pageProps} />)}\n      </ErrorBoundary>\n    </ChakraProvider>\n  );\n}\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To further customize components or build your own design system, the\n",(0,a.kt)("inlineCode",{parentName:"p"},"theme-tools")," package includes useful utilities. Install\n",(0,a.kt)("inlineCode",{parentName:"p"},"@chakra-ui/theme-tools"),".")),(0,a.kt)("h3",{id:"using-chakra-icons"},"Using Chakra Icons"),(0,a.kt)("p",null,"Chakra provides a set of commonly used interface icons you can use in your\nproject."),(0,a.kt)("p",null,"If you want to use the icons from Chakra UI, install ",(0,a.kt)("inlineCode",{parentName:"p"},"@chakra-ui/icons"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Follow this guide for customising Chakra Icons:\n",(0,a.kt)("a",{parentName:"p",href:"/docs/components/media-and-icons/icon"},"Using Chakra UI Icons"),".")),(0,a.kt)("h3",{id:"notes-on-typescript-"},"Notes on TypeScript \ud83d\udea8"),(0,a.kt)("p",null,"Please note that when adding Chakra UI to a TypeScript project, a minimum\nTypeScript version of ",(0,a.kt)("inlineCode",{parentName:"p"},"4.1.0")," is required."))}d.isMDXComponent=!0}}]);