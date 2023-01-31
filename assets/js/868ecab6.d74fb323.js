"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[9616],{79439:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var r=n(67294),o=n(11236);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}}function p(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}function h(e){return{}.toString.call(e).includes("Object")}function y(e){return"function"==typeof e}var m=p((function(e,t){throw new Error(e[t]||e.default)}))({initialIsRequired:"initial state is required",initialType:"initial state should be an object",initialContent:"initial state shouldn't be an empty object",handlerType:"handler should be an object or a function",handlersType:"all handlers should be a functions",selectorType:"selector should be a function",changeType:"provided value of changes should be an object",changeField:'it seams you want to change a field in the state which is not specified in the "initial" state',default:"an unknown error accured in `state-local` package"}),v={changes:function(e,t){return h(t)||m("changeType"),Object.keys(t).some((function(t){return n=e,r=t,!Object.prototype.hasOwnProperty.call(n,r);var n,r}))&&m("changeField"),t},selector:function(e){y(e)||m("selectorType")},handler:function(e){y(e)||h(e)||m("handlerType"),h(e)&&Object.values(e).some((function(e){return!y(e)}))&&m("handlersType")},initial:function(e){var t;e||m("initialIsRequired"),h(e)||m("initialType"),t=e,Object.keys(t).length||m("initialContent")}};function b(e,t){return y(t)?t(e.current):t}function w(e,t){return e.current=f(f({},e.current),t),t}function O(e,t,n){return y(t)?t(e.current):Object.keys(n).forEach((function(n){var r;return null===(r=t[n])||void 0===r?void 0:r.call(t,e.current[n])})),n}var j={create:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v.initial(e),v.handler(t);var n={current:e},r=p(O)(n,t),o=p(w)(n),i=p(v.changes)(e),c=p(b)(n);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return e};return v.selector(e),e(n.current)}function a(e){g(r,o,i,c)(e)}return[u,a]}};const M=j;const P={paths:{vs:"https://cdn.jsdelivr.net/npm/monaco-editor@0.33.0/min/vs"}};const E=function(e){return{}.toString.call(e).includes("Object")};var k={configIsRequired:"the configuration object is required",configType:"the configuration object should be an object",default:"an unknown error accured in `@monaco-editor/loader` package",deprecation:"Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "},R=function(e){return function t(){for(var n=this,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return o.length>=e.length?e.apply(this,o):function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return t.apply(n,[].concat(o,r))}}}((function(e,t){throw new Error(e[t]||e.default)}))(k),S={config:function(e){return e||R("configIsRequired"),E(e)||R("configType"),e.urls?(console.warn(k.deprecation),{paths:{vs:e.urls.monacoBase}}):e}};const T=S;const C=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}};const x=function e(t,n){return Object.keys(n).forEach((function(r){n[r]instanceof Object&&t[r]&&Object.assign(n[r],e(t[r],n[r]))})),u(u({},t),n)};var V={type:"cancelation",msg:"operation is manually canceled"};const I=function(e){var t=!1,n=new Promise((function(n,r){e.then((function(e){return t?r(V):n(e)})),e.catch(r)}));return n.cancel=function(){return t=!0},n};var L,A,D=M.create({config:P,isInitialized:!1,resolve:null,reject:null,monaco:null}),q=(A=2,function(e){if(Array.isArray(e))return e}(L=D)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,u=e[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(a){o=!0,i=a}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}}(L,A)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}(L,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),N=q[0],_=q[1];function z(e){return document.body.appendChild(e)}function F(e){var t,n,r=N((function(e){return{config:e.config,reject:e.reject}})),o=(t="".concat(r.config.paths.vs,"/loader.js"),n=document.createElement("script"),t&&(n.src=t),n);return o.onload=function(){return e()},o.onerror=r.reject,o}function U(){var e=N((function(e){return{config:e.config,resolve:e.resolve,reject:e.reject}})),t=window.require;t.config(e.config),t(["vs/editor/editor.main"],(function(t){B(t),e.resolve(t)}),(function(t){e.reject(t)}))}function B(e){N().monaco||_({monaco:e})}var H=new Promise((function(e,t){return _({resolve:e,reject:t})})),W={config:function(e){var t=T.config(e),n=t.monaco,r=a(t,["monaco"]);_((function(e){return{config:x(e.config,r),monaco:n}}))},init:function(){var e=N((function(e){return{monaco:e.monaco,isInitialized:e.isInitialized,resolve:e.resolve}}));if(!e.isInitialized){if(_({isInitialized:!0}),e.monaco)return e.resolve(e.monaco),I(H);if(window.monaco&&window.monaco.editor)return B(window.monaco),e.resolve(window.monaco),I(H);C(z,F)(U)}return I(H)},__getMonacoInstance:function(){return N((function(e){return e.monaco}))}};const K=W;var Y=n(45697),Z=n.n(Y);function $(){return $=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$.apply(this,arguments)}const G={display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"};const J=function({content:e}){return r.createElement("div",{style:G},e)},Q={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}};function X({width:e,height:t,isEditorReady:n,loading:o,_ref:i,className:c,wrapperProps:u}){return r.createElement("section",$({style:{...Q.wrapper,width:e,height:t}},u),!n&&r.createElement(J,{content:o}),r.createElement("div",{ref:i,style:{...Q.fullWidth,...!n&&Q.hide},className:c}))}X.propTypes={width:Z().oneOfType([Z().number,Z().string]).isRequired,height:Z().oneOfType([Z().number,Z().string]).isRequired,loading:Z().oneOfType([Z().element,Z().string]).isRequired,isEditorReady:Z().bool.isRequired,className:Z().string,wrapperProps:Z().object};const ee=X;const te=(0,r.memo)(ee);const ne=function(e){(0,r.useEffect)(e,[])};const re=function(e,t,n=!0){const o=(0,r.useRef)(!0);(0,r.useEffect)(o.current||!n?()=>{o.current=!1}:e,t)};function oe(){}function ie(e,t,n,r){return function(e,t){return e.editor.getModel(ce(e,t))}(e,r)||function(e,t,n,r){return e.editor.createModel(t,n,r&&ce(e,r))}(e,t,n,r)}function ce(e,t){return e.Uri.parse(t)}function ue({original:e,modified:t,language:n,originalLanguage:o,modifiedLanguage:i,originalModelPath:c,modifiedModelPath:u,keepCurrentOriginalModel:a,keepCurrentModifiedModel:l,theme:s,loading:d,options:f,height:g,width:p,className:h,wrapperProps:y,beforeMount:m,onMount:v}){const[b,w]=(0,r.useState)(!1),[O,j]=(0,r.useState)(!0),M=(0,r.useRef)(null),P=(0,r.useRef)(null),E=(0,r.useRef)(null),k=(0,r.useRef)(v),R=(0,r.useRef)(m);ne((()=>{const e=K.init();return e.then((e=>(P.current=e)&&j(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>M.current?function(){const e=M.current.getModel();var t,n;a||null===(t=e.original)||void 0===t||t.dispose();l||null===(n=e.modified)||void 0===n||n.dispose();M.current.dispose()}():e.cancel()})),re((()=>{const e=M.current.getModifiedEditor();e.getOption(P.current.editor.EditorOption.readOnly)?e.setValue(t):t!==e.getValue()&&(e.executeEdits("",[{range:e.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),e.pushUndoStop())}),[t],b),re((()=>{M.current.getModel().original.setValue(e)}),[e],b),re((()=>{const{original:e,modified:t}=M.current.getModel();P.current.editor.setModelLanguage(e,o||n),P.current.editor.setModelLanguage(t,i||n)}),[n,o,i],b),re((()=>{P.current.editor.setTheme(s)}),[s],b),re((()=>{M.current.updateOptions(f)}),[f],b);const S=(0,r.useCallback)((()=>{R.current(P.current);const r=ie(P.current,e,o||n,c),a=ie(P.current,t,i||n,u);M.current.setModel({original:r,modified:a})}),[n,t,i,e,o,c,u]),T=(0,r.useCallback)((()=>{M.current=P.current.editor.createDiffEditor(E.current,{automaticLayout:!0,...f}),S(),P.current.editor.setTheme(s),w(!0)}),[f,s,S]);return(0,r.useEffect)((()=>{b&&k.current(M.current,P.current)}),[b]),(0,r.useEffect)((()=>{!O&&!b&&T()}),[O,b,T]),r.createElement(te,{width:p,height:g,isEditorReady:b,loading:d,_ref:E,className:h,wrapperProps:y})}ue.propTypes={original:Z().string,modified:Z().string,language:Z().string,originalLanguage:Z().string,modifiedLanguage:Z().string,originalModelPath:Z().string,modifiedModelPath:Z().string,keepCurrentOriginalModel:Z().bool,keepCurrentModifiedModel:Z().bool,theme:Z().string,loading:Z().oneOfType([Z().element,Z().string]),options:Z().object,width:Z().oneOfType([Z().number,Z().string]),height:Z().oneOfType([Z().number,Z().string]),className:Z().string,wrapperProps:Z().object,beforeMount:Z().func,onMount:Z().func},ue.defaultProps={theme:"light",loading:"Loading...",options:{},keepCurrentOriginalModel:!1,keepCurrentModifiedModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:oe,onMount:oe};const ae=function(e){const t=(0,r.useRef)();return(0,r.useEffect)((()=>{t.current=e}),[e]),t.current},le=new Map;function se({defaultValue:e,defaultLanguage:t,defaultPath:n,value:o,language:i,path:c,theme:u,line:a,loading:l,options:s,overrideServices:d,saveViewState:f,keepCurrentModel:g,width:p,height:h,className:y,wrapperProps:m,beforeMount:v,onMount:b,onChange:w,onValidate:O}){const[j,M]=(0,r.useState)(!1),[P,E]=(0,r.useState)(!0),k=(0,r.useRef)(null),R=(0,r.useRef)(null),S=(0,r.useRef)(null),T=(0,r.useRef)(b),C=(0,r.useRef)(v),x=(0,r.useRef)(null),V=(0,r.useRef)(o),I=ae(c),L=(0,r.useRef)(!1);ne((()=>{const e=K.init();return e.then((e=>(k.current=e)&&E(!1))).catch((e=>"cancelation"!==(null==e?void 0:e.type)&&console.error("Monaco initialization: error:",e))),()=>R.current?function(){var e,t;null===(e=x.current)||void 0===e||e.dispose(),g?f&&le.set(c,R.current.saveViewState()):null===(t=R.current.getModel())||void 0===t||t.dispose();R.current.dispose()}():e.cancel()})),re((()=>{const n=ie(k.current,e||o,t||i,c);n!==R.current.getModel()&&(f&&le.set(I,R.current.saveViewState()),R.current.setModel(n),f&&R.current.restoreViewState(le.get(c)))}),[c],j),re((()=>{R.current.updateOptions(s)}),[s],j),re((()=>{R.current.getOption(k.current.editor.EditorOption.readOnly)?R.current.setValue(o):o!==R.current.getValue()&&(R.current.executeEdits("",[{range:R.current.getModel().getFullModelRange(),text:o,forceMoveMarkers:!0}]),R.current.pushUndoStop())}),[o],j),re((()=>{k.current.editor.setModelLanguage(R.current.getModel(),i)}),[i],j),re((()=>{void 0!==a&&R.current.revealLine(a)}),[a],j),re((()=>{k.current.editor.setTheme(u)}),[u],j);const A=(0,r.useCallback)((()=>{if(!L.current){C.current(k.current);const r=c||n,a=ie(k.current,o||e,t||i,r);R.current=k.current.editor.create(S.current,{model:a,automaticLayout:!0,...s},d),f&&R.current.restoreViewState(le.get(r)),k.current.editor.setTheme(u),M(!0),L.current=!0}}),[e,t,n,o,i,c,s,d,f,u]);return(0,r.useEffect)((()=>{j&&T.current(R.current,k.current)}),[j]),(0,r.useEffect)((()=>{!P&&!j&&A()}),[P,j,A]),V.current=o,(0,r.useEffect)((()=>{var e,t;j&&w&&(null===(e=x.current)||void 0===e||e.dispose(),x.current=null===(t=R.current)||void 0===t?void 0:t.onDidChangeModelContent((e=>{w(R.current.getValue(),e)})))}),[j,w]),(0,r.useEffect)((()=>{if(j){const e=k.current.editor.onDidChangeMarkers((e=>{var t;const n=null===(t=R.current.getModel())||void 0===t?void 0:t.uri;if(n){if(e.find((e=>e.path===n.path))){const e=k.current.editor.getModelMarkers({resource:n});null==O||O(e)}}}));return()=>{null==e||e.dispose()}}}),[j,O]),r.createElement(te,{width:p,height:h,isEditorReady:j,loading:l,_ref:S,className:y,wrapperProps:m})}se.propTypes={defaultValue:Z().string,defaultPath:Z().string,defaultLanguage:Z().string,value:Z().string,language:Z().string,path:Z().string,theme:Z().string,line:Z().number,loading:Z().oneOfType([Z().element,Z().string]),options:Z().object,overrideServices:Z().object,saveViewState:Z().bool,keepCurrentModel:Z().bool,width:Z().oneOfType([Z().number,Z().string]),height:Z().oneOfType([Z().number,Z().string]),className:Z().string,wrapperProps:Z().object,beforeMount:Z().func,onMount:Z().func,onChange:Z().func,onValidate:Z().func},se.defaultProps={theme:"light",loading:"Loading...",options:{},overrideServices:{},saveViewState:!0,keepCurrentModel:!1,width:"100%",height:"100%",wrapperProps:{},beforeMount:oe,onMount:oe,onValidate:oe};const de=se;const fe=(0,r.memo)(de);var ge=n(48641),pe=n(85893);function he(){return(0,pe.jsxs)(o.Z,{title:"Hello",description:"Hello React Page",children:[(0,pe.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",fontSize:"20px"},children:(0,pe.jsxs)("p",{children:["Edit ",(0,pe.jsx)("code",{children:"pages/helloReact.js"})," and save to reload."]})}),(0,pe.jsxs)(ge.Ug,{children:[(0,pe.jsx)(fe,{height:"40vh",defaultLanguage:"javascript",defaultValue:"// some comment",onMount:e=>{e.addCommand(monaco.KeyCode.F9,(function(){alert("F9 pressed!")}))}}),(0,pe.jsx)(ge.xu,{children:"test"}),(0,pe.jsx)(ge.xu,{children:"test"})]})]})}}}]);