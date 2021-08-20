import { createStore, combineReducers } from "redux";
import firebase from "firebase";
import "firebase/firestore";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer, createFirestoreInstance } from "redux-firestore";
import { reducer as formReducer } from "redux-form";
// Import Custom Reducers Here

const firebaseConfig = {};

// react-redux-firebase-config
const rrfConfig = {
  userProfile: "users",
  useFirestoreProfile: true, // Firestore instead of Realtime DB
};

// Init firebase
firebase.initializeApp(firebaseConfig);
// Init firestore
firebase.firestore();

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  form: formReducer,
  // Add custom reducers here
});

// Create initial state
const initialState = {};

const store = createStore(rootReducer, initialState);

export const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

export default store;
