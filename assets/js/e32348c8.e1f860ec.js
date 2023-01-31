"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[3879],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?o.createElement(h,r(r({ref:n},d),{},{components:t})):o.createElement(h,r({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const i={},r="Transitions",l={unversionedId:"components/other/transitions/index",id:"components/other/transitions/index",title:"Transitions",description:"Chakra exports four components Fade, ScaleFade, Slide, and SlideFade",source:"@site/content/docs/components/other/transitions/index.mdx",sourceDirName:"components/other/transitions",slug:"/components/other/transitions/",permalink:"/docs/components/other/transitions/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Show / Hide",permalink:"/docs/components/other/show-hide/"},next:{title:"Alert Dialog",permalink:"/docs/components/overlay/alert-dialog/"}},s={},p=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Fade transition",id:"fade-transition",level:3},{value:"ScaleFade transition",id:"scalefade-transition",level:3},{value:"Slide transition",id:"slide-transition",level:3},{value:"Slide Fade transition",id:"slide-fade-transition",level:3},{value:"Collapse transition",id:"collapse-transition",level:3},{value:"Changing the startingHeight",id:"changing-the-startingheight",level:4},{value:"Props",id:"props",level:2},{value:"Fade Props",id:"fade-props",level:3},{value:"ScaleFade Props",id:"scalefade-props",level:3},{value:"Slide Props",id:"slide-props",level:3},{value:"SlideFade Props",id:"slidefade-props",level:3},{value:"Collapse Props",id:"collapse-props",level:3}],d=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},c=d("ComponentLinks"),u=d("PropsTable"),m={toc:p};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"transitions"},"Transitions"),(0,a.kt)("p",null,"Chakra exports four components ",(0,a.kt)("inlineCode",{parentName:"p"},"Fade"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ScaleFade"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Slide"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"SlideFade"),"\nto provide simple transitions."),(0,a.kt)(c,{github:{package:"transition"},npm:{package:"@chakra-ui/transition"},mdxType:"ComponentLinks"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("p",null,"Most transition components are made using ",(0,a.kt)("inlineCode",{parentName:"p"},"framer-motion"),". They accept the\nfollowing props:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Common props from framer's ",(0,a.kt)("inlineCode",{parentName:"li"},"motion")," elements"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"in")," prop used to trigger the transition"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unmountOnExit")," prop used to unmount the component when it is not visible.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react";\n')),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Chakra exports four components ",(0,a.kt)("inlineCode",{parentName:"p"},"Fade"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ScaleFade"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Slide"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"SlideFade")," to\nprovide simple transitions."),(0,a.kt)("h3",{id:"fade-transition"},"Fade transition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function FadeEx() {\n  const { isOpen, onToggle } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onToggle}>Click Me</Button>\n      <Fade in={isOpen}>\n        <Box\n          p="40px"\n          color="white"\n          mt="4"\n          bg="teal.500"\n          rounded="md"\n          shadow="md"\n        >\n          Fade\n        </Box>\n      </Fade>\n    </>\n  );\n}\n')),(0,a.kt)("h3",{id:"scalefade-transition"},"ScaleFade transition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function ScaleFadeEx() {\n  const { isOpen, onToggle } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onToggle}>Click Me</Button>\n      <ScaleFade initialScale={0.9} in={isOpen}>\n        <Box\n          p="40px"\n          color="white"\n          mt="4"\n          bg="teal.500"\n          rounded="md"\n          shadow="md"\n        >\n          Fade\n        </Box>\n      </ScaleFade>\n    </>\n  );\n}\n')),(0,a.kt)("h3",{id:"slide-transition"},"Slide transition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function SlideEx() {\n  const { isOpen, onToggle } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onToggle}>Click Me</Button>\n      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>\n        <Box\n          p="40px"\n          color="white"\n          mt="4"\n          bg="teal.500"\n          rounded="md"\n          shadow="md"\n        >\n          <Lorem count={2} />\n        </Box>\n      </Slide>\n    </>\n  );\n}\n')),(0,a.kt)("h3",{id:"slide-fade-transition"},"Slide Fade transition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function SlideFadeEx() {\n  const { isOpen, onToggle } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onToggle}>Click Me</Button>\n      <SlideFade in={isOpen} offsetY="20px">\n        <Box\n          p="40px"\n          color="white"\n          mt="4"\n          bg="teal.500"\n          rounded="md"\n          shadow="md"\n        >\n          <Lorem count={1} />\n        </Box>\n      </SlideFade>\n    </>\n  );\n}\n')),(0,a.kt)("h3",{id:"collapse-transition"},"Collapse transition"),(0,a.kt)("p",null,"The Collapse component is used to create regions of content that can\nexpand/collapse with a simple animation. It helps to hide content that's not\nimmediately relevant to the user."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function CollapseEx() {\n  const { isOpen, onToggle } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onToggle}>Click Me</Button>\n      <Collapse in={isOpen} animateOpacity>\n        <Box\n          p="40px"\n          color="white"\n          mt="4"\n          bg="teal.500"\n          rounded="md"\n          shadow="md"\n        >\n          <Lorem count={1} />\n        </Box>\n      </Collapse>\n    </>\n  );\n}\n')),(0,a.kt)("h4",{id:"changing-the-startingheight"},"Changing the startingHeight"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function Example() {\n  const [show, setShow] = React.useState(false);\n\n  const handleToggle = () => setShow(!show);\n\n  return (\n    <>\n      <Collapse startingHeight={20} in={show}>\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus\n        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer\n        labore wes anderson cred nesciunt sapiente ea proident.\n      </Collapse>\n      <Button size="sm" onClick={handleToggle} mt="1rem">\n        Show {show ? "Less" : "More"}\n      </Button>\n    </>\n  );\n}\n')),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("p",null,"The transition components extends the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.framer.com/api/motion/component/"},"framer-motion"),"."),(0,a.kt)("h3",{id:"fade-props"},"Fade Props"),(0,a.kt)(u,{of:"Fade",only:["in","unmountOnExit"],mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"scalefade-props"},"ScaleFade Props"),(0,a.kt)(u,{of:"ScaleFade",only:["initialScale","reverse","unmountOnExit","in"],mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"slide-props"},"Slide Props"),(0,a.kt)(u,{of:"Slide",only:["unmountOnExit","direction","in"],mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"slidefade-props"},"SlideFade Props"),(0,a.kt)(u,{of:"SlideFade",only:["offsetX","offsetY","reverse","unmountOnExit","in"],mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"collapse-props"},"Collapse Props"),(0,a.kt)(u,{of:"Collapse",only:["animateOpacity","unmountOnExit","in","startingHeight","endingHeight"],mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);