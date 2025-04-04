import React, { useState,useEffect } from 'react'
import banner from '../assets/home.webp';
import { HiBanknotes } from "react-icons/hi2";
import { BsFillPersonVcardFill } from "react-icons/bs";
import para from "../assets/paragraphImage.webp"
import paraPig from "../assets/paraPig.webp";
import sec31 from "../assets/home3-1.png";
import sec32 from "../assets/sec32.webp";
import coins from "../assets/coins.webp";
import boyCard from "../assets/boyCard.webp";
import sec5 from "../assets/Image.png";
import Xcard from "../assets/Xcard.png";
import { FaCloudMeatball, FaCommentDollar, FaCross, FaHandHoldingUsd } from "react-icons/fa";
import { BsFillAwardFill } from "react-icons/bs";
import { IoMenuSharp } from "react-icons/io5";
import { FaArrowRightLong, FaCrosshairs, FaMagnifyingGlassDollar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import "../styles/Home.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {


const [click,setClick]=useState(false);
  const [isHovered , setIsHovered]=useState(false);
const trueHover=()=>{
 setIsHovered(true);
}
const falseHover=()=>{
  setIsHovered(false);
 }

//  Gsap Starts here
useGSAP(() => {
  const tl = gsap.timeline();
  const tl2=gsap.timeline({
    scrollTrigger:{
trigger:".section2",
scroller:"body",
start:"top 100%",
end:"top 0",
scrub:2,
    }
  })

  const tl3=gsap.timeline({
    scrollTrigger:{
      trigger:".section3",
      scroller:"body",
      start:"top 100%",
      end:"top 0",
      scrub:2,
          }
  })
  const tl4=gsap.timeline({
    scrollTrigger:{
      trigger:".section3",
      scroller:"body",
      start:"top 50%",
      end:"bottom -10%",
      scrub:2,
          }
  })
  const tl5=gsap.timeline({
    scrollTrigger:{
      trigger:".sec5",
      scroller:"body",
      start:"top 100%",
          }
  })
  
  const tl6=gsap.timeline({
    scrollTrigger:{
      trigger:".sec5",
      scroller:"body",
      start:"top 70%",
      end:"top -50%",
      scrub:2,
          }
  })
  const tl7=gsap.timeline({
    scrollTrigger:{
      trigger:".sec5Last",
      scroller:"body",
      start:"top 100%",
      end:"top 50%",
      scrub:2
          }
  })

  tl.from('.l1,.l2,.l3,.logo,.navButton', {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.5,
    stagger:0.2
  }),
  gsap.from('.hero1',{
    x:-10,
    opacity:0,
    delay:1,
    duration:0.5,
    
  }),
  gsap.from('.heroImg',{
    x:70,
    opacity:0,
    delay:1,
    duration:0.5,
    
  }),
  tl2.from('.card1,.card2',{
    x:-10,
    opacity:0,
    delay:1,
    duration:1,
  },"anim"),  tl2.from('.card3,.card4',{
    x:10,
    opacity:0,
    delay:1,
    duration:0.7,
  },"anim")
  ,tl2.from('.sec2Span1,.sec2Span2,.sec2Span3,.sec2p,.sec2Btn',{
    y:-10,
    opacity:0,
    delay:1,
    duration:0.5,
    stagger:0.2

  }),
  tl3.from('.sec3h,.sec3p',{
    y:-10,
    opacity:0,
    delay:1,
    duration:0.5,
    stagger:0.2
  }),
  tl3.from('.sec3g1',{
    x:-100,
    opacity:0,
    delay:1,
    duration:0.5,
  },"sectionNo3"),tl3.from('.sec3g2',{
    x:100,
    opacity:0,
    delay:1,
    duration:0.5
  },"sectionNo3"),
  tl4.from('.sec4h,.sec4p,.sec4p1,.sec4p2,.sec4p3',{
    x:-40,
    opacity:0,
    delay:3,
    duration:2,
    stagger:0.2
  }),  tl5.from('.sec5a,.sec5bl1,.sec5bl2,.sec5bl3',{
    x:-40,
    opacity:0,
    delay:1,
    duration:1,
  },"new1"), tl5.from('.sec5br1,.sec5br2,.sec5br3',{
    x:40,
    opacity:0,
    delay:1,
    duration:1,
  },"new1"),tl6.from('.sec5c',{
    scale:0.1,
    opacity:0,
    delay:1,
    duration:1,
  },"new1")
  ,tl7.from('.sec5d',{
    x:-40,
    opacity:0,
    delay:1,
    duration:1,
  },"newAnother"),  tl7.from('.sec5d1,.sec5d2,.sec5et1,.sec5eb1,.sec5et2,.sec5eb2,.sec5et3,.sec5eb3',{
    x:40,
    opacity:0,
    delay:1,
    duration:1,
  },"newAnother")
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



const mobileMenu=()=>{
setClick(!click); 
}

  return (
    <div className='' style={{overflowX:"hidden"}} >
     <section className='flex justify-center bannerHeight h-[1189px] md:h-screen w-full rounded-b-3xl' style={{backgroundImage:"linear-gradient(to right,#6C48B6 10%,#A071CA 50%   )"}}>
<main className='md:w-[90%] w-[95%] widthHome text-white'>
<nav className='justify-between  flex items-center pt-5 text-[17px] font-medium' >

<Link to='/cards' className='logo '><img src={Xcard} alt="" className='w-36'/></Link>
  <ul className=' gap-10 xl:flex hidden items-center'>
   <Link to='/' className='cursor-pointer'> <li className='l1'>Home</li></Link>
    <Link to='/cards'>
    <li className='l2'>Cards</li></Link>
    <li className='l3'>Contact</li>
  </ul>
  <div className='navButton'>
    
  <button className='px-7 py-3 text-hover xl:block hidden hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary '>Login</button>
  <button className='bg-hover text-white text-xl p-2 xl:hidden rounded-xl' onClick={mobileMenu}><IoMenuSharp/></button>
  </div>
</nav>
{click && (<div className='absolute w-[100%]'><div style={{zIndex:"100000"}} className="w-[90%] h-[50vh]  rounded-b-xl  flow bg-white relative top-0">
             <div className="flex flex-col gap-2 w-[100%] h-full p-5">
              <Link to='/'><h2 className='text-primary font-bold text-2xl w-full'>Home</h2> <span></span></Link>
              <Link to='/cards'><h2 className='text-primary font-bold text-2xl w-full'>Cards</h2></Link>
             </div>
            </div></div>)}

<main className='flex flex-col md:flex-row'>
  <div className='md:w-[50%] mt-20 hero1'>
    <h1 className='xl:text-[80px] text-6xl font-extrabold  leading-20 xl:leading-24'>
    Start your <br />
    Crypto Card <span className='px-3 py-1 rounded-full border-[1px] border-white'>Journey</span>
    </h1>
    <p className='py-5 xl:w-[89%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.</p>
  
    <div className='flex xl:flex-row flex-col  xl:items-center gap-5'>
  <button className='px-7 py-3 text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-white'>Sign Up</button>
  <button className='px-7 py-3 text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary'>Contact Us</button>

  </div>
  </div>
  <img src={banner} alt="" className='md:w-[60%] h-[600px] ml-24 md:h-[100vh-2vh] xl:h-[656px] bannerImg z-[1] object-cover object-top heroImg'/>
</main>

</main>
     </section>
     {/* 2nd section starts */}
     <section className=' w-full flex justify-center section2 pt-44'>
<main className='md:w-[90%] w-[95%] widthHome flex justify-between'>
<div className='lg:flex hidden flex-col justify-between'>
<div className='bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white rotate-12 card1'><HiBanknotes className='text-3xl'/> Bank Accounts</div>

<div className='bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white -rotate-12 card2'><BsFillPersonVcardFill className='text-3xl'/> Consulting</div>

</div>

<div className='text-hover flex flex-col gap-5 items-center justify-center'>
  <h2 className='text-center text-3xl md:text-5xl xl:text-7xl font-extrabold flex-col flex items-center justify-center'><span className=' flex sec2Span1'>Work with us <img src={para} alt="" className='h-16 w-16'/></span>
  <span className='sec2Span2'>to organize & optimize your</span>
  
  <span className='flex items-center sec2Span3'>
  <img src={paraPig} alt="" className='h-16 w-16'/> personal finances</span>
  </h2>
<p className='md:w-[70%] text-center sec2p'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.
</p>
<div className='sec2Btn'>
  
<button className='px-7 py-3 text-hover hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary'>Get Started</button>
</div>
</div>
<div className='lg:flex hidden flex-col justify-between'>
<div className='bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white -rotate-12 card3'><FaHandHoldingUsd className='text-3xl'/> Investing</div>

<div className='bg-hover w-fit flex items-center gap-3 px-3 py-2 rounded text-md font-bold text-white rotate-12 card4'><BsFillAwardFill className='text-3xl'/> Rewards</div>

</div>

</main>


     </section>

{/* 3rd section starts */}
<section className=' w-full flex section3 justify-center pt-44'>
<main className='md:w-[90%] w-[95%] widthHome flex flex-col items-center justify-center gap-20' >

<div className='flex flex-col items-center justify-center gap-5'>
<h2 className='text-center text-4xl md:text-7xl sec3h font-extrabold text-hover'>
Open up an account
</h2>
<p className='text-center text-hover sec3p w-[80%]'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.
</p>
</div>

<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full  gap-7'>
<div className={`xl:h-[680px] ${
              isHovered ? "col-span-1 py-10" : "md:col-span-2 "
            } text-white bg-primary rounded-2xl transition-all duration-500 ease-in-out `}>
<main className='flex flex-col xl:flex-row mt-10 ml-10 sec3g1'>
<div className=' flex flex-col gap-5'>
  <h2 className='xl:text-5xl text-4xl font-bold '>A personal account to get you started</h2>
  <p className={`${isHovered?"w-[80%]":'w-full'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
  <h2 className='flex gap-5 items-center text-4xl font-bold'>
    Personal <div className='bg-secondary rounded-full text-hover p-2 w-fit text-sm'><FaArrowRightLong/></div>
  </h2>
</div>
<img src={sec31} alt="" className={`xl:h-[640px] object-cover lg:object-contain xl:object-cover h-[500px]  ${
              isHovered ? " hidden" : "block"
            } `}/>
</main>
</div>
<div  onMouseEnter={trueHover}
            onMouseLeave={falseHover} className={`xl:h-[680px]  ${
              isHovered ? "col-span-2" : "col-span-1 py-10"
            } text-hover bg-secondary rounded-2xl transition-all duration-500 `}>
<div className='flex flex-col md:flex-row justify-between sec3g2'>
<main className='ml-10 mt-10 flex w-[75%] flex-col gap-5'>
<h2 className='xl:text-5xl text-4xl font-bold'>Need an account for your business?</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
  <h2 className='flex gap-5 items-center text-4xl font-bold'>
    Business <div className='bg-hover rounded-full text-white p-2 w-fit text-sm'><FaArrowRightLong/></div>
  </h2>
</main>
<div className=''>
  
<img src={sec32} alt="" className={`h-[340px] object-cover md:mt-[320px] mt-[100px]  md:mr-[400px]  ${
              isHovered ? " block" : "hidden"
            } `}/>
</div>
</div>
</div>
</div>

</main></section>


{/* 4rth section starts */}
<section className=' w-full flex justify-center pt-44'>
<main className='md:w-[90%] w-[95%] widthHome flex xl:flex-row flex-col  justify-center items-center  gap-20' >
  <div className='flex flex-col gap-10 xl:w-[49%]'>
    <h2 className='text-hover font-extrabold sec4h text-center xl:text-start text-4xl md:text-7xl'>An app that does it all in one place
    </h2>
    <p className='text-hover text-md sec4p text-center xl:text-start xl:w-[90%] font-medium'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum.
    </p>
  <section className='flex flex-col gap-5 w-full items-center xl:items-start'>
  <div className='flex items-center sec4p1 gap-3'>
      <div className='bg-primary text-3xl text-white p-1 rounded-full w-fit'><TiTick/></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='flex items-center sec4p2 gap-3'>
      <div className='bg-primary text-3xl text-white p-1 rounded-full w-fit'><TiTick/></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <div className='flex items-center sec4p3 gap-3'>
      <div className='bg-primary text-3xl text-white p-1 rounded-full w-fit'><TiTick/></div><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  </section>
  </div>
  <div className='md:w-[55%]'>
    
  <img src={sec5} alt="" className='xl:h-[800px] h-[500px] md:h-[500px] sec4Img object-cover'/>
  </div>
</main></section>


{/* 5th section starts */}
<section className=' w-full flex flex-col items-center pb-20 xl:pb-0 lg:gap-44 gap-30 bg-primary rounded-t-2xl justify-center pt-44 sec5' >
<main className='md:w-[90%] w-[95%] widthHome flex xl:flex-row flex-col text-white  justify-center items-center  gap-20' >
 <div className='w-full xl:flex-row xl:justify-between flex flex-col justify-center gap-10 xl:gap-0 '>
 <div className='flex flex-col gap-5 sec5a'>
<h2 className='text-7xl md:text-8xl font-extrabold'>  Buy crypto, <br />
sell crypto.</h2>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Suspendisse <br /> varius enim in eros elementum.
  </p>
 </div><div className='flex flex-col gap-10'>
  <div className='flex gap-5 items-center'>
    
  <span className='text-white text-4xl sec5bl1'>
    <FaCloudMeatball />
  </span>
  <h2 className='text-5xl font-extrabold sec5br1'>155+ tokens</h2>
  </div>
  <div className='flex gap-5 items-center'>
    
  <span className='text-white text-4xl sec5bl2'>
    <FaMagnifyingGlassDollar className='0'  />
  </span>
  <h2 className='text-5xl font-extrabold sec5br2'>Analyze trends</h2>
  </div>
  <div className='flex gap-5 items-center'>
    
  <span className='text-white text-4xl sec5bl3'>
    <FaCommentDollar  />
  </span>
  <h2 className='text-5xl font-extrabold sec5br3'>Manage accounts</h2>
  </div>
  
<button className='px-7 py-3 w-fit text-hover sec5Btn hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary'>Learn More</button>
  <div>

  </div>
 </div>
 </div>
 </main>
 <img src={coins} alt="" className='sec5c scale-[1]'/>
 <main className='md:w-[100%] w-[95%] sec5Last  flex xl:flex-row flex-col text-white  justify-center items-center  gap-20'>
<div className='xl:w-[50%] flex justify-start items-start relative -left-10'>
<img src={boyCard} alt="" className='sec5d'/>
</div>
<div className='xl:w-[50%]'>
<div className='w-[85%] flex flex-col gap-10'>
<h2 className='text-7xl font-extrabold sec5d1'>Try our credit card for a free 30+ days</h2>
<p className='sec5d2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> varius enim in eros elementum.</p>
<div className='md:flex-row gap-10 md:gap-0 md:justify-between flex flex-col justify-center'>
  <div>
    <h3 className='text-secondary text-7xl font-extrabold sec5et1'>23+</h3>
    <p className='font-semibold text-xl sec5eb1'>Rewards</p>
  </div>
  <div>
    <h3 className='text-secondary text-7xl font-extrabold sec5et2'>2%</h3>
    <p className='font-semibold text-xl sec5eb2'>Interest Rate</p>
  </div>
  <div>
    <h3 className='text-secondary text-7xl font-extrabold sec5et3'>1mill</h3>
    <p className='font-semibold text-xl sec5eb3'>Users</p>
  </div>

</div>
</div>
</div>
 </main>
 </section>
 {/* 5th section ends here .... */}
    </div>
  )
}

export default Home;
