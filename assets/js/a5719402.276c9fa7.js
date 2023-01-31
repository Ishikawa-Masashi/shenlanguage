"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[2141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},x={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,u=d["".concat(l,".").concat(h)]||d[h]||x[h]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="Text",s={unversionedId:"components/typography/text/index",id:"components/typography/text/index",title:"Text",description:"Text is the used to render text and paragraphs within an interface.",source:"@site/content/docs/components/typography/text/index.mdx",sourceDirName:"components/typography/text",slug:"/components/typography/text/",permalink:"/docs/components/typography/text/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/docs/components/typography/highlight/highlight"},next:{title:"useBoolean",permalink:"/docs/hooks/use-boolean"}},l={},p=[{value:"Import",id:"import",level:2},{value:"Changing the font size",id:"changing-the-font-size",level:2},{value:"Truncate text",id:"truncate-text",level:3},{value:"Override style",id:"override-style",level:3},{value:"Override the element",id:"override-the-element",level:3},{value:"Props",id:"props",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},x=c("ComponentLinks"),d=c("PropsTable"),h={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"text"},"Text"),(0,a.kt)("p",null,"Text is the used to render text and paragraphs within an interface."),(0,a.kt)(x,{github:{package:"layout"},npm:{package:"@chakra-ui/layout"},mdxType:"ComponentLinks"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Text } from "@chakra-ui/react";\n')),(0,a.kt)("h2",{id:"changing-the-font-size"},"Changing the font size"),(0,a.kt)("p",null,"To increase the font size of the text, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSize")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Stack spacing={3}>\n  <Text fontSize="6xl">(6xl) In love with React & Next</Text>\n  <Text fontSize="5xl">(5xl) In love with React & Next</Text>\n  <Text fontSize="4xl">(4xl) In love with React & Next</Text>\n  <Text fontSize="3xl">(3xl) In love with React & Next</Text>\n  <Text fontSize="2xl">(2xl) In love with React & Next</Text>\n  <Text fontSize="xl">(xl) In love with React & Next</Text>\n  <Text fontSize="lg">(lg) In love with React & Next</Text>\n  <Text fontSize="md">(md) In love with React & Next</Text>\n  <Text fontSize="sm">(sm) In love with React & Next</Text>\n  <Text fontSize="xs">(xs) In love with React & Next</Text>\n</Stack>\n')),(0,a.kt)("h3",{id:"truncate-text"},"Truncate text"),(0,a.kt)("p",null,"If you'd like to truncate the text after a specific number of lines, pass the\n",(0,a.kt)("inlineCode",{parentName:"p"},"noOfLines")," prop. This will render an ellipsis when the text exceeds the width\nof the viewport or ",(0,a.kt)("inlineCode",{parentName:"p"},"maxWidth")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'// Basic version\n<Text noOfLines={1}>\n  "The quick brown fox jumps over the lazy dog" is an English-language pangram\u2014a\n  sentence that contains all of the letters of the English alphabet. Owing to\n  its existence, Chakra was created.\n</Text>\n\n// Responsive version\n<Text noOfLines={[1, 2, 3]}>\n   "The quick brown fox jumps over the lazy dog" is an English-language pangram\u2014a\n  sentence that contains all of the letters of the English alphabet. Owing to\n  its existence, Chakra was created.\n</Text>\n')),(0,a.kt)("h3",{id:"override-style"},"Override style"),(0,a.kt)("p",null,"You can change the entire style of the text via props. For example, to change\nthe font size, pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"fontSize")," prop. No need to write ",(0,a.kt)("inlineCode",{parentName:"p"},"css")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"styled()"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Text fontSize="50px" color="tomato">\n  I\'m using a custom font-size value for this text\n</Text>\n')),(0,a.kt)("h3",{id:"override-the-element"},"Override the element"),(0,a.kt)("p",null,"To override the element that gets rendered, pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"as")," prop. Use ",(0,a.kt)("strong",{parentName:"p"},"Inspect\nElement")," to see the element that gets rendered in html."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<>\n  <Text as="b">Bold</Text>\n  <br />\n  <Text as="i">Italic</Text>\n  <br />\n  <Text as="u">Underline</Text>\n  <br />\n  <Text as="abbr">I18N</Text>\n  <br />\n  <Text as="cite">Citation</Text>\n  <br />\n  <Text as="del">Deleted</Text>\n  <br />\n  <Text as="em">Emphasis</Text>\n  <br />\n  <Text as="ins">Inserted</Text>\n  <br />\n  <Text as="kbd">Ctrl + C</Text>\n  <br />\n  <Text as="mark">Highlighted</Text>\n  <br />\n  <Text as="s">Strikethrough</Text>\n  <br />\n  <Text as="samp">Sample</Text>\n  <br />\n  <Text as="sub">sub</Text>\n  <br />\n  <Text as="sup">sup</Text>\n</>\n')),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Text")," composes the ",(0,a.kt)("a",{parentName:"p",href:"/docs/components/layout/box"},"Box")," component, so you can\npass all ",(0,a.kt)("inlineCode",{parentName:"p"},"Box")," style props."),(0,a.kt)(d,{of:"Text",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);