"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[1946],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=o(t),c=a,b=d["".concat(l,".").concat(c)]||d[c]||s[c]||p;return t?r.createElement(b,u(u({ref:n},m),{},{components:t})):r.createElement(b,u({ref:n},m))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,u=new Array(p);u[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var o=2;o<p;o++)u[o]=t[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2612:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>u,default:()=>b,frontMatter:()=>p,metadata:()=>i,toc:()=>o});var r=t(87462),a=(t(67294),t(3905));const p={},u="Number Input",i={unversionedId:"components/forms/number-input/index",id:"components/forms/number-input/index",title:"Number Input",description:"The NumberInput component is similar to the Input component, but it has",source:"@site/content/docs/components/forms/number-input/index.mdx",sourceDirName:"components/forms/number-input",slug:"/components/forms/number-input/",permalink:"/shenlanguage/docs/components/forms/number-input/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/shenlanguage/docs/components/forms/input/theming"},next:{title:"Theming",permalink:"/shenlanguage/docs/components/forms/number-input/theming"}},l={},o=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Setting a minimum and maximum value",id:"setting-a-minimum-and-maximum-value",level:3},{value:"Setting the step size",id:"setting-the-step-size",level:3},{value:"Adjusting the precision of the value",id:"adjusting-the-precision-of-the-value",level:3},{value:"Clamp value when user blurs the input",id:"clamp-value-when-user-blurs-the-input",level:3},{value:"Allowing out of range values",id:"allowing-out-of-range-values",level:3},{value:"Formatting and Parsing the value",id:"formatting-and-parsing-the-value",level:3},{value:"Changing the size of the input",id:"changing-the-size-of-the-input",level:3},{value:"Changing the styles",id:"changing-the-styles",level:3},{value:"Combining it with a Slider",id:"combining-it-with-a-slider",level:3},{value:"Create a mobile spinner",id:"create-a-mobile-spinner",level:3},{value:"Increment value using Mouse wheel",id:"increment-value-using-mouse-wheel",level:3},{value:"Accessibility",id:"accessibility",level:2},{value:"Aria Roles",id:"aria-roles",level:3},{value:"Keyboard Navigation",id:"keyboard-navigation",level:3},{value:"Props",id:"props",level:2},{value:"NumberInput Props",id:"numberinput-props",level:3},{value:"NumberInputField Props",id:"numberinputfield-props",level:3},{value:"NumberInputStepper Props",id:"numberinputstepper-props",level:3},{value:"NumberDecrementStepper and NumberIncrementStepper Props",id:"numberdecrementstepper-and-numberincrementstepper-props",level:3}],m=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)},s=m("ComponentLinks"),d=m("PropsTable"),c={toc:o};function b(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"number-input"},"Number Input"),(0,a.kt)("p",null,"The NumberInput component is similar to the Input component, but it has\ncontrols for incrementing or decrementing numeric values."),(0,a.kt)(s,{github:{package:"number-input"},npm:{package:"@chakra-ui/number-input"},theme:{componentName:"number-input"},mdxType:"ComponentLinks"}),(0,a.kt)("h2",{id:"import"},"Import"),(0,a.kt)("p",null,"Chakra UI exports 5 components for the NumberInput."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NumberInput"),": The wrapper that provides context and logic to the components."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NumberInputField"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"input")," field itself."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NumberInputStepper"),": The wrapper for the input's stepper buttons."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NumberIncrementStepper"),": The button to increment the value of the input."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NumberDecrementStepper"),": The button to decrement the value of the input.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  NumberInput,\n  NumberInputField,\n  NumberInputStepper,\n  NumberIncrementStepper,\n  NumberDecrementStepper,\n} from '@chakra-ui/react';\n")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The NumberInput component follows the\n",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton"},"WAI-ARIA authoring practices"),"\nfor the spin button widget. It is composed of smaller components to give you\ncontrol of the styling of each part."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberInput>\n  <NumberInputField />\n  <NumberInputStepper>\n    <NumberIncrementStepper />\n    <NumberDecrementStepper />\n  </NumberInputStepper>\n</NumberInput>\n")),(0,a.kt)("h3",{id:"setting-a-minimum-and-maximum-value"},"Setting a minimum and maximum value"),(0,a.kt)("p",null,"Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"min")," prop or ",(0,a.kt)("inlineCode",{parentName:"p"},"max")," prop to set an upper and lower limit for the input.\nBy default, the input will restrict the value to stay within the specified\nrange."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"These props defaults to\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER"},"Number.MIN_SAFE_INTEGER"),"\nand\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER"},"Number.MAX_SAFE_INTEGER"),"\n. If they do not match your requirements you can use other ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")," properties\nas ",(0,a.kt)("inlineCode",{parentName:"p"},"min")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"max"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberInput defaultValue={15} min={10} max={20}>\n  <NumberInputField />\n  <NumberInputStepper>\n    <NumberIncrementStepper />\n    <NumberDecrementStepper />\n  </NumberInputStepper>\n</NumberInput>\n")),(0,a.kt)("h3",{id:"setting-the-step-size"},"Setting the step size"),(0,a.kt)("p",null,"Pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"step")," prop to change the step size when you increment or decrement the\nvalue. By default, the value is rounded to match the number of decimals in the\n",(0,a.kt)("inlineCode",{parentName:"p"},"step"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberInput step={5} defaultValue={15} min={10} max={30}>\n  <NumberInputField />\n  <NumberInputStepper>\n    <NumberIncrementStepper />\n    <NumberDecrementStepper />\n  </NumberInputStepper>\n</NumberInput>\n")),(0,a.kt)("h3",{id:"adjusting-the-precision-of-the-value"},"Adjusting the precision of the value"),(0,a.kt)("p",null,"In some cases, you might need the value to be rounded to specific decimal\npoints. Simply pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"precision")," prop and set it to the number of decimal\npoints."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberInput defaultValue={15} precision={2} step={0.2}>\n  <NumberInputField />\n  <NumberInputStepper>\n    <NumberIncrementStepper />\n    <NumberDecrementStepper />\n  </NumberInputStepper>\n</NumberInput>\n")),(0,a.kt)("h3",{id:"clamp-value-when-user-blurs-the-input"},"Clamp value when user blurs the input"),(0,a.kt)("p",null,"In most cases, users can type custom values in the input field. If the typed\nvalue is greater than the ",(0,a.kt)("inlineCode",{parentName:"p"},"max"),", the value is reset to ",(0,a.kt)("inlineCode",{parentName:"p"},"max")," when the user blur\nout of the input."),(0,a.kt)("p",null,"To disable this behavior, pass ",(0,a.kt)("inlineCode",{parentName:"p"},"clampValueOnBlur")," and set to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In this example, try to type a value greater than the max. It won't reset the\nvalue on blur.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberInput defaultValue={15} max={30} clampValueOnBlur={false}>\n  <NumberInputField />\n  <NumberInputStepper>\n    <NumberIncrementStepper />\n    <NumberDecrementStepper />\n  </NumberInputStepper>\n</NumberInput>\n")),(0,a.kt)("h3",{id:"allowing-out-of-range-values"},"Allowing out of range values"),(0,a.kt)("p",null,"In some scenarios, you might not want to block out of range values. Pass the\n",(0,a.kt)("inlineCode",{parentName:"p"},"keepWithinRange")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"clampValueOnBlur")," props and set them to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to\nsupport this use case."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The NumberInput will be set ",(0,a.kt)("inlineCode",{parentName:"p"},"isInvalid")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," internally when the value is\nout of range. Out of range means that the ",(0,a.kt)("inlineCode",{parentName:"p"},"value")," is great than ",(0,a.kt)("inlineCode",{parentName:"p"},"max")," or less\nthan ",(0,a.kt)("inlineCode",{parentName:"p"},"min"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberInput\n  defaultValue={15}\n  max={10}\n  keepWithinRange={false}\n  clampValueOnBlur={false}\n>\n  <NumberInputField />\n  <NumberInputStepper>\n    <NumberIncrementStepper />\n    <NumberDecrementStepper />\n  </NumberInputStepper>\n</NumberInput>\n")),(0,a.kt)("h3",{id:"formatting-and-parsing-the-value"},"Formatting and Parsing the value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function Example() {\n  const format = (val) => `$` + val;\n  const parse = (val) => val.replace(/^\\$/, '');\n\n  const [value, setValue] = React.useState('1.53');\n\n  return (\n    <NumberInput\n      onChange={(valueString) => setValue(parse(valueString))}\n      value={format(value)}\n      max={50}\n    >\n      <NumberInputField />\n      <NumberInputStepper>\n        <NumberIncrementStepper />\n        <NumberDecrementStepper />\n      </NumberInputStepper>\n    </NumberInput>\n  );\n}\n")),(0,a.kt)("h3",{id:"changing-the-size-of-the-input"},"Changing the size of the input"),(0,a.kt)("p",null,"Like the ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," component, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," prop to change the size of\nthe input."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<Stack shouldWrapChildren direction='row'>\n  <NumberInput size='xs' maxW={16} defaultValue={15} min={10}>\n    <NumberInputField />\n    <NumberInputStepper>\n      <NumberIncrementStepper />\n      <NumberDecrementStepper />\n    </NumberInputStepper>\n  </NumberInput>\n\n  <NumberInput size='sm' maxW={20} defaultValue={15} min={10}>\n    <NumberInputField />\n    <NumberInputStepper>\n      <NumberIncrementStepper />\n      <NumberDecrementStepper />\n    </NumberInputStepper>\n  </NumberInput>\n\n  <NumberInput size='md' maxW={24} defaultValue={15} min={10}>\n    <NumberInputField />\n    <NumberInputStepper>\n      <NumberIncrementStepper />\n      <NumberDecrementStepper />\n    </NumberInputStepper>\n  </NumberInput>\n\n  <NumberInput size='lg' maxW={32} defaultValue={15} min={10}>\n    <NumberInputField />\n    <NumberInputStepper>\n      <NumberIncrementStepper />\n      <NumberDecrementStepper />\n    </NumberInputStepper>\n  </NumberInput>\n</Stack>\n")),(0,a.kt)("h3",{id:"changing-the-styles"},"Changing the styles"),(0,a.kt)("p",null,"You can change the style of any part of the components using style props. You\ncan also change the icons used in the steppers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<NumberInput size='sm' defaultValue={15} min={10}>\n  <NumberInputField focusBorderColor='red.200' />\n  <NumberInputStepper>\n    <NumberIncrementStepper\n      bg='green.200'\n      _active={{ bg: 'green.300' }}\n      children='+'\n    />\n    <NumberDecrementStepper\n      bg='pink.200'\n      _active={{ bg: 'pink.300' }}\n      children='-'\n    />\n  </NumberInputStepper>\n</NumberInput>\n")),(0,a.kt)("h3",{id:"combining-it-with-a-slider"},"Combining it with a Slider"),(0,a.kt)("p",null,"A common use case is to combine the ",(0,a.kt)("inlineCode",{parentName:"p"},"NumberInput")," with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Slider"),"."),(0,a.kt)("p",null,"We recommend disabling ",(0,a.kt)("inlineCode",{parentName:"p"},"focusThumbOnChange")," on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Slider"),", so the\n",(0,a.kt)("inlineCode",{parentName:"p"},"NumberInput")," won't lose focus after input."),(0,a.kt)("p",null,"Here's an example of how to do that:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function SliderInput() {\n  const [value, setValue] = React.useState(0);\n  const handleChange = (value) => setValue(value);\n\n  return (\n    <Flex>\n      <NumberInput maxW='100px' mr='2rem' value={value} onChange={handleChange}>\n        <NumberInputField />\n        <NumberInputStepper>\n          <NumberIncrementStepper />\n          <NumberDecrementStepper />\n        </NumberInputStepper>\n      </NumberInput>\n      <Slider\n        flex='1'\n        focusThumbOnChange={false}\n        value={value}\n        onChange={handleChange}\n      >\n        <SliderTrack>\n          <SliderFilledTrack />\n        </SliderTrack>\n        <SliderThumb fontSize='sm' boxSize='32px' children={value} />\n      </Slider>\n    </Flex>\n  );\n}\n")),(0,a.kt)("h3",{id:"create-a-mobile-spinner"},"Create a mobile spinner"),(0,a.kt)("p",null,"Sometimes, you might need to create a mobile version of the number input. Here's\nhow you can leverage the ",(0,a.kt)("inlineCode",{parentName:"p"},"useNumberInput")," hook to build one."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function HookUsage() {\n  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =\n    useNumberInput({\n      step: 0.01,\n      defaultValue: 1.53,\n      min: 1,\n      max: 6,\n      precision: 2,\n    });\n\n  const inc = getIncrementButtonProps();\n  const dec = getDecrementButtonProps();\n  const input = getInputProps();\n\n  return (\n    <HStack maxW='320px'>\n      <Button {...inc}>+</Button>\n      <Input {...input} />\n      <Button {...dec}>-</Button>\n    </HStack>\n  );\n}\n")),(0,a.kt)("h3",{id:"increment-value-using-mouse-wheel"},"Increment value using Mouse wheel"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"NumberInput")," component supports the ability to increment or decrement\nvalues using the mouse wheel events. To activate this, pass the\n",(0,a.kt)("inlineCode",{parentName:"p"},"allowMouseWheel")," prop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function MouseWheelExample() {\n  return (\n    <NumberInput allowMouseWheel>\n      <NumberInputField />\n      <NumberInputStepper>\n        <NumberIncrementStepper />\n        <NumberDecrementStepper />\n      </NumberInputStepper>\n    </NumberInput>\n  );\n}\n")),(0,a.kt)("h2",{id:"accessibility"},"Accessibility"),(0,a.kt)("h3",{id:"aria-roles"},"Aria Roles"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The input has ",(0,a.kt)("inlineCode",{parentName:"li"},"role")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"spinbutton")," to denote that users are to select\nfrom a range of discrete values using an up and down arrows on the keyboard."),(0,a.kt)("li",{parentName:"ul"},"The input has ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-valuemin")," set to the minimum value allowed for the\nspinbutton."),(0,a.kt)("li",{parentName:"ul"},"The input has ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-valuemax")," set to the maximum value allowed for the\nspinbutton. attribute should be applied to the spinbutton."),(0,a.kt)("li",{parentName:"ul"},"The input has ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-valuenow")," set to the current value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"input"),"."),(0,a.kt)("li",{parentName:"ul"},"The custom spinner (up and down buttons) has ",(0,a.kt)("inlineCode",{parentName:"li"},"aria-hidden")," set to ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," to\nmake them invisible to screen readers.")),(0,a.kt)("h3",{id:"keyboard-navigation"},"Keyboard Navigation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When you hit the ",(0,a.kt)("kbd",null,"\u2b06")," or ",(0,a.kt)("kbd",null,"\u2b07")," key, the input value will be\nincreased or decreased by ",(0,a.kt)("inlineCode",{parentName:"li"},"step"),"."),(0,a.kt)("li",{parentName:"ul"},"Holding down ",(0,a.kt)("kbd",null,"Shift")," and pressing ",(0,a.kt)("kbd",null,"\u2b06")," or ",(0,a.kt)("kbd",null,"\u2b07")," will\nupdate the value by ",(0,a.kt)("inlineCode",{parentName:"li"},"10 * step"),"."),(0,a.kt)("li",{parentName:"ul"},"Holding down ",(0,a.kt)("kbd",null,"Ctrl")," or ",(0,a.kt)("kbd",null,"\u2318"),", and pressing ",(0,a.kt)("kbd",null,"\u2b06")," or",(0,a.kt)("kbd",null,"\u2b06")," will update the value by `0.1 * step`."),(0,a.kt)("li",{parentName:"ul"},"Long pressing the up and down stepper buttons will update the value at\nintervals.")),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"numberinput-props"},"NumberInput Props"),(0,a.kt)("p",null,"NumberInput composes ",(0,a.kt)("inlineCode",{parentName:"p"},"Flex")," with some additional props listed below."),(0,a.kt)(d,{of:"NumberInput",mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"numberinputfield-props"},"NumberInputField Props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NumberInputField")," composes ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," so you can pass all ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," props. If you\nwant to change the size, pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," prop to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NumberInput")," component\ninstead, as ",(0,a.kt)("a",{parentName:"p",href:"#changing-the-size-of-the-input"},"demonstrated above"),"."),(0,a.kt)("h3",{id:"numberinputstepper-props"},"NumberInputStepper Props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NumberInputStepper")," composes ",(0,a.kt)("inlineCode",{parentName:"p"},"Flex")," so you can pass all ",(0,a.kt)("inlineCode",{parentName:"p"},"Flex")," props."),(0,a.kt)("h3",{id:"numberdecrementstepper-and-numberincrementstepper-props"},"NumberDecrementStepper and NumberIncrementStepper Props"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"NumberDecrementStepper")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"NumberIncrementStepper")," composes the ",(0,a.kt)("inlineCode",{parentName:"p"},"Box")," props\nso you can pass all ",(0,a.kt)("inlineCode",{parentName:"p"},"Box")," props."))}b.isMDXComponent=!0}}]);