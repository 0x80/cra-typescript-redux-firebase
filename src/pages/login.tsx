import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  firebaseConnect,
  isLoaded,
  isEmpty,
  withFirebase,
} from 'react-redux-firebase';
// import GoogleButton from 'react-google-button' // optional

interface LoginPageProps {
  firebase: {
    login(options: {});
  };
  auth: {};
}
/*
export const LoginPage: React.SFC<LoginPageProps> = ({ firebase, auth }) => (
  <div>
    <button // <GoogleButton/> button can be used instead
      onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
    >
      Login With Google
    </button>
    <div>
      <h2>Auth</h2>
      {isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
        <span>Not Authed</span>
      ) : (
        <pre>{JSON.stringify(auth, null, 2)}</pre>
      )}
    </div>
  </div>
); */

export function LoginPage({ firebase, auth }: LoginPageProps) {
  return (
    <div>
      <button // <GoogleButton/> button can be used instead
        onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
      >
        Login With Google
      </button>
      <div>
        <h2>Auth</h2>
        {isLoaded(auth) ? (
          <span>Loading...</span>
        ) : isEmpty(auth) ? (
          <span>Not Authed</span>
        ) : (
          <pre>{JSON.stringify(auth, null, 2)}</pre>
        )}
      </div>
    </div>
  );
}

/* export class LoginPage extends React.Component<LoginPageProps, {}> {
  public render() {
    const { firebase, auth } = this.props;
    return (
      <div>
        <button // <GoogleButton/> button can be used instead
          onClick={() => firebase.login({ provider: 'google', type: 'popup' })}
        >
          Login With Google
        </button>
        <div>
          <h2>Auth</h2>
          {isLoaded(auth) ? (
            <span>Loading...</span>
          ) : isEmpty(auth) ? (
            <span>Not Authed</span>
          ) : (
            <pre>{JSON.stringify(auth, null, 2)}</pre>
          )}
        </div>
      </div>
    );
  }
}
 */
// export default compose(
//   withFirebase,
//   connect(({ firebase: { auth } }) => ({ auth }))
// )(LoginPage);

// export default compose(
//   firebaseConnect(),
//   connect(({ firebase: { auth } }) => ({ auth }))
// )(LoginPage);

// console.log('ConnectedLoginPage', ConnectedLoginPage);

// export default withFirebase(LoginPage);
// export default firebaseConnect()(LoginPage);
// export default connect(({ firebase: { auth } }) => ({ auth }))(
//   withFirebase(LoginPage)
// );
export default connect(({ firebase: { auth } }) => ({ auth }))(
  firebaseConnect()(LoginPage)
);
