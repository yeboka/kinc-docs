"use strict";(self.webpackChunkkinc_docs=self.webpackChunkkinc_docs||[]).push([[6266],{6493:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>t});const l=JSON.parse('{"id":"components/table","title":"Table","description":"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435","source":"@site/docs/components/table.md","sourceDirName":"components","slug":"/components/table","permalink":"/docs/components/table","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/table.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"SideBar","permalink":"/docs/components/sidebar"},"next":{"title":"\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432 \u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 Filters","permalink":"/docs/components/filter"}}');var r=s(4848),i=s(8453);const c={sidebar_position:4},d="Table",o={},t=[{value:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",level:2},{value:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 (Props)",id:"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430-props",level:2},{value:"\u041b\u043e\u0433\u0438\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"\u043b\u043e\u0433\u0438\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u0412\u0430\u0436\u043d\u044b\u0435 \u043c\u043e\u043c\u0435\u043d\u0442\u044b",id:"\u0432\u0430\u0436\u043d\u044b\u0435-\u043c\u043e\u043c\u0435\u043d\u0442\u044b",level:2},{value:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",id:"\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",level:2},{value:"\u0421\u0442\u0438\u043b\u044c",id:"\u0441\u0442\u0438\u043b\u044c",level:2}];function a(n){const e={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"table",children:"Table"})}),"\n",(0,r.jsx)(e.h2,{id:"\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"}),"\n",(0,r.jsxs)(e.p,{children:["\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,r.jsx)(e.strong,{children:"CustomTable"})," \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438, \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u0438 \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0435\u0439. \u041e\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0432\u0438\u0434\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u043c\u0438 \u043a\u043e\u043b\u043e\u043d\u043a\u0430\u043c\u0438 \u0438 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0430\u043c \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0435\u0439). \u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044e \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n",(0,r.jsx)(e.h2,{id:"\u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430-props",children:"\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 (Props)"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"columns"})," (array):",(0,r.jsx)(e.br,{}),"\n","\u041c\u0430\u0441\u0441\u0438\u0432 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0449\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u041a\u0430\u0436\u0434\u044b\u0439 \u043e\u0431\u044a\u0435\u043a\u0442 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"name"}),": \u0438\u043c\u044f \u043f\u043e\u043b\u044f, \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u0434\u0430\u043d\u043d\u044b\u043c \u0432 \u0441\u0442\u0440\u043e\u043a\u0430\u0445."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"title"}),": \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u043e\u043b\u0431\u0446\u0430."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"notSortable"}),": \u0444\u043b\u0430\u0433, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442, \u043c\u043e\u0436\u0435\u0442 \u043b\u0438 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 \u0431\u044b\u0442\u044c \u043e\u0442\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u043d."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"render"}),": \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u044f\u0447\u0435\u0439\u043a\u0435 (\u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0430)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"data"})," (array):",(0,r.jsx)(e.br,{}),"\n","\u041c\u0430\u0441\u0441\u0438\u0432 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435. \u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u043c, \u0433\u0434\u0435 \u043a\u043b\u044e\u0447\u0438 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043f\u043e\u043b\u044f\u043c \u0438\u0437 ",(0,r.jsx)(e.code,{children:"columns"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"pagination"})," (object):",(0,r.jsx)(e.br,{}),"\n","\u041e\u0431\u044a\u0435\u043a\u0442 \u0441 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0435\u0439 \u043e \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u0438, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0438\u0439:"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"current_page"}),": \u0442\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"last_page"}),": \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"handlePageSelect"})," (function, optional):",(0,r.jsx)(e.br,{}),"\n","\u0424\u0443\u043d\u043a\u0446\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u0438. \u0415\u0441\u043b\u0438 \u043e\u043d\u0430 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"link"})," (string, optional):",(0,r.jsx)(e.br,{}),"\n","\u0421\u0441\u044b\u043b\u043a\u0430 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0430 \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u0430, \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"onRowClick"})," (function, optional):",(0,r.jsx)(e.br,{}),"\n","\u0424\u0443\u043d\u043a\u0446\u0438\u044f, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0415\u0441\u043b\u0438 \u043e\u043d\u0430 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u0430, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0432 ",(0,r.jsx)(e.code,{children:"link"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"setSortBy"})," (function, optional):",(0,r.jsx)(e.br,{}),"\n","\u0424\u0443\u043d\u043a\u0446\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"isDeletable"})," (boolean, optional):",(0,r.jsx)(e.br,{}),"\n","\u0424\u043b\u0430\u0433, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0449\u0438\u0439, \u043c\u043e\u0436\u0435\u0442 \u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0443\u0434\u0430\u043b\u044f\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438. \u0415\u0441\u043b\u0438 ",(0,r.jsx)(e.code,{children:"true"}),", \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"handleDelete"})," (function, optional):",(0,r.jsx)(e.br,{}),"\n","\u0424\u0443\u043d\u043a\u0446\u0438\u044f, \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c\u0430\u044f \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0438\u0441\u0438."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u043b\u043e\u0433\u0438\u043a\u0430-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"\u041b\u043e\u0433\u0438\u043a\u0430 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),":",(0,r.jsx)(e.br,{}),"\n","\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c. \u041f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0441\u0442\u043e\u043b\u0431\u0446\u0430 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f ",(0,r.jsx)(e.code,{children:"handleRequestSort"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442 \u0444\u0438\u043b\u044c\u0442\u0440\u044b \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043a \u0434\u0430\u043d\u043d\u044b\u043c."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u041f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044f"}),":",(0,r.jsx)(e.br,{}),"\n","\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044e, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c\u0438. \u041f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,r.jsx)(e.code,{children:"handleChangePage"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0435\u0439"}),":",(0,r.jsx)(e.br,{}),"\n","\u0415\u0441\u043b\u0438 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,r.jsx)(e.code,{children:"isDeletable"})," \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e \u0432 ",(0,r.jsx)(e.code,{children:"true"}),", \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,r.jsx)(e.code,{children:"handleDelete"})," \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435."]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c"}),":",(0,r.jsx)(e.br,{}),"\n","\u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,r.jsx)(e.code,{children:"link"}),", \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435 \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435\u043c ID \u0437\u0430\u043f\u0438\u0441\u0438."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,r.jsxs)(e.p,{children:["\u041f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 ",(0,r.jsx)(e.strong,{children:"CustomTable"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:"import CustomTable from './components/CustomTable';\r\n\r\nconst columns = [\r\n{ name: 'name', title: '\u0418\u043c\u044f', notSortable: false },\r\n{ name: 'email', title: 'Email', notSortable: false },\r\n];\r\n\r\nconst data = [\r\n{ id: 1, name: '\u0418\u0432\u0430\u043d', email: 'ivan@mail.com' },\r\n{ id: 2, name: '\u041c\u0430\u0440\u0438\u044f', email: 'maria@mail.com' },\r\n];\r\n\r\nfunction MyPage() {\r\n    const handlePageSelect = (event, newPage) => {\r\n        console.log(\"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443:\", newPage);\r\n    };\r\n    \r\n    const handleDelete = (id) => {\r\n        console.log(\"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0441 id:\", id);\r\n    };\r\n    \r\n    return (\r\n    <CustomTable\r\n        columns={columns}\r\n        data={data}\r\n        pagination={{ current_page: 1, last_page: 3 }}\r\n        handlePageSelect={handlePageSelect}\r\n        link=\"/detail\"\r\n        onRowClick={(row) => console.log(row)}\r\n        isDeletable={true}\r\n        handleDelete={handleDelete}\r\n    />\r\n    );\r\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u0432\u0430\u0436\u043d\u044b\u0435-\u043c\u043e\u043c\u0435\u043d\u0442\u044b",children:"\u0412\u0430\u0436\u043d\u044b\u0435 \u043c\u043e\u043c\u0435\u043d\u0442\u044b"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"}),": \u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043f\u043e \u043e\u0434\u043d\u043e\u043c\u0443 \u0441\u0442\u043e\u043b\u0431\u0446\u0443, \u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441 \u0443\u0447\u0435\u0442\u043e\u043c \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u041f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044f"}),": \u041f\u0440\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0444\u0438\u043b\u044c\u0442\u0440 \u0441 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435\u0439. \u041f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0441 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c\u0438 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435"}),": \u0414\u043b\u044f \u0441\u0442\u0440\u043e\u043a \u0441 \u0444\u043b\u0430\u0433\u043e\u043c ",(0,r.jsx)(e.code,{children:"isDeletable"})," \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f, \u043f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f ",(0,r.jsx)(e.code,{children:"handleDelete"}),"."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c"}),": \u041f\u0440\u0438 \u043a\u043b\u0438\u043a\u0435 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0443, \u0435\u0441\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d ",(0,r.jsx)(e.code,{children:"link"}),", \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043f\u043e \u044d\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435, \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044f ID \u0437\u0430\u043f\u0438\u0441\u0438 \u043a URL."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438",children:"\u0417\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Material UI"}),": \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u0438 \u0438 \u043a\u043d\u043e\u043f\u043e\u043a."]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"Custom Context"}),": \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442 ",(0,r.jsx)(e.code,{children:"useFilter"})," \u0434\u043b\u044f \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u043e\u0432."]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u0441\u0442\u0438\u043b\u044c",children:"\u0421\u0442\u0438\u043b\u044c"}),"\n",(0,r.jsxs)(e.p,{children:["\u0414\u043b\u044f \u0441\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f ",(0,r.jsx)(e.strong,{children:"CSS"})," \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,r.jsx)(e.code,{children:"table.css"}),", \u0430 \u0442\u0430\u043a\u0436\u0435 ",(0,r.jsx)(e.strong,{children:"TailwindCSS"})," \u0434\u043b\u044f \u0431\u0430\u0437\u043e\u0432\u044b\u0445 \u0441\u0442\u0438\u043b\u0435\u0439, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u043e\u0442\u0441\u0442\u0443\u043f\u044b, \u0446\u0432\u0435\u0442\u0430 \u0444\u043e\u043d\u0430 \u0438 \u0448\u0440\u0438\u0444\u0442\u044b."]}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsxs)(e.p,{children:["\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,r.jsx)(e.strong,{children:"CustomTable"})," \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0443\u0434\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438, \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u0438, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0438 \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438, \u0434\u0435\u043b\u0430\u044f \u0435\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u043c \u0434\u043b\u044f \u043c\u043d\u043e\u0433\u0438\u0445 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445."]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>c,x:()=>d});var l=s(6540);const r={},i=l.createContext(r);function c(n){const e=l.useContext(i);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),l.createElement(i.Provider,{value:e},n.children)}}}]);