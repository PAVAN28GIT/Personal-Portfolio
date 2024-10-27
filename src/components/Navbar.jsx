import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full flex flex-row justify-between bg-transparent text-white px-10 py-4 fixed top-0'>
        <h1 className='text-4xl font-medium'>Pk</h1>

        <ul className='flex flex-row ml-10 gap-8 items-center p-2 text-xl'>
            <li>Home</li>
            <li>Skills</li>
            <li>Projects</li>
        </ul>
        <button className='px-5 py-1 border-2 text-lg  hover:bg-white hover:text-black'>Contact</button>
    </nav>
  )
}

export default Navbar