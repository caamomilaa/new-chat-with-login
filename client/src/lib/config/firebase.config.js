// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDELZ4uZqCWNwSnbIGyAtw4VcsbCDH1u9w',
	authDomain: 'chat-with-login-4f4af.firebaseapp.com',
	projectId: 'chat-with-login-4f4af',
	storageBucket: 'chat-with-login-4f4af.firebasestorage.app',
	messagingSenderId: '739828839661',
	appId: '1:739828839661:web:5cbbfeec9e2b5a1faf88e4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
