    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
    import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js"; 
    
    


    
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyBIoux4-HR_GEr72Sj0RbyctQBTBZkXONE",
          authDomain: "getsmart-189d9.firebaseapp.com",
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
        const form =document.getElementById("signinForm")
        
        
        
        
        
        
        document.getElementById("login-btn").addEventListener('click',()=>{
          const email1=document.getElementById("login-email").value;
          const password1= document.getElementById("login-password").value;
          signInWithEmailAndPassword(auth, email1, password1)
                .then((userCredential) => {
                // Signed in 
                userUI();
                
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("unavalable user");
                // ..
              });
        })

        export function userUI(){
          window.location.href = "../signedIn.html";
          const profil= document.getElementById("top")
          const li= document.createElement("li");
          const photo= document.createElement("img");
          li.classList.add("nav-item", "navbar-brand", "brand" ,"logo");
          photo.classList.add("profil1");
          photo.src="../photos/profil.png";
          li.addEventListener('mouseover',()=>{
            console.log("heyy")
          })
          li.appendChild(photo);
          profil.appendChild(li);
          const title= document.getElementById("title");
          title.classList.add("titleS");
        }