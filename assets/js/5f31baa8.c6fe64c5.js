"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[9919],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},C="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),C=s(n),c=r,m=C["".concat(d,".").concat(c)]||C[c]||u[c]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[C]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},10739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>C,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i=(o="SandpackEditor",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var o;const l={toc:[]};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"SandpackEditor"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"avatar-theme.tsx","avatar-theme.tsx":!0},'import { avatarAnatomy as parts } from "@chakra-ui/anatomy"\nimport {\n  createMultiStyleConfigHelpers,\n  defineStyle,\n} from "@chakra-ui/styled-system"\n\nconst { definePartsStyle, defineMultiStyleConfig } =\n  createMultiStyleConfigHelpers(parts.keys)\n\nconst baseStyle = definePartsStyle({\n  badge: {\n    bg: "gray.500",\n    border: "2px solid"\n  },\n  excessLabel: {\n    bg: "gray.800",\n    color: "white",\n    border: "2px solid",\n\n    // let\'s also provide dark mode alternatives\n    _dark: {\n      bg: \'gray.400\',\n      color: \'gray.900\',\n    }\n  }\n})\n\n// Defining a custom variant\nconst variantRoundedSquare = definePartsStyle({\n  badge: {\n    bg: "gray.500",\n    border: "2px solid"\n  },\n  container: {\n    borderRadius: "0.7em",\n  },\n  excessLabel: {\n    bg: "gray.800",\n    color: "white",\n    borderRadius: "0.7em",\n    border: "2px solid",\n\n    // let\'s also provide dark mode alternatives\n    _dark: {\n      bg: "gray.400",\n      color: "gray.900"\n    }\n  }\n});\n\nconst variants = {\n  roundedSquare: variantRoundedSquare,\n}\n\nconst superLg = defineStyle({\n  width: 40,\n  height: 40,\n  fontSize: "6xl",\n  borderWidth: "6px"\n})\n\nconst sizes = {\n  superLg: definePartsStyle({\n    container: superLg,\n    excessLabel: superLg,\n    badge: {\n      width: 8,\n      height: 8,\n      borderWidth: "6px",\n    }\n  }),\n}\n\nexport const avatarTheme = defineMultiStyleConfig({\n  baseStyle,\n  variants,\n  sizes,\n});\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"avatar.tsx","avatar.tsx":!0},'import { Box, HStack, IconButton, Avatar, AvatarBadge, AvatarGroup, useColorMode } from "@chakra-ui/react";\nimport { FaMoon, FaSun } from "react-icons/fa";\n\nconst AvatarPreview = () => {\n  const { toggleColorMode, colorMode } = useColorMode();\n  return (\n    <Box position="relative" h="100vh">\n      <HStack spacing={8} p={12}>\n        <Avatar name="Segun Adebayo" />\n        <Avatar name="Lazar Nikolov" variant="roundedSquare">\n          <AvatarBadge boxSize="1rem" />\n        </Avatar>\n        <AvatarGroup max={2} size="superLg" variant="roundedSquare">\n          <Avatar name="Andrej Acevski" variant="roundedSquare">\n            <AvatarBadge />\n          </Avatar>\n          <Avatar name="Segun Adebayo" variant="roundedSquare">\n            <AvatarBadge bg="orange.500" />\n          </Avatar>\n          <Avatar name="Segun Adebayo" variant="roundedSquare">\n            <AvatarBadge bg="orange.500" />\n          </Avatar>\n        </AvatarGroup>\n      </HStack>\n\n      <IconButton\n        aria-label="toggle theme"\n        rounded="full"\n        size="xs"\n        position="absolute"\n        bottom={4}\n        left={4}\n        onClick={toggleColorMode} icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}\n      />\n    </Box>\n  );\n}\n\nexport default AvatarPreview;\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"App.tsx","App.tsx":!0},'import { ChakraProvider, extendTheme } from "@chakra-ui/react";\nimport Avatar from "./avatar";\nimport { avatarTheme } from "./avatar-theme";\n\nconst theme = extendTheme({\n  components: {\n    Avatar: avatarTheme,\n  }\n});\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={theme}>\n      <Avatar />\n    </ChakraProvider>\n  );\n}\n\nexport default App;\n'))))}d.isMDXComponent=!0;const s={},p="Theming",C={unversionedId:"components/media-and-icons/avatar/theming",id:"components/media-and-icons/avatar/theming",title:"Theming",description:"The Avatar component is a multipart component. The styling needs to be applied",source:"@site/content/docs/components/media-and-icons/avatar/theming.mdx",sourceDirName:"components/media-and-icons/avatar",slug:"/components/media-and-icons/avatar/theming",permalink:"/docs/components/media-and-icons/avatar/theming",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Avatar",permalink:"/docs/components/media-and-icons/avatar/"},next:{title:"Icon",permalink:"/docs/components/media-and-icons/icon/"}},u={},c=[{value:"Anatomy",id:"anatomy",level:2},{value:"Theming properties",id:"theming-properties",level:2},{value:"Theming utilities",id:"theming-utilities",level:2},{value:"Customizing the default theme",id:"customizing-the-default-theme",level:2},{value:"Adding a custom size",id:"adding-a-custom-size",level:2},{value:"Adding a custom variant",id:"adding-a-custom-variant",level:2},{value:"Changing the default properties",id:"changing-the-default-properties",level:2},{value:"Showcase",id:"showcase",level:2}],m={toc:c};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"theming"},"Theming"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar")," component is a multipart component. The styling needs to be applied\nto each part specifically."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To learn more about styling multipart components, visit the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/component-style#styling-multipart-components"},"Component Style"),"\npage.")),(0,r.kt)("h2",{id:"anatomy"},"Anatomy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A: ",(0,r.kt)("inlineCode",{parentName:"li"},"badge")),(0,r.kt)("li",{parentName:"ul"},"B: ",(0,r.kt)("inlineCode",{parentName:"li"},"container")),(0,r.kt)("li",{parentName:"ul"},"C: ",(0,r.kt)("inlineCode",{parentName:"li"},"excessLabel")),(0,r.kt)("li",{parentName:"ul"},"D: ",(0,r.kt)("inlineCode",{parentName:"li"},"group"))),(0,r.kt)("svg",{width:"75%",height:"100%",viewBox:"0 0 480 270",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,r.kt)("rect",{width:"480",height:"270",fill:"white"}),(0,r.kt)("g",{clipPath:"url(#clip0_811_9289)"},(0,r.kt)("path",{d:"M434 135C434 149.912 421.912 162 407 162C392.088 162 380 149.912 380 135C380 120.088 392.088 108 407 108C421.912 108 434 120.088 434 135Z",fill:"#E2E8F0"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M407 162C421.912 162 434 149.912 434 135C434 120.088 421.912 108 407 108C392.088 108 380 120.088 380 135C380 149.912 392.088 162 407 162ZM407 167C424.673 167 439 152.673 439 135C439 117.327 424.673 103 407 103C389.327 103 375 117.327 375 135C375 152.673 389.327 167 407 167Z",fill:"white"}),(0,r.kt)("path",{d:"M397.504 140.824V128.341H399.988V140.824H397.504ZM392.509 135.82V133.345H404.992V135.82H392.509Z",fill:"#1A202C"}),(0,r.kt)("path",{d:"M415.554 144.259C414.286 144.259 413.154 144.04 412.157 143.603C411.166 143.166 410.381 142.56 409.802 141.784C409.23 141.002 408.922 140.098 408.879 139.07H411.778C411.815 139.63 412.003 140.116 412.341 140.528C412.686 140.935 413.135 141.249 413.689 141.47C414.243 141.692 414.859 141.803 415.536 141.803C416.281 141.803 416.939 141.673 417.512 141.415C418.09 141.156 418.543 140.796 418.869 140.335C419.195 139.867 419.358 139.328 419.358 138.719C419.358 138.085 419.195 137.528 418.869 137.048C418.549 136.561 418.078 136.18 417.456 135.903C416.841 135.626 416.096 135.487 415.222 135.487H413.625V133.161H415.222C415.924 133.161 416.539 133.034 417.069 132.782C417.604 132.53 418.023 132.179 418.324 131.729C418.626 131.274 418.777 130.741 418.777 130.132C418.777 129.547 418.644 129.04 418.38 128.609C418.121 128.172 417.752 127.83 417.272 127.584C416.798 127.338 416.238 127.214 415.591 127.214C414.976 127.214 414.4 127.328 413.865 127.556C413.335 127.778 412.904 128.098 412.572 128.516C412.24 128.929 412.061 129.424 412.037 130.003H409.276C409.307 128.981 409.608 128.082 410.181 127.307C410.759 126.531 411.523 125.925 412.47 125.488C413.418 125.051 414.471 124.832 415.628 124.832C416.841 124.832 417.887 125.069 418.767 125.543C419.654 126.011 420.337 126.636 420.817 127.418C421.303 128.199 421.543 129.055 421.537 129.984C421.543 131.043 421.248 131.942 420.651 132.68C420.06 133.419 419.272 133.915 418.287 134.167V134.315C419.543 134.505 420.515 135.004 421.205 135.81C421.9 136.617 422.245 137.617 422.239 138.811C422.245 139.851 421.956 140.784 421.371 141.609C420.792 142.433 420.002 143.083 418.998 143.557C417.995 144.025 416.847 144.259 415.554 144.259Z",fill:"#1A202C"})),(0,r.kt)("path",{d:"M389 135C389 149.912 376.912 162 362 162C347.088 162 335 149.912 335 135C335 120.088 347.088 108 362 108C376.912 108 389 120.088 389 135Z",fill:"#2C5282"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M362 162C376.912 162 389 149.912 389 135C389 120.088 376.912 108 362 108C347.088 108 335 120.088 335 135C335 149.912 347.088 162 362 162ZM362 167C379.673 167 394 152.673 394 135C394 117.327 379.673 103 362 103C344.327 103 330 117.327 330 135C330 152.673 344.327 167 362 167Z",fill:"white"}),(0,r.kt)("path",{d:"M398 160C398 166.075 393.075 171 387 171C380.925 171 376 166.075 376 160C376 153.925 380.925 149 387 149C393.075 149 398 153.925 398 160Z",fill:"#38A169"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M403 160C403 168.837 395.837 176 387 176C378.163 176 371 168.837 371 160C371 151.163 378.163 144 387 144C395.837 144 403 151.163 403 160ZM387 171C393.075 171 398 166.075 398 160C398 153.925 393.075 149 387 149C380.925 149 376 153.925 376 160C376 166.075 380.925 171 387 171Z",fill:"white"}),(0,r.kt)("path",{d:"M346.596 144V125.091H353.336C354.801 125.091 356.017 125.343 356.983 125.848C357.956 126.353 358.682 127.051 359.162 127.944C359.642 128.83 359.882 129.855 359.882 131.018C359.882 132.176 359.639 133.194 359.153 134.075C358.673 134.949 357.946 135.629 356.974 136.115C356.007 136.601 354.792 136.844 353.327 136.844H348.221V134.388H353.068C353.992 134.388 354.742 134.256 355.321 133.991C355.906 133.727 356.334 133.342 356.604 132.837C356.875 132.333 357.011 131.726 357.011 131.018C357.011 130.304 356.872 129.686 356.595 129.163C356.324 128.639 355.897 128.239 355.312 127.962C354.733 127.679 353.973 127.538 353.031 127.538H349.449V144H346.596ZM355.93 135.469L360.602 144H357.352L352.773 135.469H355.93Z",fill:"white"}),(0,r.kt)("path",{d:"M364.951 144H361.923L368.727 125.091H372.024L378.828 144H375.8L370.454 128.526H370.306L364.951 144ZM365.459 136.595H375.283V138.996H365.459V136.595Z",fill:"white"}),(0,r.kt)("path",{d:"M344 135C344 149.912 331.912 162 317 162C302.088 162 290 149.912 290 135C290 120.088 302.088 108 317 108C331.912 108 344 120.088 344 135Z",fill:"#9C4221"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M317 162C331.912 162 344 149.912 344 135C344 120.088 331.912 108 317 108C302.088 108 290 120.088 290 135C290 149.912 302.088 162 317 162ZM317 167C334.673 167 349 152.673 349 135C349 117.327 334.673 103 317 103C299.327 103 285 117.327 285 135C285 152.673 299.327 167 317 167Z",fill:"white"}),(0,r.kt)("path",{d:"M302.939 144H299.911L306.716 125.091H310.012L316.817 144H313.788L308.442 128.526H308.295L302.939 144ZM303.447 136.595H313.271V138.996H303.447V136.595Z",fill:"white"}),(0,r.kt)("path",{d:"M319.547 144V125.091H322.4V134.121H322.631L330.562 125.091H334.154L326.527 133.604L334.181 144H330.747L324.635 135.552L322.4 138.119V144H319.547Z",fill:"white"}),(0,r.kt)("path",{d:"M353 160C353 166.075 348.075 171 342 171C335.925 171 331 166.075 331 160C331 153.925 335.925 149 342 149C348.075 149 353 153.925 353 160Z",fill:"#38A169"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M358 160C358 168.837 350.837 176 342 176C333.163 176 326 168.837 326 160C326 151.163 333.163 144 342 144C350.837 144 358 151.163 358 160ZM342 171C348.075 171 353 166.075 353 160C353 153.925 348.075 149 342 149C335.925 149 331 153.925 331 160C331 166.075 335.925 171 342 171Z",fill:"white"}),(0,r.kt)("path",{d:"M299 135C299 149.912 286.912 162 272 162C257.088 162 245 149.912 245 135C245 120.088 257.088 108 272 108C286.912 108 299 120.088 299 135Z",fill:"#285E61"}),(0,r.kt)("path",{d:"M270.575 131.24H267.694C267.583 130.625 267.377 130.083 267.075 129.615C266.774 129.147 266.404 128.75 265.967 128.424C265.53 128.098 265.041 127.852 264.499 127.685C263.964 127.519 263.394 127.436 262.791 127.436C261.702 127.436 260.726 127.71 259.864 128.258C259.009 128.806 258.332 129.609 257.833 130.668C257.341 131.726 257.095 133.019 257.095 134.545C257.095 136.084 257.341 137.383 257.833 138.442C258.332 139.5 259.012 140.301 259.874 140.842C260.735 141.384 261.705 141.655 262.782 141.655C263.379 141.655 263.945 141.575 264.481 141.415C265.023 141.249 265.512 141.005 265.949 140.685C266.386 140.365 266.755 139.974 267.057 139.513C267.365 139.045 267.577 138.509 267.694 137.906L270.575 137.915C270.421 138.845 270.122 139.701 269.679 140.482C269.242 141.258 268.679 141.929 267.989 142.495C267.306 143.055 266.524 143.489 265.644 143.797C264.764 144.105 263.804 144.259 262.764 144.259C261.126 144.259 259.667 143.871 258.387 143.095C257.107 142.313 256.097 141.196 255.359 139.744C254.626 138.291 254.26 136.558 254.26 134.545C254.26 132.527 254.629 130.794 255.368 129.347C256.107 127.895 257.116 126.781 258.396 126.005C259.677 125.223 261.132 124.832 262.764 124.832C263.767 124.832 264.702 124.977 265.57 125.266C266.444 125.549 267.229 125.968 267.925 126.522C268.62 127.07 269.196 127.741 269.651 128.535C270.107 129.323 270.415 130.224 270.575 131.24Z",fill:"white"}),(0,r.kt)("path",{d:"M273.989 144V125.091H276.842V133.308H286.268V125.091H289.131V144H286.268V135.755H276.842V144H273.989Z",fill:"white"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M272 162C286.912 162 299 149.912 299 135C299 120.088 286.912 108 272 108C257.088 108 245 120.088 245 135C245 149.912 257.088 162 272 162ZM272 167C289.673 167 304 152.673 304 135C304 117.327 289.673 103 272 103C254.327 103 240 117.327 240 135C240 152.673 254.327 167 272 167Z",fill:"white"}),(0,r.kt)("path",{d:"M308 160C308 166.075 303.075 171 297 171C290.925 171 286 166.075 286 160C286 153.925 290.925 149 297 149C303.075 149 308 153.925 308 160Z",fill:"#38A169"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M313 160C313 168.837 305.837 176 297 176C288.163 176 281 168.837 281 160C281 151.163 288.163 144 297 144C305.837 144 313 151.163 313 160ZM297 171C303.075 171 308 166.075 308 160C308 153.925 303.075 149 297 149C290.925 149 286 153.925 286 160C286 166.075 290.925 171 297 171Z",fill:"white"}),(0,r.kt)("rect",{x:"84",y:"103",width:"64",height:"64",rx:"32",fill:"#E2E8F0"}),(0,r.kt)("path",{d:"M116 139.5C123.575 139.5 129.714 133.345 129.714 125.75C129.714 118.155 123.575 112 116 112C108.425 112 102.286 118.155 102.286 125.75C102.286 133.345 108.425 139.5 116 139.5ZM125.6 142.938H123.811C121.432 144.033 118.786 144.656 116 144.656C113.214 144.656 110.579 144.033 108.189 142.938H106.4C98.45 142.938 92 149.404 92 157.375V161.844C92 164.69 94.3036 167 97.1429 167H134.857C137.696 167 140 164.69 140 161.844V157.375C140 149.404 133.55 142.938 125.6 142.938Z",fill:"white"}),(0,r.kt)("path",{d:"M152 160C152 166.075 147.075 171 141 171C134.925 171 130 166.075 130 160C130 153.925 134.925 149 141 149C147.075 149 152 153.925 152 160Z",fill:"#38A169"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M157 160C157 168.837 149.837 176 141 176C132.163 176 125 168.837 125 160C125 151.163 132.163 144 141 144C149.837 144 157 151.163 157 160ZM141 171C147.075 171 152 166.075 152 160C152 153.925 147.075 149 141 149C134.925 149 130 153.925 130 160C130 166.075 134.925 171 141 171Z",fill:"white"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M141.5 171L141.5 195L140.5 195L140.5 171L141.5 171Z",fill:"#319795"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M408.5 162L408.5 186L407.5 186L407.5 162L408.5 162Z",fill:"#319795"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M116.5 79L116.5 103L115.5 103L115.5 79L116.5 79Z",fill:"#319795"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M340.5 71L340.5 95L339.5 95L339.5 71L340.5 71Z",fill:"#319795"}),(0,r.kt)("path",{d:"M155 209C155 216.732 148.732 223 141 223C133.268 223 127 216.732 127 209C127 201.268 133.268 195 141 195C148.732 195 155 201.268 155 209Z",fill:"#B2F5EA"}),(0,r.kt)("path",{d:"M422 200C422 207.732 415.732 214 408 214C400.268 214 394 207.732 394 200C394 192.268 400.268 186 408 186C415.732 186 422 192.268 422 200Z",fill:"#B2F5EA"}),(0,r.kt)("path",{d:"M130 65C130 72.732 123.732 79 116 79C108.268 79 102 72.732 102 65C102 57.268 108.268 51 116 51C123.732 51 130 57.268 130 65Z",fill:"#B2F5EA"}),(0,r.kt)("path",{d:"M354 57C354 64.732 347.732 71 340 71C332.268 71 326 64.732 326 57C326 49.268 332.268 43 340 43C347.732 43 354 49.268 354 57Z",fill:"#B2F5EA"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M141 222C148.18 222 154 216.18 154 209C154 201.82 148.18 196 141 196C133.82 196 128 201.82 128 209C128 216.18 133.82 222 141 222ZM141 223C148.732 223 155 216.732 155 209C155 201.268 148.732 195 141 195C133.268 195 127 201.268 127 209C127 216.732 133.268 223 141 223Z",fill:"#319795"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M408 213C415.18 213 421 207.18 421 200C421 192.82 415.18 187 408 187C400.82 187 395 192.82 395 200C395 207.18 400.82 213 408 213ZM408 214C415.732 214 422 207.732 422 200C422 192.268 415.732 186 408 186C400.268 186 394 192.268 394 200C394 207.732 400.268 214 408 214Z",fill:"#319795"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M116 78C123.18 78 129 72.1797 129 65C129 57.8203 123.18 52 116 52C108.82 52 103 57.8203 103 65C103 72.1797 108.82 78 116 78ZM116 79C123.732 79 130 72.732 130 65C130 57.268 123.732 51 116 51C108.268 51 102 57.268 102 65C102 72.732 108.268 79 116 79Z",fill:"#319795"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M340 70C347.18 70 353 64.1797 353 57C353 49.8203 347.18 44 340 44C332.82 44 327 49.8203 327 57C327 64.1797 332.82 70 340 70ZM340 71C347.732 71 354 64.732 354 57C354 49.268 347.732 43 340 43C332.268 43 326 49.268 326 57C326 64.732 332.268 71 340 71Z",fill:"#319795"}),(0,r.kt)("path",{d:"M137.66 215H135.796L139.984 203.364H142.012L146.2 215H144.336L141.046 205.477H140.955L137.66 215ZM137.972 210.443H144.018V211.92H137.972V210.443Z",fill:"#319795"}),(0,r.kt)("path",{d:"M413.06 198.148H411.288C411.22 197.769 411.093 197.436 410.907 197.148C410.721 196.86 410.494 196.616 410.225 196.415C409.956 196.214 409.655 196.063 409.322 195.96C408.992 195.858 408.642 195.807 408.271 195.807C407.6 195.807 407 195.975 406.469 196.313C405.943 196.65 405.526 197.144 405.219 197.795C404.916 198.447 404.765 199.242 404.765 200.182C404.765 201.129 404.916 201.928 405.219 202.58C405.526 203.231 405.945 203.723 406.475 204.057C407.005 204.39 407.602 204.557 408.265 204.557C408.632 204.557 408.981 204.508 409.31 204.409C409.644 204.307 409.945 204.157 410.214 203.96C410.483 203.763 410.71 203.523 410.896 203.239C411.085 202.951 411.216 202.621 411.288 202.25L413.06 202.256C412.966 202.828 412.782 203.354 412.509 203.835C412.24 204.313 411.894 204.725 411.469 205.074C411.049 205.419 410.568 205.686 410.026 205.875C409.485 206.064 408.894 206.159 408.254 206.159C407.246 206.159 406.348 205.92 405.56 205.443C404.773 204.962 404.151 204.275 403.697 203.381C403.246 202.487 403.021 201.42 403.021 200.182C403.021 198.939 403.248 197.873 403.702 196.983C404.157 196.089 404.778 195.403 405.566 194.926C406.354 194.445 407.25 194.205 408.254 194.205C408.871 194.205 409.447 194.294 409.981 194.472C410.519 194.646 411.002 194.903 411.43 195.244C411.858 195.581 412.212 195.994 412.492 196.483C412.773 196.968 412.962 197.523 413.06 198.148Z",fill:"#319795"}),(0,r.kt)("path",{d:"M112.544 71V59.3636H116.805C117.631 59.3636 118.315 59.5 118.857 59.7727C119.398 60.0417 119.804 60.4072 120.072 60.8693C120.341 61.3277 120.476 61.8447 120.476 62.4205C120.476 62.9053 120.387 63.3144 120.209 63.6477C120.031 63.9773 119.792 64.2424 119.493 64.4432C119.197 64.6402 118.872 64.7841 118.516 64.875V64.9886C118.902 65.0076 119.279 65.1326 119.646 65.3636C120.018 65.5909 120.324 65.9148 120.567 66.3352C120.809 66.7557 120.93 67.2671 120.93 67.8693C120.93 68.464 120.79 68.9981 120.51 69.4716C120.233 69.9413 119.805 70.3144 119.226 70.5909C118.646 70.8636 117.906 71 117.004 71H112.544ZM114.3 69.4943H116.834C117.675 69.4943 118.277 69.3315 118.641 69.0057C119.004 68.6799 119.186 68.2727 119.186 67.7841C119.186 67.4167 119.093 67.0796 118.908 66.7727C118.722 66.4659 118.457 66.2216 118.112 66.0398C117.771 65.858 117.366 65.7671 116.896 65.7671H114.3V69.4943ZM114.3 64.3977H116.652C117.046 64.3977 117.4 64.322 117.715 64.1705C118.033 64.019 118.285 63.8068 118.47 63.5341C118.66 63.2576 118.754 62.9318 118.754 62.5568C118.754 62.0758 118.586 61.6724 118.249 61.3466C117.911 61.0208 117.394 60.858 116.697 60.858H114.3V64.3977Z",fill:"#319795"}),(0,r.kt)("path",{d:"M339.272 63H335.505V51.3636H339.391C340.532 51.3636 341.511 51.5966 342.329 52.0625C343.147 52.5246 343.774 53.1894 344.21 54.0568C344.649 54.9205 344.869 55.9565 344.869 57.1648C344.869 58.3769 344.647 59.4186 344.204 60.2898C343.764 61.161 343.128 61.8315 342.295 62.3011C341.461 62.7671 340.454 63 339.272 63ZM337.261 61.4659H339.175C340.062 61.4659 340.799 61.2993 341.386 60.9659C341.973 60.6288 342.412 60.1421 342.704 59.5057C342.996 58.8655 343.141 58.0852 343.141 57.1648C343.141 56.2519 342.996 55.4773 342.704 54.8409C342.416 54.2046 341.986 53.7216 341.414 53.3921C340.842 53.0625 340.132 52.8977 339.283 52.8977H337.261V61.4659Z",fill:"#319795"}),(0,r.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M441 96H237V177H441V96ZM236 95V178H442V95H236Z",fill:"#319795"}),(0,r.kt)("defs",null,(0,r.kt)("clipPath",{id:"clip0_811_9289"},(0,r.kt)("rect",{x:"375",y:"103",width:"64",height:"64",rx:"32",fill:"white"})))),(0,r.kt)("h2",{id:"theming-properties"},"Theming properties"),(0,r.kt)("p",null,"The properties that affect the theming of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Avatar")," component are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"size"),": The size of the button. Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"md"),".")),(0,r.kt)("h2",{id:"theming-utilities"},"Theming utilities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"createMultiStyleConfigHelpers"),": a function that returns a set of utilities\nfor creating style configs for a multipart component (",(0,r.kt)("inlineCode",{parentName:"li"},"definePartsStyle")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"defineMultiStyleConfig"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"definePartsStyle"),": a function used to create multipart style objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"defineMultiStyleConfig"),": a function used to define the style configuration\nfor a multipart component.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { avatarAnatomy } from "@chakra-ui/anatomy";\nimport { createMultiStyleConfigHelpers } from "@chakra-ui/react";\n\nconst { definePartsStyle, defineMultiStyleConfig } =\n  createMultiStyleConfigHelpers(avatarAnatomy.keys);\n')),(0,r.kt)("h2",{id:"customizing-the-default-theme"},"Customizing the default theme"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { avatarAnatomy } from "@chakra-ui/anatomy";\nimport { createMultiStyleConfigHelpers } from "@chakra-ui/react";\n\nconst { definePartsStyle, defineMultiStyleConfig } =\n  createMultiStyleConfigHelpers(avatarAnatomy.keys);\n\nconst baseStyle = definePartsStyle({\n  // define the part you\'re going to style\n  badge: {\n    bg: "gray.500",\n    border: "2px solid",\n  },\n  container: {\n    borderRadius: "xl",\n  },\n  excessLabel: {\n    bg: "gray.800",\n    color: "white",\n    borderRadius: "xl",\n  },\n});\n\nexport const avatarTheme = defineMultiStyleConfig({ baseStyle });\n')),(0,r.kt)("p",null,"After customizing the avatar theme, we can import it in our theme file and add\nit in the ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { extendTheme } from "@chakra-ui/react";\nimport { avatarTheme } from "./components/avatar";\n\nexport const theme = extendTheme({\n  components: { Avatar: avatarTheme },\n});\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This is a crucial step to make sure that any changes that we make to the\navatar theme are applied.")),(0,r.kt)("h2",{id:"adding-a-custom-size"},"Adding a custom size"),(0,r.kt)("p",null,"Let's assume we want to include an super large avatar size. Here's how we can do\nthat:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { avatarAnatomy } from \'@chakra-ui/anatomy\'\nimport { createMultiStyleConfigHelpers, defineStyle } from \'@chakra-ui/react\'\n\nconst { definePartsStyle, defineMultiStyleConfig } =\n  createMultiStyleConfigHelpers(avatarAnatomy.keys)\n\nconst superLg = defineStyle({\n  width: 40,\n  height: 40,\n  fontSize: "6xl"\n})\n\nconst sizes = {\n  superLg: definePartsStyle({ container: superLg }),\n}\n\nexport const avatarTheme = defineMultiStyleConfig({ sizes })\n\n// Now we can use the new `superLg` size\n<Avatar size="superLg" ... />\n// or\n<AvatarGroup size="superLg">...</AvatarGroup>\n')),(0,r.kt)("p",null,"Every time you're adding anything new to the theme, you'd need to run the CLI\ncommand to get proper autocomplete in your IDE. You can learn more about the CLI\ntool ",(0,r.kt)("a",{parentName:"p",href:"/docs/styled-system/cli"},"here"),"."),(0,r.kt)("h2",{id:"adding-a-custom-variant"},"Adding a custom variant"),(0,r.kt)("p",null,"Let's assume we want to include a custom rounded square variant. Here's how we\ncan do that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { avatarAnatomy } from \'@chakra-ui/anatomy\'\nimport { createMultiStyleConfigHelpers, defineStyle } from \'@chakra-ui/react\'\n\nconst { definePartsStyle, defineMultiStyleConfig } =\n  createMultiStyleConfigHelpers(avatarAnatomy.keys)\n\nconst roundedSquare = definePartsStyle({\n  badge: {\n    bg: "gray.500",\n    border: "2px solid"\n  },\n  container: {\n    borderRadius: "xl"\n  },\n  excessLabel: {\n    bg: "gray.800",\n    color: "white",\n    borderRadius: "xl",\n    border: "2px solid",\n\n    // let\'s also provide dark mode alternatives\n    _dark: {\n      bg: "gray.400",\n      color: "gray.900"\n    }\n  }\n})\n\nexport const avatarTheme = defineMultiStyleConfig({\n  variants: { roundedSquare },\n})\n\n// Now we can use the new `roundedSquare` variant\n<Avatar variant="roundedSquare" ... />\n// or\n<AvatarGroup variant="roundedSquare">...</AvatarGroup>\n')),(0,r.kt)("h2",{id:"changing-the-default-properties"},"Changing the default properties"),(0,r.kt)("p",null,"Let's assume we want to change the default size and variant of every avatar in\nour app. Here's how we can do that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { avatarAnatomy } from '@chakra-ui/anatomy'\nimport { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'\n\nconst { defineMultiStyleConfig } = createMultiStyleConfigHelpers(\n  avatarAnatomy.keys,\n)\n\nexport const avatarTheme = defineMultiStyleConfig({\n  defaultProps: {\n    size: 'superLg',\n    variant: 'roundedSquare',\n  },\n})\n\n// This saves you time, instead of manually setting the size and variant every time you use an avatar:\n<Avatar variant=\"roundedSquare\" size=\"superLg\" ... />\n// or\n<AvatarGroup variant=\"roundedSquare\" size=\"superLg\">...</AvatarGroup>\n")),(0,r.kt)("h2",{id:"showcase"},"Showcase"),(0,r.kt)(d,{mdxType:"Showcase"}))}h.isMDXComponent=!0}}]);