import Loader from './components/Loader'
import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// Lazy load
const NotFound = lazy(() => import('./pages/NotFound'))
const UserDetails = lazy(() => import('./pages/UserDetails'))
const Users = lazy(() => import('./pages/UserList'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader size='large' color='#3498db' />}>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetails />} />
        <Route path='*' element={<NotFound />} /> {/* 404 Route */}
      </Routes>
    </Suspense>
  )
}

export default App
