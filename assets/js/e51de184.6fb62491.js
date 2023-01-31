"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[9342],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>m});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=r.createContext({}),d=function(e){var n=r.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=d(a),m=t,u=g["".concat(s,".").concat(m)]||g[m]||c[m]||l;return a?r.createElement(u,i(i({ref:n},p),{},{components:a})):r.createElement(u,i({ref:n},p))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},24535:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),t=(a(67294),a(3905));const l={},i="Range Slider",o={unversionedId:"components/forms/range-slider/index",id:"components/forms/range-slider/index",title:"Range Slider",description:"The RangeSlider is a multi thumb slider used to select a range of related",source:"@site/content/docs/components/forms/range-slider/index.mdx",sourceDirName:"components/forms/range-slider",slug:"/components/forms/range-slider/",permalink:"/shenlanguage/docs/components/forms/range-slider/",draft:!1,tags:[],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Theming",permalink:"/shenlanguage/docs/components/forms/radio/theming"},next:{title:"Theming",permalink:"/shenlanguage/docs/components/forms/range-slider/theming"}},s={},d=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Changing the slider color scheme",id:"changing-the-slider-color-scheme",level:3},{value:"Changing the slider orientation",id:"changing-the-slider-orientation",level:3},{value:"Customizing the Slider",id:"customizing-the-slider",level:3},{value:"Discrete Sliders",id:"discrete-sliders",level:3},{value:"Getting the final value when dragging the slider",id:"getting-the-final-value-when-dragging-the-slider",level:3},{value:"useRangeSlider",id:"userangeslider",level:3},{value:"Props",id:"props",level:2},{value:"RangeSlider Props",id:"rangeslider-props",level:3},{value:"RangeSliderThumb Props",id:"rangesliderthumb-props",level:3},{value:"RangeSliderFilledTrack Props",id:"rangesliderfilledtrack-props",level:3},{value:"RangeSliderTrack Props",id:"rangeslidertrack-props",level:3}],p=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",n)},c=p("ComponentLinks"),g=p("PropsTable"),m={toc:d};function u(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"range-slider"},"Range Slider"),(0,t.kt)("p",null,"The RangeSlider is a multi thumb slider used to select a range of related\nvalues."),(0,t.kt)(c,{github:{package:"range-slider"},npm:{package:"@chakra-ui/range-slider"},theme:{componentName:"range-slider"},mdxType:"ComponentLinks"}),(0,t.kt)("h2",{id:"import"},"Import"),(0,t.kt)("p",null,"Chakra UI exports the following component parts to implement the Range Slider:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"RangeSlider")),": The wrapper that provides context and functionality for all\nchildren."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"RangeSliderTrack")),": The empty part of the slider that shows the track."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"RangeSliderFilledTrack")),": The filled part of the slider."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},(0,t.kt)("inlineCode",{parentName:"strong"},"RangeSliderThumb")),": The handle that's used to change the slider value.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"import {\n  RangeSlider,\n  RangeSliderTrack,\n  RangeSliderFilledTrack,\n  RangeSliderThumb,\n} from '@chakra-ui/react';\n")),(0,t.kt)("h2",{id:"usage"},"Usage"),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"RangeSlider")," is a multi thumb slider used to select a range of related\nvalues. A common use-case of this component is a price range picker that allows\na user to set the minimum and maximum price."),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"Note:")," We recommend adding a ",(0,t.kt)("inlineCode",{parentName:"p"},"aria-label")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"aria-labelledby")," prop to\nprovide an accessible label for the Slider.")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeSlider aria-label={['min', 'max']} defaultValue={[10, 30]}>\n  <RangeSliderTrack>\n    <RangeSliderFilledTrack />\n  </RangeSliderTrack>\n  <RangeSliderThumb index={0} />\n  <RangeSliderThumb index={1} />\n</RangeSlider>\n")),(0,t.kt)("h3",{id:"changing-the-slider-color-scheme"},"Changing the slider color scheme"),(0,t.kt)("p",null,"You can override the color scheme of the slider to any color key specified in\n",(0,t.kt)("inlineCode",{parentName:"p"},"theme.colors"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeSlider\n  aria-label={['min', 'max']}\n  colorScheme='pink'\n  defaultValue={[10, 30]}\n>\n  <RangeSliderTrack>\n    <RangeSliderFilledTrack />\n  </RangeSliderTrack>\n  <RangeSliderThumb index={0} />\n  <RangeSliderThumb index={1} />\n</RangeSlider>\n")),(0,t.kt)("h3",{id:"changing-the-slider-orientation"},"Changing the slider orientation"),(0,t.kt)("p",null,"By default, the slider orientation is ",(0,t.kt)("inlineCode",{parentName:"p"},"horizontal"),". However, if you want to have\nit vertical, pass the ",(0,t.kt)("inlineCode",{parentName:"p"},"orientation")," prop and set its value to ",(0,t.kt)("inlineCode",{parentName:"p"},"vertical"),"."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeSlider\n  aria-label={['min', 'max']}\n  colorScheme='pink'\n  defaultValue={[10, 30]}\n  orientation='vertical'\n  minH='32'\n>\n  <RangeSliderTrack>\n    <RangeSliderFilledTrack />\n  </RangeSliderTrack>\n  <RangeSliderThumb index={0} />\n  <RangeSliderThumb index={1} />\n</RangeSlider>\n")),(0,t.kt)("h3",{id:"customizing-the-slider"},"Customizing the Slider"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"Slider")," component was designed to be composed to make it easy for you to\ncustomize its styles."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeSlider aria-label={['min', 'max']} defaultValue={[30, 80]}>\n  <RangeSliderTrack bg='red.100'>\n    <RangeSliderFilledTrack bg='tomato' />\n  </RangeSliderTrack>\n  <RangeSliderThumb boxSize={6} index={0}>\n    <Box color='tomato' as={MdGraphicEq} />\n  </RangeSliderThumb>\n  <RangeSliderThumb boxSize={6} index={1}>\n    <Box color='tomato' as={MdGraphicEq} />\n  </RangeSliderThumb>\n</RangeSlider>\n")),(0,t.kt)("h3",{id:"discrete-sliders"},"Discrete Sliders"),(0,t.kt)("p",null,"Discrete sliders allow you to snap to predefined sets of values. This can be\naccomplished using the ",(0,t.kt)("inlineCode",{parentName:"p"},"step")," prop."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30}>\n  <RangeSliderTrack bg='red.100'>\n    <RangeSliderFilledTrack bg='tomato' />\n  </RangeSliderTrack>\n  <RangeSliderThumb boxSize={6} index={0} />\n  <RangeSliderThumb boxSize={6} index={1} />\n</RangeSlider>\n")),(0,t.kt)("h3",{id:"getting-the-final-value-when-dragging-the-slider"},"Getting the final value when dragging the slider"),(0,t.kt)("p",null,"Dragging the slider can trigger lots of updates and the user might only be\ninterested in the final result after sliding is complete. You can use\n",(0,t.kt)("inlineCode",{parentName:"p"},"onChangeEnd")," for this."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"<RangeSlider\n  aria-label={['min', 'max']}\n  onChangeEnd={(val) => console.log(val)}\n>\n  <RangeSliderTrack>\n    <RangeSliderFilledTrack />\n  </RangeSliderTrack>\n  <RangeSliderThumb index={0} />\n  <RangeSliderThumb index={1} />\n</RangeSlider>\n")),(0,t.kt)("h3",{id:"userangeslider"},"useRangeSlider"),(0,t.kt)("p",null,"We've exported the ",(0,t.kt)("inlineCode",{parentName:"p"},"useRangeSlider")," hook to help users manage and build custom\nslider UIs."),(0,t.kt)("h2",{id:"props"},"Props"),(0,t.kt)("h3",{id:"rangeslider-props"},"RangeSlider Props"),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"RangeSlider")," component wraps all its children in the\n",(0,t.kt)("a",{parentName:"p",href:"/docs/components/layout/box"},"Box")," component, so you can pass all ",(0,t.kt)("inlineCode",{parentName:"p"},"Box")," props to change its\nstyle."),(0,t.kt)(g,{of:"RangeSlider",mdxType:"PropsTable"}),(0,t.kt)("h3",{id:"rangesliderthumb-props"},"RangeSliderThumb Props"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"RangeSliderThumb")," composes ",(0,t.kt)("a",{parentName:"p",href:"/docs/components/layout/box"},"Box")," so you can pass all ",(0,t.kt)("inlineCode",{parentName:"p"},"Box"),"\nprops to change its style."),(0,t.kt)("h3",{id:"rangesliderfilledtrack-props"},"RangeSliderFilledTrack Props"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"RangeSliderFilledTrack")," composes ",(0,t.kt)("a",{parentName:"p",href:"/docs/components/layout/box"},"Box")," so you can pass all\n",(0,t.kt)("inlineCode",{parentName:"p"},"Box")," props to change its style."),(0,t.kt)("h3",{id:"rangeslidertrack-props"},"RangeSliderTrack Props"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"RangeSliderTrack")," composes ",(0,t.kt)("a",{parentName:"p",href:"/docs/components/layout/box"},"Box")," so you can pass all ",(0,t.kt)("inlineCode",{parentName:"p"},"Box"),"\nprops to change its style."))}u.isMDXComponent=!0}}]);