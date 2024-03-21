import React from 'react'
import { useSessionContext } from '../contexts/SessionContext';
import { RouterProvider } from 'react-router-dom';
import OnlineRouter from './OnlineRouter';
import OfflineRouter from './OfflineRouter';

const AppRouter:React.FC = () => {
    //récuperation de l'état de la session
    const {inSession} = useSessionContext();
    console.log('inSession', inSession)
  return (
    <RouterProvider router={inSession ? OnlineRouter : OfflineRouter} />

  )
}

export default AppRouter