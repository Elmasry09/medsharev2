import{T as g,o as u,c as p,h as e,f as i,e as l,g as t,j as x,w as d,v as n,F as h,y as f,i as o,q as c}from"./app-DjNwsH6s.js";import{_ as b}from"./AdminsLayout-WZ63Qi-W.js";import"./IMG_1525-93Jb5LtC.js";import"./index-Bp9WpJq9.js";const y={class:"flex mb-4","aria-label":"Breadcrumb"},k={class:"inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse"},w={class:"inline-flex items-center"},_=e("svg",{class:"w-3 h-3 me-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20"},[e("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})],-1),v={class:"flex items-center"},C=e("svg",{class:"w-3 h-3 text-gray-400 mx-1 rtl:rotate-180","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 6 10"},[e("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 9 4-4-4-4"})],-1),j=f('<li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Speciality Charity Table</span></div></li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"> Create Speciality </span></div></li>',2),B=e("h2",{class:"mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"}," Create Speciality ",-1),S=e("hr",{class:"h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"},null,-1),T={class:"container px-5 py-24 mx-auto"},V={class:"lg:w-4/6 mx-auto bg-white rounded-2xl"},N={class:"justify-center sm:flex-row mt-10 rounded-xl"},U={class:"text-center sm:pr-8 sm:py-8"},q={class:"flex flex-col justify-center mb-4"},D=e("div",{class:"shrink-0 mb-6 justify-center flex"},[e("img",{class:"h-20 w-20 bg-slate-300 object-cover rounded-full",src:"",alt:""})],-1),F=e("label",{class:"mb-2 text-sm font-medium text-gray-900 dark:text-white",for:"file_input"},"Upload Photo",-1),I=e("div",{class:"col-span-2"},[e("label",{for:"id",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Admin Id"),e("input",{type:"number",name:"id",id:"id",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full mb-2 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Type Admin ID",required:""})],-1),M={class:"grid gap-4 mb-4 grid-cols-2"},A={class:"col-span-2"},H=e("label",{for:"title",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Title",-1),z={class:"col-span-2"},E=e("label",{for:"description",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Description",-1),L=e("button",{type:"submit",class:"text-white inline-flex w-full items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"},[e("svg",{class:"me-1 -ms-1 w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})]),o(" Create ")],-1),J=Object.assign({layout:b},{__name:"edit",setup(O){const r=g({title:"",description:"",image:""}),m=()=>{r.post(route("admins.specialties.update"),{onFinish:()=>Swal.fire("Updated successfully","","success")})};return(P,s)=>(u(),p(h,null,[e("nav",y,[e("ol",k,[e("li",w,[i(t(c),{href:"#",class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:l(()=>[_,o(" Home ")]),_:1})]),e("li",null,[e("div",v,[C,i(t(c),{href:"#",class:"ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"},{default:l(()=>[o("Specialties")]),_:1})])]),j])]),B,S,e("div",T,[e("div",V,[e("div",N,[e("div",U,[e("form",{class:"p-4 md:p-5",onSubmit:x(m,["prevent"])},[e("div",q,[D,F,e("input",{class:"mb-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"file_input",type:"file",onInput:s[0]||(s[0]=a=>t(r).image=a.target.files[0])},null,32)]),I,e("div",M,[e("div",A,[H,d(e("input",{"onUpdate:modelValue":s[1]||(s[1]=a=>t(r).title=a),type:"text",name:"title",id:"title",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",placeholder:"Type Speciality Title",required:""},null,512),[[n,t(r).title]])]),e("div",z,[E,d(e("textarea",{"onUpdate:modelValue":s[2]||(s[2]=a=>t(r).description=a),id:"description",rows:"4",class:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"Write Speciality description "},null,512),[[n,t(r).description]])])]),L],32)])])])])],64))}});export{J as default};