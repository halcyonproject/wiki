"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([["9055"],{5257:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>a,toc:()=>c,contentTitle:()=>s});var l=JSON.parse('{"id":"official_devices/xiaomi/gale","title":"Redmi 13C / POCO C65 (gale/gust)","description":"Device Information","source":"@site/docs/official_devices/xiaomi/gale.md","sourceDirName":"official_devices/xiaomi","slug":"/devices/gale","permalink":"/devices/gale","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"slug":"/devices/gale","pagination_next":null,"pagination_prev":null,"title":"Redmi 13C / POCO C65 (gale/gust)"},"sidebar":"defaultSidebar"}'),o=i("5893"),t=i("65");let r={slug:"/devices/gale",pagination_next:null,pagination_prev:null,title:"Redmi 13C / POCO C65 (gale/gust)"},s="Redmi 13C / POCO C65 (gale/gust)",a={},c=[{value:"Device Information",id:"device-information",level:2},{value:"Installation Guide",id:"installation-guide",level:2},{value:"Installing Recovery",id:"installing-recovery",level:3},{value:"Installing ROM",id:"installing-rom",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"redmi-13c--poco-c65-galegust",children:"Redmi 13C / POCO C65 (gale/gust)"})}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.h2,{id:"device-information",children:"Device Information"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Device:"})," Redmi 13C / POCO C65"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Release Date:"})," 2023, November 10"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Chipset:"})," 	MediaTek Helio G85 (MT6768)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"RAM:"}),"  4GB / 6 GB / 8 GB"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Storage:"})," 128 GB / 256 GB"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Battery:"})," 5000 mAh"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Display:"})," 6.74 inches, IPS LCD, 90Hz, 720x1600 pixels"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Rear Camera:"})," Triple 50 MP (wide) + 2 MP (macro)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Front Camera:"})," 8 MP (wide)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Halcyon Version:"})," Ursinia"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Maintainer:"})," ",(0,o.jsx)(n.a,{href:"https://github.com/sabrina010209",children:"Rex"})]}),"\n"]})]}),"\n",(0,o.jsx)("a",{href:"https://www.pling.com/p/2058150/",class:"button button--primary",children:"Get builds"}),"\n",(0,o.jsx)(n.h2,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Make sure to backup your data before proceeding!"})}),"\n",(0,o.jsx)(n.h3,{id:"installing-recovery",children:"Installing Recovery"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Enter fastboot mode by using a key combination ",(0,o.jsx)(n.code,{children:"Power + Vol Down"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Connect your device to your PC via USB."}),"\n",(0,o.jsxs)(n.li,{children:["Verify that your PC detects the device with ",(0,o.jsx)(n.code,{children:"fastboot devices"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Flash the boot image onto your device using ",(0,o.jsx)(n.code,{children:"fastboot flash boot boot.img"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Reboot into recovery mode by typing ",(0,o.jsx)(n.code,{children:"fastboot reboot recovery"})," in command line or by holding ",(0,o.jsx)(n.code,{children:"Power + Vol Up"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"installing-rom",children:"Installing ROM"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Download the latest release of Halcyon."}),"\n",(0,o.jsx)(n.li,{children:"Reboot into recovery mode."}),"\n",(0,o.jsx)(n.li,{children:"Perform a Format data."}),"\n",(0,o.jsx)(n.li,{children:"Return to the main menu."}),"\n",(0,o.jsx)(n.li,{children:"Select Apply update > Apply from ADB."}),"\n",(0,o.jsx)(n.li,{children:"Now you can start sideloading by this command:"}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"adb sideload halcyon_gale-xxxxx.zip\n"})}),"\n",(0,o.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.p,{children:"If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems."})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},65:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return r}});var l=i(7294);let o={},t=l.createContext(o);function r(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);