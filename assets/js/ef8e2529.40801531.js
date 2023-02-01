"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[9032],{3905:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>A});var t=o(67294);function i(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){i(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,t,i=function(e,n){if(null==e)return{};var o,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(i[o]=e[o]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=t.createContext({}),d=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},s=function(e){var n=d(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(o),u=i,A=p["".concat(l,".").concat(u)]||p[u]||m[u]||a;return o?t.createElement(A,r(r({ref:n},s),{},{components:o})):t.createElement(A,r({ref:n},s))}));function A(e,n){var o=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[p]="string"==typeof e?e:i,r[1]=c;for(var d=2;d<a;d++)r[d]=o[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},82866:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>A,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var t=o(87462),i=(o(67294),o(3905));const a={title:"Accordion",category:"disclosure",package:"@chakra-ui/accordion",description:"Accordions display a list of high-level options that can expand/collapse to reveal more information."},r=void 0,c={unversionedId:"components/disclosure/accordion/index",id:"components/disclosure/accordion/index",title:"Accordion",description:"Accordions display a list of high-level options that can expand/collapse to reveal more information.",source:"@site/content/docs/components/disclosure/accordion/index.mdx",sourceDirName:"components/disclosure/accordion",slug:"/components/disclosure/accordion/",permalink:"/docs/components/disclosure/accordion/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{title:"Accordion",category:"disclosure",package:"@chakra-ui/accordion",description:"Accordions display a list of high-level options that can expand/collapse to reveal more information."},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/docs/components/data-display/tag/theming"},next:{title:"Theming",permalink:"/docs/components/disclosure/accordion/theming"}},l={},d=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Expand multiple items at once",id:"expand-multiple-items-at-once",level:3},{value:"Toggle each accordion item",id:"toggle-each-accordion-item",level:3},{value:"Styling the expanded state",id:"styling-the-expanded-state",level:3},{value:"Accessing the internal state",id:"accessing-the-internal-state",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Props",id:"props",level:2},{value:"Accordion Props",id:"accordion-props",level:3},{value:"AccordionItem Props",id:"accordionitem-props",level:3},{value:"AccordionButton Props",id:"accordionbutton-props",level:3},{value:"AccordionPanel Props",id:"accordionpanel-props",level:3}],s=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},p=s("ComponentLinks"),m=s("PropsTable"),u={toc:d};function A(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Accordions display a list of high-level options that can expand/collapse to\nreveal more information."),(0,i.kt)(p,{github:{package:"accordion"},npm:{package:"@chakra-ui/accordion"},theme:{componentName:"accordion"},mdxType:"ComponentLinks"}),(0,i.kt)("h2",{id:"import"},"Import"),(0,i.kt)("p",null,"Chakra UI exports 5 accordion-related components."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Accordion"),": The wrapper that uses cloneElement to pass props to\n",(0,i.kt)("inlineCode",{parentName:"li"},"AccordionItem")," children."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AccordionItem"),": A single accordion item."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AccordionButton"),": The button that toggles the expand/collapse state of the\naccordion item. This button must be wrapped in an element with role ",(0,i.kt)("inlineCode",{parentName:"li"},"heading"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AccordionPanel"),": The container for the details to be revealed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AccordionIcon"),": A ",(0,i.kt)("inlineCode",{parentName:"li"},"chevron-down")," icon that rotates based on the\nexpanded/collapsed state")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  Accordion,\n  AccordionItem,\n  AccordionButton,\n  AccordionPanel,\n  AccordionIcon,\n} from '@chakra-ui/react';\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"By default, only one item may be expanded and it can only be collapsed again by\nexpanding another."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Accordion")," now supports keyboard navigation between accordion buttons. Pressing\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"down")," arrow keys will move focus between accordion buttons."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion>\n  <AccordionItem>\n    <h2>\n      <AccordionButton>\n        <Box flex='1' textAlign='left'>\n          Section 1 title\n        </Box>\n        <AccordionIcon />\n      </AccordionButton>\n    </h2>\n    <AccordionPanel pb={4}>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.\n    </AccordionPanel>\n  </AccordionItem>\n\n  <AccordionItem>\n    <h2>\n      <AccordionButton>\n        <Box flex='1' textAlign='left'>\n          Section 2 title\n        </Box>\n        <AccordionIcon />\n      </AccordionButton>\n    </h2>\n    <AccordionPanel pb={4}>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.\n    </AccordionPanel>\n  </AccordionItem>\n</Accordion>\n")),(0,i.kt)("h3",{id:"expand-multiple-items-at-once"},"Expand multiple items at once"),(0,i.kt)("p",null,"If you set ",(0,i.kt)("inlineCode",{parentName:"p"},"allowMultiple")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," then the accordion will permit multiple\nitems to be expanded at once."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you pass this prop, ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"index")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultIndex")," prop is an\narray.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion defaultIndex={[0]} allowMultiple>\n  <AccordionItem>\n    <h2>\n      <AccordionButton>\n        <Box flex='1' textAlign='left'>\n          Section 1 title\n        </Box>\n        <AccordionIcon />\n      </AccordionButton>\n    </h2>\n    <AccordionPanel pb={4}>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.\n    </AccordionPanel>\n  </AccordionItem>\n\n  <AccordionItem>\n    <h2>\n      <AccordionButton>\n        <Box flex='1' textAlign='left'>\n          Section 2 title\n        </Box>\n        <AccordionIcon />\n      </AccordionButton>\n    </h2>\n    <AccordionPanel pb={4}>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.\n    </AccordionPanel>\n  </AccordionItem>\n</Accordion>\n")),(0,i.kt)("h3",{id:"toggle-each-accordion-item"},"Toggle each accordion item"),(0,i.kt)("p",null,"If you set ",(0,i.kt)("inlineCode",{parentName:"p"},"allowToggle")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", any expanded item may be collapsed again."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion allowToggle>\n  <AccordionItem>\n    <h2>\n      <AccordionButton>\n        <Box flex='1' textAlign='left'>\n          Section 1 title\n        </Box>\n        <AccordionIcon />\n      </AccordionButton>\n    </h2>\n    <AccordionPanel pb={4}>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.\n    </AccordionPanel>\n  </AccordionItem>\n\n  <AccordionItem>\n    <h2>\n      <AccordionButton>\n        <Box flex='1' textAlign='left'>\n          Section 2 title\n        </Box>\n        <AccordionIcon />\n      </AccordionButton>\n    </h2>\n    <AccordionPanel pb={4}>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.\n    </AccordionPanel>\n  </AccordionItem>\n</Accordion>\n")),(0,i.kt)("h3",{id:"styling-the-expanded-state"},"Styling the expanded state"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"AccordionButton")," component has ",(0,i.kt)("inlineCode",{parentName:"p"},"aria-expanded")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\ndepending on the state of the ",(0,i.kt)("inlineCode",{parentName:"p"},"AccordionItem"),". Use the style prop ",(0,i.kt)("inlineCode",{parentName:"p"},"_expanded")," to\nstyle this state."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion>\n  <AccordionItem>\n    <h2>\n      <AccordionButton _expanded={{ bg: 'tomato', color: 'white' }}>\n        <Box flex='1' textAlign='left'>\n          Click me to see a different style\n        </Box>\n        <AccordionIcon />\n      </AccordionButton>\n    </h2>\n    <AccordionPanel>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.\n    </AccordionPanel>\n  </AccordionItem>\n</Accordion>\n")),(0,i.kt)("h3",{id:"accessing-the-internal-state"},"Accessing the internal state"),(0,i.kt)("p",null,"If you need access to the internal state of each accordion item, you can use a\nrender prop. It provides 2 internal state props: ",(0,i.kt)("inlineCode",{parentName:"p"},"isExpanded")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isDisabled"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Accordion allowMultiple>\n  <AccordionItem>\n    <h2>\n      <AccordionButton>\n        <Box flex='1' textAlign='left'>\n          Section 1 title\n        </Box>\n        <AccordionIcon />\n      </AccordionButton>\n    </h2>\n    <AccordionPanel pb={4}>\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat.\n    </AccordionPanel>\n  </AccordionItem>\n\n  <AccordionItem>\n    {({ isExpanded }) => (\n      <>\n        <h2>\n          <AccordionButton>\n            <Box flex='1' textAlign='left'>\n              Section 2 title\n            </Box>\n            {isExpanded ? (\n              <MinusIcon fontSize='12px' />\n            ) : (\n              <AddIcon fontSize='12px' />\n            )}\n          </AccordionButton>\n        </h2>\n        <AccordionPanel pb={4}>\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad\n          minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n          aliquip ex ea commodo consequat.\n        </AccordionPanel>\n      </>\n    )}\n  </AccordionItem>\n</Accordion>\n")),(0,i.kt)("h2",{id:"accessibility"},"Accessibility"),(0,i.kt)("p",null,"Pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"space")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"enter")," when focus is on the accordion panel header will\ntoggle (expand or collapse) the accordion."),(0,i.kt)("h2",{id:"props"},"Props"),(0,i.kt)("h3",{id:"accordion-props"},"Accordion Props"),(0,i.kt)(m,{of:"Accordion",mdxType:"PropsTable"}),(0,i.kt)("h3",{id:"accordionitem-props"},"AccordionItem Props"),(0,i.kt)(m,{of:"AccordionItem",mdxType:"PropsTable"}),(0,i.kt)("h3",{id:"accordionbutton-props"},"AccordionButton Props"),(0,i.kt)("p",null,"AccordionButton renders a ",(0,i.kt)("inlineCode",{parentName:"p"},"button")," and composes ",(0,i.kt)("inlineCode",{parentName:"p"},"Box"),", this means you can style\nit by passing the pseudo style props ",(0,i.kt)("inlineCode",{parentName:"p"},"_expanded"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_disabled"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"_hover"),", etc."),(0,i.kt)("h3",{id:"accordionpanel-props"},"AccordionPanel Props"),(0,i.kt)("p",null,"AccordionPanel renders a ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," and composes ",(0,i.kt)("inlineCode",{parentName:"p"},"Collapse")," to provide the height\nanimation."))}A.isMDXComponent=!0}}]);