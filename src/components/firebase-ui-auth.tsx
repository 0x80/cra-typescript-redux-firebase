import React, { Component } from 'react';
import 'firebaseui/dist/firebaseui.css';

interface FirebaseUIAuthProps {
  ui: any;
  uiConfig: any;
}

class FirebaseUIAuth extends Component<FirebaseUIAuthProps, {}> {
  private container: HTMLDivElement | null;

  public componentDidMount() {
    const { ui, uiConfig } = this.props;
    ui.start(this.container, uiConfig);
  }

  public componentWillUnmount() {
    const { ui } = this.props;
    ui.reset();
  }

  public render() {
    return (
      <div
        ref={el => {
          this.container = el;
        }}
      />
    );
  }
}

export default FirebaseUIAuth;
