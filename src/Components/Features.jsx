import React from 'react'

function Usecase() {
  return (
    <div className='main relative mt-20  w-full h-full top-96'>
      <div className='text'>
      <div className='text-[#CAFF33] text-3xl ml-20 font-semibold'>Our Features</div>
      <div className='text-ms ml-20 mt-5 '> Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</div>
      </div>
      <div className='boxes ml-20 grid grid-flow-row mt-12'>
       <div className='smallbox w-56 h-52 bg-slate-900 grid grid-flow-row justify-center items-center'>
        <button className='w-36 h-10 mt-3 bg-[#CAFF33] text-xs text-black font-bold  flex items-center justify-center rounded-3xl p-5 '>Online Banking</button>
        <button className='w-36 h-10 bg-[#CAFF33] text-xs text-black font-bold  flex items-center justify-center rounded-3xl p-5 '>Financial Tools</button>
        <button className='w-36 h-10 bg-[#CAFF33] text-xs text-black font-bold  flex items-center justify-center rounded-3xl p-5 '>Customer Support</button>
       </div>
       <div className='Boxes absolute left-80 w-8/12 h-80'>
       <div className='row 1 w-full h-1/2 flex gap-10'>
      <div className='box1 w-2/5 h-full bg-slate-900'>
      <div className='text m-5 grid grid-flow-col'>
      24/7 Account Access
     <span className='relative left-11'> <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.50007 19.9166L19.9167 1.49994M19.9167 1.49994V19.1799M19.9167 1.49994L2.23673 1.49994" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>
      <div className='text contain mb-7 mx-5 text-xs'>
      Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.
      </div>
        </div>
        <div className='box2 w-2/5 h-full bg-slate-900'>
        <div className='text m-5 grid grid-flow-col'>
        Mobile Banking App
     <span className='relative left-11'> <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.50007 19.9166L19.9167 1.49994M19.9167 1.49994V19.1799M19.9167 1.49994L2.23673 1.49994" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>
      <div className='text contain mb-7 mx-5 text-xs'>
      Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.
      </div>
        </div>
        </div> 
        <div className='Boxes absolute mt-7 w-full  '>
       <div className='row 1 w-full h-1/2 flex gap-10'>
      <div className='box1 w-2/5 h-full bg-slate-900'>
      <div className='text m-5 grid grid-flow-col'>
      Secure Transactions
     <span className='relative left-11'> <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.50007 19.9166L19.9167 1.49994M19.9167 1.49994V19.1799M19.9167 1.49994L2.23673 1.49994" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>
      <div className='text contain mb-7 mx-5 text-xs'>
      Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.
      </div>
        </div>
        <div className='box2 w-2/5 h-full bg-slate-900'>
        <div className='text m-5 grid grid-flow-col'>
        Bill Pay and Transfers
     <span className='relative left-11'> <svg width="18" height="18" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.50007 19.9166L19.9167 1.49994M19.9167 1.49994V19.1799M19.9167 1.49994L2.23673 1.49994" stroke="#CAFF33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
      </div>
      <div className='text contain mb-7 mx-5 text-xs'>
      Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.
      </div>
        </div>
        </div> </div>
       </div>
       </div>
      </div>
  )
}

export default Usecase
