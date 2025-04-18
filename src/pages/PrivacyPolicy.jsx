import React, { useState } from 'react'
import Xcard from "../assets/xcardLogo.png";
import { Link } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { MdContactPage, MdHomeFilled } from 'react-icons/md';
import { PiCardsThreeFill } from 'react-icons/pi';

const PrivacyPolicy = () => {
    
    const [click,setClick]=useState(false);

const mobileMenu=()=>{
    setClick(!click); 
    }
  return (
   
       <div className='' style={{overflowX:"hidden"}} >
       <section className='flex justify-center  w-full pb-5' style={{backgroundImage:"linear-gradient(to right,#6C48B6 10%,#A071CA 50%   )"}}>
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
       <h1 className='text-primary md:text-6xl text-5xl font-extrabold pb-10 lg:pb-16'>Privacy Policy</h1>
       <p>
           <h3 className='text-3xl font-extrabold pb-2'>1. Introduction </h3>
      <p className='pb-4'>At XPD, powered by MetaX Payments Ltd., our client’s (yours) privacy is central to our service philosophy. This Privacy Policy outlines how we collect, use, store, and protect your personal data when you use our platform, app, and services.
<br /> <br />
XPD is a financial services platform developed and operated by MetaX Payments Ltd., a licensed and registered Money Services Business (MSB) under Canadian law (FINTRAC Reg. No. M23579425). All data processing activities under XPD are handled by MetaX in its role as the data controller.
</p>
       </p>
       <p className='pt-10'>
           <h3 className='text-3xl font-extrabold pb-2'>2. Types of Personal Data We Collect</h3>
      <p className='pb-4'>We collect personal and non-personal information when you: <br />
•	Register for an account  <br />
•	Interact with the XPD app or website (e.g., filling out forms on the website or in-app)  <br />
•	Use our services (e.g., fiat/crypto transactions, onboarding)  <br />
•	Contact our support teams  <br />
<br /> 
Personal data includes but may not be limited to:  <br />
•	Full name, address, email, and phone number   <br />
•	Identity documents and photographs   <br />
•	Employment details or business ownership info   <br />
•	IP address and device/browser data   <br />
•	Account and transaction information  <br />

</p>
       </p>
       
       <p className='pt-10'>
        
       <h3 className='text-3xl font-extrabold pb-4'>3. Legal Basis for Processing </h3>
      <p className='pb-4'>
      We process your personal data on the basis of the following legal grounds: <br />
•	Contractual necessity: to create and manage your account, process transactions <br />
•	Legal compliance: to fulfill anti-money laundering (AML), counter-terrorist financing (CTF), and tax obligations <br />
•	Legitimate interests: service improvement, risk mitigation, IT security <br />
•	Consent: for optional services like marketing communications

      </p>
      <h3 className='text-3xl font-extrabold pb-2'>4. Retention of Data</h3>
      <p className='pb-4'>We will retain your data only for as long as needed to: <br />
•	Provide services to you <br />
•	Fulfill legal and regulatory obligations <br />
•	 Manage disputes or enforce agreements <br /> <br /> The data used for marketing is retained until you withdraw consent or unsubscribe.
</p>
      <h3 className='text-3xl font-extrabold pb-2'>5. Sharing Your Data  </h3>
      <p className='pb-4'>Your data may be shared with: <br />
•	Technology and cloud service providers <br />
•	KYC/AML screening partners <br />
•	 Payment processors (e.g., SWIFT, Visa, Mastercard) <br />
•	 Regulators, law enforcement, or government bodies when legally required <br />
•	 Professional advisers or business partners supporting platform services

<br /> <br />
      We never sell your personal data.
</p>
      
   <h3 className='text-3xl font-extrabold pb-2'>6. Cross-Border Transfers </h3>
      <p className='pb-4'>
      Where necessary, your data may be transferred outside Canada. Such transfers are made under: <br />
•	Standard Contractual Clauses (SCCs) <br />
•	Binding Corporate Rules (BCRs) <br />
•	Other legally recognized transfer mechanisms

   </p>
   
   <h3 className='text-3xl font-extrabold pb-2'>7. Automated Decisions </h3>
      <p className='pb-4'>Please note that some data may be processed automatically for: <br />
•	Fraud prevention and AML screening <br />
•	Marketing (with your consent)
</p>
      
      <h3 className='text-3xl font-extrabold pb-2'>8. Cookies</h3>
      <p className='pb-4'>XPD uses cookies to enhance your browsing experience and support security and analytics. See our Cookie Policy at (insert hyperlink to Cookies Policy here!) for full details.</p>
       </p>
   
   
       <p className='pt-10'>
           <h3 className='text-3xl font-extrabold pb-2'>9. Your Rights  </h3>
      <p className='pb-4'>You have rights under applicable data protection laws, including the right to: <br />
•	Access and receive a copy of your personal data <br />
•	Correct inaccurate or incomplete data <br />
•	Request deletion or restriction of your data <br />
•	Object to processing for legitimate interest or marketing <br />
•	Withdraw your consent at any time <br />
•	Lodge a complaint with a data protection authority <br />

      </p>
      <h3 className='text-3xl font-extrabold pb-2'>Contact Us </h3>
      <p className='pb-4'>If you have any concers or queries regarding your data’s privacy, please contact us at: <br />
📧 <a href="mailto:support@myxpd.app">(myxpdsupportemail)</a> <br />
📍 MetaX Payments Ltd., 5577 153A Street, Suite 207, Surrey, BC V3S 5K7, Canada

</p>
     </p>

   </main></section>
              
              </div>
  )
}

export default PrivacyPolicy;
