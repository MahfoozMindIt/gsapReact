import{G as o,r as h,j as e,L as l,X as k,F as H,a as u,b as L,c as M,d as B}from"./index-CsffrY8B.js";import{I as T}from"./index-CSrM2nla.js";import{u as I,g as s,S as A}from"./ScrollTrigger-Btrcem6p.js";const F="/assets/home-Bjti2dTz.webp";function D(t){return o({attr:{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{d:"M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"},child:[]},{tag:"path",attr:{fillRule:"evenodd",d:"M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z",clipRule:"evenodd"},child:[]},{tag:"path",attr:{d:"M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z"},child:[]}]})(t)}function z(t){return o({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z"},child:[]},{tag:"path",attr:{d:"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z"},child:[]}]})(t)}function E(t){return o({attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9 1.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5M9 8a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4A.5.5 0 0 0 9 8m1 2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m-1 2C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 0 2 13h6.96q.04-.245.04-.5M7 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0"},child:[]}]})(t)}const R="/assets/paragraphImage-B0Tu8KOh.webp",X="/assets/paraPig-C7SIH179.webp",P="/assets/home3-1-kTVyg0hg.png",U="/assets/sec32-Dyp5pDur.webp",V="/assets/coins-D651EfI-.webp",j="/assets/homesec6-1-a8b89eKQ.webp",g="/assets/sec6-2-Cv910Rnk.webp",b="/assets/homeSec6-3-Di19LBTk.webp",w="/assets/homesec6-4-DMWvz0__.webp",Z="/assets/boyCard-iHa_-iPc.webp",G="/assets/image-CRAH1LL0.png";function p(t){return o({attr:{version:"1.2",baseProfile:"tiny",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.972 6.251c-.967-.538-2.185-.188-2.72.777l-3.713 6.682-2.125-2.125c-.781-.781-2.047-.781-2.828 0-.781.781-.781 2.047 0 2.828l4 4c.378.379.888.587 1.414.587l.277-.02c.621-.087 1.166-.46 1.471-1.009l5-9c.537-.966.189-2.183-.776-2.72z"},child:[]}]})(t)}s.registerPlugin(A);const Q=()=>{const[t,N]=h.useState(!1),[a,f]=h.useState(!1),v=()=>{f(!0)},y=()=>{f(!1)};I(()=>{const i=s.timeline(),r=s.timeline({scrollTrigger:{trigger:".section2",scroller:"body",start:"top 100%",end:"top 0",scrub:2}}),c=s.timeline({scrollTrigger:{trigger:".section3",scroller:"body",start:"top 100%",end:"top 0",scrub:2}}),d=s.timeline({scrollTrigger:{trigger:".section3",scroller:"body",start:"top 50%",end:"bottom -10%",scrub:2}}),x=s.timeline({scrollTrigger:{trigger:".sec5",scroller:"body",start:"top 100%"}}),m=s.timeline({scrollTrigger:{trigger:".sec5",scroller:"body",start:"top 70%",end:"top -50%",scrub:2}}),n=s.timeline({scrollTrigger:{trigger:".sec5Last",scroller:"body",start:"top 100%",end:"top 50%",scrub:2}});i.from(".l1,.l2,.l3,.logo,.navButton",{y:-30,opacity:0,delay:1,duration:.5,stagger:.2}),s.from(".hero1",{x:-10,opacity:0,delay:1,duration:.5}),s.from(".heroImg",{x:70,opacity:0,delay:1,duration:.5}),r.from(".card1,.card2",{x:-10,opacity:0,delay:1,duration:1},"anim"),r.from(".card3,.card4",{x:10,opacity:0,delay:1,duration:.7},"anim"),r.from(".sec2Span1,.sec2Span2,.sec2Span3,.sec2p,.sec2Btn",{y:-10,opacity:0,delay:1,duration:.5,stagger:.2}),c.from(".sec3h,.sec3p",{y:-10,opacity:0,delay:1,duration:.5,stagger:.2}),c.from(".sec3g1",{x:-100,opacity:0,delay:1,duration:.5},"sectionNo3"),c.from(".sec3g2",{x:100,opacity:0,delay:1,duration:.5},"sectionNo3"),d.from(".sec4h,.sec4p,.sec4p1,.sec4p2,.sec4p3",{x:-40,opacity:0,delay:3,duration:2,stagger:.2}),x.from(".sec5a,.sec5bl1,.sec5bl2,.sec5bl3",{x:-40,opacity:0,delay:1,duration:1},"new1"),x.from(".sec5br1,.sec5br2,.sec5br3",{x:40,opacity:0,delay:1,duration:1},"new1"),m.from(".sec5c",{scale:.1,opacity:0,delay:1,duration:1},"new1"),n.from(".sec5d",{x:-40,opacity:0,delay:1,duration:1},"newAnother"),n.from(".sec5d1,.sec5d2,.sec5et1,.sec5eb1,.sec5et2,.sec5eb2,.sec5et3,.sec5eb3",{x:40,opacity:0,delay:1,duration:1},"newAnother")}),h.useEffect(()=>{const i=r=>{const{clientX:c,clientY:d}=r,{innerWidth:x,innerHeight:m}=window,n=d/m*50-20,C=c/x*50-20;s.to(".sec4Img",{rotateX:-n,rotateY:C,transformPerspective:1e3,ease:"power2.out"})};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}},[]);const S=()=>{N(!t)};return e.jsxs("div",{className:"",style:{overflowX:"hidden"},children:[e.jsx("section",{className:"flex justify-center bannerHeight h-[1207px] md:h-auto lg:h-auto lg:pb-10 xl:pb-0  w-full rounded-b-3xl",style:{backgroundImage:"linear-gradient(to right,#6C48B6 10%,#A071CA 50%   )"},children:e.jsxs("main",{className:"md:w-[90%] w-[95%] widthHome text-white",children:[e.jsxs("nav",{className:"justify-between  flex items-center pt-5 text-[17px] font-medium",children:[e.jsx(l,{to:"/cards",className:"logo ",children:e.jsx("img",{src:k,alt:"",className:"w-36"})}),e.jsxs("ul",{className:" gap-10 xl:flex hidden items-center",children:[e.jsxs(l,{to:"/",className:"cursor-pointer",children:[" ",e.jsx("li",{className:"l1",children:"Home"})]}),e.jsx(l,{to:"/cards",children:e.jsx("li",{className:"l2",children:"Cards"})}),e.jsxs(l,{to:"/contact",children:[" ",e.jsx("li",{className:"l3",children:"Contact"})]})]}),e.jsxs("div",{className:"navButton",children:[e.jsx("button",{className:"px-7 py-3 text-hover xl:block hidden hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary ",children:"Login"}),e.jsx("button",{className:"bg-hover text-white text-xl p-2 xl:hidden rounded-xl",onClick:S,children:e.jsx(T,{})})]})]}),t&&e.jsx("div",{className:"absolute w-[100%]",children:e.jsx("div",{style:{zIndex:"100000"},className:"w-[90%] h-[50vh]  rounded-b-xl  flow bg-white relative top-0",children:e.jsxs("div",{className:"flex flex-col gap-2 w-[100%] h-full p-5",children:[e.jsxs(l,{to:"/",children:[e.jsx("h2",{className:"text-primary font-bold text-2xl w-full",children:"Home"})," ",e.jsx("span",{})]}),e.jsx(l,{to:"/cards",children:e.jsx("h2",{className:"text-primary font-bold text-2xl w-full",children:"Cards"})}),e.jsx(l,{to:"/contact",children:e.jsx("h2",{className:"text-primary font-bold text-2xl w-full",children:"Contact"})})]})})}),e.jsxs("main",{className:"flex flex-col lg:flex-row",children:[e.jsxs("div",{className:"lg:w-[50%] mt-20 hero1",children:[e.jsxs("h1",{className:"xl:text-[80px] text-6xl font-extrabold  leading-20 xl:leading-24",children:["Start your ",e.jsx("br",{}),"Crypto Card ",e.jsx("span",{className:"px-3 py-1 rounded-full border-[1px] border-white",children:"Journey"})]}),e.jsx("p",{className:"py-5 xl:w-[80%]",children:"Instant, secure, and hassle-free—turn your crypto into everyday purchases with Xcard."}),e.jsxs("div",{className:"flex xl:flex-row flex-col  xl:items-center gap-5",children:[e.jsx("button",{className:"px-7 py-3 text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-white",children:"Sign Up"}),e.jsx("button",{className:"px-7 py-3 text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary",children:"Contact Us"})]})]}),e.jsx("img",{src:F,alt:"",className:"md:w-[60%] h-[600px] ml-24 md:h-[100vh-2vh] xl:h-[656px] bannerImg z-[1] object-cover object-top heroImg"})]})]})}),e.jsx("section",{className:" w-full flex justify-center section2 pt-44",children:e.jsxs("main",{className:"md:w-[90%] w-[95%] widthHome flex justify-between",children:[e.jsxs("div",{className:"lg:flex hidden flex-col justify-between",children:[e.jsxs("div",{className:"bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white rotate-12 card1",children:[e.jsx(D,{className:"text-3xl"})," Bank Accounts"]}),e.jsxs("div",{className:"bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white -rotate-12 card2",children:[e.jsx(E,{className:"text-3xl"})," Consulting"]})]}),e.jsxs("div",{className:"text-hover flex flex-col gap-5 items-center justify-center",children:[e.jsxs("h2",{className:"text-center text-3xl md:text-5xl xl:text-7xl font-extrabold flex-col flex items-center justify-center",children:[e.jsxs("span",{className:" flex sec2Span1",children:["Work with us ",e.jsx("img",{src:R,alt:"",className:"h-16 w-16"})]}),e.jsx("span",{className:"sec2Span2",children:"to organize & optimize your"}),e.jsxs("span",{className:"flex items-center sec2Span3",children:[e.jsx("img",{src:X,alt:"",className:"h-16 w-16"})," personal finances"]})]}),e.jsx("p",{className:"md:w-[70%] text-center sec2p",children:"Manage, send, receive & swap multiple cryptocurrencies—all in a single app"}),e.jsx("div",{className:"sec2Btn",children:e.jsx("button",{className:"px-7 py-3 text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary",children:"Get Started"})})]}),e.jsxs("div",{className:"lg:flex hidden flex-col justify-between",children:[e.jsxs("div",{className:"bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white -rotate-12 card3",children:[e.jsx(H,{className:"text-3xl"})," Investing"]}),e.jsxs("div",{className:"bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white rotate-12 card4",children:[e.jsx(z,{className:"text-3xl"})," Rewards"]})]})]})}),e.jsx("section",{className:" w-full flex section3 justify-center pt-44",children:e.jsxs("main",{className:"md:w-[90%] w-[95%] widthHome flex flex-col items-center justify-center gap-20",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-5",children:[e.jsx("h2",{className:"text-center text-4xl md:text-7xl sec3h font-extrabold text-hover",children:"Open up an account"}),e.jsx("p",{className:"text-center text-hover sec3p w-[80%]",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full  gap-7",children:[e.jsx("div",{className:`xl:h-[680px] ${a?"col-span-1 py-10":"md:col-span-2 "} text-white bg-primary rounded-2xl transition-all duration-500 ease-in-out `,children:e.jsxs("main",{className:"flex flex-col xl:flex-row mt-10 ml-10 sec3g1",children:[e.jsxs("div",{className:" flex flex-col gap-5",children:[e.jsx("h2",{className:"xl:text-5xl text-4xl font-bold ",children:"A personal account to get you started"}),e.jsx("p",{className:`${a?"w-[80%]":"w-full"}`,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius."}),e.jsxs("h2",{className:"flex gap-5 items-center text-4xl font-bold",children:["Personal ",e.jsx("div",{className:"bg-secondary rounded-full text-hover p-2 w-fit text-sm",children:e.jsx(u,{})})]})]}),e.jsx("img",{src:P,alt:"",className:`xl:h-[640px] object-cover lg:object-contain xl:object-cover h-[500px]  ${a?" hidden":"block"} `})]})}),e.jsx("div",{onMouseEnter:v,onMouseLeave:y,className:`xl:h-[680px]  ${a?"col-span-2":"col-span-1 py-10"} text-hover bg-secondary rounded-2xl transition-all duration-500 `,children:e.jsxs("div",{className:"flex flex-col md:flex-row justify-between sec3g2",children:[e.jsxs("main",{className:"ml-10 mt-10 flex w-[75%] flex-col gap-5",children:[e.jsx("h2",{className:"xl:text-5xl text-4xl font-bold",children:"Need an account for your business?"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius."}),e.jsxs("h2",{className:"flex gap-5 items-center text-4xl font-bold",children:["Business ",e.jsx("div",{className:"bg-hover rounded-full text-white p-2 w-fit text-sm",children:e.jsx(u,{})})]})]}),e.jsx("div",{className:"",children:e.jsx("img",{src:U,alt:"",className:`h-[340px] object-cover md:mt-[320px] mt-[100px]  md:mr-[400px]  ${a?" block":"hidden"} `})})]})})]})]})}),e.jsx("section",{className:" w-full flex justify-center pt-44",children:e.jsxs("main",{className:"md:w-[90%] w-[95%] widthHome flex xl:flex-row flex-col  justify-center items-center  gap-20",children:[e.jsxs("div",{className:"flex flex-col gap-10 xl:w-[49%]",children:[e.jsx("h2",{className:"text-hover font-extrabold sec4h text-center xl:text-start text-4xl md:text-7xl",children:"An app that does it all in one place"}),e.jsx("p",{className:"text-hover text-md sec4p text-center xl:text-start xl:w-[90%] font-medium",children:"Effortless Crypto Deposits  Quick, Simple, Secures,  Top up your XCard with USDC, USDT, BTC, or ETH—straight from your wallet."}),e.jsxs("section",{className:"flex flex-col gap-5 w-full items-center xl:items-start",children:[e.jsxs("div",{className:"flex items-center sec4p1 gap-3",children:[e.jsx("div",{className:"bg-primary text-3xl text-white p-1 rounded-full w-fit",children:e.jsx(p,{})}),e.jsx("p",{children:"Smooth & User-Friendly"})]}),e.jsxs("div",{className:"flex items-center sec4p2 gap-3",children:[e.jsx("div",{className:"bg-primary text-3xl text-white p-1 rounded-full w-fit",children:e.jsx(p,{})}),e.jsx("p",{children:"Benefit-Focused"})]}),e.jsxs("div",{className:"flex items-center sec4p3 gap-3",children:[e.jsx("div",{className:"bg-primary text-3xl text-white p-1 rounded-full w-fit",children:e.jsx(p,{})}),e.jsx("p",{children:"Concise & Clear "})]})]})]}),e.jsx("div",{className:"md:w-[55%]",children:e.jsx("img",{src:G,alt:"",className:"xl:h-[800px] h-[500px] md:h-[500px] sec4Img object-cover"})})]})}),e.jsxs("section",{className:" w-full flex flex-col items-center pb-20 xl:pb-0 lg:gap-44 gap-30 bg-primary rounded-t-2xl justify-center pt-44 sec5",children:[e.jsx("main",{className:"md:w-[90%] w-[95%] widthHome flex xl:flex-row flex-col text-white  justify-center items-center  gap-20",children:e.jsxs("div",{className:"w-full xl:flex-row xl:justify-between flex flex-col justify-center gap-10 xl:gap-0 ",children:[e.jsxs("div",{className:"flex flex-col gap-5 sec5a",children:[e.jsxs("h2",{className:"text-7xl md:text-8xl font-extrabold",children:["  Buy crypto, ",e.jsx("br",{}),"sell crypto."]}),e.jsxs("p",{children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse ",e.jsx("br",{})," varius enim in eros elementum."]})]}),e.jsxs("div",{className:"flex flex-col gap-10",children:[e.jsxs("div",{className:"flex gap-5 items-center",children:[e.jsx("span",{className:"text-white text-4xl sec5bl1",children:e.jsx(L,{})}),e.jsx("h2",{className:"text-5xl font-extrabold sec5br1",children:"155+ tokens"})]}),e.jsxs("div",{className:"flex gap-5 items-center",children:[e.jsx("span",{className:"text-white text-4xl sec5bl2",children:e.jsx(M,{className:"0"})}),e.jsx("h2",{className:"text-5xl font-extrabold sec5br2",children:"Analyze trends"})]}),e.jsxs("div",{className:"flex gap-5 items-center",children:[e.jsx("span",{className:"text-white text-4xl sec5bl3",children:e.jsx(B,{})}),e.jsx("h2",{className:"text-5xl font-extrabold sec5br3",children:"Manage accounts"})]}),e.jsx("button",{className:"px-7 py-3 w-fit text-hover sec5Btn hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary",children:"Learn More"}),e.jsx("div",{})]})]})}),e.jsx("img",{src:V,alt:"",className:"sec5c scale-[1]"}),e.jsxs("main",{className:"md:w-[100%] w-[95%] sec5Last  flex xl:flex-row flex-col text-white  justify-center items-center  gap-20",children:[e.jsx("div",{className:"xl:w-[50%] flex justify-start items-start relative -left-10",children:e.jsx("img",{src:Z,alt:"",className:"sec5d"})}),e.jsx("div",{className:"xl:w-[50%]",children:e.jsxs("div",{className:"w-[85%] flex flex-col gap-10",children:[e.jsx("h2",{className:"text-7xl font-extrabold sec5d1",children:"Try our credit card for a free 30+ days"}),e.jsxs("p",{className:"sec5d2",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ",e.jsx("br",{})," varius enim in eros elementum."]}),e.jsxs("div",{className:"md:flex-row gap-10 md:gap-0 md:justify-between flex flex-col justify-center",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-secondary text-7xl font-extrabold sec5et1",children:"23+"}),e.jsx("p",{className:"font-semibold text-xl sec5eb1",children:"Rewards"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-secondary text-7xl font-extrabold sec5et2",children:"2%"}),e.jsx("p",{className:"font-semibold text-xl sec5eb2",children:"Interest Rate"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-secondary text-7xl font-extrabold sec5et3",children:"1mill"}),e.jsx("p",{className:"font-semibold text-xl sec5eb3",children:"Users"})]})]})]})})]})]}),e.jsx("section",{className:" w-full flex section3 justify-center pt-44",children:e.jsxs("main",{className:"md:w-[90%] w-[95%] widthHome flex flex-col items-center justify-center gap-20",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center gap-5",children:[e.jsx("h2",{className:"text-center text-4xl md:text-7xl sec3h font-extrabold text-hover",children:"Why Choose Xcard"}),e.jsx("p",{className:"text-center text-hover sec3p w-[80%]",children:"Effortless Crypto Deposits Quick, Simple, Secures, Top up your XCard with USDC, USDT, BTC, or ETH—straight from your wallet."})]}),e.jsxs("div",{className:" grid-cols-1 xl:grid hidden md:grid-cols-2 mt-32  w-full  gap-4",children:[e.jsxs("section",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)] h-[500px] rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row ",children:[e.jsx("div",{className:" flex flex-col gap-5 w-[50%] items-center  justify-center",children:e.jsx("h2",{className:"xl:text-5xl font-extrabold text-2xl text-hover",children:"Free app to use everywhere"})}),e.jsx("img",{src:j,alt:"",className:"w-[300px] relative -top-25"})]})}),e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)] h-[500px] rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row ",children:[e.jsx("div",{className:" flex flex-col gap-5 w-[45%] justify-center",children:e.jsx("h2",{className:"xl:text-5xl font-extrabold text-2xl  text-hover",children:"Real time notifications"})}),e.jsx("img",{src:b,alt:"",className:"w-[300px]"})]})})]}),e.jsxs("section",{className:"flex flex-col gap-4",children:[e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)] h-[600px] rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row ",children:[e.jsx("div",{className:" flex flex-col justify-center gap-5 w-50%]",children:e.jsx("h2",{className:"xl:text-5xl font-extrabold text-2xl text-hover",children:"AI message assistant support"})}),e.jsx("img",{src:g,alt:"",className:"w-[300px] relative -top-23 scale-[1.1]"})]})}),e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)] h-[400px] rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row ",children:[e.jsx("div",{className:" flex flex-col justify-center gap-5 w-[59%]",children:e.jsx("h2",{className:"xl:text-5xl font-extrabold text-2xl text-hover",children:"Keep track of your money easily"})}),e.jsx("img",{src:w,alt:"",className:"w-[200px]"})]})})]})]}),e.jsxs("div",{className:" grid-cols-1 xl:hidden grid md:grid-cols-2    w-full  gap-4",children:[e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)]  rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row gap-14",children:[e.jsxs("div",{className:" flex flex-col gap-5",children:[e.jsx("h2",{className:"xl:text-3xl font-extrabold text-2xl text-hover",children:"Free app to use everywhere"}),e.jsx("p",{className:"opacity-[0.6] font-light",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."})]}),e.jsx("img",{src:j,alt:"",className:"w-[300px]"})]})}),e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)]  rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row gap-14",children:[e.jsxs("div",{className:" flex flex-col justify-center gap-5",children:[e.jsx("h2",{className:"xl:text-3xl font-extrabold text-2xl text-hover",children:"AI message assistant support"}),e.jsx("p",{className:"opacity-[0.6] font-light",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."})]}),e.jsx("img",{src:g,alt:"",className:"w-[200px]  "})]})}),e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)]  rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row gap-14",children:[e.jsxs("div",{className:" flex flex-col gap-5",children:[e.jsx("h2",{className:"xl:text-3xl font-extrabold text-2xl text-hover",children:"Real time notifications"}),e.jsx("p",{className:"opacity-[0.6] font-light",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."})]}),e.jsx("img",{src:b,alt:"",className:"w-[300px]"})]})}),e.jsx("div",{className:"bg-[whitesmoke] border-[rgba(0,0,0,0.1)]  rounded-xl border-[1px] p-5",children:e.jsxs("main",{className:"flex flex-col   md:justify-between xl:flex-row gap-14",children:[e.jsxs("div",{className:" flex flex-col justify-center gap-5",children:[e.jsx("h2",{className:"xl:text-3xl font-extrabold text-2xl text-hover",children:"Keep track of your money easily"}),e.jsx("p",{className:"opacity-[0.6] font-light",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum."})]}),e.jsx("img",{src:w,alt:"",className:"w-[200px]"})]})})]})]})})]})};export{Q as default};
