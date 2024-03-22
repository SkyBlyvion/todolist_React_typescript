import React from 'react'
import LinkButton from '../Button/LinkButton'

const EmptyNote:React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold text-white py-3'>Aucunne note pour le moment</h1>
        <LinkButton to='/add-note' label='Ajouter une note' />
    </div>
  )
}

export default EmptyNote