import React from 'react'
import { Link } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <nav className='bg-brown'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link to="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar