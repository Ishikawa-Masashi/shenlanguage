"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[7669],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||a;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,o[1]=d;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},79618:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const a=(o="SandpackEditor",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var o;const d={toc:[]};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(a,{mdxType:"SandpackEditor"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"divider-theme.tsx","divider-theme.tsx":!0},'import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system"\n\nconst brandPrimary = defineStyle({\n    borderWidth: \'3px\',\n    borderStyle: \'dashed\',\n    borderColor: \'orange.500\',\n\n    // let\'s also provide dark mode alternatives\n    _dark: {\n        borderColor: \'orange.300\',\n    }\n})\n\nconst xl = defineStyle({\n    borderWidth: "10px",\n    borderStyle: "solid",\n    borderRadius: 20,\n})\n\nconst thick = defineStyle({\n    borderWidth: \'5px\', // change the appearance of the border\n    borderStyle: "solid",\n    borderRadius: 10, // set border radius to 10\n    borderColor: "orange.500",\n    _dark: {\n      borderColor: "orange.300",\n    }\n})\n\nexport const dividerTheme = defineStyleConfig({\n    thick,\n    sizes: {\n        "xl": xl\n    },\n    variants: {\n        brand: brandPrimary,\n        "thick": thick\n    },\n})\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"divider.tsx","divider.tsx":!0},'import { Box, SimpleGrid, IconButton, Center, Divider, useColorMode } from "@chakra-ui/react";\nimport { FaMoon, FaSun } from "react-icons/fa";\n\nconst DividerPreview = () => {\n    const { toggleColorMode, colorMode } = useColorMode();\n    return (\n        <Box position="relative" h="100vh">\n            <SimpleGrid gap={12} p={12} columns={2}>\n              <Divider variant="thick" />\n              <Center height="50px">\n                <Divider orientation="vertical" variant="thick" />\n              </Center>\n              <Divider variant="brand" />\n              <Center height="50px">\n                <Divider orientation="vertical" variant="brand" />\n              </Center>\n              <Divider size="xl" />\n              <Center height="50px">\n                <Divider orientation="vertical" size="xl" />\n              </Center>\n            </SimpleGrid>\n            <IconButton\n                aria-label="toggle theme"\n                rounded="full"\n                size="xs"\n                position="absolute"\n                bottom={4}\n                left={4}\n                onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}\n            />\n        </Box>\n    );\n}\n\nexport default DividerPreview;\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"App.tsx","App.tsx":!0},'import { ChakraProvider, extendTheme } from "@chakra-ui/react";\nimport Divider from "./divider";\nimport { dividerTheme } from "./divider-theme";\n\nconst theme = extendTheme({\n  components: {\n    Divider: dividerTheme,\n  }\n});\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={theme}>\n      <Divider />\n    </ChakraProvider>\n  );\n}\n\nexport default App;\n'))))}l.isMDXComponent=!0;const s={},p="Theming",c={unversionedId:"components/data-display/divider/theming",id:"components/data-display/divider/theming",title:"Theming",description:"The Divider component is a single part component. All of the styling is",source:"@site/content/docs/components/data-display/divider/theming.mdx",sourceDirName:"components/data-display/divider",slug:"/components/data-display/divider/theming",permalink:"/docs/components/data-display/divider/theming",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Divider",permalink:"/docs/components/data-display/divider/"},next:{title:"Keyboard Key",permalink:"/docs/components/data-display/kbd/"}},m={},u=[{value:"Theming properties",id:"theming-properties",level:2},{value:"Theming utilities",id:"theming-utilities",level:2},{value:"Customizing the default theme",id:"customizing-the-default-theme",level:2},{value:"Adding a custom size",id:"adding-a-custom-size",level:2},{value:"Adding a custom variant",id:"adding-a-custom-variant",level:2},{value:"Changing the default properties",id:"changing-the-default-properties",level:2},{value:"Showcase",id:"showcase",level:2}],h={toc:u};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"theming"},"Theming"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Divider")," component is a single part component. All of the styling is\napplied directly to the ",(0,i.kt)("inlineCode",{parentName:"p"},"chakra.hr")," element."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To learn more about styling single part components, visit the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/component-style#styling-single-part-components"},"Component Style"),"\npage")),(0,i.kt)("h2",{id:"theming-properties"},"Theming properties"),(0,i.kt)("p",null,"The properties that affect the theming of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Divider")," component are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variant"),": The visual variant of the divider. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"solid"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"colorScheme"),": The color scheme of the divider. No default value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size"),": The size of the divider. No default value.")),(0,i.kt)("h2",{id:"theming-utilities"},"Theming utilities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defineStyle"),": a function used to create style objects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defineStyleConfig"),": a function used to define the style configuration for a\nsingle part component.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { defineStyle, defineStyleConfig } from "@chakra-ui/react";\n')),(0,i.kt)("h2",{id:"customizing-the-default-theme"},"Customizing the default theme"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { defineStyle, defineStyleConfig } from '@chakra-ui/react'\n\nconst thick = defineStyle({\n    borderWidth: '5px', // change the width of the border\n    borderStyle: \"solid\" // change the style of the border\n    borderRadius: 10, // set border radius to 10\n})\n\nexport const dividerTheme = defineStyleConfig({\n    variants: { thick },\n})\n")),(0,i.kt)("p",null,"After customizing the divider theme, we can import it in our theme file and add\nit in the components property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { extendTheme } from "@chakra-ui/react";\nimport { dividerTheme } from "./components/divider";\n\nexport const theme = extendTheme({\n  components: { Divider: dividerTheme },\n});\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is a crucial step to make sure that any changes that we make to the\ndivider theme are applied.")),(0,i.kt)("h2",{id:"adding-a-custom-size"},"Adding a custom size"),(0,i.kt)("p",null,"Let's assume we want to include an extra large divider size. Here's how we can\ndo that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { defineStyle, defineStyleConfig } from '@chakra-ui/react'\n\nconst xl = defineStyle({\n    border: \"10px solid\",\n    borderRadius: 'lg',\n})\n\nexport const dividerTheme = defineStyleConfig({\n    sizes: { xl },\n})\n\n// Now we can use the new `xl` size\n<Divider size=\"xl\" />\n")),(0,i.kt)("p",null,"Every time you're adding anything new to the theme, you'd need to run the cli\ncommand to get proper autocomplete in your IDE. You can learn more about the CLI\ntool ",(0,i.kt)("a",{parentName:"p",href:"/docs/styled-system/cli"},"here"),"."),(0,i.kt)("h2",{id:"adding-a-custom-variant"},"Adding a custom variant"),(0,i.kt)("p",null,"Let's assume we want to include a custom branded variant. Here's how we can do\nthat:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { defineStyle, defineStyleConfig } from '@chakra-ui/react'\n\nconst brandPrimary = defineStyle({\n    borderWidth: '3px',\n    borderStyle: 'dashed',\n    borderColor: 'orange.500',\n\n    // let's also provide dark mode alternatives\n    _dark: {\n        borderColor: 'orange.300',\n    }\n})\n\nexport const dividerTheme = defineStyleConfig({\n    variants: { brandPrimary },\n})\n\n// Now we can use the new `brandPrimary` variant\n<Divider variant=\"brandPrimary\" />\n")),(0,i.kt)("h2",{id:"changing-the-default-properties"},"Changing the default properties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { defineStyleConfig } from '@chakra-ui/react'\n\nexport const dividerTheme = defineStyleConfig({\n    defaultProps: {\n        size: 'xl',\n        variant: 'thick',\n        colorScheme: 'brand',\n    },\n})\n\n// This saves you time, instead of manually setting the size,\n// variant and color scheme every time you use a divider:\n<Divider size=\"xl\" variant=\"thick\" colorScheme=\"brand\" />\n")),(0,i.kt)("h2",{id:"showcase"},"Showcase"),(0,i.kt)(l,{mdxType:"Showcase"}))}f.isMDXComponent=!0}}]);