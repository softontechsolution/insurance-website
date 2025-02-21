import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold'>QUALITY INSURANCE</h1>
      <ul className='flex'>
        <li className='p-4'>Buy a Policy</li>
        <li className='p-4'>Buy on Whatsapp</li>
        <li className='p-4'>Investor Relations</li>
        <li className='p-4'>Benefit Calculator</li>
        <li className='p-4'>About Us</li>
        <li className='p-4'>Privacy Policy</li>
      </ul>
    </div>
  )
}

export default Navbar