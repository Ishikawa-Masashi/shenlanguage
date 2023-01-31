"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[5215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Atlaskit editable",description:"A well styled editable inspired by the Atlaskit inline edit component",tags:["editable","inline-edit","component"],author:"Jacob Marshall (github.com/jacobhq)"},i=void 0,l={unversionedId:"recipes/atlaskit-editable",id:"recipes/atlaskit-editable",title:"Atlaskit editable",description:"A well styled editable inspired by the Atlaskit inline edit component",source:"@site/content/community/recipes/atlaskit-editable.mdx",sourceDirName:"recipes",slug:"/recipes/atlaskit-editable",permalink:"/community/recipes/atlaskit-editable",draft:!1,tags:[{label:"editable",permalink:"/community/tags/editable"},{label:"inline-edit",permalink:"/community/tags/inline-edit"},{label:"component",permalink:"/community/tags/component"}],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"Atlaskit editable",description:"A well styled editable inspired by the Atlaskit inline edit component",tags:["editable","inline-edit","component"],author:"Jacob Marshall (github.com/jacobhq)"},sidebar:"defaultSidebar",previous:{title:"The as prop and Custom component",permalink:"/community/recipes/as-prop"},next:{title:"Floating Labels",permalink:"/community/recipes/floating-labels"}},s={},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This example features a tweaked UI, a hover color with dark mode support, and a tooltip. As you can see, we can change the input by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"as")," prop. This design is inspired by the ",(0,a.kt)("a",{parentName:"p",href:"https://atlassian.design/components/inline-edit/examples"},"Atlassian inline edit")," component. Read more about the editable ",(0,a.kt)("a",{parentName:"p",href:"/docs/components/forms/editable"},"here"),"."),(0,a.kt)("p",null,"Here are the imports required:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  EditablePreview,\n  Box,\n  useColorModeValue,\n  IconButton,\n  Input,\n  useDisclosure,\n  useEditableControls,\n  ButtonGroup,\n  SlideFade,\n  Editable,\n  Tooltip,\n  EditableInput,\n} from "@chakra-ui/react";\nimport { CheckIcon, CloseIcon } from "@chakra-ui/icons";\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'function App() {\n  /* Here\'s a custom control */\n  function EditableControls() {\n    const {\n      isEditing,\n      getSubmitButtonProps,\n      getCancelButtonProps,\n      getEditButtonProps,\n    } = useEditableControls();\n\n    return isEditing ? (\n      <ButtonGroup justifyContent="end" size="sm" w="full" spacing={2} mt={2}>\n        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />\n        <IconButton\n          icon={<CloseIcon boxSize={3} />}\n          {...getCancelButtonProps()}\n        />\n      </ButtonGroup>\n    ) : null;\n  }\n\n  return (\n    <Editable\n      defaultValue="Rasengan \u26a1\ufe0f"\n      isPreviewFocusable={true}\n      selectAllOnFocus={false}\n    >\n      <Tooltip label="Click to edit">\n        <EditablePreview\n          py={2}\n          px={4}\n          _hover={{\n            background: useColorModeValue("gray.100", "gray.700"),\n          }}\n        />\n      </Tooltip>\n      <Input py={2} px={4} as={EditableInput} />\n      <EditableControls />\n    </Editable>\n  );\n}\n')))}u.isMDXComponent=!0}}]);