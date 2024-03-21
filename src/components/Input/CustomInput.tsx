import React, { ChangeEvent } from 'react'
//on définit les types de props que l'on attends
interface CustomInputProps {
    state: string;
    label: string;
    type: string;
    callable: (e: ChangeEvent<HTMLInputElement>) => void;

}
const CustomInput:React.FC<CustomInputProps> = ({state, label, type, callable}) => {
  return (
    <div className='mb-3'>
        <label htmlFor={state} className='block text-white font-bold mb-2' >{label}</label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline' type={type} value={state} onChange={callable}/>
    </div>
  )
}

export default CustomInput