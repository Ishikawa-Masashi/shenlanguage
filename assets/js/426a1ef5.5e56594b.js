"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[8735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70684:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l="Alert",i={unversionedId:"components/feedback/alert/index",id:"components/feedback/alert/index",title:"Alert",description:"Alert is used to communicate a state that affects a system, feature or page.",source:"@site/content/docs/components/feedback/alert/index.mdx",sourceDirName:"components/feedback/alert",slug:"/components/feedback/alert/",permalink:"/docs/components/feedback/alert/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Visually Hidden",permalink:"/docs/components/disclosure/visually-hidden/"},next:{title:"Theming",permalink:"/docs/components/feedback/alert/theming"}},s={},p=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Status",id:"status",level:3},{value:"Variant",id:"variant",level:3},{value:"Composition",id:"composition",level:3},{value:"Props",id:"props",level:2},{value:"Alert Props",id:"alert-props",level:3},{value:"AlertIcon Props",id:"alerticon-props",level:3},{value:"AlertTitle Props",id:"alerttitle-props",level:3},{value:"AlertDescription Props",id:"alertdescription-props",level:3}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=c("ComponentLinks"),d=c("PropsTable"),m={toc:p};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"alert"},"Alert"),(0,a.kt)("p",null,"Alert is used to communicate a state that affects a system, feature or page."),(0,a.kt)(u,{github:{package:"alert"},npm:{package:"@chakra-ui/alert"},theme:{componentName:"alert"},mdxType:"ComponentLinks"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("p",null,"Chakra UI exports 4 alert related components."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alert"),": The wrapper for alert components."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AlertIcon"),": The visual icon for the alert that changes based on the ",(0,a.kt)("inlineCode",{parentName:"li"},"status"),"\nprop."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AlertTitle"),": The title of the alert to be announced by screen readers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AlertDescription"),": The description of the alert to be announced by screen\nreaders.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  Alert,\n  AlertIcon,\n  AlertTitle,\n  AlertDescription,\n} from '@chakra-ui/react';\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Alert status='error'>\n  <AlertIcon />\n  <AlertTitle>Your browser is outdated!</AlertTitle>\n  <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>\n</Alert>\n")),(0,a.kt)("h3",{id:"status"},"Status"),(0,a.kt)("p",null,"Change the status of the alerts by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," prop. This affects the\ncolor scheme and icon used. Alert supports ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"success"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"warning"),", and\n",(0,a.kt)("inlineCode",{parentName:"p"},"info")," statuses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Stack spacing={3}>\n  <Alert status='error'>\n    <AlertIcon />\n    There was an error processing your request\n  </Alert>\n\n  <Alert status='success'>\n    <AlertIcon />\n    Data uploaded to the server. Fire on!\n  </Alert>\n\n  <Alert status='warning'>\n    <AlertIcon />\n    Seems your account is about expire, upgrade now\n  </Alert>\n\n  <Alert status='info'>\n    <AlertIcon />\n    Chakra is going live on August 30th. Get ready!\n  </Alert>\n</Stack>\n")),(0,a.kt)("h3",{id:"variant"},"Variant"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Alert")," has 4 variant styles you can use. Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"variant")," prop and use either\n",(0,a.kt)("inlineCode",{parentName:"p"},"subtle"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"solid"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"left-accent")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"top-accent"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Stack spacing={3}>\n  <Alert status='success' variant='subtle'>\n    <AlertIcon />\n    Data uploaded to the server. Fire on!\n  </Alert>\n\n  <Alert status='success' variant='solid'>\n    <AlertIcon />\n    Data uploaded to the server. Fire on!\n  </Alert>\n\n  <Alert status='success' variant='left-accent'>\n    <AlertIcon />\n    Data uploaded to the server. Fire on!\n  </Alert>\n\n  <Alert status='success' variant='top-accent'>\n    <AlertIcon />\n    Data uploaded to the server. Fire on!\n  </Alert>\n</Stack>\n")),(0,a.kt)("h3",{id:"composition"},"Composition"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Alert")," ships with smaller components to allow for flexibility in creating all\nkinds of layouts. Here's an example of a custom alert style and layout:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Alert\n  status='success'\n  variant='subtle'\n  flexDirection='column'\n  alignItems='center'\n  justifyContent='center'\n  textAlign='center'\n  height='200px'\n>\n  <AlertIcon boxSize='40px' mr={0} />\n  <AlertTitle mt={4} mb={1} fontSize='lg'>\n    Application submitted!\n  </AlertTitle>\n  <AlertDescription maxWidth='sm'>\n    Thanks for submitting your application. Our team will get back to you soon.\n  </AlertDescription>\n</Alert>\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Alert")," can also incorporate other Chakra components. Here's an example of an\nalert with wrapping description text and the ",(0,a.kt)("inlineCode",{parentName:"p"},"CloseButton")," component with simple\nclose functionality:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function CompExample() {\n  const {\n    isOpen: isVisible,\n    onClose,\n    onOpen,\n  } = useDisclosure({ defaultIsOpen: true });\n\n  return isVisible ? (\n    <Alert status='success'>\n      <AlertIcon />\n      <Box>\n        <AlertTitle>Success!</AlertTitle>\n        <AlertDescription>\n          Your application has been received. We will review your application\n          and respond within the next 48 hours.\n        </AlertDescription>\n      </Box>\n      <CloseButton\n        alignSelf='flex-start'\n        position='relative'\n        right={-1}\n        top={-1}\n        onClick={onClose}\n      />\n    </Alert>\n  ) : (\n    <Button onClick={onOpen}>Show Alert</Button>\n  );\n}\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"alert-props"},"Alert Props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Alert")," is the wrapper for ",(0,a.kt)("inlineCode",{parentName:"p"},"Alert")," component. It composes the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flex")," component."),(0,a.kt)(d,{of:"Alert",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"alerticon-props"},"AlertIcon Props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AlertIcon")," composes ",(0,a.kt)("inlineCode",{parentName:"p"},"Icon")," and changes the icon based on the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," prop."),(0,a.kt)("h3",{id:"alerttitle-props"},"AlertTitle Props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AlertTitle")," composes the ",(0,a.kt)("inlineCode",{parentName:"p"},"Box")," component."),(0,a.kt)("h3",{id:"alertdescription-props"},"AlertDescription Props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AlertDescription")," composes the ",(0,a.kt)("inlineCode",{parentName:"p"},"Box")," component."))}k.isMDXComponent=!0}}]);