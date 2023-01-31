"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[2386],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),u=o,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17547:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={},i="Link Overlay",l={unversionedId:"components/navigation/link-overlay/index",id:"components/navigation/link-overlay/index",title:"Link Overlay",description:"Link overlay is a semantic component used to wrap elements (cards, blog post,",source:"@site/content/docs/components/navigation/link-overlay/index.mdx",sourceDirName:"components/navigation/link-overlay",slug:"/components/navigation/link-overlay/",permalink:"/shenlanguage/docs/components/navigation/link-overlay/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/shenlanguage/docs/components/navigation/link/theming"},next:{title:"Skip Nav",permalink:"/shenlanguage/docs/components/navigation/skip-nav/"}},s={},p=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Nested Links",id:"nested-links",level:3},{value:"Usage with Routing Library",id:"usage-with-routing-library",level:2},{value:"Caveat",id:"caveat",level:2},{value:"Props",id:"props",level:2}],c=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",n)},d=c("ComponentLinks"),m=c("PropsTable"),u={toc:p};function k(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"link-overlay"},"Link Overlay"),(0,o.kt)("p",null,"Link overlay is a semantic component used to wrap elements (cards, blog post,\narticles, etc.) in a link."),(0,o.kt)(d,{github:{package:"layout"},npm:{package:"@chakra-ui/layout"},mdxType:"ComponentLinks"}),(0,o.kt)("h2",{id:"import"},"Import"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import { LinkBox, LinkOverlay } from "@chakra-ui/react";\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"When you need to link an entire component or card, it can be tempting to wrap it\nwithin ",(0,o.kt)("inlineCode",{parentName:"p"},'<a href="...">')," and think you're done. This is considered ",(0,o.kt)("strong",{parentName:"p"},"unsemantic\nand incorrect")," because the component or card could contain other clickable\nelements or links (tags, timestamps, buttons)."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/html5/text-level-semantics.html#the-a-element"},"According to the specification"),",\nan ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," element\u2019s content model specifically states that an ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," cannot\ncontain any interactive descendants (button, anchors, input, etc).")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkOverlay")," component aims to solve this by overlaying one link on top of\nthe component or card, and then elevating the remaining links on top of it."),(0,o.kt)("p",null,"Wrap the container within a ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkBox")," and use the ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkOverlay")," as a child of it\nor around the title's content."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">\n  <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">\n    13 days ago\n  </Box>\n  <Heading size="md" my="2">\n    <LinkOverlay href="#">\n      New Year, New Beginnings: Smashing Workshops & Audits\n    </LinkOverlay>\n  </Heading>\n  <Text>\n    Catch up on what\u2019s been cookin\u2019 at Smashing and explore some of the most\n    popular community resources.\n  </Text>\n</LinkBox>\n')),(0,o.kt)("h3",{id:"nested-links"},"Nested Links"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkBox")," lifts any nested links to the top using ",(0,o.kt)("inlineCode",{parentName:"p"},"z-index")," to ensure proper\nkeyboard navigation between links."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Use the keyboard to test how focus ring moves within the article")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'<LinkBox as="article" maxW="sm" p="5" borderWidth="1px" rounded="md">\n  <Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">\n    13 days ago\n  </Box>\n  <Heading size="md" my="2">\n    <LinkOverlay href="#">\n      New Year, New Beginnings: Smashing Workshops & Audits\n    </LinkOverlay>\n  </Heading>\n  <Text mb="3">\n    Catch up on what\u2019s been cookin\u2019 at Smashing and explore some of the most\n    popular community resources.\n  </Text>\n  <Box as="a" color="teal.400" href="#" fontWeight="bold">\n    Some inner link\n  </Box>\n</LinkBox>\n')),(0,o.kt)("h2",{id:"usage-with-routing-library"},"Usage with Routing Library"),(0,o.kt)("p",null,"To add support for external libraries like Next.js' or gatsby ",(0,o.kt)("inlineCode",{parentName:"p"},"Link"),", you can\nwrap them around the ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkOverlay")," or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," prop (for reach and react\nrouter)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import NextLink from "next/link";\n\nfunction Example() {\n  return (\n    <LinkBox as="article">\n      <h2>\n        <NextLink href="#" passHref>\n          <LinkOverlay>Some blog post</LinkOverlay>\n        </NextLink>\n      </h2>\n      <p>\n        As a side note, using quotation marks around an attribute value is\n        required only if this value is not a valid identifier.\n      </p>\n      <a href="#">Some inner link</a>\n    </LinkBox>\n  );\n}\n')),(0,o.kt)("h2",{id:"caveat"},"Caveat"),(0,o.kt)("p",null,'One of the side-effects for this technique is that the content can\'t be\n"selectable" (i.e with a pointing device), however this seems to be pretty\ntrivial compared to the benefits!'),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkBox")," component composes the ",(0,o.kt)("inlineCode",{parentName:"p"},"Box")," component."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkOverlay")," component composes the ",(0,o.kt)("inlineCode",{parentName:"p"},"chakra.a")," in addition to these props:"),(0,o.kt)(m,{of:"LinkOverlay",mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);