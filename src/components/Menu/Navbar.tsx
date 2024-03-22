import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { API_IMAGE } from '../../constants/ApiConstant'
import LinkButton from '../Button/LinkButton'
import { RiLogoutCircleRLine } from 'react-icons/ri'
import { useAuthContext } from '../../contexts/AuthContext'

const Navbar:React.FC = () => {
    // on recupére le méthode signOut() depus le constext
    const { signOut } = useAuthContext();
    // on recupere le hook de navigation pour rediriger
    const navigate = useNavigate();
    // méthode pour se deconnecter
    const handleLogout = () => {
        signOut();
        navigate('/');
    }
  return (
    <nav className='bg-brown'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link to="/" className='flex items-center space-x-3 rtl:space-x-reverse'>
                <img src={`${API_IMAGE}/logo.png`} alt="Logo TODOList" className='h-8'/>
                <span className='text-2xl font-semibold text-white whitespace-nowrap'>TODOList</span>
            </Link>
            <div className='flex items-center space-x-3 rtl:space-x-reverse'>
                <LinkButton to='/' label='Accueil' />
                <LinkButton to='/add-note' label='Ajouter une note' />
                <RiLogoutCircleRLine onClick={()=>{handleLogout()}} className='text-3xl text-yellow hover:text-yellow_hover cursor-pointer' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar