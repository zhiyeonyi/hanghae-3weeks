(this.webpackJsonpweek=this.webpackJsonpweek||[]).push([[0],{28:function(n,e,t){},36:function(n,e,t){"use strict";t.r(e);var r,c,i,o,a,d,l,s,b,u=t(0),j=t.n(u),p=t(19),h=t.n(p),x=(t(28),t(7)),g=t(14),f=t(2),O=t(8),m=t(10),v=t(1),w=O.a.div(r||(r=Object(x.a)(["\n  flex-direction: column;\n  display: flex; \n  justify-content: center; \n  align-items: center; \n  margin: 1rem 0px; \n  width: 100%; \n"]))),y=O.a.div(c||(c=Object(x.a)(["\n  padding: 8x;\n  display: flex;\n  justify-content: center; \n  align-items: center; \n  margin: 1rem 0px; \n  width: 100%;\n  font-weight: bold;\n  h3 {\n    text-align: center;\n  }\n"]))),k=O.a.div(i||(i=Object(x.a)(["\n  display: flex;\n  width: 30px; \n  height: 30px; \n  border-radius: 30px; \n  margin: 5px; \n  background-color: lightgray;\n  flex-direction: row;\n"]))),C=Object(O.a)(m.b)(o||(o=Object(x.a)(["\n  appearance: none; \n  background-color: transparent; \n  border-color: transparent purple; \n  width: 0px; \n  height: 0px; \n  border-top-width: 1rem; \n  border-top-style: solid; \n  border-bottom-width: 1rem; \n  border-bottom-style: solid; \n  border-left-width: 1.6rem; \n  border-left-style: solid; \n  color: purple; \n  cursor: pointer;\n"]))),E=function(n){Object(f.e)();var e=n.weekarr,t=j.a.useState(5),r=Object(g.a)(t,1)[0];console.log(r);var c=Array.from({length:r},(function(n,e){return e})),i=Math.floor(5*Math.random()+1);return console.log(i),Object(v.jsxs)(w,{children:[Object(v.jsx)("h3",{children:"\ub0b4 \uc77c\uc8fc\uc77c\uc740?"}),e.map((function(n,e){return Object(v.jsxs)(y,{children:[n," ",c.map((function(n,e){return Object(v.jsx)("div",{children:Object(v.jsx)(k,{})},e)}))," ",Object(v.jsx)(C,{to:"/detail/".concat(n)})]},e)}))]})},F=O.a.h3(a||(a=Object(x.a)(["\n    span { \n        color: white;\n        background-color: orange;\n        padding: 0.5rem;\n        border-radius: 5px;\n    }\n    text-align: center;\n"]))),L=O.a.div(d||(d=Object(x.a)(["\n    display: flex;\n    justify-content: center;\n    margin: 30px;\n"]))),A=O.a.div(l||(l=Object(x.a)(["\n  display: flex;\n  width: 30px; \n  height: 30px; \n  border-radius: 30px; \n  margin: 5px; \n  background-color: lightgray;\n"]))),S=O.a.button(s||(s=Object(x.a)(["\n    width: 100%;\n    background-color: purple;\n    border: none;\n    border-radius: 5px;\n    padding: 1rem;\n    color: white;\n"]))),B=function(n){console.log(n);var e=Object(f.e)(),t=Object(f.f)(),r=Array.from({length:5},(function(n,e){return e})),c=j.a.useRef([]);console.log(c);var i=function(n){n.target==c.current[0]&&(c.current[0].style.background="yellow")};return j.a.useEffect((function(){return c.current[0].addEventListener("click",i),function(){c.current.removeEventListener("click",i)}}),[]),Object(v.jsxs)("div",{children:[Object(v.jsxs)(F,{children:[Object(v.jsxs)("span",{children:[t.day,"\uc694\uc77c"]}),"\ud3c9\uc810 \ub0a8\uae30\uae30"]}),Object(v.jsx)(L,{children:r.map((function(n,e){return Object(v.jsx)("div",{children:Object(v.jsx)(A,{ref:function(n){return c.current.push(n)}})},e)}))}),Object(v.jsx)(S,{onClick:function(){e.push("/")},children:"\ud3c9\uc810 \ub0a8\uae30\uae30"})]})};var I=O.a.div(b||(b=Object(x.a)(["\n  max-width: 350px;\n  min-height: 80vh;\n  background-color: #fff;\n  padding: 16px;\n  margin: 20px auto;\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  \n"]))),J=function(){var n=j.a.useState(["\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0","\uc77c"]),e=Object(g.a)(n,1)[0];return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)(I,{children:[Object(v.jsx)(f.a,{path:"/",exact:!0,children:Object(v.jsx)(E,{weekarr:e})}),Object(v.jsx)(f.a,{path:"/detail/:day",children:Object(v.jsx)(B,{day:e})})]})})},M=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;t(n),r(n),c(n),i(n),o(n)}))};h.a.render(Object(v.jsx)(m.a,{children:Object(v.jsx)(J,{})}),document.getElementById("root")),M()}},[[36,1,2]]]);
//# sourceMappingURL=main.2d987654.chunk.js.map