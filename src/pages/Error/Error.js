import React from "react";
import classes from "./Error.module.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={classes.wrapper}>
          <h2>Something Went Wrong..</h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
