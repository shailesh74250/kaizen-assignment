import React from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from './ErrorBoundaryType'

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught in error boundary:', error, errorInfo)
  }
  render() {
    const { children } = this.props
    const { hasError } = this.state
    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return children
  }
}

export default ErrorBoundary;
