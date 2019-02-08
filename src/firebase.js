import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAodcIWqop_j5vHN6CpNxhP8V-n1vHN4xc",
  databaseURL: "https://hackathonideas-6e61d.firebaseio.com/",
};
firebase.initializeApp(config);
export default firebase;
