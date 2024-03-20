"use strict";(self.webpackChunkmedicine_delivery_app_front_end=self.webpackChunkmedicine_delivery_app_front_end||[]).push([[216],{8348:(n,e,o)=>{o.d(e,{A:()=>p});var t,r,i=o(7528),a=o(197),s=o(4880);const d=a.Ay.section(t||(t=(0,i.A)(["\n  padding: 20px 0;\n"]))),l=a.Ay.div(r||(r=(0,i.A)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 767px;\n\n  @media screen and (min-width: ",") {\n    min-width: 768px;\n  }\n  @media screen and (min-width: ",") {\n    max-width: 1200px;\n  }\n"])),s.E.breakpoints.tablet,s.E.breakpoints.desktop);var c=o(579);const p=n=>{let{children:e}=n;return(0,c.jsx)(d,{children:(0,c.jsx)(l,{children:e})})}},4028:(n,e,o)=>{o.r(e),o.d(e,{default:()=>bn});var t=o(5043),r=o(3003),i=o(8348),a=o(9942),s=o(7406),d=o(579);const l=n=>{let{onCoordinatesChange:e}=n;const{isLoaded:o}=(0,a.KD)({id:"google-map-script",googleMapsApiKey:"AIzaSyAGBDc2zDC74VOpsc7V38JMFe2uZvMrnnM"}),[r,i]=(0,t.useState)(null),[l,c]=(0,t.useState)(!1);(0,t.useEffect)((()=>{!l&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((n=>{const o={lat:n.coords.latitude,lng:n.coords.longitude};i(o),e(o),c(!0)}),(n=>{console.error("Error getting current position:",n)}))}),[l,e]);return o?(0,d.jsx)(a.u6,{mapContainerStyle:{width:"300px",height:"300px"},zoom:17,center:r,children:null!==r&&(0,d.jsx)(a.pH,{position:r,title:"Your Location",draggable:!0,onDragEnd:n=>{const o={lat:n.latLng.lat(),lng:n.latLng.lng()};i(o),e(o)}})}):(0,d.jsx)(s.A,{})};var c,p,u,x,g=o(3978),h=(o(5016),o(7528)),m=o(197),y=o(5026),f=o(4880);const A=m.Ay.form(c||(c=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n"]))),j=m.Ay.label(p||(p=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),v=m.Ay.input(u||(u=(0,h.A)(["\n  width: 350px;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n\n  border-radius: 3px;\n  border: 1px solid ",";\n  background: ",";\n"])),f.E.colors.primary,f.E.colors.accent,f.E.colors.secondary),b=(0,m.Ay)(y.Ay)(x||(x=(0,h.A)(["\n  width: 350px;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n\n  border-radius: 3px;\n  border: 1px solid ",";\n  background: ",";\n\n  & input {\n    background-color: transparent;\n    border: none;\n    outline: none;\n    box-shadow: none;\n    padding: 0;\n    font-size: 18px;\n  }\n"])),f.E.colors.primary,f.E.colors.accent,f.E.colors.secondary),w=n=>{let{address:e}=n;const o=(0,r.d4)(g.mB),[i,a]=(0,t.useState)(""),[s,l]=(0,t.useState)(o.email||""),[c,p]=(0,t.useState)(o.phone||""),[u,x]=(0,t.useState)(o.name||"");(0,t.useEffect)((()=>{e&&a(e)}),[e]);return(0,d.jsxs)(A,{autoComplete:"on",children:[(0,d.jsxs)(j,{children:["Address",(0,d.jsx)(v,{type:"text",name:"address",autoComplete:"on",value:i,onChange:n=>{a(n.target.value)}})]}),(0,d.jsxs)(j,{children:["Email",(0,d.jsx)(v,{type:"email",name:"email",autoComplete:"on",value:s,onChange:n=>{l(n.target.value)},placeholder:"exemple@gmail.com"})]}),(0,d.jsxs)(j,{children:["Phone",(0,d.jsx)(b,{international:!0,defaultCountry:"UA",value:c,onChange:n=>{p(n)},maxLength:16})]}),(0,d.jsxs)(j,{children:["Name",(0,d.jsx)(v,{type:"text",name:"name",autoComplete:"on",value:u,onChange:n=>{x(n.target.value)},placeholder:"Your name"})]})]})},E=async n=>{const{lat:e,lng:o}=n,t="https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,",").concat(o,"&key=").concat("AIzaSyAGBDc2zDC74VOpsc7V38JMFe2uZvMrnnM");try{const n=await fetch(t),e=await n.json();return"OK"===e.status?e.results[0].formatted_address:(console.error("Error fetching address:",e.status),null)}catch(r){return console.error("Error fetching address:",r),null}};var S,C;const k=m.Ay.div(S||(S=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n\n  padding: 30px;\n"]))),z=(m.Ay.div(C||(C=(0,h.A)(["\n  width: 400px;\n  height: 400px;\n"]))),()=>{const[n,e]=(0,t.useState)(null);return(0,d.jsxs)(k,{children:[(0,d.jsx)(l,{onCoordinatesChange:async n=>{const o=await E(n);e(o)}}),(0,d.jsx)(w,{address:n})]})});var _,D,M,P,L,T,I,V=o(1096),F=o(8472),B=o(5408),K=o(3381);const O=m.Ay.div(_||(_=(0,h.A)(["\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 10px;\n  position: relative;\n\n  padding: 10px;\n  width: 100%;\n  height: auto;\n\n  border-radius: 5px;\n  background: ",";\n  box-shadow: ",";\n"])),f.E.colors.secondary,f.E.colors.boxShadowSecondary),Y=m.Ay.div(D||(D=(0,h.A)(["\n  width: 100%;\n  padding-top: 60%;\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),K),$=m.Ay.img(M||(M=(0,h.A)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 12px;\n"]))),G=m.Ay.div(P||(P=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  text-align: center;\n"]))),J=m.Ay.p(L||(L=(0,h.A)(["\n  font-size: 24px;\n  font-weight: 700;\n\n  color: ",";\n"])),f.E.colors.primary),R=m.Ay.p(T||(T=(0,h.A)(["\n  font-size: 16px;\n  font-weight: 500;\n\n  color: ",";\n"])),f.E.colors.primary),Z=m.Ay.input(I||(I=(0,h.A)(["\n  width: 100%;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n\n  border-radius: 3px;\n  border: 1px solid ",";\n  background: ",";\n"])),f.E.colors.primary,f.E.colors.accent,f.E.colors.secondary),q=n=>{let{orderMedicine:e,updateTotalPrice:o}=n;const i=(0,r.wA)(),a=(0,r.d4)(V.e),{urlToImage:s,name:l,price:c,_id:p}=e,[u,x]=(0,t.useState)(1);(0,t.useEffect)((()=>{o(c*u)}),[u,o,c]);return(0,d.jsxs)(O,{children:[(0,d.jsx)(Y,{children:(0,d.jsx)($,{src:s,alt:"Medicine_img"})}),(0,d.jsxs)(G,{children:[(0,d.jsx)(J,{children:l}),(0,d.jsxs)(R,{children:["Price: ",c," $"]}),(0,d.jsx)(Z,{type:"number",name:"quantity",min:"1",value:u,onChange:n=>{const e=parseInt(n.target.value);x(e)}}),(0,d.jsx)(B.A,{func:()=>{a.some((n=>n._id===p))&&(o(0),i((0,F.a6)(e)))},name:"Remove",type:"button"})]})]})};var H,N,U,Q,W;const X=m.Ay.div(H||(H=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n\n  height: 80vh;\n  overflow-y: auto;\n\n  padding: 30px;\n  border-radius: 5px;\n  background: ",";\n  box-shadow: ",";\n"])),f.E.colors.secondary,f.E.colors.boxShadowSecondary),nn=m.Ay.ul(N||(N=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n\n  width: 100%;\n"]))),en=m.Ay.li(U||(U=(0,h.A)(["\n  width: 100%;\n  flex-grow: 1;\n  color: ",";\n"])),f.E.colors.primary),on=m.Ay.div(Q||(Q=(0,h.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]))),tn=m.Ay.p(W||(W=(0,h.A)(["\n  font-size: 24px;\n  font-weight: 700;\n\n  color: ",";\n"])),f.E.colors.primary),rn=n=>{let{shopingTotalPrice:e}=n;const o=(0,r.d4)(V.e),[i,a]=(0,t.useState)(0);(0,t.useEffect)((()=>{e(i)}),[i,e]);const s=n=>{a((e=>n>e?e+(n-e):n))};return(0,d.jsx)(X,{children:0===o.length?(0,d.jsxs)(on,{children:[(0,d.jsx)(tn,{children:"You don't have any orders."})," "]}):(0,d.jsx)(nn,{children:o.map((n=>(0,d.jsx)(en,{children:(0,d.jsx)(q,{orderMedicine:n,updateTotalPrice:s})},n._id)))})})};var an,sn,dn,ln,cn,pn,un=o(3794),xn=o(5380),gn=o(6451),hn=o(7119);const mn=m.Ay.div(an||(an=(0,h.A)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 18px;\n"]))),yn=m.Ay.div(sn||(sn=(0,h.A)(["\n  display: flex;\n  gap: 50px;\n  justify-content: end;\n  align-items: center;\n"]))),fn=m.Ay.h2(dn||(dn=(0,h.A)(["\n  font-size: 35px;\n  font-weight: 500;\n\n  color: ",";\n"])),f.E.colors.primary),An=m.Ay.div(ln||(ln=(0,h.A)([""]))),jn=m.Ay.form(cn||(cn=(0,h.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n"]))),vn=m.Ay.input(pn||(pn=(0,h.A)(["\n  width: 350px;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n\n  border-radius: 3px;\n  border: 1px solid ",";\n  background: ",";\n"])),f.E.colors.primary,f.E.colors.accent,f.E.colors.secondary),bn=()=>{const n=(0,r.wA)(),e=(0,r.d4)(gn.kS),o=(0,r.d4)(gn.Di),a=(0,r.d4)(V.e),[l,c]=(0,t.useState)(0),[p,u]=(0,t.useState)(0),[x,g]=(0,t.useState)("");(0,t.useEffect)((()=>{if(null!==e&&0!==e){u(l-l*e/100)}}),[e,u,l]);return(0,d.jsx)(d.Fragment,{children:o?(0,d.jsx)(s.A,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.A,{children:(0,d.jsxs)(mn,{children:[(0,d.jsx)(z,{}),(0,d.jsx)(rn,{shopingTotalPrice:n=>{c(n)}})]})}),(0,d.jsx)(i.A,{children:(0,d.jsxs)(yn,{children:[(0,d.jsx)(An,{children:(0,d.jsxs)(jn,{onSubmit:e=>{e.preventDefault(),n((0,xn.V)(String(x)))},children:[(0,d.jsx)(vn,{type:"text",name:"discount",value:x,onChange:n=>{g(n.target.value)},autoComplete:"off",placeholder:"Put your discount here"}),(0,d.jsx)(un.A,{name:"Read",type:"submit",disabled:!x.trim()})]})}),p?(0,d.jsxs)(fn,{children:["Price with discount: ",p," $"]}):(0,d.jsxs)(fn,{children:["Total price: ",l," $"]}),(0,d.jsx)(un.A,{name:"Submit",type:"submit",func:e=>{e.preventDefault();const o=p||l,t=a.map((n=>n._id));n((0,hn.f)({totalPrice:o,orderList:t}))},disabled:0===a.length})]})})]})})}},6451:(n,e,o)=>{o.d(e,{Di:()=>i,Ed:()=>t,kS:()=>r,nT:()=>a});const t=n=>n.coupons.coupons,r=n=>n.coupons.discount,i=n=>n.coupons.isLoading,a=n=>n.coupons.error},1096:(n,e,o)=>{o.d(e,{e:()=>t});const t=n=>n.orders.orders},3381:(n,e,o)=>{n.exports=o.p+"static/media/noAvaibleImg.2a9013f75075856591a3.png"}}]);
//# sourceMappingURL=216.6d7fdd10.chunk.js.map