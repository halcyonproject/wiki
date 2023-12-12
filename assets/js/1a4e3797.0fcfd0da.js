"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[920],{2027:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var s=r(7294),a=r(2263),n=r(8862),c=r(5742),l=r(9960),o=r(5999);const u=["zero","one","two","few","many","other"];function h(e){return u.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,a.Z)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function d(){const e=m();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const a=r.select(t),n=r.pluralForms.indexOf(a);return s[Math.min(n,s.length-1)]}(r,t,e)}}var p=r(1728),g=r(6550),x=r(2389);const f=function(){const e=(0,x.Z)(),t=(0,g.k6)(),r=(0,g.TH)(),{siteConfig:{baseUrl:s}}=(0,a.Z)(),n=e?new URLSearchParams(r.search):null,c=n?.get("q")||"",l=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:c,searchContext:l,searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const s=new URLSearchParams(r.search);s.set("ctx",e),t.replace({search:s.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${s}search?${t.toString()}`}}};var y=r(22),S=r(8202),C=r(2539),j=r(726),I=r(1073),v=r(311),w=r(3926),R=r(1029);const P={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var b=r(5893);function F(){const{siteConfig:{baseUrl:e}}=(0,a.Z)(),{selectMessage:t}=d(),{searchValue:r,searchContext:n,searchVersion:l,updateSearchPath:u,updateSearchContext:h}=f(),[i,m]=(0,s.useState)(r),[g,x]=(0,s.useState)(),[C,j]=(0,s.useState)(),I=`${e}${l}`,w=(0,s.useMemo)((()=>i?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:i}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[i]);(0,s.useEffect)((()=>{u(i),g&&(i?g(i,(e=>{j(e)})):j(void 0))}),[i,g]);const F=(0,s.useCallback)((e=>{m(e.target.value)}),[]);return(0,s.useEffect)((()=>{r&&r!==i&&m(r)}),[r]),(0,s.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,y.w)(I,n);x((()=>(0,S.v)(e,t,100)))}()}),[n,I]),(0,b.jsxs)(s.Fragment,{children:[(0,b.jsxs)(c.Z,{children:[(0,b.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,b.jsx)("title",{children:w})]}),(0,b.jsxs)("div",{className:"container margin-vert--lg",children:[(0,b.jsx)("h1",{children:w}),(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("div",{className:(0,p.Z)("col",{[P.searchQueryColumn]:Array.isArray(R.Kc),"col--9":Array.isArray(R.Kc),"col--12":!Array.isArray(R.Kc)}),children:(0,b.jsx)("input",{type:"search",name:"q",className:P.searchQueryInput,"aria-label":"Search",onChange:F,value:i,autoComplete:"off",autoFocus:!0})}),Array.isArray(R.Kc)?(0,b.jsx)("div",{className:(0,p.Z)("col","col--3","padding-left--none",P.searchContextColumn),children:(0,b.jsxs)("select",{name:"search-context",className:P.searchContextInput,id:"context-selector",value:n,onChange:e=>h(e.target.value),children:[(0,b.jsx)("option",{value:"",children:R.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""}),R.Kc.map((e=>(0,b.jsx)("option",{value:e,children:e},e)))]})}):null]}),!g&&i&&(0,b.jsx)("div",{children:(0,b.jsx)(v.Z,{})}),C&&(C.length>0?(0,b.jsx)("p",{children:t(C.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:C.length}))}):(0,b.jsx)("p",{children:(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,b.jsx)("section",{children:C&&C.map((e=>(0,b.jsx)(_,{searchResult:e},e.document.i)))})]})]})}function _(e){let{searchResult:{document:t,type:r,page:s,tokens:a,metadata:n}}=e;const c=0===r,o=2===r,u=(c?t.b:s.b).slice(),h=o?t.s:t.t;c||u.push(s.t);let i="";if(R.vc&&a.length>0){const e=new URLSearchParams;for(const t of a)e.append("_highlight",t);i=`?${e.toString()}`}return(0,b.jsxs)("article",{className:P.searchResultItem,children:[(0,b.jsx)("h2",{children:(0,b.jsx)(l.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,C.C)(h,a):(0,j.o)(h,(0,I.m)(n,"t"),a,100)}})}),u.length>0&&(0,b.jsx)("p",{className:P.searchResultItemPath,children:(0,w.e)(u)}),o&&(0,b.jsx)("p",{className:P.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,j.o)(t.t,(0,I.m)(n,"t"),a,100)}})]})}const k=function(){return(0,b.jsx)(n.Z,{children:(0,b.jsx)(F,{})})}}}]);