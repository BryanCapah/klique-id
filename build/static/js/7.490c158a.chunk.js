(this.webpackJsonpt=this.webpackJsonpt||[]).push([[7],{109:function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n(8);function i(e){var a=e.onClick,n=e.children;return Object(t.jsx)("button",{className:"border-2 rounded-md bg-gray-400 px-3 py-1 text-white font-bold",onClick:a,children:n})}},110:function(e,a,n){"use strict";n.r(a),n.d(a,"useDimention",(function(){return r})),n.d(a,"personalData",(function(){return u})),n.d(a,"riwayatPendidikan",(function(){return l})),n.d(a,"pengalamanKerja",(function(){return o})),n.d(a,"keahlian",(function(){return c}));var t=n(4),i=n(1),r=function(){var e=Object(i.useState)({height:window.innerHeight-35,width:window.innerWidth}),a=Object(t.a)(e,2),n=a[0],r=a[1],u=n.width,l=n.height,o=u<=500;return Object(i.useEffect)((function(){var e=function(){r({height:window.innerHeight-35,width:window.innerWidth})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),{width:u,height:l,isMobile:o}},u=[{formName:"personalData",name:"namaLengkap",title:"Nama Lengkap",value:"",required:!1,inputType:"text"},{formName:"personalData",name:"jenisKelamin",title:"Jenis Kelamin",value:"",required:!1,inputType:"radio",options:[{label:"Pria",value:"pria"},{label:"Wanita",value:"wanita"}]},{formName:"personalData",name:"nomorHp",title:"Nomor Hp",value:"",required:!1,inputType:"text"},{formName:"personalData",name:"email",title:"Email",value:"",required:!1,inputType:"text"},{formName:"personalData",name:"alamat",title:"Alamat",value:"",required:!1,inputType:"text"},{formName:"personalData",name:"domisili",title:"Domisili",value:"",required:!1,inputType:"text"}],l=[{formName:"riwayatPendidikan",name:"jenjang",title:"Jenjang",value:"",required:!1,inputType:"text"},{formName:"riwayatPendidikan",name:"satuanPendidikan",title:"Satuan Pendidikan",value:"",required:!1,inputType:"text"},{formName:"riwayatPendidikan",name:"masaPendidikan",title:"Masa Pendidikan",value:"",required:!1,inputType:"text"},{formName:"riwayatPendidikan",name:"tahunMasuk",title:"Tahun Masuk",value:"",required:!1,inputType:"text"},{formName:"riwayatPendidikan",name:"tahunKeluar",title:"Tahun Keluar",value:"",required:!1,inputType:"text"},{formName:"riwayatPendidikan",name:"tahunKeluar",title:"Tambah Pendidikan",value:"",required:!1,inputType:"action"}],o=[{formName:"pengalamanKerja",name:"namaPerusahaan",title:"Nama Perusahaan",value:"",required:!1,inputType:"text"},{formName:"pengalamanKerja",name:"posisi",title:"Posisi",value:"",required:!1,inputType:"text"},{formName:"pengalamanKerja",name:"tahunMasuk",title:"Tahun Masuk",value:"",required:!1,inputType:"text"},{formName:"pengalamanKerja",name:"sampaiSekarang",title:"Sampai Sekarang",required:!1,inputType:"radio",options:[{value:"true",label:"Sampai Sekarang"}]},{formName:"pengalamanKerja",name:"tahun Keluar",title:"Tahun Keluar",value:"",required:!1,inputType:"text"},{formName:"pengalamanKerja",name:"tahunKeluar",title:"Tambah Pengalaman Kerja",value:"",required:!1,inputType:"action"}],c=[{formName:"keahlian",name:"keahlian",title:"Keahlian",value:"",required:!1,inputType:"text"},{formName:"keahlian",name:"tahun",title:"Tahun",value:"",required:!1,inputType:"text"},{formName:"keahlian",name:"range",title:"Range",value:"",required:!1,inputType:"select",options:[{label:"Dibawah 1 Tahun",value:"0"},{label:"1 - 3 Tahun",value:"3"},{label:"4 - 5 Tahun",value:"5"},{label:"5 - 9 Tahun",value:"9"},{label:"Diatas 10 Tahun",value:"10"}]},{formName:"keahlian",name:"tahunKeluar",title:"Tambah Keahlian",value:"",required:!1,inputType:"action"}]},150:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return D}));var t=n(116),i=n.n(t),r=n(15),u=n(132),l=n(53),o=n(3),c=n(133),m=(n(134),n(110)),d=n(26),s=n(54),p=n(27),h=n(147),f=n(140),j=n(118),b=n(154),v=n(145),x=n(151),y=n(109),g=n(8);function N(e){var a,n=e.data,t=e.onChange,i=e.idx,r=n.formName,u=n.name,o=n.title,c=n.required,m=n.inputType,s=n.options,p=void 0===s?[]:s,N="select"===m,w="radio"===m,T="switch"===m,k="action"===m,O=Object(l.b)(d.c),q=(null===(a=O[r])||void 0===a?void 0:a.length)-1,K=O[r][u],P=O[r][q]&&O[r][q][u],C=K||P||"";return N?Object(g.jsx)(v.a,{id:"".concat(u,"_").concat(i),name:u,className:"border-2 rounded-md p-2 w-full",required:c,onChange:function(e){return t({e:e,inputType:"select",formName:r})},placeholder:"Select ".concat(o),children:p.map((function(e){var a=e.label,n=e.value;return Object(g.jsx)("option",{value:n,children:a})}))}):T?Object(g.jsx)(x.a,{id:"".concat(u,"_").concat(i),name:u,required:c,onChange:function(e){return t({e:e,inputType:"switch",formName:r})},children:o}):w?Object(g.jsx)(j.a,{defaultValue:"",id:"".concat(u,"_").concat(i),name:u,onClick:function(e){return t({e:e,inputType:"radio",formName:r})},className:"flex",children:p.map((function(e){var a=e.label,n=e.value;return Object(g.jsx)(b.a,{required:c,value:n,children:Object(g.jsx)(f.a,{className:"mr-2",children:a})})}))}):k?Object(g.jsx)("div",{className:"w-full flex justify-end",children:Object(g.jsx)(y.a,{onClick:function(e){return t({e:e,inputType:"action",formName:r})},children:"".concat(o)})}):Object(g.jsx)(h.a,{value:C,id:"".concat(u,"_").concat(i),name:u,className:"border-2 rounded-md p-2 w-full",required:c,placeholder:"Input ".concat(o),onChange:function(e){return t({e:e,inputType:"text",formName:r})}})}function w(e){var a=e.children,n=document.documentElement.clientHeight-300;return Object(g.jsx)("div",{style:{minHeight:n,maxHeight:n},className:"w-full md:flex mt-10 overflow-y-scroll",children:Object(g.jsx)("div",{className:"w-full",children:a})})}function T(e){var a=e.onChange,n=e.form;return Object(g.jsx)(w,{children:Object(g.jsx)("table",{className:"w-full border-separate",style:{borderSpacing:"1rem"},children:n.map((function(e,n){var t=e.title,i="action"===e.inputType;return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{width:"30%",children:!i&&t}),Object(g.jsx)("td",{width:!i&&"70%",children:Object(g.jsx)(N,{data:e,onChange:a,idx:n})})]})}))})})}var k=n(48),O=Object(g.jsx)(T,{form:m.personalData,onChange:k.b}),q=Object(g.jsx)(T,{form:m.riwayatPendidikan,onChange:k.b}),K=Object(g.jsx)(T,{form:m.pengalamanKerja,onChange:k.b}),P=Object(g.jsx)(T,{form:m.keahlian,onChange:k.b});function C(){var e,a=Object(o.f)(),n=Object(l.b)(d.c),t=null===(e=Object(l.b)(s.c))||void 0===e?void 0:e.length,m=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.dispatch(Object(s.d)(Object(r.a)({id:t},n)));case 2:a("/");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(c.a,{nextBtnName:"Selanjutnya",previousBtnName:"Sebelumnya",startingStep:0,onSubmit:function(){return m()},steps:[{label:"Data Personal",content:O},{label:"Riwayat Pendidikan",content:q},{label:"Pengalaman Kerja",content:K},{label:"Keahlian",content:P}]})}function D(){return Object(g.jsxs)("div",{className:"py-3",children:[Object(g.jsx)("span",{className:"font-bold",children:"Form submission"}),Object(g.jsx)(C,{})]})}}}]);
//# sourceMappingURL=7.490c158a.chunk.js.map