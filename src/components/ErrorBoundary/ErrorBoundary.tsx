import Button from '../Button/Button';
import styles from './ErrorBoundary.module.scss';
import { Component, ErrorInfo } from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundaryType';
import { SOMETHING_WENT_WRONG } from '../../utils/constants';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error Boundary caught an error', error, errorInfo);
  }

  handleResetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    const { hasError } = this.state;
    const { children, fallback } = this.props;
    if (hasError) {
      return (
        <div className={styles.errorBoundary}>
          {fallback || (
            <div>
              <h2>{SOMETHING_WENT_WRONG}</h2>
              <Button onClick={this.handleResetError} label='Try Again' />
            </div>
          )}
        </div>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
