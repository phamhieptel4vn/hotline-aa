import{d as c,e as u,g as s,A as l,f as a}from"./CardTitle.96b8a700.js";const r=async(i=99,t=0,n={},e=null)=>(n.limit=i,n.offset=t,s(l+"/hotline/v1/cid",n,e)),p=async(i=99,t=0,n=null,e={},o=null)=>(e.group_cid_id=n,e.limit=i,e.offset=t,s(l+"/hotline/v1/cid",e,o)),f=async(i,t=null)=>a(l+"/hotline/v1/cid",i,t),y=async(i,t,n=null)=>c(l+`/hotline/v1/cid/${i}`,t,n),h=async(i,t=null)=>u(l+`/hotline/v1/cid/${i}`,null,t);export{f as a,h as b,r as c,y as d,p as e};
