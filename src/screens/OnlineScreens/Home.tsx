import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchNotes } from '../../redux/note/noteSlice';
import { selectNoteData } from '../../redux/note/noteSelector';


const Home:React.FC = () => {
  
  // on récupére le hook useDispatch pour executer le fetchNotes
  const dispatch:AppDispatch = useDispatch();
  
  // a chaque dispatch on remet a jour le fetchnotes
  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])
  
  
  const { loading, notes } = useSelector(selectNoteData);
  console.log('aaaaaaa', notes)

  return (
    <div>Home</div>
  )
}

export default Home