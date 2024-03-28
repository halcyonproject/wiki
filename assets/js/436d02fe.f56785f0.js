"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[62],{2780:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=o(5893),t=o(1151);const r={slug:"/development/building/downloading_source",sidebar_position:1,pagination_prev:null},l="Downloading Source",c={id:"development/building/downloading_source",title:"Downloading Source",description:"Setting Up the Repo Tool",source:"@site/docs/development/building/downloading_source.md",sourceDirName:"development/building",slug:"/development/building/downloading_source",permalink:"/development/building/downloading_source",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/development/building/downloading_source",sidebar_position:1,pagination_prev:null},sidebar:"defaultSidebar",next:{title:"Build the Source",permalink:"/development/building/build"}},d={},s=[{value:"Setting Up the Repo Tool",id:"setting-up-the-repo-tool",level:2},{value:"Creating a Directory",id:"creating-a-directory",level:2},{value:"Initializing Repo",id:"initializing-repo",level:2},{value:"Syncing the Repository",id:"syncing-the-repository",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"downloading-source",children:"Downloading Source"}),"\n",(0,i.jsx)(n.h2,{id:"setting-up-the-repo-tool",children:"Setting Up the Repo Tool"}),"\n",(0,i.jsx)(n.p,{children:"Ensure you have the Repo tool installed. If not, you can install it using the following command:"}),"\n",(0,i.jsx)(n.p,{children:"if you don't have it already:"}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:".bin"})," directory"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mkdir ~/bin\n"})}),"\n",(0,i.jsx)(n.p,{children:"Download the Repo script"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"curl https://storage.googleapis.com/git-repo-downloads/repo > ~/bin/repo\n"})}),"\n",(0,i.jsx)(n.p,{children:"Set Permissions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"chmod a+x ~/bin/repo\n"})}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-directory",children:"Creating a Directory"}),"\n",(0,i.jsx)(n.p,{children:"Create a new directory where you want to store the Halcyon Project source code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mkdir halcyon\n"})}),"\n",(0,i.jsx)(n.p,{children:"Change directory to halcyon"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"cd halcyon\n"})}),"\n",(0,i.jsx)(n.h2,{id:"initializing-repo",children:"Initializing Repo"}),"\n",(0,i.jsx)(n.p,{children:"Initialize the Repo tool in the newly created directory:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"repo init -u https://github.com/halcyonproject/manifest -b ursinia\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command initializes the Repo tool with the URL of the Halcyon Project repository."}),"\n",(0,i.jsx)(n.h2,{id:"syncing-the-repository",children:"Syncing the Repository"}),"\n",(0,i.jsx)(n.p,{children:"Sync the local repository with the latest changes from the remote repository:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"repo sync -c -j$(nproc --all) --force-sync\n"})}),"\n",(0,i.jsx)(n.p,{children:"This command fetches the latest changes and updates your local repository accordingly."})]})}function p(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>c,a:()=>l});var i=o(7294);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);