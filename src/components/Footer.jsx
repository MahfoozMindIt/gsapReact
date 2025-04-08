import React from 'react';
import "../styles/Home.css"
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from "../assets/xcardLogo.png";
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className='flex justify-center w-full mt-32' style={{backgroundImage:"linear-gradient(to right,#7D40E9 10%,#7D40E9 50%   )"}}>
      <div  className='md:w-[90%] w-[95%] widthHome py-20 text-white'>
<Link to='/contact' className='w-full hover:scale-[1.1] transition-all duration-500 flex justify-center flex-col items-center pt-20'>
  <h2 className='md:text-3xl text-xl font-bold'>We are waiting for your call</h2>
  <div className='flex items-center gap-5 pt-5'>
  <h1 className='md:text-8xl text-4xl font-extrabold '>Call XCard</h1>
  <span className=' text-black bg-white rounded-full p-3'>
    <FiArrowUpRight className='md:text-4xl text-2xl'/>
  </span>
  </div>

</Link>
<div className='text-xl flex justify-between pt-28'>
<div className='flex items-center gap-2'>
<Link to='/' className='l'>Home</Link>
<FiArrowUpRight className='text-xl'/>
</div><div className='flex items-center gap-2'>
<Link to='/cards' className='l'>Cards</Link>
<FiArrowUpRight className='text-xl'/>
</div><div className='flex items-center gap-2'>
<Link to='/contact' className=''>Contact us</Link>
<FiArrowUpRight className='text-xl'/>
</div>
</div>

<section className=' justify-between flex flex-col gap-10 lg:flex-row mt-20 p-10 py-20 ' style={{backgroundImage:"linear-gradient(to right,#9A60FF 10%, #9A60FF 50%   )"}}>
  <div className='lg:w-[50%] flex flex-col items-center lg:items-start lg:justify-start justify-center'>
    <img src={logo} alt="" className='w-44 pb-5'/>
    <p className='font-light'>
    Lorem ipsum dolor sit amet, consectetur   adipiscing elit
    </p>
  </div>

  <div className='flex flex-col gap-5   text-black '>
    <p className='text-3xl font-semibold text-white'>Newsletter</p>
    <div className='flex items-center  gap-5  flex-col md:flex-row p-3 rounded-xl bg-white'>
      <div className='flex items-center gap-3 md:text-xl text-hover'>
      <MdEmail className='text-black'/>
      <input type="email" name="" id="" className='outline-0 md:w-80 w-56' placeholder='Enter your email' />
      </div>
      <button className='bg-hover w-44 py-3 rounded-xl text-white'>Get Started</button>
    </div>
  </div>
</section>
      </div>
    </div>
  )
}

export default Footer
