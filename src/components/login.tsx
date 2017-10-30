import React, { Component } from 'react';
import FirebaseUIAuth from '../components/firebase-ui-auth';
import firebase, { ui } from '../services/firebase';

const uiConfig = {
  // Called when the user has been successfully signed in.
  callbacks: {
    signInSuccess: (currentUser, credential, redirectUrl) => {
      // Do not redirect.
      return false;
    },
  },
  // Opens IDP Providers sign-in flow in a popup.
  signInFlow: 'popup',
  signInOptions: [
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: ['https://www.googleapis.com/auth/plus.login'],
    },
    {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: ['public_profile', 'email', 'user_likes', 'user_friends'],
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // Whether the display name should be displayed in Sign Up page.
      requireDisplayName: true,
    },
  ],
  // Terms of service url.
  tosUrl: 'https://www.google.com',
};

interface LoginState {
  loading: boolean;
  user: firebase.UserInfo | null;
}

class Login extends Component<{}, LoginState> {
  public state = {
    loading: true,
    user: null,
  };

  public componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loading: false, user });
    });
  }

  public render() {
    const { user, loading } = this.state;

    return (
      <div>
        <h3>FirebaseUI Login</h3>
        {loading ? (
          <div id="loading">Loading...</div>
        ) : user ? (
          <div>
            <div id="user-info">
              <div id="photo-container">
                <img id="photo" src={user.photoURL} alt={user.displayName} />
              </div>
              <div>{user.displayName}</div>
              <div>{user.email}</div>
            </div>
            <p>
              <button
                onClick={() => {
                  firebase.auth().signOut();
                }}
              >
                Sign Out
              </button>
              <button onClick={this.deleteAccount}>Delete account</button>
            </p>
          </div>
        ) : (
          <div>
            <h4>You are signed out.</h4>
            <FirebaseUIAuth ui={ui} uiConfig={uiConfig} />
          </div>
        )}
      </div>
    );
  }

  private deleteAccount = () => {
    firebase
      .auth()
      .currentUser.delete()
      .catch(error => {
        if (error.code === 'auth/requires-recent-login') {
          // The user's credential is too old. She needs to sign in again.
          firebase
            .auth()
            .signOut()
            .then(() => {
              // The timeout allows the message to be displayed after the UI has
              // changed to the signed out state.
              setTimeout(() => {
                alert('Please sign in again to delete your account.');
              }, 1);
            });
        }
      });
  };
}

export default Login;
