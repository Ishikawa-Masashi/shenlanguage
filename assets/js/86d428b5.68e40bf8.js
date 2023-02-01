"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[7371],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>C});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,C=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(C,r(r({ref:t},c),{},{components:n})):a.createElement(C,r({ref:t},c))}));function C(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o=(r="SandpackEditor",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var r;const l={toc:[]};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o,{mdxType:"SandpackEditor"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"tag-theme.tsx","tag-theme.tsx":!0},'import { tagAnatomy } from "@chakra-ui/anatomy";\nimport { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";\n\nconst {\n  definePartsStyle,\n  defineMultiStyleConfig\n} = createMultiStyleConfigHelpers(tagAnatomy.keys);\n\nconst brandPrimary = definePartsStyle({\n  container: {\n    bg: "orange.400",\n    color: "blackAlpha.700"\n  }\n});\n\nconst thick = definePartsStyle({\n  container: {\n    px: "4",\n    py: "2",\n    bg: "blue.400"\n  }\n});\n\nconst ml = defineStyle({\n  px: "3",\n  py: "2",\n  fontSize: "25"\n});\n\nconst sizes = {\n  ml: definePartsStyle({ container: ml, label: ml })\n};\n\nexport const tagTheme = defineMultiStyleConfig({\n  sizes,\n  variants: {\n    brand: brandPrimary,\n    thick: thick\n  }\n});\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"tag.tsx","tag.tsx":!0},'import { Box, IconButton, Center, Tag, useColorMode } from "@chakra-ui/react";\nimport { FaMoon, FaSun } from "react-icons/fa";\n\nconst TagPreview = () => {\n  const { toggleColorMode, colorMode } = useColorMode();\n  return (\n    <Box position="relative">\n      <Center h="100vh">\n        <Tag>Default</Tag>\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        <Tag variant="brand">Branded</Tag>\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        <Tag variant="thick">Thick</Tag>\n        &nbsp;&nbsp;&nbsp;&nbsp;\n        <Tag size="ml">XL Tag</Tag>\n      </Center>\n      <IconButton\n        aria-label="toggle theme"\n        rounded="full"\n        size="xs"\n        position="absolute"\n        bottom={4}\n        left={4}\n        onClick={toggleColorMode}\n        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}\n      />\n    </Box>\n  );\n}\n\nexport default TagPreview;\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"App.tsx","App.tsx":!0},'import { ChakraProvider, extendTheme } from "@chakra-ui/react";\nimport Tag from "./tag";\nimport { tagTheme } from "./tag-theme";\n\nconst theme = extendTheme({\n  components: {\n    tag: tagTheme,\n  }\n});\n\nconst App = () => {\n  return (\n    <ChakraProvider theme={theme}>\n      <Tag />\n    </ChakraProvider>\n  );\n}\n\nexport default App;\n'))))}s.isMDXComponent=!0;const p={},c="Theming",d={unversionedId:"components/data-display/tag/theming",id:"components/data-display/tag/theming",title:"Theming",description:"Overview",source:"@site/content/docs/components/data-display/tag/theming.mdx",sourceDirName:"components/data-display/tag",slug:"/components/data-display/tag/theming",permalink:"/docs/components/data-display/tag/theming",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Tag",permalink:"/docs/components/data-display/tag/"},next:{title:"Accordion",permalink:"/docs/components/disclosure/accordion/"}},m={},u=[{value:"Overview",id:"overview",level:2},{value:"Anantomy",id:"anantomy",level:2},{value:"Theming properties",id:"theming-properties",level:2},{value:"Theming utilities",id:"theming-utilities",level:2},{value:"Customizing the default theme",id:"customizing-the-default-theme",level:2},{value:"Adding a custom size",id:"adding-a-custom-size",level:2},{value:"Adding a custom variant",id:"adding-a-custom-variant",level:2},{value:"Changing the default properties",id:"changing-the-default-properties",level:2},{value:"Showcase",id:"showcase",level:2}],C={toc:u};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"theming"},"Theming"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," component is a multipart component. The styling needs to be applied to\neach part specifically."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To learn more about styling single part components, visit the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/styled-system/theming/component-style#styling-multipart-components"},"Component Style"),"\npage")),(0,i.kt)("h2",{id:"anantomy"},"Anantomy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A: ",(0,i.kt)("inlineCode",{parentName:"li"},"container")),(0,i.kt)("li",{parentName:"ul"},"B: ",(0,i.kt)("inlineCode",{parentName:"li"},"label")),(0,i.kt)("li",{parentName:"ul"},"C: ",(0,i.kt)("inlineCode",{parentName:"li"},"closeButton"))),(0,i.kt)("svg",{width:"75%",height:"100%",viewBox:"0 0 384 216",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,i.kt)("rect",{width:"384",height:"216",fill:"white"}),(0,i.kt)("rect",{x:"140",y:"92",width:"87",height:"32",rx:"6",fill:"#319795"}),(0,i.kt)("path",{d:"M161.153 106.04C161.043 105.695 160.896 105.386 160.71 105.114C160.528 104.837 160.311 104.602 160.057 104.409C159.803 104.212 159.513 104.062 159.187 103.96C158.865 103.858 158.511 103.807 158.125 103.807C157.47 103.807 156.879 103.975 156.352 104.312C155.826 104.65 155.409 105.144 155.102 105.795C154.799 106.443 154.648 107.237 154.648 108.176C154.648 109.119 154.801 109.917 155.108 110.568C155.415 111.22 155.835 111.714 156.369 112.051C156.903 112.388 157.511 112.557 158.193 112.557C158.826 112.557 159.377 112.428 159.847 112.17C160.32 111.913 160.686 111.549 160.943 111.08C161.204 110.606 161.335 110.049 161.335 109.409L161.79 109.494H158.46V108.045H163.034V109.369C163.034 110.347 162.826 111.195 162.409 111.915C161.996 112.631 161.424 113.184 160.693 113.574C159.966 113.964 159.132 114.159 158.193 114.159C157.14 114.159 156.216 113.917 155.42 113.432C154.629 112.947 154.011 112.259 153.568 111.369C153.125 110.475 152.903 109.415 152.903 108.187C152.903 107.259 153.032 106.426 153.29 105.687C153.547 104.949 153.909 104.322 154.375 103.807C154.845 103.288 155.396 102.892 156.028 102.619C156.665 102.343 157.36 102.205 158.114 102.205C158.742 102.205 159.328 102.297 159.869 102.483C160.415 102.669 160.9 102.932 161.324 103.273C161.752 103.614 162.106 104.019 162.386 104.489C162.667 104.955 162.856 105.472 162.954 106.04H161.153Z",fill:"white"}),(0,i.kt)("path",{d:"M165.126 114V105.273H166.768V106.659H166.859C167.018 106.189 167.299 105.82 167.7 105.551C168.105 105.278 168.564 105.142 169.075 105.142C169.181 105.142 169.306 105.146 169.45 105.153C169.598 105.161 169.713 105.17 169.797 105.182V106.807C169.729 106.788 169.607 106.767 169.433 106.744C169.259 106.718 169.085 106.705 168.91 106.705C168.509 106.705 168.151 106.79 167.837 106.96C167.526 107.127 167.28 107.36 167.098 107.659C166.916 107.955 166.825 108.292 166.825 108.67V114H165.126Z",fill:"white"}),(0,i.kt)("path",{d:"M174.716 114.176C173.856 114.176 173.115 113.992 172.494 113.625C171.877 113.254 171.4 112.733 171.062 112.062C170.729 111.388 170.562 110.598 170.562 109.693C170.562 108.799 170.729 108.011 171.062 107.33C171.4 106.648 171.869 106.116 172.472 105.733C173.078 105.35 173.786 105.159 174.597 105.159C175.089 105.159 175.566 105.241 176.028 105.403C176.49 105.566 176.905 105.822 177.273 106.17C177.64 106.519 177.93 106.972 178.142 107.528C178.354 108.081 178.46 108.754 178.46 109.545V110.148H171.523V108.875H176.795C176.795 108.428 176.704 108.032 176.523 107.687C176.341 107.339 176.085 107.064 175.756 106.864C175.43 106.663 175.047 106.562 174.608 106.562C174.131 106.562 173.714 106.68 173.358 106.915C173.006 107.146 172.733 107.449 172.54 107.824C172.35 108.195 172.256 108.598 172.256 109.034V110.028C172.256 110.612 172.358 111.108 172.562 111.517C172.771 111.926 173.061 112.239 173.432 112.455C173.803 112.667 174.237 112.773 174.733 112.773C175.055 112.773 175.348 112.727 175.614 112.636C175.879 112.542 176.108 112.401 176.301 112.216C176.494 112.03 176.642 111.801 176.744 111.528L178.352 111.818C178.223 112.292 177.992 112.706 177.659 113.062C177.329 113.415 176.915 113.689 176.415 113.886C175.918 114.08 175.352 114.176 174.716 114.176Z",fill:"white"}),(0,i.kt)("path",{d:"M184.106 114.176C183.247 114.176 182.506 113.992 181.885 113.625C181.267 113.254 180.79 112.733 180.453 112.062C180.12 111.388 179.953 110.598 179.953 109.693C179.953 108.799 180.12 108.011 180.453 107.33C180.79 106.648 181.26 106.116 181.862 105.733C182.468 105.35 183.177 105.159 183.987 105.159C184.48 105.159 184.957 105.241 185.419 105.403C185.881 105.566 186.296 105.822 186.663 106.17C187.031 106.519 187.32 106.972 187.533 107.528C187.745 108.081 187.851 108.754 187.851 109.545V110.148H180.913V108.875H186.186C186.186 108.428 186.095 108.032 185.913 107.687C185.731 107.339 185.476 107.064 185.146 106.864C184.82 106.663 184.438 106.562 183.998 106.562C183.521 106.562 183.105 106.68 182.748 106.915C182.396 107.146 182.123 107.449 181.93 107.824C181.741 108.195 181.646 108.598 181.646 109.034V110.028C181.646 110.612 181.748 111.108 181.953 111.517C182.161 111.926 182.451 112.239 182.822 112.455C183.194 112.667 183.627 112.773 184.123 112.773C184.445 112.773 184.739 112.727 185.004 112.636C185.269 112.542 185.498 112.401 185.692 112.216C185.885 112.03 186.033 111.801 186.135 111.528L187.743 111.818C187.614 112.292 187.383 112.706 187.05 113.062C186.72 113.415 186.305 113.689 185.805 113.886C185.309 114.08 184.743 114.176 184.106 114.176Z",fill:"white"}),(0,i.kt)("path",{d:"M191.435 108.818V114H189.736V105.273H191.366V106.693H191.474C191.675 106.231 191.989 105.86 192.418 105.58C192.849 105.299 193.393 105.159 194.048 105.159C194.643 105.159 195.164 105.284 195.611 105.534C196.058 105.78 196.404 106.148 196.65 106.636C196.897 107.125 197.02 107.729 197.02 108.449V114H195.321V108.653C195.321 108.021 195.156 107.526 194.827 107.17C194.497 106.811 194.044 106.631 193.469 106.631C193.075 106.631 192.724 106.716 192.418 106.886C192.114 107.057 191.874 107.307 191.696 107.636C191.522 107.962 191.435 108.356 191.435 108.818Z",fill:"white"}),(0,i.kt)("path",{d:"M213 107.057L216.3 103.757L217.243 104.7L213.943 108L217.243 111.3L216.3 112.243L213 108.943L209.7 112.243L208.757 111.3L212.057 108L208.757 104.7L209.7 103.757L213 107.057Z",fill:"white","fill-opacity":"0.8"}),(0,i.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M183 87L183 77L184 77L184 87L183 87Z",fill:"#D53F8C"}),(0,i.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M222 107.5L266 107.5L266 108.5L222 108.5L222 107.5Z",fill:"#D69E2E"}),(0,i.kt)("path",{d:"M198 64C198 71.732 191.732 78 184 78C176.268 78 170 71.732 170 64C170 56.268 176.268 50 184 50C191.732 50 198 56.268 198 64Z",fill:"#FED7E2"}),(0,i.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M184 77C191.18 77 197 71.1797 197 64C197 56.8203 191.18 51 184 51C176.82 51 171 56.8203 171 64C171 71.1797 176.82 77 184 77ZM184 78C191.732 78 198 71.732 198 64C198 56.268 191.732 50 184 50C176.268 50 170 56.268 170 64C170 71.732 176.268 78 184 78Z",fill:"#D53F8C"}),(0,i.kt)("path",{d:"M180.66 70H178.796L182.984 58.3636H185.012L189.2 70H187.336L184.046 60.4773H183.955L180.66 70ZM180.973 65.4432H187.018V66.9205H180.973V65.4432Z",fill:"#D53F8C"}),(0,i.kt)("path",{d:"M294 108C294 115.732 287.732 122 280 122C272.268 122 266 115.732 266 108C266 100.268 272.268 94 280 94C287.732 94 294 100.268 294 108Z",fill:"#FEFCBF"}),(0,i.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M280 121C287.18 121 293 115.18 293 108C293 100.82 287.18 95 280 95C272.82 95 267 100.82 267 108C267 115.18 272.82 121 280 121ZM280 122C287.732 122 294 115.732 294 108C294 100.268 287.732 94 280 94C272.268 94 266 100.268 266 108C266 115.732 272.268 122 280 122Z",fill:"#D69E2E"}),(0,i.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M232 88H136V128H232V88ZM135 87V129H233V87H135Z",fill:"#D53F8C"}),(0,i.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M222 99H204V117H222V99ZM203 98V118H223V98H203Z",fill:"#D69E2E"}),(0,i.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M148 108.5H117V107.5H148V108.5Z",fill:"#DD6B20"}),(0,i.kt)("path",{d:"M118 108C118 115.732 111.732 122 104 122C96.268 122 90 115.732 90 108C90 100.268 96.268 94 104 94C111.732 94 118 100.268 118 108Z",fill:"#FEEBCB"}),(0,i.kt)("path",{d:"M100.544 114V102.364H104.805C105.631 102.364 106.315 102.5 106.856 102.773C107.398 103.042 107.803 103.407 108.072 103.869C108.341 104.328 108.476 104.845 108.476 105.42C108.476 105.905 108.387 106.314 108.209 106.648C108.031 106.977 107.792 107.242 107.493 107.443C107.197 107.64 106.872 107.784 106.516 107.875V107.989C106.902 108.008 107.279 108.133 107.646 108.364C108.017 108.591 108.324 108.915 108.567 109.335C108.809 109.756 108.93 110.267 108.93 110.869C108.93 111.464 108.79 111.998 108.51 112.472C108.233 112.941 107.805 113.314 107.226 113.591C106.646 113.864 105.906 114 105.004 114H100.544ZM102.3 112.494H104.834C105.675 112.494 106.277 112.331 106.641 112.006C107.004 111.68 107.186 111.273 107.186 110.784C107.186 110.417 107.093 110.08 106.908 109.773C106.722 109.466 106.457 109.222 106.112 109.04C105.771 108.858 105.366 108.767 104.896 108.767H102.3V112.494ZM102.3 107.398H104.652C105.046 107.398 105.4 107.322 105.714 107.17C106.033 107.019 106.284 106.807 106.47 106.534C106.659 106.258 106.754 105.932 106.754 105.557C106.754 105.076 106.586 104.672 106.248 104.347C105.911 104.021 105.394 103.858 104.697 103.858H102.3V107.398Z",fill:"#DD6B20"}),(0,i.kt)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M104 121C111.18 121 117 115.18 117 108C117 100.82 111.18 95 104 95C96.8203 95 91 100.82 91 108C91 115.18 96.8203 121 104 121ZM104 122C111.732 122 118 115.732 118 108C118 100.268 111.732 94 104 94C96.268 94 90 100.268 90 108C90 115.732 96.268 122 104 122Z",fill:"#DD6B20"}),(0,i.kt)("circle",{cx:"148.5",cy:"108",r:"2",fill:"#DD6B20"}),(0,i.kt)("path",{d:"M285.06 106.148H283.288C283.219 105.769 283.092 105.436 282.907 105.148C282.721 104.86 282.494 104.616 282.225 104.415C281.956 104.214 281.655 104.062 281.322 103.96C280.992 103.858 280.642 103.807 280.271 103.807C279.6 103.807 279 103.975 278.469 104.312C277.943 104.65 277.526 105.144 277.219 105.795C276.916 106.447 276.765 107.242 276.765 108.182C276.765 109.129 276.916 109.928 277.219 110.58C277.526 111.231 277.945 111.723 278.475 112.057C279.005 112.39 279.602 112.557 280.265 112.557C280.632 112.557 280.981 112.508 281.31 112.409C281.644 112.307 281.945 112.157 282.214 111.96C282.483 111.763 282.71 111.523 282.896 111.239C283.085 110.951 283.216 110.621 283.288 110.25L285.06 110.256C284.966 110.828 284.782 111.354 284.509 111.835C284.24 112.312 283.894 112.725 283.469 113.074C283.049 113.419 282.568 113.686 282.026 113.875C281.485 114.064 280.894 114.159 280.253 114.159C279.246 114.159 278.348 113.92 277.56 113.443C276.772 112.962 276.151 112.275 275.697 111.381C275.246 110.487 275.021 109.42 275.021 108.182C275.021 106.939 275.248 105.873 275.702 104.983C276.157 104.089 276.778 103.403 277.566 102.926C278.354 102.445 279.25 102.205 280.253 102.205C280.871 102.205 281.447 102.294 281.981 102.472C282.519 102.646 283.002 102.903 283.43 103.244C283.858 103.581 284.212 103.994 284.492 104.483C284.772 104.968 284.962 105.523 285.06 106.148Z",fill:"#D69E2E"})),(0,i.kt)("h2",{id:"theming-properties"},"Theming properties"),(0,i.kt)("p",null,"The properties that affect the theming of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," component are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"variant"),": The visual variant of the tag. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"subtle"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"colorScheme"),": The color scheme of the tag. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"gray"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size"),": The size of the tag. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"md"),".")),(0,i.kt)("h2",{id:"theming-utilities"},"Theming utilities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"createMultiStyleConfigHelpers"),": a function that returns a set of utilities\nfor creating style configs for a multipart component (",(0,i.kt)("inlineCode",{parentName:"li"},"definePartsStyle")," and\n",(0,i.kt)("inlineCode",{parentName:"li"},"defineMultiStyleConfig"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"definePartsStyle"),": a function used to create multipart style objects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"defineMultiStyleConfig"),": a function used to define the style configuration\nfor a multipart component.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { tagAnatomy } from "@chakra-ui/anatomy";\nimport { createMultiStyleConfigHelpers } from "@chakra-ui/react";\n\nconst { definePartsStyle, defineMultiStyleConfig } =\n  createMultiStyleConfigHelpers(tagAnatomy.keys);\n')),(0,i.kt)("h2",{id:"customizing-the-default-theme"},"Customizing the default theme"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { tagAnatomy } from "@chakra-ui/anatomy";\nimport { createMultiStyleConfigHelpers } from "@chakra-ui/react";\n\nconst { definePartsStyle, defineMultiStyleConfig } =\n  createMultiStyleConfigHelpers(tagAnatomy.keys);\n\nconst baseStyle = definePartsStyle({\n  // define the part you\'re going to style\n  container: {\n    bg: "orange.400",\n    color: "blackAlpha.700",\n  },\n});\n\nexport const tagTheme = defineMultiStyleConfig({ baseStyle });\n')),(0,i.kt)("p",null,"After customizing the tag theme, we can import it in our theme file and add it\nin the components property:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { extendTheme } from "@chakra-ui/react";\nimport { tagTheme } from "./components/tag";\n\nexport const theme = extendTheme({\n  components: { Tag: tagTheme },\n});\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is a crucial step to make sure that any changes that we make to the tag\ntheme are applied.")),(0,i.kt)("h2",{id:"adding-a-custom-size"},"Adding a custom size"),(0,i.kt)("p",null,"Let's assume we want to include an extra large tag size. Here's how we can do\nthat:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { tagAnatomy } from "@chakra-ui/anatomy";\nimport { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";\n\nconst ml = defineStyle({\n  px: "3",\n  py: "2",\n  fontSize: "25",\n});\n\nconst sizes = {\n  ml: definePartsStyle({ container: ml, label: ml }),\n};\n\nexport const tagTheme = defineMultiStyleConfig({ sizes });\n\n// Now we can use the new `xl` size\n<Tag size="ml" />;\n')),(0,i.kt)("p",null,"Every time you're adding anything new to the theme, you'd need to run the cli\ncommand to get proper autocomplete in your IDE. You can learn more about the CLI\ntool ",(0,i.kt)("a",{parentName:"p",href:"/docs/styled-system/cli"},"here"),"."),(0,i.kt)("h2",{id:"adding-a-custom-variant"},"Adding a custom variant"),(0,i.kt)("p",null,"Let's assume we want to include a custom branded variant. Here's how we can do\nthat:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import { tagAnatomy } from "@chakra-ui/anatomy";\nimport { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";\n\nconst { definePartsStyle, defineMultiStyleConfig } =\n  createMultiStyleConfigHelpers(tagAnatomy.keys);\n\nconst brandPrimary = definePartsStyle({\n  container: {\n    bg: "orange.400",\n    color: "blackAlpha.700",\n  },\n});\n\nconst thick = definePartsStyle({\n  container: {\n    px: "4",\n    py: "2",\n    bg: "blue.400",\n  },\n});\n\nexport const tagTheme = defineMultiStyleConfig({\n  variants: {\n    brand: brandPrimary,\n    thick: thick,\n  },\n});\n\n// Now we can use the new `brandPrimary` variant\n<Tag variant="brand" />;\n')),(0,i.kt)("h2",{id:"changing-the-default-properties"},"Changing the default properties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { tagAnatomy } from '@chakra-ui/anatomy'\nimport { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'\n\nconst { defineMultiStyleConfig } = createMultiStyleConfigHelpers(\n  tagAnatomy.keys,\n)\n\nexport const tagTheme = defineMultiStyleConfig({\n  defaultProps: {\n    size: 'ml',\n    variant: 'brand',\n  },\n})\n\n// This saves you time, instead of manually setting the size and variant every time you use an input:\n<Input size=\"ml\" variant=\"brand\" ... />\n")),(0,i.kt)("h2",{id:"showcase"},"Showcase"),(0,i.kt)(s,{mdxType:"Showcase"}))}g.isMDXComponent=!0}}]);