import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from
"https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyB7aPpKDdwZ_IHSvRrwr7O0Fb0-3XY2Lr4",
    authDomain: "tpf3-8c54d.firebaseapp.com",
    projectId: "tpf3-8c54d",
    storageBucket: "tpf3-8c54d.firebasestorage.app",
    messagingSenderId: "576440454740",
    appId: "1:576440454740:web:9725b91f73d4f7c3b167c1"
  };

  
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const provider = new GoogleAuthProvider();


const userSignIn = async () => {
  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    console.log(user);
  }).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
}

const userSignOut = async () => {
  signOut(auth).then(() => {
  alert("You have been signed out!")
  }).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  })
 }


 onAuthStateChanged(auth, (user) => {
  if(user)
  {
    alert("You are authenticated with google");

    const email = user.email;
    const userDisplayName = user.displayName;
    const splited = userDisplayName.split(" ");
    const name = splited[0];
    const lastName = splited[1];
    document.getElementById('name').value = name;
    document.getElementById('surname').value = lastName;
    document.getElementById('email').value = email;
  }
 })

const signInButton = document.querySelector("#signInButton");
const signOutButton = document.querySelector("#signOutButton");

 signInButton.addEventListener("click",
  userSignIn);
  signOutButton.addEventListener("click",
  userSignOut);