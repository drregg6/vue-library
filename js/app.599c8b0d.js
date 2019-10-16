(function(t){function e(e){for(var n,i,c=e[0],u=e[1],s=e[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,c=1;c<r.length;c++){var u=r[c];0!==o[u]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},o={app:0},a=[];function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/<vue-library>/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"17d6":function(t,e,r){},"1b33":function(t,e,r){},"2ba5":function(t,e,r){},"35a8":function(t,e,r){"use strict";var n=r("51a4"),o=r.n(n);o.a},"51a4":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"container"},[r("Header"),r("AddBook"),r("Library"),r("Footer")],1)])},a=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("h1",[t._v("\n    Odin Library\n  ")])])}],u={name:"Header"},s=u,l=(r("f89e"),r("2877")),p=Object(l["a"])(s,i,c,!1,null,"3f5f7af4",null),f=p.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"add-book"},[r("form",{on:{submit:t.newBook}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.author,expression:"author"}],attrs:{type:"text",placeholder:"Author"},domProps:{value:t.author},on:{input:function(e){e.target.composing||(t.author=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.pages,expression:"pages"}],attrs:{type:"text",placeholder:"Page Count"},domProps:{value:t.pages},on:{input:function(e){e.target.composing||(t.pages=e.target.value)}}}),r("input",{attrs:{type:"submit",value:"Add Book"}})])])},b=[],v=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),m=r("2f62"),g=r("11c1"),h=r.n(g);function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(r,!0).forEach((function(e){Object(v["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var k={name:"AddBook",data:function(){return{title:"",author:"",pages:""}},methods:O({},Object(m["b"])(["addBook"]),{newBook:function(t){t.preventDefault();var e={title:this.title,author:this.author,pages:this.pages,isRead:!1,id:h.a.v4()};this.addBook(e),this.title="",this.author="",this.pages=""}})},j=k,_=(r("5aa6"),Object(l["a"])(j,d,b,!1,null,"cf597b6e",null)),w=_.exports,P=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"library"},t._l(t.getLibrary,(function(t){return r("Book",{key:t.id,attrs:{book:t}})})),1)},x=[],B=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"book"},[r("h1",[t._v(t._s(t.book.title))]),r("p",{staticClass:"author"},[t._v(t._s(t.book.author))]),r("p",{staticClass:"pages"},[t._v("pg. "+t._s(t.book.pages))]),r("div",{staticClass:"buttons"},[r("span",{staticClass:"read",class:{"is-read":t.book.isRead},on:{click:function(e){return t.onClick(t.book)}}}),r("span",{staticClass:"delete",on:{click:function(e){return t.deleteBook(t.book.id)}}},[t._v("\n      X\n    ")])])])},D=[];function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(r,!0).forEach((function(e){Object(v["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var S={name:"Book",props:["book"],methods:C({},Object(m["b"])(["deleteBook","updateBook"]),{onClick:function(t){var e={title:t.title,author:t.author,id:t.id,isRead:!t.isRead,pages:t.pages};this.updateBook(e)}})},$=S,L=(r("6491"),Object(l["a"])($,B,D,!1,null,"ae419c4a",null)),R=L.exports,A={name:"Library",computed:Object(m["c"])(["getLibrary"]),components:{Book:R}},M=A,T=(r("8109"),Object(l["a"])(M,P,x,!1,null,"cb26d98a",null)),F=T.exports,H=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[t._v("\n  © "),r("a",{attrs:{href:"https://www.github.com/drregg6",target:"_blink"}},[t._v("Dave Regg")])])}],J={name:"Footer"},U=J,I=(r("35a8"),Object(l["a"])(U,H,N,!1,null,"5d797adb",null)),X=I.exports,q={name:"App",components:{Header:f,AddBook:w,Library:F,Footer:X}},z=q,G=(r("034f"),Object(l["a"])(z,o,a,!1,null,null,null)),K=G.exports,Q=r("bfa9"),V=(r("20d6"),{library:[{id:1,title:"Example Book",author:"Dave Regg",isRead:!1,pages:"0"}]}),W={getLibrary:function(t){return t.library}},Y={addBook:function(t,e){var r=t.commit;r("commitBook",e)},deleteBook:function(t,e){var r=t.commit;r("commitDelete",e)},updateBook:function(t,e){var r=t.commit;r("commitUpdate",e)}},Z={commitBook:function(t,e){return t.library.push(e)},commitDelete:function(t,e){1!==e&&(t.library=t.library.filter((function(t){return t.id!==e})))},commitUpdate:function(t,e){var r=t.library.findIndex((function(t){return t.id===e.id}));-1!==r&&t.library.splice(r,1,e)}},tt={state:V,getters:W,actions:Y,mutations:Z};n["a"].use(m["a"]);var et=new Q["a"]({key:"vuex-library",storage:window.localStorage}),rt=new m["a"].Store({plugins:[et.plugin],modules:{library:tt}});n["a"].config.productionTip=!1,new n["a"]({store:rt,render:function(t){return t(K)}}).$mount("#app")},"5aa6":function(t,e,r){"use strict";var n=r("ee75"),o=r.n(n);o.a},6491:function(t,e,r){"use strict";var n=r("17d6"),o=r.n(n);o.a},"64a9":function(t,e,r){},8109:function(t,e,r){"use strict";var n=r("1b33"),o=r.n(n);o.a},ee75:function(t,e,r){},f89e:function(t,e,r){"use strict";var n=r("2ba5"),o=r.n(n);o.a}});
//# sourceMappingURL=app.599c8b0d.js.map