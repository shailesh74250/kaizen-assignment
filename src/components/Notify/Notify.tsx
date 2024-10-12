import React from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotifyProps } from './NotifyProps';

const defaultOptions = {
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: Bounce,
}

export const Notify = (message: string, type?: NotifyProps) => {
  switch(type) {
    case 'error':
      toast.error(message, defaultOptions);
      break;
    case 'info':
      toast.info(message, defaultOptions);
      break;
    case 'success': 
      toast.success(message, defaultOptions);
      break;
    default: 
      toast(message, defaultOptions);
  }; 
};

const Notification: React.FC = () => {
  return <ToastContainer />;
};

export default React.memo(Notification);