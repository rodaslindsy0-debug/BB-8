// Importa Firebase dentro del service worker
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js");

// Configuración COMPLETA de Firebase (obligatorio)
firebase.initializeApp({
  apiKey: "AIzaSyDH-Ii_v4nHkBv1-0exU7kvyrcK-vf0SnU",
  authDomain: "maicol-114de.firebaseapp.com",
  projectId: "maicol-114de",
  storageBucket: "maicol-114de.firebasestorage.app",
  messagingSenderId: "770237885252",
  appId: "1:770237885252:web:a4d98332eb4c74a4f30511",
  measurementId: "G-Z8V3X8W8G1"
});

// Inicializa messaging
const messaging = firebase.messaging();

// Listener de mensajes cuando la app está cerrada
messaging.onBackgroundMessage((payload) => {
  console.log("Mensaje recibido en segundo plano:", payload);

  const notificationTitle = payload.notification?.title || "Alerta médica";
  const notificationOptions = {
    body: payload.notification?.body || "Tienes una nueva alerta.",
   // icon: "/BB-8/icon.png" // opcional
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

