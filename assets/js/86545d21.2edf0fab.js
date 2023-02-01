"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[1290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=i.createContext({}),s=function(e){var t=i.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},g=function(e){var t=s(e.components);return i.createElement(h.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,h=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),p=s(n),c=r,d=p["".concat(h,".").concat(c)]||p[c]||u[c]||o;return n?i.createElement(d,a(a({ref:t},g),{},{components:n})):i.createElement(d,a({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=c;var l={};for(var h in t)hasOwnProperty.call(t,h)&&(l[h]=t[h]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const o={},a="Highlight",l={unversionedId:"components/typography/highlight/index",id:"components/typography/highlight/index",title:"Highlight",description:"Highlight allows you to highlight substrings of a text.",source:"@site/content/docs/components/typography/highlight/index.mdx",sourceDirName:"components/typography/highlight",slug:"/components/typography/highlight/",permalink:"/docs/components/typography/highlight/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/docs/components/typography/heading/theming"},next:{title:"Theming",permalink:"/docs/components/typography/highlight/highlight"}},h={},s=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Highlight a word",id:"highlight-a-word",level:3},{value:"Usage with Heading",id:"usage-with-heading",level:3},{value:"Highlight with multiple words",id:"highlight-with-multiple-words",level:3},{value:"Highlight substrings",id:"highlight-substrings",level:3},{value:"Customizing rendered elements",id:"customizing-rendered-elements",level:3},{value:"Props",id:"props",level:2}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=g("ComponentLinks"),u=g("PropsTable"),c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"highlight"},"Highlight"),(0,r.kt)("p",null,"Highlight allows you to highlight substrings of a text."),(0,r.kt)(p,{github:{package:"layout"},npm:{package:"@chakra-ui/layout"},mdxType:"ComponentLinks"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Highlight } from "@chakra-ui/react";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Render the main string as children of the Highlight component, then pass the\nword(s) you want to highlight to the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," prop. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"style")," prop to\ndefine the styles for the highlighted parts."),(0,r.kt)("h3",{id:"highlight-a-word"},"Highlight a word"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Highlight query="spotlight" styles={{ px: "1", py: "1", bg: "orange.100" }}>\n  With the Highlight component, you can spotlight words.\n</Highlight>\n')),(0,r.kt)("h3",{id:"usage-with-heading"},"Usage with Heading"),(0,r.kt)("p",null,"The Highlight component can be used within any of the typography components.\nHere's an example of how to use it within Heading"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Heading lineHeight="tall">\n  <Highlight\n    query="spotlight"\n    styles={{ px: "2", py: "1", rounded: "full", bg: "red.100" }}\n  >\n    With the Highlight component, you can spotlight words.\n  </Highlight>\n</Heading>\n')),(0,r.kt)("h3",{id:"highlight-with-multiple-words"},"Highlight with multiple words"),(0,r.kt)("p",null,"To highlight multiple phrases that have the same style, pass the substrings you\nwant to highlight as an array to the ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," prop"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Heading lineHeight="tall">\n  <Highlight\n    query={["spotlight", "emphasize", "Accentuate"]}\n    styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}\n  >\n    With the Highlight component, you can spotlight, emphasize and accentuate\n    words.\n  </Highlight>\n</Heading>\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The query for the strings is case insensitive. Notice "Accentuate" in the\nquery.')),(0,r.kt)("h3",{id:"highlight-substrings"},"Highlight substrings"),(0,r.kt)("p",null,"The Highlight component allows you to highlight substrings of a word. A good use\ncase for this is in a search query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Box>\n  <Text>Search result for: "spot"</Text>\n  <Text mt="6" fontWeight="bold">\n    <Highlight query="spot" styles={{ py: "1", fontWeight: "normal" }}>\n      Spotlight bulb\n    </Highlight>\n  </Text>\n  <Text fontWeight="bold">\n    <Highlight query="spot" styles={{ py: "1", fontWeight: "normal" }}>\n      Spot cleaner\n    </Highlight>\n  </Text>\n  <Text fontWeight="bold">\n    <Highlight query="spot" styles={{ py: "1", fontWeight: "normal" }}>\n      Spot ceiling\n    </Highlight>\n  </Text>\n</Box>\n')),(0,r.kt)("h3",{id:"customizing-rendered-elements"},"Customizing rendered elements"),(0,r.kt)("p",null,"In cases where you want to customize multiple rendered elements and their\nstyles, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHighlight")," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { useHighlight } from "@chakra-ui/react";\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// prettier-ignore\n() => {\n  const chunks = useHighlight({\n    text: 'With the Highlight component, you can spotlight, emphasize and accentuate words instantly',\n    query: ['spotlight', 'emphasize', 'accentuate', 'instantly']\n  })\n\n  return (\n    <Heading lineHeight=\"tall\">\n      {chunks.map(({ match, text }) => {\n        if (!match) return text\n        return text === 'instantly' ? (\n          <Box as='u' fontFamily='NewYork'>\n            {text}\n          </Box>\n        ) : (\n          <Mark bg='black' color=\"white\"  fontFamily='NewYork' px='2' py='1'>\n            {text}\n          </Mark>\n        )\n      })}\n    </Heading>\n  )\n}\n")),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)(u,{of:"Highlight",omit:null,mdxType:"PropsTable"}))}d.isMDXComponent=!0}}]);