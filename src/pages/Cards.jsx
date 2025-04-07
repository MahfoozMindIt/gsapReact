import React, { useState,useEffect } from 'react';
import card1 from "../assets/Card1.png";
import card2 from "../assets/Card2.png";
import card3 from "../assets/Card3.png";
import card4 from "../assets/Card4.png";
import sec2 from "../assets/sec2CardLine.webp"
import s1 from "../assets/cardSec3-1.webp";
import s2 from "../assets/cardSec3-2.webp";
import s3 from "../assets/cardSec3-3.webp";
import s4 from "../assets/cardSec3-4.webp";
import Xcard from "../assets/xcardLogo.png";
import bullet from "../assets/bulletXcard.svg";
import come1 from "../assets/come1.svg";
import get1 from "../assets/get1.avif";
import hand from "../assets/xcard4sec.svg";
import a1 from "../assets/sec4Cards1.webp";
import a2 from "../assets/sec4Card2.webp";
import a3 from "../assets/sec4Card3.webp";
import a4 from "../assets/sec4Card4.webp";
import xcard2sec from "../assets/xcard2sec.png";
import { IoMenuSharp } from "react-icons/io5";
import "../styles/Cards.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlus } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { PiCardsThreeBold } from 'react-icons/pi';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import {  SiGoogleauthenticator } from 'react-icons/si';
gsap.registerPlugin(ScrollTrigger);

const Cards = () => {



  const [isHovered , setIsHovered]=useState(false);
  const [isHovered2 , setIsHovered2]=useState(false);
  const [isHovered3 , setIsHovered3]=useState(false);
  const [come , setCome]=useState(true);
  const [get , setGet]=useState(false);
  const [step, setStep] = useState(0); 
  const [came , setCame]=useState(false);
  const [openIndex , setOpenIndex]=useState(null);


  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (step === 0) {
      setCome(true);
      setGet(false);
      setCame(false);
    } else if (step === 1) {
      setCome(false);
      setGet(true);
      setCame(false);
    } else if (step === 2) {
      setCome(false);
      setGet(false);
      setCame(true);
    }
  }, [step]);


//  Gsap Starts here
useGSAP(() => {
  const tl = gsap.timeline();
  const tl2=gsap.timeline({
    scrollTrigger:{
trigger:".section2Cards",
scroller:"body",
start:"top 70%",
end:"top 0",
scrub:2,
    }
  })

  const tl3=gsap.timeline({
    scrollTrigger:{
trigger:".section3Cards",
scroller:"body",
start:"top 100%",
end:"top 0",
scrub:2,
    }
  })
  
  const tl4=gsap.timeline({
    scrollTrigger:{
trigger:".sectionAdded2",
scroller:"section",
start:"top 40%",
end:"bottom 0",
    }
  })
  const tl5=gsap.timeline({
    scrollTrigger:{
      trigger:".dollarCard",
      scroller:"body",
      start:"top 100%",
      end:"top -10%",
      scrub:2,
          }
  })
    const tl6=gsap.timeline({
    scrollTrigger:{
      trigger:"#cards",
      scroller:"body",
      start:"top 100%",
      end:"top -10%",
      scrub:2,
          }
  })

  tl.from('.l1,.l2,.l3,.logo,.navButton', {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.5,
    stagger:0.2
  }),
  tl.from('.card1,.card2',{
    x:-10,
    opacity:0,
    delay:1,
    duration:0.5,
  },"anim"),  tl.from('.card3,.card4',{
    x:10,
    opacity:0,
    delay:1,
    duration:0.5,
  },"anim")
  tl.from('.hero1,.hero2,.heroPara,.heroBtn',{
    y:-10,
    opacity:0,
    delay:1,
    duration:0.7,
    stagger:0.2
    
  }),
  tl2.from('.sec2h1,.sec2h2,.sec2h3',{
    y:-10,
    opacity:0,
    delay:1,
    duration:0.5,
    stagger:0.2
  }),  tl2.from('.sec2h4',{
    y:-10,
    opacity:0,
    delay:1,
    duration:0.5,
  }),
  tl2.from('.grid1',{
    y:-30,
    opacity:0,
    delay:1,
    duration:0.5,
  },"sec2CardPage"), tl2.from('.grid3',{
    y:-30,
    opacity:0,
    delay:1,
    duration:0.5,
  },"sec2CardPage"), tl2.from('.grid2',{
    y:10,
    opacity:0,
    delay:1,
    duration:0.5,
  }),
  tl3.from('.sec3Span1,.sec3Span2,.sec3Span3,.sec3Span4,.sec3Span5,.sec3Btn',{
    y:30,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.2
  }), tl3.from('.s1,.s2,.s3,.s4',{
    y:30,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.2
  }),tl4.from('.l1',{
    x:-40,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.2
  },"anim1"),tl4.from('#l4',{
    x:40,
    opacity:0,
    delay:1,
    duration:1,
  },"anim1"),tl5.from('.whyChoose',{
    y:-40,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.2
  }),tl5.from('.n1',{
    x:-40,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.2
  },"newNew"),tl5.from('.n2',{
    x:40,
    opacity:0,
    delay:1,
    duration:1,
    stagger:0.2
  },"newNew"),tl5.from('.hand',{
    scale:0.5,
    opacity:0,
    delay:1,
    duration:1,
  }),tl5.from('.n3',{
    y:40,
    opacity:0,
    delay:1,
    duration:1,
  }),tl6.from('#cards',{
    scale:1.2,
    opacity:0,
    delay:1,
    duration:1,
  })
});


// image of section 4 rotation gsap
useEffect(() => {

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    // Calculate rotation based on mouse position
    const rotateX = ((clientY / innerHeight) * 50) - 20; // Tilt effect
    const rotateY = ((clientX / innerWidth) * 50) - 20;  // Rotate effect

    gsap.to(".sec4Img", {
      rotateX: -rotateX,
      rotateY: rotateY,
      transformPerspective: 1000, // Creates a 3D effect
      ease: "power2.out",
    });
  };

  // Attach mousemove event
  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    // Cleanup event listener
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);





  return (
    <div className='' style={{overflowX:"hidden !important"}}>
     <section className='flex justify-center bannerHeight h-[900px] md:h-screen w-full rounded-b-3xl' style={{backgroundImage:"linear-gradient(to right,#6C48B6 10%,#A071CA 50%   )"}}>
<main className='md:w-[90%] w-[95%] widthCards text-white'>
<nav className='justify-between  flex items-center pt-5 text-[17px] font-medium' >

<Link to='/cards' className='logo '><img src={Xcard} alt="" className='w-36'/></Link>
  <ul className=' gap-10 xl:flex hidden items-center'>
   <Link to='/' className='cursor-pointer'> <li className='l1'>Home</li></Link>
    <Link to='/cards'>
    <li className='l2'>Cards</li></Link>
    <li className='l3'>Contact</li>
  </ul>
  <div className='navButton'>
    
  <button className='px-7 py-3 text-hover xl:block hidden hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary '>Get Started</button>
  <button className='bg-hover text-white text-xl p-2 xl:hidden rounded-xl'><IoMenuSharp/></button>
  </div>
</nav>

<main className='flex h-[70vh] pt-36 justify-between items-center'>
<div className='flex h-full  flex-col justify-between'>
<div className=' rotate-[30deg] card1'><img src={card1} alt="" className='lg:w-80 w-44 md:w-52'/></div>

<div className=' -rotate-[30deg] card2'><img src={card2} alt="" className='lg:w-80 w-44 md:w-52'/></div>

</div>

<div className='text-white flex flex-col gap-5 items-center justify-center'>
  <h2 className='text-center text-3xl md:text-5xl xl:text-7xl font-extrabold flex-col flex items-center  justify-center hero1'>One tap and 
 <span className='flex gap-3'> you're 
 <span className='text-secondary hero2'>done.</span></span>
  </h2>
<p className=' text-center heroPara'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
<div className='heroBtn'>
  
<button className='px-7 py-3 text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary'>Get Started</button>
</div>
</div>
<div className='flex h-full flex-col justify-between'>
<div className=' -rotate-[30deg] card3'><img src={card3} alt="" className='lg:w-80 w-44 md:w-52'/></div>

<div className=' rotate-[30deg] card4    '><img src={card4} alt="" className='lg:w-80 w-44 md:w-52'/></div>

</div>
</main>

</main>
     </section>
   

   
<section className=' w-full flex sectionAdded2 bg-[whitesmoke] justify-center pt-44 '>
<main className='md:w-[90%] w-[95%] widthCards flex flex-col lg:flex-row items-center justify-center gap-20' >

<div className='flex flex-col gap-7 xl:w-[47%] l1 lg:-[50%]'>
  
<h2 className='font-extrabold xl:text-7xl md:text-5xl  text-4xl text-center lg:text-start'>
An international dollar <br className='xl:hidden'/> card that works
</h2>
<p className='text-center lg:text-start l2'>
Spend freely at home and abroad with a globally accepted <br className='md:block lg:hidden xl:block hidden'/> virtual debit card that never declines.

</p>
<div className=' w-full flex l3 justify-center lg:justify-start'>

<button className='px-7 py-3 w-fit text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary'>Get Started</button>

</div>
</div>
<div className='lg:w-[50%] flex justify-center  items-center'>
  <img src={xcard2sec} alt="" className='w-96 l4'/>
</div>

</main></section>

{/* 3rd section starts */}
<section className=' w-full flex section3 justify-center pt-44 section2Cards'>
<main className='md:w-[90%] w-[95%] widthCards flex flex-col items-center justify-center gap-20' >

<div className='flex flex-col items-center justify-center gap-5'>
<h2 className='text-center text-4xl lg:text-5xl  xl:text-6xl sec3h font-extrabold text-hover flex gap-3 '>
<span className='sec2h1'>XCards makes</span> <div className='flex flex-col text-primary  justify-center md:justify-start'><span className='sec2h2'>millions</span><span><img src={sec2} alt="" className='lg:w-52 w-[100px] sec2h4'/></span></div> <span className='sec2h3'>of lives easier</span>
</h2>
</div>

<div className='grid grid-cols-1  lg:grid-cols-3 w-full md:w-[70%] lg:w-full  gap-7'>
<div className={`grid1 rounded-2xl text-white  relative`}>
<main className='flex flex-col xl:flex-row p-5 sec3g1'>
<div className='flex justify-between text-xl font-bold w-full'>
    <h3>Zero
    maintenance card</h3>
    <button onClick={()=>setIsHovered(!isHovered)} className='bg-primary w-fit z-[100000] p-2 rounded-full cursor-pointer'><FaPlus className={`z-[100000] transition-all duration-500 ${isHovered&&"rotate-45"}`}/></button>
</div>
</main>

{isHovered && (<div className='bg-primary h-full w-full pt-16 px-5 z-[1] absolute rounded-2xl top-0'>
    
    <h3 className='text-white text-2xl font-bold'>
    A zero
    maintenance card</h3><p className='pt-10 text-xl'>
    Get debited only for your purchases. No maintenance and hidden fees.
    </p>
    </div>)}

</div>
<div className={`grid2 rounded-2xl text-white  relative`}>
<main className='flex flex-col xl:flex-row p-5 sec3g1'>
<div className='flex justify-between text-xl font-bold w-full'>
    <h3>Wiser spendings
</h3>
    <button onClick={()=>setIsHovered2(!isHovered2)} className='bg-primary w-fit z-[100000] p-2 rounded-full cursor-pointer'><FaPlus className={`z-[100000] transition-all duration-500 ${isHovered2&&"rotate-45"}`}/></button>
</div>
</main>

{isHovered2 && (<div className='bg-primary h-full w-full pt-16 px-5 z-[1] absolute rounded-2xl top-0'>
    
    <h3 className='text-white text-2xl font-bold'>
    Tools for wiser
spending
</h3><p className='pt-10 text-xl'>
        
Make better spending decisions with expense insights from your spending habits.
    </p>
    </div>)}

</div><div className={`grid3 rounded-2xl text-white  relative`}>
<main className='flex flex-col xl:flex-row p-5 sec3g1'>
<div className='flex justify-between text-xl font-bold w-full'>
    <h3>Pay on any
    digital store</h3>
    <button onClick={()=>setIsHovered3(!isHovered3)} className='bg-primary w-fit z-[100000] p-2 rounded-full cursor-pointer'><FaPlus className={`z-[100000] transition-all duration-500 ${isHovered3&&"rotate-45"}`}/></button>
</div>
</main>

{isHovered3 && (<div className='bg-primary h-full w-full pt-16 px-5 z-[1] absolute rounded-2xl top-0'>
    
    <h3 className='text-white text-2xl font-bold'>
   You can now pay on any
digital store</h3><p className='pt-10 text-xl'>
Pay for your bills, flight tickets, or subscriptions, and shop in international stores online.
    </p>
    </div>)}

</div>
</div>

</main></section>


{/* another section starts */}

<section className=' w-full flex bg-[whitesmoke] dollarCard text-hover rounded-t-2xl mt-44 justify-center py-44 '>
<main className='md:w-[90%] w-[95%] widthCards  flex flex-col items-center justify-center gap-20' >
<h2 className='md:text-6xl text-4xl font-extrabold whyChoose  text-center'>
Why choose <br className='hidden md:block'/>
our virtual dollar <br className='hidden md:block'/> Mastercard?
</h2>
<section className='flex flex-col gap-5'>
  
<div className='w-full n1'>
<div className='flex flex-wrap justify-center gap-5'>
<div className='border-[1px] border-[grey] flex items-center gap-3 p-3 rounded-full text-black'>
  <img src={bullet} alt="" />
  <p className='text-xl font-semibold'>Top up with your local currency</p>
</div>
<div className='border-[1px] border-[grey] flex items-center gap-3 p-3 rounded-full text-black'>
  <img src={bullet} alt="" />
  <p className='text-xl font-semibold'>Card withdrawals</p>
</div>
<div className='border-[1px] border-[grey] flex items-center gap-3 p-3 rounded-full text-black'>
  <img src={bullet} alt="" />
  <p className='text-xl font-semibold'>No declined transaction fees</p>
</div>
<div className='border-[1px] border-[grey] flex items-center gap-3 p-3 rounded-full text-black'>
  <img src={bullet} alt="" />
  <p className='text-xl font-semibold'>Zero maintenance charges</p>
</div>
</div>
</div>
<div className='w-full n2'>
<div className='flex flex-wrap justify-center gap-5'>
<div className='border-[1px] border-[grey] flex items-center gap-3 p-3 rounded-full text-black'>
  <img src={bullet} alt="" />
  <p className='text-xl font-semibold'>Card statements</p>
</div>
<div className='border-[1px] border-[grey] flex items-center gap-3 p-3 rounded-full text-black'>
  <img src={bullet} alt="" />
  <p className='text-xl font-semibold'>Instant transaction notifications</p>
</div>
<div className='border-[1px] border-[grey] flex items-center gap-3 p-3 rounded-full text-black'>
  <img src={bullet} alt="" />
  <p className='text-xl font-semibold'>Card restrictions when you want</p>
</div>
<div className='border-[1px] border-[grey] flex items-center gap-3 p-3 rounded-full text-black'>
  <img src={bullet} alt="" />
  <p className='text-xl font-semibold'>Anti-fraud protection</p>
</div>
</div>
</div>
</section>
<div className='w-full flex justify-center'>
  
<img src={hand} alt="" className='hand'/>
</div>
<div className='w-full flex justify-center flex-col gap-7 n3 items-center'>
<h2 className='md:text-6xl text-4xl font-extrabold  text-center'>
Never miss a payment with <br className='lg:block hidden'/> the Xcard's dollar Mastercard
</h2>
<button className='px-7 py-3 w-fit text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary'>Get Yours Now</button>

</div>
</main></section>
{/* another section ends */}


{/* spend safer online section starts */}

<section className=' w-full flex  border-b-[1px] border-b-[rgba(0,0,0,0.1)] justify-center pt-44 pb-32 '>
<main className='md:w-[90%] w-[95%] widthCards flex flex-col lg:flex-row items-center justify-center gap-20' >

<div className='flex flex-col gap-7 xl:w-[47%]  lg:-[50%]'>
  
<h2 className='font-extrabold xl:text-6xl md:text-5xl pb-20  text-4xl text-center lg:text-start'>
Spend safer online  <br className=''/> with our card security measures
</h2>
<div className={`flex  gap-10 transition-all duration-300  pb-10 ${come && ("border-b-[1px]   border-b-primary bg-[whitesmoke] py-5")}  px-5`}>
  <span className='text-2xl'><PiCardsThreeBold/></span>
<div>
<p className='text-xl font-extrabold'>Freeze card</p>
{come && <h3 className='pt-5 text-[rgba(0,0,0,0.7)]  transition-all duration-300'>Freeze your card to prevent it from unauthorized use, and unfreeze it when the coast is clear.</h3>}
</div>
</div>
<div className={`flex  gap-10 transition-all duration-300  pb-10 ${get && ("border-b-[1px]   border-b-primary bg-[whitesmoke] py-5")} px-5`}>
  <span className='text-2xl'><MdOutlineNotificationsActive/></span>
<div>
<p className='text-xl font-extrabold'>Instant notification</p>
{get && <h3 className='pt-5 text-[rgba(0,0,0,0.7)]  transition-all duration-300'>Keep track of every completed card transaction you make with Grey.</h3>}
</div>
</div>
<div className={`flex  gap-10 transition-all duration-300  pb-10 ${came && ("border-b-[1px]   border-b-primary bg-[whitesmoke] py-5")} px-5`}>
  <span className='text-2xl'><SiGoogleauthenticator/></span>
<div>
<p className='text-xl font-extrabold'>Two-factor authentication</p>
{came && <h3 className='pt-5 text-[rgba(0,0,0,0.7)]  transition-all duration-300'>Add an extra layer of security to prevent unauthorized access to your accounts.</h3>}
</div>
</div>
</div>
<div className='lg:w-[50%] flex justify-center  items-center'>
  {come && <img src={come1} alt="" className=''/>}
  {get && <img src={get1} alt="" className='w-[70%]'/>}
  {came && <img src={a1} alt="" className='w-[70%]'/>}
</div>

</main></section>

{/* spend safer online section ends */}

<section className=' w-full flex section3 justify-center pt-44 section3Cards'>
<main className='md:w-[90%] w-[95%] widthCards flex flex-col items-center justify-center gap-20' >

<div className='flex flex-col items-center justify-center gap-5'>
<h2 className='text-center text-5xl  lg:text-7xl xl:text-8xl  sec3h font-extrabold text-hover flex flex-wrap  justify-center gap-3'><span className='sec3Span1'>The </span> <span className='sec3Span2'>stats </span> <span className='sec3Span3'>speak </span> <span className='sec3Span4'>for</span> <span className='sec3Span5'>themselves</span>
</h2>
<div className='sec3Btn'>
    
<button className='px-7 py-3 text-hover xl:block hidden hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary '>Get Started</button>
</div>
</div>
<div className='grid grid-cols-1 md:grid-cols-2 gap-10 '>

<img src={s1} alt="" className='s1'/>
<img src={s2} alt="" className='s2'/>
<img src={s3} alt="" className='s3'/>
<img src={s4} alt="" className='s4'/>

    </div></main></section>

    <section className=' w-full flex section3 justify-center pt-44 section3Cards'>
<main className='md:w-[90%] w-[95%] widthCards flex flex-col items-center justify-center gap-20' >
<div className='flex flex-col items-center justify-center gap-5'>
<div className='flex justify-center w-full '>
<h2 className='text-center text-5xl  lg:text-7xl xl:text-8xl  sec3h font-extrabold text-hover flex items-center justify-center flex-wrap gap-3 '><span className='sec3Span1'>The </span><span className='sec3Span3'>XCard </span> <span className='sec3Span4'>is truly </span> <span className='sec3Span5 text-primary'>special</span>
</h2>
</div>

<div className='w-full flex justify-center pt-10'>
<p className='lg:w-[50%] w-[85%] md:w-[70%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>

</div>

<div id='cards' className='grid  grid-cols-1 gap-10 mt-20'>

<div id='card_1' className='bg-primary  card1 flex flex-col gap-20 md:flex-row rounded-2xl md:p-20 p-5  py-14'>
<div className='text-white md:w-[50%] flex flex-col justify-center'>
    <h2 className='text-5xl lg:text-6xl font-extrabold pt-14 lg:pt-0 pb-7'>
    Contactless payments</h2>
    <p className='lg:w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea laborum laudantium veniam iste neque beatae porro alias voluptate, accusamus, temporibus tempora eos natus, tenetur esse!</p>
</div>
<img src={a1} alt="" className='md:w-[50%] pt-20 rounded-2xl'/>
</div>
<div id='card_2' className='bg-primary card2 flex flex-col gap-20 md:flex-row rounded-2xl md:p-20 p-5 py-14'>
<div className='text-white md:w-[50%] flex flex-col justify-center'>
    <h2 className='text-5xl lg:text-6xl font-extrabold pt-14 lg:pt-0 pb-7'>
    Flexible payments</h2>
    <p className='lg:w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea laborum laudantium veniam iste neque beatae porro alias voluptate, accusamus, temporibus tempora eos natus, tenetur esse!</p>
</div>
<img src={a2} alt="" className='md:w-[50%] pt-20 rounded-2xl'/>
</div>
<div id='card_3' className='bg-primary card3  flex flex-col gap-20 md:flex-row rounded-2xl md:p-20 p-5 py-14'>
<div className='text-white md:w-[50%] flex flex-col justify-center'>
    <h2 className='lg:text-6xl text-5xl font-extrabold pt-14 lg:pt-0 pb-7'>
    Introductory APR</h2>
    <p className='lg:w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea laborum laudantium veniam iste neque beatae porro alias voluptate, accusamus, temporibus tempora eos natus, tenetur esse!</p>
</div>
<img src={a3} alt="" className='md:w-[50%] pt-20 rounded-2xl'/>
</div>
<div id='card_4' className='bg-primary card4  flex flex-col gap-20 md:flex-row rounded-2xl md:p-20 p-5 py-14'>
<div className='text-white md:w-[50%] flex flex-col justify-center'>
    <h2 className='lg:text-6xl text-5xl font-extrabold pt-14 lg:pt-0 pb-7'>
    ‍Real-time fraud monitoring</h2>
    <p className='lg:w-[75%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea laborum laudantium veniam iste neque beatae porro alias voluptate, accusamus, temporibus tempora eos natus, tenetur esse!</p>
</div>
<img src={a4} alt="" className='md:w-[50%] pt-20 rounded-2xl'/>
</div>


</div>

</div>


</main></section>

{/* 5th section frequently asked questions*/}

<section className=' w-full flex section3 justify-center pt-44 section3Cards'>
<main className='md:w-[90%] w-[95%] widthCards flex flex-col items-center justify-center gap-20' >
<div className='flex flex-col items-center justify-center gap-5'>
<div className='flex justify-center w-full '>
<h2 className='text-center text-5xl  lg:text-6xl xl:text-7xl  sec3h font-extrabold text-hover flex items-center justify-center flex-wrap gap-3 '>Frequently Asked Questions
</h2>
</div>

<div className='w-full flex justify-center pt-2'>
<p className='lg:w-[50%] w-[85%] md:w-[70%] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>

</div></div>
{/* frequently asked questions.... */}
<section className="lg:w-[75%] md:w-[90%] w-full flex-col flex gap-5">
      {[0, 1,2,3,4,5,6,7,8].map((index) => (
        <div
          key={index}
          className="bg-primary gap-10 flex w-full md:rounded-full rounded-3xl items-center p-5"
        >
          <button
            onClick={() => toggleFaq(index)}
            className={`bg-hover cursor-pointer duration-300 transition-all text-white p-1 rounded-full ${
              openIndex === index ? "rotate-180" : "rotate-0"
            }`}
          >
            <RiArrowDropDownLine className="text-4xl" />
          </button>
          <div className="text-white">
            <h2 className="text-white text-xl font-semibold">
              Add commonly asked question here
            </h2>
            {openIndex === index && (
              <p className="pt-5 transition-all duration-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                temporibus magni repellendus voluptatum libero eum?
              </p>
            )}
          </div>
        </div>
      ))}
    </section>

</main></section>



<section className=' h-[500px] w-full'></section>
    </div>
  )
}

export default Cards;
