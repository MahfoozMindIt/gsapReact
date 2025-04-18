import React, { useState } from 'react'
import Xcard from "../assets/xcardLogo.png";
import { Link } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';
import { MdContactPage, MdHomeFilled } from 'react-icons/md';
import { PiCardsThreeFill } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';

const Cookies = () => {
    
    const [click,setClick]=useState(false);

const mobileMenu=()=>{
    setClick(!click); 
    }
  return (
    <div className='' style={{overflowX:"hidden"}} >
    <section className='flex justify-center  w-full  pb-5' style={{backgroundImage:"linear-gradient(to right,#6C48B6 10%,#A071CA 50%   )"}}>
<main className='md:w-[90%] w-[95%] widthHome text-white'>
<nav className={`justify-between ${click && `bg-white rounded-t-xl px-3`} transition-all duration-300 flex items-center pt-5 text-[17px] font-medium`} >

<Link to='/' className='logo '><img src={Xcard} alt="" className='w-36'/></Link>
  <ul className=' gap-10 xl:flex hidden items-center'>
   <Link to='/' className='cursor-pointer'> <li className='l1'>Home</li></Link>
    <Link to='/cards'>
    <li className='l2'>Cards</li></Link>
      <Link to='/contact'> <li className='l3'>Contact</li></Link>
  </ul>
  <div className='navButton flex gap-5'>
    
  <button className='px-7 py-3
cursor-pointer text-hover xl:block hidden hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-white '>Sign Up</button>
  <button className='px-7 py-3 cursor-pointer text-hover xl:block hidden hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary '>Login</button>
  <button className='bg-hover 
cursor-pointer text-white text-xl p-2 xl:hidden rounded-xl transition-all duration-300' onClick={mobileMenu}>{click?<RxCross2 />
:<IoMenuSharp/>} </button>
  </div>
</nav>
{click && (<div className='absolute w-[100%] flex justify-center left-0'><div style={{zIndex:"100000"}} className="w-[95%] md:w-[90%] transition-all duration-300 h-auto  rounded-b-xl  flow bg-white relative top-0">
             <div className="flex flex-col gap-2 w-[100%] h-full p-5">
              <Link to='/'><h2 className='text-hover font-bold text-xl w-full flex items-center gap-3'><span><MdHomeFilled className='text-hover'/></span> Home</h2> </Link>
              <Link to='/cards'><h2 className='text-hover font-bold text-xl w-full flex items-center gap-3'><span><PiCardsThreeFill/></span> Cards</h2></Link>
              <Link to='/contact'><h2 className='text-hover font-bold text-xl w-full flex items-center gap-3'><span><MdContactPage/></span> Contact</h2></Link>
    
    <button className='px-7 py-3
  cursor-pointer text-white  hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-primary '>Sign Up</button>
    <button className='px-7 py-3 cursor-pointer text-hover hover:text-white  hover:bg-hover text-xl transition-all duration-300 rounded-full bg-secondary '>Login</button>
             </div>
            </div></div>)}
           </main></section>
           
           <section className='flex justify-center  w-full rounded-b-3xl pt-20' >
<main className='md:w-[90%] w-[95%] widthHome '>
    <h1 className='text-primary md:text-8xl text-5xl font-extrabold pb-10 lg:pb-16'>Cookies Policy</h1>
    <p>
        <h3 className='text-3xl font-extrabold pb-2'>Introduction</h3>
   <p className='pb-4'>This Cookie Policy outlines how myxpd.app ("XPD", "we", "our", or "us") uses cookies and similar technologies to recognize you when you visit our website at https://myxpd.app (the "Website"). It explains what these technologies are, why we use them, and your rights to control our use of them.</p>
   <p className='pb-4'>myxpd.app is operated by MetaX, a money services business (MSB) corporation registered in British Columbia, Canada (Incorporation Number BC1406436), and regulated by FINTRAC (MSB Registration No. M23579425). MetaX provides digital financial services including the XPD mobile app and globally accepted virtual debit cards.</p>
   <p>
By using our website or services, you consent to our use of cookies as described in this policy.
</p>
    </p>
    <p className='pt-10'>
        <h3 className='text-3xl font-extrabold pb-2'>1. What are cookies?</h3>
   <p className='pb-4'>Cookies are small data files stored on your computer, mobile phone, tablet, or other device when you visit a website. Cookies are widely used to make websites work more efficiently and to provide information to the site owners.</p>
   <p className='pb-4'>The term “cookie” in this policy also includes similar tracking technologies such as web beacons, pixels, or SDKs.</p>
    </p>
    <p className='pt-10'>
        <h3 className='text-3xl font-extrabold pb-2'>2. Types of Cookies We Use</h3>
   <p className='pb-4'>We use the following types of cookies on myxpd.app:</p>
   
   <h3 className='text-2xl font-extrabold pb-2'>a. Strictly Necessary Cookies</h3>
   <p className='pb-4'>These cookies are essential for the operation of our website and services. They enable core functionalities like account login, secure access, and payment processing. Without these cookies, some services cannot be provided.</p>
   <h3 className='text-2xl font-extrabold pb-2'>b. Performance and Analytics Cookies</h3>
   <p className='pb-4'>These cookies help us understand how users interact with our website, such as counting visits and traffic sources. The information collected is aggregated and anonymous.</p>
   <h3 className='text-2xl font-extrabold pb-2'>c. Functionality Cookies</h3>
   <p className='pb-4'>These cookies remember your preferences and choices (e.g., language or region), allowing us to personalize your experience on our website.</p>
   
   <h3 className='text-2xl font-extrabold pb-2'>d. Targeting and Marketing Cookies</h3>
   <p className='pb-4'>
These cookies track your browsing behavior so we can provide content and ads more relevant to you. We may share this information with advertising partners such as Google or Facebook.
</p>
    </p>
    <p className='pt-10'>
        <h3 className='text-3xl font-extrabold pb-2'>3. Why Do We Use Cookies?</h3>
   <p className='pb-4'>We use cookies to:</p>
   <p className='pb-4'>- Enhance the functionality and user experience of our website and mobile app <br />
- Authenticate users and secure accounts <br />
- Analyze performance and improve our services <br />
- Deliver tailored content and advertisements <br />
- Facilitate interaction with third-party services such as payment providers and analytics platforms
</p>
    </p>

    <p className='pt-10'>
        <h3 className='text-3xl font-extrabold pb-2'>4. Consent and Cookie Preferences</h3>
   <p className='pb-4'>When you visit myxpd.app for the first time, we will request your consent to place cookies via a cookie banner. By clicking “Accept” or continuing to use the Website, you consent to our use of cookies as outlined in this Policy.</p>
   <p className='pb-4'>You can change or withdraw your consent at any time by accessing the Cookie Settings on our Website or configuring your browser settings.
</p>
    </p>
    <p className='pt-10'>
        <h3 className='text-3xl font-extrabold pb-2'>5. Managing and Disabling Cookies</h3>
   <p className='pb-4'>You can disable or block cookies using your browser settings. However, some cookies are essential to the functioning of our services, and disabling them may result in limited access or reduced functionality.</p>
   <p className='pb-4'>Visit these links for more browser-specific instructions:
</p>  <p className='pb-4'>- Google Chrome: <a href="https://support.google.com/accounts/answer/6141">https://support.google.com/accounts/answer/6141</a>6 <br />
- Mozilla Firefox: <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies">https://support.mozilla.org/en-US/kb/enable-and-disable-cookies</a> <br />
- Safari: <a href="https://support.apple.com/en-us/HT201265">https://support.apple.com/en-us/HT201265</a> <br />
- Microsoft Edge: <a href='https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09'>https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09</a><br />
You may also visit <a href="www.allaboutcookies.org">www.allaboutcookies.org</a> for more guidance on cookie management.

</p>
    </p>


    <p className='pt-10'>
        <h3 className='text-3xl font-extrabold pb-2'>6. Third-Party Cookies</h3>
   <p className='pb-4'>Some cookies on our website are placed by third parties, including advertising networks and external analytics services. These third parties may use cookies to collect information about your online activities over time and across different websites.</p>
   <p className='pb-4'>Examples include:<br />- Google Analytics <br />
- Meta (Facebook) Pixel <br />
- Stripe (payment integration)

</p>
<p className='pb-4'>We do not control these cookies. You should refer to the respective privacy and cookie policies of these third-party services for more information..</p>
    </p>
    <p className='pt-10'>
        <h3 className='text-3xl font-extrabold pb-2'>7. Updates to This Cookie Policy</h3>
   <p className='pb-4'>We may update this Cookie Policy from time to time to reflect changes in technology, data protection laws, or our business operations. We encourage you to review this policy periodically.</p>
   <p className='pb-4'>If we make significant changes, we will notify you the user through a prominent notice on our website or contacting you directly.
</p>
    </p>

    <p className='pt-10'>
        <h3 className='text-3xl font-extrabold pb-2'>8. Contact Us</h3>
   <p className='pb-4'>If you have any questions or concerns about this Cookie Policy, please contact us at:</p>
   <p className='pb-4'>Email: support@myxpd.app <br />
   Website: <a href="https://myxpd.app">https://myxpd.app</a>
</p>
    </p>

</main></section>
           
           </div>
  )
}

export default Cookies
