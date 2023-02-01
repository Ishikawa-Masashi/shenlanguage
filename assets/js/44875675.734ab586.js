"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[7184],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=m(t),c=a,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return t?r.createElement(k,i(i({ref:n},l),{},{components:t})):r.createElement(k,i({ref:n},l))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=c;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var m=2;m<o;m++)i[m]=t[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},95274:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>m,metadata:()=>u,toc:()=>c});var r=t(87462),a=(t(67294),t(3905));const o=(i="SandpackEditor",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var i;const p={toc:[]};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)(o,{dependencies:{formik:"latest"},mdxType:"SandpackEditor"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"image-radio.tsx","image-radio.tsx":!0},'  import { useField } from "formik";\nimport {\n  Box,\n  Image,\n  UseRadioProps,\n  useRadio,\n  ImageProps,\n  chakra,\n  useRadioGroupContext,\n} from "@chakra-ui/react";\nimport * as React from "react";\n\ntype Props = UseRadioProps &\n  ImageProps & {\n    image: string,\n  };\n\nconst ImageRadio = React.forwardRef((props: Props, ref) => {\n  const { image, name, ...radioProps } = props;\n  const group = useRadioGroupContext();\n\n  let isChecked = group.value.toString() === props.value.toString();\n\n  const [{ checked, ...field }] = useField({\n    name,\n    type: "radio",\n    value: radioProps.value.toString(),\n    checked: isChecked,\n  });\n\n  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } =\n    useRadio({\n      isChecked: isChecked,\n      ...field,\n    });\n\n  return (\n    <chakra.label {...htmlProps} cursor="pointer">\n      <input {...getInputProps({}, ref)} hidden />\n      <Box\n        {...getCheckboxProps()}\n        bg={state.isChecked ? "green.200" : "transparent"}\n        w={12}\n        p={1}\n        rounded="full"\n      >\n        <Image src={image} rounded="full" {...getLabelProps()} />\n      </Box>\n    </chakra.label>\n  );\n});\n\nexport default ImageRadio;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"radio-group.tsx","radio-group.tsx":!0},'import { useField } from "formik";\nimport {\n  RadioGroup as ChakraRadioGroup,\n  RadioGroupProps as ChakraRadioGroupProps,\n} from "@chakra-ui/react";\nimport * as React from "react";\n\ntype Props = ChakraRadioGroupProps;\n\nconst RadioGroup = ({ name, children, ...props }: Props) => {\n  const [field, , { setValue }] = useField({ name, value: props.value });\n\n  const namedChildren = React.Children.map(children, (child) => {\n    if (!React.isValidElement(child)) return;\n\n    return React.cloneElement(child, {\n      name,\n    });\n  });\n\n  return (\n    <ChakraRadioGroup\n      {...props}\n      {...field}\n      onChange={setValue}\n      children={namedChildren}\n    />\n  );\n};\n\nexport default RadioGroup;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"input.tsx","input.tsx":!0},'import { FieldHookConfig, useField } from "formik";\nimport {\n  Input as ChakraInput,\n  InputProps as ChakraInputProps,\n} from "@chakra-ui/react";\n\ntype Props = ChakraInputProps & FieldHookConfig<"input">;\n\nconst Input = ({ name, ...props }: Props) => {\n  const [field] = useField(name);\n  return <ChakraInput {...props} {...field} />;\n};\n\nexport default Input;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"home.tsx active","home.tsx":!0,active:!0},'\nimport { Box, Button } from "@chakra-ui/react";\nimport { Formik, FormikProps } from "formik";\n\nimport Input from "./input";\nimport RadioGroup from "./radio-group";\nimport ImageRadio from "./image-radio";\n\nconst AVATARS = [\n  { name: "Kat", image: "https://randomuser.me/api/portraits/women/44.jpg" },\n  { name: "Kevin", image: "https://randomuser.me/api/portraits/men/86.jpg" },\n  { name: "Andy", image: "https://randomuser.me/api/portraits/men/29.jpg" },\n  { name: "Jess", image: "https://randomuser.me/api/portraits/women/95.jpg" }\n];\n\ntype Values = {\n  email: string;\n  avatar: string;\n};\n\nconst Home = () => {\n  return (\n    <Box p={24}>\n      <Formik\n        initialValues={{ email: "", avatar: AVATARS[0].name }}\n        onSubmit={(values) => {\n          alert(JSON.stringify(values, null, 2));\n        }}\n      >\n        {(props: FormikProps<Values>) => (\n          <form onSubmit={props.handleSubmit}>\n            <Input name="email" />\n            <RadioGroup name="avatar" py={2} display="flex" gridColumnGap={2}>\n              {AVATARS.map(({ name, image }) => (\n                <ImageRadio key={image} image={image} value={name} />\n            ))}\n            </RadioGroup>\n            <Button type="submit">Submit</Button>\n          </form>\n        )}\n      </Formik>\n    </Box>\n  );\n}\n\nexport default Home;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"App.tsx","App.tsx":!0},'import * as React from "react";\nimport { createRoot } from "react-dom/client";\nimport Home from \'./home\';\nimport { ChakraProvider, Heading } from "@chakra-ui/react";\n\nfunction App() {\n  return (\n     <ChakraProvider>\n         <Home />\n      </ChakraProvider>\n  );\n}\n\nexport default App;\n'))))}s.isMDXComponent=!0;const m={title:"Advanced Formik integration",description:"Advanced customization and integration of Chakra UI and Formik.",tags:["formik","form","integration"],author:"aacevski"},l=void 0,u={unversionedId:"recipes/advanced-formik-integration",id:"recipes/advanced-formik-integration",title:"Advanced Formik integration",description:"Advanced customization and integration of Chakra UI and Formik.",source:"@site/content/community/recipes/advanced-formik-integration.mdx",sourceDirName:"recipes",slug:"/recipes/advanced-formik-integration",permalink:"/community/recipes/advanced-formik-integration",draft:!1,tags:[{label:"formik",permalink:"/community/tags/formik"},{label:"form",permalink:"/community/tags/form"},{label:"integration",permalink:"/community/tags/integration"}],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"Advanced Formik integration",description:"Advanced customization and integration of Chakra UI and Formik.",tags:["formik","form","integration"],author:"aacevski"},sidebar:"defaultSidebar",previous:{title:"Showcase",permalink:"/community/showcase"},next:{title:"The as prop and Custom component",permalink:"/community/recipes/as-prop"}},d={},c=[],k={toc:c};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Chakra UI can be coupled smoothly with ",(0,a.kt)("a",{parentName:"p",href:"https://formik.org/"},"Formik"),", by the end\nof the example up ahead, you will be proficient at Chakra & Formik."),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"ImageRadio")," component, we will utilize the ",(0,a.kt)("inlineCode",{parentName:"p"},"useRadio")," hook from Chakra\nUI to get the necessary props and the ",(0,a.kt)("inlineCode",{parentName:"p"},"isChecked")," boolean. ",(0,a.kt)("inlineCode",{parentName:"p"},"isChecked")," will be\nused for validation in Formik's ",(0,a.kt)("inlineCode",{parentName:"p"},"useField")," hook."),(0,a.kt)("p",null,"To finalize, we will need to render our content and pass ",(0,a.kt)("inlineCode",{parentName:"p"},"getInputProps")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"getCheckedProps")," from Chakra UI."),(0,a.kt)(s,{mdxType:"AdvancedFormikIntegrationSandpack"}),(0,a.kt)("p",null,"In the example above, there are 2 more components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Radio Group")," - which renders multiple radio buttons"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Input")," - where we will enter our value of choice")),(0,a.kt)("p",null,"Upon submitting the form, in the CodeSandbox console, you should see the result\nof which radio you've selected but also the value of the input."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you have any questions, or need help around an advanced usage, don't\nhesitate to reach out in our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/chakra-ui"},"Discord server"),".")))}f.isMDXComponent=!0}}]);