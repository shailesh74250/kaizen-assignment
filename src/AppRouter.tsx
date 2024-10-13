import Loader from './components/Loader/Loader'
import globalStyles from './main.module.scss';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy load
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const UserDetails = lazy(() => import('./pages/UserDetails/UserDetails'));
const Users = lazy(() => import('./pages/UserList/UserList'));

const App: React.FC = () => {
  return (
    <div className={globalStyles['container']}>
      <Suspense fallback={<div className={globalStyles['loader']}><Loader color='#3498db' /></div>}>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/:id' element={<UserDetails />} />
          <Route path='*' element={<NotFound />} /> {/* 404 Route */}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
