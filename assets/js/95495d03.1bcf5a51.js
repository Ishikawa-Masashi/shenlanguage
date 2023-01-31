"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[9463],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=s(t),c=a,k=d["".concat(l,".").concat(c)]||d[c]||u[c]||o;return t?r.createElement(k,i(i({ref:n},p),{},{components:t})):r.createElement(k,i({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74493:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const o={title:"Chakra UI + Formik",description:"Integrating Chakra UI with Formik",tags:["form","formik"],author:"nikolovlazar",category:"integrations"},i=void 0,m={unversionedId:"integrations/with-formik",id:"integrations/with-formik",title:"Chakra UI + Formik",description:"Integrating Chakra UI with Formik",source:"@site/content/getting-started/integrations/with-formik.mdx",sourceDirName:"integrations",slug:"/integrations/with-formik",permalink:"/shenlanguage/integrations/with-formik",draft:!1,tags:[{label:"form",permalink:"/shenlanguage/tags/form"},{label:"formik",permalink:"/shenlanguage/tags/formik"}],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{title:"Chakra UI + Formik",description:"Integrating Chakra UI with Formik",tags:["form","formik"],author:"nikolovlazar",category:"integrations"},sidebar:"defaultSidebar",previous:{title:"Chakra UI + Capsize",permalink:"/shenlanguage/integrations/with-capsize"},next:{title:"Chakra UI + Framer Motion",permalink:"/shenlanguage/integrations/with-framer"}},l={},s=[],p=(u="SandpackEditor",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var u;const d={toc:s};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The way we start building forms with ",(0,a.kt)("a",{parentName:"p",href:"https://formik.org/"},"Formik")," is by using\nits ",(0,a.kt)("inlineCode",{parentName:"p"},"useFormik")," hook that returns us the formik instance. That Formik instance\ncontains pretty much everything we need to connect our form's UI elements and\nsubmit handler. Let's see a pure React + Formik example:"),(0,a.kt)(p,{dependencies:{formik:"latest"},mdxType:"SandpackEditor"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"App.tsx","App.tsx":!0},"import { useFormik } from \"formik\";\n\nconst App = () => {\n  // Pass the useFormik() hook initial form values and a submit function that will\n  // be called when the form is submitted\n  const formik = useFormik({\n    initialValues: {\n      email: '',\n    },\n    onSubmit: (values) => {\n      alert(JSON.stringify(values, null, 2))\n    },\n  })\n  return (\n    <form onSubmit={formik.handleSubmit}>\n      <label htmlFor='email'>Email Address</label>\n      <input\n        id='email'\n        name='email'\n        type='email'\n        onChange={formik.handleChange}\n        value={formik.values.email}\n      />\n\n      <button type='submit'>Submit</button>\n    </form>\n  )\n}\n\nexport default App;\n"))),(0,a.kt)("p",null,"As you can see from the example above, our ",(0,a.kt)("inlineCode",{parentName:"p"},"formik")," instance contains the\n",(0,a.kt)("inlineCode",{parentName:"p"},"handleSubmit"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"handleChange"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"values"),", and we use them to handle the\nsubmit event, handle all of the change events, and keep the values in a single\nvariable."),(0,a.kt)("p",null,"Introducing Chakra UI into the mix is very straightforward! If we were to\nreplace the ",(0,a.kt)("inlineCode",{parentName:"p"},"input")," element in the example above with a Chakra UI ",(0,a.kt)("inlineCode",{parentName:"p"},"Input"),"\ncomponent, everything will work the same!"),(0,a.kt)(p,{dependencies:{formik:"latest"},mdxType:"SandpackEditor"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"SimpleFormik.tsx active","SimpleFormik.tsx":!0,active:!0},"import { useFormik } from \"formik\";\nimport { Input, Button } from \"@chakra-ui/react\";\n\nconst SimpleFormik = () => {\n  const formik = useFormik({\n    initialValues: {\n      email: '',\n    },\n    onSubmit: (values) => {\n      alert(JSON.stringify(values, null, 2))\n    },\n  })\n  return (\n    <form onSubmit={formik.handleSubmit}>\n      <label htmlFor='email'>Email Address</label>\n      <Input\n        id='email'\n        name='email'\n        type='email'\n        onChange={formik.handleChange}\n        value={formik.values.email}\n      />\n\n      <Button type='submit'>Submit</Button>\n    </form>\n  )\n}\n\nexport default SimpleFormik;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"App.tsx","App.tsx":!0},'import { ChakraProvider, extendTheme } from "@chakra-ui/react";\nimport SimpleFormik from "./SimpleFormik";\n\nconst App = () => {\n  return (\n    <ChakraProvider>\n      <SimpleFormik />\n    </ChakraProvider>\n  );\n}\n\nexport default App;\n'))),(0,a.kt)("p",null,"Awesome! This means we can continue building our form UI, and just connect\nFormik's and Chakra UI's events! Let's try to build a bit more complex Login UI:"),(0,a.kt)(p,{dependencies:{formik:"latest"},mdxType:"SandpackEditor"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"LoginFormFormik.tsx active","LoginFormFormik.tsx":!0,active:!0},'import { useFormik } from "formik";\nimport {\n  Box,\n  Button,\n  Checkbox,\n  Flex,\n  FormControl,\n  FormLabel,\n  Input,\n  VStack\n} from "@chakra-ui/react";\n\nconst LoginFormFormik = () => {\n  const formik = useFormik({\n    initialValues: {\n      email: "",\n      password: "",\n      rememberMe: false\n    },\n    onSubmit: (values) => {\n      alert(JSON.stringify(values, null, 2));\n    }\n  });\n  return (\n    <Flex bg="gray.100" align="center" justify="center" h="100vh">\n      <Box bg="white" p={6} rounded="md">\n        <form onSubmit={formik.handleSubmit}>\n          <VStack spacing={4} align="flex-start">\n            <FormControl>\n              <FormLabel htmlFor="email">Email Address</FormLabel>\n              <Input\n                id="email"\n                name="email"\n                type="email"\n                variant="filled"\n                onChange={formik.handleChange}\n                value={formik.values.email}\n              />\n            </FormControl>\n            <FormControl>\n              <FormLabel htmlFor="password">Password</FormLabel>\n              <Input\n                id="password"\n                name="password"\n                type="password"\n                variant="filled"\n                onChange={formik.handleChange}\n                value={formik.values.password}\n              />\n            </FormControl>\n            <Checkbox\n              id="rememberMe"\n              name="rememberMe"\n              onChange={formik.handleChange}\n              isChecked={formik.values.rememberMe}\n              colorScheme="purple"\n            >\n              Remember me?\n            </Checkbox>\n            <Button type="submit" colorScheme="purple" width="full">\n              Login\n            </Button>\n          </VStack>\n        </form>\n      </Box>\n    </Flex>\n  );\n}\n\nexport default LoginFormFormik;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"App.tsx","App.tsx":!0},'import { ChakraProvider, extendTheme } from "@chakra-ui/react";\nimport LoginFormFormik from "./LoginFormFormik";\n\nconst App = () => {\n  return (\n    <ChakraProvider>\n      <LoginFormFormik />\n    </ChakraProvider>\n  );\n}\n\nexport default App;\n'))),(0,a.kt)("p",null,"What about validation? And what about using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Formik")," component instead of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"useFormik")," hook? Here's a modified example of the Login UI that uses the\n",(0,a.kt)("inlineCode",{parentName:"p"},"Formik")," component with password validation implemented:"),(0,a.kt)(p,{dependencies:{formik:"latest"},mdxType:"SandpackEditor"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"LoginFormWithValidationFormik.tsx active","LoginFormWithValidationFormik.tsx":!0,active:!0},'import { Formik, Field } from "formik";\nimport {\n  Box,\n  Button,\n  Checkbox,\n  Flex,\n  FormControl,\n  FormLabel,\n  FormErrorMessage,\n  Input,\n  VStack\n} from "@chakra-ui/react";\n\nconst LoginFormWithValidationFormik = () => {\n  return (\n    <Flex bg="gray.100" align="center" justify="center" h="100vh">\n      <Box bg="white" p={6} rounded="md" w={64}>\n        <Formik\n          initialValues={{\n            email: "",\n            password: "",\n            rememberMe: false\n          }}\n          onSubmit={(values) => {\n            alert(JSON.stringify(values, null, 2));\n          }}\n        >\n          {({ handleSubmit, errors, touched }) => (\n            <form onSubmit={handleSubmit}>\n              <VStack spacing={4} align="flex-start">\n                <FormControl>\n                  <FormLabel htmlFor="email">Email Address</FormLabel>\n                  <Field\n                    as={Input}\n                    id="email"\n                    name="email"\n                    type="email"\n                    variant="filled"\n                  />\n                </FormControl>\n                <FormControl isInvalid={!!errors.password && touched.password}>\n                  <FormLabel htmlFor="password">Password</FormLabel>\n                  <Field\n                    as={Input}\n                    id="password"\n                    name="password"\n                    type="password"\n                    variant="filled"\n                    validate={(value) => {\n                      let error;\n\n                      if (value.length < 5) {\n                        error = "Password must contain at least 6 characters";\n                      }\n\n                      return error;\n                    }}\n                  />\n                  <FormErrorMessage>{errors.password}</FormErrorMessage>\n                </FormControl>\n                <Field\n                  as={Checkbox}\n                  id="rememberMe"\n                  name="rememberMe"\n                  colorScheme="purple"\n                >\n                  Remember me?\n                </Field>\n                <Button type="submit" colorScheme="purple" width="full">\n                  Login\n                </Button>\n              </VStack>\n            </form>\n          )}\n        </Formik>\n      </Box>\n    </Flex>\n  );\n}\n\nexport default LoginFormWithValidationFormik;\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"App.tsx","App.tsx":!0},'import { ChakraProvider, extendTheme } from "@chakra-ui/react";\nimport LoginFormWithValidationFormik from "./LoginFormWithValidationFormik";\n\nconst App = () => {\n  return (\n    <ChakraProvider>\n      <LoginFormWithValidationFormik />\n    </ChakraProvider>\n  );\n}\n\nexport default App;\n'))),(0,a.kt)("p",null,"These examples should help you understand how to integrate Chakra UI with\nFormik."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you have any questions, or need help around an advanced usage, don't\nhesitate to reach out in our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/chakra-ui"},"Discord server"),".")))}c.isMDXComponent=!0}}]);