import{T as u,i as f,o as r,c as g,w as o,a as s,u as e,Z as p,f as y,g as h,b as i,d as a,n as _,l as k,e as x}from"./app-xfYODjfb.js";import{_ as v}from"./GuestLayout-D7vRP84I.js";import{P as b}from"./PrimaryButton-By875R6Z.js";import"./Navbar-EGc5U_xI.js";import"./IMG_1525-93Jb5LtC.js";import"./index-Bp9WpJq9.js";import"./DarkMode-DbSb6ds5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Footer-B27xNF57.js";const w=i("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},B={class:"mt-4 flex items-center justify-between"},I={__name:"VerifyEmail",props:{status:{type:String}},setup(n){const d=n,t=u({}),c=()=>{t.post(route("verification.send"))},l=f(()=>d.status==="verification-link-sent");return(m,E)=>(r(),g(v,null,{default:o(()=>[s(e(p),{title:"Email Verification"}),w,l.value?(r(),y("div",V," A new verification link has been sent to the email address you provided during registration. ")):h("",!0),i("form",{onSubmit:x(c,["prevent"])},[i("div",B,[s(b,{class:_({"opacity-25":e(t).processing}),disabled:e(t).processing},{default:o(()=>[a(" Resend Verification Email ")]),_:1},8,["class","disabled"]),s(e(k),{href:m.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:o(()=>[a("Log Out")]),_:1},8,["href"])])],32)]),_:1}))}};export{I as default};