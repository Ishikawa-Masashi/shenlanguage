"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[4037],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=i.createContext({}),r=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=r(e.components);return i.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=r(t),m=a,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return t?i.createElement(k,p(p({ref:n},s),{},{components:t})):i.createElement(k,p({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,p=new Array(l);p[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var r=2;r<l;r++)p[r]=t[r];return i.createElement.apply(null,p)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},57198:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var i=t(87462),a=(t(67294),t(3905));const l={},p="Pin Input",o={unversionedId:"components/forms/pin-input/index",id:"components/forms/pin-input/index",title:"Pin Input",description:"The PinInput component is similar to the Input component, but is optimized for",source:"@site/content/docs/components/forms/pin-input/index.mdx",sourceDirName:"components/forms/pin-input",slug:"/components/forms/pin-input/",permalink:"/docs/components/forms/pin-input/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/docs/components/forms/number-input/theming"},next:{title:"Theming",permalink:"/docs/components/forms/pin-input/theming"}},u={},r=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Allowing Alphanumeric values",id:"allowing-alphanumeric-values",level:3},{value:"Using fields as a one time password (OTP)",id:"using-fields-as-a-one-time-password-otp",level:3},{value:"Masking the pin input&#39;s value",id:"masking-the-pin-inputs-value",level:3},{value:"Changing the size of the PinInput",id:"changing-the-size-of-the-pininput",level:3},{value:"Adding a defaultValue",id:"adding-a-defaultvalue",level:3},{value:"Changing the placeholder",id:"changing-the-placeholder",level:3},{value:"Disable focus management",id:"disable-focus-management",level:3},{value:"AutoFill and Copy + Paste",id:"autofill-and-copy--paste",level:3},{value:"Props",id:"props",level:2},{value:"PinInputField",id:"pininputfield",level:3}],s=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},d=s("ComponentLinks"),c=s("PropsTable"),m={toc:r};function k(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pin-input"},"Pin Input"),(0,a.kt)("p",null,"The PinInput component is similar to the Input component, but is optimized for\nentering sequences of digits quickly."),(0,a.kt)(d,{github:{package:"pin-input"},npm:{package:"@chakra-ui/pin-input"},theme:{componentName:"pin-input"},mdxType:"ComponentLinks"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { PinInput, PinInputField } from '@chakra-ui/react';\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PinInput:")," The component that provides context to all the pin-input fields."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"PinInputField:")," The text field that user types in - must be a direct child\nof ",(0,a.kt)("inlineCode",{parentName:"li"},"PinInput"),".")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The most common use case of the pin input is for entering OTP or security codes."),(0,a.kt)("p",null,"Each input collects one character at a time. When a value is entered, focus is\nmoved automatically to the next input, until all fields are filled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HStack>\n  <PinInput>\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n  </PinInput>\n</HStack>\n")),(0,a.kt)("h3",{id:"allowing-alphanumeric-values"},"Allowing Alphanumeric values"),(0,a.kt)("p",null,"By default, the pin input accepts only number values. To add support for\nalphanumeric values, pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," prop and set its value to either\n",(0,a.kt)("inlineCode",{parentName:"p"},"alphanumeric")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HStack>\n  <PinInput type='alphanumeric'>\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n  </PinInput>\n</HStack>\n")),(0,a.kt)("h3",{id:"using-fields-as-a-one-time-password-otp"},"Using fields as a one time password (OTP)"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"otp")," prop on ",(0,a.kt)("inlineCode",{parentName:"p"},"PinInput")," to set ",(0,a.kt)("inlineCode",{parentName:"p"},'autocomplete="one-time-code"')," for all\nchildren ",(0,a.kt)("inlineCode",{parentName:"p"},"PinInputField")," components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<PinInput otp>\n  <PinInputField />\n  <PinInputField />\n  <PinInputField />\n  <PinInputField />\n</PinInput>\n")),(0,a.kt)("h3",{id:"masking-the-pin-inputs-value"},"Masking the pin input's value"),(0,a.kt)("p",null,"When collecting private or sensitive information using the pin input, you might\nneed to mask the value entered, similar to ",(0,a.kt)("inlineCode",{parentName:"p"},'<input type="password"/>'),"."),(0,a.kt)("p",null,"Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"mask")," prop to ",(0,a.kt)("inlineCode",{parentName:"p"},"PinInput")," to achieve this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HStack>\n  <PinInput type='alphanumeric' mask>\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n  </PinInput>\n</HStack>\n")),(0,a.kt)("h3",{id:"changing-the-size-of-the-pininput"},"Changing the size of the PinInput"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PinInput")," component comes in four sizes. The default is ",(0,a.kt)("inlineCode",{parentName:"p"},"md"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"xs")," (",(0,a.kt)("inlineCode",{parentName:"li"},"24px"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sm")," (",(0,a.kt)("inlineCode",{parentName:"li"},"32px"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"md")," (",(0,a.kt)("inlineCode",{parentName:"li"},"40px"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"lg")," (",(0,a.kt)("inlineCode",{parentName:"li"},"48px"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Stack>\n  <HStack>\n    <PinInput size='xs'>\n      <PinInputField />\n      <PinInputField />\n      <PinInputField />\n    </PinInput>\n  </HStack>\n\n  <HStack>\n    <PinInput size='sm'>\n      <PinInputField />\n      <PinInputField />\n      <PinInputField />\n    </PinInput>\n  </HStack>\n\n  <HStack>\n    <PinInput size='md'>\n      <PinInputField />\n      <PinInputField />\n      <PinInputField />\n    </PinInput>\n  </HStack>\n\n  <HStack>\n    <PinInput size='lg'>\n      <PinInputField />\n      <PinInputField />\n      <PinInputField />\n    </PinInput>\n  </HStack>\n</Stack>\n")),(0,a.kt)("h3",{id:"adding-a-defaultvalue"},"Adding a defaultValue"),(0,a.kt)("p",null,"You can set the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultValue")," of the PinInput if you wish:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HStack>\n  <PinInput defaultValue='234'>\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n  </PinInput>\n</HStack>\n")),(0,a.kt)("p",null,"Or even a partial defaultValue:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HStack>\n  <PinInput defaultValue='23'>\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n  </PinInput>\n</HStack>\n")),(0,a.kt)("h3",{id:"changing-the-placeholder"},"Changing the placeholder"),(0,a.kt)("p",null,"To customize the default input placeholder (",(0,a.kt)("inlineCode",{parentName:"p"},"\u25cb"),"), pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"placeholder")," prop\nand set it to your desired placeholder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HStack>\n  <PinInput placeholder='\ud83e\udd73'>\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n  </PinInput>\n</HStack>\n")),(0,a.kt)("h3",{id:"disable-focus-management"},"Disable focus management"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"PinInput")," moves focus automatically to the next input once a field\nis filled. It also transfers focus to a previous input when ",(0,a.kt)("kbd",null,"Delete")," is\npressed with focus on an empty input."),(0,a.kt)("p",null,"To disable this behavior, set ",(0,a.kt)("inlineCode",{parentName:"p"},"manageFocus")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HStack>\n  <PinInput manageFocus={false}>\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n  </PinInput>\n</HStack>\n")),(0,a.kt)("h3",{id:"autofill-and-copy--paste"},"AutoFill and Copy + Paste"),(0,a.kt)("p",null,"Try copying & pasting ",(0,a.kt)("inlineCode",{parentName:"p"},"1234")," into any of the inputs in the example above."),(0,a.kt)("p",null,"By default, you can only change one input at a time, but if one of the input\nfield receives a longer string by pasting into it, ",(0,a.kt)("inlineCode",{parentName:"p"},"PinInput")," attempts to\nvalidate the string and fill the other inputs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<HStack>\n  <PinInput>\n    <PinInputField />\n    <PinInputField />\n    <PinInputField />\n  </PinInput>\n</HStack>\n")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)(c,{of:"PinInput",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"pininputfield"},"PinInputField"),(0,a.kt)("p",null,"PinInputField composes ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," so you can pass all ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," props."),(0,a.kt)(c,{of:"Input",mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);