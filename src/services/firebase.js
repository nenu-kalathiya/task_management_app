import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyBvlAH7rZ3fHaW4X88bU9Q5Q-fVzU9l_qY",
    authDomain: "taskmanagementapp-86298.firebaseapp.com",
    projectId: "taskmanagementapp-86298",
    storageBucket: "taskmanagementapp-86298.appspot.com",
    messagingSenderId: "699680067415",
    appId: "1:699680067415:web:b2c91f3221e89532523812",
    measurementId: "G-ZWR7RLF492"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            const token = await getToken(messaging, { vapidKey: 'BFQbSEh07Roz5nouXewxUtMPQkg-1-G1hASL11ZifrsKGkppfgssG5l-lU3Tl5FR4XZRBYC6q1r5Sbe_1ilPap8' });
            if (token) {
                console.log('Token received:', token);
                return token;
            }
        } else {
            console.log('Notification permission denied.');
        }
    } catch (error) {
        console.error('Error getting token:', error);
    }
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        onMessage(messaging, (payload) => {
            console.log('Message received:', payload);
            resolve(payload);
        });
    });
