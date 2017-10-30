export const facebook = {
  privileges: ['email', 'public_profile', 'user_work_history', 'user_friends'],
};

export const google = {
  clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  scopes: ['email', 'profile'],
  shouldFetchBasicProfile: true,
};

export const firebase = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env
    .REACT_APP_FIREBASE_DATABASE_NAME}.firebaseio.com`,
  debug: Boolean(process.env.REACT_APP_FIREBASE_DEBUG),
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  storageBucket: `gs://${process.env.REACT_APP_FIREBASE_BUCKET}.appspot.com`,
};

export const algolia = {
  apiKey: process.env.REACT_APP_ALGOLIA_API_KEY,
  appId: process.env.REACT_APP_ALGOLIA_APP_ID,
};

export default {
  algolia,
  facebook,
  firebase,
  google,
};
