"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[734],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},l="Portal",i={unversionedId:"components/other/portal/index",id:"components/other/portal/index",title:"Portal",description:"Renders a component outside the current DOM hierarchy.",source:"@site/content/docs/components/other/portal/index.mdx",sourceDirName:"components/other/portal",slug:"/components/other/portal/",permalink:"/shenlanguage/docs/components/other/portal/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/shenlanguage/docs/components/other/close-button/theming"},next:{title:"Show / Hide",permalink:"/shenlanguage/docs/components/other/show-hide/"}},p={},s=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Using a custom container",id:"using-a-custom-container",level:3},{value:"Nesting Portals",id:"nesting-portals",level:3},{value:"Opting out of portal nesting",id:"opting-out-of-portal-nesting",level:3},{value:"Props",id:"props",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},d=c("ComponentLinks"),u=c("PropsTable"),m={toc:s};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"portal"},"Portal"),(0,o.kt)("p",null,"Renders a component outside the current DOM hierarchy."),(0,o.kt)(d,{github:{package:"portal"},npm:{package:"@chakra-ui/portal"},mdxType:"ComponentLinks"}),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { Portal } from "@chakra-ui/react";\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Portal is used to transport any component or element to the end of\n",(0,o.kt)("inlineCode",{parentName:"p"},"document.body")," and renders a React tree into it."),(0,o.kt)("p",null,"Useful for rendering a natural React element hierarchy with a different DOM\nhierarchy to prevent parent styles from clipping or hiding content (for\npopovers, dropdowns, and modals). It supports nested portals"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  return (\n    <Box bg="red.400" color="white">\n      I\'m here,\n      <Portal>This text is portaled at the end of document.body!</Portal>\n    </Box>\n  );\n}\n')),(0,o.kt)("h3",{id:"using-a-custom-container"},"Using a custom container"),(0,o.kt)("p",null,"You can render the contents within a portal to a different DOM node, instead of\nthe default ",(0,o.kt)("inlineCode",{parentName:"p"},"document.body"),". Pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"containerRef")," prop and set its value to\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"ref")," of the container you'd like to use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const ref = React.useRef();\n  return (\n    <Box bg="red.400" color="white">\n      I\'m here,\n      <Portal containerRef={ref}>\n        Portal: This text is portaled to the yellow box!\n      </Portal>\n      <Box ref={ref} bg="yellow.500">\n        <div>Container: Hey,</div>\n      </Box>\n    </Box>\n  );\n}\n')),(0,o.kt)("h3",{id:"nesting-portals"},"Nesting Portals"),(0,o.kt)("p",null,"You can also nest multiple portals within themselves, this will create a nested\nDOM hierarchy to make it easy to create nested modals, popovers, etc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const ref = React.useRef();\n  return (\n    <div>\n      <Portal containerRef={ref}>\n        <Box bg="teal.500" color="white">\n          Parent: Hey welcome,\n          <Portal>Child: I\'m attached to my parent portal</Portal>\n        </Box>\n      </Portal>\n      <Box bg="red.400" color="white" ref={ref} />\n    </div>\n  );\n}\n')),(0,o.kt)("h3",{id:"opting-out-of-portal-nesting"},"Opting out of portal nesting"),(0,o.kt)("p",null,"In some cases, you might not want portal nodes to be nested to their parent\nportals. To opt out of this, pass ",(0,o.kt)("inlineCode",{parentName:"p"},"appendToParentPortal")," and set it to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const ref = React.useRef();\n  return (\n    <div>\n      <Portal containerRef={ref}>\n        <Box bg="teal.500" color="white">\n          Parent: Hey welcome,\n          <Portal appendToParentPortal={false}>\n            Child: I\'m going to document.body\n          </Portal>\n        </Box>\n      </Portal>\n      <div style={{ background: "red" }} ref={ref} />\n    </div>\n  );\n}\n')),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)(u,{of:"Portal",mdxType:"PropsTable"}))}f.isMDXComponent=!0}}]);