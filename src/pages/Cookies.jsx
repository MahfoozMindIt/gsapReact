import React, { useState } from 'react'
import Xcard from "../assets/xcardLogo.png";
import { Link } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';

const Cookies = () => {
    
    const [click,setClick]=useState(false);

const mobileMenu=()=>{
    setClick(!click); 
    }
  return (
    <div className='' style={{overflowX:"hidden"}} >
    <section className='flex justify-center  w-full rounded-b-3xl pb-5' style={{backgroundImage:"linear-gradient(to right,#6C48B6 10%,#A071CA 50%   )"}}>
<main className='md:w-[90%] w-[95%] widthHome text-white'>
<nav className='justify-between  flex items-center pt-5 text-[17px] font-medium' >

<Link to='/' className='logo '><img src={Xcard} alt="" className='w-36'/></Link>
 <ul className=' gap-10 xl:flex hidden items-center'>
  <Link to='/' className='cursor-pointer'> <li className='l1'>Home</li></Link>
   <Link to='/cards'>
   <li className='l2'>Cards</li></Link>
     <Link to='/contact'> <li className='l3'>Contact</li></Link>
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
             <Link to='/contact'><h2 className='text-primary font-bold text-2xl w-full'>Contact</h2></Link>
            </div>
           </div></div>)}</main></section>
           
           <section className='flex justify-center  w-full rounded-b-3xl pt-20' >
<main className='md:w-[90%] w-[95%] widthHome text-center'>
    <h1 className='text-primary md:text-8xl text-5xl font-extrabold pb-10 lg:pb-16'>Cookies</h1>
    <p>
    Xcard, a business corporation registered under Incorporation Number BC1406436 in British Columbia, Canada, operates at 28 19628, 55A Avenue, Langley, British Columbia, V3A 3X2 Canada. Additionally, Xcard is registered with FINTRAC in Canada under MSB registration number M23579425, offering specified services such as money transferring, dealing in virtual currencies, and payment service provider services. This Cookie Policy elucidates the nature and usage of cookies concerning your interaction with Xcard's website and the services or products provided through it (collectively, Services). Employing cookies allows us to differentiate each user of the Services (referred to as "User" or "You"). This differentiation enhances your browsing and service usage experience, contributing to the continuous improvement of our Services. For additional details about this policy, kindly reach out to us at
    </p>
    <p className='pt-10'>
    What is a cookie?
A cookie is a small file comprising information, letters, and numbers that we store on your browser, computer hard drive, mobile device, or tablet, subject to your agreement. These cookies carry information transferred to your computer's hard drive, mobile device, or tablet.

The term "cookie" in this context denotes the software or technology capable of collecting, transmitting, or recognizing information about your visits to and usage of the Services.

Types of Cookies We Use
Strictly Necessary Cookies: These cookies are essential for the proper functioning of our website. They include, for instance, cookies that facilitate your access to secure areas of our website. Your consent is not required for these cookies, as they are placed automatically. However, it's crucial for you to be aware of them. While you can block these cookies by adjusting your internet browser settings (as detailed below), please note that such action may impede the proper functioning of our services, such as creating an account.

Analytical or Performance Cookies: These cookies enable us to recognize and count the number of visitors, allowing us to observe how visitors navigate our website. This information aids us in enhancing the functionality of our website, ensuring users easily find what they are looking for. These cookies collect anonymous information, devoid of personal details, to provide insights into user interactions for statistical purposes.

Functionality Cookies: Utilized to identify you upon your return to our services, functionality cookies enable us to personalize content, address you by name, and remember your preferences, such as language or region choices.

Targeting/Marketing Cookies: Recording your visit details, page interactions, and followed links, these cookies help tailor our website content and advertising to align with your interests. This information may also be shared with third parties for similar purposes. Without these cookies, the online adverts you encounter may be less relevant to your interests.

Consent to Our Use of Cookies: Cookies are stored on your device after you have been duly notified and provided consent, except in the case of strictly necessary or functional cookies, where explicit consent is not required. By clicking "accept" in response to the cookie notification message that appears on your screen, you agree to the placement of cookies on your browser, computer hard drive, mobile device, tablet, or any other device used to access our website.

You have the option to set your browser to refuse some or all browser cookies or receive alerts when websites attempt to set or access cookies, as detailed in your browser settings (refer to more information below).

Important Note: Disabling or refusing cookies on our website may render certain parts inaccessible or disrupt their proper functionality. To delve deeper into cookies, including management and deletion procedures, please visit www.allaboutcookies.org.

Managing and Disabling Cookies: A User Guide
Disabling Cookies

You can easily disable and/or refuse cookies through one of the following methods:

1. Message Prompt: Reject the use of cookies when a relevant message appears during your browsing experience.

2. Browser Settings: Activate your browser's settings to refuse the setting of all or selected cookies.

However, it's important to note that blocking all cookies, including essential ones, might limit your access to certain areas or functionalities on our website.

Avoiding Cookies Altogether

If you prefer not to receive cookies, take the following steps:

1. Browser Settings Adjustment: Configure your browser settings to either automatically block cookies or prompt for permission each time a website attempts to save a cookie on your computer or mobile device.

2. Deletion of Downloaded Cookies: Delete cookies that have already been downloaded through your web browser. Visit https://www.aboutcookies.org/how-to-delete-cookies/ for detailed information.

Changing Cookie Settings
Most internet browsers provide options to change cookie settings, typically located in the 'options' or 'preferences' menu. Utilize the 'help' option in your browser or refer to specific pages on cookie settings for popular browsers such as Internet Explorer, Firefox, Chrome, or Safari.

Policy Updates
This Cookie Policy may undergo periodic updates, reflecting changes to our website, compliance with applicable laws, or alterations to the cookies used or their functionalities. In cases of significant changes, we will strive to notify you via email, but we recommend periodically reviewing this policy to stay informed about how our website utilizes cookies..
    </p>
</main></section>
           
           </div>
  )
}

export default Cookies
