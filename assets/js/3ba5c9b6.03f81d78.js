"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[5679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11307:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>p,metadata:()=>m,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const a=(l="SandpackEditor",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var l;const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a,{mdxType:"SandpackEditor"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"App.tsx","App.tsx":!0},'  import {\n  ChakraProvider,\n  FormControl,\n  FormErrorMessage,\n  FormHelperText,\n  FormLabel,\n  Input,\n  extendTheme,\n  Box\n} from "@chakra-ui/react";\nconst activeLabelStyles = {\n  transform: "scale(0.85) translateY(-24px)"\n};\nexport const theme = extendTheme({\n  components: {\n    Form: {\n      variants: {\n        floating: {\n          container: {\n            _focusWithin: {\n              label: {\n                ...activeLabelStyles\n              }\n            },\n            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {\n              ...activeLabelStyles\n            },\n            label: {\n              top: 0,\n              left: 0,\n              zIndex: 2,\n              position: "absolute",\n              backgroundColor: "white",\n              pointerEvents: "none",\n              mx: 3,\n              px: 1,\n              my: 2,\n              transformOrigin: "left top"\n            }\n          }\n        }\n      }\n    }\n  }\n});\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={theme}>\n      <Box p={8}>\n        <FormControl variant="floating" id="first-name" isRequired isInvalid>\n          <Input placeholder=" " />\n          {/* It is important that the Label comes after the Control due to css selectors */}\n          <FormLabel>First name</FormLabel>\n          <FormHelperText>Keep it very short and sweet!</FormHelperText>\n          <FormErrorMessage>Your First name is invalid</FormErrorMessage>\n        </FormControl>\n      </Box>\n    </ChakraProvider>\n  );\n}\n\nexport default App;\n'))))}s.isMDXComponent=!0;const p={title:"Floating Labels",description:"How to implement floating labels in Chakra UI",author:"Patrick-Ullrich"},c=void 0,m={unversionedId:"recipes/floating-labels",id:"recipes/floating-labels",title:"Floating Labels",description:"How to implement floating labels in Chakra UI",source:"@site/content/community/recipes/floating-labels.mdx",sourceDirName:"recipes",slug:"/recipes/floating-labels",permalink:"/community/recipes/floating-labels",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"Floating Labels",description:"How to implement floating labels in Chakra UI",author:"Patrick-Ullrich"},sidebar:"defaultSidebar",previous:{title:"Atlaskit editable",permalink:"/community/recipes/atlaskit-editable"},next:{title:"Horizontal Collapse",permalink:"/community/recipes/horizontal-collapse"}},u={},d=[],f={toc:d};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"While Chakra UI doesn't enforce a specific style or design system, it makes it\neasy to implement what ever style you want yourself. One popular style are the\nuse of ",(0,o.kt)("inlineCode",{parentName:"p"},"floating labels"),"."),(0,o.kt)("p",null,"This is one way to implement floating labels in your project, it doesn't mean\nthis is the only way to achieve this."),(0,o.kt)("p",null,"Below is the gist to achieve floating labels."),(0,o.kt)(s,{mdxType:"FloatingLabelsSandpack"}),";")}b.isMDXComponent=!0}}]);