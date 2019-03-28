import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import { reducer as formReducer } from 'redux-form';
// Import Custom Reducers Here

const firebaseConfig = {};

// react-redux-firebase-config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreProfile: true // Firestore instead of Realtime DB
};

// Init firebase
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();
firestore.settings({});

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: formReducer
  // Add custom reducers here
});

//For everybody to be able to view the projects data and write to contact requests
firebase
  .auth()
  .signInAnonymously()
  .then(() => {})
  .catch(error => {});

// Create inital state
const initialState = {};
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(reactReduxFirebase(firebase))
);

export default store;
