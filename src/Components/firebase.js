import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCyoIsIpsnMGhmBboTfNBEvG275qitYKYA",
//   authDomain: "formiklib.firebaseapp.com",
//   projectId: "formiklib",
//   storageBucket: "formiklib.appspot.com",
//   messagingSenderId: "605884936385",
//   appId: "1:605884936385:web:c1512ea8e472c3ff132440",
// };
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
