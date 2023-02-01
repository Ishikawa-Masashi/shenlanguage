"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[3730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(b,i(i({ref:t},c),{},{components:n})):o.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const a={},i="Box",l={unversionedId:"components/layout/box/index",id:"components/layout/box/index",title:"Box",description:"Box is the most abstract component on top of which all other Chakra UI",source:"@site/content/docs/components/layout/box/index.mdx",sourceDirName:"components/layout/box",slug:"/components/layout/box/",permalink:"/docs/components/layout/box/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Aspect Ratio",permalink:"/docs/components/layout/aspect-ratio/"},next:{title:"Center",permalink:"/docs/components/layout/center/"}},p={},s=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Airbnb example",id:"airbnb-example",level:3},{value:"as prop",id:"as-prop",level:3}],c=(m="ComponentLinks",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"box"},"Box"),(0,r.kt)("p",null,"Box is the most abstract component on top of which all other Chakra UI\ncomponents are built. By default, it renders a ",(0,r.kt)("inlineCode",{parentName:"p"},"div")," element"),(0,r.kt)(c,{github:{package:"layout"},npm:{package:"@chakra-ui/layout"},mdxType:"ComponentLinks"}),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import { Box } from "@chakra-ui/react";\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The Box component is useful because it helps with three common use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create responsive layouts with ease."),(0,r.kt)("li",{parentName:"ul"},"Provide a shorthand way to pass styles via props (",(0,r.kt)("inlineCode",{parentName:"li"},"bg")," instead of\n",(0,r.kt)("inlineCode",{parentName:"li"},"backgroundColor"),")."),(0,r.kt)("li",{parentName:"ul"},"Compose new component and allow for override using the ",(0,r.kt)("inlineCode",{parentName:"li"},"as")," prop.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'<Box bg="tomato" w="100%" p={4} color="white">\n  This is the Box\n</Box>\n')),(0,r.kt)("h3",{id:"airbnb-example"},"Airbnb example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live lg",live:!0,lg:!0},'function AirbnbCard() {\n  const property = {\n    imageUrl: "https://bit.ly/2Z4KKcF",\n    imageAlt: "Rear view of modern home with pool",\n    beds: 3,\n    baths: 2,\n    title: "Modern home in city center in the heart of historic Los Angeles",\n    formattedPrice: "$1,900.00",\n    reviewCount: 34,\n    rating: 4,\n  };\n\n  return (\n    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">\n      <Image src={property.imageUrl} alt={property.imageAlt} />\n\n      <Box p="6">\n        <Box display="flex" alignItems="baseline">\n          <Badge borderRadius="full" px="2" colorScheme="teal">\n            New\n          </Badge>\n          <Box\n            color="gray.500"\n            fontWeight="semibold"\n            letterSpacing="wide"\n            fontSize="xs"\n            textTransform="uppercase"\n            ml="2"\n          >\n            {property.beds} beds &bull; {property.baths} baths\n          </Box>\n        </Box>\n\n        <Box\n          mt="1"\n          fontWeight="semibold"\n          as="h4"\n          lineHeight="tight"\n          noOfLines={1}\n        >\n          {property.title}\n        </Box>\n\n        <Box>\n          {property.formattedPrice}\n          <Box as="span" color="gray.600" fontSize="sm">\n            / wk\n          </Box>\n        </Box>\n\n        <Box display="flex" mt="2" alignItems="center">\n          {Array(5)\n            .fill("")\n            .map((_, i) => (\n              <StarIcon\n                key={i}\n                color={i < property.rating ? "teal.500" : "gray.300"}\n              />\n            ))}\n          <Box as="span" ml="2" color="gray.600" fontSize="sm">\n            {property.reviewCount} reviews\n          </Box>\n        </Box>\n      </Box>\n    </Box>\n  );\n}\n')),(0,r.kt)("h3",{id:"as-prop"},"as prop"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"as")," prop to change the element render, just like\nstyled-components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live sm",live:!0,sm:!0},'<Box as="button" borderRadius="md" bg="tomato" color="white" px={4} h={8}>\n  Button\n</Box>\n')))}d.isMDXComponent=!0}}]);