import React from 'react';
import "../styles/Home.css"
import { FiArrowUpRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from "../assets/xcardLogo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { FaSquareXTwitter } from 'react-icons/fa6';


const Footer = () => {
  return (
    <div className='flex justify-center w-full mt-32' style={{backgroundImage:"linear-gradient(to right,#7D40E9 10%,#7D40E9 50%   )"}}>
      <div  className='md:w-[90%] w-[95%] widthHome pt-20 pb-5 text-white'>
<Link to='/contact' className='w-full hover:scale-[1.1] transition-all duration-500 flex justify-center flex-col items-center pt-20'>
  <h2 className='md:text-3xl text-xl font-bold'>We are waiting for your call</h2>
  <div className='flex items-center gap-5 pt-5'>
  <h1 className='md:text-8xl text-4xl font-extrabold '>Call XCard</h1>
  <span className=' text-black bg-white rounded-full p-3'>
    <FiArrowUpRight className='md:text-4xl text-2xl'/>
  </span>
  </div>

</Link>
<div className='md:text-xl flex text-sm justify-between pt-28'>
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
<div className='text-sm md:text-xl flex justify-between pt-5'>
<div className='flex items-center gap-2'>
<Link to='/privacy-policy' className=''>Privacy Policy</Link>
<FiArrowUpRight className='text-xl'/>
</div><div className='flex items-center gap-2'>
<Link to='/cookies' className=''>Cookies</Link>
<FiArrowUpRight className='text-xl'/>
</div><div className='flex items-center gap-2'>
<Link to='/terms-and-conditions' className=''>Terms & Conditions</Link>
<FiArrowUpRight className='text-xl'/>
</div>
</div>

<section className=' justify-between flex flex-col gap-10 lg:flex-row mt-20 p-10 py-20 ' style={{backgroundImage:"linear-gradient(to right,#9A60FF 10%, #9A60FF 50%   )"}}>
  <div className=' flex flex-col items-center lg:items-start lg:justify-start justify-center'>
    <img src={logo} alt="" className='w-44 pb-5'/>
    
    <div className='flex text-4xl gap-4'>
<FaLinkedin/>
<FaFacebookSquare />
<RiInstagramFill />
<FaSquareXTwitter />
    </div>
    <p className='font-light pt-10 text-sm'>USDT services for XPD are provided by Metax Payments Ltd, incorporated in Canada (BC1406436), is Registered at 28 19628, 55A Avenue, Langley, British Columbia, V3A 3X2. The company is duly registered as a Money Services Business with FINTRAC under registration number M23579425, ensuring adherence to Canadian financial laws and regulations.
<br /><br />
<span className='font-extrabold tracking-wider'>Disclaimer:</span> The author assumes no responsibility or liability for any errors or omissions in the content of this site. The information contained in this site is provided on an "as is" basis with no guarantees of completeness, accuracy, usefulness, or timeliness.
    </p>
    <p className='pt-10'>Copyright © 2025 <span className='font-bold'>XCard</span>. All Rights Reserved.</p>
  </div>


</section>
      </div>
    </div>
  )
}

export default Footer
