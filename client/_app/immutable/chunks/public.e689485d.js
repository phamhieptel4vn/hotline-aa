const h="%[a-f0-9]{2}",g=new RegExp("("+h+")|([^%]+?)","gi"),y=new RegExp("("+h+")+","gi");function o(r,e){try{return[decodeURIComponent(r.join(""))]}catch{}if(r.length===1)return r;e=e||1;const t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],o(t),o(n))}function N(r){try{return decodeURIComponent(r)}catch{let e=r.match(g)||[];for(let t=1;t<e.length;t++)r=o(e,t).join(""),e=r.match(g)||[];return r}}function I(r){const e={"%FE%FF":"��","%FF%FE":"��"};let t=y.exec(r);for(;t;){try{e[t[0]]=decodeURIComponent(t[0])}catch{const f=N(t[0]);f!==t[0]&&(e[t[0]]=f)}t=y.exec(r)}e["%C2"]="�";const n=Object.keys(e);for(const f of n)r=r.replace(new RegExp(f,"g"),e[f]);return r}function $(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return decodeURIComponent(r)}catch{return I(r)}}function b(r,e){if(!(typeof r=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(r===""||e==="")return[];const t=r.indexOf(e);return t===-1?[]:[r.slice(0,t),r.slice(t+e.length)]}function p(r,e){const t={};if(Array.isArray(e))for(const n of e){const f=Object.getOwnPropertyDescriptor(r,n);f!=null&&f.enumerable&&Object.defineProperty(t,n,f)}else for(const n of Reflect.ownKeys(r)){const f=Object.getOwnPropertyDescriptor(r,n);if(f.enumerable){const a=r[n];e(n,a,r)&&Object.defineProperty(t,n,f)}}return t}const U=r=>r==null,R=r=>encodeURIComponent(r).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`),u=Symbol("encodeFragmentIdentifier");function D(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{const f=t.length;return n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[s(e,r),"[",f,"]"].join("")]:[...t,[s(e,r),"[",s(f,r),"]=",s(n,r)].join("")]};case"bracket":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[s(e,r),"[]"].join("")]:[...t,[s(e,r),"[]=",s(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[s(e,r),":list="].join("")]:[...t,[s(e,r),":list=",s(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{const e=r.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,f)=>f===void 0||r.skipNull&&f===null||r.skipEmptyString&&f===""?n:(f=f===null?"":f,n.length===0?[[s(t,r),e,s(f,r)].join("")]:[[n,s(f,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,s(e,r)]:[...t,[s(e,r),"=",s(n,r)].join("")]}}function _(r){let e;switch(r.arrayFormat){case"index":return(t,n,f)=>{if(e=/\[(\d*)]$/.exec(t),t=t.replace(/\[\d*]$/,""),!e){f[t]=n;return}f[t]===void 0&&(f[t]={}),f[t][e[1]]=n};case"bracket":return(t,n,f)=>{if(e=/(\[])$/.exec(t),t=t.replace(/\[]$/,""),!e){f[t]=n;return}if(f[t]===void 0){f[t]=[n];return}f[t]=[...f[t],n]};case"colon-list-separator":return(t,n,f)=>{if(e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!e){f[t]=n;return}if(f[t]===void 0){f[t]=[n];return}f[t]=[...f[t],n]};case"comma":case"separator":return(t,n,f)=>{const a=typeof n=="string"&&n.includes(r.arrayFormatSeparator),c=typeof n=="string"&&!a&&d(n,r).includes(r.arrayFormatSeparator);n=c?d(n,r):n;const i=a||c?n.split(r.arrayFormatSeparator).map(C=>d(C,r)):n===null?n:d(n,r);f[t]=i};case"bracket-separator":return(t,n,f)=>{const a=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!a){f[t]=n&&d(n,r);return}const c=n===null?[]:n.split(r.arrayFormatSeparator).map(i=>d(i,r));if(f[t]===void 0){f[t]=c;return}f[t]=[...f[t],...c]};default:return(t,n,f)=>{if(f[t]===void 0){f[t]=n;return}f[t]=[...[f[t]].flat(),n]}}}function S(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function s(r,e){return e.encode?e.strict?R(r):encodeURIComponent(r):r}function d(r,e){return e.decode?$(r):r}function O(r){return Array.isArray(r)?r.sort():typeof r=="object"?O(Object.keys(r)).sort((e,t)=>Number(e)-Number(t)).map(e=>r[e]):r}function x(r){const e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function q(r){let e="";const t=r.indexOf("#");return t!==-1&&(e=r.slice(t)),e}function F(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function l(r){r=x(r);const e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function m(r,e){e={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,...e},S(e.arrayFormatSeparator);const t=_(e),n=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return n;for(const f of r.split("&")){if(f==="")continue;const a=e.decode?f.replace(/\+/g," "):f;let[c,i]=b(a,"=");c===void 0&&(c=a),i=i===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?i:d(i,e),t(d(c,e),i,n)}for(const[f,a]of Object.entries(n))if(typeof a=="object"&&a!==null)for(const[c,i]of Object.entries(a))a[c]=F(i,e);else n[f]=F(a,e);return e.sort===!1?n:(e.sort===!0?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((f,a)=>{const c=n[a];return c&&typeof c=="object"&&!Array.isArray(c)?f[a]=O(c):f[a]=c,f},Object.create(null))}function j(r,e){if(!r)return"";e={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...e},S(e.arrayFormatSeparator);const t=c=>e.skipNull&&U(r[c])||e.skipEmptyString&&r[c]==="",n=D(e),f={};for(const[c,i]of Object.entries(r))t(c)||(f[c]=i);const a=Object.keys(f);return e.sort!==!1&&a.sort(e.sort),a.map(c=>{const i=r[c];return i===void 0?"":i===null?s(c,e):Array.isArray(i)?i.length===0&&e.arrayFormat==="bracket-separator"?s(c,e)+"[]":i.reduce(n(c),[]).join("&"):s(c,e)+"="+s(i,e)}).filter(c=>c.length>0).join("&")}function w(r,e){var f;e={decode:!0,...e};let[t,n]=b(r,"#");return t===void 0&&(t=r),{url:((f=t==null?void 0:t.split("?"))==null?void 0:f[0])??"",query:m(l(r),e),...e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:d(n,e)}:{}}}function E(r,e){e={encode:!0,strict:!0,[u]:!0,...e};const t=x(r.url).split("?")[0]||"",n=l(r.url),f={...m(n,{sort:!1}),...r.query};let a=j(f,e);a&&(a=`?${a}`);let c=q(r.url);if(r.fragmentIdentifier){const i=new URL(t);i.hash=r.fragmentIdentifier,c=e[u]?i.hash:`#${r.fragmentIdentifier}`}return`${t}${a}${c}`}function A(r,e,t){t={parseFragmentIdentifier:!0,[u]:!1,...t};const{url:n,query:f,fragmentIdentifier:a}=w(r,t);return E({url:n,query:p(f,e),fragmentIdentifier:a},t)}function P(r,e,t){const n=Array.isArray(e)?f=>!e.includes(f):(f,a)=>!e(f,a);return A(r,n,t)}const T=Object.freeze(Object.defineProperty({__proto__:null,exclude:P,extract:l,parse:m,parseUrl:w,pick:A,stringify:j,stringifyUrl:E},Symbol.toStringTag,{value:"Module"})),V=globalThis.__sveltekit_17rs530.env;export{V as e,T as q};
