import React from 'react'
import "../styles/Contact.css"
import Xcard from "../assets/xcardLogo.png";
import { Link } from 'react-router-dom'
import { IoMenuSharp } from 'react-icons/io5';
import { RiMailSendLine } from 'react-icons/ri';
import { SiMinutemailer } from 'react-icons/si';
import { PiPhoneCall } from 'react-icons/pi';
import { ImOffice } from 'react-icons/im';

const Contact = () => {
  return (
    <div className='' style={{overflowX:"hidden !important"}}>
    <section className='flex justify-center bannerContact absolute   rounded-b-3xl'>
<main className='md:w-[90%] w-[95%] widthContact text-white'>
<nav className='justify-between   flex items-center pt-5 text-[17px] font-medium' >

<Link to='/cards' className='logo textBanner'><img src={Xcard} alt="" className='w-36'/></Link>
 <ul className=' gap-10 xl:flex hidden items-center'>
  <Link to='/' className='cursor-pointer textBanner'> <li className='l1'>Home</li></Link>
   <Link to='/cards'  className='cursor-pointer textBanner'>
   <li className='l2 textBanner'>Cards</li></Link>
  <Link to='/contact '  className='cursor-pointer textBanner'> <li className='l3 textBanner'>Contact</li></Link>
 </ul>
 <div className='navButton textBanner'>
   
 <button className='px-7 py-3 text-hover xl:block hidden hover:text-white hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary  textBanner'>Get Started</button>
 <button className='bg-hover text-white text-xl p-2 xl:hidden rounded-xl textBanner'><IoMenuSharp/></button>
 </div>
</nav>

<main className='flex h-[70vh] justify-center items-center'>
<h1 className='md:text-8xl text-5xl textBanner font-extrabold'>
Reach out here
</h1>
</main>

</main>
    </section>
    <section className='w-full h-[100vh] bg-[rgba(0,0,0,0.4)] relative top-0 rounded-b-3xl overContact'></section>


    <section className='flex justify-center mt-10'>
<main className='md:w-[90%] w-[95%] widthContact '>
<div className='grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-14'>
<div className='bg-primary text-white rounded-xl flex flex-col gap-3 p-5'>
<RiMailSendLine className='text-2xl'/>
<p className='text-xl'>Support Email</p>
<p className=''>hello@zurabank.com</p>
<button className='bg-white text-black font-bold w-full py-3 mt-7 hover:text-white hover:bg-hover rounded-xl'>Email Us</button>
</div>
<div className='bg-primary text-white rounded-xl flex flex-col gap-3 p-5'>
<PiPhoneCall className='text-2xl'/>
<p className='text-xl'>Phone Number</p>
<p className=''>1800-000-0000</p>
<button className='bg-white text-black font-bold w-full py-3 mt-7 hover:text-white hover:bg-hover rounded-xl'>Call Us</button>
</div>
<div className='bg-primary text-white rounded-xl md:col-span-2 col-span-1 lg:col-span-1 flex flex-col gap-3 p-5'>
<ImOffice className='text-2xl'/>
<p className='text-xl'>Headquarters</p>
<p className=''>12 Cherry Street, NJ, 10384</p>
<button className='bg-white text-black font-bold w-full py-3 mt-7 hover:text-white hover:bg-hover rounded-xl'>Visit Us</button>
</div>
</div>
</main></section>


<section className='flex justify-center mt-20'>
<main className='md:w-[90%] flex justify-start w-[95%] widthContact '>
  <form action="" className='lg:w-[50%] w-full flex flex-col gap-5'>
    <div className='flex flex-col gap-3'>
      
    <label htmlFor="" className='text-[18px] font-semibold'>Full Name</label>
    <input type="text" className='border-[1px] border-[rgba(0,0,0,0.3)] outline-0 p-2' placeholder='John Smith' name="" id="" />
    </div>
    <div className='flex flex-col gap-3'>
      
      <label htmlFor="" className='text-[18px] font-semibold'>Email</label>
      <input type="text" className='border-[1px] border-[rgba(0,0,0,0.3)] outline-0 p-2' placeholder='example@email.com' name="" id="" />
      </div>
      <div className='flex flex-col gap-3'>
      
      <label htmlFor="" className='text-[18px] font-semibold'>Phone Number</label>
      <input type="text" className='border-[1px] border-[rgba(0,0,0,0.3)] outline-0 p-2' placeholder='1800-000-0000' name="" id="" />
      </div>
      <div className='flex flex-col gap-3'>
      
      <label htmlFor="" className='text-[18px] font-semibold'>Message</label>
      <textarea name="" className='border-[1px] border-[rgba(0,0,0,0.3)] outline-0 p-2 h-[200px]' placeholder='Enter your message here ...' id=""></textarea>
      </div>
      <button className='bg-primary flex justify-center items-center gap-3 text-white font-bold w-full py-3 mt-7 hover:text-white hover:bg-hover rounded'>Send Message <span><SiMinutemailer className='text-xl'/></span></button>

  </form>
</main></section>

  </div>
  )
}

export default Contact
