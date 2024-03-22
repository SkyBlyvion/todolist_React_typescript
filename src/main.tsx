import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { AuthContextProvider } from './contexts/AuthContext.tsx'
import { SessionContextProvider } from './contexts/SessionContext.tsx'
import AppRouter from './routers/AppRouter.tsx'
import { Provider } from 'react-redux'
import store from './redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider> {/* contexte d'authentification */}
      <SessionContextProvider> {/* contexte de session */}
        <Provider store={store}> {/* Accés au store */}
          <AppRouter /> {/* routeur de l'appli, point d'entrée */}
        </Provider>
      </SessionContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
