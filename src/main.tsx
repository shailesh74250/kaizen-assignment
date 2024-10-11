import './main.scss'
import AppRouter from './AppRouter.tsx'
import Navbar from './components/Navbar/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Navbar />
          <AppRouter />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
