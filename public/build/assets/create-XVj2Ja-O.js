import{T as m,o as c,c as g,h as r,j as p,g as s,f as t,w as l,v as i,i as u}from"./app-DjNwsH6s.js";import{_ as d}from"./InputError-fSE3LPsq.js";import{_ as f}from"./charitesLayout-j-PGRniM.js";import"./IMG_1525-93Jb5LtC.js";import"./index-Bp9WpJq9.js";const y={class:"container px-5 py-24 mx-auto flex"},b={class:"lg:w-4/6 mx-auto"},x={class:"flex-col justify-center sm:flex-row mt-10 rounded-2xl bg-white"},w={class:"text-center sm:pr-8 sm:py-8"},k={class:"flex flex-col justify-center mb-4"},_=r("div",{class:"shrink-0 mb-6 justify-center flex"},[r("img",{class:"h-20 w-20 bg-slate-300 object-cover rounded-full",src:"",alt:""})],-1),h=r("label",{class:"mb-2 text-sm font-medium text-gray-900 dark:text-white",for:"file_input"},"Upload Photo",-1),v={class:"grid gap-4 mb-4 grid-cols-2"},V={class:"col-span-2"},j=r("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Name",-1),C={class:"col-span-2"},E=r("label",{for:"Email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Email",-1),U={class:"col-span-2"},N=r("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),P={class:"col-span-2"},T=r("label",{for:"password_confirmation",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Confirm Password",-1),q=r("button",{type:"submit",class:"text-white inline-flex mt-6 w-full items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"},[r("svg",{class:"me-1 -ms-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[r("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})]),u(" Create ")],-1),H=Object.assign({layout:f},{__name:"create",setup(B){const e=m({name:"",email:"",password:"",password_confirmation:"",image:""}),n=()=>{e.post(route("charits.Charityusers.store"),{onFinish:()=>Swal.fire("Created successfully","","success")})};return(M,a)=>(c(),g("div",y,[r("div",b,[r("div",x,[r("div",w,[r("form",{class:"p-4 md:p-5",onSubmit:p(n,["prevent"])},[r("div",k,[_,h,r("input",{class:"mb-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"file_input",type:"file",onInput:a[0]||(a[0]=o=>s(e).image=o.target.files[0])},null,32),t(d,{class:"mt-2",message:s(e).errors.image},null,8,["message"])]),r("div",v,[r("div",V,[j,l(r("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>s(e).name=o),type:"text",name:"name",id:"name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Type User Name",required:""},null,512),[[i,s(e).name]]),t(d,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",C,[E,l(r("input",{"onUpdate:modelValue":a[2]||(a[2]=o=>s(e).email=o),type:"text",name:"Email",id:"Email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Type Email",required:""},null,512),[[i,s(e).email]]),t(d,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",U,[N,l(r("input",{"onUpdate:modelValue":a[3]||(a[3]=o=>s(e).password=o),type:"password",name:"password",id:"password",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Password",required:""},null,512),[[i,s(e).password]]),t(d,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",P,[T,l(r("input",{"onUpdate:modelValue":a[4]||(a[4]=o=>s(e).password_confirmation=o),type:"password",name:"password_confirmation",id:"password_confirmation",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Confirm Password",required:""},null,512),[[i,s(e).password_confirmation]]),t(d,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])])]),q],32)])])])]))}});export{H as default};