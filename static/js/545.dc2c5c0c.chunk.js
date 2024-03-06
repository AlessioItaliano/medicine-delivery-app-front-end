"use strict";(self.webpackChunkmedicine_delivery_app_front_end=self.webpackChunkmedicine_delivery_app_front_end||[]).push([[545],{348:(n,e,i)=>{i.d(e,{A:()=>p});var t,r,o=i(528),d=i(197),s=i(880);const c=d.Ay.section(t||(t=(0,o.A)(["\n  padding: 20px 0;\n"]))),a=d.Ay.div(r||(r=(0,o.A)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 767px;\n\n  @media screen and (min-width: ",") {\n    min-width: 768px;\n  }\n  @media screen and (min-width: ",") {\n    max-width: 1200px;\n  }\n"])),s.E.breakpoints.tablet,s.E.breakpoints.desktop);var l=i(579);const p=n=>{let{children:e}=n;return(0,l.jsx)(c,{children:(0,l.jsx)(a,{children:e})})}},545:(n,e,i)=>{i.r(e),i.d(e,{default:()=>rn});var t,r,o,d,s,c,a=i(348),l=i(3),p=i(250),x=i(794),m=i(528),u=i(197),h=i(880);const g=u.Ay.aside(t||(t=(0,m.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  height: 80vh;\n\n  padding: 30px;\n  border-radius: 40px;\n  background: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(37, 145, 251, 0.98) 0.1%,\n    #000780 99.8%\n  );\n\n  // @media screen and (min-width: ",") {\n  //   flex-direction: row;\n  //   justify-content: center;\n  //   align-items: end;\n  // }\n"])),h.E.breakpoints.desktop),f=u.Ay.h2(r||(r=(0,m.A)(["\n  font-size: 22px;\n  font-weight: 500;\n\n  color: ",";\n"])),h.E.colors.secondary),y=u.Ay.ul(o||(o=(0,m.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n\n  width: 100%;\n"]))),A=u.Ay.li(d||(d=(0,m.A)(["\n  // width: 100%;\n\n  font-size: 15px;\n  font-weight: 500;\n\n  color: ",";\n"])),h.E.colors.primary),j=u.Ay.form(s||(s=(0,m.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n"]))),b=u.Ay.input(c||(c=(0,m.A)(["\n  width: 100%;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n  background: ",";\n  border-radius: 18px;\n  border: 1px solid transparent;\n"])),h.E.colors.primary,h.E.colors.quinary);var w=i(579);const v=()=>{const n=(0,l.wA)(),e=async e=>{await n((0,p.h_)(e))},i=async e=>{await n((0,p.wY)(e))};return(0,w.jsxs)(g,{children:[(0,w.jsxs)(j,{onSubmit:e=>{e.preventDefault();const i=e.currentTarget;console.log(i.elements.medicine.value),n((0,p.GT)({medicine:i.elements.medicine.value}))},autoComplete:"on",children:[(0,w.jsx)(b,{type:"text",name:"medicine",placeholder:"Enter the medicine"}),(0,w.jsx)(x.A,{type:"submit",name:"Find"})]}),(0,w.jsx)(f,{children:"Type of medicines:"}),(0,w.jsxs)(y,{children:[(0,w.jsx)(A,{children:(0,w.jsx)(x.A,{type:"button",name:"Gel",func:()=>e("gel")})}),(0,w.jsx)(A,{children:(0,w.jsx)(x.A,{type:"button",name:"Ointment",func:()=>e("ointment")})}),(0,w.jsx)(A,{children:(0,w.jsx)(x.A,{type:"button",name:"Syrup",func:()=>e("syrup")})}),(0,w.jsx)(A,{children:(0,w.jsx)(x.A,{type:"button",name:"Extract",func:()=>e("extract")})}),(0,w.jsx)(A,{children:(0,w.jsx)(x.A,{type:"button",name:"Elixir",func:()=>e("elixir")})}),(0,w.jsx)(A,{children:(0,w.jsx)(x.A,{type:"button",name:"Emulsion",func:()=>e("emulsion")})}),(0,w.jsx)(A,{children:(0,w.jsx)(x.A,{type:"button",name:"Decoction",func:()=>e("decoction")})})]}),(0,w.jsx)(f,{children:"Sort by price:"}),(0,w.jsx)(x.A,{type:"button",name:"High to Low",func:()=>i("higt")}),(0,w.jsx)(x.A,{type:"button",name:"Low to High",func:()=>i("low")})]})};var k;const E=u.Ay.div(k||(k=(0,m.A)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 18px;\n"])));var _=i(43);const z=n=>n.medicines.medicines,C=n=>n.medicines.isLoading,F=n=>n.medicines.error;var T,L,S,D,G,H,I,q,M=i(472),N=i(96),O=i(408),P=i(381);const Y=u.Ay.div(T||(T=(0,m.A)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  gap: 10px;\n\n  padding: 20px;\n  width: 100%;\n  height: auto;\n  border-radius: 30px;\n\n  background-color: ",";\n\n  @media screen and (min-width: ",") {\n    width: 260px;\n  }\n  @media screen and (min-width: ",") {\n    width: 306px;\n  }\n"])),h.E.colors.secondary,h.E.breakpoints.tablet,h.E.breakpoints.desktop),$=u.Ay.div(L||(L=(0,m.A)(["\n  width: 100%;\n  padding-top: 60%;\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),P),B=u.Ay.img(S||(S=(0,m.A)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 12px;\n"]))),J=u.Ay.p(D||(D=(0,m.A)(["\n  font-size: 24px;\n  font-weight: 700;\n\n  color: ",";\n"])),h.E.colors.primary),K=u.Ay.p(G||(G=(0,m.A)(["\n  font-size: 16px;\n  font-weight: 500;\n\n  color: ",";\n"])),h.E.colors.primary),Q=u.Ay.p(H||(H=(0,m.A)(["\n  font-size: 24px;\n  font-weight: 700;\n\n  color: ",";\n"])),h.E.colors.primary),R=(u.Ay.p(I||(I=(0,m.A)(["\n  font-size: 16px;\n  font-weight: 500;\n\n  color: ",";\n"])),h.E.colors.primary),u.Ay.p(q||(q=(0,m.A)(["\n  font-size: 16px;\n  font-weight: 500;\n\n  color: ",";\n"])),h.E.colors.primary)),U=n=>{let{medicine:e}=n;const i=(0,l.wA)(),t=(0,l.d4)(N.e),{urlToImage:r,name:o,description:d,made:s,price:c,_id:a}=e;return(0,w.jsxs)(Y,{children:[(0,w.jsx)($,{children:(0,w.jsx)(B,{src:r,alt:"Medicine_img"})}),(0,w.jsx)(J,{children:o}),(0,w.jsx)(K,{children:d}),(0,w.jsxs)(R,{children:["Contry: ",s]}),(0,w.jsxs)(Q,{children:["Price: ",c," $"]}),(0,w.jsx)(O.A,{func:()=>{t.some((n=>n._id===a))||i((0,M.wr)(e))},name:"Add",type:"button"})]})};var V,W,X,Z=i(406);const nn=u.Ay.div(V||(V=(0,m.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n\n  height: 80vh;\n  overflow-y: auto;\n\n  padding: 15px;\n  border-radius: 40px;\n  background: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(37, 145, 251, 0.98) 0.1%,\n    #000780 99.8%\n  );\n\n  // @media screen and (min-width: ",") {\n  //   flex-direction: row;\n  //   justify-content: center;\n  //   align-items: end;\n  // }\n"])),h.E.breakpoints.desktop),en=u.Ay.ul(W||(W=(0,m.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  // flex-direction: column;\n  gap: 18px;\n\n  flex-wrap: wrap;\n  column-count: 1;\n\n  // margin-bottom: 30px;\n\n  // gap: 16px;\n\n  @media screen and (min-width: ",") {\n    column-count: 2;\n  }\n  @media screen and (min-width: ",") {\n    column-count: 3;\n  }\n"])),h.E.breakpoints.tablet,h.E.breakpoints.desktop),tn=(u.Ay.li(X||(X=(0,m.A)([""]))),()=>{const n=(0,l.wA)(),e=(0,l.d4)(z),i=(0,l.d4)(C),t=(0,l.d4)(F);return(0,_.useEffect)((()=>{n((0,p.N7)())}),[n]),(0,w.jsx)(w.Fragment,{children:i&&!t?(0,w.jsx)(Z.A,{}):(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(nn,{children:(0,w.jsx)(en,{children:e.map((n=>(0,w.jsx)("div",{children:(0,w.jsx)(U,{medicine:n})},n._id)))})})})})}),rn=()=>(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(a.A,{children:(0,w.jsxs)(E,{children:[(0,w.jsx)(v,{}),(0,w.jsx)(tn,{})]})})})},96:(n,e,i)=>{i.d(e,{e:()=>t});const t=n=>n.orders.orders},381:(n,e,i)=>{n.exports=i.p+"static/media/noAvaibleImg.2a9013f75075856591a3.png"}}]);
//# sourceMappingURL=545.dc2c5c0c.chunk.js.map