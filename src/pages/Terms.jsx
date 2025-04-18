import React, { useState } from 'react'
import Xcard from "../assets/xcardLogo.png";
import { Link } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { MdContactPage, MdHomeFilled } from 'react-icons/md';
import { PiCardsThreeFill } from 'react-icons/pi';

const Terms = () => {
    
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
       <h1 className='text-primary md:text-6xl text-5xl font-extrabold pb-10 lg:pb-16'>X Prepaid Virtual Card Terms and Conditions</h1>
       <p>
           <h3 className='text-3xl font-extrabold pb-2'>Important Notice: </h3>
      <p className='pb-4'>These Terms and Conditions (the “Agreement”) govern the use of the X Prepaid Card (“X Card” or “Card”). The X Card is a virtual, reloadable prepaid card issued under license from Mastercard International.
        <span className='font-bold tracking-wider'> By applying for, activating, or using the X Card, you “the Cardholder” agree to be bound by this Agreement.</span> Please read this Agreement carefully and retain a copy for your records. If you do not agree with any part of these Terms and Conditions, do not use the Card.</p>
      <p className='pb-4'>This Agreement is between you and <span  className='font-bold tracking-wider'>XPD (“X”, “Company”, “we”, “us” or “our”),</span> the issuer and program manager of the X Card. <span  className='font-bold tracking-wider underline underline-offset-1'>The Card is provided by X in partnership with/powered by Bo Payments</span> under a license from Mastercard International Incorporated. Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated. The X Card is <span className='font-bold tracking-wider'>not a credit card, charge card, or bank account </span>– it is a prepaid payment card that allows you to spend funds that you have loaded in the form of supported cryptocurrency assets, converted to a U.S. Dollar balance.</p>
      <p>
   By using our website or services, you consent to our use of cookies as described in this policy.
   </p>
       </p>
       <p className='pt-10'>
           <h3 className='text-3xl font-extrabold pb-2'>1. Definitions</h3>
      <p className='pb-4'>
In this Agreement, unless the context indicates otherwise, the following terms have the meanings set out below:
</p>
      <p className='pb-4'>•	“Account” – The electronic account maintained by X for the Cardholder, which records the balance of funds available to spend using the Card and the transactions made. This is a prepaid account associated with your X Card and is funded by your cryptocurrency top-ups (after conversion to fiat currency). <br />
•	<span className='font-bold'>“Card” or “X Card”</span> – The X Prepaid Mastercard® virtual card issued to you under this Agreement. The Card is a virtual-only card (no physical card is automatically issued) that can be used for transactions wherever Mastercard is accepted, subject to the terms of this Agreement. Card details (card number, expiry, and CVV) are provided to you through the X application/website. The Card remains at all times the property of the issuer and must be surrendered or access discontinued upon request or upon termination of this Agreement. <br />
•	<span className='font-bold'>“Cardholder” (also referred to as “you” or “your”)</span> – The individual person or legal business entity authorized to use the Card and who has agreed to this Agreement. For business entities, “Cardholder” includes the entity and any authorized person the entity designates to use or manage the Card. <br />
•<span className='font-bold'>	“Company” (also “we”, “us”, “our”)</span> – Metax Payments Ltd., the issuer and program manager of the X Card, and its successors, affiliates or assignees. X is a FINTRAC-registered Money Services Business in Canada and the provider of the Card program services. <br />
•	<span className='font-bold'>“Supported Cryptocurrencies”</span> – The specific cryptocurrency assets that X accepts for loading (top-up) onto the Card. As of the effective date, supported assets include USDT, BTC, ETH, and USDC (collectively, “Supported Crypto” or “Crypto Assets”). X may update the list of Supported Cryptocurrencies from time to time. <br />
•	<span className='font-bold'>“Available Balance”</span> – The U.S. Dollar amount of funds available in your Card Account that can be spent or withdrawn using the Card. The Available Balance is equal to the fiat equivalent of your deposited Crypto Assets, after conversion and deduction of any applicable fees. For clarity, you cannot spend more than your Available Balance. If any transaction or fee would exceed the Available Balance, it will typically be declined (or must be repaid by you if somehow it results in a negative balance). <br />
•	<span className='font-bold'>“Business Day”</span> – Monday through Friday, excluding Canadian federal or provincial holidays. Note that financial transactions or support requests processed after cut-off on a Business Day or on non-business days may be handled on the next Business Day. <br />
•	<span className='font-bold'>“Fees and Limits Schedule”</span> – A schedule provided by X (and incorporated by reference into this Agreement) that lists the applicable fees, charges, and transaction limits of the Card program. This may include fees for Card issuance, loading, transactions, currency conversion, ATM withdrawals (if applicable), monthly maintenance, inactivity, and any other fees, as well as limits on top-up amounts, transaction amounts, daily spend, etc. <span className='font-bold tracking-wider'>For current fees and limits, please refer to Schedule A attached to this Agreement or the X website/app.</span> <br />
•	<span className='font-bold'>“KYC”</span> – “Know-Your-Customer” processes and identity verification procedures that we are required to perform under anti-money laundering laws and regulations. This includes verifying your identity, address, and, where applicable, the identity of directors, officers, or beneficial owners of an entity, and may include ongoing monitoring of transactions. <br />
•	<span className='font-bold'>“AML”</span> – Anti-Money Laundering. This refers to laws, regulations, and company policies aimed at preventing money laundering, terrorist financing, fraud, and other illicit use of financial services. X’s AML Policy governs how we manage these risks and the obligations of Cardholders to comply. <br />
•	<span className='font-bold'>“Program” or “Card Program”</span> – The X Card program described by this Agreement, consisting of the issuance of the Card and the associated Account services that enable you to load the Card with cryptocurrency and use it as a prepaid payment card. <br />
•	<span className='font-bold'>“Mastercard” or “Network”</span> – Mastercard International and its affiliates, which operate the Mastercard card payment network. The X Card is issued under Mastercard’s network license and is subject to the operating rules of Mastercard (the “Network Rules”). <br />
•	<span className='font-bold '>“Merchant”</span> – A retailer, business, or any person or entity that accepts cards bearing the Mastercard logo for payment of goods or services. <br />
•	<span className='font-bold -tracking-wide'>“Personal Information”</span> – Information that can identify an individual, which you provide to us or we collect from you or about you in connection with your application for and use of the Card. This may include, but is not limited to, name, address, date of birth, contact details, government identification numbers, financial account information, and transactional information.
</p>
<p className='pt-4'><span className='font-extrabold tracking-wider'>Note:</span> Other capitalized terms in this Agreement may be defined in-line within the text.</p>
       </p>
       <p className='pt-10'>
           <h3 className='text-3xl font-extrabold pb-2'>2. Card Issuance and Activation</h3>
      
      <h3 className='text-2xl font-extrabold pb-2'>2.1 Issuing Entity: </h3>
      <p className='pb-4'><span className='font-bold underline underline-offset-2 tracking-wide'>The X Card powered by Bo Payments</span> is issued by X under license from Metax Payments Ltd a company incorporated under the laws of Canada and regulated as an MSB under FINTRAC.  Neither X nor MetaX are a bank. No interest is paid on any balance on the Card, and the balance is not protected by deposit insurance. By activating or using the Card, you acknowledge that the Card is a prepaid payment instrument and does not establish a bank account or credit line with us.</p>
      <h3 className='text-2xl font-extrabold pb-2'>2.2 Mastercard License: </h3>
      <p className='pb-4'>The Card is issued pursuant to a license from <span className='font-bold'>Mastercard International</span> and may be used to pay for goods and services wherever Mastercard is accepted worldwide, online or in-person, subject to the terms of this Agreement and the Network Rules. You agree to use the Card in accordance with this Agreement, the Network Rules, and all applicable laws. The Card may display the Mastercard and X brand logos; these remain intellectual property of the respective owners and the use of those logos by X is under license..</p>
      <h3 className='text-2xl font-extrabold pb-2'>2.3 Card Activation: </h3>
      <p className='pb-4'>For security reasons, your Card must be activated before it can be used. Upon approval of your application and successful completion of KYC (see Section 3 below), a virtual Card will be issued and made available in your X account dashboard or app. The Card details (card number, expiration date, and security code) will be provided to you through secure means (e.g., the X app or web portal). <span className='font-bold'> The act of funding the Card and attempting a transaction with it constitutes activation.</span> You may also be required to explicitly activate the Card via the X app or website interface. Instructions for activation will be provided upon issuance.</p>
      
      <h3 className='text-2xl font-extrabold pb-2'>2.4 Card Security Credentials: </h3>
      <p className='pb-4'>Because the X Card is virtual, no physical card or PIN is provided. For online or phone transactions, you will use the Card number, expiry, and CVV. For in-person transactions (where supported via a mobile wallet), you may add the Card to a supported digital wallet (e.g., Apple Pay, Google Pay) and use your device’s authentication (e.g., fingerprint or device PIN) to authorize payments. <span className='font-bold'>You are responsible for keeping your Card credentials (card number, CVV, expiration, and any account login or mobile wallet credentials) secure</span> . Do not share these with unauthorized persons (see Section 8 on Security Obligations for more details).
   </p>
   <h3 className='text-2xl font-extrabold pb-2'>2.5 Ownership of Card & Right to Cancel:  </h3>
      <p className='pb-4'>The Card remains the property of X and is provided to you for use under this Agreement. We may cancel or suspend your Card or Account at any time as allowed in this Agreement (see Section 14 on Termination). You must not alter or duplicate the Card. If we issue any physical representation or if you print the card information, you should sign it or label it as directed and keep it safe. We may issue replacement card details (e.g., new number) if we suspect compromise or for renewal upon expiration (Section 13).
   </p>
       </p>
       <p className='pt-10'>
        
       <h3 className='text-3xl font-extrabold pb-4'>3. Eligibility and Application Requirements  </h3>
       <h3 className='text-2xl font-extrabold pb-2'>3.1 Eligibility Criteria – Individuals:  </h3>
      <p className='pb-4'><span className='font-bold underline underline-offset-2 tracking-wide'>(a) </span> be at least 18 years old (or the age of majority in your province/territory or country of residence, if higher); <br />
      <span className='font-bold underline underline-offset-2 tracking-wide'>(b) </span> complete our registration process and agree to this Agreement; and <br />
      <span className='font-bold underline underline-offset-2 tracking-wide'>(c) </span> successfully pass our KYC identity verification process. You must provide true, current, and complete information about yourself as requested (including full legal name, residential address, date of birth, government-issued identification, and possibly proof of address or other documents). <br />
      </p>
      <h3 className='text-2xl font-extrabold pb-2'>3.2 Eligibility – Businesses: </h3>
      <p className='pb-4'>Business entities (corporations, partnerships, etc.) may apply for a X Card subject to our approval. The business must be duly organized and in good standing in its jurisdiction of formation, and the person completing the application must be an authorized representative of the business with authority to bind the business to this Agreement. We may require information on the business (such as business name, address, formation documents, nature of business) and on directors, officers, and beneficial owners, as part of KYC. The business Cardholder must ensure that only authorized persons have access to the Card and that all use complies with this Agreement. <br /> <span className='font-bold'> Note:</span> Some provisions of this Agreement (written in the form applicable to individuals) apply equally to business Cardholders, mutatis mutandis. Businesses may have additional requirements as notified by X during onboarding.</p>
      <h3 className='text-2xl font-extrabold pb-2'>3.3 KYC and Identity Verification:  </h3>
      <p className='pb-4'>Issuance of the Card and ongoing access to the Card services are <span className='font-bold'>subject to satisfactory completion of KYC and AML checks</span>. This means you must provide information and documents we request to verify your identity (or the identity of your business and its owners) and to comply with legal requirements. We may use third-party verification services or databases to assist in this process. By applying for the Card, you consent to our obtaining and verifying personal and business information (including credit bureau and watchlist checks, to the extent permitted). If we cannot verify your identity or information to our satisfaction, we may reject your application or impose limits on the Card until the issue is resolved.</p>
      
      <h3 className='text-2xl font-extrabold pb-2'>3.4 Additional Information:  </h3>
      <p className='pb-4'>You agree to promptly provide any additional information and supporting documentation that we may request from time to time, both at onboarding and on an ongoing basis, <span className='font-bold'>for compliance purposes (e.g., source of funds verification, enhanced due diligence). </span> We reserve the right to suspend or restrict your Card if any requested information is not provided or if we suspect the information provided is false, inaccurate, or incomplete. All information you provide must be truthful, accurate, and up-to-date. If your personal or business details change (such as address, email, phone number, name, or beneficial ownership), you must notify us as soon as possible so we can update our records. Providing false information or using stolen/false identification is strictly prohibited and could result in termination of your Card and further legal action.
   </p>
   <h3 className='text-2xl font-extrabold pb-2'>3.5 Approved Application & Account Setup:  </h3>
      <p className='pb-4'>Upon approval of your application and completion of KYC, we will notify you via the email address or through the app that your Card Account has been created and is ready for use. At that point, a virtual Card number will be issued to you and an initial Card Account balance of $0.00 will be established. You must fund the Card (see Section 4) before it can be used for transactions. By activating or using the Card after such notification, you confirm your acceptance of these Terms and Conditions (if not already confirmed during application).
   </p>
   
   <h3 className='text-3xl font-extrabold pb-2'>3.6 Declined or Restricted Applications:  </h3>
      <p className='pb-4'>We reserve the right, in our sole discretion, to decline any Card application or to limit the Card services offered to any applicant, for any <span className='font-extrabold tracking-widest'>lawful reason</span>. This may occur, for example, if an applicant does not satisfy our KYC/AML criteria, if providing the service to the applicant could violate applicable law (such as sanctions regulations), or if the applicant resides in a jurisdiction we do not support. X may also limit the number of Cards or accounts per person or entity. If you are declined, we are not obligated to provide a reason (unless required by law), but you may contact Customer Service to inquire if there are steps that can be taken to rectify any issues (e.g., correcting a typo in your application or providing additional documents).</p>
      
      <h3 className='text-3xl font-extrabold pb-2'>3.7 U.S. Persons and Other Jurisdictions:  </h3>
      <p className='pb-4'>The X Card program is operated from Canada and is intended to be available to users globally, except in certain restricted or sanctioned jurisdictions (which X may determine from time to time). It is your responsibility to ensure that your use of the Card is legal in your country or region. By applying, you represent that you are not located in, a resident of, or ordinarily resident in any country or region that is subject to comprehensive economic sanctions (e.g., United Nations, Canadian, U.S. or EU sanctions), and that you are not on any prohibited or watchlist (including the U.S. OFAC Specially Designated Nationals list, Canada’s OSFI sanctions list, or similar). If it is determined that you have made a false representation about this, or if you later become subject to such restrictions, we may immediately freeze or terminate your Card. Additionally, if you are a U.S. citizen/resident or otherwise subject to U.S. tax law, you may be required to certify your tax status (e.g., via IRS Form W-9 or W-8) and we may report certain information to tax authorities under FATCA/CRS regulations, where applicable.</p>
       </p>
   
   
       <p className='pt-10'>
           <h3 className='text-3xl font-extrabold pb-2'>4. Funding the Card – Cryptocurrency Top-Ups and Conversion  </h3>
           <h3 className='text-2xl font-extrabold pb-2'>4.1 Loading Funds (Top-Up): </h3>
      <p className='pb-4'>The X Card is funded by converting Supported Cryptocurrencies that you transfer to X into an equivalent USD balance on your Card. Once your Card Account is active, you will be provided with instructions (via the X app or platform) on how to load funds. This typically involves transferring crypto from your own wallet or exchange account to a deposit address or wallet controlled by X (or our partner) for the specific purpose of loading your Card. You may choose among the Supported Cryptocurrencies for each load. For example, you might send BTC to your Card’s BTC loading address or USDT to a provided address. Only send supported assets – any other assets sent to the provided address may be permanently lost and cannot be recovered.
      </p>
      <h3 className='text-2xl font-extrabold pb-2'>4.2 Minimum and Maximum Load Amounts:  </h3>
      <p className='pb-4'>Each load (top-up) must meet any minimum amount as specified in the Fees and Limits Schedule. There may also be maximum limits per load and per day/week for loading, as well as an aggregate Card balance limit. These limits are in place for security, regulatory compliance, and operational reasons. <span className='font-bold'> We reserve the right to refuse or delay a load transaction</span> if it would exceed applicable limits or if required for compliance checks. Refer to Schedule A <span className='font-bold'>(Fees and Limits)</span> for current load limits.</p>
      <h3 className='text-2xl font-extrabold pb-2'>4.3 Crypto Conversion to Fiat:  </h3>
      <p className='pb-4'>When you load the Card with Crypto Assets, you authorize X and its service providers to convert the cryptocurrency to U.S. Dollars (USD) for use in your Card Account. The conversion will typically occur promptly after the crypto transaction receives the required number of blockchain confirmations and is deemed final by us. The exchange rate will be determined by X (or its liquidity provider) at the time of conversion execution, using a fair market rate reasonably available in the crypto-fiat markets. A conversion fee or spread may be applied to the exchange rate, as detailed in the Fees and Limits Schedule. For example, if you top up with 1 ETH, and the prevailing market rate is 1 ETH = $3,000 USD, a conversion fee of 1% might result in a credited amount of $2,970 USD to your Card (this example is illustrative only). X will display or make available to you the exchange rate and fees applied, either before or after the transaction, as required by applicable regulations.</p>
      
      <h3 className='text-2xl font-extrabold pb-2'>4.4 Loading Timeframes:   </h3>
      <p className='pb-4'>You acknowledge that cryptocurrency transactions are not instantaneous. The time to complete a load can vary depending on blockchain network congestion, required confirmations, and other factors. We will credit your Card Account once the crypto transaction is irreversibly confirmed on the relevant blockchain and after any necessary internal reviews. In most cases, this might be within minutes for assets like USDT (on a fast network) or could take 30-60 minutes (or longer) for BTC or if networks are slow. If a significant delay occurs or the funds do not appear in your Card Account within a reasonable time, you should contact Customer Service with your transaction details.
   </p>
   <h3 className='text-2xl font-extrabold pb-2'>4.5 Reversals of Crypto Loads:  </h3>
      <p className='pb-4'>
<span className='font-bold'>Cryptocurrency deposits are generally irreversible</span> by nature. Once you send crypto to the provided address and it is confirmed, we cannot cancel the transaction. If you believe you have sent an incorrect amount or wrong asset, contact us immediately – <span className='font-bold'>while we do not guarantee recovery</span>, we may assist if possible (e.g., if an unsupported ERC-20 token was sent to an Ethereum address and funds are retrievable). In the event that a load transaction fails to meet our requirements (for example, if it’s from a sanctioned address or the wrong cryptocurrency), we reserve the right to reject the load. If we reject a load, we may attempt to return the funds to the source (minus any applicable fees or losses incurred), but we are not liable for funds lost due to user error or sending unsupported assets.

   </p>
   
   <h3 className='text-2xl font-extrabold pb-2'>4.6 Adjustment for Crypto Price Fluctuations:   </h3>
      <p className='pb-4'>The conversion from crypto to USD occurs at the time of processing your load. After conversion, your Card balance is denominated in USD and remains stable in USD terms (crypto price fluctuations do not affect the already converted balance). However, if there is an issue with a conversion (such as a sudden market movement causing the converted amount to be insufficient after promised rate, or an exchange failure), X may contact you to resolve any discrepancies. In rare cases, X might cancel the load (returning the crypto) or credit a different amount if the market moved dramatically before confirmation. We will not typically do so without your consent, except if required to correct an error.</p>
      
      <h3 className='text-2xl font-extrabold pb-2'>4.7 Reloading:   </h3>
      <p className='pb-4'>
You may reload (add more funds to) your Card at any time, subject to any frequency or aggregate limits. Each reload is processed as described above. We reserve the right to pause or stop accepting loads in a particular cryptocurrency (for example, if a network is unstable or a regulatory situation changes) – if so, we will notify via our platform which assets are currently accepted.
</p>
<h3 className='text-2xl font-extrabold pb-2'>4.8 No Interest on Balance:  </h3>
      <p className='pb-4'> Funds in your Card Account do not earn interest or any other return. If you wish to earn a return on your crypto assets, do not load more funds onto the Card than you intend to use for spending.
</p>
<h3 className='text-2xl font-extrabold pb-2'>4.9 Funding from Your X Crypto Wallet (if applicable):   </h3>
      <p className='pb-4'>
If X provides an integrated crypto wallet service (separate from the Card Account), you may have the option to transfer balances from your X crypto wallet to your Card Account. Such internal transfers may be instantaneous and without blockchain fees. If you use an internal transfer, the process may still involve converting the crypto to USD at the then-current rate. Internal transfers are subject to the same conversion fees and limits unless stated otherwise.

</p>
       </p>


       <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>5. Using the Card (Card Transactions)  </h3>
        <h3 className='text-2xl font-extrabold pb-2'>5.1 Permitted Uses:  </h3>
       <p className='pb-4'>Once funded, you may use the X Card to purchase goods and services from Merchants worldwide that accept Mastercard, whether online, via mobile/app, or (if added to a digital wallet on your smartphone) in-person via contactless payment. You may also use the Card to withdraw cash at ATMs that accept Mastercard, provided you have added the Card to a digital wallet that supports cardless ATM access or if we later issue you a physical companion card (if offered). However, note that the X Card is primarily a virtual card; cash access might be limited or incur additional requirements. All Card use is subject to the Available Balance in your Account and the transaction limits of the program. You agree that you will not attempt to exceed the balance or limits; any attempt to do so may result in the transaction being declined. In the event a transaction is processed for an amount greater than your Available Balance (creating a negative balance), you agree that the excess amount is a debt you owe to us, payable immediately. We may automatically offset any subsequent loads or funds received against the negative balance, or otherwise seek reimbursement from you for the shortfall.
       </p>
       <h3 className='text-2xl font-extrabold pb-2'>5.2 Personal and Lawful Use:  </h3>
       <p className='pb-4'>BThe Card is provided solely for your personal or approved business use and may not be transferred to any other person. Only the Cardholder (or in the case of a business, its authorized user) is permitted to use the Card. You must not lend, share, sell, or allow any other individual or entity to use your Card or Card details. You also must not use the Card for any unlawful purpose or in connection with any illegal activity. You agree not to use your Card for any illegal transactions, including illegal gambling, fraud, money laundering, or the purchase of illegal goods or services. The Card may also not be used for any transactions prohibited by the Card Network or by X’s policies (for example, we may prohibit use of the Card for certain high-risk business categories or in certain countries). We reserve the right to decline transactions that we believe may violate this Agreement or law (see Section 10 on Compliance Monitoring). You are responsible for ensuring that your use of the Card complies with all laws applicable to you.</p>
       <h3 className='text-2xl font-extrabold pb-2'>5.3 Transaction Authorization:   </h3>
       <p className='pb-4'>To authorize a Card transaction (purchase or withdrawal), you will typically need to provide your Card details (for online purchases) or present your card via a mobile wallet (for in-person). You might also need to provide additional authentication (such as a one-time password, or 3-D Secure verification for online purchases, if we support it). By providing the Card (or details) to a Merchant and indicating your approval (such as clicking “Pay” on a website, or tapping your phone at a reader), you are authorizing that transaction. Once authorized, transactions generally cannot be stopped or canceled. You do not have the right to stop payment on any purchase or withdraw made with the Card, except as provided in this Agreement or required by law. Keep records of your transactions (receipts, confirmations) in case of discrepancies.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>5.4 Available Balance; Declines:   </h3>
       <p className='pb-4'>You must ensure you have a sufficient Available Balance before authorizing any transaction. If you attempt a transaction for more than your Available Balance (and the Merchant does not support split payments across multiple cards), the transaction will be declined. We are not liable for any fees or charges imposed by the Merchant due to a declined payment. You should monitor your balance via the X app or site. If a transaction is incorrectly processed that exceeds your balance and results in a negative balance, the amount of the negative balance remains immediately due from you (see 5.1 above).
    </p>
    <h3 className='text-2xl font-extrabold pb-2'>5.5 Foreign Currency Transactions:  </h3>
       <p className='pb-4'>The Card’s currency is U.S. Dollars. If you use the Card for a transaction in a currency other than USD, the amount will be converted to USD using the exchange rate determined by Mastercard on the date the transaction is processed by the network (this may be different from the date of the transaction). Mastercard may charge a currency conversion fee which is included in the rate. In addition, X may charge a foreign transaction fee as per the Fees Schedule, on the USD amount of any transaction made in a non-USD currency. You will be able to see the final amount charged in USD on your transaction history. Note: If the Supported Cryptocurrencies include a stablecoin like USDC or USDT, loading via those essentially already pegs your balance to USD. However, foreign currency spend will still incur conversion from USD to that currency by the network at time of spend.
    </p>
    
    <h3 className='text-2xl font-extrabold pb-2'>5.6 ATM Withdrawals and Cash Access:   </h3>
       <p className='pb-4'>As a virtual card, cash access is not straightforward. However, if you have linked your Card to a mobile wallet that supports contactless ATM withdrawals (and if the ATM itself supports cardless withdrawals via NFC or QR code), you may attempt to withdraw cash. Alternatively, if we issue you a physical card (for example, upon separate request or for business users), you can use it at ATMs with your PIN. ATM withdrawals may incur fees (see Fees Schedule for any ATM withdrawal fee and any ATM operator fees). There may also be daily limits on cash withdrawals. When you withdraw cash, the ATM may display an amount in local currency and your account will be debited the USD equivalent plus any fees. Remember that if you withdraw in a non-USD country, currency conversion fees apply as per 5.5.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>5.7 Merchant Holds and Pre-authorizations:  </h3>
       <p className='pb-4'>Certain Merchants (e.g., hotels, car rentals, gas stations, cruise lines) may place a temporary hold on a higher amount than the actual anticipated charge, to ensure sufficient funds. This could reduce your Available Balance until the hold is released and the final actual transaction amount is posted. For example, a hotel might authorize $500 when you check-in even if your room might only cost $300; the extra $200 will be held and not available to you until the final charge is settled and the remainder released. We do not control these hold practices. You should be aware of your balance when such holds occur. We are not responsible for damages or fees arising from card authorization holds. Additionally, some Merchants (like certain in-flight or offline terminals, toll booths, etc.) may not be able to get real-time authorization– the Card may not work in those cases, since it is prepaid and requires online authorization for every transaction. We accept no liability if a Merchant refuses to accept the Card or if the Card is not usable in certain scenarios.</p>

       <h3 className='text-2xl font-extrabold pb-2'>5.8 Prohibited Transactions:  </h3>
       <p className='pb-4'>Without limiting 5.2 (lawful use), the following uses of the Card are expressly prohibited: <br /><br /> (a) using the Card for any illegal gambling, gaming, or wagering transaction (whether or not legal in the jurisdiction of the Cardholder, if it’s illegal in the jurisdiction of the Merchant or the card network rules);  <br />
(b) using the Card in any manner that would violate sanctions or export controls (e.g., purchasing goods from a prohibited country); (c) funding or engaging in any money remittance to known prohibited persons;  <br />
(d) using the Card for the purchase of cryptocurrency or other virtual assets (note: this is a card funded by crypto, but using it to purchase additional crypto on exchanges or brokers might be restricted or treated as a cash advance by some platforms – consult with X if unsure);  <br />
(e) any transaction that would violate the Network Rules (for example, purchase of certain firearms or substances might be disallowed by the network or law);  <br />
(f) any fraudulent or unauthorized transaction. We reserve the right to decline or block any transaction that we believe falls into the above categories or otherwise violates this Agreement or law.
</p>


       <h3 className='text-2xl font-extrabold pb-2'>5.9 Monitoring and Limits:  </h3>
       <p className='pb-4'>For security and compliance, we or our processing partners monitor Card activity. Unusually large or suspicious transactions might be flagged for review. We may contact you to confirm certain transactions. We also enforce the limits as per Schedule A (e.g. daily spending limits). If you need a limit increased for a legitimate purpose, you may contact Customer Service; any increase is at our discretion and may require additional KYC.</p>

       <h3 className='text-2xl font-extrabold pb-2'>5.10 Recurring Payments:  </h3>
       <p className='pb-4'>If you use the Card for recurring charges (e.g., a monthly subscription), you are responsible for ensuring sufficient balance for each charge. If a recurring payment is due and you lack funds, the payment will be declined and the merchant may cancel your service or charge fees. X is not liable for any consequences of insufficient funds for a recurring payment. If you want to cancel a recurring charge, you should notify the merchant; simply removing the Card or not funding it may not immediately stop the merchant from attempting the charge.</p>

       <h3 className='text-2xl font-extrabold pb-2'>5.11 Merchant Refunds & Credit:  </h3>
       <p className='pb-4'>If you are entitled to a refund for any reason for goods or services obtained with the Card, the refund will be credited to your Card Account in USD (in the amount and currency that the Merchant processes the refund through Mastercard). For example, if you bought an item for $50 and returned it, the merchant may issue a $50 credit to your Card. We do not convert refunds to crypto – the refunded amount will simply increase your USD balance. It may take several days for a refund to post to your Card Account. If your Card is closed or expired at the time of a refund, please contact us to arrange return of funds. Note: Refunds for purchases in foreign currency will be credited in USD based on the exchange rate at the time of refund processing, which may differ from the rate at the time of purchase. We are not responsible for any fluctuations in exchange rate that result in a different USD amount than the original purchase.</p>

       <h3 className='text-2xl font-extrabold pb-2'>5.12 Disputing a Transaction:   </h3>
       <p className='pb-4'>If you believe a transaction on your Card Account is incorrect, unauthorized, or fraudulent, you must contact us as soon as possible (see Section 9 regarding unauthorized transactions). We may advise you to also contact the merchant if it’s a billing error. We will investigate and, if applicable, can initiate a dispute (chargeback) with the merchant through the Mastercard network. You must provide any documentation we reasonably require for the investigation. Note that chargeback rights on prepaid debit transactions can be limited, but we will use good faith efforts to recover funds if the transaction was indeed unauthorized or in error. Time is of the essence – if you delay in reporting, our ability to dispute the charge may be compromised.</p>
        </p>


        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>6. Fees and Charges </h3>
        <h3 className='text-2xl font-extrabold pb-2'>6.1 Fee Schedule:   </h3>
       <p className='pb-4'>The X Card is subject to certain fees and charges, which are listed in Schedule A: Fees and Limits attached to this Agreement (or provided during application). By using the Card, you agree to pay all applicable fees. Key potential fees may include, but are not limited to: a card issuance fee or annual fee (if any), cryptocurrency conversion fee (a percentage of each load, as described in Section 4.3), foreign transaction fee (for transactions not in USD), ATM withdrawal fees, Card replacement fee (if a physical card is issued and lost/stolen), and inactivity or maintenance fees (if the card is not used for a certain period, if applicable). X strives to keep fees transparent. There are currently no monthly fees and no fee for standard virtual Card issuance (for example), but this is subject to change under the terms of Section 15 (Amendments).
       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>6.2 No Hidden Fees:   </h3>
       <p className='pb-4'>
We will not charge any fees that are not disclosed in the Fee Schedule or this Agreement. However, note that third parties (such as ATM operators or merchants) may charge their own fees which are beyond our control. For instance, an ATM may charge a separate fee for using a card at their machine; that fee will be deducted from your balance in addition to our fees.
.</p>
       <h3 className='text-2xl font-extrabold pb-2'>6.3 Deduction of Fees:  </h3>
       <p className='pb-4'>Fees will generally be automatically deducted from your Card Account balance at the time they are incurred. For example, if you withdraw cash from an ATM and the fee is $3, your withdrawal amount plus the $3 fee will be debited. If a monthly inactivity fee applies, it would be deducted on the schedule stated (e.g., first of each month after X months of no use). You must ensure that your Card has a sufficient balance to cover any applicable fees; if a fee is due and your balance is insufficient, we may still levy the fee and cause your balance to go negative, in which case Section 5.1 regarding negative balances applies (you would owe us the amount of the fee). We may at our discretion waive or refund fees on a case-by-case basis (for example, waiving an inactivity fee if you reactivate the card), but any such waiver does not constitute a waiver of future fees.</p>
       <h3 className='text-2xl font-extrabold pb-2'>6.4 Changes to Fees:   </h3>
       <p className='pb-4'>X may change the fees and charges from time to time, in accordance with Section 15 (Amendments). Typically, we will provide advance notice (for example, 30 days) of fee changes by email or via the app, unless a change is immediately required by law or network rules. If you continue to use the Card after a fee change, you are deemed to accept the new fees. If you do not agree to the new fees, you must stop using and close your Card before the changes take effect (you may request a payout of any remaining balance minus any applicable fees).</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>6.5 Sample Fee Summary (Illustrative Only):   </h3>
       <p className='pb-4'>To illustrate, here is an example of the fee structure (refer to Schedule A for actual current fees): <br />
       <br />
       <span>•	Card Issuance: $0 for virtual card issuance; Physical card (if requested) $10.00 (one-time). <br />
•	Loading Fee: 1.5% of the crypto-to-USD conversion (deducted from the converted amount). <br />
•	Domestic Purchase Transaction: $0 (no fee for USD transactions). <br />
•	Foreign Currency Transaction: 3% of the transaction amount (after conversion to USD). <br />
•	ATM Withdrawal: $2.50 per withdrawal (domestic); $4.00 (international) – plus any ATM owner fees. <br />
•	Inactivity Fee: $5.00 per month (if 12 months with no transactions) – only if balance remains on card. <br />
•	Card Closure / Balance Refund Fee: $5.00 (deducted from remaining balance upon account closure by user, unless prohibited by law).
</span> <br /> <br />
<span className='italic'>(The above is illustrative; please check the current Fee Schedule for actual fees as they may be lower or differ.)</span>
    </p>
    <h3 className='text-2xl font-extrabold pb-2'>6.6 No Overlimit or Interest:  </h3>
       <p className='pb-4'>Because this is not a credit card, there are no interest charges or finance charges. We also do not charge over-limit fees because transactions that would exceed your balance are not permitted (except as noted, if one slips through you must repay it, but no formal "overdraft" service is provided).
    </p>
    
    <h3 className='text-2xl font-extrabold pb-2'>6.7 Communicating Fees:   </h3>
       <p className='pb-4'>You can always find the latest fees in the X app or website and in Schedule A. If you do not have a copy of Schedule A, contact Customer Service to request one. We may also display applicable fees at the point of a specific service (for example, when initiating a crypto load or ATM withdrawal, the app might display the fee that will apply).</p>
        </p>

        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>7. Card Limits </h3>
        <h3 className='text-2xl font-extrabold pb-2'>7.1 Transaction and Balance Limits:   </h3>
       <p className='pb-4'>For your security and to comply with regulatory requirements, we impose limits on the amount you can load, spend, or withdraw using the Card. These limits are detailed in Schedule A (Fees and Limits). Examples of such limits include: <br /> <br /> (a) Maximum Card Balance (e.g., $20,000 at any time);  <br />
(b) Daily Spending Limit (e.g., $10,000 per day);  <br />
(c) Daily ATM Withdrawal Limit (e.g., $500 per day);  <br />
(d) Daily/Monthly Load Limits (e.g., not more than $5,000 per day or $20,000 per month in loads);  <br />
(e) Number of transactions per day (e.g., max 20 transactions per day). The actual limits for the X Card program can be found in Schedule A and in your account profile.

       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>7.2 Compliance Tiers:   </h3>
       <p className='pb-4'> We may have different limit tiers depending on your verification status or Cardholder category. For example, newly onboarded users might have a lower initial limit which can be increased after establishing a history or providing additional KYC information. Business accounts might have higher limits subject to review. We will inform you of any such tiered structure in the onboarding materials or upon request.
.</p>
       <h3 className='text-2xl font-extrabold pb-2'>7.3 Exceeding Limits:  </h3>
       <p className='pb-4'>Our system will generally prevent transactions that would violate the set limits (declining transactions or loads that exceed limits). However, in the unlikely event a transaction succeeds that causes a limit to be exceeded, this does not waive the limit; we may contact you to correct the situation (e.g., if due to a system error you were able to load more than allowed, we might freeze the excess funds and return them to you). Repeated attempts to circumvent limits (e.g., multiple accounts or structuring transactions) may result in account suspension.</p>
       <h3 className='text-2xl font-extrabold pb-2'>7.4 Changes to Limits:   </h3>
       <p className='pb-4'>We reserve the right to modify the transaction and balance limits at any time, for all Cardholders or on an individual basis. Reasons for changes might include security needs, changes in law, or unusual activity. We will notify you of material changes to standard limits through updates to Schedule A or in-app notification. Temporary increases or decreases might not always be communicated (e.g., if we suspect fraud, we might temporarily lower your limits for protection). If you require a one-time or permanent limit increase (for example, you plan a large purchase), you may contact us to request it; we may require additional due diligence and our decision will be at our sole discretion.</p>
      
        </p>

        
        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>8. Cardholder Responsibilities and Security Obligations </h3>
        <h3 className='text-2xl font-extrabold pb-2'>8.1 Safeguarding Your Card and Account:   </h3>
       <p className='pb-4'>You, as the Cardholder, are responsible for maintaining the security and confidentiality of your Card information and any credentials used to access your Card Account. This includes your X account login, password, two-factor authentication codes (if enabled), the Card number, CVV, expiration date, and any mobile wallet or device on which the Card is stored. Treat your Card information like cash – anyone who obtains it could potentially make transactions on your Card. Do not share your Card or Account credentials with anyone whom you do not intend to authorize as a user. X will never contact you to ask for your full card number or CVV or password; if someone does, it may be a scam.
       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>8.2 Personal Use Only:   </h3>
       <p className='pb-4'> The Card is personal and non-transferable. You must not allow any other individual or entity to use your Card, even a family member or friend. You may not transfer the Card or Account to another person. If you knowingly or negligently permit another person to access your Card (for example, by giving them your card details or phone), you will be responsible for any transactions they make and such use will not be considered unauthorized. We will consider that you have authorized any transaction or use that you facilitated through sharing of credentials.
.</p>
       <h3 className='text-2xl font-extrabold pb-2'>8.3 PIN and Passwords:   </h3>
       <p className='pb-4'>If you set up a PIN (Personal Identification Number) for ATM or certain transactions (this might apply if a PIN is enabled for digital wallet use, or for any physical card later issued), you must memorize it or store it securely. Do not write your PIN on anything easily accessible to others. Similarly, any password for your X online account should be strong and kept secret. Use unique passwords and update them periodically. If you suspect your password or PIN is compromised, change it immediately and contact us.</p>
       <h3 className='text-2xl font-extrabold pb-2'>8.4 Device Security:   </h3>
       <p className='pb-4'>Because the Card is virtual and likely used via the X mobile app or added to a smartphone’s wallet, ensure your devices are secure. Use phone passcodes, biometric locks, and keep your device’s operating system up to date. Install antivirus or anti-malware software if applicable. Avoid accessing your Card or X account from shared or public computers where possible; if you must, ensure you log out and that the computer did not save your credentials.</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>8.5 Monitoring Account Activity:   </h3>
       <p className='pb-4'>Regularly review your Card Account transactions and balance through the X app or website. We provide real-time or near-real-time transaction history. If you see any transaction, you do not recognize or any error, notify us immediately (see Section 9). Prompt detection and reporting of unauthorized use is crucial for protecting your funds and ensuring you are not held liable beyond what is permitted.</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>8.6 Lost/Stolen Card Information:    </h3>
       <p className='pb-4'>Since the Card is virtual, you cannot “lose” it in the traditional sense, but you could lose the device on which it is stored or your card details could be compromised. If you suspect that your Card details have been stolen, compromised, or your X account is accessed by someone else, or if your phone/device is lost or stolen, you must notify us immediately and request a block on the Card (you can also freeze your Card through the app if that feature is available). Time is of the essence. Until you report the issue, you may be responsible for transactions made on your Card (see Section 9 on liability for unauthorized use). Once notified, we can block the Card to prevent further use and issue you new Card details if needed.</p>


       
       <h3 className='text-2xl font-extrabold pb-2'>8.7 Notices and Communication:   </h3>
       <p className='pb-4'>Keep your contact information (especially email and phone number) updated with us so we can reach you in case of suspected fraud or important security alerts. We may contact you via email, in-app message, or phone if we notice unusual activity or to deliver security codes. It’s your responsibility to ensure you can receive such communications.
       </p>


       
       <h3 className='text-2xl font-extrabold pb-2'>8.8 Compliance with Laws:  </h3>
       <p className='pb-4'>You must comply with all laws applicable to your use of the Card. This includes not only financial regulations but also, for example, any tax obligations arising from your use of the Card (e.g., if you realize gains from crypto that you convert to fiat, you are responsible for handling any tax reporting/obligations). It also includes refraining from using the Card in any way that would cause X to be in violation of any law.</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>8.9 Liability for Breach:   </h3>
       <p className='pb-4'>If you breach any of the security obligations or use restrictions in this Agreement (sections 5, 8, etc.), you may be liable for any resulting losses or damages suffered by you, us, or third parties. You may also be subject to Card suspension or termination. In particular, if you intentionally or through gross negligence compromise the security of your Card or use it for unlawful purposes, you will bear full responsibility for any associated costs or liability.</p>
      
        </p>



        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>9. Unauthorized Transactions and Error Resolution </h3>
        <h3 className='text-2xl font-extrabold pb-2'>9.1 Zero Liability Protection:   </h3>
       <p className='pb-4'>The X Card is protected by Mastercard’s “Zero Liability” policy for unauthorized transactions, provided you report the unauthorized transaction promptly and have safeguarded your Card credentials as required. This means that if someone fraudulently uses your Card without your permission, you may not be held responsible for the charges, as long as you met your obligations (for example, you didn’t give them your card details, you weren’t grossly negligent in handling your credentials, and you notify us without undue delay once you discover the issue). If you report a lost or stolen Card or unauthorized charge within a reasonable time (e.g., within 24-48 hours of discovery), and we determine you were not at fault, we will credit your Account for the unauthorized amount and you will not be liable.
       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>9.2 Your Liability for Unauthorized Use: </h3>
       <p className='pb-4'>  If a transaction was not authorized by you, it will generally be our liability, not yours, provided that you have complied with your duties in this Agreement (Section 8) to protect your Card and inform us. However, if we find that you failed to safeguard your Card/PIN (e.g., kept a default simple PIN, or wrote it on your phone), or you delayed unreasonably in reporting a lost card or unauthorized activity, or you were involved in fraudulent or illegal use, then this protection may not apply and you could be held responsible for losses. For instance, if you notice an unauthorized charge and you wait two weeks to report it, and during that time further unauthorized charges occur, you might be liable for those further charges due to the delay. Similarly, if someone in your household uses your Card with your implicit permission, it’s not unauthorized. We will follow applicable laws and network rules to determine liability in such cases, which often limit consumer liability for unauthorized transactions as long as prompt notice is given and no negligence is found. For business Cardholders, different rules may apply (business use might not have the same consumer zero-liability protections, but we still encourage prompt reporting and will work to limit losses).
.</p>
       <h3 className='text-2xl font-extrabold pb-2'>9.3 Reporting Procedure:  </h3>
       <p className='pb-4'>If you believe your Card or account has been compromised or notice unauthorized charges, contact X Customer Support immediately. Our contact information is provided in Section 18 (Customer Service). Ideally, use a method like phone or the fastest available channel. You may also be able to temporarily block the Card via the app. Be prepared to provide details such as when you noticed the loss or theft, the last transactions you recognize, and any circumstances around the loss. After receiving notice from you, we will take immediate steps to prevent further use of your Card (such as disabling it and blocking transactions).</p>
       <h3 className='text-2xl font-extrabold pb-2'>9.4 Investigation of Unauthorized Transactions:    </h3>
       <p className='pb-4'>We may require you to complete a claim form or affidavit verifying the unauthorized transactions. We will investigate your claim in good faith. During the investigation, we might credit your account for the disputed amount provisionally (especially if it takes time to investigate). We may also request additional information or cooperate with law enforcement. The investigation could take up to 30 to 90 days depending on the nature of the transaction and whether it was domestic or international, etc., consistent with applicable electronic funds transfer regulations if any apply. We will inform you of the results of our investigation. If we determine the transactions were indeed unauthorized and you are not liable, we will ensure your Card Account is reimbursed for the full amount, including any fees or interest lost. If we determine the transaction was authorized by you or you benefited from it, we will notify you and re-debit any provisional credit from your Card balance (you will then bear the loss).</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>9.5 Errors or Transaction Discrepancies:   </h3>
       <p className='pb-4'> In addition to outright unauthorized fraud, if you believe there has been an error (e.g., a transaction is posted for the wrong amount, or a load didn’t credit properly, or a fee was charged incorrectly), contact us as soon as possible. We will investigate errors in a similar way. For U.S. customers (if any) or others where electronic fund transfer laws apply, you may have specific rights outlined in those laws; while X is a Canadian MSB and not a bank, we aim to provide a level of service comparable to regulated financial institutions in addressing errors. Provide us with the details of the error, why you believe it’s an error, and the date/amount in question. We will correct any confirmed error promptly (for example, if a $100 transaction was mistakenly charged twice, we would reverse the duplicate).</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>9.6 Merchant Disputes vs. Unauthorized:   </h3>
       <p className='pb-4'>Keep in mind the difference between an “unauthorized” charge (which means you did not initiate it at all) and a dispute with a merchant (for example, you paid for something you didn’t receive, or the merchant charged you wrong amount, but you did make the purchase). Unauthorized charges are handled as described above. Disputes with merchants over quality or delivery of goods are not “unauthorized transactions” – however, you may still have chargeback rights. If you have such a dispute, you should first try to resolve it with the merchant. If unsuccessful, contact us to see if a chargeback is possible. There are specific timeframes (usually within 60-120 days of the transaction) for chargebacks, and supporting evidence is needed. We do not guarantee a successful recovery unless the charge truly meets chargeback criteria under network rules. We are not responsible for the quality or non-receipt of goods/services purchased with the Card; our responsibility is just to ensure the payment is correctly processed.</p>


       
       <h3 className='text-2xl font-extrabold pb-2'>9.7 Final Resolution:   </h3>
       <p className='pb-4'>If you are dissatisfied with how a claim of unauthorized use or error is resolved, you can escalate the matter within X (ask for a supervisory review). As a Canada-based service, if a dispute remains, you may also contact consumer protection agencies or pursue legal remedies as outlined in Section 16 (Governing Law & Disputes). We aim, however, to resolve any such issues amicably and fairly as a reflection of our commitment to customers and regulatory expectations.
       </p>


       
      
        </p>




        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>10. Compliance with KYC/AML and Law </h3>
        <h3 className='text-2xl font-extrabold pb-2'>10.1 Compliance Program:    </h3>
       <p className='pb-4'>
X is committed to full compliance with all applicable anti-money laundering (AML), counter terrorist financing (CTF), and sanctions laws and regulations. These include, but are not limited to, the Proceeds of Crime (Money Laundering) and Terrorist Financing Act (PCMLTFA) of Canada and its regulations, guidance from FINTRAC, and analogous laws in other jurisdictions as applicable. By using the Card, you agree to comply with all such laws and assist X in its compliance efforts.

       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>10.2 KYC and Due Diligence:  </h3>
       <p className='pb-4'>  We have already outlined in Section 3 the identity verification requirements. In addition, we may at any time conduct further due diligence on you or your transactions. This can include requesting additional identification, proof of source of funds, purpose of transactions, or other information. You agree to cooperate with any such requests promptly. Failure to do so may result in transaction delays, freezes, or termination of your Card.
.</p>
       <h3 className='text-2xl font-extrabold pb-2'>10.3 Transaction Monitoring:  </h3>
       <p className='pb-4'>All Card transactions (loads, purchases, withdrawals) are monitored and screened. We may block or hold any transaction that raises a red flag for potential money laundering, fraud, or sanctions issues. This can include large or unusual patterns, involvement of certain high-risk jurisdictions or entities, or any activity that appears inconsistent with your profile. We may also be required by law to report certain transactions or suspicious activities to FINTRAC or other authorities without notifying you (by law, we often cannot tell you if a report is made). These reports could include large cash withdrawals, or transactions involving certain countries, etc.</p>
       <h3 className='text-2xl font-extrabold pb-2'>10.4 Sanctions and Prohibited Parties:   </h3>
       <p className='pb-4'>You represent that neither you nor any beneficial owner of (or authorized user of) the Card are subject to sanctions or listed on any sanctions’ lists (such as UN sanctions, Canada’s OSFI sanctions list, US OFAC lists, EU sanctions, etc.). If at any time you become a sanctioned person or the country you reside in becomes subject to broad sanctions, we may freeze or terminate your Card immediately. You must not use the Card to make or facilitate payments to or from any sanctioned person, entity, or country. We reserve the right to screen all transactions against sanctions lists and block any that are not permitted.</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>10.5 High-Risk Activities:   </h3>
       <p className='pb-4'> X may designate certain industries or activities as high-risk (even if legal) and apply enhanced monitoring or restrictions. For example, use of the Card in connection with online cryptocurrency exchanges, gambling websites (even if legal), money service businesses, etc., might be subject to closer scrutiny or lower limits. We may ask you questions or for evidence (e.g., source of crypto funds) if we see transactions involving such activities to ensure legitimacy.</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>10.6 No Circumvention:  </h3>
       <p className='pb-4'>  You agree not to take any action to circumvent the KYC/AML controls of X. This includes not structuring transactions to avoid reporting thresholds (e.g., splitting a large load into many smaller ones deliberately to evade detection), and not opening multiple accounts under different names to bypass limits. If we suspect any such behavior, it could result in immediate account suspension and reporting to authorities.
</p>


       
       <h3 className='text-2xl font-extrabold pb-2'>10.7 Law Enforcement and Legal Process:  </h3>
       <p className='pb-4'>We may freeze, hold, or surrender funds in your Card Account in response to a valid subpoena, court order, or other legal process, or if otherwise required by law or governmental request. We will, when permissible, notify you of such actions, but sometimes legal constraints may prevent or delay this. We are not liable to you for complying with law enforcement directives or legal orders that we reasonably believe to be valid.
       </p>

           
       <h3 className='text-2xl font-extrabold pb-2'>10.8 AML Training and Controls:  </h3>
       <p className='pb-4'>X personnel are trained in AML compliance. We maintain records as required (including your identification records and transaction history) and will retain these for a period mandated by law. By using the Card, you acknowledge that we will be collecting and storing this information for compliance purposes.
       </p>
           
       <h3 className='text-2xl font-extrabold pb-2'>10.9 Termination for Compliance Reasons:   </h3>
       <p className='pb-4'>If at any time we, in our sole discretion, believe that your Card use (or you yourself) violates AML/CTF or fraud prevention rules, or presents an unacceptable level of legal risk to X, we may suspend or terminate the Card immediately. In such case, depending on the circumstance, you may or may not be given notice (if law permits, we might simply say your account is closed due to compliance reasons). Subject to legal constraints, we will return any lawful remaining balance to you via a method we deem appropriate (e.g., returning crypto, sending a wire) after satisfying any regulatory obligations (for example, we might require a different withdrawal method if crypto withdrawal is not possible or allowed at that time).
       </p>
           
       <h3 className='text-2xl font-extrabold pb-2'>10.10 Right to Audit: </h3>
       <p className='pb-4'>We reserve the right (but not obligation) to audit or review your Card Account for compliance with this Agreement. If we request information during such a review (like proof of a particular purchase or source of a large load), you agree to comply.
       </p>


       
      
        </p>



        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>11. Data Protection and Privacy</h3>
        <h3 className='text-2xl font-extrabold pb-2'>11.1 Privacy Policy:  </h3>
       <p className='pb-4'>The collection, use, and disclosure of your Personal Information is governed by our Privacy Policy (available on our website), which is incorporated by reference into this Agreement. By agreeing to these Terms and Conditions and using the Card, you also acknowledge the Privacy Policy. In summary, we collect information that you provide (during signup, KYC, etc.) and information about your usage of the Card (transactions, etc.), and we use this information to provide the service, comply with legal obligations, prevent fraud, and improve our services.

       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>11.2 Sharing of Information:  </h3>
       <p className='pb-4'> We may share your Personal Information with third parties in certain circumstances, such as: <br /><br />
       <span>
       (a) with service providers who help us run the Card program (for example, the card processing platform, KYC verification services, cloud hosting providers);  <br />
(b) with Mastercard and its members as needed to process transactions and for compliance (for instance, in cases of fraud investigations or chargebacks);  <br />
(c) with our corporate affiliates (if any) for the purposes of the Card service or related offerings;  <br />
(d) with regulators or governmental authorities if required by law (such as FINTRAC reporting or responding to lawful requests); and  <br />
(e) with credit bureaus or partners for verification or risk assessment. When we share data with service providers, we will ensure they are bound to protect your information and use it only for the intended purpose.

       </span>
</p>
       <h3 className='text-2xl font-extrabold pb-2'>11.3 International Data Transfer:  </h3>
       <p className='pb-4'>Given the global nature of cryptocurrency and card networks, your information may be transferred to or accessed by entities outside of your home jurisdiction, including outside of Canada. For example, if you are outside Canada, your application data may still be processed on servers in Canada or the United States; or if you make a transaction abroad, data may be shared with that country’s networks. We will take steps to ensure adequate protection for cross-border data transfers as required by applicable privacy laws.</p>
       <h3 className='text-2xl font-extrabold pb-2'>11.4 Retention:   </h3>
       <p className='pb-4'>We will retain your data for as long as necessary to fulfill the purposes for which it was collected, and as required by law. Typically, even after you close the Card, we may retain data for a number of years to comply with recordkeeping rules (e.g., KYC records must be kept for at least 5 years in many cases).</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>11.5 Your Rights:  </h3>
       <p className='pb-4'>Depending on your jurisdiction, you may have certain rights regarding your personal data, such as the right to access or correct data, or object to certain processing. Our Privacy Policy provides details on how you can exercise those rights and our contact information for privacy queries.</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>11.6 Communication:  </h3>
       <p className='pb-4'> By entering this Agreement, you consent to receive communications from X electronically (through email, app, or SMS) related to your Card and account, including privacy notices, alerts, and verification messages. If you withdraw consent to receive electronic communications, we reserve the right to close your Card (since the service relies on electronic communication).
</p>


       
       <h3 className='text-2xl font-extrabold pb-2'>11.7 Confidentiality:   </h3>
       <p className='pb-4'>We will treat your personal financial information as confidential and will not disclose your Card balance or transaction details to unauthorized parties. However, you acknowledge that each transaction involves sharing of necessary details with the merchant and payment network (for example, when you use the Card, the merchant’s bank will see your card number and that an authorization for $X occurred). This is inherent to card transactions. X itself will not disclose your transactional information to third parties except as outlined above or in the Privacy Policy.
       </p>

      
        </p>



        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>12. Intellectual Property and Card Use Restrictions</h3>
        <h3 className='text-2xl font-extrabold pb-2'>12.1 X Intellectual Property:   </h3>
       <p className='pb-4'>All content and materials provided to you by X, including the X name, logo, website content, app content, and any software or documentation, are protected by intellectual property laws. X (or its licensors) retains all right, title, and interest in these materials. We grant you a limited, revocable, non-exclusive, non-transferable license to use our app and website solely for purposes of managing your X Card and related services. You may not reverse engineer, copy, or resell any of X’s software or intellectual property.

       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>12.2 Mastercard and Partner IP:  </h3>
       <p className='pb-4'>Names, logos, and other trademarks of Mastercard, or any other partners (such as the bank that powers the card if any), remain the property of their respective owners. You are granted no rights or licenses to use these marks except as needed for using your Card in the normal way (for example, you can of course have a Mastercard logo on your digital card). You agree not to misuse or infringe any trademarks related to this Card program.
</p>
       <h3 className='text-2xl font-extrabold pb-2'>12.3 Card Not for Resale or Commercial Distribution:  </h3>
       <p className='pb-4'>The Card (including any card credentials) is provided exclusively to the approved Cardholder. You are not permitted to sell, rent, or distribute the Card or Card credentials to any other party. Offering the Card as part of any service you provide to third parties (for instance, giving out cards to your own customers) is not allowed unless explicitly agreed in a separate partnership with X.</p>
       <h3 className='text-2xl font-extrabold pb-2'>12.4 Software and App:    </h3>
       <p className='pb-4'>If X provides a mobile or web application for Card management, your use of that app is subject to any end-user license agreement presented when you download or access it. In absence of a separate license, the above limited license applies. The app may be subject to updates. It is your responsibility to update to the latest version for security and functionality. The app is provided “as is” (see Section 13 on Disclaimers), and we are not responsible for third-party app store terms or issues.</p>

       
        </p>
        

        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>13. Card Expiration; Renewal and Replacement</h3>
        <h3 className='text-2xl font-extrabold pb-2'>13.1 Expiration Date:   </h3>
       <p className='pb-4'>The X virtual Card will have an expiration date (month/year) associated with it, as displayed in your account. This is typically required by the payment network. You will not be able to use the Card after its expiration date. However, your Account and any remaining balance will not be lost due to expiration – it is simply that a new card number (with a new expiration) will need to be issued to continue using the funds. We will typically handle renewal as described below.

       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>13.2 Automatic Renewal: </h3>
       <p className='pb-4'>We may automatically issue you a new Card (new number and expiration) before or upon the expiration of your current Card, provided your Account is in good standing. For a virtual Card, this means we will generate new card credentials and display them to you. We will notify you of the new card issuance via email or app notification. The fees and terms for the new Card will be the same as for the original (unless we have notified you of changes per Section 15). If you would prefer not to have an automatically renewed card, you must contact us at least 30 days before your current Card’s expiration and tell us that (in which case, we would likely close your Card at expiration if you do not want renewal).
</p>
       <h3 className='text-2xl font-extrabold pb-2'>13.3 Declining Renewal:  </h3>
       <p className='pb-4'>We reserve the right not to renew your Card at our discretion (for example, if the program is ending or your account is not in good standing or we cannot reach you). If we decide not to renew, we will notify you and may provide options to recover any remaining balance (like transferring it out or sending you a refund by other means).</p>
       <h3 className='text-2xl font-extrabold pb-2'>13.4 Card Replacement (Lost Compromised):   </h3>
       <p className='pb-4'>Because the Card is virtual, “replacement” typically means issuing a new card number if the old one is compromised or if you suspect unauthorized use. You can request a replacement card number at any time if you believe your current one is at risk (we might first try to address the risk like unauthorized charges, but if needed, new numbers can be given). If X detects fraud on your Card, we might proactively cancel the card number and issue a new one to prevent further abuse – we will notify you if we do this. Replacement of card credentials is usually free for virtual cards; if we had issued a physical card, a replacement physical card might incur a fee (see Fees Schedule).</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>13.5 Card Closure by Cardholder:   </h3>
       <p className='pb-4'>If at any time you wish to stop using the Card, you can contact us to close your Card Account. We may require this in writing or via a confirmed authenticated request through the app. Upon closure, you will no longer be able to use the Card. Any remaining balance will be handled per Section 14.4 (Return of Funds). Note that simply uninstalling the app or not using the Card does not automatically close the account; fees (like inactivity fees) may still apply until a formal closure is done if such fees exist.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>13.6 Dormancy and Inactivity:  </h3>
       <p className='pb-4'> If your Card has had no transactions (loads or spends) for a prolonged period (e.g., 12 months) and has a balance, we may deem it “dormant”. Dormant accounts may incur inactivity fees as per Schedule A (if applicable), and we may attempt to contact you to confirm you still want to keep it. If we cannot reach you and the balance is small, we may eventually close the Card and handle the balance as per unclaimed property laws (e.g., escheat to the government after a certain number of years, if required by local law) or as specified by regulation. To avoid this, keep your contact info updated and periodically use or reload the Card.</p>
       

       
        </p>




        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>14. Suspension, Termination, and Cancellation</h3>
        <h3 className='text-2xl font-extrabold pb-2'>14.1 By the Cardholder (You):  </h3>
       <p className='pb-4'> You may cancel your X Card and terminate this Agreement at any time by giving us notice (see Section 18 for how to contact us). We may provide a form or specific process for cancellation to ensure it’s secure. After cancellation, you should destroy or delete any record of the Card details (and remove it from any saved merchants or wallets). You will remain responsible for any pending transactions you made before cancellation. We will arrange to return any remaining balance to you (see 14.4 below for details on funds return).

       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>14.2 By the Company (Us) – Without Cause: </h3>
       <p className='pb-4'> We reserve the right to suspend or terminate your Card and this Agreement for any reason with reasonable notice. For example, we might decide to discontinue the X Card program or a particular card product. In such case, we will typically provide you with at least 30 days’ notice via email or other contact, and instructions on how to retrieve your remaining balance. During the notice period, we may allow you to continue using the Card or we might partially restrict it (e.g., allow spending of existing balance but not new loads). After the effective termination date, your Card will be deactivated.
</p>
       <h3 className='text-2xl font-extrabold pb-2'>14.3 By the Company – With Cause (Immediate Termination):   </h3>
       <p className='pb-4'>We may immediately suspend or terminate your Card, without prior notice, if any of the following occurs:
 (a) You breach any material term of this Agreement or we have reason to believe you have violated law in connection with your Card use; <br />
 (b) You engage in fraud or we suspect your account is involved in fraudulent, unauthorized, or unlawful activities;  <br />
(c) You fail to pay any amounts owed (for example, a negative balance or fees) or otherwise misuse the Card;  <br />
(d) We receive a serious claim or notice of dispute regarding ownership of the account (for instance, someone claims your identity was stolen – we might freeze pending investigation);  <br />
(e) Continued use of the Card becomes impractical or illegal due to changes in laws, regulatory orders, or Mastercard’s rules;  <br />
(f) Any information you provided to us was materially false, incomplete, or misleading; <br />
 (g) You are the subject of a sanctions or law enforcement action as noted in Section 10;  <br />
(h) You become insolvent, bankrupt, or (if a business) cease operations; or  <br />
(i) The Card program partnership between X and any issuing bank or processor is terminated (in that case, we might have to terminate or migrate your Card). In many “for cause” cases, we will attempt to notify you of the termination after it’s done, unless legal reasons prevent us.
</p>
       <h3 className='text-2xl font-extrabold pb-2'>14.4 Effect of Termination – Access to Funds:  </h3>
       <p className='pb-4'> Upon termination or cancellation of the Card (whether by you or us), you will no longer be able to use the Card for transactions. If a balance remains, we will either ask you to provide details for returning the funds, or we will attempt to send the funds back via the original load method if feasible. For example, if you loaded via crypto, we might offer to send the remaining USD balance back to a crypto address after converting to the crypto of your choice (subject to any conversion fees), or we might send a fiat wire or other payout. We may require additional KYC at that time to ensure we are returning funds to the rightful person and not violating any laws (especially if significant time has passed since account opening). We will not refuse a refund of remaining balance unless prohibited (for instance, if the funds are suspected illicit and blocked by authorities). However, if termination was for cause due to illegal activity, we may be required to hold funds or transfer them to a government authority pending investigation. In all other cases, we aim to return your remaining balance promptly (generally within 5-10 business days of receiving required information from you for the return method). Note: Any fees applicable to the return (e.g., a wire transfer fee or crypto network fee) may be deducted from the balance, unless prohibited by law. Also, if the balance is below any minimum refund amount (for example, if you have just $1 left, we might offer to donate it or require you to contact us if you really want that refunded).</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>14.5 Multiple Accounts and Cross-Termination:    </h3>
       <p className='pb-4'>If you have more than one account or card with X and we terminate one for cause, we reserve the right to terminate or suspend your other accounts or cards if we believe the cause affects them as well (e.g., evidence of fraud might cause all accounts under your control to be reviewed).</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>14.6 Survival:  </h3>
       <p className='pb-4'> Termination of this Agreement does not affect any rights or obligations accrued prior to termination. Provisions of this Agreement which by their nature should survive (such as obligations to pay amounts owed, dispute resolution, limitation of liability, indemnification, and our data rights) will remain in effect after termination.</p>
       
       
       
       
        </p>




        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>15. Amendments and Changes to Terms</h3>
        <h3 className='text-2xl font-extrabold pb-2'>15.1 Right to Amend:</h3>
       <p className='pb-4'>  X may amend, modify, or update the terms of this Agreement (including fees, limits, and features of the Card) at any time. Typically, changes will be made to reflect adjustments in our services, changes in law, changes in network rules, or other relevant reasons. We will not change this Agreement arbitrarily without a valid reason, and we strive to ensure any changes are reasonable and fair.

       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>15.2 Notice of Changes: </h3>
       <p className='pb-4'> In the event of any changes to this Agreement, we will notify you in advance, at least 30 days prior to the effective date of the change, except where a longer period is required by law or a shorter period is allowed for specific circumstances (for example, if we must make an immediate change for security reasons or to comply with law, we may do so and notify you as soon as practicable). Notice of changes will be given via email to the address on file and/or via an in-app or website notification. The notice will outline the changes in plain language and the effective date.
</p>
       <h3 className='text-2xl font-extrabold pb-2'>15.3 Acceptance of Changes:  </h3>
       <p className='pb-4'>If you do not agree with the proposed changes, you have the right to terminate this Agreement and close your Card (Section 14.1) before the effective date of the changes, and you may withdraw your remaining balance under the terms of this Agreement. If you do not terminate the Card and continue to use or keep the Card active after the effective date, you will be deemed to have accepted the changes.
</p>
       <h3 className='text-2xl font-extrabold pb-2'>15.4 Regulatory Changes:   </h3>
       <p className='pb-4'> Sometimes, changes in law or regulation may dictate certain terms without needing consent (for example, if a new law requires us to include a certain disclosure or restrict some usage, we might implement that immediately). We will still try to inform you, but the change may be effective regardless of notice in order to comply with law or instructions from regulators.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>15.5 Minor Changes:   </h3>
       <p className='pb-4'>Not all changes will merit a formal notice period. Minor changes that do not reduce your rights or increase your fees (such as clarifications, typographical corrections, or enhancements that do not negatively affect you) may be made and documented by updating the Agreement on our website. We encourage you to periodically review the Terms and Conditions on our site for any minor updates. The “Last Updated” date at the end of this document will reflect when the last changes were made.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>15.6 Evidence of Agreement:   </h3>
       <p className='pb-4'> The latest version of this Agreement supersedes all prior versions. We will retain old versions and you have the right to request a copy of earlier terms if needed for reference. In the event of a dispute, the terms in effect at the time of the disputed event will apply (for example, if a fee was charged under an old schedule, that schedule is what we’ll refer to, even if terms have changed since).</p>

       
       
       
       
       
        </p>




        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>16. Disclaimers of Warranties</h3>
        <h3 className='text-2xl font-extrabold pb-2'>16.1 Service Provided “As Is”: </h3>
       <p className='pb-4'>  The X Card and related services are provided on an “as is” and “as available” basis, without any representations or warranties of any kind, either express, implied or statutory, except as expressly set forth in this Agreement. To the maximum extent permitted by law, we disclaim any and all implied warranties about the Card and services, including (but not limited to) implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. We do not guarantee that access to the Card services will be uninterrupted, error-free, or secure.

       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>16.2 No Warranty on Uninterrupted Use:  </h3>
       <p className='pb-4'> While we strive for 24/7 availability, we do not warrant that the Card will always be accessible or usable, or that every transaction will go through. There may be periods of downtime for maintenance, technical issues, or outages beyond our control (such as internet disruptions or blockchain network outages). You acknowledge that such downtime or inability to use the Card may occur. We will make reasonable efforts to notify users of planned maintenance outages.
</p>
       <h3 className='text-2xl font-extrabold pb-2'>16.3 No Warranty on Acceptance:  </h3>
       <p className='pb-4'>We make no guarantee that any particular Merchant will accept the Card as payment. Most merchants that take Mastercard will accept it, but there could be exceptions (some might block prepaid cards, for instance). We are not responsible if a Merchant refuses your Card or if an ATM does not dispense cash. Additionally, we are not responsible for the quality, safety, or legality of any goods or services that you purchase with the Card; that is solely between you and the merchant.
</p>
       <h3 className='text-2xl font-extrabold pb-2'>16.4 No Financial Advice or Guarantee of Value:   </h3>
       <p className='pb-4'> X’s provision of crypto-to-fiat conversion is not investment advice. We do not guarantee any outcome with respect to the value of cryptocurrency you use to load the Card. The exchange rates are determined by the market. You acknowledge that crypto values can be volatile – once converted to USD, your Card balance is stable in USD, but we are not liable for any perceived loss of potential gain if crypto prices rise after you convert. Conversely, we’re not liable if crypto drops in value before you convert (that risk is on you until conversion). We provide no warranty or assurance that using the Card will result in any financial benefit beyond the convenience of spending your crypto in fiat form.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>16.5 Third-Party Services:    </h3>
       <p className='pb-4'>Some services related to the Card may be provided by third parties – for example, identity verification by a third-party provider, or the mobile wallet by Apple/Google. We do not warrant any services provided by third parties. Your use of third-party products (like a smartphone or another app to store the card) is at your own risk and subject to those third parties’ terms.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>16.6 Jurisdictional Issues:    </h3>
       <p className='pb-4'>Some jurisdictions do not allow the exclusion of certain warranties. If such laws apply to you, some of the exclusions above may not apply to the extent prohibited. In such case, any implied warranties are limited in duration to the minimum period allowed by law and to the extent permitted.</p>

       
       
       
       
       
        </p>




        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>17. Limitation of Liability</h3>
        <h3 className='text-2xl font-extrabold pb-2'>17.1 Limited Liability:  </h3>
       <p className='pb-4'>  To the fullest extent permitted by law, X (including its directors, officers, employees, affiliates, agents, and partners) shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or loss of data, whether incurred directly or indirectly, resulting from: <br />  <br /> (a) your use of or inability to use the Card or related services;  <br /> (b) any unauthorized access to or alteration of your transmissions or data (except to the extent caused by our failure to implement reasonable security measures); <br />  (c) any termination, suspension, or expiration of your Card account; (d) the cost of procurement of substitute goods or services; or  <br /> (e) any other matter relating to the Card service.

       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>17.2 Direct Damages Cap:   </h3>
       <p className='pb-4'> To the fullest extent permitted by law, our total aggregate liability for any and all claims arising out of or relating to this Agreement or the Card shall not exceed the amount of fees you paid to us in the 12 months immediately preceding the event giving rise to the claim, or $100 CAD, whichever is greater. (This does not limit any obligation to return your remaining Card balance; we are referring to damages or losses beyond the funds you loaded.)
</p>
       <h3 className='text-2xl font-extrabold pb-2'>17.3 Exceptions:  </h3>
       <p className='pb-4'>The limitations in this section do not purport to limit liability for gross negligence, willful misconduct, or fraud by X, or for any liability that cannot be excluded or limited by law (for example, certain consumer protection laws may provide for compensation in certain scenarios which cannot be waived). Additionally, these limitations do not affect your rights in case of unauthorized transactions as described in Section 9 (those will be handled per network rules and applicable law, which often favor the consumer).
</p>
       <h3 className='text-2xl font-extrabold pb-2'>17.4 Not Liable for Circumstances Beyond Control:    </h3>
       <p className='pb-4'> We are not responsible for any losses or failure to perform our obligations under this Agreement if such failure is caused by events beyond our reasonable control (“Force Majeure” events). This includes, without limitation: acts of God, natural disasters, power failures, war or terrorism, civil unrest, strikes or labor disputes, epidemics, network or communications failures, blockchain outages or attacks, payment network outages, or actions of government or law enforcement. If such an event occurs that affects our ability to provide the Card services, we will make reasonable efforts to inform you and resume services as soon as feasible.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>17.5 No Double Recovery:     </h3>
       <p className='pb-4'>If by any chance you are entitled to a refund or compensation under both this Agreement and a law or network rule, you won’t “double dip.” For example, if an unauthorized transaction happens and we compensate you as per Section 9 or Mastercard rules, you cannot also claim that same amount as damages under a breach of contract theory. Our payout of the funds resolves the issue to the extent of that transaction.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>17.6 Your Responsibility for Taxes and Legal Compliance:   </h3>
       <p className='pb-4'>We have no liability for your failure to calculate or pay any taxes that may arise from your use of the Card or conversion of crypto to fiat. Any tax consequences are solely your responsibility. We also aren’t liable for any penalties or fines you incur for violating any law in your usage of the Card (e.g., if you illegally use it in a jurisdiction where crypto cards are prohibited).</p>

       <h3 className='text-2xl font-extrabold pb-2'>17.7 Release:    </h3>
       <p className='pb-4'>If you have a dispute with one or more merchants or other third parties (such as a seller of a product you paid for with Card, or a wallet provider), you release X and its affiliates from any and all claims, demands, and damages of every kind arising out of or in any way connected with such disputes. We may assist you in contacting Mastercard or the merchant for dispute resolution, but ultimately that dispute is between you and the merchant..</p>
       
       
       
       
       
        </p>

        
        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>18. Customer Service and Contact Information</h3>
        <h3 className='text-2xl font-extrabold pb-2'>18.1 Customer Support Contact:  </h3>
       <p className='pb-4'> If you need any assistance with your Card or have questions, you can contact X Customer Service using available communication methods mentioned on the website.

       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>18.2 Lost/Stolen Reporting Hotline:    </h3>
       <p className='pb-4'> 
In case of a lost or compromised Card (unauthorized transaction, etc.), if outside of our normal support hours, you may also email us using available communication methods mentioned on the website. This number may connect you to an automated system or an on-call representative for card security issues specifically.

</p>
       <h3 className='text-2xl font-extrabold pb-2'>18.3 Response Times:   </h3>
       <p className='pb-4'>
We aim to respond to support inquiries via email within 1-2 business days. Urgent matters like fraud reports will be prioritized. If you do not hear back in a reasonable time, please try an alternate contact method. During peak times, responses might be delayed, but all inquiries will be addressed as soon as possible.

</p>
       <h3 className='text-2xl font-extrabold pb-2'>18.4 Languages:    </h3>
       <p className='pb-4'> 
This Agreement and our primary support are provided in English. Support in other languages may be available on a best-effort basis (e.g., French for Canadian users, etc.), but we cannot guarantee multi-language support at all times. Official communications and terms will be in English. If we provide a translation of this Agreement, the English version will prevail in any conflict of interpretation.
</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>18.5 Complaint Escalation:     </h3>
       <p className='pb-4'>If you have a complaint or dispute with our service, please contact support first to resolve it. Most issues can be resolved by our support team. If you feel your issue is not being addressed properly, you can request that your complaint be escalated to a supervisor or compliance officer. We will acknowledge formal complaints within 5 business days and provide a substantive response or resolution within 30 days where possible. Because X is an MSB and not a bank, the dispute resolution is handled internally and through legal means if needed (see Section 19). There is no specific banking ombudsman for this service, but we take customer satisfaction seriously and will work with you in good faith to resolve any concerns.</p>
       
       
       
       
        </p>

        
        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>19. Governing Law and Dispute Resolution</h3>
        <h3 className='text-2xl font-extrabold pb-2'>19.1 Governing Law:   </h3>
       <p className='pb-4'>  This Agreement, and any dispute, claim or controversy arising out of or relating to this Agreement or your Card use, shall be governed by and construed in accordance with the laws of the Province of XXXXX, Canada, and the federal laws of Canada applicable therein, without giving effect to any conflict of law principles that would result in the application of the laws of a different jurisdiction. If you reside outside of Canada, you are still agreeing that the laws of Ontario, Canada govern this relationship (to the extent enforceable in your jurisdiction).
       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>19.2 Jurisdiction:    </h3>
       <p className='pb-4'> Subject to the arbitration provision below (if applicable), you agree to submit to the non-exclusive jurisdiction of the courts of the Province of XXXX, Canada, for the resolution of any disputes. "Non-exclusive jurisdiction" means that if you are entitled by mandatory law to bring claims in your local courts (e.g., if a consumer protection law in your country gives you that right), this clause does not override that; but otherwise, Ontario is an appropriate venue. If you are a business user, you agree that all disputes shall be brought exclusively in the courts of Ontario (and you waive any objection to that venue).
</p>
       <h3 className='text-2xl font-extrabold pb-2'>19.3 Arbitration (if chosen by Company):   </h3>
       <p className='pb-4'>At our sole discretion, we may require any dispute, claim, or controversy arising out of or relating to this Agreement or the Card (including its breach, termination, or validity) to be resolved by binding arbitration administered by an established arbitration institution (such as the ADR Institute of Canada) under its rules. If we elect arbitration, we will notify you. Arbitration would be conducted by a single arbitrator, in English, and the seat of arbitration shall be Toronto, Ontario. Each party would bear its own costs, and the arbitrator may award reasonable attorneys’ fees to the prevailing party at their discretion. Important: By agreeing to arbitration, you would be waiving your right to go to court and have a trial in front of a judge or jury, and your rights to appeal are limited. However, you are not obligated to arbitration unless we invoke this clause. If we do not elect arbitration, you still have the right to go to court.
</p>
       <h3 className='text-2xl font-extrabold pb-2'>19.4 Class Action Waiver:     </h3>
       <p className='pb-4'>To the extent permitted by law, you and X each agree that any disputes will be resolved on an individual basis only, and not on a class, collective, or representative basis. This means neither you nor X may be a plaintiff or class member in any purported class, collective, or representative proceeding. An arbitrator or court may not consolidate your claims with others or otherwise preside over any form of a representative or class proceeding. If this class action waiver is deemed unenforceable or invalid, then any agreements to arbitrate will be null and void.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>19.5 Injunctive Relief: </h3>
       <p className='pb-4'> Notwithstanding any other provision in this Section, we reserve the right to seek injunctive or other equitable relief in any court of competent jurisdiction to prevent actual or threatened infringement, misappropriation, or violation of our data security, intellectual property, or other rights. For example, if you were to violate Section 12 (IP) or hack our systems, we could go to court immediately to stop you.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>19.6 Time Limits:    </h3>
       <p className='pb-4'>To the extent permitted by law, any claim or cause of action arising out of your use of the Card or this Agreement must be filed within two (2) years after such claim or cause of action arose, or it shall be forever barred. (This does not apply to collection of any debt you owe, for which we may have longer under law.)</p>

       <h3 className='text-2xl font-extrabold pb-2'>19.7 Consumer Protection:   </h3>
       <p className='pb-4'>If you are using the Card as an individual consumer (not for business) and mandatory laws in your jurisdiction of residence provide for different rights or requirements than set out above (for example, giving you the right to sue in your home courts or a longer limitation period), then those laws will prevail to the extent they apply and cannot be varied by contract. We do not seek to deprive consumer users of the protections of their home laws where mandated.</p>
       
       
       
       
       
        </p>



        <p className='pt-10'>
        
        <h3 className='text-3xl font-extrabold pb-4'>20. Miscellaneous Provisions</h3>
        <h3 className='text-2xl font-extrabold pb-2'>20.1 Entire Agreement:   </h3>
       <p className='pb-4'>  This Terms and Conditions document (together with any schedules, Fee and Limit Schedule, the Privacy Policy, and any other documents expressly incorporated by reference) constitutes the entire agreement between you and X relating to the Card. It supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between you and us regarding the Card. In case of any conflict between this Agreement and any other document or FAQ, the terms of this Agreement shall control unless explicitly stated otherwise in a document that it overrides these terms.
       </p>
       
       <h3 className='text-2xl font-extrabold pb-2'>20.2 Severability:    </h3>
       <p className='pb-4'>If any provision of this Agreement is found by a court or arbitration body of competent jurisdiction to be invalid, illegal, or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions of this Agreement shall remain in full force and effect. For example, if a law limits a certain disclaimer or time limit, that part will be adjusted to comply with the law while keeping the parties’ intentions as close as possible.
</p>
       <h3 className='text-2xl font-extrabold pb-2'>20.3 No Waiver:   </h3>
       <p className='pb-4'>Our failure or delay in exercising any right, power, or privilege under this Agreement shall not operate as a waiver thereof. Any waiver of any provision of this Agreement will be effective only if in writing and signed by X. Similarly, no waiver by you of any right hereunder shall be effective unless in writing. A waiver of one instance shall not be deemed a waiver of any future instance.
</p>
       <h3 className='text-2xl font-extrabold pb-2'>20.4 Assignment:     </h3>
       <p className='pb-4'>You may not assign or transfer any of your rights or obligations under this Agreement to any other person without our prior written consent. The Card and your rights under this Agreement are personal to you. X, however, may assign or transfer its rights and obligations to another entity in connection with a corporate transaction or as part of a restructuring of the Card program (for example, if we partner with a new issuer or our business is acquired). We will notify you of any such assignment that results in a change of service provider or counterparty for you. This Agreement will inure to the benefit of and be binding upon each party’s permitted assigns.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>20.5 Relationship of Parties:  </h3>
       <p className='pb-4'>Nothing in this Agreement shall be deemed or is intended to be deemed, nor shall it cause, you and X to be treated as partners, joint ventures, or otherwise as joint associates for profit, or as the agent of the other. You and we are independent contractors; you are simply a Cardholder and we a service provider.</p>
       
       <h3 className='text-2xl font-extrabold pb-2'>20.6 Third-Party Beneficiaries:   </h3>
       <p className='pb-4'>Except as expressly provided in this Agreement, this Agreement does not confer any rights or remedies upon any person other than you and X. For clarity, the issuing bank or payment processor that X works with might be considered an intended third-party beneficiary of certain provisions (like those relating to liability and legal compliance), and they may enforce those provisions as required by their agreements with us, but overall this Agreement is for your and our benefit.</p>

       <h3 className='text-2xl font-extrabold pb-2'>20.7 Language:    </h3>
       <p className='pb-4'>The parties have requested and agreed that this Agreement and all documents related thereto be drawn up in English. (If this Agreement is translated into another language, the English version shall prevail to the extent of any inconsistency.)</p>
       
       
       <h3 className='text-2xl font-extrabold pb-2'>20.8 Headings and Interpretation:   </h3>
       <p className='pb-4'>The section headings in this Agreement are for convenience only and have no legal or contractual effect. Words importing the singular include the plural and vice versa. The words “including” or “for example” shall be read as “including, without limitation.”</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>20.9 Contact Information for Notices:   </h3>
       <p className='pb-4'>Formal legal notices to X (such as legal claims or dispute notices) should be sent to our mailing address: Metax Payments Ltd., Attn: Legal Department, 28 19628, 55A Avenue, Langley, British Columbia, V3A 3X2. We may require that you also send an email copy to legal@ myxpd.app for faster handling, but the physical notice address is the official point of contact for legal notices. Notices to you will be sent to the contact information (email or physical address) we have on file. It is your responsibility to keep that information updated.</p>

       
       <h3 className='text-2xl font-extrabold pb-2'>20.10 Regulatory Contact and Licensing Info:  </h3>
       <p className='pb-4'>MetaX is registered in Canada as a Money Services Business with FINTRAC (MSB Registration No. M23579425). Our activities include dealing in virtual currencies and issuing prepaid payment products. For any inquiries regarding our regulatory status, you may contact us or FINTRAC (www.fintrac-canafe.gc.ca). This Card is not issued by a bank, but under MSB regulations and card network rules; as such, funds are not covered by deposit insurance. However, MetaX maintains safeguarding measures for customer funds as required for prepaid instruments (for instance, segregating customer funds in trust accounts).</p>
       
       
       
        </p>

<div className='w-full h-[1px] bg-[rgba(0,0,0,0.5)] my-10'></div>
<div className='flex gap-2 pb-4 '>
<h3 className='text-2xl font-extrabold '>Last Updated:</h3>
       <p className='pb-4 text-xl underline underline-offset-1'> April 15, 2025. </p>
       
</div>
<p className='pb-4'>By using your X Card, you acknowledge that you have read and agree to this Agreement. If you require a copy of these Terms and Conditions or have any questions, please contact X Customer Service.</p>
       

   </main></section>
              
              </div>
  )
}

export default Terms;
