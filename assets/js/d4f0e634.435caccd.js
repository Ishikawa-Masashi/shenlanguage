"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[7565],{3905:(e,o,n)=>{n.d(o,{Zo:()=>p,kt:()=>m});var a=n(67294);function t(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function r(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?r(Object(n),!0).forEach((function(o){t(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function d(e,o){if(null==e)return{};var n,a,t=function(e,o){if(null==e)return{};var n,a,t={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||(t[n]=e[n]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=a.createContext({}),s=function(e){var o=a.useContext(l),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},p=function(e){var o=s(e.components);return a.createElement(l.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},u=a.forwardRef((function(e,o){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=s(n),m=t,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,i(i({ref:o},p),{},{components:n})):a.createElement(k,i({ref:o},p))}));function m(e,o){var n=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=u;var d={};for(var l in o)hasOwnProperty.call(o,l)&&(d[l]=o[l]);d.originalType=e,d.mdxType="string"==typeof e?e:t,i[1]=d;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},67400:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var a=n(87462),t=(n(67294),n(3905));const r={},i="Radio",d={unversionedId:"components/forms/radio/index",id:"components/forms/radio/index",title:"Radio",description:"Radios are used when only one choice may be selected in a series of options.",source:"@site/content/docs/components/forms/radio/index.mdx",sourceDirName:"components/forms/radio",slug:"/components/forms/radio/",permalink:"/docs/components/forms/radio/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/docs/components/forms/pin-input/theming"},next:{title:"Theming",permalink:"/docs/components/forms/radio/theming"}},l={},s=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:3},{value:"Radio with custom color",id:"radio-with-custom-color",level:3},{value:"Radio sizes",id:"radio-sizes",level:3},{value:"Disabled radios",id:"disabled-radios",level:3},{value:"Horizontal alignment",id:"horizontal-alignment",level:3},{value:"Invalid Radio",id:"invalid-radio",level:3},{value:"Custom Radio Buttons",id:"custom-radio-buttons",level:3},{value:"Note about <code>name</code> prop",id:"note-about-name-prop",level:3},{value:"Props",id:"props",level:2}],p=e=>function(o){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",o)},c=p("ComponentLinks"),u=p("PropsTable"),m={toc:s};function k(e){let{components:o,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},m,n,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"radio"},"Radio"),(0,t.kt)("p",null,"Radios are used when only one choice may be selected in a series of options."),(0,t.kt)(c,{github:{package:"radio"},npm:{package:"@chakra-ui/radio"},theme:{componentName:"radio"},mdxType:"ComponentLinks"}),(0,t.kt)("h2",{id:"import"},"Import"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"import { Radio, RadioGroup } from '@chakra-ui/react';\n")),(0,t.kt)("h3",{id:"usage"},"Usage"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function RadioExample() {\n  const [value, setValue] = React.useState('1');\n  return (\n    <RadioGroup onChange={setValue} value={value}>\n      <Stack direction='row'>\n        <Radio value='1'>First</Radio>\n        <Radio value='2'>Second</Radio>\n        <Radio value='3'>Third</Radio>\n      </Stack>\n    </RadioGroup>\n  );\n}\n")),(0,t.kt)("h3",{id:"radio-with-custom-color"},"Radio with custom color"),(0,t.kt)("p",null,"You can override the ",(0,t.kt)("inlineCode",{parentName:"p"},"colorScheme")," of the Radio to any color key specified in\n",(0,t.kt)("inlineCode",{parentName:"p"},"theme.colors"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RadioGroup defaultValue='2'>\n  <Stack spacing={5} direction='row'>\n    <Radio colorScheme='red' value='1'>\n      Radio\n    </Radio>\n    <Radio colorScheme='green' value='2'>\n      Radio\n    </Radio>\n  </Stack>\n</RadioGroup>\n")),(0,t.kt)("h3",{id:"radio-sizes"},"Radio sizes"),(0,t.kt)("p",null,"The checkbox comes with 3 sizes."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Stack>\n  <Radio size='sm' name='1' colorScheme='red'>\n    Radio\n  </Radio>\n  <Radio size='md' name='1' colorScheme='green'>\n    Radio\n  </Radio>\n  <Radio size='lg' name='1' colorScheme='orange' defaultChecked>\n    Radio\n  </Radio>\n</Stack>\n")),(0,t.kt)("h3",{id:"disabled-radios"},"Disabled radios"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RadioGroup defaultValue='1'>\n  <Stack>\n    <Radio value='1' isDisabled>\n      Checked\n    </Radio>\n    <Radio value='2'>Unchecked</Radio>\n    <Radio value='3'>Unchecked</Radio>\n  </Stack>\n</RadioGroup>\n")),(0,t.kt)("h3",{id:"horizontal-alignment"},"Horizontal alignment"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RadioGroup defaultValue='1'>\n  <Stack spacing={4} direction='row'>\n    <Radio value='1' isDisabled>\n      Radio 1\n    </Radio>\n    <Radio value='2'>Radio 2</Radio>\n    <Radio value='3'>Radio 3</Radio>\n  </Stack>\n</RadioGroup>\n")),(0,t.kt)("h3",{id:"invalid-radio"},"Invalid Radio"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Radio isInvalid>Radio</Radio>\n")),(0,t.kt)("h3",{id:"custom-radio-buttons"},"Custom Radio Buttons"),(0,t.kt)("p",null,"In some cases, you might need to create components that work like radios but\ndon't look like radios. Chakra exports ",(0,t.kt)("inlineCode",{parentName:"p"},"useRadio"),", and ",(0,t.kt)("inlineCode",{parentName:"p"},"useRadioGroup")," hooks to\nhelp with this scenario. Here's what you need to do:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Create a component that consumes the ",(0,t.kt)("inlineCode",{parentName:"li"},"useRadio")," hook."),(0,t.kt)("li",{parentName:"ol"},"Use the ",(0,t.kt)("inlineCode",{parentName:"li"},"useRadioGroup")," hook to control a group of custom radios.")),(0,t.kt)("p",null,"You can head on over to the pages for the\n",(0,t.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/component-hooks/use-radio"},"useRadio"),"\nand\n",(0,t.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/styled-system/component-hooks/use-radio-group"},"useRadioGroup"),"\nhooks to see more detail about their uses."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"Please be aware that the example below should only be used if you really need\na radio button for data collection purposes. If you want to toggle between\ndifferent content on activation of a button use the ",(0,t.kt)("inlineCode",{parentName:"p"},"Tabs")," component.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"manual=true",manual:"true"},"// 1. Create a component that consumes the `useRadio` hook\nfunction RadioCard(props) {\n  const { getInputProps, getCheckboxProps } = useRadio(props);\n\n  const input = getInputProps();\n  const checkbox = getCheckboxProps();\n\n  return (\n    <Box as='label'>\n      <input {...input} />\n      <Box\n        {...checkbox}\n        cursor='pointer'\n        borderWidth='1px'\n        borderRadius='md'\n        boxShadow='md'\n        _checked={{\n          bg: 'teal.600',\n          color: 'white',\n          borderColor: 'teal.600',\n        }}\n        _focus={{\n          boxShadow: 'outline',\n        }}\n        px={5}\n        py={3}\n      >\n        {props.children}\n      </Box>\n    </Box>\n  );\n}\n\n// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.\nfunction Example() {\n  const options = ['react', 'vue', 'svelte'];\n\n  const { getRootProps, getRadioProps } = useRadioGroup({\n    name: 'framework',\n    defaultValue: 'react',\n    onChange: console.log,\n  });\n\n  const group = getRootProps();\n\n  return (\n    <HStack {...group}>\n      {options.map((value) => {\n        const radio = getRadioProps({ value });\n        return (\n          <RadioCard key={value} {...radio}>\n            {value}\n          </RadioCard>\n        );\n      })}\n    </HStack>\n  );\n}\n\nrender(<Example />);\n")),(0,t.kt)("h3",{id:"note-about-name-prop"},"Note about ",(0,t.kt)("inlineCode",{parentName:"h3"},"name")," prop"),(0,t.kt)("p",null,"We recommend passing the ",(0,t.kt)("inlineCode",{parentName:"p"},"name")," prop to the ",(0,t.kt)("inlineCode",{parentName:"p"},"RadioGroup")," component, instead of\npassing it to each ",(0,t.kt)("inlineCode",{parentName:"p"},"Radio")," component. By default, the ",(0,t.kt)("inlineCode",{parentName:"p"},"name")," prop of the\nRadioGroup takes precedence."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx"},'// Do this \u2705\n<RadioGroup name="form-name">\n  <Radio>Radio 1</Radio>\n  <Radio>Radio 2</Radio>\n</RadioGroup>\n\n// Don\'t do this \u274c\n<RadioGroup >\n  <Radio name="form-name">Radio 1</Radio>\n  <Radio name="form-name">Radio 2</Radio>\n</RadioGroup>\n')),(0,t.kt)("h2",{id:"props"},"Props"),(0,t.kt)(u,{of:"Radio",mdxType:"PropsTable"}))}k.isMDXComponent=!0}}]);