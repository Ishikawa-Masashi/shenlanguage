"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[2403],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var m={};for(var s in r)hasOwnProperty.call(r,s)&&(m[s]=r[s]);m.originalType=e,m[p]="string"==typeof e?e:o,i[1]=m;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73842:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>m,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const a={title:"Chakra UI + React Hook Form",description:"Building Forms with Chakra UI and React Hook Form",tags:["form","react-hook-form"],author:"abheist",category:"integrations"},i=void 0,m={unversionedId:"integrations/with-hook-form",id:"integrations/with-hook-form",title:"Chakra UI + React Hook Form",description:"Building Forms with Chakra UI and React Hook Form",source:"@site/content/home/integrations/with-hook-form.mdx",sourceDirName:"integrations",slug:"/integrations/with-hook-form",permalink:"/integrations/with-hook-form",draft:!1,tags:[{label:"form",permalink:"/tags/form"},{label:"react-hook-form",permalink:"/tags/react-hook-form"}],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"Chakra UI + React Hook Form",description:"Building Forms with Chakra UI and React Hook Form",tags:["form","react-hook-form"],author:"abheist",category:"integrations"},sidebar:"defaultSidebar",previous:{title:"Chakra UI + Framer Motion",permalink:"/integrations/with-framer"},next:{title:"Chakra UI + React Table",permalink:"/integrations/with-react-table"}},s={},c=[],l=(p="SandpackEditor",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var p;const u={toc:c};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how to build a simple form with Chakra UI's form components\nand the ",(0,o.kt)("a",{parentName:"p",href:"https://react-hook-form.com"},"React Hook Form")," form library:"),(0,o.kt)(l,{dependencies:{"react-hook-form":"latest"},mdxType:"SandpackEditor"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"HookForm.tsx active","HookForm.tsx":!0,active:!0},'import { useForm } from "react-hook-form";\nimport {\n  FormErrorMessage,\n  FormLabel,\n  FormControl,\n  Input,\n  Button,\n} from "@chakra-ui/react";\n\nexport default function HookForm() {\n  const {\n    handleSubmit,\n    register,\n    formState: { errors, isSubmitting },\n  } = useForm();\n\n  function onSubmit(values) {\n    return new Promise((resolve) => {\n      setTimeout(() => {\n        alert(JSON.stringify(values, null, 2));\n        resolve();\n      }, 3000);\n    });\n  }\n\n  return (\n    <form onSubmit={handleSubmit(onSubmit)}>\n      <FormControl isInvalid={errors.name}>\n        <FormLabel htmlFor="name">First name</FormLabel>\n        <Input\n          id="name"\n          placeholder="name"\n          {...register("name", {\n            required: "This is required",\n            minLength: { value: 4, message: "Minimum length should be 4" },\n          })}\n        />\n        <FormErrorMessage>\n          {errors.name && errors.name.message}\n        </FormErrorMessage>\n      </FormControl>\n      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">\n        Submit\n      </Button>\n    </form>\n  );\n}\n')),(0,o.kt)("p",null,"Wiring up to the rest of your app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"App.tsx","App.tsx":!0},'import { ChakraProvider } from "@chakra-ui/react";\nimport HookForm from "./HookForm";\n\nconst App = () => {\n  return (\n    <ChakraProvider>\n        <HookForm />\n    </ChakraProvider>\n  );\n}\n\nexport default App;\n\n'))))}f.isMDXComponent=!0}}]);