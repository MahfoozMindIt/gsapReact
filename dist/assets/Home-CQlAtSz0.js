import{G as o,r as i,j as e,L as a,X as S,F as C,a as k,b as H,c as B}from"./index-Dz_MOiUz.js";import{I as T}from"./index-DBdIGxOD.js";import{u as I,g as s,S as M}from"./ScrollTrigger-DHoaAahx.js";const L="/assets/home-Bjti2dTz.webp";function A(t){return o({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z",clipRule:"evenodd"},child:[]},{tag:"path",attr:{d:"M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z"},child:[]}]})(t)}function U(t){return o({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"},child:[]},{tag:"path",attr:{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"},child:[]}]})(t)}function F(t){return o({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"},child:[]}]})(t)}const z="/assets/paragraphImage-B0Tu8KOh.webp",D="/assets/paraPig-C7SIH179.webp",E="/assets/coins-D651EfI-.webp",f="/assets/homesec6-1-a8b89eKQ.webp",u="/assets/sec6-2-Cv910Rnk.webp",j="/assets/homeSec6-3-Di19LBTk.webp",g="/assets/homesec6-4-DMWvz0__.webp",R="/assets/boyCard-iHa_-iPc.webp",X="/assets/image-CRAH1LL0.png";function h(t){return o({attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"},child:[]}]})(t)}s.registerPlugin(M);const w=["Journey","Adventure","Voyage"],K=()=>{const[t,b]=i.useState(!1),[P,V]=i.useState(!1),[p,v]=i.useState(0);i.useEffect(()=>{const r=setInterval(()=>{v(l=>(l+1)%w.length)},2e3);return()=>clearInterval(r)},[]),I(()=>{const r=s.timeline(),l=s.timeline({scrollTrigger:{trigger:".section2",scroller:"body",start:"top 100%",end:"top 0",scrub:2}}),c=s.timeline({scrollTrigger:{trigger:".section3",scroller:"body",start:"top 100%",end:"top 0",scrub:2}}),d=s.timeline({scrollTrigger:{trigger:".section4",scroller:"body",start:"top 100%",end:"bottom 0%"}}),x=s.timeline({scrollTrigger:{trigger:".sec5",scroller:"body",start:"top 100%"}}),m=s.timeline({scrollTrigger:{trigger:".sec5",scroller:"body",start:"top 70%",end:"top -50%",scrub:2}}),n=s.timeline({scrollTrigger:{trigger:".sec5Last",scroller:"body",start:"top 100%",end:"top 50%",scrub:2}});r.from(".l1,.l2,.l3,.logo,.navButton",{y:-30,opacity:0,delay:1,duration:.5,stagger:.2}),s.from(".hero1",{x:-10,opacity:0,delay:1,duration:.5}),s.from(".heroImg",{x:70,opacity:0,delay:1,duration:.5}),l.from(".card1,.card2",{x:-10,opacity:0,delay:1,duration:1},"anim"),l.from(".card3,.card4",{x:10,opacity:0,delay:1,duration:.7},"anim"),l.from(".sec2Span1,.sec2Span2,.sec2Span3,.sec2p,.sec2Btn",{y:-10,opacity:0,delay:1,duration:.5,stagger:.2}),c.from(".sec3h,.sec3p",{y:-10,opacity:0,delay:1,duration:.5,stagger:.2}),c.from(".sec3g1",{x:-100,opacity:0,delay:1,duration:.5},"sectionNo3"),c.from(".sec3g2",{x:100,opacity:0,delay:1,duration:.5},"sectionNo3"),d.from(".sec4h,.sec4p,.sec4p1,.sec4p2,.sec4p3",{x:-40,opacity:0,delay:1,duration:1,stagger:.2}),x.from(".sec5a,.sec5bl1,.sec5bl2,.sec5bl3",{x:-40,opacity:0,delay:1,duration:1},"new1"),x.from(".sec5br1,.sec5br2,.sec5br3",{x:40,opacity:0,delay:1,duration:1},"new1"),m.from(".sec5c",{scale:.1,opacity:0,delay:1,duration:1},"new1"),n.from(".sec5d",{x:-40,opacity:0,delay:1,duration:1},"newAnother"),n.from(".sec5d1,.sec5d2,.sec5et1,.sec5eb1,.sec5et2,.sec5eb2,.sec5et3,.sec5eb3",{x:40,opacity:0,delay:1,duration:1},"newAnother")}),i.useEffect(()=>{const r=l=>{const{clientX:c,clientY:d}=l,{innerWidth:x,innerHeight:m}=window,n=d/m*50-20,N=c/x*50-20;s.to(".sec4Img",{rotateX:-n,rotateY:N,transformPerspective:1e3,ease:"power2.out"})};return window.addEventListener("mousemove",r),()=>{window.removeEventListener("mousemove",r)}},[]);const y=()=>{b(!t)};return e.jsxs("div",{className:"",style:{overflowX:"hidden"},children:[e.jsx("section",{className:"flex justify-center bannerHeight h-[1207px] md:h-auto lg:h-auto lg:pb-10 xl:pb-0  w-full rounded-b-3xl",style:{backgroundImage:"linear-gradient(to right,#6C48B6 10%,#A071CA 50%   )"},children:e.jsxs("main",{className:"md:w-[90%] w-[95%] widthHome text-white",children:[e.jsxs("nav",{className:"justify-between  flex items-center pt-5 text-[17px] font-medium",children:[e.jsx(a,{to:"/cards",className:"logo ",children:e.jsx("img",{src:S,alt:"",className:"w-36"})}),e.jsxs("ul",{className:" gap-10 xl:flex hidden items-center",children:[e.jsxs(a,{to:"/",className:"cursor-pointer",children:[" ",e.jsx("li",{className:"l1",children:"Home"})]}),e.jsx(a,{to:"/cards",children:e.jsx("li",{className:"l2",children:"Cards"})}),e.jsxs(a,{to:"/contact",children:[" ",e.jsx("li",{className:"l3",children:"Contact"})]})]}),e.jsxs("div",{className:"navButton flex gap-5",children:[e.jsx("button",{className:"px-7 py-3 text-hover xl:block hidden hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-white ",children:"Sign Up"}),e.jsx("button",{className:"px-7 py-3 text-hover xl:block hidden hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary ",children:"Login"}),e.jsx("button",{className:"bg-hover text-white text-xl p-2 xl:hidden rounded-xl",onClick:y,children:e.jsx(T,{})})]})]}),t&&e.jsx("div",{className:"absolute w-[100%]",children:e.jsx("div",{style:{zIndex:"100000"},className:"w-[90%] h-[50vh]  rounded-b-xl  flow bg-white relative top-0",children:e.jsxs("div",{className:"flex flex-col gap-2 w-[100%] h-full p-5",children:[e.jsxs(a,{to:"/",children:[e.jsx("h2",{className:"text-primary font-bold text-2xl w-full",children:"Home"})," ",e.jsx("span",{})]}),e.jsx(a,{to:"/cards",children:e.jsx("h2",{className:"text-primary font-bold text-2xl w-full",children:"Cards"})}),e.jsx(a,{to:"/contact",children:e.jsx("h2",{className:"text-primary font-bold text-2xl w-full",children:"Contact"})})]})})}),e.jsxs("main",{className:"flex flex-col lg:flex-row",children:[e.jsxs("div",{className:"lg:w-[50%] mt-20 hero1",children:[e.jsxs("h1",{className:"xl:text-[80px] text-6xl font-extrabold   leading-20 xl:leading-24",children:["Start your ",e.jsx("br",{}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx("div",{children:" Crypto Card"})," ",e.jsx("div",{className:"rotating-text-container",children:e.jsxs("span",{id:"text",className:"px-3 py-1 rounded-full rotating-text border-[1px] border-white ",children:[" ",w[p]]},p)})]})]}),e.jsxs("p",{className:"py-5 text-xl xl:w-[80%]",children:["Instant, secure, and hassle-free—turn your crypto ",e.jsx("br",{className:"xl:block hidden"})," into everyday purchases with Xcard."]}),e.jsxs("div",{className:"flex xl:flex-row flex-col  xl:items-center gap-5",children:[e.jsx("button",{className:"px-7 py-3 text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-white",children:"Sign Up"}),e.jsx("button",{className:"px-7 py-3 text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary",children:"Contact Us"})]})]}),e.jsx("img",{src:L,alt:"",className:"md:w-[60%] h-[552px] ml-24 md:h-[100vh-2vh] xl:h-[656px] bannerImg z-[1] object-cover object-top heroImg"})]})]})}),e.jsx("section",{className:" w-full flex justify-center section2 pt-44",children:e.jsxs("main",{className:"md:w-[90%] w-[95%] widthHome flex justify-between",children:[e.jsxs("div",{className:"lg:flex hidden flex-col justify-between",children:[e.jsxs("div",{className:"bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white rotate-12 card1",children:[e.jsx(A,{className:"text-3xl"})," Bank Accounts"]}),e.jsxs("div",{className:"bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white -rotate-12 card2",children:[e.jsx(F,{className:"text-3xl"})," Consulting"]})]}),e.jsxs("div",{className:"text-hover flex flex-col gap-5 items-center justify-center",children:[e.jsxs("h2",{className:"text-center text-3xl md:text-5xl xl:text-7xl font-extrabold flex-col flex items-center justify-center",children:[e.jsxs("span",{className:" flex sec2Span1",children:["Work with us ",e.jsx("img",{src:z,alt:"",className:"h-16 w-16"})]}),e.jsx("span",{className:"sec2Span2",children:"to organize & optimize your"}),e.jsxs("span",{className:"flex items-center sec2Span3",children:[e.jsx("img",{src:D,alt:"",className:"h-16 w-16"})," personal finances"]})]}),e.jsx("p",{className:"md:w-[70%] text-center sec2p text-[17px] font-light",children:"Manage, send, receive & swap multiple cryptocurrencies—all in a single app"}),e.jsx("div",{className:"sec2Btn",children:e.jsx("button",{className:"px-7 py-3 text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary",children:"Sign Up"})})]}),e.jsxs("div",{className:"lg:flex hidden flex-col justify-between",children:[e.jsxs("div",{className:"bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white -rotate-12 card3",children:[e.jsx(C,{className:"text-3xl"})," Investing"]}),e.jsxs("div",{className:"bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white rotate-12 card4",children:[e.jsx(U,{className:"text-3xl"})," Rewards"]})]})]})}),e.jsx("section",{className:" w-full section4 flex justify-center pt-44",children:e.jsxs("main",{className:"md:w-[90%] w-[95%] widthHome flex xl:flex-row flex-col  justify-center items-center  gap-20",children:[e.jsxs("div",{className:"flex flex-col gap-10 xl:w-[49%]",children:[e.jsx("h2",{className:"text-hover font-extrabold sec4h text-center xl:text-start text-4xl md:text-7xl",children:"An app that does it all in one place"}),e.jsx("div",{className:"w-full flex justify-center",children:e.jsx("p",{className:"text-hover text-md sec4p lg:w-[70%] xl:w-full text-center xl:text-start xl:w-[90%] font-medium",children:"Effortless Crypto Deposits  Quick, Simple, Secures,  Top up your XCard with USDC, USDT, BTC, or ETH—straight from your wallet."})}),e.jsx("section",{className:"flex  w-full justify-center xl:justify-start",children:e.jsxs("div",{className:"flex flex-col gap-5",children:[" ",e.jsxs("div",{className:"flex items-center sec4p1 gap-3",children:[e.jsx("div",{className:"bg-primary text-3xl text-white p-1 rounded-full w-fit",children:e.jsx(h,{})}),e.jsx("p",{children:"Smooth & User-Friendly"})]}),e.jsxs("div",{className:"flex items-center sec4p2 gap-3",children:[e.jsx("div",{className:"bg-primary text-3xl text-white p-1 rounded-full w-fit",children:e.jsx(h,{})}),e.jsx("p",{children:"Benefit-Focused"})]}),e.jsxs("div",{className:"flex items-center sec4p3 gap-3",children:[e.jsx("div",{className:"bg-primary text-3xl text-white p-1 rounded-full w-fit",children:e.jsx(h,{})}),e.jsx("p",{children:"Concise & Clear "})]})]})}),e.jsx("div",{className:"flex gap-5",children:e.jsx("div",{className:"flex justify-center w-full xl:justify-start",children:e.jsx("button",{className:"px-7 py-3 text-white   hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-primary w-fit",children:"Sign Up"})})})]}),e.jsx("div",{className:"md:w-[55%]",children:e.jsx("img",{src:X,alt:"",className:"xl:h-[800px] h-[500px] md:h-[500px] sec4Img object-cover"})})]})}),e.jsxs("section",{className:" w-full flex flex-col items-center pb-20 xl:pb-0 lg:gap-44 gap-30 bg-primary rounded-t-2xl justify-center pt-44 sec5",children:[e.jsx("main",{className:"md:w-[90%] w-[95%] widthHome flex xl:flex-row flex-col text-white  justify-center items-center  gap-20",children:e.jsxs("div",{className:"w-full xl:flex-row xl:justify-between flex flex-col justify-center gap-10 xl:gap-0 ",children:[e.jsxs("div",{className:"flex flex-col gap-5 sec5a",children:[e.jsxs("h2",{className:"text-7xl md:text-8xl font-extrabold",children:["  Buy crypto, ",e.jsx("br",{}),"sell crypto."]}),e.jsxs("p",{children:["Your gateway to crypto, Buy & Sell with confidence.",e.jsx("br",{className:""}),"Buy crypto easily, sell when you want, Total control."]})]}),e.jsxs("div",{className:"flex flex-col gap-10",children:[e.jsxs("div",{className:"flex gap-5 items-center",children:[e.jsx("span",{className:"text-white text-4xl sec5bl1",children:e.jsx(k,{})}),e.jsx("h2",{className:"text-5xl font-extrabold sec5br1",children:"155+ tokens"})]}),e.jsxs("div",{className:"flex gap-5 items-center",children:[e.jsx("span",{className:"text-white text-4xl sec5bl2",children:e.jsx(H,{className:"0"})}),e.jsx("h2",{className:"text-5xl font-extrabold sec5br2",children:"Analyze trends"})]}),e.jsxs("div",{className:"flex gap-5 items-center",children:[e.jsx("span",{className:"text-white text-4xl sec5bl3",children:e.jsx(B,{})}),e.jsx("h2",{className:"text-5xl font-extrabold sec5br3",children:"Manage accounts"})]}),e.jsx("button",{className:"px-7 py-3 w-fit text-hover sec5Btn hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary",children:"Learn More"}),e.jsx("div",{})]})]})}),e.jsx("img",{src:E,alt:"",className:"sec5c scale-[1]"}),e.jsxs("main",{className:"md:w-[100%] w-[95%] sec5Last  flex xl:flex-row flex-col text-white  justify-center items-center  gap-20",children:[e.jsx("div",{className:"xl:w-[50%] flex justify-start items-start relative -left-10",children:e.jsx("img",{src:R,alt:"",className:"sec5d"})}),e.jsx("div",{className:"xl:w-[50%]",children:e.jsxs("div",{className:"md:w-[85%] flex flex-col gap-10",children:[e.jsx("h2",{className:"md:text-6xl text-4xl font-extrabold sec5d1 md:leading-18 tracking-wide",children:"Try our crypto virtual card experience the future of payments today!"}),e.jsx("p",{className:"sec5d2 text-xl font-light",children:"Tap into the future – your crypto, your virtual card, limitless possibilities"}),e.jsxs("div",{className:"md:flex-row gap-10 md:gap-0 md:justify-between flex flex-col justify-center",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-secondary text-6xl font-extrabold sec5et1",children:"Unlimited"}),e.jsx("p",{className:"font-semibold text-xl sec5eb1",children:"Rewards"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-secondary text-6xl font-extrabold sec5et2",children:"0%"}),e.jsx("p",{className:"font-semibold text-xl sec5eb2",children:"Interest Rate"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-secondary text-6xl font-extrabold sec5et3",children:"1mill"}),e.jsx("p",{className:"font-semibold text-xl sec5eb3",children:"Users"})]})]}),e.jsx("button",{className:"px-7 py-3 text-hover  hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary w-fit",children:"Sign Up"})]})})]})]}),e.jsx("section",{className:" w-full flex section3 justify-center pt-44",children:e.jsxs("main",{className:"md:w-[90%] w-[95%] widthHome flex flex-col items-center justify-center gap-20",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-5",children:[e.jsx("h2",{className:"text-center text-4xl md:text-7xl sec3h font-extrabold text-hover",children:"Why Choose Xcard"}),e.jsx("p",{className:"text-center text-hover sec3p w-[80%]",children:"Effortless Crypto Deposits Quick, Simple, Secures, Top up your XCard with USDC, USDT, BTC, or ETH straight from your wallet."})]}),e.jsxs("div",{className:" grid-cols-1 xl:grid hidden md:grid-cols-2 mt-32  w-full  gap-4",children:[e.jsxs("section",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)] h-[500px] rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row ",children:[e.jsx("div",{className:" flex flex-col gap-5 w-[50%] items-center  justify-center",children:e.jsx("h2",{className:"xl:text-5xl font-extrabold text-2xl text-hover",children:"Free app to use everywhere"})}),e.jsx("img",{src:f,alt:"",className:"w-[300px] relative -top-25"})]})}),e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)] h-[500px] rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row ",children:[e.jsx("div",{className:" flex flex-col gap-5 w-[45%] justify-center",children:e.jsx("h2",{className:"xl:text-5xl font-extrabold text-2xl  text-hover",children:"Real time notifications"})}),e.jsx("img",{src:j,alt:"",className:"w-[300px]"})]})})]}),e.jsxs("section",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)] h-[600px] rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row ",children:[e.jsx("div",{className:" flex flex-col justify-center gap-5 w-50%]",children:e.jsx("h2",{className:"xl:text-5xl font-extrabold text-2xl text-hover",children:"AI message assistant support"})}),e.jsx("img",{src:u,alt:"",className:"w-[300px] relative -top-23 scale-[1.1]"})]})}),e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)] h-[400px] rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row ",children:[e.jsx("div",{className:" flex flex-col justify-center gap-5 w-[59%]",children:e.jsx("h2",{className:"xl:text-5xl font-extrabold text-2xl text-hover",children:"Keep track of your money easily"})}),e.jsx("img",{src:g,alt:"",className:"w-[200px]"})]})})]})]}),e.jsxs("div",{className:" grid-cols-1 xl:hidden grid md:grid-cols-2    w-full  gap-4",children:[e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)]  rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row gap-14",children:[e.jsxs("div",{className:" flex flex-col gap-5",children:[e.jsx("h2",{className:"xl:text-3xl font-extrabold text-2xl text-hover",children:"Free app to use everywhere"}),e.jsx("p",{className:"opacity-[0.6] font-light",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."})]}),e.jsx("img",{src:f,alt:"",className:"w-[300px]"})]})}),e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)]  rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row gap-14",children:[e.jsxs("div",{className:" flex flex-col justify-center gap-5",children:[e.jsx("h2",{className:"xl:text-3xl font-extrabold text-2xl text-hover",children:"AI message assistant support"}),e.jsx("p",{className:"opacity-[0.6] font-light",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."})]}),e.jsx("img",{src:u,alt:"",className:"w-[200px]  "})]})}),e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)]  rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row gap-14",children:[e.jsxs("div",{className:" flex flex-col gap-5",children:[e.jsx("h2",{className:"xl:text-3xl font-extrabold text-2xl text-hover",children:"Real time notifications"}),e.jsx("p",{className:"opacity-[0.6] font-light",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."})]}),e.jsx("img",{src:j,alt:"",className:"w-[300px]"})]})}),e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)]  rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row gap-14",children:[e.jsxs("div",{className:" flex flex-col justify-center gap-5",children:[e.jsx("h2",{className:"xl:text-3xl font-extrabold text-2xl text-hover",children:"Keep track of your money easily"}),e.jsx("p",{className:"opacity-[0.6] font-light",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."})]}),e.jsx("img",{src:g,alt:"",className:"w-[200px]"})]})})]})]})})]})};export{K as default};
