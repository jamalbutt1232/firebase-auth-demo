// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// alert("Connected");
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAgmmMilPqr82-e-0POhvAWUsxgYSlNUo",
  authDomain: "fir-auth-f8670.firebaseapp.com",
  databaseURL: "https://fir-auth-f8670-default-rtdb.firebaseio.com",
  projectId: "fir-auth-f8670",
  storageBucket: "fir-auth-f8670.appspot.com",
  messagingSenderId: "1014830942434",
  appId: "1:1014830942434:web:0ac6d01804d3ec2b1f76bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Event listener for signup button
document.getElementById("signup").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("User created:", user);
      // You can redirect the user to another page or update the UI accordingly
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error in user creation:", errorCode, errorMessage);
      // Display error message to the user
    });
});

document.getElementById("signin").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("User logged in:", user);
      // You can redirect the user to another page or update the UI accordingly
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error in user creation:", errorCode, errorMessage);
      // Display error message to the user
    });
});

console.log("Running");
