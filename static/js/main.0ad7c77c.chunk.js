(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,n,t){e.exports=t(70)},70:function(e,n,t){"use strict";t.r(n);var r=t(4),a=t(0),i=t.n(a),o=t(3),u=t.n(o),c=t(1),l=t(2);function d(){var e=Object(r.a)(["\n    background-color: #EBEBE4;\n    border: 1px solid darkgrey;\n"]);return d=function(){return e},e}function m(){var e=Object(r.a)(["\n    margin: auto;\n"]);return m=function(){return e},e}function f(){var e=Object(r.a)(["\n    margin: auto;\n"]);return f=function(){return e},e}function s(){var e=Object(r.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n"]);return s=function(){return e},e}function h(){var e=Object(r.a)(["\n    && {\n        margin: 20px;\n    }\n"]);return h=function(){return e},e}function b(){var e=Object(r.a)(["\n    width: 25px;\n    height: 25px;\n    margin: auto;\n    cursor: pointer;\n"]);return b=function(){return e},e}function g(){var e=Object(r.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n"]);return g=function(){return e},e}function v(){var e=Object(r.a)(["\n    margin-top: 50px;\n    width: 100%;\n"]);return v=function(){return e},e}function E(){var e=Object(r.a)(["\n    width: 100%;\n    height: 100%;\n    padding: 1em;\n    line-height: 1.5em;\n"]);return E=function(){return e},e}function p(){var e=Object(r.a)(["\n    margin: 1em auto 1em 6px;\n    && {\n        font-weight: 600;\n    }\n"]);return p=function(){return e},e}function O(){var e=Object(r.a)(["\n    && {\n        text-align: center;\n        font-size: 1em;\n        font-weight: 700;\n        font-family: ","\n    }\n"]);return O=function(){return e},e}function j(){var e=Object(r.a)(["\n    margin: 1em auto;\n    text-align: center;\n    font-size: 2em;\n    font-weight: 600;\n    font-family: ","\n"]);return j=function(){return e},e}var y={backgroundColor:"lightgrey",bodyColor:"#222"},x=Object(c.d)(l.c)(j(),function(e){return e.theme.fontFamily}),w=Object(c.d)(l.d)(O(),function(e){return e.theme.fontFamily}),k=Object(c.d)(l.a)(p()),C=Object(c.d)(l.g)(E()),_=c.d.div(v()),D=c.d.div(g()),T=Object(c.d)(l.e)(b()),I=Object(c.d)(l.f)(h()),R=Object(c.d)(l.f)(function(e){return{margin:"20px !important",backgroundColor:e.remind?"#41A3E2":y.backgroundColor,border:e.remind?"10px solid #41A3E2":"none"}}),F=c.d.div(s()),M=c.d.div(f()),Y=c.d.div(m()),B=c.d.input(d()),A=t(28),H=t(9),P=t(8),S=(t(49),function(e){var n=e.onAdd,t=Object(a.useState)(""),r=Object(H.a)(t,2),o=r[0],u=r[1];return i.a.createElement(l.f,null,i.a.createElement(l.b,{md:4}),i.a.createElement(l.b,{md:4},i.a.createElement(C,{value:o,onChange:function(e){u(e.target.value)}})),i.a.createElement(l.b,{md:4},i.a.createElement(k,{onClick:function(){n(o),u("")}},"ADD")))}),q=t(6),z=t.n(q),J=t(16),L=(t(66),function(e){return e?" "+e.format("DD.MM.YYYY HH:mm"):""}),V=function(e){var n=e.datetime,t=e.onChange,r={Today:z()(),Tomorrow:z()().add(1,"days"),Clear:null};return i.a.createElement(J.DatetimePickerTrigger,{shortcuts:r,moment:n||z()(),minDate:z()(),onChange:t},i.a.createElement("input",{type:"text",value:L(n),readOnly:!0}))},W=function(e){var n=e.datetime;return i.a.createElement(J.DatetimePickerTrigger,{moment:n,disabled:!0},i.a.createElement(B,{type:"text",value:L(n),readOnly:!0}))},N=t(25),$=t(26),G=t(27),K=t.n(G),Q=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;Object(N.a)(this,e),this._text="",this._done=!1,this._datetime=null,this._id=K()(),this._text=n,this._done=t,this._datetime=r}return Object($.a)(e,[{key:"id",value:function(){return this._id}},{key:"text",value:function(e){return void 0===e?this._text:(this._text=e,this)}},{key:"done",value:function(n){return void 0===n?this._done:new e(this._text,n,n?z()():null)}},{key:"datetime",value:function(n){return void 0===n?this._datetime:new e(this._text,this._done,n)}},{key:"reminder",value:function(){return this.done()?null:this.datetime()}}]),e}(),U=function(e){var n=e.item,t=e.onChange,r=e.remind,o=e.onRemindFinished;Object(a.useEffect)(function(){r&&P.toast.info(function(e){return"Reminder for TODO ("+function(e){var n=e.text();return n.length<10?n:n.substring(0,10)+" ..."}(e)+") due at: "+e.reminder().format("DD.MM.YYYY HH:mm")}(n),{onOpen:function(){document.getElementById(n.id()).scrollIntoView({behavior:"smooth"})},onClose:function(){o(n.id(),n.datetime(null))},position:P.toast.POSITION.TOP_LEFT,autoClose:3e4})},[r]);var u=function(e){var t=e.target.value;n.text(t)};return i.a.createElement(R,{id:n.id(),remind:r},i.a.createElement(l.b,{md:2},n.done()?null:i.a.createElement(F,null,i.a.createElement(M,null,i.a.createElement(V,{datetime:n.datetime(),onChange:function(e){t(n.id(),n.datetime(e))}})))),i.a.createElement(l.b,{md:3},n.done()?null:i.a.createElement(C,{defaultValue:n.text(),onChange:u})),i.a.createElement(l.b,{md:2},i.a.createElement(D,null,i.a.createElement(T,{type:"checkbox",checked:n.done(),onChange:function(){var e=!n.done();t(n.id(),n.done(e))},width:"25px",height:"25px",cursor:"pointer"}))),i.a.createElement(l.b,{md:3},n.done()?i.a.createElement(C,{value:n.text(),onChange:u,disabled:!0}):null),i.a.createElement(l.b,{md:2},n.done()?i.a.createElement(F,null,i.a.createElement(Y,null,i.a.createElement(W,{datetime:n.datetime()}))):null))},X=t(5),Z=t.n(X),ee=function(e){var n=e.callback,t=e.period,r=Object(a.useRef)();return Object(a.useEffect)(function(){var e=setInterval(function(){n()},t);return r.current=e,function(){clearInterval(r.current)}}),null};ee.propTypes={callback:Z.a.func.isRequired,period:Z.a.number.isRequired};var ne=ee,te=function(){return i.a.createElement(I,null,i.a.createElement(l.b,{md:2},i.a.createElement(w,null,"Reminder")),i.a.createElement(l.b,{md:3},i.a.createElement(w,null,"ToDo")),i.a.createElement(l.b,{md:2},i.a.createElement(w,null,"Mark as Done")),i.a.createElement(l.b,{md:3},i.a.createElement(w,null,"Done")),i.a.createElement(l.b,{md:2},i.a.createElement(w,null,"Completion Time")))},re=function(e){var n=e.items,t=e.onChange,r=e.onRemind,o=e.remindItemId,u=e.onRemindFinished;Object(a.useEffect)(function(){o&&!n.find(function(e){return e.id()===o})&&u(o,null)},[n,o]);return i.a.createElement(_,null,i.a.createElement(te,null),n.map(function(e){return i.a.createElement(U,{item:e,onChange:t,remind:e.id()===o,onRemindFinished:u,key:e.id()})}),i.a.createElement(ne,{callback:function(){var e=z()().add("5","minutes"),t=n.filter(function(n){var t=n.reminder();return t&&t.isBefore(e)});r(t)},period:12e4}))},ae=function(){var e=Object(a.useState)([]),n=Object(H.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)([]),u=Object(H.a)(o,2),c=u[0],l=u[1],d=function(e,n){n&&r(function(t){var r=t.findIndex(function(n){return n.id()===e}),a=Object(A.a)(t);return a[r]=n,a})},m=c.length?c[0].id():null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,null,"ToDo List"),i.a.createElement(S,{onAdd:function(e){r(function(n){return[new Q(e)].concat(n)})}}),i.a.createElement(re,{items:t,onChange:d,onRemind:l,remindItemId:m,onRemindFinished:function(e,n){l(function(n){return n.filter(function(n){return n.id()!==e})}),d(e,n)}}),i.a.createElement(P.ToastContainer,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(){var e=Object(r.a)(["\n    @import url('https://fonts.googleapis.com/css?family=Montserrat|Roboto');\n\n    body {\n        background: ",";\n        color: ",";\n        padding: 0;\n        margin: 0;\n        font-weight: 500;\n        font-family: ",";\n    }\n\n    h1 {\n        font-family: Montserrat;\n    }\n"]);return ie=function(){return e},e}var oe=Object(c.b)(ie(),function(e){return e.backgroundColor},function(e){return e.bodyColor},function(e){return e.theme.fontFamily});u.a.render(i.a.createElement(c.a,{theme:{fontFamily:"Montserrat"}},i.a.createElement(i.a.Fragment,null,i.a.createElement(oe,y),i.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.0ad7c77c.chunk.js.map