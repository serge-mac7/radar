(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3941)}])},8342:function(e,t,n){"use strict";let r=n(6513),o=r.basePath&&"/"!==r.basePath?r.basePath:"";e.exports={basePath:o,output:"export",trailingSlash:!0,reactStrictMode:!0}},9108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return s.ReadonlyURLSearchParams},RedirectType:function(){return s.RedirectType},ServerInsertedHTMLContext:function(){return l.ServerInsertedHTMLContext},notFound:function(){return s.notFound},permanentRedirect:function(){return s.permanentRedirect},redirect:function(){return s.redirect},useParams:function(){return p},usePathname:function(){return d},useRouter:function(){return f},useSearchParams:function(){return c},useSelectedLayoutSegment:function(){return g},useSelectedLayoutSegments:function(){return h},useServerInsertedHTML:function(){return l.useServerInsertedHTML}});let r=n(7294),o=n(5716),i=n(7353),a=n(8575),u=n(4565),s=n(8670),l=n(4439);function c(){let e=(0,r.useContext)(i.SearchParamsContext);return(0,r.useMemo)(()=>e?new s.ReadonlyURLSearchParams(e):null,[e])}function d(){return(0,r.useContext)(i.PathnameContext)}function f(){let e=(0,r.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function p(){return(0,r.useContext)(i.PathParamsContext)}function h(e){void 0===e&&(e="children");let t=(0,r.useContext)(o.LayoutRouterContext);return t?function e(t,n,r,o){let i;if(void 0===r&&(r=!0),void 0===o&&(o=[]),r)i=t[1][n];else{var s;let e=t[1];i=null!=(s=e.children)?s:Object.values(e)[0]}if(!i)return o;let l=i[0],c=(0,a.getSegmentValue)(l);return!c||c.startsWith(u.PAGE_SEGMENT_KEY)?o:(o.push(c),e(i,n,!1,o))}(t.tree,e):null}function g(e){void 0===e&&(e="children");let t=h(e);if(!t||0===t.length)return null;let n="children"===e?t[0]:t[t.length-1];return n===u.DEFAULT_SEGMENT_KEY?null:n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8670:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ReadonlyURLSearchParams:function(){return a},RedirectType:function(){return r.RedirectType},notFound:function(){return o.notFound},permanentRedirect:function(){return r.permanentRedirect},redirect:function(){return r.redirect}});let r=n(8384),o=n(5403);class i extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class a extends URLSearchParams{append(){throw new i}delete(){throw new i}set(){throw new i}sort(){throw new i}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5403:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{isNotFoundError:function(){return o},notFound:function(){return r}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1109:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return n}}),(r=n||(n={}))[r.SeeOther=303]="SeeOther",r[r.TemporaryRedirect=307]="TemporaryRedirect",r[r.PermanentRedirect=308]="PermanentRedirect",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8384:function(e,t,n){"use strict";var r,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{RedirectType:function(){return r},getRedirectError:function(){return l},getRedirectStatusCodeFromError:function(){return g},getRedirectTypeFromError:function(){return h},getURLFromRedirectError:function(){return p},isRedirectError:function(){return f},permanentRedirect:function(){return d},redirect:function(){return c}});let i=n(5714),a=n(1747),u=n(1109),s="NEXT_REDIRECT";function l(e,t,n){void 0===n&&(n=u.RedirectStatusCode.TemporaryRedirect);let r=Error(s);r.digest=s+";"+t+";"+e+";"+n+";";let o=i.requestAsyncStorage.getStore();return o&&(r.mutableCookies=o.mutableCookies),r}function c(e,t){void 0===t&&(t="replace");let n=a.actionAsyncStorage.getStore();throw l(e,t,(null==n?void 0:n.isAction)?u.RedirectStatusCode.SeeOther:u.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let n=a.actionAsyncStorage.getStore();throw l(e,t,(null==n?void 0:n.isAction)?u.RedirectStatusCode.SeeOther:u.RedirectStatusCode.PermanentRedirect)}function f(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,n,r,o]=e.digest.split(";",4),i=Number(o);return t===s&&("replace"===n||"push"===n)&&"string"==typeof r&&!isNaN(i)&&i in u.RedirectStatusCode}function p(e){return f(e)?e.digest.split(";",3)[2]:null}function h(e){if(!f(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function g(e){if(!f(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(o=r||(r={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8575:function(e,t){"use strict";function n(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return n}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6101:function(e,t){"use strict";var n,r,o,i;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return d},ACTION_NAVIGATE:function(){return u},ACTION_PREFETCH:function(){return c},ACTION_REFRESH:function(){return a},ACTION_RESTORE:function(){return s},ACTION_SERVER_ACTION:function(){return f},ACTION_SERVER_PATCH:function(){return l},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let a="refresh",u="navigate",s="restore",l="server-patch",c="prefetch",d="fast-refresh",f="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(i=r||(r={})).fresh="fresh",i.reusable="reusable",i.expired="expired",i.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7670:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(1297),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return b}});let r=n(8754),o=n(5893),i=r._(n(7294)),a=n(9975),u=n(2712),s=n(8547),l=n(4350),c=n(8109),d=n(4494),f=n(5716),p=n(388),h=n(7670),g=n(6220),v=n(6101),m=new Set;function y(e,t,n,r,o,i){if(i||(0,u.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(m.has(o))return;m.add(o)}(async()=>i?e.prefetch(t,o):e.prefetch(t,n,r))().catch(e=>{})}}function x(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let b=i.default.forwardRef(function(e,t){let n,r;let{href:s,as:m,children:b,prefetch:w=null,passHref:_,replace:j,shallow:M,scroll:P,locale:O,onClick:S,onMouseEnter:R,onTouchStart:C,legacyBehavior:L=!1,...T}=e;n=b,L&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let N=i.default.useContext(d.RouterContext),k=i.default.useContext(f.AppRouterContext),E=null!=N?N:k,A=!N,H=!1!==w,F=null===w?v.PrefetchKind.AUTO:v.PrefetchKind.FULL,{href:I,as:U}=i.default.useMemo(()=>{if(!N){let e=x(s);return{href:e,as:m?x(m):e}}let[e,t]=(0,a.resolveHref)(N,s,!0);return{href:e,as:m?(0,a.resolveHref)(N,m):t||e}},[N,s,m]),V=i.default.useRef(I),z=i.default.useRef(U);L&&(r=i.default.Children.only(n));let B=L?r&&"object"==typeof r&&r.ref:t,[Z,q,D]=(0,p.useIntersection)({rootMargin:"200px"}),W=i.default.useCallback(e=>{(z.current!==U||V.current!==I)&&(D(),z.current=U,V.current=I),Z(e),B&&("function"==typeof B?B(e):"object"==typeof B&&(B.current=e))},[U,B,I,D,Z]);i.default.useEffect(()=>{E&&q&&H&&y(E,I,U,{locale:O},{kind:F},A)},[U,I,q,O,H,null==N?void 0:N.locale,E,A,F]);let K={ref:W,onClick(e){L||"function"!=typeof S||S(e),L&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),E&&!e.defaultPrevented&&function(e,t,n,r,o,a,s,l,c){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,u.isLocalURL)(n)))return;e.preventDefault();let f=()=>{let e=null==s||s;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};c?i.default.startTransition(f):f()}(e,E,I,U,j,M,P,O,A)},onMouseEnter(e){L||"function"!=typeof R||R(e),L&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),E&&(H||!A)&&y(E,I,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:F},A)},onTouchStart:function(e){L||"function"!=typeof C||C(e),L&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),E&&(H||!A)&&y(E,I,U,{locale:O,priority:!0,bypassPrefetchedCheck:!0},{kind:F},A)}};if((0,l.isAbsoluteUrl)(U))K.href=U;else if(!L||_||"a"===r.type&&!("href"in r.props)){let e=void 0!==O?O:null==N?void 0:N.locale,t=(null==N?void 0:N.isLocaleDomain)&&(0,h.getDomainLocale)(U,e,null==N?void 0:N.locales,null==N?void 0:N.domainLocales);K.href=t||(0,g.addBasePath)((0,c.addLocale)(U,e,null==N?void 0:N.defaultLocale))}return L?i.default.cloneElement(r,K):(0,o.jsx)("a",{...T,...K,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let r=n(7294),o=n(460),i="function"==typeof IntersectionObserver,a=new Map,u=[];function s(e){let{rootRef:t,rootMargin:n,disabled:s}=e,l=s||!i,[c,d]=(0,r.useState)(!1),f=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{f.current=e},[]);return(0,r.useEffect)(()=>{if(i){if(l||c)return;let e=f.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:i}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=u.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=a.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},u.push(n),a.set(n,t),t}(n);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(r);let e=u.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&u.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!c){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,n,t,c,f.current]),[p,c,(0,r.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4439:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return i}});let r=n(1757)._(n(7294)),o=r.default.createContext(null);function i(e){let t=(0,r.useContext)(o);t&&t(e)}},8011:function(e,t,n){"use strict";var r=n(5893);n(7294),t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",...e,children:(0,r.jsx)("rect",{width:12,height:12,x:2,y:2,rx:3,transform:"rotate(-45 8 8)"})})},5956:function(e,t,n){"use strict";var r=n(5893);n(7294),t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",...e,children:(0,r.jsx)("circle",{cx:8,cy:8,r:6})})},9327:function(e,t,n){"use strict";var r=n(5893);n(7294),t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",...e,children:(0,r.jsx)("path",{d:"m.247 10.212 5.02-8.697a2 2 0 0 1 3.465 0l5.021 8.697a2 2 0 0 1-1.732 3H1.98a2 2 0 0 1-1.732-3z"})})},8699:function(e,t,n){"use strict";var r=n(5893);n(7294),t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"m18.7 1.4-7.68 7.73-7.67-7.72c-.54-.54-1.4-.54-1.89 0-.54.54-.54 1.41 0 1.89l7.67 7.73L1.4 18.7c-.54.54-.54 1.41 0 1.89.54.54 1.41.54 1.89 0l7.73-7.68 7.68 7.68c.54.54 1.41.54 1.89 0 .49-.54.54-1.41 0-1.89l-7.68-7.68 7.68-7.67c.54-.54.54-1.4 0-1.89-.48-.54-1.35-.54-1.89-.06"})})},5917:function(e,t,n){"use strict";var r=n(5893);n(7294),t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.67 1C4.22 1 3 2.22 3 3.67v15.11C3 20.01 4 21 5.22 21h13.11c.35 0 .67-.32.67-.67V5.67c0-.39-.29-.67-.67-.67C17.69 5 17 4.31 17 3.67s.69-1.33 1.33-1.33c.35 0 .67-.31.67-.67S18.69 1 18.33 1H5.66Zm0 1.33h10.37c-.23.39-.37.85-.37 1.33s.14.94.37 1.33H5.67c-.64 0-1.33-.69-1.33-1.33s.69-1.33 1.33-1.33M4.34 5.96c.39.23.85.37 1.33.37h12v13.33H5.22a.88.88 0 0 1-.89-.86V5.97Zm2.44 2.81c-.37.01-.65.32-.64.69.01.35.29.63.64.64h8.44c.37-.01.65-.32.64-.69a.66.66 0 0 0-.64-.64zm0 3.56a.67.67 0 0 0 0 1.34h8.44a.67.67 0 0 0 0-1.34zm0 3.56c-.37.01-.65.32-.64.69.01.35.29.63.64.64h8.44c.37-.01.65-.32.64-.69a.66.66 0 0 0-.64-.64z"})})},1429:function(e,t,n){"use strict";var r=n(5893);n(7294),t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M9.71.38h-.64v2.61C4.22 3.32.38 7.36.38 12.29s4.19 9.33 9.33 9.33 8.97-3.84 9.3-8.69h2.61v-.64C21.62 5.72 16.28.38 9.71.38m0 19.95c-4.44 0-8.05-3.61-8.05-8.05s3.26-7.69 7.4-8.02v8.66h8.66c-.33 4.14-3.8 7.4-8.02 7.4Zm9.33-8.69h-8.69V1.69c5.34.32 9.63 4.61 9.95 9.96h-1.27Z"})})},6611:function(e,t,n){"use strict";var r=n(5893);n(7294),t.Z=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",...e,children:[(0,r.jsx)("path",{d:"M11 22C4.9 22 0 17 0 11S4.9 0 11 0c6 0 11 4.9 11 11s-5 11-11 11m0-20.5c-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5 9.5-4.2 9.5-9.5-4.3-9.5-9.5-9.5"}),(0,r.jsx)("path",{fillRule:"evenodd",d:"M11 16.65c-.7 0-1.2-.5-1.2-1.2s.6-1.2 1.2-1.2 1.2.6 1.2 1.2-.5 1.2-1.2 1.2m2.8-6.9c-.1.2-.3.4-.4.5l-.4.4c-.2.1-.3.3-.4.4l-.3.3c-.2.3-.3.6-.3 1v.7h-1.8v-1c0-.3 0-.6.2-.9s.4-.6.7-.8l1.1-1.1c.2-.3.4-.6.4-1s-.1-.7-.4-.9-.6-.4-1-.4-.7.1-1 .4-.4.6-.5 1h-2c.1-.8.5-1.6 1.1-2.2.7-.5 1.5-.8 2.3-.8s1.6.2 2.3.8q.9.75.9 2.1c0 .5-.2 1-.5 1.5"})]})},3018:function(e,t,n){"use strict";var r=n(5893);n(7294),t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 22 22",...e,children:(0,r.jsx)("path",{fillRule:"evenodd",d:"m20.6 18.31-4.01-4.01c2.44-3.37 2.15-8.11-.89-11.14A8.55 8.55 0 0 0 9.61.64c-2.28 0-4.48.91-6.09 2.52-3.36 3.36-3.36 8.82 0 12.18a8.55 8.55 0 0 0 6.09 2.52c1.78 0 3.55-.55 5.05-1.64l4.01 4.01c.26.26.61.4.96.4.75 0 1.36-.61 1.36-1.36 0-.36-.14-.71-.4-.96ZM4.87 13.99a6.71 6.71 0 0 1 0-9.49 6.7 6.7 0 0 1 4.74-1.97c1.79 0 3.48.7 4.74 1.97a6.71 6.71 0 0 1 0 9.49 6.7 6.7 0 0 1-4.74 1.97c-1.78 0-3.49-.7-4.74-1.97"})})},1087:function(e,t,n){"use strict";var r=n(5893);n(7294),t.Z=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",viewBox:"0 0 30 30",...e,children:(0,r.jsx)("path",{d:"M23 3h-6a2 2 0 0 0-1.414.586l-12 12a2 2 0 0 0 0 2.828l8 8a2 2 0 0 0 2.828 0l12-12A2 2 0 0 0 27 13V7a4 4 0 0 0-4-4m0 6a2 2 0 1 1-.001-3.999A2 2 0 0 1 23 9"})})},8435:function(e,t,n){"use strict";n.d(t,{ln:function(){return o},I8:function(){return i},Mk:function(){return a},Ry:function(){return u},rj:function(){return s},yx:function(){return l},Tp:function(){return c},bL:function(){return d},zU:function(){return f},V7:function(){return p},CR:function(){return h},PC:function(){return g}});var r=n(5893);n(7294);var o=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",...e,children:(0,r.jsx)("path",{d:"M12.846 5.211a1 1 0 0 0-1.691 0L2.783 18.466A1 1 0 0 0 3.63 20h16.74a1 1 0 0 0 .846-1.534zM9.464 4.143c1.177-1.864 3.895-1.864 5.073 0l8.37 13.255C24.17 19.396 22.735 22 20.372 22H3.63c-2.363 0-3.798-2.604-2.537-4.602zM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-2.306-6.836.724 4.343a.59.59 0 0 0 1.164 0l.724-4.343A1 1 0 0 0 12.32 9h-.64a1 1 0 0 0-.986 1.164",clipRule:"evenodd"})});n(8011),n(5956),n(9327),n(8699);var i=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,r.jsx)("path",{d:"m18.988 2.012 3 3L19.701 7.3l-3-3zM8 16h3l7.287-7.287-3-3L8 13z"}),(0,r.jsx)("path",{d:"M19 19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .896-2 2v14c0 1.104.897 2 2 2h14a2 2 0 0 0 2-2v-8.668l-2 2z"})]});n(5917),n(1429),n(6611),n(3018);var a=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 96 96",...e,children:[(0,r.jsx)("path",{d:"M12 72a12 12 0 1 0 12 12 12.01 12.01 0 0 0-12-12m0-36a6 6 0 0 0 0 12 36.04 36.04 0 0 1 36 36 6 6 0 0 0 12 0 48.05 48.05 0 0 0-48-48"}),(0,r.jsx)("path",{d:"M12 0a6 6 0 0 0 0 12 72.08 72.08 0 0 1 72 72 6 6 0 0 0 12 0A84.1 84.1 0 0 0 12 0"})]}),u=e=>(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",...e,children:[(0,r.jsx)("path",{d:"M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1 1 0 0 0-.072-.455M5 20V8h14l.001 3.996L19 12v2l.001.005.001 5.995z"}),(0,r.jsx)("ellipse",{cx:8.5,cy:12,rx:1.5,ry:2}),(0,r.jsx)("ellipse",{cx:15.5,cy:12,rx:1.5,ry:2}),(0,r.jsx)("path",{d:"M8 16h8v2H8z"})]}),s=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",...e,children:(0,r.jsx)("path",{d:"m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"})}),l=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...e,children:(0,r.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6m-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3m44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9M244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8M97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1m-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7m32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1m-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2"})}),c=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",...e,children:(0,r.jsx)("path",{d:"m487.75 200.06-.7-1.78-67.5-176.19a17.63 17.63 0 0 0-6.95-8.37c-6.44-4-14.69-3.55-20.66 1.11a18.07 18.07 0 0 0-5.99 9.09l-45.58 139.46H155.79L110.2 23.93c-.99-3.59-3.09-6.78-5.99-9.12a18.08 18.08 0 0 0-20.66-1.11 17.8 17.8 0 0 0-6.95 8.37L8.96 198.18l-.67 1.78c-19.96 52.17-3.01 111.25 41.58 144.89l.23.18.62.44 102.84 77.01 50.88 38.51 30.99 23.4a20.84 20.84 0 0 0 25.21 0l30.99-23.4 50.88-38.51L445.97 345l.26-.21c44.49-33.64 61.41-92.62 41.53-144.73Z"})}),d=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",...e,children:(0,r.jsx)("path",{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"})}),f=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",...e,children:(0,r.jsx)("path",{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})}),p=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",...e,children:(0,r.jsx)("path",{d:"M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"})}),h=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",...e,children:(0,r.jsx)("path",{d:"M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3q.3 0 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1"})}),g=e=>(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",...e,children:(0,r.jsx)("path",{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305m-317.51 213.508V175.185l142.739 81.205z"})});n(1087)},9284:function(e,t,n){"use strict";n.d(t,{PO:function(){return f},f6:function(){return g},Hr:function(){return j},r0:function(){return m},L6:function(){return v},H1:function(){return S},rV:function(){return R},kk:function(){return O},uW:function(){return h},id:function(){return l},OW:function(){return p},VM:function(){return P},ie:function(){return M},pS:function(){return b},VU:function(){return x},TX:function(){return y},OY:function(){return d},dv:function(){return w},NJ:function(){return _},mE:function(){return c},B4:function(){return T},Y6:function(){return L},J7:function(){return C}});var r=JSON.parse('{"yN":["2024-08-17"],"pJ":["coding","frontend","new"],"ev":[{"id":"demo-1","release":"2024-08-17","title":"Demo 1","ring":"assess","quadrant":"methods-and-patterns","body":"<p>This is a demo entry. It is used to show how a radar item is written in Markdown format. The meta header is used to define the attributes of the item. The content of the file is used as the description of the item.</p>\\n","featured":true,"flag":"default","tags":["coding"],"position":[561,124]},{"id":"demo-2","release":"2024-08-17","title":"Demo 2","ring":"trial","quadrant":"platforms-and-operations","body":"<p>This is a demo entry. It is used to show how a radar item is written in Markdown format. The meta header is used to define the attributes of the item. The content of the file is used as the description of the item.</p>\\n","featured":true,"flag":"default","tags":["coding"],"position":[349,647]},{"id":"demo-3","release":"2024-08-17","title":"Demo 3","ring":"hold","quadrant":"tools","body":"<p>This is a demo entry. It is used to show how a radar item is written in Markdown format. The meta header is used to define the attributes of the item. The content of the file is used as the description of the item.</p>\\n","featured":true,"flag":"default","tags":["coding","frontend"],"position":[583,709]},{"id":"demo-4","release":"2024-08-17","title":"Demo 4","ring":"trial","quadrant":"languages-and-frameworks","body":"<p>This is a new demo entry. Items can <a href=\\"/methods-and-patterns/demo-1/\\">link</a> to other items and replaces the old links with a html extension to the new link structure, whereas a new <a href=\\"/methods-and-patterns/demo-1/\\">link</a> should be untouched.</p>\\n","featured":true,"flag":"default","tags":["new"],"position":[197,270]}]}'),o=JSON.parse('{"basePath":"/radar","baseUrl":"","editUrl":"https://github.dev/layer2state/radar/blob/main/radar/{release}/{id}.md","logoFile":"logo.svg","jsFile":"","toggles":{"showChart":true,"showTagFilter":false,"showQuadrantList":true,"showEmptyRings":false},"sections":["radar","tags","list"],"colors":{"foreground":"#fcf2e6","background":"#201b3d","highlight":"#d4a373","content":"#fff","text":"#575757","link":"#bc6c25","border":"rgba(255, 255, 255, 0.1)","tag":"rgba(255, 255, 255, 0.1)"},"quadrants":[{"id":"languages-and-frameworks","title":"Languages & Frameworks","description":"A selection of programming languages, alongside essential frameworks for building a variety of custom software.","color":"#a3b18a"},{"id":"methods-and-patterns","title":"Methods & Patterns","description":"Key software development methods and design patterns, covering everything from continuous integration and testing to architecture.","color":"#588157"},{"id":"platforms-and-operations","title":"Platforms & Operations","description":"Technologies and tools for software and infrastructure operations, including platforms and services for managing and scaling applications.","color":"#3f633e"},{"id":"tools","title":"Tools","description":"A range of software tools, from simple productivity enhancers to comprehensive project solutions, catering to various project needs.","color":"#40713f"}],"rings":[{"id":"adopt","title":"Adopt","description":"","color":"#588157","radius":0.5,"strokeWidth":5},{"id":"trial","title":"Trial","description":"","color":"#457b9d","radius":0.69,"strokeWidth":3},{"id":"assess","title":"Assess","description":"","color":"#bc6c25","radius":0.85,"strokeWidth":2},{"id":"hold","title":"Hold","description":"","color":"#d62828","radius":1,"strokeWidth":0.75}],"flags":{"new":{"color":"#f1235a","title":"New","titleShort":"N","description":"New in this version"},"changed":{"color":"#40a7d1","title":"Changed","titleShort":"C","description":"Recently changed"},"default":{"description":"Unchanged"}},"chart":{"size":800,"blipSize":12},"social":[{"href":"https://github.com/Layer2State","icon":"github"},{"href":"https://www.layer2state.com/journal","icon":"blog"},{"href":"https://www.layer2state.com/chat","icon":"bot"}],"imprint":"https://www.layer2state.com/foundation","labels":{"title":"Layer2State Radar","imprint":"Legal Information","quadrant":"Quadrant","quadrantOverview":"Quadrant Overview","zoomIn":"Zoom in","filterByTag":"Filter by Tag","footer":"The Layer2State Foundation is a non-profit entity, fully incorporated and compliant with the regulations and legal norms of Lugano, Switzerland.","notUpdated":"This item was not updated in last three versions of the Radar. Should it have appeared in one of the more recent editions, there is a good chance it remains pertinent. However, if the item dates back further, its relevance may have diminished and our current evaluation could vary. Regrettably, our capacity to consistently revisit items from past Radar editions is limited.","notFound":"404 - Page not found","pageAbout":"How to use Radar?","pageOverview":"Overview","pageSearch":"Search","searchPlaceholder":"What are you looking for?","metaDescription":""}}'),i=n(6513);let a={...o,...i};i.colors&&(a.colors={...o.colors,...i.colors}),i.labels&&(a.labels={...o.labels,...i.labels}),i.toggles&&(a.toggles={...o.toggles,...i.toggles});var u=n(390),s=n(1492);function l(e){return a.labels[e]||""}function c(e){return a.toggles[e]||!1}function d(){return a.sections}function f(){return l("title")}function p(){return(0,s.p)(a.logoFile)}function h(){return a.jsFile?(0,s.p)(a.jsFile):""}function g(){return a.chart}function v(){return a.flags}function m(e){return a.flags[e]}function y(){return a.rings}function x(e){return y().find(t=>t.id===e)}function b(){return r.yN}function w(){return a.social}function _(){return r.pJ}function j(e){return a.editUrl?(0,u.WU)(a.editUrl,e):""}function M(){return a.quadrants.map((e,t)=>({...e,position:t+1}))}function P(e){return M().find(t=>t.id===e)}function O(e,t){return r.ev.filter(n=>(!e||n.quadrant===e)&&!(t&&!n.featured))}function S(){return a.imprint}function R(e){return r.ev.find(t=>t.id===e)}let C=(e,t)=>Number(t.featured)-Number(e.featured)||e.title.localeCompare(t.title),L=e=>{let t=c("showEmptyRings");return y().reduce((n,r)=>{let o=e.filter(e=>e.ring===r.id);return(o.length||t)&&(n[r.id]=o),n},{})},T=e=>M().reduce((t,n)=>{let r=e.filter(e=>e.quadrant===n.id);return r.length&&(t[n.id]=r),t},{})},390:function(e,t,n){"use strict";n.d(t,{Ui:function(){return i},WU:function(){return o},vf:function(){return a}});var r=n(9284);function o(e,t){return e.replace(/{(\w+)}/g,(e,n)=>t[n]||e)}function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return[...t,(0,r.PO)()].join(" | ")}function a(e){return new Date(e).toLocaleDateString("en-US",{month:"long",year:"numeric"})}},1492:function(e,t,n){"use strict";n.d(t,{p:function(){return a},cn:function(){return i}});var r=n(8342),o=n.n(r);function i(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=function e(t){var n,r,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t)){var i=t.length;for(n=0;n<i;n++)t[n]&&(r=e(t[n]))&&(o&&(o+=" "),o+=r)}else for(r in t)t[r]&&(o&&(o+=" "),o+=r)}return o}(e))&&(r&&(r+=" "),r+=t);return r}(t)}function a(e){return/^https?:/.test(e)||!o().basePath?e:(e.startsWith("/")||(e="/"+e),"".concat(o().basePath).concat(e))}},3941:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),o=n(9008),i=n.n(o),a=n(4298),u=n.n(a),s=n(2090),l=n.n(s),c=n(4769),d=n.n(c),f=n(6999),p=n.n(f),h=n(4578),g=n.n(h),v=n(8435),m=n(9284),y=n(1492);function x(e){let{className:t}=e,n=(0,m.dv)();return(0,r.jsx)("ul",{className:(0,y.cn)(g().links,t),children:n.map((e,t)=>{let n=function(e){switch(e.toLowerCase()){case"bot":return v.Ry;case"blog":return v.Mk;case"facebook":return v.rj;case"github":return v.yx;case"gitlab":return v.Tp;case"instagram":return v.bL;case"linkedin":return v.zU;case"x":return v.V7;case"xing":return v.CR;case"youtube":return v.PC;default:return null}}(e.icon);return n&&(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:e.href,className:g().link,target:"_blank",rel:"noopener noreferrer",children:(0,r.jsx)(n,{className:g().icon})})},t)})})}function b(){let e=(0,m.OW)();return(0,r.jsxs)("div",{className:p().footer,children:[(0,r.jsxs)("div",{className:p().branding,children:[(0,r.jsx)("img",{src:e,className:p().logo,alt:(0,m.PO)()}),(0,r.jsx)("p",{className:p().description,children:(0,m.id)("footer")}),(0,r.jsx)(x,{className:p().socialLinks})]}),(0,r.jsx)("a",{href:(0,m.H1)(),className:p().imprint,target:"_blank",children:(0,m.id)("imprint")})]})}var w=n(1664),_=n.n(w),j=n(9332),M=n(2232),P=n.n(M);function O(){let e=(0,j.usePathname)(),t=(0,m.PO)(),n=(0,m.OW)();return(0,r.jsxs)(_(),{href:"/",className:(0,y.cn)(P().logo,"/"!=e&&P().small),children:[(0,r.jsx)("img",{src:n,className:(0,y.cn)(P().src),alt:t}),(0,r.jsx)("span",{className:P().subline,children:t})]})}var S=n(6223),R=n.n(S),C=n(5917),L=n(6611);function T(){return(0,r.jsx)("nav",{className:R().nav,children:(0,r.jsxs)("ul",{className:R().list,children:[(0,r.jsx)("li",{className:R().item,children:(0,r.jsxs)(_(),{href:"/help-and-about-tech-radar",children:[(0,r.jsx)(L.Z,{className:R().icon}),(0,r.jsx)("span",{className:R().label,children:(0,m.id)("pageAbout")})]})}),(0,r.jsx)("li",{className:R().item,children:(0,r.jsxs)(_(),{href:"/overview",children:[(0,r.jsx)(C.Z,{className:R().icon}),(0,r.jsx)("span",{className:R().label,children:(0,m.id)("pageOverview")})]})})]})})}let N=e=>{let{children:t,layoutClass:n="default"}=e;return(0,r.jsxs)("div",{id:"layout",className:(0,y.cn)(d().layout,l().className,d()[n]),children:[(0,r.jsxs)("header",{className:(0,y.cn)(d().container,d().header),children:[(0,r.jsx)(O,{}),(0,r.jsx)(T,{})]}),(0,r.jsx)("main",{className:(0,y.cn)(d().content),children:t}),(0,r.jsx)("footer",{className:(0,y.cn)(d().container,d().footer),children:(0,r.jsx)(b,{})})]})};var k=n(390);function E(e){let{Component:t,pageProps:n,router:o}=e,a=(0,m.uW)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:(0,k.Ui)()}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:(0,y.p)("/favicon.ico")})]}),(0,r.jsxs)(N,{layoutClass:t.layoutClass,children:[(0,r.jsx)(t,{...n}),a&&(0,r.jsx)(u(),{src:a})]})]})}n(2534),n(8053),n(7236)},2534:function(){},8053:function(){},7236:function(){},2090:function(e){e.exports={style:{fontFamily:"'__Roboto_f483f7', '__Roboto_Fallback_f483f7'",fontStyle:"normal"},className:"__className_f483f7"}},6999:function(e){e.exports={branding:"Footer_branding__feBRv",logo:"Footer_logo__C9vo8",description:"Footer_description__s_1Tl",imprint:"Footer_imprint__j5hGH",socialLinks:"Footer_socialLinks__22g9N"}},4769:function(e){e.exports={layout:"Layout_layout__fvRCC",container:"Layout_container__BVtmP",header:"Layout_header__WZgfV",default:"Layout_default__M3545",content:"Layout_content__PrPCk"}},2232:function(e){e.exports={logo:"Logo_logo__c5nVK",src:"Logo_src__xX_cm",subline:"Logo_subline__E9VoF",small:"Logo_small__JDg_A"}},6223:function(e){e.exports={list:"Navigation_list__VIGxa",icon:"Navigation_icon__uPnQs",label:"Navigation_label__QlTT7"}},4578:function(e){e.exports={links:"SocialLinks_links__P5z2P",icon:"SocialLinks_icon__9QZfU",link:"SocialLinks_link__Y7mGD"}},9008:function(e,t,n){e.exports=n(7219)},1664:function(e,t,n){e.exports=n(4116)},9332:function(e,t,n){e.exports=n(9108)},4298:function(e,t,n){e.exports=n(69)},8293:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return r}});let r=(0,n(6713).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return r.actionAsyncStorage}});let r=n(8293);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6713:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return i}});let n=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class r{disable(){throw n}getStore(){}run(){throw n}exit(){throw n}enterWith(){throw n}}let o=globalThis.AsyncLocalStorage;function i(){return o?new o:new r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return r}});let r=(0,n(6713).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5714:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{getExpectedRequestStore:function(){return o},requestAsyncStorage:function(){return r.requestAsyncStorage}});let r=n(38);function o(e){let t=r.requestAsyncStorage.getStore();if(t)return t;throw Error("`"+e+"` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context")}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6513:function(e){"use strict";e.exports={}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6036)}),_N_E=e.O()}]);