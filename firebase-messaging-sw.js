importScripts("https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js")


const firebaseConfig = {
    //REDACTED
  };

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);

// DEBUG ONLY: Explore the notification payload
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  });









