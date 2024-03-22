import React from 'react'
import { Link } from 'react-router-dom'
import { API_IMAGE } from '../../constants/ApiConstant'
import LinkButton from '../Button/LinkButton'

const Navbar:React.FC = () => {
  return (
    <nav className='bg-brown'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link to="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
                <img src={`${API_IMAGE}/logo.png`} alt="Logo TODOList" className='h-8'/>
                <span className='text-2xl font-semibold text-white whitespace-nowrap'>TODOList</span>
            </Link>
            <div className='flex items-center space-x-3 rtl:space-x-reverse'>
                {/* TODO: appel du composant LinkButton */}
                <LinkButton to='/' label='Accueil' />
                <LinkButton to='/add-note' label='Ajouter une note' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar