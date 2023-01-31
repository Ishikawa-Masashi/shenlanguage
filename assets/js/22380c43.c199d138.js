"use strict";(self.webpackChunkchakra_ui_docs=self.webpackChunkchakra_ui_docs||[]).push([[8546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Remix",description:"A guide for installing Chakra UI with Remix projects",tags:["remix"],author:"noobinthisgame",category:"frameworks",sidebar_position:60},i=void 0,l={unversionedId:"frameworks/remix-guide",id:"frameworks/remix-guide",title:"Remix",description:"A guide for installing Chakra UI with Remix projects",source:"@site/content/getting-started/frameworks/remix-guide.mdx",sourceDirName:"frameworks",slug:"/frameworks/remix-guide",permalink:"/frameworks/remix-guide",draft:!1,tags:[{label:"remix",permalink:"/tags/remix"}],version:"current",lastUpdatedBy:"IshikawaMasashi",lastUpdatedAt:1675135144,formattedLastUpdatedAt:"Jan 31, 2023",sidebarPosition:60,frontMatter:{title:"Remix",description:"A guide for installing Chakra UI with Remix projects",tags:["remix"],author:"noobinthisgame",category:"frameworks",sidebar_position:60},sidebar:"defaultSidebar",previous:{title:"RedwoodJS",permalink:"/frameworks/redwoodjs-guide"},next:{title:"Vite",permalink:"/frameworks/vite-guide"}},c={},s=[{value:"1. Installation",id:"1-installation",level:2},{value:"2. Provider Setup",id:"2-provider-setup",level:2},{value:"ChakraProvider Props",id:"chakraprovider-props",level:3},{value:"3. Optional Setup",id:"3-optional-setup",level:2},{value:"Customizing Theme",id:"customizing-theme",level:3},{value:"Add colorModeManager",id:"add-colormodemanager",level:3},{value:"Notes on TypeScript \ud83d\udea8",id:"notes-on-typescript-",level:3},{value:"4. Community boilerplates",id:"4-community-boilerplates",level:2}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-installation"},"1. Installation"),(0,a.kt)("p",null,"Inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"Remix")," project root directory, install Chakra UI by running either\nof the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6 @emotion/server@^11\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6 @emotion/server@^11\n")),(0,a.kt)("h2",{id:"2-provider-setup"},"2. Provider Setup"),(0,a.kt)("p",null,"To prevent loss of styles we need to do some changes on the server-side and\nclient-side."),(0,a.kt)("p",null,"We","'","ll create a ",(0,a.kt)("inlineCode",{parentName:"p"},"context.tsx")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="context.tsx"',title:'"context.tsx"'},"import React, { createContext } from 'react';\n\nexport interface ServerStyleContextData {\n  key: string;\n  ids: Array<string>;\n  css: string;\n}\n\nexport const ServerStyleContext = createContext<\n  ServerStyleContextData[] | null\n>(null);\n\nexport interface ClientStyleContextData {\n  reset: () => void;\n}\n\nexport const ClientStyleContext = createContext<ClientStyleContextData | null>(\n  null\n);\n")),(0,a.kt)("p",null,"Next on the agenda is to create the emotion cache file. To do that, create a new\n",(0,a.kt)("inlineCode",{parentName:"p"},"createEmotionCache.ts")," file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="createEmotionCache.ts"',title:'"createEmotionCache.ts"'},"import createCache from '@emotion/cache';\n\nexport default function createEmotionCache() {\n  return createCache({ key: 'css' });\n}\n")),(0,a.kt)("p",null,"After creating the emotion cache, we need to modify the entry files for both the\nclient and the server. We'll use our ",(0,a.kt)("inlineCode",{parentName:"p"},"createEmotionCache")," function here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="entry.client.tsx"',title:'"entry.client.tsx"'},"import React, { useState } from 'react';\nimport { hydrate } from 'react-dom';\nimport { CacheProvider } from '@emotion/react';\nimport { RemixBrowser } from '@remix-run/react';\n\nimport { ClientStyleContext } from './context';\nimport createEmotionCache from './createEmotionCache';\n\ninterface ClientCacheProviderProps {\n  children: React.ReactNode;\n}\n\nfunction ClientCacheProvider({ children }: ClientCacheProviderProps) {\n  const [cache, setCache] = useState(createEmotionCache());\n\n  function reset() {\n    setCache(createEmotionCache());\n  }\n\n  return (\n    <ClientStyleContext.Provider value={{ reset }}>\n      <CacheProvider value={cache}>{children}</CacheProvider>\n    </ClientStyleContext.Provider>\n  );\n}\n\nhydrate(\n  <ClientCacheProvider>\n    <RemixBrowser />\n  </ClientCacheProvider>,\n  document\n);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="entry.server.tsx"',title:'"entry.server.tsx"'},"import { renderToString } from 'react-dom/server';\nimport { CacheProvider } from '@emotion/react';\nimport createEmotionServer from '@emotion/server/create-instance';\nimport { RemixServer } from '@remix-run/react';\nimport type { EntryContext } from '@remix-run/node'; // Depends on the runtime you choose\n\nimport { ServerStyleContext } from './context';\nimport createEmotionCache from './createEmotionCache';\n\nexport default function handleRequest(\n  request: Request,\n  responseStatusCode: number,\n  responseHeaders: Headers,\n  remixContext: EntryContext\n) {\n  const cache = createEmotionCache();\n  const { extractCriticalToChunks } = createEmotionServer(cache);\n\n  const html = renderToString(\n    <ServerStyleContext.Provider value={null}>\n      <CacheProvider value={cache}>\n        <RemixServer context={remixContext} url={request.url} />\n      </CacheProvider>\n    </ServerStyleContext.Provider>\n  );\n\n  const chunks = extractCriticalToChunks(html);\n\n  const markup = renderToString(\n    <ServerStyleContext.Provider value={chunks.styles}>\n      <CacheProvider value={cache}>\n        <RemixServer context={remixContext} url={request.url} />\n      </CacheProvider>\n    </ServerStyleContext.Provider>\n  );\n\n  responseHeaders.set('Content-Type', 'text/html');\n\n  return new Response(`<!DOCTYPE html>${markup}`, {\n    status: responseStatusCode,\n    headers: responseHeaders,\n  });\n}\n")),(0,a.kt)("p",null,"Inside our ",(0,a.kt)("inlineCode",{parentName:"p"},"root.tsx")," file we'll create a ",(0,a.kt)("inlineCode",{parentName:"p"},"Document")," wrapper and then we'll wrap\nour ",(0,a.kt)("inlineCode",{parentName:"p"},"App")," with the Document."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="root.tsx"',title:'"root.tsx"'},"import React, { useContext, useEffect } from 'react';\nimport { withEmotionCache } from '@emotion/react';\nimport { ChakraProvider } from '@chakra-ui/react';\nimport {\n  Links,\n  LiveReload,\n  Meta,\n  Outlet,\n  Scripts,\n  ScrollRestoration,\n} from '@remix-run/react';\nimport { MetaFunction, LinksFunction } from '@remix-run/node'; // Depends on the runtime you choose\n\nimport { ServerStyleContext, ClientStyleContext } from './context';\n\nexport const meta: MetaFunction = () => ({\n  charset: 'utf-8',\n  title: 'New Remix App',\n  viewport: 'width=device-width,initial-scale=1',\n});\n\nexport let links: LinksFunction = () => {\n  return [\n    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },\n    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },\n    {\n      rel: 'stylesheet',\n      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',\n    },\n  ];\n};\n\ninterface DocumentProps {\n  children: React.ReactNode;\n}\n\nconst Document = withEmotionCache(\n  ({ children }: DocumentProps, emotionCache) => {\n    const serverStyleData = useContext(ServerStyleContext);\n    const clientStyleData = useContext(ClientStyleContext);\n\n    // Only executed on client\n    useEffect(() => {\n      // re-link sheet container\n      emotionCache.sheet.container = document.head;\n      // re-inject tags\n      const tags = emotionCache.sheet.tags;\n      emotionCache.sheet.flush();\n      tags.forEach((tag) => {\n        (emotionCache.sheet as any)._insertTag(tag);\n      });\n      // reset cache to reapply global styles\n      clientStyleData?.reset();\n    }, []);\n\n    return (\n      <html lang='en'>\n        <head>\n          <Meta />\n          <Links />\n          {serverStyleData?.map(({ key, ids, css }) => (\n            <style\n              key={key}\n              data-emotion={`${key} ${ids.join(' ')}`}\n              dangerouslySetInnerHTML={{ __html: css }}\n            />\n          ))}\n        </head>\n        <body>\n          {children}\n          <ScrollRestoration />\n          <Scripts />\n          <LiveReload />\n        </body>\n      </html>\n    );\n  }\n);\n")),(0,a.kt)("p",null,"And then we'll wrap the App just like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export default function App() {\n  return (\n    <Document>\n      <ChakraProvider>\n        <Outlet />\n      </ChakraProvider>\n    </Document>\n  );\n}\n")),(0,a.kt)("h3",{id:"chakraprovider-props"},"ChakraProvider Props"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resetCSS"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"true")),(0,a.kt)("td",{parentName:"tr",align:null},"automatically includes ",(0,a.kt)("inlineCode",{parentName:"td"},"<CSSReset />"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"theme"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Theme")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"@chakra-ui/theme")),(0,a.kt)("td",{parentName:"tr",align:null},"optional custom theme")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"colorModeManager"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"StorageManager")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"localStorageManager")),(0,a.kt)("td",{parentName:"tr",align:null},"manager to persist a users color mode preference in")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"portalZIndex"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"undefined")),(0,a.kt)("td",{parentName:"tr",align:null},"common z-index to use for ",(0,a.kt)("inlineCode",{parentName:"td"},"Portal"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You're good to go with steps 1 and 2. However, if you'd love to\ntake it a step further, check out step 3.")),(0,a.kt)("h2",{id:"3-optional-setup"},"3. Optional Setup"),(0,a.kt)("h3",{id:"customizing-theme"},"Customizing Theme"),(0,a.kt)("p",null,"If you intend to customise the default theme object to match your design\nrequirements, you can extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"theme")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"@chakra-ui/react"),"."),(0,a.kt)("p",null,"Chakra UI provides an ",(0,a.kt)("inlineCode",{parentName:"p"},"extendTheme")," function that deep merges the default theme\nwith your customizations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { extendTheme, ChakraProvider } from '@chakra-ui/react';\n\nconst colors = {\n  brand: {\n    900: '#1a365d',\n    800: '#153e75',\n    700: '#2a69ac',\n  },\n};\n\nconst theme = extendTheme({ colors });\n\nexport default function App() {\n  return (\n    <Document>\n      <ChakraProvider theme={theme}>\n        <Outlet />\n      </ChakraProvider>\n    </Document>\n  );\n}\n")),(0,a.kt)("h3",{id:"add-colormodemanager"},"Add colorModeManager"),(0,a.kt)("p",null,"Remix is server-side rendered, so there will be color mode ",(0,a.kt)("inlineCode",{parentName:"p"},"flashing"),", because chakra stores color mode in ",(0,a.kt)("inlineCode",{parentName:"p"},"localstorage")," by default."),(0,a.kt)("p",null,"We will store color mode value in ",(0,a.kt)("inlineCode",{parentName:"p"},"cookie")," to tell our app to render it in user color mode."),(0,a.kt)("p",null,"Here's how to fix it:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create loader in your ",(0,a.kt)("inlineCode",{parentName:"p"},"root.tsx")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// This will return cookies\nexport const loader: LoaderFunction = async ({ request }) => {\n  // first time users will not have any cookies and you may not return\n  // undefined here, hence ?? is necessary\n  return request.headers.get('cookie') ?? '';\n};\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Give ",(0,a.kt)("inlineCode",{parentName:"p"},"ChakraProvider")," cookies from loader"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="root.tsx"',title:'"root.tsx"'},"// In your App function\nconst cookies = useLoaderData();\n// ...\n// Add colorModeManager to ChakraProvider\nreturn (\n  <Document>\n    <ChakraProvider\n      theme={theme}\n      colorModeManager={\n        typeof cookies === 'string'\n          ? cookieStorageManagerSSR(cookies)\n          : localStorageManager\n      }\n    >\n      {/* ... */}\n    </ChakraProvider>\n  </Document>\n);\n")))),(0,a.kt)("p",null,"That's it!"),(0,a.kt)("h3",{id:"notes-on-typescript-"},"Notes on TypeScript \ud83d\udea8"),(0,a.kt)("p",null,"Please note that when adding Chakra UI to a TypeScript project, a minimum\nTypeScript version of ",(0,a.kt)("inlineCode",{parentName:"p"},"4.1.0")," is required."),(0,a.kt)("h2",{id:"4-community-boilerplates"},"4. Community boilerplates"),(0,a.kt)("p",null,"If you're starting a new project and would like to cut down on configuration\ntime, you can use some of these community boilerplates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/aacevski/chakra-remix-boilerplate"},"https://github.com/aacevski/chakra-remix-boilerplate")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/NoQuarterTeam/boilerplate-remix"},"https://github.com/NoQuarterTeam/boilerplate-remix"))))}p.isMDXComponent=!0}}]);