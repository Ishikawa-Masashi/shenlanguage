"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[7307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),k=a,m=d["".concat(i,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"useCheckbox",package:"@chakra-ui/checkbox",description:"React hook to manage checkboxes."},l=void 0,p={unversionedId:"hooks/use-checkbox",id:"hooks/use-checkbox",title:"useCheckbox",description:"React hook to manage checkboxes.",source:"@site/content/docs/hooks/use-checkbox.mdx",sourceDirName:"hooks",slug:"/hooks/use-checkbox",permalink:"/docs/hooks/use-checkbox",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"useCheckbox",package:"@chakra-ui/checkbox",description:"React hook to manage checkboxes."},sidebar:"defaultSidebar",previous:{title:"useCheckboxGroup",permalink:"/docs/hooks/use-checkbox-group"},next:{title:"useClipboard",permalink:"/docs/hooks/use-clipboard"}},i={},c=[{value:"Import",id:"import",level:2},{value:"Return value",id:"return-value",level:2},{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],s=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:c};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useCheckbox")," is a custom hook used to provide checkbox functionality, as well\nas state and focus management to custom checkbox components when using it."),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { useCheckbox } from '@chakra-ui/react'\n")),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useCheckbox")," hook returns following props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"state")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"CheckboxState")),(0,a.kt)("td",{parentName:"tr",align:null},"An object that contains all props defining the current state of a checkbox.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getCheckboxProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PropGetter")),(0,a.kt)("td",{parentName:"tr",align:null},"A function to get the props of the checkbox.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getInputProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PropGetter")),(0,a.kt)("td",{parentName:"tr",align:null},"A function to get the props of the input field.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"getLabelProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PropGetter")),(0,a.kt)("td",{parentName:"tr",align:null},"A function to get the props of the checkbox label.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"htmlProps")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"{}")),(0,a.kt)("td",{parentName:"tr",align:null},"An object with all htmlProps.")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function Example() {\n  const CustomCheckbox = (props) => {\n    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =\n      useCheckbox(props)\n\n    return (\n      <chakra.label\n        display='flex'\n        flexDirection='row'\n        alignItems='center'\n        gridColumnGap={2}\n        maxW='36'\n        bg='green.50'\n        border='1px solid'\n        borderColor='green.500'\n        rounded='lg'\n        px={3}\n        py={1}\n        cursor='pointer'\n        {...htmlProps}\n      >\n        <input {...getInputProps()} hidden />\n        <Flex\n          alignItems='center'\n          justifyContent='center'\n          border='2px solid'\n          borderColor='green.500'\n          w={4}\n          h={4}\n          {...getCheckboxProps()}\n        >\n          {state.isChecked && <Box w={2} h={2} bg='green.500' />}\n        </Flex>\n        <Text color=\"gray.700\" {...getLabelProps()}>Click me</Text>\n      </chakra.label>\n    )\n  }\n\n  return (\n    <div>\n      <CustomCheckbox />\n    </div>\n  )\n}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useCheckbox")," hook accepts an object with the following properties:"),(0,a.kt)(s,{of:"useCheckbox",mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);