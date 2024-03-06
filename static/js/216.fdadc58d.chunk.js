"use strict";(self.webpackChunkmedicine_delivery_app_front_end=self.webpackChunkmedicine_delivery_app_front_end||[]).push([[216],{348:(n,e,t)=>{t.d(e,{A:()=>p});var r,o,i=t(528),a=t(197),s=t(880);const d=a.Ay.section(r||(r=(0,i.A)(["\n  padding: 20px 0;\n"]))),l=a.Ay.div(o||(o=(0,i.A)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 767px;\n\n  @media screen and (min-width: ",") {\n    min-width: 768px;\n  }\n  @media screen and (min-width: ",") {\n    max-width: 1200px;\n  }\n"])),s.E.breakpoints.tablet,s.E.breakpoints.desktop);var c=t(579);const p=n=>{let{children:e}=n;return(0,c.jsx)(d,{children:(0,c.jsx)(l,{children:e})})}},28:(n,e,t)=>{t.r(e),t.d(e,{default:()=>cn});var r=t(348),o=t(43),i=t(942),a=t(406),s=t(579);const d=n=>{let{onCoordinatesChange:e}=n;const{isLoaded:t}=(0,i.KD)({id:"google-map-script",googleMapsApiKey:"AIzaSyAGBDc2zDC74VOpsc7V38JMFe2uZvMrnnM"}),[r,d]=(0,o.useState)(null),[l,c]=(0,o.useState)(!1);(0,o.useEffect)((()=>{!l&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((n=>{const t={lat:n.coords.latitude,lng:n.coords.longitude};d(t),e(t),c(!0)}),(n=>{console.error("Error getting current position:",n)}))}),[l,e]);return t?(0,s.jsx)(i.u6,{mapContainerStyle:{width:"400px",height:"400px"},zoom:17,center:r,children:null!==r&&(0,s.jsx)(i.pH,{position:r,title:"Your Location",draggable:!0,onDragEnd:n=>{const t={lat:n.latLng.lat(),lng:n.latLng.lng()};d(t),e(t)}})}):(0,s.jsx)(a.A,{})};var l,c,p,x,g=t(3),u=t(978),h=(t(16),t(528)),m=t(197),y=t(26),f=t(880);const A=m.Ay.form(l||(l=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n"]))),j=m.Ay.label(c||(c=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),b=m.Ay.input(p||(p=(0,h.A)(["\n  width: 350px;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n  background: ",";\n  border-radius: 18px;\n  border: 1px solid transparent;\n"])),f.E.colors.primary,f.E.colors.quinary),v=(0,m.Ay)(y.Ay)(x||(x=(0,h.A)(["\n  width: 350px;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n  background-color: ",";\n  border-radius: 18px;\n  border: 1px solid transparent;\n\n  & input {\n    background-color: transparent;\n    border: none;\n    outline: none;\n    box-shadow: none;\n    padding: 0;\n    font-size: 18px;\n  }\n"])),f.E.colors.primary,f.E.colors.quinary),w=n=>{let{address:e}=n;const t=(0,g.d4)(u.mB),[r,i]=(0,o.useState)(""),[a,d]=(0,o.useState)(t.email||""),[l,c]=(0,o.useState)(t.phone||""),[p,x]=(0,o.useState)(t.name||"");(0,o.useEffect)((()=>{e&&i(e)}),[e]);return(0,s.jsxs)(A,{autoComplete:"on",children:[(0,s.jsxs)(j,{children:["Address",(0,s.jsx)(b,{type:"text",name:"address",autoComplete:"on",value:r,onChange:n=>{i(n.target.value)}})]}),(0,s.jsxs)(j,{children:["Email",(0,s.jsx)(b,{type:"email",name:"email",autoComplete:"on",value:a,onChange:n=>{d(n.target.value)},placeholder:"exemple@gmail.com"})]}),(0,s.jsxs)(j,{children:["Phone",(0,s.jsx)(v,{international:!0,defaultCountry:"UA",value:l,onChange:n=>{c(n)},maxLength:16})]}),(0,s.jsxs)(j,{children:["Name",(0,s.jsx)(b,{type:"text",name:"name",autoComplete:"on",value:p,onChange:n=>{x(n.target.value)},placeholder:"Your name"})]})]})},k=async n=>{const{lat:e,lng:t}=n,r="https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,",").concat(t,"&key=").concat("AIzaSyAGBDc2zDC74VOpsc7V38JMFe2uZvMrnnM");try{const n=await fetch(r),e=await n.json();return"OK"===e.status?e.results[0].formatted_address:(console.error("Error fetching address:",e.status),null)}catch(o){return console.error("Error fetching address:",o),null}};var E,C;const z=m.Ay.div(E||(E=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  height: 80vh;\n\n  padding: 30px;\n  border-radius: 40px;\n  background: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(37, 145, 251, 0.98) 0.1%,\n    #000780 99.8%\n  );\n\n  // @media screen and (min-width: ",") {\n  //   flex-direction: row;\n  //   justify-content: center;\n  //   align-items: end;\n  // }\n"])),f.E.breakpoints.desktop),_=(m.Ay.div(C||(C=(0,h.A)(["\n  width: 400px;\n  height: 400px;\n"]))),()=>{const[n,e]=(0,o.useState)(null);return(0,s.jsxs)(z,{children:[(0,s.jsx)(d,{onCoordinatesChange:async n=>{const t=await k(n);e(t)}}),(0,s.jsx)(w,{address:n})]})});var S,M,D,I,L,q,P,V=t(96),B=t(472),F=t(408),K=t(381);const O=m.Ay.div(S||(S=(0,h.A)(["\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 18px;\n  position: relative;\n\n  padding: 10px;\n  width: 100%;\n  height: auto;\n  border-radius: 30px;\n\n  background-color: ",";\n\n  // @media screen and (min-width: ",") {\n  //   width: 260px;\n  // }\n  // @media screen and (min-width: ",") {\n  //   width: 306px;\n  // }\n"])),f.E.colors.secondary,f.E.breakpoints.tablet,f.E.breakpoints.desktop),T=m.Ay.div(M||(M=(0,h.A)(["\n  width: 100%;\n  padding-top: 60%;\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),K),Y=m.Ay.img(D||(D=(0,h.A)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 12px;\n"]))),G=m.Ay.div(I||(I=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n"]))),J=m.Ay.p(L||(L=(0,h.A)(["\n  font-size: 24px;\n  font-weight: 700;\n\n  color: ",";\n"])),f.E.colors.primary),Z=m.Ay.p(q||(q=(0,h.A)(["\n  font-size: 16px;\n  font-weight: 500;\n\n  color: ",";\n"])),f.E.colors.primary),$=m.Ay.input(P||(P=(0,h.A)(["\n  width: 100%;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n  background: ",";\n  border-radius: 18px;\n  border: 1px solid transparent;\n"])),f.E.colors.primary,f.E.colors.quinary),H=n=>{let{orderMedicine:e}=n;const t=(0,g.wA)(),r=(0,g.d4)(V.e),{urlToImage:i,name:a,price:d,_id:l}=e,[c,p]=(0,o.useState)(1);return(0,s.jsxs)(O,{children:[(0,s.jsx)(T,{children:(0,s.jsx)(Y,{src:i,alt:"Medicine_img"})}),(0,s.jsxs)(G,{children:[(0,s.jsx)(J,{children:a}),(0,s.jsxs)(Z,{children:["Price: ",d," $"]}),(0,s.jsx)($,{type:"number",name:"quantity",min:"1",value:c,onChange:n=>{const e=parseInt(n.target.value);p(e)}}),(0,s.jsx)(F.A,{func:()=>{r.some((n=>n._id===l))&&(console.log(r.some((n=>n._id===l))),t((0,B.a6)(e)))},name:"Remove",type:"button"})]})]})};var N,R,U;const Q=m.Ay.div(N||(N=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n\n  height: 80vh;\n  overflow-y: auto;\n\n  padding: 30px;\n  border-radius: 40px;\n  background: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(37, 145, 251, 0.98) 0.1%,\n    #000780 99.8%\n  );\n\n  // @media screen and (min-width: ",") {\n  //   flex-direction: row;\n  //   justify-content: center;\n  //   align-items: end;\n  // }\n"])),f.E.breakpoints.desktop),W=m.Ay.ul(R||(R=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n\n  width: 100%;\n"]))),X=m.Ay.li(U||(U=(0,h.A)(["\n  width: 100%;\n  flex-grow: 1;\n  color: ",";\n"])),f.E.colors.primary),nn=()=>{const n=(0,g.d4)(V.e),[e,t]=(0,o.useState)(0);console.log("\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0430 :",e);const r=n=>{t(e+n)};return(0,s.jsx)(Q,{children:0===n.length?(0,s.jsx)("p",{children:"You don't have any orders."}):(0,s.jsx)(W,{children:n.map((n=>(0,s.jsx)(X,{children:(0,s.jsx)(H,{orderMedicine:n,itemTotalPrice:r})},n._id)))})})};var en,tn,rn;const on=m.Ay.div(en||(en=(0,h.A)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 18px;\n"]))),an=m.Ay.div(tn||(tn=(0,h.A)(["\n  display: flex;\n  gap: 50px;\n  justify-content: end;\n  align-items: center;\n"]))),sn=m.Ay.h2(rn||(rn=(0,h.A)(["\n  font-size: 35px;\n  font-weight: 500;\n\n  color: ",";\n"])),f.E.colors.primary);var dn=t(794);const ln=n=>{n.preventDefault()},cn=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{children:(0,s.jsxs)(on,{children:[(0,s.jsx)(_,{}),(0,s.jsx)(nn,{})]})}),(0,s.jsx)(r.A,{children:(0,s.jsxs)(an,{children:[(0,s.jsx)(sn,{children:"Total price: $"}),(0,s.jsx)(dn.A,{name:"Submit",type:"submit",func:ln})]})})]})},96:(n,e,t)=>{t.d(e,{e:()=>r});const r=n=>n.orders.orders},381:(n,e,t)=>{n.exports=t.p+"static/media/noAvaibleImg.2a9013f75075856591a3.png"}}]);
//# sourceMappingURL=216.fdadc58d.chunk.js.map