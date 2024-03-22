import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { fetchNotes } from '../../redux/note/noteSlice';
import { selectNoteData } from '../../redux/note/noteSelector';
import PageLoader from '../../components/Loader/PageLoader';


const Home: React.FC = () => {

  // on récupére le hook useDispatch pour executer le fetchNotes
  const dispatch: AppDispatch = useDispatch();

  // a chaque dispatch on remet a jour le fetchnotes
  useEffect(() => {
    dispatch(fetchNotes())
  }, [dispatch])


  const { loading, notes } = useSelector(selectNoteData);
  console.log('aaaaaaa', notes)

  return (

    loading ? <PageLoader /> :
      <div className='h-screen flex flex-col items-center justify-start bg-brown_dark pt-5'>
        <h1 className='text-3xl font-bold text-white py-3'>Toutes les notes</h1>
        <div className='flex flex-wrap justify-center md:justify-start'>
          {notes && notes.map((note) => (
            <div key={note.id} className='w-[250px] p-3 relative '>
              <div className='h-full bg-yellow p-3 rounded-lg flex flex-col '>
                <h2 className='text-xl font-bold text-brown'>{note.title}</h2>
                <p className='text-brown_dark flex-grow'>{note.description}</p>
                <div className='flex justify-between items-center mt-3'>
                  <p className='text-brown_dark text-sm '>
                    {new Date(note.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  )
}

export default Home