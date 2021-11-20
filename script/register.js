    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
    import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
    import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-database.js";
    

    


        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyBIoux4-HR_GEr72Sj0RbyctQBTBZkXONE",
          authDomain: "getsmart-189d9.firebaseapp.com",
          databaseURL:"https://getsmart-189d9-default-rtdb.firebaseio.com/",
          projectId: "getsmart-189d9",
          storageBucket: "getsmart-189d9.appspot.com",
          messagingSenderId: "639792771948",
          appId: "1:639792771948:web:62e792bd813d3c08827949",
          measurementId: "G-2G48W8TJF4"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const auth = getAuth(app);
        function writeUserData(email, name) {
          const db = getDatabase();
          set(ref(db, 'users/' + email), {
            email: email,
            username: name,
          });
        }
        document.getElementById("register-btn").addEventListener('click',function(){
          const email=document.getElementById("email").value;
          const name=document.getElementById("name").value;
          const password= document.getElementById("password").value;
          
          createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
                window.location.href = "../signedIn.html";
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage)
                alert("user already exists");
                // ..
              });
        })

        