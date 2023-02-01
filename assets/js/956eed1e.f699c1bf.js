"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[2209],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>u});var t=n(67294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=t.createContext({}),b=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=b(e.components);return t.createElement(s.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},c=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=b(n),c=l,u=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return n?t.createElement(u,r(r({ref:a},p),{},{components:n})):t.createElement(u,r({ref:a},p))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[d]="string"==typeof e?e:l,r[1]=o;for(var b=2;b<i;b++)r[b]=n[b];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},23846:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>b});var t=n(87462),l=(n(67294),n(3905));const i={},r="Tabs",o={unversionedId:"components/disclosure/tabs/index",id:"components/disclosure/tabs/index",title:"Tabs",description:"A React component that helps you build accessible tabs, by providing keyboard",source:"@site/content/docs/components/disclosure/tabs/index.mdx",sourceDirName:"components/disclosure/tabs",slug:"/components/disclosure/tabs/",permalink:"/docs/components/disclosure/tabs/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675293453,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/docs/components/disclosure/accordion/theming"},next:{title:"Theming",permalink:"/docs/components/disclosure/tabs/theming"}},s={},b=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Tab variants and color",id:"tab-variants-and-color",level:3},{value:"Tab sizes",id:"tab-sizes",level:3},{value:"Changing the tabs alignment",id:"changing-the-tabs-alignment",level:3},{value:"Fitted Tabs",id:"fitted-tabs",level:3},{value:"Styling the tab states via props",id:"styling-the-tab-states-via-props",level:3},{value:"Tabs onChange",id:"tabs-onchange",level:3},{value:"Make a tab initially active",id:"make-a-tab-initially-active",level:3},{value:"Make a Tab disabled",id:"make-a-tab-disabled",level:3},{value:"Tabs with manual activation",id:"tabs-with-manual-activation",level:3},{value:"Lazily mounting tab panels",id:"lazily-mounting-tab-panels",level:3},{value:"Controlled Tabs",id:"controlled-tabs",level:3},{value:"Creating custom tab components",id:"creating-custom-tab-components",level:3},{value:"DataTabs",id:"datatabs",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Keyboard",id:"keyboard",level:3},{value:"ARIA roles",id:"aria-roles",level:3},{value:"Props",id:"props",level:2},{value:"Tabs Props",id:"tabs-props",level:3},{value:"Tab Props",id:"tab-props",level:3}],p=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",a)},d=p("ComponentLinks"),m=p("PropsTable"),c={toc:b};function u(e){let{components:a,...n}=e;return(0,l.kt)("wrapper",(0,t.Z)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tabs"},"Tabs"),(0,l.kt)("p",null,"A React component that helps you build accessible tabs, by providing keyboard\ninteractions and ARIA attributes described in the WAI-ARIA Tab Panel Design\nPattern."),(0,l.kt)(d,{github:{package:"tabs"},npm:{package:"@chakra-ui/tabs"},theme:{componentName:"tabs"},mdxType:"ComponentLinks"}),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tabs"),": Provides context and state for all components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TabList"),": Wrapper for the ",(0,l.kt)("inlineCode",{parentName:"li"},"Tab")," components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Tab"),": element that serves as a label for one of the tab panels and can be\nactivated to display that panel."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TabPanels"),": Wrapper for the ",(0,l.kt)("inlineCode",{parentName:"li"},"TabPanel")," components"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"TabPanel"),": element that contains the content associated with a tab")),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"You can render any element within ",(0,l.kt)("inlineCode",{parentName:"p"},"Tabs"),", but ",(0,l.kt)("inlineCode",{parentName:"p"},"TabList")," should only have ",(0,l.kt)("inlineCode",{parentName:"p"},"Tab"),"\nas children, and ",(0,l.kt)("inlineCode",{parentName:"p"},"TabPanels")," should have ",(0,l.kt)("inlineCode",{parentName:"p"},"TabPanel")," as children."),(0,l.kt)("p",null,"Tabs expects ",(0,l.kt)("inlineCode",{parentName:"p"},"TabList")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"TabPanels")," as children. The order doesn't matter,\nyou can have ",(0,l.kt)("inlineCode",{parentName:"p"},"TabList")," at the top, at the bottom, or both."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs>\n  <TabList>\n    <Tab>One</Tab>\n    <Tab>Two</Tab>\n    <Tab>Three</Tab>\n  </TabList>\n\n  <TabPanels>\n    <TabPanel>\n      <p>one!</p>\n    </TabPanel>\n    <TabPanel>\n      <p>two!</p>\n    </TabPanel>\n    <TabPanel>\n      <p>three!</p>\n    </TabPanel>\n  </TabPanels>\n</Tabs>\n")),(0,l.kt)("h3",{id:"tab-variants-and-color"},"Tab variants and color"),(0,l.kt)("p",null,"Tabs come in 6 different variants to style the tabs: ",(0,l.kt)("inlineCode",{parentName:"p"},"line"),",",(0,l.kt)("inlineCode",{parentName:"p"},"enclosed"),",\n",(0,l.kt)("inlineCode",{parentName:"p"},"enclosed-colored"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"soft-rounded"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"solid-rounded")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs variant='enclosed'>\n  <TabList>\n    <Tab>One</Tab>\n    <Tab>Two</Tab>\n  </TabList>\n  <TabPanels>\n    <TabPanel>\n      <p>one!</p>\n    </TabPanel>\n    <TabPanel>\n      <p>two!</p>\n    </TabPanel>\n  </TabPanels>\n</Tabs>\n")),(0,l.kt)("p",null,"You can also change the color scheme for any specific variant by passing the\n",(0,l.kt)("inlineCode",{parentName:"p"},"colorScheme"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The value of ",(0,l.kt)("inlineCode",{parentName:"p"},"colorScheme")," must exist in the theme object, and must be a key\nin ",(0,l.kt)("inlineCode",{parentName:"p"},"theme.colors")," that has the ",(0,l.kt)("inlineCode",{parentName:"p"},"50")," - ",(0,l.kt)("inlineCode",{parentName:"p"},"900")," color values.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs variant='soft-rounded' colorScheme='green'>\n  <TabList>\n    <Tab>Tab 1</Tab>\n    <Tab>Tab 2</Tab>\n  </TabList>\n  <TabPanels>\n    <TabPanel>\n      <p>one!</p>\n    </TabPanel>\n    <TabPanel>\n      <p>two!</p>\n    </TabPanel>\n  </TabPanels>\n</Tabs>\n")),(0,l.kt)("h3",{id:"tab-sizes"},"Tab sizes"),(0,l.kt)("p",null,"You can change the size of the tab by passing ",(0,l.kt)("inlineCode",{parentName:"p"},"size")," prop. We support 3 sizes\n",(0,l.kt)("inlineCode",{parentName:"p"},"sm"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"md"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"lg")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs size='md' variant='enclosed'>\n  <TabList>\n    <Tab>One</Tab>\n    <Tab>Two</Tab>\n  </TabList>\n  <TabPanels>\n    <TabPanel>\n      <p>one!</p>\n    </TabPanel>\n    <TabPanel>\n      <p>two!</p>\n    </TabPanel>\n  </TabPanels>\n</Tabs>\n")),(0,l.kt)("h3",{id:"changing-the-tabs-alignment"},"Changing the tabs alignment"),(0,l.kt)("p",null,"You can change the alignment of the ",(0,l.kt)("inlineCode",{parentName:"p"},"TabList")," by passing ",(0,l.kt)("inlineCode",{parentName:"p"},"align")," prop. We\nsupport 3 sizes ",(0,l.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"center"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"end"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs align='end' variant='enclosed'>\n  <TabList>\n    <Tab>One</Tab>\n    <Tab>Two</Tab>\n  </TabList>\n  <TabPanels>\n    <TabPanel>\n      <p>one!</p>\n    </TabPanel>\n    <TabPanel>\n      <p>two!</p>\n    </TabPanel>\n  </TabPanels>\n</Tabs>\n")),(0,l.kt)("h3",{id:"fitted-tabs"},"Fitted Tabs"),(0,l.kt)("p",null,"Stretch the tab list to fit the container by passing ",(0,l.kt)("inlineCode",{parentName:"p"},"isFitted")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs isFitted variant='enclosed'>\n  <TabList mb='1em'>\n    <Tab>One</Tab>\n    <Tab>Two</Tab>\n  </TabList>\n  <TabPanels>\n    <TabPanel>\n      <p>one!</p>\n    </TabPanel>\n    <TabPanel>\n      <p>two!</p>\n    </TabPanel>\n  </TabPanels>\n</Tabs>\n")),(0,l.kt)("h3",{id:"styling-the-tab-states-via-props"},"Styling the tab states via props"),(0,l.kt)("p",null,"In event you need to create custom styles for the tabs. Simply set the variant\nto ",(0,l.kt)("inlineCode",{parentName:"p"},"unstyled"),", and use the ",(0,l.kt)("inlineCode",{parentName:"p"},"_selected"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"_hover"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"_active")," style props."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs variant='unstyled'>\n  <TabList>\n    <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Tab 1</Tab>\n    <Tab _selected={{ color: 'white', bg: 'green.400' }}>Tab 2</Tab>\n  </TabList>\n  <TabPanels>\n    <TabPanel>\n      <p>one!</p>\n    </TabPanel>\n    <TabPanel>\n      <p>two!</p>\n    </TabPanel>\n  </TabPanels>\n</Tabs>\n")),(0,l.kt)("h3",{id:"tabs-onchange"},"Tabs onChange"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"onChange")," callback returns the active tab's index whenever the user changes\ntabs. If you intend to control the tabs programmatically, use this with the\n",(0,l.kt)("inlineCode",{parentName:"p"},"index")," prop."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const colors = useColorModeValue(\n    ['red.50', 'teal.50', 'blue.50'],\n    ['red.900', 'teal.900', 'blue.900']\n  );\n  const [tabIndex, setTabIndex] = useState(0);\n  const bg = colors[tabIndex];\n  return (\n    <Tabs onChange={(index) => setTabIndex(index)} bg={bg}>\n      <TabList>\n        <Tab>Red</Tab>\n        <Tab>Teal</Tab>\n        <Tab>Blue</Tab>\n      </TabList>\n      <TabPanels p='2rem'>\n        <TabPanel>The Primary Colors</TabPanel>\n        <TabPanel>Are 1, 2, 3</TabPanel>\n        <TabPanel>Red, yellow and blue.</TabPanel>\n      </TabPanels>\n    </Tabs>\n  );\n}\n")),(0,l.kt)("h3",{id:"make-a-tab-initially-active"},"Make a tab initially active"),(0,l.kt)("p",null,"If you want a tab to be initially active, simply pass the ",(0,l.kt)("inlineCode",{parentName:"p"},"defaultIndex")," prop\nand set it to the index of that tab."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs defaultIndex={1}>\n  <TabPanels>\n    <TabPanel>\n      <Image\n        boxSize='200px'\n        fit='cover'\n        src='https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png'\n      />\n    </TabPanel>\n    <TabPanel>\n      <Image\n        boxSize='200px'\n        fit='cover'\n        src='https://images5.alphacoders.com/810/thumbbig-810547.webp'\n      />\n    </TabPanel>\n  </TabPanels>\n  <TabList>\n    <Tab>Naruto</Tab>\n    <Tab>Sasuke</Tab>\n  </TabList>\n</Tabs>\n")),(0,l.kt)("h3",{id:"make-a-tab-disabled"},"Make a Tab disabled"),(0,l.kt)("p",null,"When a ",(0,l.kt)("inlineCode",{parentName:"p"},"Tab")," is disabled, it is skipped during keyboard navigation and it is not\nclickable."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  return (\n    <Tabs>\n      <TabList>\n        <Tab>One</Tab>\n        <Tab isDisabled>Two</Tab>\n        <Tab>Three</Tab>\n      </TabList>\n      <TabPanels>\n        <TabPanel>1</TabPanel>\n        <TabPanel>2</TabPanel>\n        <TabPanel>3</TabPanel>\n      </TabPanels>\n    </Tabs>\n  );\n}\n")),(0,l.kt)("h3",{id:"tabs-with-manual-activation"},"Tabs with manual activation"),(0,l.kt)("p",null,"By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"Tabs")," are activated automatically. This means when you use the\narrow keys to change tabs, the tab is activated and focused."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The content of a ",(0,l.kt)("inlineCode",{parentName:"p"},"TabPanel")," should ideally be preloaded. However, if switching\nto a tab panel causes a network request and possibly a page refresh, there\nmight be some noticeable latency and this might affect the experience for\nkeyboard and screen reader users.")),(0,l.kt)("p",null,"In this scenario, you should use a manually activated tab, it moves focus\nwithout activating the tabs. With focus on a specific tab, users can activate a\ntab by pressing ",(0,l.kt)("kbd",null,"Space")," or ",(0,l.kt)("kbd",null,"Enter"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs isManual variant='enclosed'>\n  <TabList>\n    <Tab>One</Tab>\n    <Tab>Two</Tab>\n  </TabList>\n  <TabPanels>\n    <TabPanel>\n      <p>one!</p>\n    </TabPanel>\n    <TabPanel>\n      <p>two!</p>\n    </TabPanel>\n  </TabPanels>\n</Tabs>\n")),(0,l.kt)("h3",{id:"lazily-mounting-tab-panels"},"Lazily mounting tab panels"),(0,l.kt)("p",null,"By default, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Tabs")," component renders all tabs content to the DOM, meaning\nthat invisible tabs are still rendered but are hidden by styles."),(0,l.kt)("p",null,"If you want to defer rendering of each tab until that tab is selected, you can\nuse the ",(0,l.kt)("inlineCode",{parentName:"p"},"isLazy")," prop. This is useful if your tabs require heavy performance, or\nmake network calls on mount that should only happen when the component is\ndisplayed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Tabs isLazy>\n  <TabList>\n    <Tab>One</Tab>\n    <Tab>Two</Tab>\n  </TabList>\n  <TabPanels>\n    {/* initially mounted */}\n    <TabPanel>\n      <p>one!</p>\n    </TabPanel>\n    {/* initially not mounted */}\n    <TabPanel>\n      <p>two!</p>\n    </TabPanel>\n  </TabPanels>\n</Tabs>\n")),(0,l.kt)("h3",{id:"controlled-tabs"},"Controlled Tabs"),(0,l.kt)("p",null,"Like form inputs, a tab's state can be controlled. Make sure to include an\nonChange as well, or else the tabs will not be interactive."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function ControlledExample() {\n  const [tabIndex, setTabIndex] = useState(0);\n\n  const handleSliderChange = (event) => {\n    setTabIndex(parseInt(event.target.value, 10));\n  };\n\n  const handleTabsChange = (index) => {\n    setTabIndex(index);\n  };\n\n  return (\n    <Box>\n      <input\n        type='range'\n        min='0'\n        max='2'\n        value={tabIndex}\n        onChange={handleSliderChange}\n      />\n\n      <Tabs index={tabIndex} onChange={handleTabsChange}>\n        <TabList>\n          <Tab>One</Tab>\n          <Tab>Two</Tab>\n          <Tab>Three</Tab>\n        </TabList>\n        <TabPanels>\n          <TabPanel>\n            <p>Click the tabs or pull the slider around</p>\n          </TabPanel>\n          <TabPanel>\n            <p>Yeah yeah. What's up?</p>\n          </TabPanel>\n          <TabPanel>\n            <p>Oh, hello there.</p>\n          </TabPanel>\n        </TabPanels>\n      </Tabs>\n    </Box>\n  );\n}\n")),(0,l.kt)("h3",{id:"creating-custom-tab-components"},"Creating custom tab components"),(0,l.kt)("p",null,"Because ",(0,l.kt)("inlineCode",{parentName:"p"},"TabList")," needs to know the order of the children, we use ",(0,l.kt)("inlineCode",{parentName:"p"},"cloneElement"),"\nto pass state internally. Your custom ",(0,l.kt)("inlineCode",{parentName:"p"},"Tab")," component must use\n",(0,l.kt)("inlineCode",{parentName:"p"},"React.forwardRef"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function CustomTabs() {\n  const CustomTab = React.forwardRef((props, ref) => {\n    // 1. Reuse the `useTab` hook\n    const tabProps = useTab({ ...props, ref });\n    const isSelected = !!tabProps['aria-selected'];\n\n    // 2. Hook into the Tabs `size`, `variant`, props\n    const styles = useMultiStyleConfig('Tabs', tabProps);\n\n    return (\n      <Button __css={styles.tab} {...tabProps}>\n        <Box as='span' mr='2'>\n          {isSelected ? '\ud83d\ude0e' : '\ud83d\ude10'}\n        </Box>\n        {tabProps.children}\n      </Button>\n    );\n  });\n\n  return (\n    <Tabs>\n      <TabList>\n        <CustomTab>One</CustomTab>\n        <CustomTab>Two</CustomTab>\n      </TabList>\n      <TabPanels>\n        <TabPanel>1</TabPanel>\n        <TabPanel>2</TabPanel>\n      </TabPanels>\n    </Tabs>\n  );\n}\n")),(0,l.kt)("h3",{id:"datatabs"},"DataTabs"),(0,l.kt)("p",null,"If you'd like to drive your tabs with an array instead of using the granular\ncomponents, you can create your own DataTabs component."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  // 1. Create the component\n  function DataTabs({ data }) {\n    return (\n      <Tabs>\n        <TabList>\n          {data.map((tab, index) => (\n            <Tab key={index}>{tab.label}</Tab>\n          ))}\n        </TabList>\n        <TabPanels>\n          {data.map((tab, index) => (\n            <TabPanel p={4} key={index}>\n              {tab.content}\n            </TabPanel>\n          ))}\n        </TabPanels>\n      </Tabs>\n    );\n  }\n\n  // 2. Create an array of data\n  const tabData = [\n    {\n      label: 'Nigerian Jollof',\n      content: 'Perhaps the greatest dish ever invented.',\n    },\n    {\n      label: 'Pounded Yam & Egusi',\n      content:\n        'Perhaps the surest dish ever invented but fills the stomach more than rice.',\n    },\n  ];\n\n  // 3. Pass the props and chill!\n  return <DataTabs data={tabData} />;\n}\n")),(0,l.kt)("h2",{id:"accessibility"},"Accessibility"),(0,l.kt)("h3",{id:"keyboard"},"Keyboard"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Action"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ArrowLeft")),(0,l.kt)("td",{parentName:"tr",align:null},"Moves focus to the next tab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ArrowRight")),(0,l.kt)("td",{parentName:"tr",align:null},"Moves focus to the previous tab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Tab")),(0,l.kt)("td",{parentName:"tr",align:null},"When focus moves into the tab list, places focus on the active tab element")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Space")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"Enter")),(0,l.kt)("td",{parentName:"tr",align:null},"Activates the tab if it was not activated automatically on focus")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Home")),(0,l.kt)("td",{parentName:"tr",align:null},"Moves focus to the first tab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"End")),(0,l.kt)("td",{parentName:"tr",align:null},"Moves focus to the last tab")))),(0,l.kt)("h3",{id:"aria-roles"},"ARIA roles"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Aria"),(0,l.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tab"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'role="tab"')),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates that it is a tab")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria-selected")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," a tab is selected and all other Tabs have it set to ",(0,l.kt)("inlineCode",{parentName:"td"},"false"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria-controls")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to the ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," of its associated ",(0,l.kt)("inlineCode",{parentName:"td"},"TabPanel"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TabList"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," of the ",(0,l.kt)("inlineCode",{parentName:"td"},"TabPanel")," that's referenced by its associated ",(0,l.kt)("inlineCode",{parentName:"td"},"Tab"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria-orientation")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to vertical or horizontal based on the value of the ",(0,l.kt)("inlineCode",{parentName:"td"},"orientation")," prop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'role="tablist"')),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates that it is a tablist")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TabPanel"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'role="tabpanel"')),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates that it is a tabpanel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"aria-labelledby")),(0,l.kt)("td",{parentName:"tr",align:null},"Set to the ",(0,l.kt)("inlineCode",{parentName:"td"},"id")," of the ",(0,l.kt)("inlineCode",{parentName:"td"},"Tab")," that labels the ",(0,l.kt)("inlineCode",{parentName:"td"},"TabPanel"))))),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("h3",{id:"tabs-props"},"Tabs Props"),(0,l.kt)("p",null,"Tabs composes ",(0,l.kt)("inlineCode",{parentName:"p"},"Box")," so you call pass all ",(0,l.kt)("inlineCode",{parentName:"p"},"Box")," related props."),(0,l.kt)(m,{of:"Tabs",omit:["layerStyle","noOfLines","textStyle","styleConfig"],mdxType:"PropsTable"}),(0,l.kt)("h3",{id:"tab-props"},"Tab Props"),(0,l.kt)(m,{of:"Tab",mdxType:"PropsTable"}))}u.isMDXComponent=!0}}]);