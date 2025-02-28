"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([["7402"],{4954:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>l,assets:()=>a,toc:()=>d,contentTitle:()=>o});var l=JSON.parse('{"id":"official_devices/samsung/star2lte","title":"Galaxy S9+ (star2lte)*","description":"Device Information","source":"@site/docs/official_devices/samsung/star2lte.md","sourceDirName":"official_devices/samsung","slug":"/devices/star2lte","permalink":"/devices/star2lte","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"slug":"/devices/star2lte","pagination_next":null,"pagination_prev":null,"title":"Galaxy S9+ (star2lte)*"},"sidebar":"defaultSidebar"}'),r=i("5893"),s=i("65");let t={slug:"/devices/star2lte",pagination_next:null,pagination_prev:null,title:"Galaxy S9+ (star2lte)*"},o="Samsung Galaxy S9+ (star2lte)",a={},d=[{value:"Device Information",id:"device-information",level:2},{value:"Installation Guide",id:"installation-guide",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Installing Recovery",id:"installing-recovery",level:3},{value:"Installing ROM",id:"installing-rom",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"samsung-galaxy-s9-star2lte",children:"Samsung Galaxy S9+ (star2lte)"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.h2,{id:"device-information",children:"Device Information"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Device:"})," Samsung Galaxy S9+"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Release Date:"})," March 2018."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Chipset:"})," 	Exynos 9810 (10 nm)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"RAM:"})," 4  GB / 6 GB"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Storage:"})," 64 GB / 128 GB / 256 GB UFS 2.1"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Battery:"})," 3500 mAh Li-Ion (non-removable)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Display:"})," 6.2 in (157.48 mm) 2960x1440 (530 PPI) Super AMOLED"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Rear Camera:"})," 12MP (wide) / 12MP (telephoto)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Front Camera:"})," 8MP"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Halcyon Version:"})," Ursinia"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Maintainer:"})}),"\n"]})]}),"\n",(0,r.jsx)("a",{href:"https://www.pling.com/p/2058150/",class:"button button--primary",children:"Get builds"}),"\n",(0,r.jsx)(n.h2,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Make sure to backup your data before proceeding."})}),"\n",(0,r.jsx)(n.h3,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"A Windows/Linux/macOS PC with ADB and Heimdall installed"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"installing-recovery",children:"Installing Recovery"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Enter Download mode by using a key combination ",(0,r.jsx)(n.code,{children:"Power + Vol Down + Bixby"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Press ",(0,r.jsx)(n.code,{children:"Volume Up"})," key."]}),"\n",(0,r.jsx)(n.li,{children:"Connect your device to your PC via USB."}),"\n",(0,r.jsx)(n.li,{children:"Flash the recovery image onto your device."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"heiimdall flash --RECOVERY recovery.img --no-reboot\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"5",children:["\n",(0,r.jsxs)(n.li,{children:["Reboot into recovery mode by holding ",(0,r.jsx)(n.code,{children:"Power + Vol Down"})," and then ",(0,r.jsx)(n.code,{children:"Power + Vol Up + Bixby"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"installing-rom",children:"Installing ROM"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Download the latest release of Halcyon."}),"\n",(0,r.jsx)(n.li,{children:"Reboot into recovery mode."}),"\n",(0,r.jsx)(n.li,{children:"Perform a Format data."}),"\n",(0,r.jsx)(n.li,{children:"Return to the main menu."}),"\n",(0,r.jsx)(n.li,{children:"Select Apply update > Apply from ADB."}),"\n",(0,r.jsx)(n.li,{children:"Now you can start sideloading by this command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"adb sideload halcyon_star2lte-xxxxx.zip\n"})}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.p,{children:"If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},65:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return t}});var l=i(7294);let r={},s=l.createContext(r);function t(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);