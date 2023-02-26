import React from "react";
import ErrorModal from "./ErrorModal";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorModal error={this.state.error} />;
    }

    return this.props.children;
  }
}
