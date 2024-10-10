import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

// Lazy load
const Users = lazy(() => import('./pages/User'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/users' element={<Users />} />
        <Route path='*' element={<NotFound />} /> {/* 404 Route */}
      </Routes>
    </Suspense>
  )
}

export default App
