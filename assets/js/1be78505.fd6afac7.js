"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[9514,4972],{19963:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(67294),s=n(86010),i=n(10833),o=n(35281),l=n(43320),r=n(52802),c=n(74477),d=n(1116),u=n(11236),m=n(95999),h=n(12466),b=n(85936);const p="backToTopButton_sjWU",x="backToTopButtonShow_xfvO";var j=n(85893);function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,s]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,h.Ct)();return(0,h.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(i.current?i.current=!1:a>=o?(l(),s(!1)):a<t?s(!1):a+window.innerHeight<document.documentElement.scrollHeight&&s(!0))})),(0,b.S)((e=>{e.location.hash&&(i.current=!0,s(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return(0,j.jsx)("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,s.Z)("clean-btn",o.k.common.backToTopButton,p,e&&x),type:"button",onClick:t})}var v=n(16550),g=n(87524),_=n(86668),k=n(87846);function C(e){return(0,j.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,j.jsxs)("g",{fill:"#7a7a7a",children:[(0,j.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,j.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const I="collapseSidebarButton_PEFL",N="collapseSidebarButtonIcon_kv0_";function S(e){let{onClick:t}=e;return(0,j.jsx)("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,s.Z)("button button--secondary button--outline",I),onClick:t,children:(0,j.jsx)(C,{className:N})})}var T=n(59689),Z=n(902);const y=Symbol("EmptyContext"),w=a.createContext(y);function L(e){let{children:t}=e;const[n,s]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:s})),[n]);return(0,j.jsx)(w.Provider,{value:i,children:t})}var E=n(86043),M=n(48596),A=n(39960),B=n(72389);function F(e){let{categoryLabel:t,onClick:n}=e;return(0,j.jsx)("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){let{item:t,onItemClick:n,activePath:i,level:l,index:c,...d}=e;const{items:u,label:m,collapsible:h,className:b,href:p}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,_.L)(),f=function(e){const t=(0,B.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,r.Wl)(e):void 0),[e,t])}(t),v=(0,r._F)(t,i),g=(0,M.Mg)(p,i),{collapsed:k,setCollapsed:C}=(0,E.u)({initialState:()=>!!h&&(!v&&t.collapsed)}),{expandedItem:I,setExpandedItem:N}=function(){const e=(0,a.useContext)(w);if(e===y)throw new Z.i6("DocSidebarItemsExpandedStateProvider");return e}(),S=function(e){void 0===e&&(e=!k),N(e?null:c),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:s}=e;const i=(0,Z.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&s(!1)}),[t,i,n,s])}({isActive:v,collapsed:k,updateCollapsed:S}),(0,a.useEffect)((()=>{h&&null!=I&&I!==c&&x&&C(!0)}),[h,I,c,C,x]),(0,j.jsxs)("li",{className:(0,s.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":k},b),children:[(0,j.jsxs)("div",{className:(0,s.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,j.jsx)(A.Z,{className:(0,s.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!p&&h,"menu__link--active":v}),onClick:h?e=>{null==n||n(t),p?S(!1):(e.preventDefault(),S())}:()=>{null==n||n(t)},"aria-current":g?"page":void 0,"aria-expanded":h?!k:void 0,href:h?f??"#":f,...d,children:m}),p&&h&&(0,j.jsx)(F,{categoryLabel:m,onClick:e=>{e.preventDefault(),S()}})]}),(0,j.jsx)(E.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k,children:(0,j.jsx)(q,{items:u,tabIndex:k?-1:0,onItemClick:n,activePath:i,level:l+1})})]})}var H=n(13919),W=n(39471);const D="menuExternalLink_NmtK";function R(e){let{item:t,onItemClick:n,activePath:a,level:i,index:l,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,b=(0,r._F)(t,a),p=(0,H.Z)(d);return(0,j.jsx)("li",{className:(0,s.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,j.jsxs)(A.Z,{className:(0,s.Z)("menu__link",!p&&D,{"menu__link--active":b}),autoAddBaseUrl:h,"aria-current":b?"page":void 0,to:d,...p&&{onClick:n?()=>n(t):void 0},...c,children:[u,!p&&(0,j.jsx)(W.Z,{})]})},u)}const z="menuHtmlItem_M9Kj";function U(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:r}=t;return(0,j.jsx)("li",{className:(0,s.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),l&&[z,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:i}},a)}function V(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,j.jsx)(P,{item:t,...n});case"html":return(0,j.jsx)(U,{item:t,...n});default:return(0,j.jsx)(R,{item:t,...n})}}function K(e){let{items:t,...n}=e;return(0,j.jsx)(L,{children:t.map(((e,t)=>(0,j.jsx)(V,{item:e,index:t,...n},t)))})}const q=(0,a.memo)(K),G="menu_SIkG",Y="menuWithAnnouncementBar_GW3s";function O(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,h.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,j.jsx)("nav",{className:(0,s.Z)("menu thin-scrollbar",G,l&&Y,i),children:(0,j.jsx)("ul",{className:(0,s.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,j.jsx)(q,{items:n,activePath:t,level:1})})})}const X="sidebar_njMd",J="sidebarWithHideableNavbar_wUlq",Q="sidebarHidden_VK0M",$="sidebarLogo_isFc";function ee(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:l}}}=(0,_.L)();return(0,j.jsxs)("div",{className:(0,s.Z)(X,o&&J,i&&Q),children:[o&&(0,j.jsx)(k.Z,{tabIndex:-1,className:$}),(0,j.jsx)(O,{path:t,sidebar:n}),l&&(0,j.jsx)(S,{onClick:a})]})}const te=a.memo(ee);var ne=n(13102),ae=n(72961);const se=e=>{let{sidebar:t,path:n}=e;const a=(0,ae.e)();return(0,j.jsx)("ul",{className:(0,s.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,j.jsx)(q,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ie(e){return(0,j.jsx)(ne.Zo,{component:se,props:e})}const oe=a.memo(ie);function le(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,j.jsxs)(j.Fragment,{children:[n&&(0,j.jsx)(te,{...e}),a&&(0,j.jsx)(oe,{...e})]})}const re="expandButton_m80_",ce="expandButtonIcon_BlDH";function de(e){let{toggleSidebar:t}=e;return(0,j.jsx)("div",{className:re,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,j.jsx)(C,{className:ce})})}const ue="docSidebarContainer_b6E3",me="docSidebarContainerHidden_b3ry";function he(e){let{children:t}=e;const n=(0,d.V)();return(0,j.jsx)(a.Fragment,{children:t},(null==n?void 0:n.name)??"noSidebar")}function be(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,v.TH)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),i((e=>!e))}),[i,r]);return(0,j.jsxs)("aside",{className:(0,s.Z)(o.k.docs.docSidebarContainer,ue,n&&me),onTransitionEnd:e=>{e.currentTarget.classList.contains(ue)&&n&&c(!0)},children:[(0,j.jsx)(he,{children:(0,j.jsx)(le,{sidebar:t,path:l,onCollapse:d,isHidden:r})}),r&&(0,j.jsx)(de,{toggleSidebar:d})]})}const pe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function xe(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,d.V)();return(0,j.jsx)("main",{className:(0,s.Z)(pe.docMainContainer,(t||!a)&&pe.docMainContainerEnhanced),children:(0,j.jsx)("div",{className:(0,s.Z)("container padding-top--md padding-bottom--lg",pe.docItemWrapper,t&&pe.docItemWrapperEnhanced),children:n})})}const je="docPage__5DB",fe="docsWrapper_BCFX";function ve(e){let{children:t}=e;const n=(0,d.V)(),[s,i]=(0,a.useState)(!1);return(0,j.jsxs)(u.Z,{wrapperClassName:fe,children:[(0,j.jsx)(f,{}),(0,j.jsxs)("div",{className:je,children:[n&&(0,j.jsx)(be,{sidebar:n.items,hiddenSidebarContainer:s,setHiddenSidebarContainer:i}),(0,j.jsx)(xe,{hiddenSidebarContainer:s,children:t})]})]})}var ge=n(4972),_e=n(90197);function ke(e){const{versionMetadata:t}=e;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(_e.Z,{version:t.version,tag:(0,l.os)(t.pluginId,t.version)}),(0,j.jsx)(i.d,{children:t.noIndex&&(0,j.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})]})}function Ce(e){const{versionMetadata:t}=e,n=(0,r.hI)(e);if(!n)return(0,j.jsx)(ge.default,{});const{docElement:a,sidebarName:l,sidebarItems:u}=n;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(ke,{...e}),(0,j.jsx)(i.FG,{className:(0,s.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className),children:(0,j.jsx)(c.q,{version:t,children:(0,j.jsx)(d.b,{name:l,items:u,children:(0,j.jsx)(ve,{children:a})})})})]})}},4972:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});n(67294);var a=n(95999),s=n(10833),i=n(11236),o=n(85893);function l(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),(0,o.jsx)(i.Z,{children:(0,o.jsx)("main",{className:"container margin-vert--xl",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsx)("h1",{className:"hero__title",children:(0,o.jsx)(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.jsx)("p",{children:(0,o.jsx)(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})})]})}},74477:(e,t,n)=>{n.d(t,{E:()=>r,q:()=>l});var a=n(67294),s=n(902),i=n(85893);const o=a.createContext(null);function l(e){let{children:t,version:n}=e;return(0,i.jsx)(o.Provider,{value:n,children:t})}function r(){const e=(0,a.useContext)(o);if(null===e)throw new s.i6("DocsVersionProvider");return e}}}]);