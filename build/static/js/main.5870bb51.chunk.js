(this.webpackJsonpt=this.webpackJsonpt||[]).push([[1],{26:function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return s}));var i=n(24),a=n(48),c=Object(i.b)({name:"submission",initialState:{personalData:{},riwayatPendidikan:[{}],pengalamanKerja:[{}],keahlian:[{}]},reducers:{submisionAction:function(e,t){return Object(a.c)({state:e,action:t})},addRowAction:function(e,t){return Object(a.a)({state:e,action:t})}}}),r=function(e){return null===e||void 0===e?void 0:e.submission},o=c.actions,u=o.submisionAction,s=o.addRowAction;t.b=c.reducer},27:function(e,t,n){"use strict";var i=n(24),a=n(26),c=n(54);t.a=Object(i.a)({reducer:{submission:a.b,submissionList:c.a}})},48:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return b})),n.d(t,"a",(function(){return l}));var i=n(12),a=n(2),c=n(15),r=n(26),o=n(27),u=function(e){var t=e.e,n=e.inputType,i=e.formName;"action"!==n?o.a.dispatch(Object(r.d)(s({e:t,inputType:n,formName:i}))):o.a.dispatch(Object(r.a)(s({e:t,inputType:n,formName:i})))},s=function(e){var t=e.e,n=e.inputType,i=e.formName,a=t.target,c=a.value,r=a.name,o=a.options,u=a.selectedIndex;switch(n){case"text":case"radio":return{name:r,value:c,formName:i};case"select":return{name:r,value:{label:o[u].text,value:c},formName:i};case"action":return{formName:i}}},b=function(e){var t,n,i=e.state,r=e.action.payload,o=r.name,u=r.value,s=r.formName,b=(null===(t=i[s])||void 0===t?void 0:t.length)-1;if(u||""===u)return"personalData"===s?Object(c.a)(Object(c.a)({},i),{},Object(a.a)({},s,Object(c.a)(Object(c.a)({},i[s]),{},Object(a.a)({},o,u)))):Object(c.a)(Object(c.a)({},i),{},Object(a.a)({},s,null===(n=i[s])||void 0===n?void 0:n.map((function(e,t){return t===b?Object(c.a)(Object(c.a)({},e),{},Object(a.a)({},o,u)):Object(c.a)({},e)}))))},l=function(e){var t=e.state,n=e.action.payload.formName;return Object(c.a)(Object(c.a)({},t),{},Object(a.a)({},n,[].concat(Object(i.a)(t[n]),[{}])))}},54:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o}));var i=n(24),a=Object(i.b)({name:"addList",initialState:[],reducers:{submisionListAction:function(e,t){e.push(t.payload)}}}),c=function(e){return null===e||void 0===e?void 0:e.submissionList},r=function(e){var t,n=e.state,i=e.id;return null===n||void 0===n||null===(t=n.submissionList)||void 0===t?void 0:t.filter((function(e){return e.id===Number(i)}))[0]},o=a.actions.submisionListAction;t.a=a.reducer},78:function(e,t,n){},79:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),c=n(32),r=n.n(c),o=(n(78),n(61)),u=n(3),s=(n(79),n(8));function b(){var e=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(6),n.e(8)]).then(n.bind(null,153))})),t=Object(i.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(7)]).then(n.bind(null,150))})),a=Object(i.lazy)((function(){return Promise.all([n.e(5),n.e(9)]).then(n.bind(null,148))})),c=function(){return Object(s.jsx)("div",{})};return Object(s.jsx)("div",{className:"w-full",children:Object(s.jsx)("div",{className:"App md:px-36 sm:px-0",children:Object(s.jsx)(o.a,{children:Object(s.jsx)(i.Suspense,{fallback:Object(s.jsx)(c,{}),children:Object(s.jsxs)(u.c,{children:[Object(s.jsx)(u.a,{exact:!0,path:"/",name:"Submission List",element:Object(s.jsx)(e,{})}),Object(s.jsx)(u.a,{exact:!0,path:"/register",name:"Submission Register",element:Object(s.jsx)(t,{})}),Object(s.jsx)(u.a,{exact:!0,path:"/:id",name:"Submission Detail",element:Object(s.jsx)(a,{})})]})})})})})}var l=Object(i.memo)(b),d=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,149)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))},j=n(53),m=n(27),f=n(101),O=n(100);r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(j.a,{store:m.a,children:Object(s.jsx)(f.a,{theme:Object(O.a)({useSystemColorMode:!1,initialColorMode:"light"}),children:Object(s.jsx)(l,{})})})}),document.getElementById("root")),d()}},[[87,2,3]]]);
//# sourceMappingURL=main.5870bb51.chunk.js.map