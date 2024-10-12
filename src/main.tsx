import AppRouter from './AppRouter.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import Notification from './components/Notify/Notify';
import store from './store/store.ts';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Notification />
          <Navbar />
          <AppRouter />
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
