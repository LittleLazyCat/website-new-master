import{d as k,j as y,r as v,o as E,c as T,k as q,e as t,w as r,B as i,l as s,C as x,a as C,p as U,b as P,_ as I}from"./index-bcaaf44e.js";import{B as K}from"./BackgroundImgCom-031241c2.js";const l=d=>(U("data-v-441763de"),d=d(),P(),d),L={class:"login"},R={class:"content"},M={class:"content-c"},z={class:"forms"},N={class:"form switch-login left"},X=l(()=>t("h1",null,"已有帐号?",-1)),Y=l(()=>t("p",null,"请登录🚀",-1)),$={class:"form form-input right"},j=l(()=>t("h1",null,"注册",-1)),D=["onKeydown"],A={class:"form form-input left"},F=l(()=>t("h1",null,"登录",-1)),G=["onKeydown"],H=l(()=>t("p",null,"忘记密码?",-1)),J={class:"form switch-register right"},O=l(()=>t("h1",null,"没有账号?",-1)),Q=l(()=>t("p",null,"立即注册😃",-1)),W=k({__name:"LoginView",setup(d){let g=y(!1),S=y("");y("");let a=v({username:"",password:""}),n=v({username:"",pwd:"",confirmPwd:"",upPwd:"",tel:""});const h=async()=>{},w=async()=>{},B=()=>n.confirmPwd!=n.pwd?(g.value=!g,S.value="两次密码不一致",!1):!0;function V(c,e,o,u){let p=document.querySelector(c);p.style.cssText="transform: translateX(100%);opacity: 0;";let m=document.querySelector(e);m.style.cssText="transform: translateX(-100%);opacity: 0;";let _=document.querySelector(o);_.style.transform="translateY(-100%)";let f=document.querySelector(u);f.style.cssText="left: 50%;opacity: 1;z-index: 10;"}function b(c,e,o,u){let p=document.querySelector(c);p.style.cssText="opacity: 1;";let m=document.querySelector(e);m.style.cssText="opacity: 1;";let _=document.querySelector(o);_.style.transform="translateY(100%)";let f=document.querySelector(u);f.style.cssText="left: 0;opacity: 0;z-index: -5;"}return E(()=>{}),(c,e)=>(C(),T("div",L,[q(K),t("div",R,[t("div",M,[t("div",z,[t("div",N,[X,Y,t("button",{class:"btn-login",onClick:e[0]||(e[0]=o=>V(".switch-login.left",".form-input.right",".form-input.left",".switch-register.right"))}," 登录 ")]),t("div",$,[j,r(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>s(n).username=o),type:"text",placeholder:"用户名"},null,512),[[i,s(n).username]]),r(t("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>s(n).pwd=o),type:"password",placeholder:"密码"},null,512),[[i,s(n).pwd]]),r(t("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>s(n).confirmPwd=o),onBlur:B,type:"password",placeholder:"确认密码"},null,544),[[i,s(n).confirmPwd]]),r(t("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>s(n).tel=o),type:"text",placeholder:"电话号码",onKeydown:x(w,["enter"])},null,40,D),[[i,s(n).tel]]),t("button",{class:"btn-register",onClick:w},"注册")]),t("div",A,[F,r(t("input",{"onUpdate:modelValue":e[5]||(e[5]=o=>s(a).username=o),type:"text",placeholder:"用户名"},null,512),[[i,s(a).username]]),r(t("input",{"onUpdate:modelValue":e[6]||(e[6]=o=>s(a).password=o),type:"password",placeholder:"密码",onKeydown:x(h,["enter"])},null,40,G),[[i,s(a).password]]),H,t("button",{id:"loginButton",class:"btn-login",onClick:h}," 登录 ")]),t("div",J,[O,Q,t("button",{class:"btn-register",onClick:e[7]||(e[7]=o=>b(".switch-login.left",".form-input.right",".form-input.left",".switch-register.right"))}," 注册 ")])])])])]))}});const et=I(W,[["__scopeId","data-v-441763de"]]);export{et as default};
