"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([["4465"],{9700:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>o,assets:()=>d,toc:()=>a,contentTitle:()=>s});var o=JSON.parse('{"id":"official_devices/xiaomi/haydn","title":"Mi 11i/11X Pro/Redmi K40 Pro+ (haydn)*","description":"Device Information","source":"@site/docs/official_devices/xiaomi/haydn.md","sourceDirName":"official_devices/xiaomi","slug":"/devices/haydn","permalink":"/devices/haydn","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"slug":"/devices/haydn","pagination_next":null,"pagination_prev":null,"title":"Mi 11i/11X Pro/Redmi K40 Pro+ (haydn)*"},"sidebar":"defaultSidebar"}'),r=i("5893"),t=i("65");let l={slug:"/devices/haydn",pagination_next:null,pagination_prev:null,title:"Mi 11i/11X Pro/Redmi K40 Pro+ (haydn)*"},s="Mi 11i/11X Pro/Redmi K40 Pro+ (haydn) - Discontinued",d={},a=[{value:"Device Information",id:"device-information",level:2},{value:"Installation Guide",id:"installation-guide",level:2},{value:"Installing Recovery",id:"installing-recovery",level:3},{value:"Installing ROM",id:"installing-rom",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}];function c(e){let n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"mi-11i11x-proredmi-k40-pro-haydn---discontinued",children:"Mi 11i/11X Pro/Redmi K40 Pro+ (haydn) - Discontinued"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.h2,{id:"device-information",children:"Device Information"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Device:"})," Xiaomi Mi 11i/11X Pro/Redmi K40 Pro"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Release Date:"})," May 05, 2021"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Chipset:"})," 	Qualcomm SM8350 Snapdragon 888 5G"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"RAM:"})," 8 GB / 12 GB"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Storage:"})," 128 GB / 256 GB"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Battery:"})," 4520 mAh"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Display:"})," 6.67 inches, Super AMOLED, 120Hz, HDR10+, 1080 x 2400 pixels"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Rear Camera:"})," Triple 108 MP (main) + 8 MP (ultrawide) + 5 MP (telephoto macro)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Front Camera:"})," 20 MP"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Halcyon Version:"})," Tithonia"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Maintainer:"})}),"\n"]})]}),"\n",(0,r.jsx)("a",{href:"https://www.pling.com/p/2058150/",class:"button button--primary",children:"Get builds"}),"\n",(0,r.jsx)(n.h2,{id:"installation-guide",children:"Installation Guide"}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"Make sure to backup your data before proceeding."})}),"\n",(0,r.jsx)(n.h3,{id:"installing-recovery",children:"Installing Recovery"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Enter fastboot mode by using a key combination ",(0,r.jsx)(n.code,{children:"Power + Vol Down"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Connect your device to your PC via USB."}),"\n",(0,r.jsxs)(n.li,{children:["Verify that your PC detects the device with ",(0,r.jsx)(n.code,{children:"fastboot devices"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Flash the boot image onto your device using ",(0,r.jsx)(n.code,{children:"fastboot flash boot boot.img"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Reboot into recovery mode by typing ",(0,r.jsx)(n.code,{children:"fastboot reboot recovey"})," in command line or by holding ",(0,r.jsx)(n.code,{children:"Power + Vol Up"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"installing-rom",children:"Installing ROM"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Download the latest release of Halcyon."}),"\n",(0,r.jsx)(n.li,{children:"Reboot into recovery mode."}),"\n",(0,r.jsx)(n.li,{children:"Perform a Format data."}),"\n",(0,r.jsx)(n.li,{children:"Return to the main menu."}),"\n",(0,r.jsx)(n.li,{children:"Select Apply update > Apply from ADB."}),"\n",(0,r.jsx)(n.li,{children:"Now you can start sideloading by this command:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"adb sideload halcyon_haydn-xxxxx.zip\n"})}),"\n",(0,r.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,r.jsx)(n.p,{children:"If you encounter any issues during or after the installation, feel free to ask to our chat group for solutions to common problems."})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},65:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return l}});var o=i(7294);let r={},t=o.createContext(r);function l(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);