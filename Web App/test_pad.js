// JavaScript file for the web page "World Peace Issue Tracker"
// Created by Harrison Kong
// Copyright (C) Coursera 2020

// Your web app's Firebase configuration
// REPLACE THIS WITH YOUR CONFIG
var firebaseConfig = {
    apiKey: "AIzaSyC-o2qpD_cDmJMwGO-zVM-iYjV-pOGtKks",
    authDomain: "my-demo-80558.firebaseapp.com",
    databaseURL: "https://my-demo-80558.firebaseio.com",
    projectId: "my-demo-80558",
    storageBucket: "my-demo-80558.appspot.com",
    messagingSenderId: "967106302588",
    appId: "1:967106302588:web:c28fda8fe070e3ed012ff9",
    measurementId: "G-7RS3C9J1DH"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Paste the web app's configuration above this line
// Our code starts below

// GET A ROOT REFERENCE to issues HERE (type along)
// const rootRef = firebase.database().ref("issues/");
// Task 3 ------------------------------------------

// rootRef.push ({
//   description: "Logo does not show up on screen 3",
//   resolved: "yes",
//   severity: "minor"
// });
//
// rootRef.push ({
//   description: "Screen flashes on save",
//   resolved: "no",
//   severity: "moderate"
// });

// Task 6 ------------------------------------------

// var recordRef = firebase.database().ref("issues/change-me");
//
// recordRef.update ({
//    "resolved": "yes"
// });

// Task 7 ------------------------------------------

// var recordRef = firebase.database().ref("issues/delete-me");
//
// recordRef.remove()
//    .catch(function(error) {
//      alert("Delete failed: " + error.message)
//    });
