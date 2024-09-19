importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyBvlAH7rZ3fHaW4X88bU9Q5Q-fVzU9l_qY",
    authDomain: "taskmanagementapp-86298.firebaseapp.com",
    projectId: "taskmanagementapp-86298",
    storageBucket: "taskmanagementapp-86298.appspot.com",
    messagingSenderId: "699680067415",
    appId: "1:699680067415:web:b2c91f3221e89532523812",
    measurementId: "G-ZWR7RLF492"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Background Messages Handle Karna
messaging.onBackgroundMessage((payload) => {
    console.log('Background message received:', payload);
    const title = payload.notification.title;
    const options = {
        body: payload.notification.body,
        icon: '/firebase-logo.png'
    };
    self.registration.showNotification(title, options);
});
