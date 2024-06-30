import{T as c,s as m,o as p,c as u,h as r,j as g,g as t,w as o,v as d,f as l}from"./app-DjNwsH6s.js";import{_ as b,a as y}from"./BanButton-DtBFNKk8.js";import{_ as f}from"./AdminsLayout-WZ63Qi-W.js";import"./IMG_1525-93Jb5LtC.js";import"./index-Bp9WpJq9.js";const x={class:"container px-5 py-24 mx-auto flex"},k={class:"lg:w-4/6 mx-auto"},_={class:"flex-col justify-center sm:flex-row mt-10 bg-white rounded-2xl"},h={class:"text-center sm:pr-8 sm:py-8"},w={class:"flex flex-col justify-center mb-4"},v=r("div",{class:"shrink-0 mb-6 justify-center flex"},[r("img",{class:"h-20 w-20 bg-slate-300 object-cover rounded-full",src:"",alt:""})],-1),U=r("label",{class:"mb-2 text-sm font-medium text-gray-900 dark:text-white",for:"file_input"},"Upload Photo",-1),j={class:"grid gap-4 mb-4 grid-cols-2"},V={class:"col-span-2"},E=r("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Name",-1),N={class:"col-span-2"},S=r("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Email",-1),T={class:"col-span-2"},q=r("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),B={class:"col-span-2"},I=r("label",{for:"description",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Description",-1),P={class:"flex justify-center"},z=Object.assign({layout:f},{__name:"edit",setup($){const e=c({name:"",email:"",password:"",description:"",image:""}),i=()=>{e.put(route("admins.admins.update"),{onFinish:()=>Swal.fire("Updated successfully","","success")})};return(D,s)=>{const n=m("InputError");return p(),u("div",x,[r("div",k,[r("div",_,[r("div",h,[r("form",{class:"p-4 md:p-5",onSubmit:g(i,["prevent"])},[r("div",w,[v,U,r("input",{class:"mb-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"file_input",type:"file",onInput:s[0]||(s[0]=a=>t(e).image=a.target.files[0])},null,32)]),r("div",j,[r("div",V,[E,o(r("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>t(e).name=a),type:"text",name:"name",id:"name",value:"",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Type SystemUser Name",required:""},null,512),[[d,t(e).name]])]),r("div",N,[S,o(r("input",{"onUpdate:modelValue":s[2]||(s[2]=a=>t(e).email=a),type:"text",name:"email",id:"name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Type SystemUser Email",required:""},null,512),[[d,t(e).email]])]),r("div",T,[q,o(r("input",{"onUpdate:modelValue":s[3]||(s[3]=a=>t(e).password=a),type:"password",name:"password",id:"password",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Password",required:""},null,512),[[d,t(e).password]]),l(n,{class:"mt-2",message:t(e).errors.password},null,8,["message"])]),r("div",B,[I,o(r("textarea",{"onUpdate:modelValue":s[4]||(s[4]=a=>t(e).description=a),id:"description",rows:"4",class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Write product description here"},null,512),[[d,t(e).description]])])]),r("div",P,[l(b),l(y)])],32)])])])])}}});export{z as default};