import{S as q,i as x,s as A,k as w,y as d,l as C,m as I,z as g,h as u,n as D,b as k,A as b,g as m,d as $,B as h,a as B,e as R,c as E,v as L,f as P,D as T,J as V,a6 as z,N as _,F as N}from"../chunks/index.44600393.js";import{R as j,B as F,L as G}from"../chunks/BreadcrumbOne.dc0917c8.js";import{q as J}from"../chunks/public.e689485d.js";import{R as O,C as H}from"../chunks/Row.83492d24.js";import{C as K}from"../chunks/Container.32d27a0e.js";import"../chunks/Offcanvas.svelte_svelte_type_style_lang.c813ed7b.js";function M(c){let e,r;const n=[c[1]];let a={};for(let t=0;t<n.length;t+=1)a=T(a,n[t]);return e=new F({props:a}),{c(){d(e.$$.fragment)},l(t){g(e.$$.fragment,t)},m(t,o){b(e,t,o),r=!0},p(t,o){const i=o&2?V(n,[z(t[1])]):{};e.$set(i)},i(t){r||(m(e.$$.fragment,t),r=!0)},o(t){$(e.$$.fragment,t),r=!1},d(t){h(e,t)}}}function Q(c){return{c:_,l:_,m:_,i:_,o:_,d:_}}function U(c){let e,r,n,a;return n=new G({}),{c(){e=w("div"),r=w("div"),d(n.$$.fragment),this.h()},l(t){e=C(t,"DIV",{class:!0});var o=I(e);r=C(o,"DIV",{class:!0});var i=I(r);g(n.$$.fragment,i),i.forEach(u),o.forEach(u),this.h()},h(){D(r,"class","m-auto"),D(e,"class","d-flex")},m(t,o){k(t,e,o),N(e,r),b(n,r,null),a=!0},i(t){a||(m(n.$$.fragment,t),a=!0)},o(t){$(n.$$.fragment,t),a=!1},d(t){t&&u(e),h(n)}}}function W(c){let e,r,n,a,t,o;e=new H({props:{lg:12,$$slots:{default:[M]},$$scope:{ctx:c}}});const i=[U,Q],l=[];function v(s,f){return s[0]?0:1}return n=v(c),a=l[n]=i[n](c),{c(){d(e.$$.fragment),r=B(),a.c(),t=R()},l(s){g(e.$$.fragment,s),r=E(s),a.l(s),t=R()},m(s,f){b(e,s,f),k(s,r,f),l[n].m(s,f),k(s,t,f),o=!0},p(s,f){const p={};f&128&&(p.$$scope={dirty:f,ctx:s}),e.$set(p);let y=n;n=v(s),n!==y&&(L(),$(l[y],1,1,()=>{l[y]=null}),P(),a=l[n],a||(a=l[n]=i[n](s),a.c()),m(a,1),a.m(t.parentNode,t))},i(s){o||(m(e.$$.fragment,s),m(a),o=!0)},o(s){$(e.$$.fragment,s),$(a),o=!1},d(s){h(e,s),s&&u(r),l[n].d(s),s&&u(t)}}}function X(c){let e,r;return e=new O({props:{$$slots:{default:[W]},$$scope:{ctx:c}}}),{c(){d(e.$$.fragment)},l(n){g(e.$$.fragment,n)},m(n,a){b(e,n,a),r=!0},p(n,a){const t={};a&129&&(t.$$scope={dirty:a,ctx:n}),e.$set(t)},i(n){r||(m(e.$$.fragment,n),r=!0)},o(n){$(e.$$.fragment,n),r=!1},d(n){h(e,n)}}}function Y(c){let e,r,n;return r=new K({props:{fluid:!0,$$slots:{default:[X]},$$scope:{ctx:c}}}),{c(){e=w("div"),d(r.$$.fragment),this.h()},l(a){e=C(a,"DIV",{class:!0});var t=I(e);g(r.$$.fragment,t),t.forEach(u),this.h()},h(){D(e,"class","component-page mb-25")},m(a,t){k(a,e,t),b(r,e,null),n=!0},p(a,[t]){const o={};t&129&&(o.$$scope={dirty:t,ctx:a}),r.$set(o)},i(a){n||(m(r.$$.fragment,a),n=!0)},o(a){$(r.$$.fragment,a),n=!1},d(a){a&&u(e),h(r)}}}let S=10;function Z(c,e,r){let n=!0;n=!1;const a={pageTitle:"Tenant",bcItem:"Apps",bcItemActive:"Tenant"},t=i=>{let l=S*(i-1);l=l<0?0:l,o(S,l)},o=(i=10,l=0)=>{let v={limit:i,offset:l};j.get(`/aaa/v1/tenant?${J.stringify(v)}`).then(function(s){var f,p;(f=s.data)!=null&&f.data,(p=s.data)!=null&&p.total}).catch(function(s){console.log(s)}).finally(function(){r(0,n=!1)})};return t(1),[n,a]}class oe extends q{constructor(e){super(),x(this,e,Z,Y,A,{})}}export{oe as component};
