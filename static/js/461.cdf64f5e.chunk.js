"use strict";(self.webpackChunkmedicine_delivery_app_front_end=self.webpackChunkmedicine_delivery_app_front_end||[]).push([[461],{8348:(n,e,r)=>{r.d(e,{A:()=>p});var i,t,o=r(7528),d=r(197),s=r(4880);const a=d.Ay.section(i||(i=(0,o.A)(["\n  padding: 20px 0;\n"]))),c=d.Ay.div(t||(t=(0,o.A)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 767px;\n\n  @media screen and (min-width: ",") {\n    min-width: 768px;\n  }\n  @media screen and (min-width: ",") {\n    max-width: 1200px;\n  }\n"])),s.E.breakpoints.tablet,s.E.breakpoints.desktop);var l=r(579);const p=n=>{let{children:e}=n;return(0,l.jsx)(a,{children:(0,l.jsx)(c,{children:e})})}},7461:(n,e,r)=>{r.r(e),r.d(e,{default:()=>J});var i=r(8348),t=r(5043),o=r(3003);const d=n=>n.orderHistory.orderHistory,s=n=>n.orderHistory.isLoading,a=n=>n.orderHistory.error;var c,l,p,x,h,g,y,u,m=r(7119),f=r(1121),A=r(7528),j=r(197),v=r(3381),w=r(4880);const b=j.Ay.div(c||(c=(0,A.A)(["\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 18px;\n  position: relative;\n  text-align: center;\n  align-items: center;\n\n  padding: 10px;\n  width: 100%;\n  height: auto;\n  border-radius: 30px;\n\n  background-color: ",";\n"])),w.E.colors.secondary),k=j.Ay.div(l||(l=(0,A.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n"]))),E=j.Ay.div(p||(p=(0,A.A)(["\n  width: 200px;\n  padding-top: 60%;\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),v),_=j.Ay.img(x||(x=(0,A.A)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 12px;\n"]))),H=j.Ay.div(h||(h=(0,A.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n  text-align: center;\n  overflow-y: auto;\n"]))),z=j.Ay.p(g||(g=(0,A.A)(["\n  font-size: 24px;\n  font-weight: 700;\n\n  color: ",";\n"])),w.E.colors.primary),P=j.Ay.ul(y||(y=(0,A.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 250px;\n  overflow: auto;\n  gap: 18px;\n\n  flex-wrap: wrap;\n  overflow: scroll;\n"]))),C=j.Ay.li(u||(u=(0,A.A)(["\n  color: ",";\n"])),w.E.colors.primary);var I=r(579);const L=n=>{let{order:e}=n;const{totalPrice:r,orderList:i,createdAt:t}=e,o=(0,f.GP)(new Date(t),"dd-MM-yyyy HH:mm:ss");return(0,I.jsxs)(b,{children:[(0,I.jsx)(k,{children:(0,I.jsx)(P,{children:i.map((n=>(0,I.jsxs)(C,{children:[(0,I.jsx)(E,{children:(0,I.jsx)(_,{src:n.urlToImage,alt:"coupon_img"})}),(0,I.jsxs)(H,{children:[(0,I.jsx)(z,{children:n.name}),(0,I.jsxs)(z,{children:["Price:",n.price]})]})]},n._id)))})}),(0,I.jsxs)("div",{children:[(0,I.jsxs)(z,{children:["Total price: ",r]}),(0,I.jsxs)(z,{children:["Order date: ",o]})]})]})};var M,S,T,D,F;const G=j.Ay.div(M||(M=(0,A.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n\n  height: 90vh;\n  overflow-y: auto;\n\n  padding: 30px;\n  border-radius: 5px;\n  background: ",";\n  box-shadow: ",";\n"])),w.E.colors.secondary,w.E.colors.boxShadowSecondary),O=j.Ay.ul(S||(S=(0,A.A)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 18px;\n  flex-wrap: wrap;\n  column-count: 1;\n\n  @media screen and (min-width: ",") {\n    column-count: 2;\n  }\n  @media screen and (min-width: ",") {\n    column-count: 3;\n  }\n"])),w.E.breakpoints.tablet,w.E.breakpoints.desktop),U=j.Ay.li(T||(T=(0,A.A)(["\n  width: 100%;\n  color: ",";\n"])),w.E.colors.primary),Y=j.Ay.div(D||(D=(0,A.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]))),q=j.Ay.p(F||(F=(0,A.A)(["\n  font-size: 24px;\n  font-weight: 700;\n\n  color: ",";\n"])),w.E.colors.primary),B=()=>{const n=(0,o.wA)(),e=(0,o.d4)(d),r=(0,o.d4)(s),i=(0,o.d4)(a);return console.log(i),console.log(r),console.log(e),(0,t.useEffect)((()=>{n((0,m.U)())}),[n]),(0,I.jsx)(G,{children:0===e.length||r&&!i?(0,I.jsx)(Y,{children:(0,I.jsx)(q,{children:"You don't have any history."})}):(0,I.jsx)(O,{children:e.map((n=>(0,I.jsx)(U,{children:(0,I.jsx)(L,{order:n})},n._id)))})})},J=()=>(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(i.A,{children:(0,I.jsx)(B,{})})})},3381:(n,e,r)=>{n.exports=r.p+"static/media/noAvaibleImg.2a9013f75075856591a3.png"}}]);
//# sourceMappingURL=461.cdf64f5e.chunk.js.map