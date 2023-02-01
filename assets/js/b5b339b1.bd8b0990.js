"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[5745],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,g=c["".concat(i,".").concat(d)]||c[d]||u[d]||p;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,o=new Array(p);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<p;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},81023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const p={},o="Wrap",l={unversionedId:"components/layout/wrap/index",id:"components/layout/wrap/index",title:"Wrap",description:"Wrap is a layout component used to add space between elements and wraps",source:"@site/content/docs/components/layout/wrap/index.mdx",sourceDirName:"components/layout/wrap",slug:"/components/layout/wrap/",permalink:"/docs/components/layout/wrap/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Stack",permalink:"/docs/components/layout/stack/"},next:{title:"Badge",permalink:"/docs/components/data-display/badge/"}},i={},s=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Change the spacing",id:"change-the-spacing",level:3},{value:"Change the alignment",id:"change-the-alignment",level:3},{value:"Props",id:"props",level:2},{value:"Wrap Props",id:"wrap-props",level:3},{value:"WrapItem Props",id:"wrapitem-props",level:3}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},c=m("ComponentLinks"),u=m("PropsTable"),d={toc:s};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wrap"},"Wrap"),(0,r.kt)("p",null,"Wrap is a layout component used to add space between elements and wraps\nautomatically if there isn't enough space."),(0,r.kt)(c,{github:{package:"layout"},npm:{package:"@chakra-ui/layout"},mdxType:"ComponentLinks"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Wrap, WrapItem } from "@chakra-ui/react";\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Wrap"),": Wrap composes the ",(0,r.kt)("inlineCode",{parentName:"li"},"Box")," component and renders a ",(0,r.kt)("inlineCode",{parentName:"li"},"<ul>")," tag"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"WrapItem"),": WrapItem composes the ",(0,r.kt)("inlineCode",{parentName:"li"},"Box")," component and renders the HTML\n",(0,r.kt)("inlineCode",{parentName:"li"},"<li>")," tag")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Think of ",(0,r.kt)("inlineCode",{parentName:"p"},"Wrap")," component as a flex box container with ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-wrap")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"spacing"),"\nsupport. It works really well with things like dialog buttons, tags, and chips."),(0,r.kt)("p",null,"In the example below, you see that the last ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," wrapped to the next line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live lg",live:!0,lg:!0},'<Wrap>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="red.200">\n      Box 1\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="green.200">\n      Box 2\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="tomato">\n      Box 3\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="blue.200">\n      Box 4\n    </Center>\n  </WrapItem>\n</Wrap>\n')),(0,r.kt)("h3",{id:"change-the-spacing"},"Change the spacing"),(0,r.kt)("p",null,"Pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"spacing")," prop to apply consistent spacing between each child, even if\nit wraps."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Pro Tip: You can pass responsive values for the spacing.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live xl",live:!0,xl:!0},'<Wrap spacing="30px">\n  <WrapItem>\n    <Center w="180px" h="80px" bg="red.200">\n      Box 1\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="green.200">\n      Box 2\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="tomato">\n      Box 3\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="blue.200">\n      Box 4\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="blackAlpha.500">\n      Box 5\n    </Center>\n  </WrapItem>\n</Wrap>\n')),(0,r.kt)("h3",{id:"change-the-alignment"},"Change the alignment"),(0,r.kt)("p",null,"Pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"align")," prop to change the alignment of the child along the cross axis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live lg",live:!0,lg:!0},'<Wrap spacing="30px" align="center">\n  <WrapItem>\n    <Center w="180px" h="80px" bg="red.200">\n      Box 1\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="40px" bg="green.200">\n      Box 2\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="120px" h="80px" bg="tomato">\n      Box 3\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="40px" bg="blue.200">\n      Box 4\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="blackAlpha.500">\n      Box 5\n    </Center>\n  </WrapItem>\n</Wrap>\n')),(0,r.kt)("p",null,"Pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"justify")," prop to change the alignment of the child along the main\naxis."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live lg",live:!0,lg:!0},'<Wrap spacing="30px" justify="center">\n  <WrapItem>\n    <Center w="180px" h="80px" bg="red.200">\n      Box 1\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="green.200">\n      Box 2\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="120px" h="80px" bg="tomato">\n      Box 3\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="blue.200">\n      Box 4\n    </Center>\n  </WrapItem>\n  <WrapItem>\n    <Center w="180px" h="80px" bg="blackAlpha.500">\n      Box 5\n    </Center>\n  </WrapItem>\n</Wrap>\n')),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"wrap-props"},"Wrap Props"),(0,r.kt)("p",null,"Wrap extends ",(0,r.kt)("inlineCode",{parentName:"p"},"Box"),", so you can pass all ",(0,r.kt)("inlineCode",{parentName:"p"},"Box")," props in addition to these:"),(0,r.kt)(u,{of:"Wrap",mdxType:"PropsTable"}),(0,r.kt)("h3",{id:"wrapitem-props"},"WrapItem Props"),(0,r.kt)("p",null,"WrapItem composes the Box component."))}g.isMDXComponent=!0}}]);