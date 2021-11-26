
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCAcDLWvkXZ85QuOdwWPWVB8ZuKuBfSuBU",
      authDomain: "classtest-8cbd3.firebaseapp.com",
      projectId: "classtest-8cbd3",
      storageBucket: "classtest-8cbd3.appspot.com",
      messagingSenderId: "920402029844",
      appId: "1:920402029844:web:5169c577f44b4bb05ae601"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     
      });});}
getData();
