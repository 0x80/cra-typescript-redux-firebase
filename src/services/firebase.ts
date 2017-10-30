import { default as fb } from 'firebase';
import * as firebaseui from 'firebaseui';

import { firebase as firebaseConfig } from '../config';

export const app = fb.initializeApp(firebaseConfig);
export const ui = new firebaseui.auth.AuthUI(fb.auth());
export const database = fb.database();

export default fb;
