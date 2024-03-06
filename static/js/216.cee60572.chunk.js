"use strict";(self.webpackChunkmedicine_delivery_app_front_end=self.webpackChunkmedicine_delivery_app_front_end||[]).push([[216],{348:(n,e,t)=>{t.d(e,{A:()=>p});var r,o,i=t(528),a=t(197),s=t(880);const d=a.Ay.section(r||(r=(0,i.A)(["\n  padding: 20px 0;\n"]))),l=a.Ay.div(o||(o=(0,i.A)(["\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-right: auto;\n  margin-left: auto;\n  max-width: 767px;\n\n  @media screen and (min-width: ",") {\n    min-width: 768px;\n  }\n  @media screen and (min-width: ",") {\n    max-width: 1200px;\n  }\n"])),s.E.breakpoints.tablet,s.E.breakpoints.desktop);var c=t(579);const p=n=>{let{children:e}=n;return(0,c.jsx)(d,{children:(0,c.jsx)(l,{children:e})})}},28:(n,e,t)=>{t.r(e),t.d(e,{default:()=>An});var r=t(43),o=t(348),i=t(942),a=t(406),s=t(579);const d=n=>{let{onCoordinatesChange:e}=n;const{isLoaded:t}=(0,i.KD)({id:"google-map-script",googleMapsApiKey:"AIzaSyAGBDc2zDC74VOpsc7V38JMFe2uZvMrnnM"}),[o,d]=(0,r.useState)(null),[l,c]=(0,r.useState)(!1);(0,r.useEffect)((()=>{!l&&navigator.geolocation&&navigator.geolocation.getCurrentPosition((n=>{const t={lat:n.coords.latitude,lng:n.coords.longitude};d(t),e(t),c(!0)}),(n=>{console.error("Error getting current position:",n)}))}),[l,e]);return t?(0,s.jsx)(i.u6,{mapContainerStyle:{width:"400px",height:"400px"},zoom:17,center:o,children:null!==o&&(0,s.jsx)(i.pH,{position:o,title:"Your Location",draggable:!0,onDragEnd:n=>{const t={lat:n.latLng.lat(),lng:n.latLng.lng()};d(t),e(t)}})}):(0,s.jsx)(a.A,{})};var l,c,p,u,x=t(3),g=t(978),h=(t(16),t(528)),m=t(197),y=t(26),f=t(880);const A=m.Ay.form(l||(l=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 15px;\n"]))),j=m.Ay.label(c||(c=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  font-size: 18px;\n  font-weight: 500;\n"]))),b=m.Ay.input(p||(p=(0,h.A)(["\n  width: 350px;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n  background: ",";\n  border-radius: 18px;\n  border: 1px solid transparent;\n"])),f.E.colors.primary,f.E.colors.quinary),v=(0,m.Ay)(y.Ay)(u||(u=(0,h.A)(["\n  width: 350px;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n  background-color: ",";\n  border-radius: 18px;\n  border: 1px solid transparent;\n\n  & input {\n    background-color: transparent;\n    border: none;\n    outline: none;\n    box-shadow: none;\n    padding: 0;\n    font-size: 18px;\n  }\n"])),f.E.colors.primary,f.E.colors.quinary),w=n=>{let{address:e}=n;const t=(0,x.d4)(g.mB),[o,i]=(0,r.useState)(""),[a,d]=(0,r.useState)(t.email||""),[l,c]=(0,r.useState)(t.phone||""),[p,u]=(0,r.useState)(t.name||"");(0,r.useEffect)((()=>{e&&i(e)}),[e]);return(0,s.jsxs)(A,{autoComplete:"on",children:[(0,s.jsxs)(j,{children:["Address",(0,s.jsx)(b,{type:"text",name:"address",autoComplete:"on",value:o,onChange:n=>{i(n.target.value)}})]}),(0,s.jsxs)(j,{children:["Email",(0,s.jsx)(b,{type:"email",name:"email",autoComplete:"on",value:a,onChange:n=>{d(n.target.value)},placeholder:"exemple@gmail.com"})]}),(0,s.jsxs)(j,{children:["Phone",(0,s.jsx)(v,{international:!0,defaultCountry:"UA",value:l,onChange:n=>{c(n)},maxLength:16})]}),(0,s.jsxs)(j,{children:["Name",(0,s.jsx)(b,{type:"text",name:"name",autoComplete:"on",value:p,onChange:n=>{u(n.target.value)},placeholder:"Your name"})]})]})},E=async n=>{const{lat:e,lng:t}=n,r="https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(e,",").concat(t,"&key=").concat("AIzaSyAGBDc2zDC74VOpsc7V38JMFe2uZvMrnnM");try{const n=await fetch(r),e=await n.json();return"OK"===e.status?e.results[0].formatted_address:(console.error("Error fetching address:",e.status),null)}catch(o){return console.error("Error fetching address:",o),null}};var k,C;const z=m.Ay.div(k||(k=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 18px;\n  height: 80vh;\n\n  padding: 30px;\n  border-radius: 40px;\n  background: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(37, 145, 251, 0.98) 0.1%,\n    #000780 99.8%\n  );\n\n  // @media screen and (min-width: ",") {\n  //   flex-direction: row;\n  //   justify-content: center;\n  //   align-items: end;\n  // }\n"])),f.E.breakpoints.desktop),S=(m.Ay.div(C||(C=(0,h.A)(["\n  width: 400px;\n  height: 400px;\n"]))),()=>{const[n,e]=(0,r.useState)(null);return(0,s.jsxs)(z,{children:[(0,s.jsx)(d,{onCoordinatesChange:async n=>{const t=await E(n);e(t)}}),(0,s.jsx)(w,{address:n})]})});var _,M,D,P,T,q,I,L=t(96),V=t(472),B=t(408),F=t(381);const K=m.Ay.div(_||(_=(0,h.A)(["\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  gap: 18px;\n  position: relative;\n\n  padding: 10px;\n  width: 100%;\n  height: auto;\n  border-radius: 30px;\n\n  background-color: ",";\n\n  // @media screen and (min-width: ",") {\n  //   width: 260px;\n  // }\n  // @media screen and (min-width: ",") {\n  //   width: 306px;\n  // }\n"])),f.E.colors.secondary,f.E.breakpoints.tablet,f.E.breakpoints.desktop),O=m.Ay.div(M||(M=(0,h.A)(["\n  width: 100%;\n  padding-top: 60%;\n  position: relative;\n  border-radius: 12px;\n  overflow: hidden;\n\n  background-image: url(",");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),F),Y=m.Ay.img(D||(D=(0,h.A)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 12px;\n"]))),G=m.Ay.div(P||(P=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  text-align: center;\n"]))),J=m.Ay.p(T||(T=(0,h.A)(["\n  font-size: 24px;\n  font-weight: 700;\n\n  color: ",";\n"])),f.E.colors.primary),R=m.Ay.p(q||(q=(0,h.A)(["\n  font-size: 16px;\n  font-weight: 500;\n\n  color: ",";\n"])),f.E.colors.primary),Z=m.Ay.input(I||(I=(0,h.A)(["\n  width: 100%;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n  background: ",";\n  border-radius: 18px;\n  border: 1px solid transparent;\n"])),f.E.colors.primary,f.E.colors.quinary),$=n=>{let{orderMedicine:e,updateTotalPrice:t}=n;const o=(0,x.wA)(),i=(0,x.d4)(L.e),{urlToImage:a,name:d,price:l,_id:c}=e,[p,u]=(0,r.useState)(1);(0,r.useEffect)((()=>{t(l*p)}),[p,t,l]);return(0,s.jsxs)(K,{children:[(0,s.jsx)(O,{children:(0,s.jsx)(Y,{src:a,alt:"Medicine_img"})}),(0,s.jsxs)(G,{children:[(0,s.jsx)(J,{children:d}),(0,s.jsxs)(R,{children:["Price: ",l," $"]}),(0,s.jsx)(Z,{type:"number",name:"quantity",min:"1",value:p,onChange:n=>{const e=parseInt(n.target.value);u(e)}}),(0,s.jsx)(B.A,{func:()=>{i.some((n=>n._id===c))&&(t(0),o((0,V.a6)(e)))},name:"Remove",type:"button"})]})]})};var H,N,U,Q,W;const X=m.Ay.div(H||(H=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  // justify-content: center;\n  align-items: center;\n  gap: 18px;\n\n  height: 80vh;\n  overflow-y: auto;\n\n  padding: 30px;\n  border-radius: 40px;\n  background: radial-gradient(\n    circle farthest-corner at 10% 20%,\n    rgba(37, 145, 251, 0.98) 0.1%,\n    #000780 99.8%\n  );\n\n  // @media screen and (min-width: ",") {\n  //   flex-direction: row;\n  //   justify-content: center;\n  //   align-items: end;\n  // }\n"])),f.E.breakpoints.desktop),nn=m.Ay.ul(N||(N=(0,h.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n\n  width: 100%;\n"]))),en=m.Ay.li(U||(U=(0,h.A)(["\n  width: 100%;\n  flex-grow: 1;\n  color: ",";\n"])),f.E.colors.primary),tn=m.Ay.div(Q||(Q=(0,h.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n"]))),rn=m.Ay.p(W||(W=(0,h.A)(["\n  font-size: 24px;\n  font-weight: 700;\n\n  color: ",";\n"])),f.E.colors.secondary),on=n=>{let{shopingTotalPrice:e}=n;const t=(0,x.d4)(L.e),[o,i]=(0,r.useState)(0);(0,r.useEffect)((()=>{e(o)}),[o,e]);const a=n=>{i((e=>n>e?e+(n-e):n))};return(0,s.jsx)(X,{children:0===t.length?(0,s.jsxs)(tn,{children:[(0,s.jsx)(rn,{children:"You don't have any orders."})," "]}):(0,s.jsx)(nn,{children:t.map((n=>(0,s.jsx)(en,{children:(0,s.jsx)($,{orderMedicine:n,updateTotalPrice:a})},n._id)))})})};var an,sn,dn,ln,cn,pn;const un=m.Ay.div(an||(an=(0,h.A)(["\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  gap: 18px;\n"]))),xn=m.Ay.div(sn||(sn=(0,h.A)(["\n  display: flex;\n  gap: 50px;\n  justify-content: end;\n  align-items: center;\n"]))),gn=m.Ay.h2(dn||(dn=(0,h.A)(["\n  font-size: 35px;\n  font-weight: 500;\n\n  color: ",";\n"])),f.E.colors.primary),hn=m.Ay.div(ln||(ln=(0,h.A)(["\n  //   display: flex;\n  //   justify-content: center;\n  //   align-items: center;\n"]))),mn=m.Ay.form(cn||(cn=(0,h.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n"]))),yn=m.Ay.input(pn||(pn=(0,h.A)(["\n  width: 350px;\n  padding: 18px 20px;\n  font-size: 18px;\n\n  color: ",";\n  background: ",";\n  border-radius: 18px;\n  border: 1px solid transparent;\n"])),f.E.colors.primary,f.E.colors.quinary);var fn=t(794);const An=()=>{const[n,e]=(0,r.useState)("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.A,{children:(0,s.jsxs)(un,{children:[(0,s.jsx)(S,{}),(0,s.jsx)(on,{shopingTotalPrice:n=>{e(n)}})]})}),(0,s.jsx)(o.A,{children:(0,s.jsxs)(xn,{children:[(0,s.jsx)(hn,{children:(0,s.jsxs)(mn,{onSubmit:n=>{n.preventDefault();const e=n.currentTarget;console.log(e.elements.discount.value),e.reset()},children:[(0,s.jsx)(yn,{type:"text",name:"discount",autoComplete:"off",placeholder:"Put your discount here"}),(0,s.jsx)(fn.A,{name:"Read",type:"submit"})]})}),(0,s.jsxs)(gn,{children:["Total price: ",n," $"]}),(0,s.jsx)(fn.A,{name:"Submit",type:"submit",func:n=>{n.preventDefault()}})]})})]})}},96:(n,e,t)=>{t.d(e,{e:()=>r});const r=n=>n.orders.orders},381:(n,e,t)=>{n.exports=t.p+"static/media/noAvaibleImg.2a9013f75075856591a3.png"}}]);
//# sourceMappingURL=216.cee60572.chunk.js.map