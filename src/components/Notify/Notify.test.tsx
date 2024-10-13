// Notify.test.tsx
import { Notify } from './Notify';
import { toast } from 'react-toastify'; // Mock toast from react-toastify

jest.mock('react-toastify', () => ({
  toast: {
    error: jest.fn(),
    info: jest.fn(),
    success: jest.fn(),
    default: jest.fn(),
  },
  ToastContainer: () => <div />,
}));

describe('Notify function', () => {
  const message = 'Test notification';

  test('should call toast.error when type is "error"', () => {
    Notify(message, 'error');
    expect(toast.error).toHaveBeenCalledWith(message, expect.any(Object));
  });

  test('should call toast.info when type is "info"', () => {
    Notify(message, 'info');
    expect(toast.info).toHaveBeenCalledWith(message, expect.any(Object));
  });

  test('should call toast.success when type is "success"', () => {
    Notify(message, 'success');
    expect(toast.success).toHaveBeenCalledWith(message, expect.any(Object));
  });
});
