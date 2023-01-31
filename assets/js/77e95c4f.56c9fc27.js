"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[8935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),m=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=m(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=m(n),c=a,d=h["".concat(l,".").concat(c)]||h[c]||u[c]||s;return n?o.createElement(d,r(r({ref:t},p),{},{components:n})):o.createElement(d,r({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var m=2;m<s;m++)r[m]=n[m];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},80970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var o=n(87462),a=(n(67294),n(3905));const s={title:"Customize Theme",description:"How to modify Chakra UI's default theme",category:"theming",sidebar_position:20},r=void 0,i={unversionedId:"styled-system/theming/customize-theme",id:"styled-system/theming/customize-theme",title:"Customize Theme",description:"How to modify Chakra UI's default theme",source:"@site/content/docs/styled-system/theming/customize-theme.mdx",sourceDirName:"styled-system/theming",slug:"/styled-system/theming/customize-theme",permalink:"/shenlanguage/docs/styled-system/theming/customize-theme",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:20,frontMatter:{title:"Customize Theme",description:"How to modify Chakra UI's default theme",category:"theming",sidebar_position:20},sidebar:"defaultSidebar",previous:{title:"Default Theme",permalink:"/shenlanguage/docs/styled-system/theming/default-theme"},next:{title:"Component Style",permalink:"/shenlanguage/docs/styled-system/theming/component-style"}},l={},m=[{value:"Customizing theme tokens",id:"customizing-theme-tokens",level:2},{value:"Customizing component styles",id:"customizing-component-styles",level:2},{value:"Customizing single components",id:"customizing-single-components",level:3},{value:"Customizing global styles",id:"customizing-global-styles",level:3},{value:"Responsive variants",id:"responsive-variants",level:3},{value:"Scaling out your project",id:"scaling-out-your-project",level:2},{value:"Using Theme extensions",id:"using-theme-extensions",level:2},{value:"Theme Extension: withDefaultColorScheme",id:"theme-extension-withdefaultcolorscheme",level:2},{value:"Theme Extension: withDefaultSize",id:"theme-extension-withdefaultsize",level:2},{value:"Theme Extension: withDefaultVariant",id:"theme-extension-withdefaultvariant",level:2},{value:"Theme Extension: withDefaultProps",id:"theme-extension-withdefaultprops",level:2}],p={toc:m};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, all Chakra components inherit values from the default theme. In some\nscenarios, you might need to customize the theme tokens to match your design\nrequirements."),(0,a.kt)("p",null,"Here are some options depending on your goals:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Customize the theme tokens like colors, font sizes, line heights, etc."),(0,a.kt)("li",{parentName:"ul"},"Customize the component styles, changing the base styles, sizes, or variants."),(0,a.kt)("li",{parentName:"ul"},"Customize the global styles.")),(0,a.kt)("h2",{id:"customizing-theme-tokens"},"Customizing theme tokens"),(0,a.kt)("p",null,"To extend or override a token in the default theme, import the ",(0,a.kt)("inlineCode",{parentName:"p"},"extendTheme"),"\nfunction and add the keys you'd like to override. You can also add new values to\nthe theme."),(0,a.kt)("p",null,"For example, if you'd like to update the colors in the theme to include your\nbrand colors, here's what you'll do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// 1. Import `extendTheme`\nimport { extendTheme } from "@chakra-ui/react"\n\n// 2. Call `extendTheme` and pass your custom values\nconst theme = extendTheme({\n  colors: {\n    brand: {\n      100: "#f7fafc",\n      // ...\n      900: "#1a202c",\n    },\n  },\n})\n\n// 3. Pass the new theme to `ChakraProvider`\n<ChakraProvider theme={theme}>\n  <App />\n</ChakraProvider>\n\n// 4. Now you can use these colors in your components\nfunction Usage() {\n  return <Box bg="brand.100">Welcome</Box>\n}\n')),(0,a.kt)("p",null,"You can also use the color for the ",(0,a.kt)("inlineCode",{parentName:"p"},"colorScheme")," prop like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'<Button colorScheme="brand">Click me</Button>\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you're curious as to what theme styles you can override, please reference\nthe\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src/foundations"},"default theme foundation style files"),".")),(0,a.kt)("h2",{id:"customizing-component-styles"},"Customizing component styles"),(0,a.kt)("p",null,"Chakra has a specific approach or API for styling components. The main idea is\nmost components have default or base styles (",(0,a.kt)("inlineCode",{parentName:"p"},"baseStyle"),"), styles for different\nsizes (",(0,a.kt)("inlineCode",{parentName:"p"},"sizes"),"), and styles for different visual variants (",(0,a.kt)("inlineCode",{parentName:"p"},"variants"),")."),(0,a.kt)("p",null,"It is important to understand this so you can override any component style\neffectively."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You're not limited to the component styles that Chakra provides, you can also\ncreate your own custom component styles.\n",(0,a.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/component-style"},"Learn more"),".")),(0,a.kt)("h3",{id:"customizing-single-components"},"Customizing single components"),(0,a.kt)("p",null,"As we mentioned earlier, a component style consists of ",(0,a.kt)("inlineCode",{parentName:"p"},"baseStyle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sizes"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"variants")," and an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultProps")," to denote the default ",(0,a.kt)("inlineCode",{parentName:"p"},"size"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"variant")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"colorScheme"),". Not every component has all three ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultProps"),",\nto figure out which prop can be set just have a short look on the theme source\nby using the ",(0,a.kt)("inlineCode",{parentName:"p"},"View theme source")," button on the top of every components page."),(0,a.kt)("p",null,"Here's what the component style object looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { ComponentStyleConfig } from "@chakra-ui/react";\n\nconst ComponentStyle: ComponentStyleConfig = {\n  // style object for base or default style\n  baseStyle: {},\n  // styles for different sizes ("sm", "md", "lg")\n  sizes: {},\n  // styles for different visual variants ("outline", "solid")\n  variants: {},\n  // default values for \'size\', \'variant\' and \'colorScheme\'\n  defaultProps: {\n    size: "",\n    variant: "",\n    colorScheme: "",\n  },\n};\n')),(0,a.kt)("p",null,"For example, let's override the component styles for Chakra's Button component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="theme.ts"',title:'"theme.ts"'},'import { extendTheme } from "@chakra-ui/react";\nimport type { StyleFunctionProps } from "@chakra-ui/styled-system";\n\nconst theme = extendTheme({\n  components: {\n    Button: {\n      // 1. We can update the base styles\n      baseStyle: {\n        fontWeight: "bold", // Normally, it is "semibold"\n      },\n      // 2. We can add a new button size or extend existing\n      sizes: {\n        xl: {\n          h: "56px",\n          fontSize: "lg",\n          px: "32px",\n        },\n      },\n      // 3. We can add a new visual variant\n      variants: {\n        "with-shadow": {\n          bg: "red.400",\n          boxShadow: "0 0 2px 2px #efdfde",\n        },\n        // 4. We can override existing variants\n        solid: (props: StyleFunctionProps) => ({\n          bg: props.colorMode === "dark" ? "red.300" : "red.500",\n        }),\n        // 5. We can add responsive variants\n        sm: {\n          bg: "teal.500",\n          fontSize: "md",\n        },\n      },\n      // 6. We can overwrite defaultProps\n      defaultProps: {\n        size: "lg", // default is md\n        variant: "sm", // default is solid\n        colorScheme: "green", // default is gray\n      },\n    },\n  },\n});\n\nexport default theme;\n')),(0,a.kt)("p",null,"That","'","s it! When you use the Button from Chakra, these updates will be\nautomatically applied."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"When styling/overwriting the theme for a component be sure that it is really a\nsingle component with only one part, since you otherwise need to name the part\nthat should be affected by your change when styling\n",(0,a.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/component-style#styling-multipart-components"},"multipart components"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button size="xl" variant="with-shadow">\n  Welcome\n</Button>\n')),(0,a.kt)("p",null,"If you're curious as to what component styles you can override, please reference the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/chakra-ui/chakra-ui/tree/main/packages/components"},"default component style files"),"."),(0,a.kt)("h3",{id:"customizing-global-styles"},"Customizing global styles"),(0,a.kt)("p",null,"Global styles are theme-aware styles you can apply to any html element globally."),(0,a.kt)("p",null,"To add global styles, update the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.styles.global")," key in the theme. Global\nstyles can be a style object or a function that returns a style object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="theme.ts"',title:'"theme.ts"'},'import { extendTheme } from "@chakra-ui/react";\nimport { mode } from "@chakra-ui/theme-tools";\nimport type { StyleFunctionProps } from "@chakra-ui/styled-system";\n\n// Version 1: Using objects\nconst theme = extendTheme({\n  styles: {\n    global: {\n      // styles for the `body`\n      body: {\n        bg: "gray.400",\n        color: "white",\n      },\n      // styles for the `a`\n      a: {\n        color: "teal.500",\n        _hover: {\n          textDecoration: "underline",\n        },\n      },\n    },\n  },\n});\n\n// Version 2: Using functions\nconst overrides = extendTheme({\n  styles: {\n    global: (props: StyleFunctionProps) => ({\n      body: {\n        fontFamily: "body",\n        color: mode("gray.800", "whiteAlpha.900")(props),\n        bg: mode("white", "gray.800")(props),\n        lineHeight: "base",\n      },\n    }),\n  },\n});\n')),(0,a.kt)("h3",{id:"responsive-variants"},"Responsive variants"),(0,a.kt)("p",null,"Responsive variants can be used to have different styles for components\ndepending on the current active breakpoint. The properties in ",(0,a.kt)("inlineCode",{parentName:"p"},"sizes")," of the\ncomponent will be overwritten if passed in the responsive variant."),(0,a.kt)("p",null,"With responsive variants, prop override might not work as expected since we\nuse regular CSS media queries. That's why we also came up with the notion of\n",(0,a.kt)("inlineCode",{parentName:"p"},"!important")," as an escape hatch."),(0,a.kt)("p",null,"To declare the responsive variants you can simply add them to the variants of\nthe component:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const theme = extendTheme({\n  components: {\n    Button: {\n      ...\n      sizes: {\n        sm: {\n          fontSize: 'md'\n        }\n      },\n      variants: {\n        ...\n        base: {\n          bg: 'yellow.500',\n          fontSize: 'md'\n         },\n        sm: {\n          bg: 'teal.500',\n          fontSize: 'lg'\n         },\n        md: {\n          bg: 'orange.500',\n          fontSize: 'xl'\n         },\n      }\n    },\n  },\n});\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Based on how the responsive variants are designed, there's no support for\nresponsive ",(0,a.kt)("inlineCode",{parentName:"p"},"colorScheme")," since it is technically not a variant.")),(0,a.kt)("p",null,"Just pass them either with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Array syntax")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"Object syntax")," to the\ncomponent. The array syntax may not be work as expected, since it ignores the\nnaming of the variant and uses them straight in the order on which they are\npassed into the array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<>\n  <Button variant={{ base: "base", md: "md" }}>Object syntax</Button>\n  // the button will be orange after the `sm` breakpoint due to the array syntax\n  <Button variant={["base", "md"]}>Array syntax</Button>\n</>\n')),(0,a.kt)("p",null,"It is required to use ",(0,a.kt)("inlineCode",{parentName:"p"},"!important")," within a components style prop if this prop\nis set in the responsive variant as shown in the example below based on the\ntheme above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<>\n  <Button variant={{ sm: "sm" }}>fontSize lg after breakpoint sm</Button>\n  // without declaration of fontSize in the sm variant the fontSize would be lg as\n  expected\n  <Button variant={{ sm: "sm" }} fontSize="xl">\n    still fontSize lg after breakpoint sm\n  </Button>\n  <Button variant={{ sm: "sm" }} fontSize="xl !important">\n    fontSize xl due to the !important\n  </Button>\n</>\n')),(0,a.kt)("p",null,"Combined usage with ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," in the theme is only possible by covering breakpoints\nbelow the responsive variant or by using ",(0,a.kt)("inlineCode",{parentName:"p"},"!important"),", which overrides\neverything."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'<Button size="sm" variant={{ md: "md" }}>\n  fontSize md from \'sizes\' until breakpoint md where the variant takes over\n</Button>\n')),(0,a.kt)("h2",{id:"scaling-out-your-project"},"Scaling out your project"),(0,a.kt)("p",null,"As your project grows in size, it is best to keep things organized. We highly\nsuggest that instead of using a single ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.js")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.ts"),") file, you\ncreate a ",(0,a.kt)("inlineCode",{parentName:"p"},"/theme")," folder in its place. Inside this folder, you could have a\ndirectory structure that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\ud83d\udcc1 theme\n  \ud83d\udcc4 index.js  # my main theme entrypoint\n  \ud83d\udcc4 styles.js  # all my global style overrides\n  \ud83d\udcc1 foundations\n    \ud83d\udcc4 borders.js  # all my border overrides\n  \ud83d\udcc1 components\n    \ud83d\udcc4 button.js  # all my button overrides\n")),(0,a.kt)("p",null,"This way, you can structure your main theme entrypoint file to be much cleaner,\nlike this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="theme/index.js"',title:'"theme/index.js"'},'import { extendTheme } from "@chakra-ui/react";\n\n// Global style overrides\nimport styles from "./styles";\n\n// Foundational style overrides\nimport borders from "./foundations/borders";\n\n// Component style overrides\nimport Button from "./components/button";\n\nconst overrides = {\n  styles,\n  borders,\n  // Other foundational style overrides go here\n  components: {\n    Button,\n    // Other components go here\n  },\n};\n\nexport default extendTheme(overrides);\n')),(0,a.kt)("p",null,'None of these is strictly required to use Chakra - but we\'ve learned some hard\nlessons on the "right" way and the "wrong" way to write styles. The above is our\nbest suggestion on how to write style overrides and organize your custom theme.'),(0,a.kt)("h2",{id:"using-theme-extensions"},"Using Theme extensions"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"extendTheme")," function allows you to pass multiple overrides or extensions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import {\n  extendTheme,\n  withDefaultColorScheme,\n  theme as baseTheme,\n} from "@chakra-ui/react";\n\nconst customTheme = extendTheme(\n  {\n    colors: {\n      brand: baseTheme.colors.red,\n    },\n    components: {\n      Alert: {\n        defaultProps: {\n          colorScheme: "blue",\n        },\n      },\n    },\n  },\n  withDefaultColorScheme({ colorScheme: "brand" })\n);\n')),(0,a.kt)("p",null,"The order of overrides is from left to right. E.g. the second extension\noverrides the first one, and so on."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please note that you can pass a base theme as last parameter. If no base theme\nis provided, we use the Chakra UI default theme")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"extendTheme(\n  withFirstExtension,\n  withSecondExtension,\n  withThirdExtension,\n  optionalBaseTheme\n);\n")),(0,a.kt)("h2",{id:"theme-extension-withdefaultcolorscheme"},"Theme Extension: withDefaultColorScheme"),(0,a.kt)("p",null,"You can apply a default color scheme to all components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";\n\nconst customTheme = extendTheme(withDefaultColorScheme({ colorScheme: "red" }));\n')),(0,a.kt)("p",null,"Or pass the component names you want to apply a default ",(0,a.kt)("inlineCode",{parentName:"p"},"colorScheme")," to. This\nlets you apply different color schemes to a group of components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";\n\nconst customTheme = extendTheme(\n  withDefaultColorScheme({\n    colorScheme: "red",\n    components: ["Button", "Badge"],\n  }),\n  withDefaultColorScheme({\n    colorScheme: "blue",\n    components: ["Alert", "Table"],\n  })\n);\n')),(0,a.kt)("h2",{id:"theme-extension-withdefaultsize"},"Theme Extension: withDefaultSize"),(0,a.kt)("p",null,"You can apply a default size to all components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { extendTheme, withDefaultSize } from "@chakra-ui/react";\n\nconst customTheme = extendTheme(\n  withDefaultSize({\n    size: "lg",\n    components: ["Button", "Badge"],\n  })\n);\n')),(0,a.kt)("h2",{id:"theme-extension-withdefaultvariant"},"Theme Extension: withDefaultVariant"),(0,a.kt)("p",null,"You can apply a default variant to all components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { extendTheme, withDefaultVariant } from "@chakra-ui/react";\n\nconst customTheme = extendTheme(\n  withDefaultVariant({\n    variant: "outline",\n    components: ["Input", "NumberInput", "PinInput"],\n  })\n);\n')),(0,a.kt)("h2",{id:"theme-extension-withdefaultprops"},"Theme Extension: withDefaultProps"),(0,a.kt)("p",null,"You can apply default props to all components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { extendTheme, withDefaultProps } from "@chakra-ui/react";\n\nconst customTheme = extendTheme(\n  withDefaultProps({\n    defaultProps: {\n      variant: "outline",\n      size: "lg",\n    },\n    components: ["Input", "NumberInput", "PinInput"],\n  })\n);\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/component-style"},"In the next section"),", we'll show\nsome examples of how to create custom component styles and use them in your\ncomponents!"))}u.isMDXComponent=!0}}]);