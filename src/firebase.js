import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAhLT4r4A0UR3eDdUo0OX7Pg0suKrDOh3U",
    authDomain: "goalcoach-9eb70.firebaseapp.com",
    databaseURL: "https://goalcoach-9eb70.firebaseio.com",
    projectId: "goalcoach-9eb70",
    storageBucket: "",
    messagingSenderId: "237644514020"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase
    .database()
    .ref('goals');

export const completeGoalRef = firebase
    .database()
    .ref('completeGoals');