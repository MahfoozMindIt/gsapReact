import React, { useRef, useState } from 'react'
import "../styles/Contact.css"
import emailjs from "emailjs-com";
import Xcard from "../assets/FinalXcard.png";
import { Link } from 'react-router-dom'
import { IoMenuSharp } from 'react-icons/io5';
import { RiMailSendLine } from 'react-icons/ri';
import { SiMinutemailer } from 'react-icons/si';
import { PiCardsThreeFill, PiPhoneCall } from 'react-icons/pi';
import { ImOffice } from 'react-icons/im';
import { MdContactPage, MdHomeFilled } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';

const Contact = () => {


const [click,setClick]=useState(false);
  const mobileMenu=()=>{
    setClick(!click); 
    }
  
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.from_name && !formData.from_email && !formData.from_phone) {
      setError("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    emailjs
      .sendForm(
        "service_evqbfn8",
        "template_616fa4w",
        form.current,
        "gN0bD3HgZrPY88RIa"
      )
      .then(
        (result) => {
          setSuccess("Message sent successfully!");
          setFormData({ from_name: "", from_email: "", from_phone: "", message: "" });

          setTimeout(() => {
            setSuccess("");
          }, 1000);
        },
        (error) => {
          setError("Message was not submitted. Please try again.");
        }
      );
  };


  return (
    <div className='' style={{overflowX:"hidden !important"}}>
    <section className='flex justify-center bannerContact absolute h-auto pb-20  rounded-b-3xl'>
<main className='md:w-[90%] w-[95%] bgContactNav widthContact text-white'>
<nav className={`justify-between   textBanner ${click && `bg-white rounded-t-xl px-3 border-b-1 border-[rgba(0,0,0,0.2)] pb-3`} transition-all duration-300 flex items-center pt-5 text-[17px] font-medium`} >

<Link to='/' className='logo textBanner'><img src={Xcard} alt="" className='w-36'/></Link>
  <ul className=' gap-10 xl:flex hidden items-center'>
   <Link to='/' className='cursor-pointer textBanner'> <li className='l1'>Home</li></Link>
    <Link to='/cards' className='textBanner'>
    <li className='l2 textBanner'>Cards</li></Link>
      <Link to='/contact ' className='textBanner'> <li className='l3 textBanner'>Contact</li></Link>
  </ul>
  <div className='navButton flex gap-5'>
    
  <button className='px-7 py-3
cursor-pointer text-hover xl:block hidden textBanner hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-white '>Sign Up</button>
  <button className='px-7 py-3 cursor-pointer textBanner text-hover xl:block hidden hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary '>Login</button>
  <button className='bg-hover 
cursor-pointer text-white text-xl p-2 xl:hidden rounded-xl transition-all duration-300 textBanner' onClick={mobileMenu}>{click?<RxCross2 />
:<IoMenuSharp/>} </button>
  </div>
</nav>
{click && (<div className='absolute w-[100%] flex justify-center left-0'><div style={{zIndex:"100000"}} className="w-[95%] md:w-[90%]  transition-all duration-300 h-auto  rounded-b-xl  flow bg-white relative top-0">
             <div className="flex flex-col gap-2 w-[100%] h-full p-5">
              <Link to='/'><h2 className='text-hover font-bold text-xl w-full flex items-center gap-3'><span><MdHomeFilled className='text-hover'/></span> Home</h2> </Link>
              <Link to='/cards'><h2 className='text-hover font-bold text-xl w-full flex items-center gap-3'><span><PiCardsThreeFill/></span> Cards</h2></Link>
              <Link to='/contact'><h2 className='text-hover font-bold text-xl w-full flex items-center gap-3'><span><MdContactPage/></span> Contact</h2></Link>
              
    
  <button className='px-7 py-3
cursor-pointer text-white  hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-primary '>Sign Up</button>
  <button className='px-7 py-3 cursor-pointer text-hover  hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary '>Login</button>
             </div>
            </div></div>)}

<main className='flex mt-20 justify-center flex-col items-center w-full '>
<h1 className='md:text-8xl text-5xl textBanner pb-20 font-extrabold'>
Reach out us
</h1>

<div className='grid lg:grid-cols-3 xl:w-[90%] w-full md:grid-cols-2  grid-cols-1 gap-14'>
<div className='bg-[#9a60ff85] text-white textBanner rounded-xl flex flex-col gap-3 p-5'>
<RiMailSendLine className='text-2xl'/>
<p className='text-xl'>Support Email</p>
<p className=''>hello@example.com</p>
<button className='bg-white text-black  font-bold w-full py-3 cursor-pointer transition-all duration-300 mt-7 hover:text-white hover:bg-hover rounded-xl'>Email Us</button>
</div>
<div className='bg-[#9a60ff85] textBanner text-white rounded-xl flex flex-col gap-3 p-5'>
<PiPhoneCall className='text-2xl'/>
<p className='text-xl'>Phone Number</p>
<p className=''>1800-000-0000</p>
<button className='bg-white text-black font-bold w-full py-3 mt-7 cursor-pointer transition-all duration-300  hover:text-white hover:bg-hover rounded-xl'>Call Us</button>
</div>
<div className='bg-[#9a60ff85] textBanner text-white rounded-xl md:col-span-2   col-span-1 lg:col-span-1 flex flex-col gap-3 p-5'>
<ImOffice className='text-2xl'/>
<p className='text-xl'>Headquarters</p>
<p className=''>12 Cherry Street, NJ, 10384</p>
<button className='bg-white text-black font-bold w-full py-3 mt-7 cursor-pointer  transition-all duration-300  hover:text-white hover:bg-hover rounded-xl'>Visit Us</button>
</div>
</div>
</main>

</main>
    </section>
    <section className='w-full xl:h-[637px] lg:h-[639px] md:h-[923px] h-[1157px] pb-20 bg-[rgba(0,0,0,0.4)] relative top-0 rounded-b-3xl overContact'></section>


    <section className='flex justify-center mt-10'>
<main className='md:w-[90%] w-[95%] widthContact '>

</main></section>


<section className='flex justify-center mt-20'>
<main className='md:w-[90%] flex justify-start flex-col  w-[95%] widthContact '>
  <form ref={form} onSubmit={sendEmail} className='lg:w-[50%] w-full flex flex-col gap-5'>
    <div className='flex flex-col gap-3'>
      
    <label htmlFor="" className='text-[18px] font-semibold'>Full Name</label>
    <input type="text" name='from_name' value={formData.from_name} onChange={handleChange} className='border-[1px] border-[rgba(0,0,0,0.3)] outline-0 p-2' placeholder='John Smith' id="" />
    </div>
    <div className='flex flex-col gap-3'>
      
      <label htmlFor="" className='text-[18px] font-semibold'>Email</label>
      <input type="email" className='border-[1px] border-[rgba(0,0,0,0.3)] outline-0 p-2' placeholder='example@email.com' name="from_email"
            value={formData.from_email}
            onChange={handleChange} id="" />
      </div>
      <div className='flex flex-col gap-3'>
      
      <label htmlFor="" className='text-[18px] font-semibold'>Phone Number</label>
      <input type="" className='border-[1px] border-[rgba(0,0,0,0.3)] outline-0 p-2' placeholder='1800-000-0000' name="from_phone" id=""
            value={formData.from_phone}
            onChange={handleChange}  />
      </div>
      <div className='flex flex-col gap-3'>
      
      <label htmlFor="" className='text-[18px] font-semibold'>Message</label>
      <textarea  className='border-[1px] border-[rgba(0,0,0,0.3)] outline-0 p-2 h-[200px]' placeholder='Enter your message here ...' id="" name="message" value={formData.message} onChange={handleChange}></textarea>
      </div>
      <button type='submit' className='bg-primary cursor-pointer group transition-all duration-500 flex justify-center items-center gap-3 text-white font-bold w-full py-3 mt-7 hover:text-white hover:bg-hover hover:tracking-wider rounded '>Send Message <span><SiMinutemailer className='text-xl group-hover:scale-[1.5] transition-all duration-500'/></span></button>

  </form>
  <div className='lg:w-[50%] w-full flex justify-center'>
    
  {error && <p className="text-red-500 text-center pt-5 font-light">{error}</p>}
      {success?<p className="text-green-500 text-center pt-5 font-light">Message sent successfully!</p>:''}
  </div>
</main></section>

  </div>
  )
}

export default Contact
